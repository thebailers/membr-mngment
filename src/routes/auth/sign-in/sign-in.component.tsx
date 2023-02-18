import { useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../../components/helpers/error-message/error-message.component";
import Button from "../../../components/helpers/form/button/button.component";

import { StyledInput as Input } from "../../../components/helpers/form/input/input.styles";

import { signInEmailPassword } from "../../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../../utils/firebase/firebase-errors";

// form validation schema
import { SignInSchema, SignInSchemaType } from "../auth.schema";
import { InlineError } from "../../../components/helpers/error-message/error.styles";

const SignIn = () => {
  const [authError, setAuthError] = useState<string>("");

  // react hook form setup
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
  });

  // const watchFields = watch(["email", "password", "confirmPassword"]);

  // useEffect(() => {
  //   setAuthError((error) => {
  //     console.log("use effect error value = ", error);
  //     return error ? "" : error;
  //   });
  //   console.log(watchFields);
  // }, [watchFields]);

  const onSubmit: SubmitHandler<SignInSchemaType> = async ({
    email,
    password,
  }) => {
    try {
      const authorisedUser = await signInEmailPassword(email, password);
      console.log(authorisedUser);
      // store signed in user 'authorisedUser' in UserContext
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setAuthError(friendlyFirebaseError(error.code));
      } else setAuthError("Something went wrong - please try again");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <p>Sign in</p>
      {authError && <ErrorMessage message={authError} />}

      {/* todo: hook up to input helper */}
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

      {/* todo: hook up to input helper */}
      <div>
        <label htmlFor="password">Password</label>
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

      <Button type="submit" disabled={isSubmitting}>
        Sign in
      </Button>
    </form>
  );
};

export default SignIn;
