import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavLinksImg from "./NavLinksImg";
import Logo from "../../Images/Logo.svg";
import DownArrow from "../../Images/DownArrow.svg";

const NavBorder = styled.div`
  display: grid;
  position: absolute;
  top: 18vh;
  width: 100%;
  justify-content: center;

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
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: example;
  animation-duration: 4s;
  @media screen and (min-width: 1024px) {
  }
`;

const NavBarBanner = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 80vw;
    max-width: 1000px;
    justify-content: center;
  }
`;
const NavLogo = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  width: 50%;
`;
const NavImgLinksContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 50%;
  img {
    padding-left: 1em;
  }
`;

const MobileBanner = styled.div`
  display: flex;
  align-items: center;
`;

const DisableMobileNav = styled.div`
  display: flex;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavLogo = styled.div`
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
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const UnderLine = styled.div`
  align-self: flex-start;
  /* background-color: #000; */
  background-color: #000000c3;
  height: 1px;
  width: 75%;
`;

const BannerDownArrow = styled.div`
  display: flex;
  height: 0.5em;
`;

const DisableMobileContainer = styled.div`
  @media screen and (min-width: 1024px) {
    height: 0em;
    margin-top: -100em;
  }
`;
const MobileImageLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3em;

  img {
    @media screen and (min-width: 1024px) {
      height: 0em;
    }
  }
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
          <NavBarBanner>
            <NavLogo>
              <img className="invertSVG" alt="JaredBellamy" src={Logo} />
            </NavLogo>
            <NavImgLinksContainer>
              <NavLinksImg ShowNavLinks={true} />
            </NavImgLinksContainer>
          </NavBarBanner>
          <MobileBanner>
            <DisableMobileNav>
              <MobileNavLogo
                onClick={() => {
                  if (HasUserScrolled) {
                    setShowNavLinks(!ShowNavLinks);
                  }
                }}
              >
                <img className="invertSVG" alt="JaredBellamy" src={Logo} />
                <UnderBanner>
                  <UnderLine className="invertSVG" />
                  <BannerDownArrow>
                    <img
                      className="invertSVG"
                      alt="Down_Arrow"
                      src={DownArrow}
                    />
                  </BannerDownArrow>
                </UnderBanner>
              </MobileNavLogo>
            </DisableMobileNav>
          </MobileBanner>
        </NavContainer>
        <DisableMobileContainer>
          <MobileImageLinks
            className={
              FirstScroll
                ? ShowNavLinks
                  ? "NavFadeIn"
                  : "NavFadeOut"
                : "FirstVisit"
            }
          >
            <NavLinksImg ShowNavLinks={ShowNavLinks} />
          </MobileImageLinks>
        </DisableMobileContainer>
      </NavBorder>
    </>
  );
};

export default NavBar;
