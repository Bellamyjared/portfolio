import React from "react";
import styled from "styled-components";

import MobileNavBar from "../Images/MobileNavBar.svg";
import Github from "../Images/NavImages/GithubLogo.svg";
import Email from "../Images/NavImages/EmailLogo.svg";
import LinkedIn from "../Images/NavImages/LinkedInLogo.svg";
import Logo from "../Images/Logo.svg";

const NavDiv = styled.div`
  padding: 2.5em;
  display: flex;
  justify-content: space-between;
`;

const NavLogo = styled.div`
  padding-top: 0.3em;
`;
const MobileNav = styled.div``;
const NavLinks = styled.a`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
const ImageLinks = styled.div`
  display: none;

  /* @media screen and (min-width: 768px) {
    display: flex;
  } */
`;

const NavBar = () => {
  return (
    <NavDiv>
      <NavLogo>
        <img alt="JaredBellamy" src={Logo} />
      </NavLogo>
      <MobileNav>
        <img alt="Mobile Nav" src={MobileNavBar} />
      </MobileNav>
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
  );
};

export default NavBar;
