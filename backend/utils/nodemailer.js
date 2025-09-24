import nodemailer from "nodemailer";
import {
  passwordResetTemplate,
  verificationTemplate,
  welcomeTemplate,
} from "./emailTemplates.js";

export const sendEmail = (
  receiverEmail,
  verificationCode,
  name,
  emailTemplate
) => {
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

  const mailOptions = {
    from: `"Duls TECH" <no-reply@mern-advance-auth.com>`,
    to: receiverEmail,
    subject: " Account Verification",
    text: `MERN Auth Email`, // plain‑text body
    // html: welcomeTemplate(name, verificationCode), // HTML body
    html:
      emailTemplate === "welcome"
        ? welcomeTemplate(name)
        : emailTemplate === "verify"
        ? verificationTemplate(name, verificationCode)
        : passwordResetTemplate(name),
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
