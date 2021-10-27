import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 1em 2.5em 17em 2.5em;
`;
const HeroTitle = styled.h1`
  margin-bottom: 0.3em;
  line-height: 1.3em;
`;
const HeroSubTitle = styled.div``;

const CallToAction = styled.button`
  margin-top: 3.5em;
  margin-left: 3em;
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
