"use server";
import { initialState } from "../ui/contact/utils";
import { sendMail } from "./lib/mail";
import { SendEmailState } from "./lib/types";
import { ContactFormSchema } from "./validations";

export async function sendEmailAction(
  prevState: SendEmailState,
  formData: FormData
) {
  const data = {
    name: (formData.get("name") as string) || "",
    email: (formData.get("email") as string) || "",
    description: (formData.get("description") as string) || "",
    position: (formData.get("position") as string) || "",
    company: (formData.get("company") as string) || "",
  };
  try {
    const validatedFields = ContactFormSchema.safeParse(data);
    if (!validatedFields.success) {
      return {
        data,
        errors: validatedFields.error.flatten().fieldErrors,
        errorMessage: "",
        success: false,
      };
    }
    await sendMail(validatedFields.data);
    return {
      data: initialState.data,
      errorMessage: "",
      errors: {},
      success: true,
    };
  } catch (error) {
    return {
      data,
      errorMessage:
        "Something went wrong with sending your quote information. Kindly try again later.",
      errors: {},
      success: false,
    };
  }
}
