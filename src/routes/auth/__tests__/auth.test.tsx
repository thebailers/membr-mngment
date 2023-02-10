import { fireEvent, render, screen } from "@testing-library/react";
import { FirebaseError } from "firebase/app";
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

  it("doesn't call the firebase sign in api when signin inputs are empty", () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(mockSignUpUserEmailPassword).toBeCalledTimes(0);
  });

  it("calls the firebase sign up with email/password api when email & password present", () => {
    const { inputPassword, inputEmail, button } = setup();
    fireEvent.change(inputEmail, { target: { value: "billytubbins" } });
    fireEvent.change(inputPassword, { target: { value: "123456" } });
    fireEvent.click(button);
    expect(mockSignUpUserEmailPassword).toBeCalledTimes(1);
  });

  it("displays relevant error message when email address already in use", () => {
    const { inputPassword, inputEmail, button } = setup();
    fireEvent.change(inputEmail, { target: { value: "billy@tubbins.co.uk" } });
    fireEvent.change(inputPassword, { target: { value: "123456" } });
    (mockSignUpUserEmailPassword as jest.Mock).mockImplementation(() => {
      throw new FirebaseError(
        "auth/email-already-in-use",
        "Firebase: Error (auth/email-already-in-use)."
      );
    });
    fireEvent.click(button);
    expect(screen.getByText(/email address in use/i)).toBeInTheDocument();
  });

  it("displays relevant error message when email address invalid", () => {
    const { inputPassword, inputEmail, button } = setup();
    fireEvent.change(inputEmail, { target: { value: "billytubbins" } });
    fireEvent.change(inputPassword, { target: { value: "123456" } });
    (mockSignUpUserEmailPassword as jest.Mock).mockImplementation(() => {
      throw new FirebaseError(
        "auth/invalid-email",
        "Firebase: Error (auth/auth/invalid-email)."
      );
    });
    fireEvent.click(button);
    expect(
      screen.getByText(/enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("displays relevant error message when password invalid", () => {
    const { inputPassword, inputEmail, button } = setup();
    fireEvent.change(inputEmail, { target: { value: "billytubbins" } });
    fireEvent.change(inputPassword, { target: { value: "123456" } });
    (mockSignUpUserEmailPassword as jest.Mock).mockImplementation(() => {
      throw new FirebaseError(
        "auth/invalid-password",
        "Firebase: Error (auth/invalid-password)."
      );
    });
    fireEvent.click(button);
    expect(
      screen.getByText(/password must be at least 6 characters in length/i)
    ).toBeInTheDocument();
  });
});
