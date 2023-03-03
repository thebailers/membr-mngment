import CalendarDay from "../calendar-day/calendar-day";
import CalendarGuides from "./calendar-guides.component";
import { CalendarGrid } from "./calendar-week.styles";

import { daysOfWeekArray } from "../../../utils/utils";

const CalendarWeek = () => {
  const todayInt = new Date().getDay();
  return (
    <CalendarGrid>
      <div className="calendar-grid">
        {/* todo: dynamic days - 7 days from today */}
        <CalendarDay day={daysOfWeekArray[todayInt % daysOfWeekArray.length]} />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 1) % daysOfWeekArray.length]}
        />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 2) % daysOfWeekArray.length]}
        />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 3) % daysOfWeekArray.length]}
        />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 4) % daysOfWeekArray.length]}
        />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 5) % daysOfWeekArray.length]}
        />
        <CalendarDay
          day={daysOfWeekArray[(todayInt + 6) % daysOfWeekArray.length]}
        />
      </div>

      <CalendarGuides />
    </CalendarGrid>
  );
};

export default CalendarWeek;
