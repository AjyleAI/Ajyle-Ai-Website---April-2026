import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

// ============================================================
// Solopreneurs AI Academy — Stripe → Mailchimp webhook
// ============================================================
// Triggered by Stripe on checkout.session.completed.
// Verifies signature, filters for Academy-priced purchases,
// then adds subscriber to Mailchimp audience with tags.
//
// Env vars required (set in Vercel dashboard):
//   MAILCHIMP_API_KEY               (already set)
//   MAILCHIMP_ACADEMY_LIST_ID       (audience ID for "AI Bootcamp 101")
//   STRIPE_ACADEMY_WEBHOOK_SECRET   (from Stripe when creating webhook)
// ============================================================

const MC_API_KEY = process.env.MAILCHIMP_API_KEY!;
const MC_LIST_ID = process.env.MAILCHIMP_ACADEMY_LIST_ID!;
const MC_DC = 'us21';
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_ACADEMY_WEBHOOK_SECRET!;

const ACADEMY_TAG = 'Solo Academy';
const ACADEMY_MONTHLY_PENCE = 6900;
const ACADEMY_ANNUAL_PENCE = 66200;

export const config = {
  api: { bodyParser: false },
};

async function readRawBody(req: VercelRequest): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : (chunk as Buffer));
  }
  return Buffer.concat(chunks);
}

function verifyStripeSignature(payload: Buffer, sigHeader: string, secret: string): boolean {
  const elements = sigHeader.split(',');
  const parts: Record<string, string> = {};
  for (const el of elements) {
    const [k, v] = el.split('=');
    if (k && v) parts[k] = v;
  }
  const timestamp = parts['t'];
  if (!timestamp) return false;

  const age = Math.floor(Date.now() / 1000) - parseInt(timestamp, 10);
  if (isNaN(age) || Math.abs(age) > 300) return false;

  const signedPayload = `${timestamp}.${payload.toString('utf8')}`;
  const expected = crypto.createHmac('sha256', secret).update(signedPayload).digest('hex');

  const v1Sigs = elements
    .filter(e => e.startsWith('v1='))
    .map(e => e.substring(3));

  return v1Sigs.some(sig => {
    try {
      const a = Buffer.from(sig, 'hex');
      const b = Buffer.from(expected, 'hex');
      return a.length === b.length && crypto.timingSafeEqual(a, b);
    } catch {
      return false;
    }
  });
}

async function mailchimpUpsertMember(email: string, firstName: string): Promise<boolean> {
  const md5 = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  const url = `https://${MC_DC}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members/${md5}`;
  const auth = `Basic ${Buffer.from(`anystring:${MC_API_KEY}`).toString('base64')}`;

  const res = await fetch(url, {
    method: 'PUT',
    headers: { Authorization: auth, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_address: email,
      status_if_new: 'subscribed',
      merge_fields: { FNAME: firstName },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Mailchimp upsert failed:', res.status, err);
    return false;
  }
  return true;
}

async function mailchimpAddTags(email: string, tags: string[]): Promise<boolean> {
  const md5 = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
  const url = `https://${MC_DC}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members/${md5}/tags`;
  const auth = `Basic ${Buffer.from(`anystring:${MC_API_KEY}`).toString('base64')}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: auth, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      tags: tags.map(name => ({ name, status: 'active' })),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error('Mailchimp tag failed:', res.status, err);
    return false;
  }
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!MC_API_KEY || !MC_LIST_ID || !STRIPE_WEBHOOK_SECRET) {
    console.error('Missing env vars:', {
      MC_API_KEY: !!MC_API_KEY,
      MC_LIST_ID: !!MC_LIST_ID,
      STRIPE_WEBHOOK_SECRET: !!STRIPE_WEBHOOK_SECRET,
    });
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  const sig = req.headers['stripe-signature'] as string | undefined;
  if (!sig) {
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  const rawBody = await readRawBody(req);
  if (!verifyStripeSignature(rawBody, sig, STRIPE_WEBHOOK_SECRET)) {
    console.error('Signature verification failed');
    return res.status(400).json({ error: 'Invalid signature' });
  }

  let event: any;
  try {
    event = JSON.parse(rawBody.toString('utf8'));
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true, ignored: event.type });
  }

  const session = event.data?.object ?? {};
  const amount: number = session.amount_total ?? 0;
  const email: string | undefined =
    session.customer_details?.email ?? session.customer_email;
  const fullName: string = session.customer_details?.name ?? '';

  if (amount !== ACADEMY_MONTHLY_PENCE && amount !== ACADEMY_ANNUAL_PENCE) {
    console.log(`Ignoring non-Academy purchase, amount=${amount}`);
    return res.status(200).json({ received: true, ignored: 'non-academy amount' });
  }

  if (!email) {
    console.error('No email in checkout session');
    return res.status(400).json({ error: 'No email in session' });
  }

  const firstName = fullName.split(' ')[0] ?? '';



  const upserted = await mailchimpUpsertMember(email, firstName);
  if (!upserted) {
    return res.status(500).json({ error: 'Failed to add subscriber to Mailchimp' });
  }

  const tagged = await mailchimpAddTags(email, [ACADEMY_TAG]);
  if (!tagged) {
    return res.status(500).json({ error: 'Failed to tag subscriber in Mailchimp' });
  }

  console.log(`Academy signup: ${email}`);
  return res.status(200).json({
    success: true,
    email,
    tag: ACADEMY_TAG,
  });
}
