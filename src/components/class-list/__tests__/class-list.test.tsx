import { screen } from "@testing-library/react";
import { Routes, Route } from "react-router-dom";
import ClassList from "../class-list.component";
import { renderWithRouter } from "../../../testUtils";

import { classTimes, classTypes, classLength } from "../../../utils/classutils";
import { daysOfTheWeek } from "../../../utils/classutils";
import { ClassDetail } from "../class-list.component";

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
