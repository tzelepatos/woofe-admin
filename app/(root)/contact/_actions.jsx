"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/app/emails/contact-form-email";
// import NotionMagicLinkEmail from "@/app/emails/magic-link-email";

import { z } from "zod";
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
        // react: NotionMagicLinkEmail({}),
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
