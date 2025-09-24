import nodemailer from "nodemailer";

export const sendEmail = (receiverEmail, verificationToken) => {
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

  // Wrap in an async IIFE so we can use await.
  const mailOptions = {
    from: `"Abdul Wuyep" ${process.env.NODEMAILER_EMAIL}`,
    to: receiverEmail,
    subject: "Welcome to Advanced MERN Auth Tutorial ✔",
    text: "Hello world, ", // plain‑text body
    html: `Your verification code is <b>${verificationToken} </b>`, // HTML body
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
