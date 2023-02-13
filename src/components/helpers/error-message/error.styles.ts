import styled from "styled-components";
import { colors } from "../../../global-styles";

export const Error = styled.div`
  color: ${colors.midGold};
  margin-bottom: 25px;
`;

export const InlineError = styled(Error)`
  margin-bottom: 7px;
`;
