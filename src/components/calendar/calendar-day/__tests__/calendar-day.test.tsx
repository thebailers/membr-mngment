import { screen, render } from "@testing-library/react";

import CalendarDay, { TCalendarDay } from "../calendar-day.component";
import { ClassTypes, DaysOfTheWeek } from "../../../../utils/class.utils";

const setupProps = {
  day: "Monday",
  classes: [
    {
      id: 1,
      start: "1830",
      end: "2030",
      type: ClassTypes.adults,
      classLength: "120",
      dayOfWeek: DaysOfTheWeek.monday,
      tags: ["gi"],
    },
  ],
};

const moreClasses = [
  {
    id: 1,
    start: "1430",
    end: "1630",
    type: ClassTypes.adults,
    classLength: "120",
    dayOfWeek: DaysOfTheWeek.monday,
    tags: ["gi"],
  },
  {
    id: 2,
    start: "1630",
    end: "1830",
    type: ClassTypes.adults,
    classLength: "120",
    dayOfWeek: DaysOfTheWeek.monday,
    tags: ["gi"],
  },
  {
    id: 3,
    start: "1830",
    end: "2030",
    type: ClassTypes.adults,
    classLength: "120",
    dayOfWeek: DaysOfTheWeek.monday,
    tags: ["gi"],
  },
];

const setup = (calendarProps: TCalendarDay) => {
  const utils = render(<CalendarDay {...calendarProps} />);
  return { ...utils };
};

describe("calendar day", () => {
  it("displays a textual label for the day of the week", () => {
    setup(setupProps);
    expect(screen.getByText(/monday/i)).toBeInTheDocument();
  });

  it("displays the correct class information", () => {
    setup(setupProps);
    expect(screen.getByText(/1830 - 2030/i)).toBeInTheDocument();
    expect(screen.getByText(/adults/i)).toBeInTheDocument();
    expect(screen.getByText(/gi/i)).toBeInTheDocument();
  });

  it("displays all the tags", () => {
    setup({
      day: "Tuesday",
      classes: [
        { ...setupProps.classes[0], tags: ["lorem", "ipsum", "dolor"] },
      ],
    });
    const tags = screen.getAllByRole("listitem");
    expect(tags.length).toBe(3);
    expect(screen.getByText(/lorem/i)).toBeInTheDocument();
    expect(screen.getByText(/ipsum/i)).toBeInTheDocument();
    expect(screen.getByText(/dolor/i)).toBeInTheDocument();
  });

  it("displays all the classes", () => {
    setup({
      day: "Tuesday",
      classes: moreClasses,
    });
    const tagLists = screen.getAllByRole("list");
    expect(tagLists.length).toBe(3);
    expect(screen.getByText(/1430 - 1630/i)).toBeInTheDocument();
    expect(screen.getByText(/1630 - 1830/i)).toBeInTheDocument();
    expect(screen.getByText(/1830 - 2030/i)).toBeInTheDocument();
  });
});
