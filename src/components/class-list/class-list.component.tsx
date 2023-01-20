import { FC, useEffect, useState, useContext } from "react";

import {
  classTimes,
  classLength,
  classTypes,
  daysOfTheWeek,
} from "../../utils/classutils";
import {
  urlFriendlyTime,
  urlFriendlyWeekday,
  daysOfWeekArray,
} from "../../utils/utils";

import { ClassesContext } from "../../contexts/classes.context";

import { ClassTimeBlock } from "./class-list.styles";

type ClassListProps = {
  classesData: ClassDetail[];
};

export type ClassDetail = {
  id: number;
  time: classTimes;
  type: classTypes;
  dayOfWeek: daysOfTheWeek;
  classLength: classLength;
};

const ClassList: FC<ClassListProps> = ({ classesData }) => {
  const { activeWeekdayNumber, setActiveClassTime } =
    useContext(ClassesContext);
  const [specificDayClasses, setSpecificDayClasses] = useState<ClassDetail[]>(
    []
  );

  useEffect(() => {
    // classes data to be fetched below from database
    // filter data to the active weekday
    const specificDayClassData = classesData.filter(
      (c) => c.dayOfWeek === daysOfWeekArray[activeWeekdayNumber]
    );

    setSpecificDayClasses(specificDayClassData);
  }, [activeWeekdayNumber, classesData]);

  return (
    <div>
      {specificDayClasses.length ? (
        <div>
          {specificDayClasses.map((c) => (
            <ClassTimeBlock
              to={`/classes/${urlFriendlyWeekday(
                daysOfWeekArray[activeWeekdayNumber]
              )}/${urlFriendlyTime(c.time)}`}
              key={c.id}
              onClick={() => setActiveClassTime(c.time)}
            >
              {c.time}
            </ClassTimeBlock>
          ))}
        </div>
      ) : (
        <div>
          <p>Loading classes...</p>
        </div>
      )}
    </div>
  );
};

export default ClassList;
