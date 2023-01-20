import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ClassesMenu from "../classes-menu.component";

const setup = () =>
  render(
    <MemoryRouter>
      <ClassesMenu />
    </MemoryRouter>
  );

describe("the classes component", () => {
  test("displays a menu with all days of the week", () => {
    setup();

    const expecteddow = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const dowListItems = screen.getAllByRole("listitem");

    expect(dowListItems.length).toBe(7);

    dowListItems.forEach((item, itemIndex) => {
      const expectedDayOfTheWeek = expecteddow[itemIndex];

      const dayOfTheWeekLink = within(item).getByRole("link", {
        name: expectedDayOfTheWeek,
      });

      expect(dayOfTheWeekLink).toBeInTheDocument();
    });
  });
});
