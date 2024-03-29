import type { DocumentData } from "firebase/firestore";
import { ClassDetail } from "../../class-list/class-list.component";
import CalendarDayClass from "../calendar-day-class/calendar-day-class.component";
import {
  RosterClass,
  RosterDay,
} from "../calendar-week/calendar-week.component";

export type TCalendarDay = {
  day: string;
  classes: ClassDetail[];
  date: Date;
  dayRoster: RosterDay | undefined;
  updateCalendarWeek: (dayRoster: RosterDay) => void;
  removeUserFromClassForecast: (
    userID: DocumentData[string],
    dayRoster: RosterDay,
    time: string,
    registered: string[] | undefined
  ) => void;
};

const CalendarDay = ({
  day,
  classes,
  date,
  dayRoster,
  updateCalendarWeek,
  removeUserFromClassForecast,
}: TCalendarDay) => {
  return (
    <div className="day">
      <div className="day-label">{day}</div>
      {classes.map((specificClass) => {
        let rosterClass: RosterClass | undefined;
        if (dayRoster && dayRoster.classes.length > 0) {
          rosterClass = dayRoster.classes.find(
            (dRC) => dRC.time === specificClass.start
          );
        }
        return (
          <CalendarDayClass
            key={specificClass.id}
            specificClass={specificClass}
            date={date}
            rosterClass={rosterClass}
            dayRoster={dayRoster}
            updateCalendarWeek={updateCalendarWeek}
            removeUserFromClassForecast={removeUserFromClassForecast}
          />
        );
      })}
    </div>
  );
};

export default CalendarDay;
