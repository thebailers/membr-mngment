import { CalendarGrid } from "./calendar-week.styles";

const CalendarWeek = () => {
  return (
    <CalendarGrid>
      <div className="calendar-grid">
        <div className="day monday">
          <div className="class nine15_ten45">Class 9.15 to 10.45</div>
          <div className="class eighteen30_twenty30">Class 18.30 to 20.30</div>
        </div>
        <div className="day tuesday"></div>
        <div className="day wednesday"></div>
        <div className="day thursday"></div>
        <div className="day friday"></div>
        <div className="day saturday"></div>
        <div className="day sunday"></div>
      </div>
      <div className="calendar-guides">
        <div className="guide nine">09.00</div>
      </div>
    </CalendarGrid>
  );
};

export default CalendarWeek;
