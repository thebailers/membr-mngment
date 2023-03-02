import styled from "styled-components";
import { colors } from "../../global-styles";

const guideColor = colors.duskyGold;
const classesBlockColor = colors.midGold;

export const CalendarGrid = styled.div`
  width: 70vw;
  height: 98vh;

  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 60px 1fr 60px;

  .calendar-guides {
    position: relative;
    z-index: 2;
    transform: translateX(-30px);

    grid-column: 2 / 2;
    grid-row: 2 / 2;

    .guide {
      color: ${guideColor};
      position: absolute;
      left: 0;
      width: 100%;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 40px;
        background: currentColor;
        height: 2px;
        width: calc(100% + 20px);
        transform: translateY(-50%);
      }

      &.nine {
        top: 0;
      }

      &.twelve {
        top: 25%;
      }

      &.fifteen {
        top: 50%;
      }

      &.eighteen {
        top: 75%;
      }

      &.twentyone {
        top: 100%;
      }
    }
  }

  .calendar-grid {
    transform: translateX(30px);
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    z-index: 1;

    display: grid;
    grid-template-areas: "mon tue wed thur fri sat sun";

    .day {
      background: rgba(255, 255, 255, 0.1);
      border-left: 1px dashed #fff;
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
        repeat(4, [twentyone] 1fr [twentyone-end]);

      &:last-child {
        border-right: 1px dashed #fff;
      }

      .class {
        background: ${classesBlockColor};
        padding: 5px;

        &.nine15_ten45 {
          grid-row: nine 2 / ten 4;
        }

        &.eighteen30_twenty30 {
          grid-row: eighteen 3 / twenty 3;
        }
      }

      &.monday {
      }
    }
  }

  .topNeg50 {
    transform: translateY(-50%);
  }
`;
