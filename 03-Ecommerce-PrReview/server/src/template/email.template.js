const mailTemplate = (newUser) => {

  `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Welcome Email</title>
    </head>
    <body style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
  
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7fb;padding:40px 0;">
        <tr>
          <td align="center">
  
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
  
              <!-- Header -->
              <tr>
                <td align="center" style="background:#111827;padding:30px;">
                  <h1 style="color:#ffffff;margin:0;">
                    Welcome 
                  </h1>
                </td>
              </tr>
  
              <!-- Content -->
              <tr>
                <td style="padding:40px 30px;">
                  <h2 style="color:#111827;margin-top:0;">
                    Hi ${newUser.name},
                  </h2>
  
                  <p style="font-size:16px;line-height:1.7;color:#4b5563;">
                    We're excited to have you on board.
                    Your account has been successfully created and you're now ready to explore all the features available on our platform.
                  </p>
  
                  <p style="font-size:16px;line-height:1.7;color:#4b5563;">
                    If you have any questions, feel free to reach out to our support team anytime.
                  </p>
  
                  <div style="text-align:center;margin:35px 0;">
                    <a
                      href="https://yourwebsite.com"
                      style="
                        background:#2563eb;
                        color:#ffffff;
                        text-decoration:none;
                        padding:14px 28px;
                        border-radius:8px;
                        display:inline-block;
                        font-weight:bold;
                      "
                    >
                      Get Started
                    </a>
                  </div>
  
                  <p style="font-size:14px;color:#6b7280;">
                    Thanks,<br/>
                    The Team
                  </p>
                </td>
              </tr>
  
              <!-- Footer -->
              <tr>
                <td align="center" style="padding:20px;background:#f9fafb;border-top:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:12px;color:#9ca3af;">
                    © ${new Date().getFullYear()} Your Company. All rights reserved.
                  </p>
                </td>
              </tr>
  
            </table>
  
          </td>
        </tr>
      </table>
  
    </body>
    </html>
    `
}

module.exports = mailTemplate