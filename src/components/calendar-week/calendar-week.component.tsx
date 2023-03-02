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
        <div className="guide nine">
          <span className="time">09.00</span>
        </div>
        <div className="guide unnumbered ten"></div>
        <div className="guide unnumbered eleven"></div>
        <div className="guide twelve">
          <span className="time">12.00</span>
        </div>
        <div className="guide unnumbered thirteen"></div>
        <div className="guide unnumbered fourteen"></div>
        <div className="guide fifteen">
          <span className="time">15.00</span>
        </div>
        <div className="guide unnumbered sixteen"></div>
        <div className="guide unnumbered seventeen"></div>
        <div className="guide eighteen">
          <span className="time">18.00</span>
        </div>
        <div className="guide unnumbered nineteen"></div>
        <div className="guide unnumbered twenty_twentyone">
          <span className="time">21.00</span>
        </div>
        {/* <div className="guide twentyone topNeg50">
          
        </div> */}
      </div>
    </CalendarGrid>
  );
};

export default CalendarWeek;
