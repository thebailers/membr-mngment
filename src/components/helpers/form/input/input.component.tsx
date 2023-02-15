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
  handleChange?: () => void;
};

const Input = ({
  type,
  label,
  register,
  placeholder,
  disabled,
  handleChange,
}: InputProps) => {
  return (
    <StyledInput
      {...register(label)}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
      onChange={handleChange}
    />
  );
};

export default Input;
