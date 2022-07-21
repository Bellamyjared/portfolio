import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Github from "../Images/NavImages/GithubLogo.svg";
import Email from "../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../Images/NavImages/LinkedInLogo.svg";
import Logo from "../Images/Logo.svg";
import DownArrow from "../Images/DownArrow.svg";

const NavBorder = styled.div`
  display: grid;
  position: absolute;
  top: 15vh;
  width: 100%;
  justify-content: center;

  @media screen and (min-width: 768px) {
    // justify-content: left;
  }
  @media screen and (min-width: 1024px) {
    // padding: 2.5em 5em 2.5em 5em;
  }
  @media screen and (min-width: 1440px) {
    // margin-left: 3em;
    // margin-right: 3em;
  }
  @media screen and (min-width: 2560px) {
    // padding: 4em 6.5em 2.5em 6.5em;
  }
`;

const NavContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: example;
  animation-duration: 4s;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
`;

const NavLogo = styled.div`
  padding-top: 0.3em;
  @media screen and (min-width: 2560px) {
    img {
      width: auto;
      height: 40px;
    }
  }
`;

const UnderBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const UnderLine = styled.div`
  align-self: flex-start;
  background-color: #000000c3;
  height: 1px;
  width: 75%;
`;

const BannerDownArrow = styled.div`
  display: flex;
  height: 0.5em;
`;

const ImageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;

  /* @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;

    // margin-left: auto;
    img {
      margin-right: 1em;
    }
  }

  @media screen and (min-width: 2560px) {
    img {
      width: auto;
      height: 50px;
    }
  } */
`;

const NavBar = ({ HasUserScrolled }) => {
  const [FirstScroll, setFirstScroll] = useState(false);
  const [ShowNavLinks, setShowNavLinks] = useState(false);
  useEffect(() => {
    if (HasUserScrolled) {
      setFirstScroll(true);
    }
    if (!HasUserScrolled) {
      setShowNavLinks(false);
    }
  }, [HasUserScrolled]);

  return (
    <>
      <NavBorder>
        <NavContainer
          className={
            FirstScroll
              ? HasUserScrolled
                ? "FadeIn"
                : "FadeOut"
              : "FirstVisit"
          }
        >
          <Banner>
            <NavLogo
              onClick={() => {
                if (HasUserScrolled) {
                  setShowNavLinks(!ShowNavLinks);
                }
              }}
            >
              <img alt="JaredBellamy" src={Logo} />
              <UnderBanner>
                <UnderLine />
                <BannerDownArrow>
                  <img alt="Down_Arrow" src={DownArrow} />
                </BannerDownArrow>
              </UnderBanner>
            </NavLogo>
          </Banner>
        </NavContainer>
        <ImageLinks
          className={
            FirstScroll
              ? ShowNavLinks
                ? "NavFadeIn"
                : "NavFadeOut"
              : "FirstVisit"
          }
        >
          <a href="https://www.github.com" target="_blank" rel="noreferrer">
            <img
              className={ShowNavLinks ? "" : "DisablingNavLinks"}
              alt="Github"
              src={Github}
            />
          </a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              className={ShowNavLinks ? "" : "DisablingNavLinks"}
              alt="LinkedIn"
              src={LinkedIn}
            />
          </a>
          <a href="mailto:Bellamyjared@gmail.com">
            <img
              className={ShowNavLinks ? "" : "DisablingNavLinks"}
              alt="Email"
              src={Email}
            />
          </a>
        </ImageLinks>
      </NavBorder>
    </>
  );
};

export default NavBar;
