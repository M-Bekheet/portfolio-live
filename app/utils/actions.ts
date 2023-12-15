"use server";
import { sendMail } from "./lib/mail";
import { SendEmailState } from "./lib/types";
import { ContactFormSchema } from "./validations";

export async function sendEmailAction(
  prevState: SendEmailState,
  formData: FormData
) {
  try {
    const validatedFields = ContactFormSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      description: formData.get("description"),
      position: formData.get("position"),
      company: formData.get("company"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        errorMessage: "",
        success: false,
      };
    }
    await sendMail(validatedFields.data);
    return {
      errorMessage: "",
      errors: {},
      success: true,
    };
  } catch (error) {
    return {
      errorMessage:
        "Something went wrong with sending your quote information. Kindly try again later.",
      errors: {},
      success: false,
    };
  }
}
