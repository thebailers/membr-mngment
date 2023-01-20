import { useContext } from "react";

import SpecificClassHeader from "./specific-class-header.component";
import SignInToClass from "../signin-to-class/signin-to-class.component";

import { ClassesContext } from "../../contexts/classes.context";

import { daysOfWeekArray } from "../../utils/utils";

const SpecificClass = () => {
  const { activeWeekdayNumber, activeClassTime } = useContext(ClassesContext);
  return (
    <div>
      <SpecificClassHeader
        day={daysOfWeekArray[activeWeekdayNumber]}
        time={activeClassTime}
      />
      <SignInToClass />
      <p>Class sign in</p>
    </div>
  );
};

export default SpecificClass;
