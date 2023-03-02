import { HomeWrap, HeroHeading } from "./home.styles";

const Home = () => {
  return (
    <HomeWrap>
      <HeroHeading>
        <span className="hero-heading-primary">Centre Line</span>
        <span className="hero-heading-secondary">Brazilian Jiu Jitsu</span>
      </HeroHeading>
    </HomeWrap>
  );
};

export default Home;
