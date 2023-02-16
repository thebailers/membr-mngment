import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../components/helpers/error-message/error-message.component";
import Button from "../../components/helpers/form/button/button.component";
import Input from "../../components/helpers/form/input/input.component";

import { AuthWrapper } from "./auth.styles";

import { signUpUserEmailPassword } from "../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../utils/firebase/firebase-errors";
import { errorMessageMap } from "../../utils/error.utils";

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

        <Input
          register={register}
          hookValue="email"
          label="Email"
          id="email"
          type="email"
          placeholder="enter your email"
          disabled={isSubmitting}
          error={errors.email?.message}
        />

        <Input
          hookValue="password"
          register={register}
          label="Password"
          id="password"
          placeholder="enter your password"
          type="password"
          disabled={isSubmitting}
          error={errors.password?.message}
          hint={errorMessageMap.passwordHint}
        />
        <Input
          hookValue="confirmPassword"
          register={register}
          label="Confirm password"
          id="confirmPassword"
          placeholder="confirm your password"
          type="password"
          disabled={isSubmitting}
          error={errors.confirmPassword?.message}
        />

        <Button type="submit" disabled={isSubmitting}>
          Sign up
        </Button>
      </form>
    </AuthWrapper>
  );
};

export default Auth;
