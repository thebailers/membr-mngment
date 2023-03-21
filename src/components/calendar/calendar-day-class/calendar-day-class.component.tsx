import { useEffect, useState, useContext } from "react";
import { ClassDetail } from "../../class-list/class-list.component";
import {
  RosterClass,
  RosterDay,
} from "../calendar-week/calendar-week.component";
import { UserContext } from "../../../contexts/user.context";
import {
  getMinsCSSGridName,
  getHourCSSGridName,
} from "../../../utils/calendar.utils";
import { classesData } from "../../../utils/class.utils";

export type CalendarDayClassProps = {
  specificClass: ClassDetail;
  date: Date;
  rosterClass: RosterClass | undefined;
  setDayRoster: React.Dispatch<React.SetStateAction<RosterDay[]>>;
};

const CalendarDayClass = ({
  specificClass,
  date,
  rosterClass,
  setDayRoster,
}: CalendarDayClassProps) => {
  const { currentUser } = useContext(UserContext);
  // const [attendees, setAttendees] = useState<string[] | null>(null);
  const [attending, setAttending] = useState<boolean>(false);
  const [checkedIfAttending, setCheckedIfAttending] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser && rosterClass)
      setAttending(rosterClass.registered.includes(currentUser.uid));
    setCheckedIfAttending(true);
  }, [currentUser, rosterClass]);

  /**
   * Toggles the attending class status - this is not signing
   * in to a class, rather informing of intention to attend
   */
  const toggleAttendingClass = () => {
    // setAttending(!attending);
    if (attending) {
      // remove uid from attending db doc for this class
      // on update of rosterClass, rerender will handle ui update of user not attending
    } else {
      // check if day and class exist in the database for this roster date
      if (!rosterClass) {
        // todo, bug below - only add user to the mapped class with the same start time as the clicked class
        const newRosterDay: RosterDay = {
          date,
          classes: classesData
            .filter(
              (classData) => classData.dayOfWeek === specificClass.dayOfWeek
            )
            .map((classData) => ({
              time: classData.start,
              registered: [currentUser?.uid],
            })),
        };
        setDayRoster((oldDayRoster) => [...oldDayRoster, newRosterDay]);
        // if no - we will create the date here, ready to add below
        // if no, we post a new doc with the added data above, this will rerender and handle ui update
      } else {
        // if yes - we update the db entry with the uid. this will rerender and handle ui update
      }
    }
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
      className={`class class--${specificClass.type} s${specificClass.start}_e${specificClass.end}`}
      style={{ gridRow: getGridRowCSS(specificClass.start, specificClass.end) }}
    >
      <h3 className="class--time">
        {specificClass.start} - {specificClass.end}
      </h3>
      <h4 className="class--type">{specificClass.type}</h4>
      {specificClass.tags.length && (
        <ul className="class--tags">
          {specificClass.tags.map((tag, i) => (
            <li key={i} className="class--tags-item">
              {tag}
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
