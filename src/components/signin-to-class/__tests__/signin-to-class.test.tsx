import { render, screen } from "@testing-library/react";
import { AccessStatus } from "../../specific-class/specific-class.component";
import SigninToClass, {
  SigninToClassProps,
} from "../signin-to-class.component";

const setup = ({ dayOfWeek, time, canSignIn }: SigninToClassProps) => {
  render(
    <SigninToClass dayOfWeek={dayOfWeek} time={time} canSignIn={canSignIn} />
  );
};

describe("sign in to class", () => {
  it("renders the signin form if within the class signin period", () => {
    setup({
      dayOfWeek: "Monday",
      time: "1815",
      canSignIn: AccessStatus.authorised,
    });
    expect(screen.getByText(/Sign in to class/i)).toBeInTheDocument();
  });

  it("renders doesn't allow signin if outside the class signin period", () => {
    setup({
      dayOfWeek: "Monday",
      time: "1814",
      canSignIn: AccessStatus.unauthorised,
    });
    expect(
      screen.getByText(/Cannot sign in to this class yet/i)
    ).toBeInTheDocument();
  });
});
