import { ClassDetail } from "../../class-list/class-list.component";
import CalendarDayClass from "../calendar-day-class/calendar-day-class.component";

export type TCalendarDay = {
  day: string;
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
