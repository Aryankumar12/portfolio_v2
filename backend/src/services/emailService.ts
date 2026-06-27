import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
interface EmailPayload {
  name: string;
  email: string;
  message: string;
}
dotenv.config({ path: ".env" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
export const sendEmail = async({name, email, message}:EmailPayload)=>{
    await transporter.sendMail({
         from:email,
    to: process.env.EMAIL_USER, 
     replyTo: email, subject: `Portfolio Contact — ${name}`,
    html: `
      <h3>New message from your portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    })

}