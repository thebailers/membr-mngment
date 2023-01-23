import { Routes, Route, Navigate } from "react-router-dom";

import Classes from "./classes.component";
import SpecificClass from "../specific-class/specific-class.component";

import { getTodayDOWString, urlFriendlyWeekday } from "../../utils/utils";

const ClassesWrapper = () => {
  const today = urlFriendlyWeekday(getTodayDOWString());
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/classes/${today}`} />} />
      <Route path="/:weekday" element={<Classes />} />
      <Route path="/:weekday/:time" element={<SpecificClass />} />
    </Routes>
  );
};

export default ClassesWrapper;
