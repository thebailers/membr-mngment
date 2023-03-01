import styled from "styled-components";

export const CalendarGrid = styled.div`
  background: lightgray;
  width: 70vw;
  height: 98vh;
  
  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 60px 1fr 60px;
}

.calendar-guides {
  position: relative;
  z-index: 1;
  transform: translateX(-30px);
  
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  
  .guide {
    &.nine {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(-50%)
    }
  }
}

.calendar-grid {
  background: darkseagreen;
  transform: translateX(30px);
  grid-column: 2 / 2;
  grid-row: 2 / 2;
  z-index: 2;
  
  display: grid;
  grid-template-areas: "mon tue wed thur fri sat sun";
  
  .day {
    display: grid;
    grid-template-rows: 
      repeat(4, [nine] 1fr [nine-end])
      repeat(4, [ten] 1fr [ten-end])
      repeat(4, [eleven] 1fr [eleven-end])
      repeat(4, [twelve] 1fr [twelve-end])
      repeat(4, [fourteen] 1fr [fourteen-end])
      repeat(4, [fifteen] 1fr [fifteen-end])
      repeat(4, [sixteen] 1fr [sixteen-end])
      repeat(4, [seventeen] 1fr [seventeen-end])
      repeat(4, [eighteen] 1fr [eighteen-end])
      repeat(4, [nineteen] 1fr [nineteen-end])
      repeat(4, [twenty] 1fr [twenty-end])
      repeat(4, [twentyone] 1fr [twentyone-end])
      ;
    
    .class {
      padding: 5px;
      
      &.nine15_ten45 {
        background: antiquewhite;
        grid-row: nine 2 / ten 4;
      }
      
      &.eighteen30_twenty30 {
        background: antiquewhite;
        grid-row: eighteen 3 / twenty 3
      }
    }
    
    &.monday {
      background: olive;
    }
  }
`;
