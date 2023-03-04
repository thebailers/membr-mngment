import styled from "styled-components";
import { colors } from "../../../global-styles";

const guideColor = colors.duskyGold;
const guideColorRgb = colors.duskyGoldRgb;
const classesBlockColor = colors.midGold;
const guideTimeFont = "1rem";

export const CalendarGrid = styled.div`
  width: 90vw;
  height: 98vh;

  display: grid;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 60px 1fr 60px;

  .calendar-guides {
    z-index: 1;

    grid-column: 2 / 2;
    grid-row: 2 / 2;

    display: grid;
    grid-template-rows: repeat(12, 1fr);

    .guide {
      border-top: 1px solid rgba(${guideColorRgb}, 0.4);
      color: ${guideColor};
      width: calc(100% + 10px);
      transform: translateX(-10px);

      &:not(.unnumbered) {
      }

      &.with-time {
        display: grid;

        .time {
          font-size: ${guideTimeFont};
          transform: translate(-3rem, -${guideTimeFont});
        }
      }

      &.last {
        border-bottom: 1px solid currentColor;
        align-content: end;

        .time {
          font-size: ${guideTimeFont};
          transform: translate(-3rem, ${guideTimeFont});
        }
      }
    }
  }

  .calendar-grid {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    z-index: 2;

    display: grid;
    grid-template-columns: repeat(7, 1fr);

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

      .day-label {
        font-size: 1.2rem;
        line-height: 1;
        text-align: center;
        transform: translateY(-2rem);
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
