import { fireEvent, render, screen } from "@testing-library/react";
import Auth from "../auth.component";

const setup = () => render(<Auth />);

// const input: HTMLInputElement = screen.getByLabelText("email");

describe("auth component", () => {
  it("displays an error when attempting sign in with no username/password input", () => {
    setup();
    const button = screen.getByRole("button", { name: /sign up/i });
    fireEvent.click(button);
    expect(
      screen.getByText(/enter an email address & password/i)
    ).toBeInTheDocument();
  });

  it("doesn't call the sign in fn when signin inputs are empty", () => {
    // todo
  });
});
