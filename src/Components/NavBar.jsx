import React, { useState, useEffect } from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import MobileNavBar from "../Images/MobileNavBar.svg";
import Github from "../Images/NavImages/GithubLogo.svg";
import Email from "../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../Images/NavImages/LinkedInLogo.svg";
import Logo from "../Images/Logo.svg";

const MobileNavController = styled.div`
  .none {
    padding: 0em;
    margin: 0px;
    color: white;
    background-color: black;
    opacity: 0.9;
    position: fixed;
    width: 101vw;
    height: 101vh;
    text-align: center;
    padding-top: 15vh;
    @media screen and (max-height: 700px) {
      padding-top: 8vh;
    }
  }
`;
const MobileNavLink = styled.div`
  padding-bottom: 10vh;
  font-size: 2em;
`;
const NavBorder = styled.div`
  display: flex;
  position: absolute;
  top: 20vh;
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
  align-items: center;
  display: ${(props) => (props.scrolled ? "flex" : "none")};
  justify-content: space-between;
`;

const LogoAndLinkContainer = styled.div`
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
const MobileNavIcon = styled.div`
  img {
    width: auto;
    height: 30px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavLinkContainer = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-left: 2em;
    a {
      text-decoration: none;
      color: black;
      margin-right: 1em;
    }
  }
  @media screen and (min-width: 2560px) {
    a {
      font-size: 30px;
    }
  }
`;
const ImageLinks = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
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
  }
`;

const NavBar = ({ ToggleMobileNav, ToggleMobileState, scrolled }) => {
  const MobileNav = () => {
    if (ToggleMobileState === "none") {
      return (
        <div className={ToggleMobileState} onClick={() => ToggleMobileNav()}>
          <MobileNavLink>Projects</MobileNavLink>
          <MobileNavLink>Tech</MobileNavLink>
          <MobileNavLink>About</MobileNavLink>
          <MobileNavLink>Contant</MobileNavLink>
        </div>
      );
    } else return <div></div>;
  };

  return (
    <>
      <MobileNavController>{MobileNav()}</MobileNavController>

      <NavBorder>
        <NavContainer scrolled={scrolled}>
          <LogoAndLinkContainer>
            <NavLogo>
              <img alt="JaredBellamy" src={Logo} />
            </NavLogo>
          </LogoAndLinkContainer>
          <ImageLinks>
            <a href="https://www.github.com" target="_blank">
              <img alt="Github" src={Github} />
            </a>
            <a href="https://www.linkedin.com" target="_blank">
              <img alt="LinkedIn" src={LinkedIn} />
            </a>
            <a href="mailto:Bellamyjared@gmail.com">
              <img alt="Email" src={Email} />
            </a>
          </ImageLinks>
        </NavContainer>
      </NavBorder>
    </>
  );
};

export default NavBar;
