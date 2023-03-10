import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../../components/helpers/error-message/error-message.component";
import Button from "../../../components/helpers/form/button/button.component";
import Input from "../../../components/helpers/form/input/input.component";

import { signInEmailPassword } from "../../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../../utils/firebase/firebase-errors";
import { errorMessageMap } from "../../../utils/error.utils";
// form validation schema
import { SignInSchema, SignInSchemaType } from "../auth.schema";

const SignIn = () => {
  const [authError, setAuthError] = useState<string>("");

  // react hook form setup
  const {
    register,
    watch,
    handleSubmit,
    reset,
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
      await signInEmailPassword(email, password);
      reset(); // reset form fields
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

      <Button type="submit" disabled={isSubmitting}>
        Sign in
      </Button>
    </form>
  );
};

export default SignIn;
