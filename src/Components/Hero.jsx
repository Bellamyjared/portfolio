import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  height: 75vh;
`;
const HeroTitle = styled.h1`
  margin-bottom: 2px;
`;
const HeroSubTitle = styled.div``;

const CallToAction = styled.button`
  margin-top: 10vh;
  margin-left: 30%;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>
        Making Technologies <br /> Work For You
      </HeroTitle>
      <HeroSubTitle>Full Stack Development</HeroSubTitle>
      <CallToAction href="project">See More</CallToAction>
    </HeroContainer>
  );
};

export default Hero;
