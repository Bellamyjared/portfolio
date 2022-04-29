import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  width: 30vw;
  background-color: #ebf8ff;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0em 0em 0em 0em;
  }

  @media screen and (min-width: 2560px) {
    font-size: 45px;
  }
`;
const HeroTitle = styled.h1`
  width: 100%;
  margin-bottom: 0.3em;
  line-height: 1.3em;
  background-color: lightgrey;
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
