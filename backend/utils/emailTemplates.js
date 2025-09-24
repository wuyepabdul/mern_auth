export const welcomeTemplate = (name) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Welcome Email</title>
    <style>
      /* Base reset */
      body { margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif; color:#333; }
      table { border-collapse:collapse; }
      a { text-decoration:none; }

      /* Container */
      .container { width:100%; max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08); }
      .inner { padding:24px; }

      /* Headings & text */
      h1 { margin:0 0 16px 0; font-size:22px; color:#111; }
      p { margin:0 0 16px 0; line-height:1.5; }

      /* Code box */
      .code-box { display:block; width:100%; text-align:center; padding:16px; border-radius:8px; background:#111; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

       /* Welcome Heading */
      .welcome { display:block; width:100%; text-align:center; padding:16px; background:#0ea5a0; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

      /* Button */
      .btn { display:inline-block; background:#0ea5a0; color:#ffffff; padding:14px 28px; border-radius:6px; font-weight:bold; font-size:16px; }

      /* Footer */
      .footer { font-size:13px; color:#666; text-align:center; padding:20px; }

      /* Responsive adjustments */
      @media only screen and (max-width:480px) {
        .inner { padding:16px !important; }
        h1 { font-size:18px !important; }
        .code-box { font-size:22px !important; letter-spacing:4px !important; padding:12px !important; }
        .welcome {  padding:12px !important;  font-size:22px !important; letter-spacing:4px !important; }
        .btn { display:block !important; width:100% !important; text-align:center !important; padding:14px 0 !important; font-size:16px !important; }
      }
    </style>
  </head>
  <body>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:20px 0;">
          <table class="container" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="inne">
                <h1 class="welcome ">   Verification Successful </h1>
                <p>Hi <strong>${name}</strong>,</p>
                <p>Welcome to MERN Advanced Authentication. </p>

                <p>We’re excited to have you on board! Your account has been created successfully, and you’re all set to.</p>

                <p style="text-align:center;">
                  <a href="localhost:3000/dashboard" class="btn" target="_blank" rel="noopener">Visit our home page </a>
                </p>

                <p>If the button doesn’t work, copy and paste this link into your browser:</p>
                <p style="word-break:break-word;">
                  <a href="localhost:3000/dashboard" style="color:#0ea5a0;">localhost:3000/dashboard</a>
                </p>
                  <p>Best Regards</p>
                  <p>Your App Team</p>
                <div class="footer">

                  <p>This is an automated message, please do not reply to the email.</p>
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
};

export const verificationTemplate = (name, verificationCode) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Verify your account</title>
    <style>
      /* Base reset */
      body { margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif; color:#333; }
      table { border-collapse:collapse; }
      a { text-decoration:none; }

      /* Container */
      .container { width:100%; max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08); }
      .inner { padding:24px; }

      /* Headings & text */
      h1 { margin:0 0 16px 0; font-size:22px; color:#111; }
      p { margin:0 0 16px 0; line-height:1.5; }

      /* Code box */
      .code-box { display:block; width:100%; text-align:center; padding:16px; border-radius:8px; background:#111; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

       /* Welcome Heading */
      .welcome { display:block; width:100%; text-align:center; padding:16px; background:#0ea5a0; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

      /* Button */
      .btn { display:inline-block; background:#0ea5a0; color:#ffffff; padding:14px 28px; border-radius:6px; font-weight:bold; font-size:16px; }

      /* Footer */
      .footer { font-size:13px; color:#666; text-align:center; padding:20px; }

      /* Responsive adjustments */
      @media only screen and (max-width:480px) {
        .inner { padding:16px !important; }
        h1 { font-size:18px !important; }
        .code-box { font-size:22px !important; letter-spacing:4px !important; padding:12px !important; }
        .welcome {  padding:12px !important;  font-size:22px !important; letter-spacing:4px !important; }
        .btn { display:block !important; width:100% !important; text-align:center !important; padding:14px 0 !important; font-size:16px !important; }
      }
    </style>
  </head>
  <body>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:20px 0;">
          <table class="container" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="inner">
                <h1 class="welcome ">   Email Verification </h1>
                <p>Hi <strong>${name}</strong>,</p>
                <p>Thanks for registering. Use the code below to verify your account. This code expires in <strong>'{expiry}' minutes</strong>.</p>

                <div class="code-box">${verificationCode}</div>

                <p style="text-align:center;">
                  <a href="{verify_link}" class="btn" target="_blank" rel="noopener">Verify My Account</a>
                </p>

                <p>If the button doesn’t work, copy and paste this link into your browser:</p>
                <p style="word-break:break-word;">
                  <a href="{verify_link}" style="color:#0ea5a0;">{verify_link}</a>
                </p>

                  <p>If you didn’t sign up, please ignore this email.</p>
                  <p>Best Regards</p>
                  <p>Your App Team</p>
                <div class="footer">

                  <p>This is an automated message, please do not reply to the email.</p>
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
};

export const passwordResetTemplate = (name, verificationCode) => {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Reset your password</title>
    <style>
      body { margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif; color:#333; }
      table { border-collapse:collapse; }
      a { text-decoration:none; }

      .container { width:100%; max-width:600px; margin:0 auto; background:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.08); }
      .inner { padding:24px; }

      h1 { margin:0 0 16px 0; font-size:22px; color:#111; }
      p { margin:0 0 16px 0; line-height:1.5; }

      .code-box { display:block; width:100%; text-align:center; padding:16px; border-radius:8px; background:#111; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

        /* Welcome Heading */
      .welcome { display:block; width:100%; text-align:center; padding:16px; border-radius:8px; background:#0ea5a0; color:#fff; font-size:28px; letter-spacing:6px; font-weight:700; margin:20px 0; }

      .btn { display:inline-block; background:#0ea5a0; color:#ffffff; padding:14px 28px; border-radius:6px; font-weight:bold; font-size:16px; }

      .footer { font-size:13px; color:#666; text-align:center; padding:20px; }

      @media only screen and (max-width:480px) {
        .inner { padding:16px !important; }
        h1 { font-size:18px !important; }
        .code-box { font-size:22px !important; letter-spacing:4px !important; padding:12px !important; }
          /* Welcome Heading */
        .welcome {  padding:12px !important;  font-size:22px !important; letter-spacing:4px !important; }
        .btn { display:block !important; width:100% !important; text-align:center !important; padding:14px 0 !important; font-size:16px !important; }
      }
    </style>
  </head>
  <body>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
      <tr>
        <td align="center" style="padding:20px 0;">
          <table class="container" cellpadding="0" cellspacing="0" role="presentation">
            <tr>
              <td class="inner">
                <h1 class="Welcome">Password Reset Request</h1>
                <p>Hi <strong>${name}</strong>,</p>
                <p>We received a request to reset your password. Use the code below to reset it. This code will expire in <strong>${30} minutes</strong>.</p>

                <div class="code-box">${verificationCode}</div>

                <p style="text-align:center;">
                  <a href="{reset_link}" class="btn" target="_blank" rel="noopener">Reset My Password</a>
                </p>

                <p>If the button doesn’t work, copy and paste this link into your browser:</p>
                <p style="word-break:break-word;">
                  <a href="{reset_link}" style="color:#0ea5a0;">{reset_link}</a>
                </p>

                <div class="footer">
                  <p>If you didn’t request a password reset, you can safely ignore this email or contact <a href="mailto:{support_email}" style="color:#0ea5a0;">{support_email}</a>.</p>
                  <p>© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
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
};
