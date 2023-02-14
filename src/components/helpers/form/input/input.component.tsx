import { StyledInput } from "./input.styles";
import { UseFormRegister, Path } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

type InputProps = {
  label: Path<IFormValues>;
  type: string;
  register: UseFormRegister<IFormValues>;
  placeholder: string;
  disabled: boolean;
};

const Input = ({
  type,
  label,
  register,
  placeholder,
  disabled,
}: InputProps) => {
  return (
    <StyledInput
      {...register(label)}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  );
};

export default Input;
