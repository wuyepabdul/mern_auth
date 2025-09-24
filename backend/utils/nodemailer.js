import nodemailer from "nodemailer";
import { verificationTemplate } from "./emailTemplates.js";

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

  // Wrap in an async IIFE so we can use await.
  const mailOptions = {
    from: `"Duls TECH" <no-reply@mern-advance-auth.com>`,
    to: receiverEmail,
    subject: "Verify Your Account✔",
    text: `Hi ${name},\n\nYour verification code is: ${verificationCode}\nThis code expires in 10 minutes.\n\nOr click this link: https://yourapp.com/verify?code=${verificationCode}\n\nIf you didn’t request this, ignore this email.`, // plain‑text body
    html: verificationTemplate(name, verificationCode), // HTML body
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
