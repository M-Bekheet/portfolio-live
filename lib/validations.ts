import z from "zod";

const ContactFormSchema = z.object({
  name: z
    .string({
      invalid_type_error: "Please enter a valid name",
    })
    .min(5, {
      message: "Your name is too short",
    }),
  email: z
    .string({
      invalid_type_error: "Please enter a valid email",
    })
    .email({
      message: "Please enter a valid email",
    }),
  description: z
    .string({
      invalid_type_error: "Please enter a valid description.",
    })
    .min(10, {
      message: "Please enter a valid description.",
    }),
  position: z.string().optional(),
  company: z.string().optional(),
});

export { ContactFormSchema };
