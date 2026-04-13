import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Email service not configured. RESEND_API_KEY missing.' });
  }

  const resend = new Resend(apiKey);

  const { name, email, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Ajyle AI Website <noreply@ajyle.ai>',
      to: 'info@ajyle.ai',
      subject: 'Website Enquiry',
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1C2D5C;">New Website Enquiry</h2>
          <hr style="border-color: #DDE4EF;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="background: #F4F8FC; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
          <hr style="border-color: #DDE4EF;" />
          <p style="color: #8C9AB1; font-size: 12px;">Sent via ajyle.ai contact form. Reply directly to respond to ${name}.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', JSON.stringify(error));
      return res.status(500).json({ error: error.message, detail: error });
    }

    console.log('Email sent successfully:', data?.id);
    return res.status(200).json({ success: true, id: data?.id });
  } catch (error: any) {
    console.error('Resend exception:', error?.message ?? error);
    return res.status(500).json({ error: error?.message ?? 'Failed to send email' });
  }
}
