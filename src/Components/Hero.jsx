import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 1em 2.5em 40vh 2.5em;
  @media screen and (min-width: 768px) {
    padding-top: 4em;
  }
  @media screen and (min-width: 1024px) {
    padding: 3em 5em 40vh 3.5em;
    font-size: 25px;
  }
  @media screen and (min-width: 1440px) {
    padding: 3em 5em 40vh 5.5em;
  }

  @media screen and (min-width: 2560px) {
    padding: 3em 5em 40vh 5.5em;
    font-size: 45px;
  }
`;
const HeroTitle = styled.h1`
  margin-bottom: 0.3em;
  line-height: 1.3em;
`;
const HeroSubTitle = styled.div``;

const CallToAction = styled.button`
  margin-top: 2.5em;
  margin-left: 20%;
  @media screen and (min-width: 375px) {
    margin-left: 30%;
  }
  @media screen and (min-width: 426px) {
    margin-left: 0;
  }
  @media screen and (min-width: 2560px) {
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Making Technology <br /> Work For You
      </HeroTitle>
      <HeroSubTitle>Full Stack Development</HeroSubTitle>
      <CallToAction href="project">See More</CallToAction>
    </HeroContainer>
  );
};

export default Hero;
