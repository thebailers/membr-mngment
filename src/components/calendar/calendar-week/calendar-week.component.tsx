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

export type RosterClass = {
  time: string;
  registered: string[];
};

export type RosterDay = {
  date: Date;
  classes: RosterClass[];
};

const forecastedAttendance: RosterDay[] = [
  {
    date: new Date(
      "Sunday Mar 26 2023 00:00:00 GMT+0000 (Greenwich Mean Time)"
    ),
    classes: [
      {
        time: "1600",
        registered: [
          "1", // array of userids
        ],
      },
      {
        time: "1645",
        registered: [
          "1", // array of userids
        ],
      },
      {
        time: "1800",
        registered: [
          "1", // array of userids
        ],
      },
      {
        time: "1900",
        registered: [
          "1", // array of userids
        ],
      },
    ],
  },
  {
    date: new Date("Thur Mar 16 2023 00:00:00 GMT+0000 (Greenwich Mean Time)"),
    classes: [
      {
        time: "1930",
        registered: [
          "1", // array of userids
        ],
      },
    ],
  },
  {
    date: new Date("Fri Mar 17 2023 00:00:00 GMT+0000 (Greenwich Mean Time)"),
    classes: [
      {
        time: "2030",
        registered: [
          "1", // array of userids
        ],
      },
    ],
  },
];

const CalendarWeek = () => {
  const todayInt = new Date().getDay();
  const countOneWeek = [0, 1, 2, 3, 4, 5, 6];

  // temporary store for class roster
  const [forecastedRoster, setForecastedRoster] =
    useState<RosterDay[]>(forecastedAttendance);

  const getClassesForGivenDay = (day: DaysOfTheWeek) => {
    return classesData.filter((c) => c.dayOfWeek === day);
  };

  const updateCalendarWeek = (dayRoster: RosterDay) => {
    setForecastedRoster((prevWeekRoster) => {
      const idx = forecastedRoster.findIndex(
        (rosterDay) => rosterDay.date === dayRoster.date
      );

      if (idx === -1) {
        return [...prevWeekRoster, dayRoster];
      } else {
        const newForecastRoster = [...prevWeekRoster];
        newForecastRoster[idx] = dayRoster;
        return newForecastRoster;
      }
    });
  };

  return (
    <CalendarGrid>
      <div className="calendar-grid">
        {countOneWeek.map((n: number) => {
          const day = getDayStringFromDayIndex(todayInt + n);
          const date = getDateXDaysFromToday(n);
          const roster = forecastedRoster.find((rObj) =>
            compareTwoDatesIgnoringTime(rObj.date, date)
          );

          return (
            <CalendarDay
              key={`day${n}`}
              day={day}
              date={date}
              dayRoster={roster}
              updateCalendarWeek={updateCalendarWeek}
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
