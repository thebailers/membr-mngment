import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const colors: { [key: string]: string } = {
  blue: "#63B0CD",
  darkGrey: "#39393A",
  duskyGold: "#9B9B93",
  lilac: "#E9D2F4",
  midGold: "#C1B098",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.darkGrey};
    color: #fff;
    font-size: calc(10px + 2vmin);
    margin: 0;
    min-height: 100vh;
    padding: 20px 40px;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: #63B0CD;
    text-decoration: none;
  }

`;

type AnchorProps = {
  $active?: boolean;
};

export const HorizontalMenuLink = styled(Link)<AnchorProps>`
  padding: 0 10px;
  color: ${(props) => (props.$active ? "#63b0cd" : "#9b9b93")};
  text-decoration: ${(props) => (props.$active ? "underline" : "none")};
`;

export const ActiveLink = styled(HorizontalMenuLink)`
  color: #63b0cd;
`;

export const InactiveLink = styled(HorizontalMenuLink)`
  color: #9b9b93;
`;

export const NotesContainer = styled.div`
  background: #3b3b3b;
  border: 1px solid lightgray;
  display: inline-block;
  margin-bottom: 25px;
  padding: 20px;
`;

export const NotesHeader = styled.h3`
  color: #b3b3b3;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const NotesList = styled.li`
  color: #b3b3b3;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`;
