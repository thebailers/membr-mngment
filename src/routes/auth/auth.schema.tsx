import { z } from "zod";
import { errorMessageMap } from "../../utils/error.utils";

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email")
      .min(1, errorMessageMap.emailAddressEmpty),
    password: z.string().min(6, errorMessageMap.passwordLength),
    confirmPassword: z.string().min(6, errorMessageMap.confirmPasswordLength),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: errorMessageMap.passwordMatchFailed,
  });
