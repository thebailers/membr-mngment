import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

// images
import charles from "../public/images/charles-negremonte.jpg";

export const colors: { [key: string]: string } = {
  blue: "#63B0CD",
  darkGrey: "#39393A",
  duskyGold: "#9B9B93",
  lilac: "#E9D2F4",
  midGold: "#C1B098",
};

export const GlobalStyle = createGlobalStyle`
  $font-primary: 'Inter', sans-serif;

  *, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background-color: ${colors.darkGrey};
    color: #fff;
    font-size:1.6rem;
    line-height: 1.7;
    font-weight: 400;
    font-family: $font-primary;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 3rem;

    @media screen and (max-width: 800px) {
      padding: 1rem;
    }
  }

  a {
    color: #63B0CD;
    text-decoration: none;
  }

  label {
    display: block;
    margin-bottom: 0.7rem;
  }

  input {
    margin-bottom: 2.5rem;
  }

  .hint {
    color: ${colors.duskyGold};
    margin-bottom: 0.7rem;
  }

  .App {
    background-image: 
      linear-gradient(to right bottom, rgba(57, 57, 58, 0.92), rgba(60, 60, 60, 0.92));

    position: relative;
  }

  .header {
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > * {
      
    }

    &__logo {
      margin-left: 3rem;
    }

    &__menu {
      display: flex;
      align-items: center;
      align-self: stretch;
      margin-right: 3rem;
      
      &--listitem {
        list-style: none;

        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }

    }
  }

`;

type AnchorProps = {
  $active?: boolean;
};

export const HorizontalMenuLink = styled(Link)<AnchorProps>`
  padding: 0 1rem;
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
  border: 0.1rem solid lightgray;
  display: inline-block;
  margin-bottom: 2.5rem;
  padding: 2rem;
`;

export const NotesHeader = styled.h3`
  color: #b3b3b3;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const NotesList = styled.li`
  color: #b3b3b3;
  font-size: 1.6rem;
  font-weight: 400;
  margin-left: 1rem;
`;
