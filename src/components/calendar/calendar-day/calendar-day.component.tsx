import { ClassDetail } from "../../class-list/class-list.component";
import CalendarDayClass from "../calendar-day-class/calendar-day-class.component";
import { ClassRosterForecastItem } from "../calendar-week/calendar-week.component";

export type TCalendarDay = {
  day: string;
  date: Date;
  dayRoster: ClassRosterForecastItem[];
  classes: ClassDetail[];
};

const CalendarDay = ({ day, classes }: TCalendarDay) => {
  return (
    <div className="day">
      <div className="day-label">{day}</div>
      {classes.map((c) => (
        <CalendarDayClass key={c.id} c={c} />
      ))}
    </div>
  );
};

export default CalendarDay;
