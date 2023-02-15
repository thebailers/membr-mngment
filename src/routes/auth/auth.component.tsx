import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../components/helpers/error-message/error-message.component";

import { AuthWrapper } from "./auth.styles";
import { InlineError } from "../../components/helpers/error-message/error.styles";
import { Input } from "../../components/helpers/form/input/input.styles";

import { signUpUserEmailPassword } from "../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../utils/firebase/firebase-errors";
import Button from "../../components/helpers/form/button/button.component";

// form validation schema
import { SignUpSchema, SignUpSchemaType } from "./auth.schema";

const Auth = () => {
  const [authError, setAuthError] = useState<string>("");

  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpSchemaType> = async ({
    email,
    password,
  }) => {
    try {
      const authorisedUser = await signUpUserEmailPassword(email, password);
      // store signed in user 'authorisedUser' in UserContext
    } catch (error: unknown) {
      if (error instanceof FirebaseError)
        setAuthError(friendlyFirebaseError(error.code));
      else setAuthError("Something went wrong - please try again");
    }
  };

  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {authError && <ErrorMessage message={authError} />}
        <div>
          <label htmlFor="email">Email</label>
          {errors.email && <InlineError>{errors.email.message}</InlineError>}
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="enter your email"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="hint">Password must be 6 characters or more</div>
          {errors.password && (
            <InlineError>{errors.password.message}</InlineError>
          )}
          <Input
            {...register("password")}
            id="password"
            placeholder="enter your password"
            type="password"
            disabled={isSubmitting}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          {errors.confirmPassword && (
            <InlineError>{errors.confirmPassword.message}</InlineError>
          )}
          <Input
            {...register("confirmPassword")}
            id="confirmPassword"
            placeholder="confirm your password"
            type="password"
            disabled={isSubmitting}
          />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          Sign up
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Auth;
