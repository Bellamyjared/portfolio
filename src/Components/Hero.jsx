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
    animation: fadeInAnimation 1s 1s,
      downArrowAnimation 1s 2s infinite alternate;
  }
  .FadeOutDownArrow {
    animation: fadeOutAnimation 0.2s;
  }
  position: absolute;
  top: 80vh;
  width: 100vw;
  text-shadow: 0px 0px 10px #000000;
  color: white;
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
  margin-top: 2em;
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
        <HeroTitle>
          Making Technology <br /> Work For You
        </HeroTitle>
        <HeroSubTitle>Full Stack Development</HeroSubTitle>
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
