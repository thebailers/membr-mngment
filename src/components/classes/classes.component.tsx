import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import { classesData } from "../../utils/classutils";
import {
  daysOfWeekArray,
  getWeekdayNumberFromURL,
  capitaliseFirstLetter,
  weekdaysLowerCase,
} from "../../utils/utils";

import ClassesMenu from "./classes-menu.component";
import ClassList from "../class-list/class-list.component";

// import { ClassesContext } from "../../contexts/classes.context";

const Classes = () => {
  // const { activeWeekdayNumber, setActiveWeekdayNumber } =
  //   useContext(ClassesContext);

  // /classes/weekday
  const location = useLocation();
  const dow = location.pathname.replace("/classes/", "");
  const activeWeekdayNumber = getWeekdayNumberFromURL(dow as weekdaysLowerCase);

  // useEffect(() => {
  //   const day = location.pathname.replace("/classes/", "");
  //   const dayIndex = daysOfWeekArray.indexOf(capitaliseFirstLetter(day));
  //   if (dayIndex !== -1) {
  //     setActiveWeekdayNumber(
  //       daysOfWeekArray.indexOf(capitaliseFirstLetter(day))
  //     );
  //   }
  // }, [location, setActiveWeekdayNumber]);

  return (
    <div>
      <ClassesMenu weekdayNumber={activeWeekdayNumber} />

      <h2>{daysOfWeekArray[activeWeekdayNumber]} Classes</h2>
      <ClassList classesData={classesData} />
    </div>
  );
};

export default Classes;
