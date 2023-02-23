import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FirebaseError } from "firebase/app";
import SignUp from "../sign-up.component";
import { UserContext } from "../../../../contexts/user.context";
import {
  signUpUserEmailPassword as mockSignUpUserEmailPassword,
  createUserDocumentFromAuth as mockCreateUserDocumentFromAuth,
  setUserAfterSignUp as mockSetUserAfterSignUp,
} from "../../../../utils/firebase/firebase.utils";
import type { DocumentSnapshot, DocumentData } from "firebase/firestore";
import userEvent from "@testing-library/user-event";
import { UserCredential } from "firebase/auth";

jest.mock("../../../../utils/firebase/firebase.utils");

const setup = () => {
  const utils = render(<SignUp />);
  const inputEmail: HTMLInputElement = screen.getByLabelText(/email/i);
  const inputFirstName: HTMLInputElement = screen.getByLabelText(/first name/i);
  const inputLastName: HTMLInputElement = screen.getByLabelText(/last name/i);
  const inputPassword = screen.getAllByLabelText(
    /password/i
  )[0] as HTMLInputElement;
  const inputConfirmPassword: HTMLInputElement =
    screen.getByLabelText(/confirm password/i);
  const button = screen.getByRole("button", { name: /sign up/i });
  return {
    inputFirstName,
    inputLastName,
    inputEmail,
    inputPassword,
    inputConfirmPassword,
    button,
    ...utils,
  };
};

describe("sign up component", () => {
  it("displays an error when attempting sign in with no username/password input", async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(
      await screen.findByText(/enter a valid email address/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/password must be a minimum of 6 characters/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(
        /password confirmation must be a minimum of 6 characters/i
      )
    ).toBeInTheDocument();
  });

  it("doesn't call the firebase sign in api when sign up inputs are empty", () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(mockSignUpUserEmailPassword).toBeCalledTimes(0);
  });

  it("calls the firebase sign up with email/password api when all fields are valid", async () => {
    const {
      inputFirstName,
      inputLastName,
      inputPassword,
      inputConfirmPassword,
      inputEmail,
      button,
    } = setup();
    userEvent.type(inputFirstName, "billy");
    userEvent.type(inputLastName, "tubbins");
    userEvent.type(inputEmail, "billy@tubbins.com");
    userEvent.type(inputPassword, "123456");
    userEvent.type(inputConfirmPassword, "123456");
    userEvent.click(button);
    await waitFor(() => {
      expect(mockSignUpUserEmailPassword).toBeCalledTimes(1);
    });
  });

  it("doesn't call the firebase sign up with email/password api when password & confirm password do not match", async () => {
    const {
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPassword,
      inputConfirmPassword,
      button,
    } = setup();
    userEvent.type(inputFirstName, "billy");
    userEvent.type(inputLastName, "tubbins");
    fireEvent.change(inputEmail, {
      target: { value: "billy@tubbins.com" },
    });
    fireEvent.change(inputPassword, { target: { value: "123456" } });
    fireEvent.change(inputConfirmPassword, {
      target: { value: "1234567" },
    });
    fireEvent.click(button);
    await screen.findByText(/passwords don't match/i);
    expect(mockSignUpUserEmailPassword).not.toBeCalled();
  });

  it("displays relevant error message when email address already in use", async () => {
    (mockSignUpUserEmailPassword as jest.Mock).mockImplementation(() => {
      throw new FirebaseError(
        "auth/email-already-in-use",
        "Firebase: Error (auth/email-already-in-use)."
      );
    });
    const {
      inputFirstName,
      inputLastName,
      inputPassword,
      inputConfirmPassword,
      inputEmail,
      button,
    } = setup();
    userEvent.type(inputFirstName, "billy");
    userEvent.type(inputLastName, "tubbins");
    userEvent.type(inputEmail, "billy@tubbins.co.uk");
    userEvent.type(inputPassword, "123456");
    userEvent.type(inputConfirmPassword, "123456");
    userEvent.click(button);
    expect(
      await screen.findByText(/email address in use/i)
    ).toBeInTheDocument();
  });

  it("displays relevant error message when email address invalid", async () => {
    const { inputEmail, button } = setup();
    userEvent.type(inputEmail, "billytubbins");
    userEvent.click(button);
    expect(
      await screen.findByText(/enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("calls the signup fns with valid inputs & unique email", async () => {
    // setup
    (mockSignUpUserEmailPassword as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          resolve({ user: { email: "billy@tubbins.co.uk" } } as UserCredential)
        )
    );
    (mockCreateUserDocumentFromAuth as jest.Mock).mockImplementation(() => {});
    (mockSetUserAfterSignUp as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({} as DocumentSnapshot<DocumentData>);
        })
    );
    const value = { currentUser: null, setCurrentUser: jest.fn() };
    render(
      <UserContext.Provider value={value}>
        <SignUp />
      </UserContext.Provider>
    );
    const inputEmail: HTMLInputElement = screen.getByLabelText(/email/i);
    const inputFirstName: HTMLInputElement =
      screen.getByLabelText(/first name/i);
    const inputLastName: HTMLInputElement = screen.getByLabelText(/last name/i);
    const inputPassword = screen.getAllByLabelText(
      /password/i
    )[0] as HTMLInputElement;
    const inputConfirmPassword: HTMLInputElement =
      screen.getByLabelText(/confirm password/i);
    const button = screen.getByRole("button", { name: /sign up/i });

    // assert
    userEvent.type(inputFirstName, "billy");
    userEvent.type(inputLastName, "tubbins");
    userEvent.type(inputEmail, "billy@tubbins.co.uk");
    userEvent.type(inputPassword, "123456");
    userEvent.type(inputConfirmPassword, "123456");
    userEvent.click(button);
    await waitFor(() => {
      expect(mockSignUpUserEmailPassword).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockSignUpUserEmailPassword).toBeCalledWith(
        "billy@tubbins.co.uk",
        "123456"
      );
    });
    await waitFor(() => {
      expect(mockCreateUserDocumentFromAuth).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockCreateUserDocumentFromAuth).toBeCalledWith(
        { email: "billy@tubbins.co.uk" },
        { displayName: "billy tubbins" }
      );
    });
    await waitFor(() => {
      expect(mockSetUserAfterSignUp).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockCreateUserDocumentFromAuth).toBeCalledWith(
        { email: "billy@tubbins.co.uk" },
        { displayName: "billy tubbins" }
      );
    });
    await waitFor(() => {
      expect(value.setCurrentUser).toBeCalledTimes(1);
    });
    await waitFor(() => {
      expect(value.setCurrentUser).toBeCalledWith({});
    });
  });
});
