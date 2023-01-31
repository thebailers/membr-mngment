import { ChangeEvent, FC, Dispatch, SetStateAction } from "react";
import { SignInInput, SignInlabel } from "./signin-to-class-form.styles";

export type SigninToClassFormProps = {
  signinInput: string;
  setSigninInput: Dispatch<SetStateAction<string>>;
};

const SigninToClassForm: FC<SigninToClassFormProps> = ({
  signinInput,
  setSigninInput,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSigninInput(value);
  };

  return (
    <div>
      <SignInlabel htmlFor="class-signin">Sign in to class</SignInlabel>
      <SignInInput
        type="text"
        name="class-signin"
        aria-label="class-signin"
        id="class-signin"
        value={signinInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default SigninToClassForm;
