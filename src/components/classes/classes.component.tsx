import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { classesData } from "../../utils/class.utils";
import {
  daysOfWeekArray,
  getWeekdayNumberFromURL,
  weekdaysLowerCase,
} from "../../utils/utils";

import ClassesMenu from "./classes-menu.component";
import ClassList from "../class-list/class-list.component";
import CalendarWeek from "../calendar-week/calendar-week.component";

const Classes = () => {
  const { weekday } = useParams();
  const [activeWeekdayNumber, setActiveWeekdayNumber] = useState<number | null>(
    null
  );

  useEffect(() => {
    // /classes/weekday;
    setActiveWeekdayNumber(
      getWeekdayNumberFromURL(weekday as weekdaysLowerCase)
    );
  }, [weekday]);

  return (
    <div>
      {typeof activeWeekdayNumber === "number" ? (
        <>
          <ClassesMenu weekdayNumber={activeWeekdayNumber} />
          <h2>{daysOfWeekArray[activeWeekdayNumber]} Classes</h2>
          <ClassList
            classesData={classesData}
            activeWeekdayNumber={activeWeekdayNumber}
          />
          <CalendarWeek />
        </>
      ) : (
        <>Loading spinner [TODO]</>
      )}
    </div>
  );
};

export default Classes;
