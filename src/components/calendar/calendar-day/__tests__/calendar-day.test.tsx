import { screen, render } from "@testing-library/react";

import CalendarDay, { TCalendarDay } from "../calendar-day";
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

const setup = ({ day, classes }: TCalendarDay) => {
  const utils = render(<CalendarDay {...setupProps} />);
  return { ...utils };
};

describe("calendar day", () => {
  it("displays a textual label for the day of the week", () => {
    setup(setupProps);
    expect(screen.getByText(/monday/i)).toBeInTheDocument();
  });
});
