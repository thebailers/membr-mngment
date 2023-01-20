import { render, screen } from "@testing-library/react";
import SpecificClassHeader from "../specific-class-header.component";

describe("the specific class component", () => {
  it("renders the component", () => {
    const day = "Monday";
    const time = "18.30";
    render(<SpecificClassHeader day={day} time={time} />);
    expect(screen.getByText(/monday at 18.30/i)).toBeInTheDocument();
  });
});
