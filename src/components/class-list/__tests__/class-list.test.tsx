import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ClassList from "../class-list.component";

import { classTimes, classTypes, classLength } from "../../../utils/classutils";
import { daysOfTheWeek } from "../../../utils/classutils";
import { ClassDetail } from "../class-list.component";

const weekdayNumber = 3; // Wednesday

const MockClassesData: ClassDetail[] = [
  {
    id: 3,
    time: classTimes.afternoon1600,
    type: classTypes.cubs,
    classLength: classLength.cubs,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 4,
    time: classTimes.afternoon1645,
    type: classTypes.juniors,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 5,
    time: classTimes.evening1800,
    type: classTypes.adults,
    classLength: classLength.fundamentalsJuniors,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
  {
    id: 6,
    time: classTimes.evening1930,
    type: classTypes.adults,
    classLength: classLength.standard,
    dayOfWeek: daysOfTheWeek.wednesday,
  },
];

describe("the class list component", () => {
  test("renders the class list component", () => {
    const route = "/classes/wednesday";
    render(
      <MemoryRouter initialEntries={[route]}>
        <ClassList classesData={MockClassesData} activeWeekdayNumber={3} />
      </MemoryRouter>
    );
    expect(screen.getByText("16.00")).toBeInTheDocument();
    expect(screen.getByText("16.45")).toBeInTheDocument();
    expect(screen.getByText("18.00")).toBeInTheDocument();
    expect(screen.getByText("19.00")).toBeInTheDocument();
  });

  test("displays loading until the class data loads", () => {
    const emptyMockClassesData: ClassDetail[] = [];
    render(
      <MemoryRouter>
        <ClassList classesData={emptyMockClassesData} activeWeekdayNumber={1} />
      </MemoryRouter>
    );
    expect(screen.getByText(/Loading classes.../i)).toBeInTheDocument();
  });
});
