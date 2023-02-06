import { FC } from "react";

import { Error } from "./error.styles";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <Error className="error">{message}</Error>;
};

export default ErrorMessage;
