import { useState } from "react";
import CalendarDay from "../calendar-day/calendar-day.component";
import CalendarGuides from "./calendar-guides.component";
import { CalendarGrid } from "./calendar-week.styles";

import { getDayStringFromDayIndex } from "../../../utils/utils";
import {
  getDateXDaysFromToday,
  compareTwoDatesIgnoringTime,
} from "../../../utils/date.utils";
import { classesData, DaysOfTheWeek } from "../../../utils/class.utils";
import { useEffect } from "react";

export type ClassRosterForecastItem = {
  [key: string]: {
    [key: string]: {
      signedUp: string[];
    };
  };
};

const forecastedAttendance: ClassRosterForecastItem[] = [
  {
    "Mon Mar 13 2023 12:14:55 GMT+0000": {
      "1830": {
        signedUp: [
          "1", // array of userids
        ],
      },
      "2000": {
        signedUp: ["3", "4", "7"],
      },
    },
  },
  {
    "Sun Mar 12 2023 12:14:55 GMT+0000": {
      "1930": {
        signedUp: [
          "2", // array of userids
        ],
      },
    },
  },
];

const CalendarWeek = () => {
  const todayInt = new Date().getDay();
  const countOneWeek = [0, 1, 2, 3, 4, 5, 6];

  // temporary store for class roster
  const [forecastedRoster, setForecastedRoster] =
    useState<ClassRosterForecastItem[]>(forecastedAttendance);

  // useEffect(() => {
  //   // fetch week's classes roster, will come from firebase
  // }, []);

  const getClassesForGivenDay = (day: DaysOfTheWeek) => {
    return classesData.filter((c) => c.dayOfWeek === day);
  };

  return (
    <CalendarGrid>
      <div className="calendar-grid">
        {countOneWeek.map((n: number) => {
          const day = getDayStringFromDayIndex(todayInt + n);
          const date = getDateXDaysFromToday(n);
          const roster = forecastedRoster.filter((rObj) => {
            const dateKey = Object.keys(rObj)[0];
            compareTwoDatesIgnoringTime(new Date(dateKey), date);
            return compareTwoDatesIgnoringTime(new Date(dateKey), date);
          });
          return (
            <CalendarDay
              key={`day${n}`}
              day={day}
              date={date}
              dayRoster={roster}
              setDayRoster={setForecastedRoster}
              classes={getClassesForGivenDay(day as DaysOfTheWeek)}
            />
          );
        })}
      </div>

      <CalendarGuides />
    </CalendarGrid>
  );
};

export default CalendarWeek;
