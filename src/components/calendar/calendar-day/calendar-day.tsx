import { ClassDetail } from "../../class-list/class-list.component";

type TCalendarDay = {
  day: string;
  classes: ClassDetail[];
};

const CalendarDay = ({ day, classes }: TCalendarDay) => {
  return (
    <div className="day">
      <div className="day-label">{day}</div>
      {classes.map((c) => {
        // get end time using start time and dur
        return (
          <div key={c.id} className={`class s${c.start}_e${c.end}`}>
            Class
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDay;
