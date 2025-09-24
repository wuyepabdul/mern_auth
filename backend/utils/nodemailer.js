import nodemailer from "nodemailer";

export const sendEmail = (receiverEmail, verificationCode, name) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false,
    port: 587,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  // html template
  function verificationTemplate({ name }) {
    return `
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <style>
      body { margin:0; padding:0; background:#f4f6f8; font-family: Arial, sans-serif; color:#333; }
      .container { max-width:600px; margin:20px auto; background:#fff; border-radius:8px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.08); }
      h1 { font-size:20px; color:#111; }
      .code-box { text-align:center; font-size:26px; letter-spacing:6px; font-weight:bold; padding:12px; background:#111; color:#fff; border-radius:6px; margin:20px 0; }
      .btn { display:inline-block; background:#0ea5a0; color:#fff; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:bold; }
      .footer { font-size:13px; color:#666; margin-top:24px; text-align:center; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Email Verification</h1>
      <p>Hi <strong>${name}</strong>,</p>
      <p>Thanks for registering. Please use the code below to verify your account. This code will expire in <strong>${"[expiration date]"} minutes</strong>.</p>
      <div class="code-box">${verificationCode}</div>
      <p style="text-align:center;">
        <a href="${"verify_link"}" class="btn">Verify My Account</a>
      </p>
      <p>If the button doesn't work, copy and paste this link into your browser:</p>
      <p><a href="${"verify_link"}">${"verify_link"}</a></p>
      <div class="footer">
        <p>If you didn’t sign up, ignore this email or contact <a href="mailto:${"support_email"}">${"support_email"}</a>.</p>
        <p>© ${new Date().getFullYear()} YourApp. All rights reserved.</p>
      </div>
    </div>
  </body>
  </html>
  `;
  }

  // Wrap in an async IIFE so we can use await.
  const mailOptions = {
    from: `"Duls TECH" <no-reply@mern-advance-auth.com>`,
    to: receiverEmail,
    subject: "Verify Your Account✔",
    text: `Hi ${name},\n\nYour verification code is: ${verificationCode}\nThis code expires in 10 minutes.\n\nOr click this link: https://yourapp.com/verify?code=${verificationCode}\n\nIf you didn’t request this, ignore this email.`, // plain‑text body
    html: verificationTemplate({
      name,
    }), // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent: " + info.response);
    }
  });
};
// tolu eibm pdkw nmei
