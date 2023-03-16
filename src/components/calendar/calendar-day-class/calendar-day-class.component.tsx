import { useEffect, useState, useContext } from "react";
import {
  getMinsCSSGridName,
  getHourCSSGridName,
} from "../../../utils/calendar.utils";
import { ClassDetail } from "../../class-list/class-list.component";
import { ClassRosterForecastObject } from "../calendar-week/calendar-week.component";
import { UserContext } from "../../../contexts/user.context";

export type CalendarDayClassProps = {
  c: ClassDetail;
  date: Date;
  dayRoster: ClassRosterForecastObject;
  setDayRoster: React.Dispatch<
    React.SetStateAction<ClassRosterForecastObject[]>
  >;
};

const CalendarDayClass = ({
  c,
  date,
  dayRoster,
  setDayRoster,
}: CalendarDayClassProps) => {
  const { currentUser } = useContext(UserContext);
  // const [attendees, setAttendees] = useState<string[] | null>(null);
  const [attending, setAttending] = useState<boolean>(false);
  const [checkedIfAttending, setCheckedIfAttending] = useState<boolean>(false);

  // useEffect(() => {
  //   const currentClass = dayRoster.classes.filter(
  //     (cls) => cls.time === c.start
  //   );
  //   if (currentUser && currentClass.length > 0) {
  //     setAttending(currentClass[0].registered.includes(currentUser.uid));
  //     setCheckedIfAttending(true);
  //   }
  // }, [currentUser, dayRoster]);

  useEffect(() => {
    if (currentUser) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }, [currentUser]);

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
      className={`class class-${c.type} s${c.start}_e${c.end}`}
      style={{ gridRow: getGridRowCSS(c.start, c.end) }}
    >
      <h3>
        {c.start} - {c.end}
      </h3>
      <h4>{c.type}</h4>
      {c.tags.length && (
        <ul>
          {c.tags.map((t, i) => (
            <li key={i}>{t}</li>
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
