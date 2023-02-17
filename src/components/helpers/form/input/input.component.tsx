import { StyledInput } from "./input.styles";
import { UseFormRegister, Path } from "react-hook-form";

import { InlineError } from "../../error-message/error.styles";

// type IFormValues = ISignIn | ISignUp;

// interface ISignIn {
//   email: string;
//   password: string;
// }

interface ISignUp {
  email: string;
  password: string;
  confirmPassword: string;
}

type InputProps = {
  hookValue: Path<ISignUp>;
  id: string;
  label: string;
  type: string;
  register: UseFormRegister<ISignUp>;
  placeholder: string;
  disabled: boolean;
  handleChange?: () => void;
  error: string | undefined;
  hint?: string;
};

const Input = ({
  hookValue,
  id,
  type,
  label,
  register,
  placeholder,
  disabled,
  error,
  hint,
}: InputProps) => {
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
