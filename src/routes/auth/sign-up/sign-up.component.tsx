import { useEffect, useState, useContext } from "react";
import { FirebaseError } from "firebase/app";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UserContext } from "../../../contexts/user.context";

import ErrorMessage from "../../../components/helpers/error-message/error-message.component";
import Button from "../../../components/helpers/form/button/button.component";
import Input from "../../../components/helpers/form/input/input.component";

import {
  createUserDocumentFromAuth,
  setUserAfterSignUp,
  signUpUserEmailPassword,
} from "../../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../../utils/firebase/firebase-errors";
import { errorMessageMap } from "../../../utils/error.utils";

// form validation schema
import { SignUpSchema, SignUpSchemaType } from "../auth.schema";

const SignUp = () => {
  const [authError, setAuthError] = useState<string>("");
  const { setCurrentUser } = useContext(UserContext);

  // react hook form setup
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
  });

  // const watchFields = watch(["email", "password", "confirmPassword"]);

  // useEffect(() => {
  //   setAuthError((error) => {
  //     console.log("use effect error value = ", error);
  //     return error ? "" : error;
  //   });
  //   console.log(watchFields);
  // }, [watchFields]);

  const onSubmit: SubmitHandler<SignUpSchemaType> = async ({
    firstName,
    lastName,
    email,
    password,
  }) => {
    try {
      const authUser = await signUpUserEmailPassword(email, password);
      reset();
      if (authUser) {
        const { user } = authUser;
        await createUserDocumentFromAuth(user, {
          displayName: `${firstName} ${lastName}`,
        });
        const snapshot = await setUserAfterSignUp(user);
        setCurrentUser(snapshot);
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setAuthError(friendlyFirebaseError(error.code));
      } else setAuthError("Something went wrong - please try again");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <p>Sign up</p>
      {authError && <ErrorMessage message={authError} />}

      <Input
        register={register}
        hookValue="firstName"
        label="First name"
        id="firstName"
        type="firstName"
        placeholder="enter your first name"
        disabled={isSubmitting}
        error={errors.firstName?.message}
      />

      <Input
        register={register}
        hookValue="lastName"
        label="Last name"
        id="lastName"
        type="lastName"
        placeholder="enter your last name"
        disabled={isSubmitting}
        error={errors.lastName?.message}
      />

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
  );
};

export default SignUp;
