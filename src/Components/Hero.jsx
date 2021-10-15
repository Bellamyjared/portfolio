import React from "react";
import styled from "styled-components";

const HeroTitle = styled.div``;
const HeroSubTitle = styled.div``;
const CallToAction = styled.div``;

const Hero = () => {
  return (
    <div>
      <HeroTitle>Making Technologies Work For You</HeroTitle>
      <HeroSubTitle>Full Stack Development</HeroSubTitle>
      <CallToAction href="project">See More</CallToAction>
    </div>
  );
};

export default Hero;
