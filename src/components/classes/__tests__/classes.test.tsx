import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Classes from "../classes.component";

import { daysOfWeekArray } from "../../../utils/utils";

const setup = () =>
  render(
    <MemoryRouter>
      <Classes />
    </MemoryRouter>
  );

describe("the classes component", () => {
  test("displays the heading with the current day of the week active", () => {
    const route = "/classes/sunday";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Classes />
      </MemoryRouter>
    );
    const dayOfTheWeek = daysOfWeekArray[0]; // sunday
    const regexp = `${dayOfTheWeek} Classes`;
    const paraElement = screen.getByText(new RegExp(regexp, "i"));
    expect(paraElement).toBeInTheDocument();
  });

  test("displays the relevant heading when a day of the week link is clicked", () => {
    setup();

    const link = screen.getByRole("link", { name: "Wednesday" });
    fireEvent.click(link);
    expect(screen.getByText(/wednesday classes/i)).toBeInTheDocument();

    const link2 = screen.getByRole("link", { name: "Friday" });
    fireEvent.click(link2);
    expect(screen.getByText(/friday classes/i)).toBeInTheDocument();

    const link3 = screen.getByRole("link", { name: "Saturday" });
    fireEvent.click(link3);
    expect(screen.getByText(/saturday classes/i)).toBeInTheDocument();

    const link4 = screen.getByRole("link", { name: "Sunday" });
    fireEvent.click(link4);
    expect(screen.getByText(/sunday classes/i)).toBeInTheDocument();
  });

  test("displays the correct day of the week heading that matches the url", () => {
    const route = "/classes/friday";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Classes />
      </MemoryRouter>
    );

    expect(screen.getByText(/friday classes/i)).toBeInTheDocument();
  });
});
