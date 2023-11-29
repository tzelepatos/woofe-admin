"use server";
import { Resend } from "resend";
import ContactFormEmail from "@/app/emails/contact-form-email";
import VerificatrionEmail from "@/app/emails/validation-link";
import welcomeEmail from "@/app/emails/welcome-email";
import { ContactFormSchema } from "@/app/models/ContactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "Woof-e Contact Form <onboarding@resend.dev>",
        to: ["tzelepatos@gmail.com"],
        subject: "Contact form submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
        // react: welcomeEmail({ name, email }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

export async function sendActivationEmail(userId, activationToken) {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return { success: false, error: "User not found." };
    }

    const data = await resend.emails.send({
      from: "Woof-e Verification email  <onboarding@resend.dev>",
      to: ["tzelepatos@gmail.com"],
      // to: [user.email],
      subject: "Account activation",
      text: `Please click the following link to activate your account: https://yourwebsite.com/activate?token=${activationToken}`,
      react: VerificatrionEmail({ email, activationToken }),
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
}
