import CalendarDay from "../calendar-day/calendar-day";
import CalendarGuides from "./calendar-guides.component";
import { CalendarGrid } from "./calendar-week.styles";

import { getDayStringFromDayIndex } from "../../../utils/utils";

const CalendarWeek = () => {
  const todayInt = new Date().getDay();
  return (
    <CalendarGrid>
      <div className="calendar-grid">
        {/* todo: dynamic days - 7 days from today */}
        <CalendarDay day={getDayStringFromDayIndex(todayInt)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 1)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 2)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 3)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 4)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 5)} />
        <CalendarDay day={getDayStringFromDayIndex(todayInt + 6)} />
      </div>

      <CalendarGuides />
    </CalendarGrid>
  );
};

export default CalendarWeek;
