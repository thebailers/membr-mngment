import { z } from "zod";
import { errorMessageMap } from "../../utils/error.utils";

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignUpSchema = z
  .object({
    email: z
      .string()
      .email(errorMessageMap.emailAddressInvalid)
      .min(1, errorMessageMap.emailAddressEmpty),
    password: z.string().min(6, errorMessageMap.passwordLength),
    confirmPassword: z.string().min(6, errorMessageMap.confirmPasswordLength),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: errorMessageMap.passwordMatchFailed,
  });

export const SignInSchema = z.object({
  email: z
    .string()
    .email(errorMessageMap.emailAddressInvalid)
    .min(1, errorMessageMap.emailAddressEmpty),
  password: z.string().min(6, errorMessageMap.passwordLength),
});
