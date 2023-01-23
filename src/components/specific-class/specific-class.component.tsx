import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SpecificClassHeader from "./specific-class-header.component";
import SignInToClass from "../signin-to-class/signin-to-class.component";

import { capitaliseFirstLetter, daysOfWeekArray } from "../../utils/utils";
import { ClassDetail } from "../class-list/class-list.component";
import { classesData } from "../../utils/classutils";
import { getClassSigninTimes } from "../../utils/dateUtils";

const SpecificClass = () => {
  const { weekday, time } = useParams();
  const [classData, setClassData] = useState<ClassDetail | null>(null);
  const [canSignIn, setCanSignIn] = useState<boolean | undefined>(undefined);
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
    if (isClassToday && classData) {
      const signInCheckTimer = setInterval(() => {
        const now = new Date();
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
          ? setCanSignIn(true)
          : setCanSignIn(false);
      }, 1000);
      return () => clearInterval(signInCheckTimer);
    }
  }, [isClassToday, classData]);

  return (
    <div>
      {classData && typeof canSignIn === "boolean" ? (
        <div>
          <SpecificClassHeader
            day={classData.dayOfWeek}
            time={classData.time}
          />
          {/* <SignInToClass /> */}
          {canSignIn ? (
            <p>Class sign in</p>
          ) : (
            <p>Cannot sign in to this class yet</p>
          )}
        </div>
      ) : (
        <>Loading spinner [TODO]</>
      )}
    </div>
  );
};

export default SpecificClass;
