import { SendEmailState } from "@/app/utils/lib/types";

export const initialState = {
  errorMessage: "",
  errors: {},
  success: false,
  data: {
    name: "",
    email: "",
    description: "",
    position: "",
    company: "",
  },
} satisfies SendEmailState;
