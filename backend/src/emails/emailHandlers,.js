import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplate.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name}<${sender.email}>`,
    to: email,
    subject: "Welcom to Chatify",
    html: createWelcomeEmailTemplate(name, clientURL),
  });
  if (error) {
    console.error("Error sending welcom Email:", error);
    throw new Error("failed to send welcom emai");
  }
  console.log("Welcom Email sent successfully", data);
};
