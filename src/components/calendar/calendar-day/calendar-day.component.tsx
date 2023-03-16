import { ClassDetail } from "../../class-list/class-list.component";
import CalendarDayClass from "../calendar-day-class/calendar-day-class.component";
import { ClassRosterForecastObject } from "../calendar-week/calendar-week.component";

export type TCalendarDay = {
  day: string;
  classes: ClassDetail[];
  date: Date;
  dayRoster: ClassRosterForecastObject;
  setDayRoster: React.Dispatch<
    React.SetStateAction<ClassRosterForecastObject[]>
  >;
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
      {classes.map((c) => (
        <CalendarDayClass
          key={c.id}
          c={c}
          date={date}
          dayRoster={dayRoster}
          setDayRoster={setDayRoster}
        />
      ))}
    </div>
  );
};

export default CalendarDay;
