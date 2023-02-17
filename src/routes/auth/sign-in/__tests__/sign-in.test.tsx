import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FirebaseError } from "firebase/app";
import SignIn from "../sign-in.component";
import { signUpUserEmailPassword as mockSignUpUserEmailPassword } from "../../../../utils/firebase/firebase.utils";

jest.mock("../../../../utils/firebase/firebase.utils");

const setup = () => {
  const utils = render(<SignIn />);
  // const inputEmail: HTMLInputElement = screen.getByLabelText(/email/i);
  // const inputPassword = screen.getAllByLabelText(
  //   /password/i
  // )[0] as HTMLInputElement;
  // const inputConfirmPassword: HTMLInputElement =
  //   screen.getByLabelText(/confirm password/i);
  const button = screen.getByRole("button", { name: /sign in/i });
  return {
    // inputEmail,
    // inputPassword,
    // inputConfirmPassword,
    button,
    ...utils,
  };
};

describe("sign in component", () => {
  it("...todo", async () => {
    const { button } = setup();
  });
});
