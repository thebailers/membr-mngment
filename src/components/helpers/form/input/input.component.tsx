import { StyledInput } from "./input.styles";
import { UseFormRegister, Path } from "react-hook-form";

import { InlineError } from "../../error-message/error.styles";

export type ISignIn = {
  email: string;
  password: string;
};

export type ISignUp = {
  email: string;
  password: string;
  confirmPassword: string;
};

type InputProps<IFormValues extends ISignIn | ISignUp> = {
  hookValue: Path<IFormValues>;
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  disabled: boolean;
  handleChange?: () => void;
  error: string | undefined;
  hint?: string;
};

const Input = <IFormValues extends ISignIn | ISignUp>({
  hookValue,
  id,
  type,
  label,
  register,
  placeholder,
  disabled,
  error,
  hint,
}: InputProps<IFormValues>) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {hint && <div className="hint">{hint}</div>}
      {error && <InlineError>{error}</InlineError>}
      <StyledInput
        {...register(hookValue)}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
    </div>
  );
};

export default Input;
