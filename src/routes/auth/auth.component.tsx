import { useEffect, useState } from "react";
import { FirebaseError } from "firebase/app";

import ErrorMessage from "../../error-message/error-message.component";

import { signUpUserEmailPassword } from "../../utils/firebase/firebase.utils";
import { friendlyFirebaseError } from "../../utils/firebase/firebase-errors";
import Input from "../../components/helpers/form/input/input.component";
import Button from "../../components/helpers/form/button/button.component";

const Auth = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  useEffect(() => {
    setAuthError("");
  }, [emailInput, passwordInput]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const signUp = await signUpUserEmailPassword(emailInput, passwordInput);
      console.log("try: ", signUp);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("catch err: ", error.message);
        console.log("catch err: ", error.code);
        setAuthError(friendlyFirebaseError(error.code));
      } else {
        console.log("unknown err: ", error);
        setAuthError("Something went wrong - please try again");
      }
    }
  };

  return (
    <>
      {authError && <ErrorMessage message={authError} />}
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={emailInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmailInput(e.target.value)
          }
        />

        <Input
          type="password"
          value={passwordInput}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordInput(e.target.value)
          }
        />
        <Button type="submit">Sign up</Button>
      </form>
    </>
  );
};

export default Auth;
