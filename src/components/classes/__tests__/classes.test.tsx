import { screen, fireEvent } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import Classes from "../classes.component";

import { daysOfWeekArray } from "../../../utils/utils";

import { renderWithRouter } from "../../../utils/testUtils";

const setup = (route: string) =>
  renderWithRouter(
    <Routes>
      <Route path="/classes/:weekday" element={<Classes />} />
    </Routes>,
    { route }
  );

describe("the classes component", () => {
  test("displays the heading with the current day of the week active", () => {
    const today = daysOfWeekArray[new Date().getDay()];
    setup(`/classes/${today}`);
    const regexp = `${today} Classes`;
    expect(screen.getByText(new RegExp(regexp, "i"))).toBeInTheDocument();
  });

  test("displays the relevant heading when a day of the week link is clicked", () => {
    setup("/classes/sunday");
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
    setup("/classes/friday");
    expect(screen.getByText(/friday classes/i)).toBeInTheDocument();
  });
});
