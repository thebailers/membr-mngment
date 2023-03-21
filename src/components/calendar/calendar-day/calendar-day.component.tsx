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
  setDayRoster: React.Dispatch<React.SetStateAction<RosterDay[]>>;
};

const CalendarDay = ({
  day,
  classes,
  date,
  dayRoster,
  setDayRoster,
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
            setDayRoster={setDayRoster}
          />
        );
      })}
    </div>
  );
};

export default CalendarDay;
