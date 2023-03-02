import styled from "styled-components";

export const HomeWrap = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(57, 57, 58, 0.92),
      rgba(60, 60, 60, 0.92)
    ),
    url("/images/charles-negremonte.jpg");
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  height: 90vh;
  position: relative;
`;

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
