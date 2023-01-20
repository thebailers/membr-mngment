import { MouseEventHandler } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type ClassTimeBlockProps = {
  active?: boolean;
};

export const ClassTimeBlock = styled(Link)<ClassTimeBlockProps>`
  border: 1px solid #c1b098;
  color: #c1b098;
  padding: 5px 10px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 1px solid #63b0cd;
    color: #63b0cd;
    cursor: pointer;
  }
`;
