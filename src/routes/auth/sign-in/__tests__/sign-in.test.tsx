import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FirebaseError } from "firebase/app";
import SignIn from "../sign-in.component";
import { signInEmailPassword as mockSignInEmailPassword } from "../../../../utils/firebase/firebase.utils";
import { errorMessageMap as e } from "../../../../utils/error.utils";
import userEvent from "@testing-library/user-event";

jest.mock("../../../../utils/firebase/firebase.utils");

const setup = () => {
  const utils = render(<SignIn />);
  const inputEmail: HTMLInputElement = screen.getByLabelText(/email/i);
  const inputPassword = screen.getAllByLabelText(
    /password/i
  )[0] as HTMLInputElement;
  const button = screen.getByRole("button", { name: /sign in/i });
  return {
    inputEmail,
    inputPassword,
    button,
    ...utils,
  };
};

describe("sign in component", () => {
  it("renders the component with a email/password input & sign in button", async () => {
    const { inputEmail, inputPassword, button } = setup();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("doesn't call firebase sign in when sign in inputs are empty", async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText(e.emailAddressInvalid)).toBeInTheDocument();
    expect(await screen.findByText(e.passwordLength)).toBeInTheDocument();
    expect(mockSignInEmailPassword).toBeCalledTimes(0);
  });

  it("calls firebase sign in when email and password are valid inputs", async () => {
    const { inputEmail, inputPassword, button } = setup();
    const email = "billy@tubbins.co.uk";
    const password = "111111";
    userEvent.type(inputEmail, email);
    userEvent.type(inputPassword, password);
    expect(inputEmail.value).toBe(email);
    expect(inputPassword.value).toBe(password);
    userEvent.click(button);
    await waitFor(() => {
      expect(mockSignInEmailPassword).toBeCalledTimes(1);
    });
  });
});
