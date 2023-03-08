import { screen, render } from "@testing-library/react";

import CalendarWeek from "./calendar-week.component";

const setup = () => render(<CalendarWeek />);

describe("calendar week", () => {
  it("displays each day of the week", () => {
    setup();
    expect(screen.getByText(/monday/i)).toBeInTheDocument();
    expect(screen.getByText(/tuesday/i)).toBeInTheDocument();
    expect(screen.getByText(/wednesday/i)).toBeInTheDocument();
    expect(screen.getByText(/thursday/i)).toBeInTheDocument();
    expect(screen.getByText(/friday/i)).toBeInTheDocument();
    expect(screen.getByText(/saturday/i)).toBeInTheDocument();
    expect(screen.getByText(/sunday/i)).toBeInTheDocument();
  });
});
