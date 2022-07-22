import React, { useState, useEffect } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  position: absolute;
  top: 80vh;
  width: 100vw;
  /* @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0em 0em 0em 5em;
  }

  @media screen and (min-width: 2560px) {
    font-size: 45px;
  } */
`;
const HeroTitle = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 0.3em;
  line-height: 1.3em;
`;
const HeroSubTitle = styled.div`
  font-size: 1.1em;
  display: flex;
  justify-content: center;
`;

const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5em;
  /* @media screen and (min-width: 375px) {
    margin-left: 30%;
  }
  @media screen and (min-width: 426px) {
    margin-left: 0;
  }
  @media screen and (min-width: 2560px) {
  } */
`;

const Hero = ({ HasUserScrolled }) => {
  const [FirstScroll, setFirstScroll] = useState(false);
  useEffect(() => {
    if (HasUserScrolled) {
      setFirstScroll(true);
    }
  }, [HasUserScrolled]);
  return (
    <HeroContainer
      className={
        FirstScroll ? (HasUserScrolled ? "FadeIn" : "FadeOut") : "FirstVisit"
      }
    >
      <HeroTitle>
        Making Technology <br /> Work For You
      </HeroTitle>
      <HeroSubTitle>Full Stack Development</HeroSubTitle>
      <CallToAction>ARROW</CallToAction>
    </HeroContainer>
  );
};

export default Hero;
