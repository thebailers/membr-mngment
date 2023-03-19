import { useEffect, useState, useContext } from "react";
import {
  getMinsCSSGridName,
  getHourCSSGridName,
} from "../../../utils/calendar.utils";
import { ClassDetail } from "../../class-list/class-list.component";
import {
  RosterClass,
  RosterDay,
} from "../calendar-week/calendar-week.component";
import { UserContext } from "../../../contexts/user.context";

export type CalendarDayClassProps = {
  c: ClassDetail;
  date: Date;
  rosterClass: RosterClass | undefined;
  setDayRoster: React.Dispatch<React.SetStateAction<RosterDay[]>>;
};

const CalendarDayClass = ({
  c,
  date,
  rosterClass,
  setDayRoster,
}: CalendarDayClassProps) => {
  const { currentUser } = useContext(UserContext);
  // const [attendees, setAttendees] = useState<string[] | null>(null);
  const [attending, setAttending] = useState<boolean>(false);
  const [checkedIfAttending, setCheckedIfAttending] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser && rosterClass) {
      // setAttending(rosterClass.registered.includes(currentUser.uid));
      setAttending(rosterClass.registered.includes("1"));
    }
    setCheckedIfAttending(true);
  }, [currentUser, rosterClass]);

  const toggleAttendingClass = () => {
    setAttending(!attending);
  };

  const getGridRowCSS = (start: string, end: string) => {
    const startHour = getHourCSSGridName(start.slice(0, 2));
    const startMinRow = getMinsCSSGridName(start.slice(2));

    const endHour = getHourCSSGridName(end.slice(0, 2));
    const endMinRow = getMinsCSSGridName(end.slice(2));

    const value = `${startHour} ${startMinRow} / ${endHour} ${endMinRow}`;

    return value;
  };

  const isAttending = () => {
    return false;
  };

  return (
    <div
      className={`class class--${c.type} s${c.start}_e${c.end}`}
      style={{ gridRow: getGridRowCSS(c.start, c.end) }}
    >
      <h3 className="class--time">
        {c.start} - {c.end}
      </h3>
      <h4 className="class--type">{c.type}</h4>
      {c.tags.length && (
        <ul className="class--tags">
          {c.tags.map((t, i) => (
            <li key={i} className="class--tags-item">
              {t}
            </li>
          ))}
        </ul>
      )}
      {checkedIfAttending && currentUser && (
        <button onClick={toggleAttendingClass}>
          {attending
            ? "I am attending this class"
            : "I am not attending this class"}
        </button>
      )}
    </div>
  );
};

export default CalendarDayClass;
