import nodemailer from "nodemailer";
import {
  passwordResetSuccessfulTemplate,
  passwordResetTemplate,
  verificationTemplate,
  welcomeTemplate,
} from "./emailTemplates.js";

export const sendEmail = async (
  receiver,
  emailTemplate,
  emailSubject,
  clientUrl
) => {
  try {
    //  Create transporter with Brevo SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.BREVO_USER, // your Brevo account email (login email)
        pass: process.env.BREVO_SMTP_KEY, // the SMTP key generated in Brevo
      },
    });

    // Choose template
    const html =
      emailTemplate === "welcome"
        ? welcomeTemplate(receiver, clientUrl)
        : emailTemplate === "verify"
        ? verificationTemplate(receiver, clientUrl)
        : emailTemplate === "reset"
        ? passwordResetTemplate(receiver, clientUrl)
        : passwordResetSuccessfulTemplate(receiver, clientUrl);

    // Mail options
    const mailOptions = {
      from: `"MERN-AUTH" <${process.env.BREVO_FROM_EMAIL}>`,
      to: receiver.email,
      subject: emailSubject,
      text: emailSubject, // fallback text version
      html,
    };

    // 4. Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Email Error:", error.message);
  }
};
