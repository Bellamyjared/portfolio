import React, { useState, useEffect } from "react";
import styled from "styled-components";

import DownArrow from "../Images/DownArrow.svg";

const HeroContainer = styled.div`
  @keyframes downArrowAnimation {
    from {
      transform: translate(0px, 20px);
      opacity: 1;
    }
    to {
      transform: translate(0px);
      opacity: 1;
    }
  }
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
      transform: translate(0px);
    }

    to {
      opacity: 1;
      transform: translate(0px, 20px);
    }
  }

  .DownArrowAnimation {
    animation: fadeInAnimation 1s 0.5s,
      downArrowAnimation 1s 1.5s infinite alternate;
  }
  .FadeOutDownArrow {
    animation: fadeOutAnimation 0.2s;
  }
  position: absolute;
  top: 80vh;
  width: 100vw;
  text-shadow: 0px 0px 10px #000000;
  color: white;

  @keyframes fadeHeroOut {
    from {
      user-select: auto;
    }
    to {
      user-select: none;
    }
  }
  .FadeHeroOut {
    animation: fadeHeroOut 0.5s;
    user-select: none;
  }

  @media screen and (min-width: 1024px) {
    top: 40vh;
    display: flex;
    width: 50vw;
    margin-left: 8vw;
    justify-content: left;
    align-content: center;
    img {
      display: none;
    }
  }
`;
const HeroTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 0.3em;
  line-height: 1.3em;

  @media screen and (min-width: 1024px) {
    text-align: left;
    font-size: 5vw;
  }
`;
const HeroSubTitle = styled.p`
  margin-top: -0.1em;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    justify-content: left;
  }
`;

const CallToAction = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  height: 10vh;
  opacity: 0;
  img {
    width: 1.5em;
  }
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
    <HeroContainer>
      <div
        className={
          FirstScroll ? (HasUserScrolled ? "FadeIn" : "FadeOut") : "FirstVisit"
        }
      >
        <HeroTitle className={HasUserScrolled ? "" : "FadeHeroOut"}>
          FireBaseTest <br /> Work For You
        </HeroTitle>
        <HeroSubTitle className={HasUserScrolled ? "" : "FadeHeroOut"}>
          Full Stack Development
        </HeroSubTitle>
      </div>
      <CallToAction
        HasUserScrolled={HasUserScrolled}
        className={
          FirstScroll
            ? HasUserScrolled
              ? "DownArrowAnimation"
              : "FadeOut"
            : "FirstVisit"
        }
      >
        <img className="invertSVG" alt="▼" src={DownArrow} />
      </CallToAction>
    </HeroContainer>
  );
};

export default Hero;
