import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  name:string,
  email:string,
  message:string

}

export const sendEmail = async ({ name, email, message }: EmailPayload) => {
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "aryandot1@gmail.com",
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