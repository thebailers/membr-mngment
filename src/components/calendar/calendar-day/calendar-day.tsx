import { ClassDetail } from "../../class-list/class-list.component";

type TCalendarDay = {
  day: string;
  classes: ClassDetail[];
};

const CalendarDay = ({ day, classes }: TCalendarDay) => {
  const getMins = (m: string) => {
    switch (m) {
      case "00":
        return "1";
      case "15":
        return "2";
      case "30":
        return "3";
      case "45":
        return "4";
      default:
        throw new Error(
          `A class time with an unsupported start or end minutes value was found. The minutes value sent is ${m}`
        );
    }
  };

  const getHourCSSGridName = (h: string) => {
    switch (h) {
      case "09":
        return "nine";
      case "10":
        return "ten";
      case "11":
        return "eleven";
      case "12":
        return "twelve";
      case "13":
        return "thirteen";
      case "14":
        return "fourteen";
      case "15":
        return "fifteen";
      case "16":
        return "sixteen";
      case "17":
        return "seventeen";
      case "18":
        return "eighteen";
      case "19":
        return "nineteen";
      case "20":
        return "twenty";
      case "21":
        return "twentyone";
    }
  };

  const getGridRowCSS = (start: string, end: string) => {
    const startHour = getHourCSSGridName(start.slice(0, 2));
    const startMinRow = getMins(start.slice(2));

    const endHour = getHourCSSGridName(end.slice(0, 2));
    const endMinRow = getMins(end.slice(2));

    const value = `${startHour} ${startMinRow} / ${endHour} ${endMinRow}`;

    return value;
  };
  return (
    <div className="day">
      <div className="day-label">{day}</div>
      {classes.map((c) => (
        <div
          key={c.id}
          className={`class class-${c.type} s${c.start}_e${c.end}`}
          style={{ gridRow: getGridRowCSS(c.start, c.end) }}
        >
          Class
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;
