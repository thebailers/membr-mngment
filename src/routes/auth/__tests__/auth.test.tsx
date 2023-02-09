import { fireEvent, render, screen } from "@testing-library/react";
import Auth from "../auth.component";
import { signUpUserEmailPassword as mockSignUpUserEmailPassword } from "../../../utils/firebase/firebase.utils";

jest.mock("../../../utils/firebase/firebase.utils");

const setup = () => {
  const utils = render(<Auth />);
  const inputEmail: HTMLInputElement = screen.getByLabelText(/email/i);
  const inputPassword: HTMLInputElement = screen.getByLabelText(/password/i);
  const button = screen.getByRole("button", { name: /sign up/i });
  return {
    inputEmail,
    inputPassword,
    button,
    ...utils,
  };
};

describe("auth component", () => {
  it("displays an error when attempting sign in with no username/password input", () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(
      screen.getByText(/enter an email address & password/i)
    ).toBeInTheDocument();
  });

  it("doesn't call the sign in fn when signin inputs are empty", () => {
    setup();
    expect(mockSignUpUserEmailPassword).toBeCalledTimes(1);
  });
});
