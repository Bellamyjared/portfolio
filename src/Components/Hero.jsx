import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  padding: 2em 2em 12em 2em;
`;
const HeroTitle = styled.h1`
  margin-bottom: 0.3em;
  line-height: 1.3em;
`;
const HeroSubTitle = styled.div``;

const CallToAction = styled.button`
  display: flex;
  margin: 0 auto;

  margin-top: 4em;
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
