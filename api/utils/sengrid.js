import sgMail from "@sendgrid/mail";
import {
  passwordResetSuccessfulTemplate,
  passwordResetTemplate,
  verificationTemplate,
  welcomeTemplate,
} from "./emailTemplates.js";

// Set API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (receiver, emailTemplate, emailSubject, clientUrl) => {
  try {
    // Pick the right template
    const html =
      emailTemplate === "welcome"
        ? welcomeTemplate(receiver, clientUrl)
        : emailTemplate === "verify"
        ? verificationTemplate(receiver, clientUrl)
        : emailTemplate === "reset"
        ? passwordResetTemplate(receiver, clientUrl)
        : passwordResetSuccessfulTemplate(receiver, clientUrl);

    const msg = {
      to: receiver.email, // recipient
      from: process.env.SENDGRID_FROM_EMAIL, // verified sender email
      subject: emailSubject,
      text: emailSubject, // fallback text
      html,
    };

    const response = await sgMail.send(msg);
    console.log("✅ Email sent:", response[0].statusCode);
  } catch (error) {
    console.error("❌ Email Error:", error.response?.body || error.message);
  }
};
