import {
  getMinsCSSGridName,
  getHourCSSGridName,
} from "../../../utils/calendar.utils";
import { ClassDetail } from "../../class-list/class-list.component";

export type CalendarDayClassProps = {
  c: ClassDetail;
};

const CalendarDayClass = ({ c }: CalendarDayClassProps) => {
  const getGridRowCSS = (start: string, end: string) => {
    const startHour = getHourCSSGridName(start.slice(0, 2));
    const startMinRow = getMinsCSSGridName(start.slice(2));

    const endHour = getHourCSSGridName(end.slice(0, 2));
    const endMinRow = getMinsCSSGridName(end.slice(2));

    const value = `${startHour} ${startMinRow} / ${endHour} ${endMinRow}`;

    return value;
  };
  return (
    <div
      key={c.id}
      className={`class class-${c.type} s${c.start}_e${c.end}`}
      style={{ gridRow: getGridRowCSS(c.start, c.end) }}
    >
      <div>
        {c.start} - {c.end}
      </div>
      <div>{c.type}</div>
      {c.tags.length && (
        <ul>
          {c.tags.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarDayClass;
