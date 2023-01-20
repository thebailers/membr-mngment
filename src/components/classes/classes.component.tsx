import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { classesData } from "../../utils/classutils";
import {
  daysOfWeekArray,
  getWeekdayNumberFromURL,
  weekdaysLowerCase,
} from "../../utils/utils";

import ClassesMenu from "./classes-menu.component";
import ClassList from "../class-list/class-list.component";

const Classes = () => {
  const [activeWeekdayNumber, setActiveWeekdayNumber] = useState<number | null>(
    null
  );
  const location = useLocation();

  useEffect(() => {
    // /classes/weekday
    const dow = location.pathname.replace("/classes/", "");
    setActiveWeekdayNumber(getWeekdayNumberFromURL(dow as weekdaysLowerCase));
  }, [location]);

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
        </>
      ) : (
        <>Loading spinner [TODO]</>
      )}
    </div>
  );
};

export default Classes;
