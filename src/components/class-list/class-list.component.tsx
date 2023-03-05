import { FC, useEffect, useState } from "react";

import { ClassTypes, DaysOfTheWeek } from "../../utils/class.utils";
import {
  urlFriendlyTime,
  urlFriendlyWeekday,
  daysOfWeekArray,
} from "../../utils/utils";

import { ClassTimeBlock } from "./class-list.styles";

type ClassListProps = {
  classesData: ClassDetail[];
  activeWeekdayNumber: number;
};

/**
 * Represents a single class.
 */
export type ClassDetail = {
  id: number;
  /** start - a string of 4 numbers representing hours and minutes of the class' start time */
  start: string;
  /** end - a string of 4 numbers representing hours and minutes of the class' end time */
  end: string;
  type: ClassTypes;
  dayOfWeek: DaysOfTheWeek;
  /** minutes - a string of numbers representing the total class length in minutes */
  classLength: string;
};

const ClassList: FC<ClassListProps> = ({
  classesData,
  activeWeekdayNumber,
}) => {
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
              )}/${urlFriendlyTime(c.start)}`}
              key={c.id}
            >
              {c.start}
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
