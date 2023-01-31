import { fireEvent, render, screen } from "@testing-library/react";
import { AccessStatus } from "../../specific-class/specific-class.component";
import SigninToClass, {
  SigninToClassProps,
} from "../signin-to-class.component";

const setupProps = {
  dayOfWeek: "Monday",
  time: "1815",
  canSignIn: AccessStatus.authorised,
};

const setup = ({ dayOfWeek, time, canSignIn }: SigninToClassProps) => {
  const utils = render(
    <SigninToClass dayOfWeek={dayOfWeek} time={time} canSignIn={canSignIn} />
  );
  const input: HTMLInputElement = screen.getByLabelText("class-signin");
  return {
    input,
    ...utils,
  };
};

describe("sign in to class form", () => {
  it("renders the signin form component", () => {
    setup(setupProps);
    expect(screen.getByText(/Sign in to class/i)).toBeInTheDocument();
  });

  it("allows form input value changes", () => {
    const { input } = setup(setupProps);
    fireEvent.change(input, { target: { value: "bil" } });
    expect(input.value).toBe("bil");
  });

  it("displays a filtered list of users below input as user types", () => {
    const { input } = setup(setupProps);
    fireEvent.change(input, { target: { value: "bil" } });
    const target = screen.getAllByText(/billy tubbins/i);
    expect(target.length).toBe(2); // 2 including dev sample list
    expect(screen.queryByText(/No members found/i)).not.toBeInTheDocument();
  });

  it("informs when no members are returned", () => {
    const { input } = setup(setupProps);
    const name = "rickson gracie";
    fireEvent.change(input, { target: { value: name } });
    expect(screen.getByText(/No members found/i)).toBeInTheDocument();
    expect(screen.queryByText(name)).not.toBeInTheDocument();
  });
});
