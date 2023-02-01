import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SigninToClass from "../signin-to-class/signin-to-class.component";

import { capitaliseFirstLetter, daysOfWeekArray } from "../../utils/utils";
import { ClassDetail } from "../class-list/class-list.component";
import { classesData } from "../../utils/class.utils";
import { getClassSigninTimes } from "../../utils/dateUtils";

export enum AccessStatus {
  pending = "pending",
  authorised = "authorised",
  unauthorised = "unauthorised",
}

const SpecificClass = () => {
  const { weekday, time } = useParams();
  const [classData, setClassData] = useState<ClassDetail | null>(null);
  const [canSignIn, setCanSignIn] = useState<AccessStatus>(
    AccessStatus.pending
  );
  const [isClassToday, setIsClassToday] = useState<boolean | undefined>(
    undefined
  );

  // Fetch Class Data
  useEffect(() => {
    const data = classesData.find((c) => {
      if (weekday && time)
        return (
          c.dayOfWeek === capitaliseFirstLetter(weekday) && c.time === time
        );
      return undefined;
    });
    if (data) setClassData(data);
  }, [weekday, time]);

  // Check if class passed to SpecificClass is today
  useEffect(() => {
    if (classData) {
      const todayIndex = new Date().getDay();
      const classIndex = daysOfWeekArray.indexOf(classData.dayOfWeek);
      setIsClassToday(todayIndex === classIndex);
    }
  }, [classData]);

  // Check if the user can sign in to class
  useEffect(() => {
    if (classData) {
      const signInCheckTimer = setInterval(() => {
        // const now = new Date();
        // const now = new Date("Mon Jan 23 2023 18:14:00 GMT+0000");
        const now = new Date("Mon Jan 23 2023 18:25:00 GMT+0000");
        const classTime = classData.time; // 0930
        const classTimeHours = parseInt(classTime.slice(0, 2));
        const classTimeMins = parseInt(classTime.slice(-2));

        const { classSigninStart, classSigninEnd } = getClassSigninTimes(
          now,
          classTimeHours,
          classTimeMins,
          classData.classLength
        );

        now >= classSigninStart && now <= classSigninEnd
          ? setCanSignIn(AccessStatus.authorised)
          : setCanSignIn(AccessStatus.unauthorised);
      }, 1000);
      return () => clearInterval(signInCheckTimer);
    }
  }, [isClassToday, classData]);

  return (
    <div>
      {classData && canSignIn !== AccessStatus.pending ? (
        <SigninToClass
          dayOfWeek={classData.dayOfWeek}
          time={classData.time}
          canSignIn={canSignIn}
        />
      ) : (
        <>Loading spinner [TODO]</>
      )}
    </div>
  );
};

export default SpecificClass;
