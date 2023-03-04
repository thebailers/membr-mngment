type TCalendarDay = {
  day: string;
};

const CalendarDay = ({ day }: TCalendarDay) => {
  return (
    <div className="day">
      <div className="day-label">{day}</div>
      <div className="class nine15_ten45">Class 9.15 to 10.45</div>
      <div className="class eighteen30_twenty30">Class 18.30 to 20.30</div>
    </div>
  );
};

export default CalendarDay;
