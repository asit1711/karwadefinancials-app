const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const formatMessageHtml = (value = '') => escapeHtml(value).replace(/\n/g, '<br />');

const buildAdminTemplate = ({ name, email, phone, subject, message, submittedAt }) => `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f7fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px;background:#ffffff;border:1px solid #dce4ed;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:22px 24px;background:linear-gradient(120deg,#0d5c63,#1d7874);color:#ffffff;">
                <h1 style="margin:0;font-size:22px;line-height:1.2;">New Contact Form Inquiry</h1>
                <p style="margin:8px 0 0;font-size:13px;opacity:0.95;">Karwade Financial Website</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px 10px;">
                <p style="margin:0 0 14px;font-size:14px;color:#475569;">A visitor submitted a new inquiry with the details below.</p>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:13px;color:#64748b;width:130px;">Name</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:13px;color:#64748b;">Email</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(email)}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:13px;color:#64748b;">Phone</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(phone || 'Not provided')}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:13px;color:#64748b;">Subject</td>
                    <td style="padding:10px 0;border-bottom:1px solid #e6edf5;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(subject || 'General Inquiry')}</td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;font-size:13px;color:#64748b;">Submitted</td>
                    <td style="padding:10px 0;font-size:14px;color:#0f172a;font-weight:600;">${escapeHtml(submittedAt)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 24px 24px;">
                <div style="background:#f8fbff;border:1px solid #d9e5f0;border-radius:12px;padding:14px;">
                  <p style="margin:0 0 8px;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.04em;">Message</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#1f2937;">${formatMessageHtml(message)}</p>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

const buildVisitorTemplate = ({ name, subject, message }) => `
<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f3f7fb;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3f7fb;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #dce4ed;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:22px 24px;background:linear-gradient(120deg,#0d5c63,#1d7874);color:#ffffff;">
                <h1 style="margin:0;font-size:21px;line-height:1.2;">Thanks for contacting Karwade Financial</h1>
                <p style="margin:8px 0 0;font-size:13px;opacity:0.95;">We have received your message.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 24px;">
                <p style="margin:0 0 10px;font-size:14px;color:#334155;">Hi ${escapeHtml(name)},</p>
                <p style="margin:0 0 14px;font-size:14px;color:#475569;line-height:1.7;">
                  Thank you for reaching out. Our team will review your request and get back to you shortly.
                </p>
                <div style="background:#f8fbff;border:1px solid #d9e5f0;border-radius:12px;padding:14px;">
                  <p style="margin:0 0 8px;font-size:12px;color:#64748b;text-transform:uppercase;letter-spacing:0.04em;">Your Inquiry</p>
                  <p style="margin:0 0 8px;font-size:14px;color:#0f172a;"><strong>Subject:</strong> ${escapeHtml(subject || 'General Inquiry')}</p>
                  <p style="margin:0;font-size:14px;line-height:1.7;color:#1f2937;">${formatMessageHtml(message)}</p>
                </div>
                <p style="margin:14px 0 0;font-size:13px;color:#64748b;line-height:1.6;">
                  If your request is urgent, call us at +91 9822237375.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

// POST /api/contact - Handle contact form submissions
router.post('/', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please provide name, email, and message' 
    });
  }

  try {
    // Configure email transporter (optional - requires email setup)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const smtpPort = Number(process.env.EMAIL_PORT) || 587;
      const recipientEmail = process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER;
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const submittedAt = new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      const adminMailOptions = {
        from: `"Karwade Financial Website" <${process.env.EMAIL_USER}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `Contact Form: ${subject || 'New Inquiry'}`,
        text:
          `New Contact Form Submission\n\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone || 'Not provided'}\n` +
          `Subject: ${subject || 'General Inquiry'}\n` +
          `Submitted: ${submittedAt}\n\n` +
          `Message:\n${message}`,
        html: buildAdminTemplate({ name, email, phone, subject, message, submittedAt })
      };

      await transporter.sendMail(adminMailOptions);

      const visitorMailOptions = {
        from: `"Karwade Financial" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'We received your message - Karwade Financial',
        text:
          `Hi ${name},\n\n` +
          `Thank you for contacting Karwade Financial. We have received your message and will respond shortly.\n\n` +
          `Subject: ${subject || 'General Inquiry'}\n` +
          `Message: ${message}\n\n` +
          `For urgent support, call +91 9822237375.`,
        html: buildVisitorTemplate({ name, subject, message })
      };

      await transporter.sendMail(visitorMailOptions);
    }

    // Log the inquiry (in production, save to database)
    console.log('Contact Form Submission:', { name, email, phone, subject, message });

    res.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
    
  }
});

module.exports = router;
