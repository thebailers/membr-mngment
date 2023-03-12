import CalendarDay from "../calendar-day/calendar-day.component";
import CalendarGuides from "./calendar-guides.component";
import { CalendarGrid } from "./calendar-week.styles";

import { getDayStringFromDayIndex } from "../../../utils/utils";
import { getDateXDaysFromToday } from "../../../utils/date.utils";
import { classesData, DaysOfTheWeek } from "../../../utils/class.utils";

const CalendarWeek = () => {
  const todayInt = new Date().getDay();
  const countOneWeek = [0, 1, 2, 3, 4, 5, 6];

  const getClassesForGivenDay = (day: DaysOfTheWeek) => {
    return classesData.filter((c) => c.dayOfWeek === day);
  };

  return (
    <CalendarGrid>
      <div className="calendar-grid">
        {countOneWeek.map((n: number) => {
          const day = getDayStringFromDayIndex(todayInt + n);
          const date = getDateXDaysFromToday(n);
          return (
            <CalendarDay
              key={`day${n}`}
              day={day}
              date={date}
              classes={getClassesForGivenDay(day as DaysOfTheWeek)}
            />
          );
        })}
      </div>

      <CalendarGuides />
    </CalendarGrid>
  );
};

export default CalendarWeek;
