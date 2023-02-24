import styled from "styled-components";

export const HeroHeading = styled.h1`
  backface-visibility: hidden;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;

  .hero-heading {
    &-primary,
    &-secondary {
      display: block;
    }

    &-primary {
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 0.8rem;
      animation: moveInFromLeft 1s ease-out;
    }

    &-secondary {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 1.8rem;
      animation: moveInFromRight 1s ease-out;
    }
  }

  @keyframes moveInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInFromRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;
