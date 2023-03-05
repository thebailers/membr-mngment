import { screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import ClassList from "../class-list.component";
import { renderWithRouter } from "../../../utils/testUtils";

import { ClassTypes } from "../../../utils/class.utils";
import { DaysOfTheWeek } from "../../../utils/class.utils";
import { ClassDetail } from "../class-list.component";

const MockClassesData: ClassDetail[] = [
  {
    id: 3,
    start: "1600",
    end: "1645",
    type: ClassTypes.cubs,
    classLength: "45",
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 4,
    start: "1645",
    end: "1745",
    type: ClassTypes.juniors,
    classLength: "60",
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 5,
    start: "1800",
    end: "1900",
    type: ClassTypes.adults,
    classLength: "60",
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
  {
    id: 6,
    start: "1900",
    end: "2100",
    type: ClassTypes.adults,
    classLength: "120",
    dayOfWeek: DaysOfTheWeek.wednesday,
  },
];

const setup = (route: string) =>
  renderWithRouter(
    <Routes>
      <Route
        path="/classes/:weekday"
        element={
          <ClassList classesData={MockClassesData} activeWeekdayNumber={3} />
        }
      />
    </Routes>,
    { route }
  );

describe("the class list component", () => {
  test("renders the class list component", () => {
    setup("/classes/wednesday");
    expect(screen.getByText("1600")).toBeInTheDocument();
    expect(screen.getByText("1645")).toBeInTheDocument();
    expect(screen.getByText("1800")).toBeInTheDocument();
    expect(screen.getByText("1900")).toBeInTheDocument();
  });

  test("displays loading until the class data loads", () => {
    const emptyMockClassesData: ClassDetail[] = [];
    renderWithRouter(
      <Routes>
        <Route
          path="/classes/:weekday"
          element={
            <ClassList
              classesData={emptyMockClassesData}
              activeWeekdayNumber={0}
            />
          }
        />
      </Routes>,
      { route: "/classes/monday" }
    );
    expect(screen.getByText(/Loading classes.../i)).toBeInTheDocument();
  });
});
