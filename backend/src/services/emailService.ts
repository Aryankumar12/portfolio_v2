import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({ name, email, message }: EmailPayload) => {
  console.log("EMAIL_USER:", process.env.EMAIL_USER); 
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "exists" : "undefined"); // debug

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `Portfolio Contact — ${name}`,
    html: `
      <h3>New message from your portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });
};