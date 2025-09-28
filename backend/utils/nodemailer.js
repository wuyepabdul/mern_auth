import nodemailer from "nodemailer";
import {
  passwordResetSuccessfulTemplate,
  passwordResetTemplate,
  verificationTemplate,
  welcomeTemplate,
} from "./emailTemplates.js";

export const sendEmail = (receiver, emailTemplate, emailSubject, clientUrl) => {
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
    from: "duls-tech@server.com",
    to: receiver.email,
    subject: emailSubject,
    text: emailSubject, // plain‑text body
    html:
      emailTemplate === "welcome"
        ? welcomeTemplate(receiver, clientUrl)
        : emailTemplate === "verify"
        ? verificationTemplate(receiver, clientUrl)
        : emailTemplate === "reset"
        ? passwordResetTemplate(receiver, clientUrl)
        : passwordResetSuccessfulTemplate(receiver, clientUrl),
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
