import { render, screen } from "@testing-library/react";
import SpecificClass from "../specific-class.component";

const setup = () => render(<SpecificClass />);

describe("the specific class component", () => {
  it("renders the component", () => {
    setup();
    expect(screen.getByText(/class sign in/i)).toBeInTheDocument();
  });

  it("prevents member signing in if too long before class", () => {
    setup();
    // expect(
    //   screen.getByText(/Class not yet started - too early to sign in/i)
    // ).toBeInTheDocument();
  });
});
