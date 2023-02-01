import { useState } from "react";
import { FirebaseError } from "firebase/app";

import { signUpUserEmailPassword } from "../../utils/firebase/firebase.utils";

const Auth = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const signUp = await signUpUserEmailPassword(emailInput, passwordInput);
      console.log("try: ", signUp);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log("catch err: ", error.message);
      } else {
        console.log("unknown err: ", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />

      <input
        type="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Auth;
