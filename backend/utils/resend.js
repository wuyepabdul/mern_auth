import nodemailer from "nodemailer";
import { Resend } from "resend"; // only needed for Resend version
import {
  passwordResetSuccessfulTemplate,
  passwordResetTemplate,
  verificationTemplate,
  welcomeTemplate,
} from "./emailTemplates.js";

const getTemplate = (emailTemplate, receiver, clientUrl) => {
  switch (emailTemplate) {
    case "welcome":
      return welcomeTemplate(receiver, clientUrl);
    case "verify":
      return verificationTemplate(receiver, clientUrl);
    case "reset":
      return passwordResetTemplate(receiver, clientUrl);
    default:
      return passwordResetSuccessfulTemplate(receiver, clientUrl);
  }
};

export const sendEmail = async (receiver, emailTemplate, emailSubject, clientUrl) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const html = getTemplate(emailTemplate, receiver, clientUrl);

    const { data, error } = await resend.emails.send({
      from: "MERN Auth <onboarding@resend.dev>", // default domain, works instantly
      to: receiver.email,
      subject: emailSubject,
      html,
    });

    if (error) throw error;
    console.log("✅ Email sent via Resend:", data.id);
  } catch (err) {
    console.error("❌ Email Error:", err.message);
  }
};
