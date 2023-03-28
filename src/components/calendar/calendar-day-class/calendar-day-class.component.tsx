import { useEffect, useState, useContext } from "react";
import type { DocumentData } from "firebase/firestore";
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
import { stringIntegarToTime } from "../../../utils/utils";

export type CalendarDayClassProps = {
  specificClass: ClassDetail;
  date: Date;
  rosterClass: RosterClass | undefined;
  dayRoster: RosterDay | undefined;
  updateCalendarWeek: (dayRoster: RosterDay) => void;
  removeUserFromClassForecast: (
    userID: DocumentData[string],
    dayRoster: RosterDay,
    time: string,
    registered: string[] | undefined
  ) => void;
};

const CalendarDayClass = ({
  specificClass,
  date,
  rosterClass,
  dayRoster,
  updateCalendarWeek,
  removeUserFromClassForecast,
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
    // todo - this needs refactoring - helper classes to simplify
    if (attending) {
      // remove uid from attending db doc for this class
      // on update of rosterClass, rerender will handle ui update of user not attending
      if (currentUser && dayRoster) {
        removeUserFromClassForecast(
          currentUser.uid,
          dayRoster,
          specificClass.start,
          rosterClass?.registered
        );
      }

      // const newRosterClass: RosterClass = {
      //   time: specificClass.start,
      //   registered: dayRoster?.classes
      //     .find((dayClass) => dayClass.time === specificClass.start)
      //     ?.registered.filter((userId) => userId !== currentUser?.uid),
      // };
    } else {
      // not currently attending - we need to add user to attending
      // check if day exist in the database for this class on this date
      if (!dayRoster) {
        const newDayRoster: RosterDay = {
          date,
          classes: [
            {
              time: specificClass.start,
              registered: [currentUser?.uid],
            },
          ],
        };
        updateCalendarWeek(newDayRoster);
      }

      if (dayRoster && !rosterClass) {
        const newRosterClass: RosterClass = {
          time: specificClass.start,
          registered: [currentUser?.uid],
        };

        const updatedDayRoster: RosterDay = {
          date: dayRoster.date,
          classes: [...dayRoster.classes, newRosterClass],
        };

        updateCalendarWeek(updatedDayRoster);
      }

      if (dayRoster && rosterClass) {
        // rosterClass exists
        const updatedClassRoster = dayRoster.classes.map((classObj) => {
          if (classObj.time === rosterClass.time) {
            return {
              time: classObj.time,
              registered: [...classObj.registered, currentUser?.uid],
            };
          } else {
            return classObj;
          }
        });

        const updatedDayRoster: RosterDay = {
          date,
          classes: updatedClassRoster,
        };

        updateCalendarWeek(updatedDayRoster);
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

  return (
    <div
      className={`class class--${specificClass.type} s${specificClass.start}_e${specificClass.end}`}
      style={{ gridRow: getGridRowCSS(specificClass.start, specificClass.end) }}
    >
      <h3 className="class--time">
        {stringIntegarToTime(specificClass.start)} -{" "}
        {stringIntegarToTime(specificClass.end)} -{" "}
        <span className="class--type">{specificClass.type}</span>
      </h3>
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
