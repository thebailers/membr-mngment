import { useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ErrorMessage from "../../components/helpers/error-message/error-message.component";

import { signUpUserEmailPassword } from "../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../utils/firebase/firebase-errors";
import Input from "../../components/helpers/form/input/input.component";
import Button from "../../components/helpers/form/button/button.component";

// form validation schema
import { SignUpSchema, SignUpSchemaType } from "./auth.schema";

const Auth = () => {
  // const [emailInput, setEmailInput] = useState<string>("");
  // const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  // useEffect(() => {
  //   // reset auth error when user input detected
  //   setAuthError("");
  // }, [emailInput, passwordInput]);

  // react hook form setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  console.log("errors", errors);

  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    console.log(data);
    // e.preventDefault();
    // prevent submission with empty inputs
    // if (!emailInput || !passwordInput) {
    //   setAuthError("Enter an email address & password");
    //   return;
    // }
    // try {
    //   const authorisedUser = await signUpUserEmailPassword(
    //     emailInput,
    //     passwordInput
    //   );
    //   // store signed in user 'authorisedUser' in UserContext
    // } catch (error: unknown) {
    //   if (error instanceof FirebaseError)
    //     setAuthError(friendlyFirebaseError(error.code));
    //   else setAuthError("Something went wrong - please try again");
    // }
  };

  const handleAnyInputChange = () => {
    setAuthError("");
  };

  return (
    <>
      {authError && <ErrorMessage message={authError} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          {errors.email && <div className="error">{errors.email.message}</div>}
          <input
            placeholder="enter your email"
            {...register("email")}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className="hint">Password must me 6 characters or more</div>
          {errors.password && (
            <div className="error">{errors.password.message}</div>
          )}
          <input {...register("password")} disabled={isSubmitting} />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword.message}</div>
          )}
          <input {...register("confirmPassword")} disabled={isSubmitting} />
        </div>

        <Button type="submit" disabled={isSubmitting}>
          Sign up
        </Button>
      </form>
    </>
  );
};

export default Auth;
