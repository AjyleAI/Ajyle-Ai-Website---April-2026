import type { VercelRequest, VercelResponse } from '@vercel/node';

const MC_API_KEY  = process.env.MAILCHIMP_API_KEY!;
const MC_LIST_ID  = "588e741926";
const MC_DC       = "us21";  // datacenter from API key suffix

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, tags } = req.body ?? {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!MC_API_KEY) {
    console.error('MAILCHIMP_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Subscription service not configured' });
  }

  const url = `https://${MC_DC}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members`;

  const payload = {
    email_address: email,
    status: "subscribed",
    merge_fields: {
      FNAME: firstName ?? "",
    },
    tags: Array.isArray(tags) ? tags : (tags ? [tags] : []),
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`anystring:${MC_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json() as any;

    // 200 = new subscriber, 400 with "Member Exists" = already subscribed — both are fine
    if (response.ok || data?.title === 'Member Exists') {
      // If already a member, update their tags via PATCH
      if (data?.title === 'Member Exists') {
        const md5 = require('crypto').createHash('md5').update(email.toLowerCase()).digest('hex');
        const tagUrl = `https://${MC_DC}.api.mailchimp.com/3.0/lists/${MC_LIST_ID}/members/${md5}/tags`;
        await fetch(tagUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Basic ${Buffer.from(`anystring:${MC_API_KEY}`).toString('base64')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ tags: payload.tags.map((t: string) => ({ name: t, status: 'active' })) }),
        });
      }
      return res.status(200).json({ success: true });
    }

    console.error('Mailchimp error:', JSON.stringify(data));
    return res.status(500).json({ error: data?.detail ?? 'Subscription failed' });

  } catch (err: any) {
    console.error('Subscribe exception:', err?.message ?? err);
    return res.status(500).json({ error: 'Subscription failed' });
  }
}
