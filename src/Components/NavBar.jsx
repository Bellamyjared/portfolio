import React from "react";
import styled from "styled-components";

import MobileNavBar from "../Images/MobileNavBar.svg";
import Github from "../Images/GithubLogo.svg";
import Email from "../Images/EmailLogo.svg";
import LinkedIn from "../Images/LinkedInLogo.svg";
import Logo from "../Images/Logo.svg";

const NavLogo = styled.div``;
const MobileNav = styled.div``;
const NavLinks = styled.a`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ImageLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <>
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
    </>
  );
};

export default NavBar;
