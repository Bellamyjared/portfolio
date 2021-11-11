import React, { useState } from "react";
import styled from "styled-components";

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
    height: 100vh;
    text-align: center;
    padding-top: 15vh;
  }
`;
const MobileNavLink = styled.div`
  padding-bottom: 10vh;
  font-size: 2em;
`;
const NavDiv = styled.div`
  padding: 2.5em;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1024px) {
    padding: 2.5em 5em 2.5em 5em;
  }
  @media screen and (min-width: 2560px) {
    padding: 4em 6.5em 2.5em 6.5em;
  }
`;

const NavLogo = styled.div`
  padding-top: 0.3em;
`;
const MobileNavIcon = styled.div``;
const NavLinks = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const ImageLinks = styled.div`
  display: none;
`;

const NavBar = ({ ToggleMobileNav, ToggleMobileState }) => {
  const Test = () => console.log("home");

  const MobileNav = () => {
    if (ToggleMobileState === "none") {
      return (
        <div className={ToggleMobileState} onClick={() => ToggleMobileNav()}>
          <MobileNavLink onClick={() => Test()}>Home</MobileNavLink>
          <MobileNavLink>Projects From Nav</MobileNavLink>
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

      <NavDiv>
        <NavLogo>
          <img alt="JaredBellamy" src={Logo} />
        </NavLogo>
        <MobileNavIcon>
          <img
            alt="Mobile Nav"
            src={MobileNavBar}
            onClick={() => ToggleMobileNav()}
          />
        </MobileNavIcon>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#tech">Tech</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </NavLinks>
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
      </NavDiv>
    </>
  );
};

export default NavBar;
