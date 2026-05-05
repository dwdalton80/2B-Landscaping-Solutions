/**
 * Email Service
 * Sends emails using the Manus built-in email service
 */

// Using native fetch available in Node.js 18+

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

/**
 * Send an email using the Manus email service
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const forgeUrl = process.env.BUILT_IN_FORGE_API_URL;
    const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

    if (!forgeUrl || !forgeKey) {
      console.error("Email service not configured");
      return false;
    }

    const response = await fetch(`${forgeUrl}/v1/email/send`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${forgeKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: options.to,
        subject: options.subject,
        html: options.html,
        text: options.text || options.html.replace(/<[^>]*>/g, ""),
      }),
    });

    if (!response.ok) {
      console.error("Email send failed:", response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

/**
 * Format contact form submission as HTML email
 */
export function formatContactEmailHtml(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a5f3f; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1a5f3f; }
          .value { color: #555; margin-top: 5px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Estimate Request</h1>
            <p>A customer has submitted an estimate request from your website</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
            </div>
            ` : ""}
            ${data.service ? `
            <div class="field">
              <div class="label">Service Requested:</div>
              <div class="value">${escapeHtml(data.service)}</div>
            </div>
            ` : ""}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
            </div>
            <div class="footer">
              <p>This email was sent from your 2B Landscaping website contact form.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Escape HTML special characters
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
