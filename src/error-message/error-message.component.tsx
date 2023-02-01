import { FC } from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default ErrorMessage;
