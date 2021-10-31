import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import Logo from "../Images/Logo.svg";

const FooterContainer = styled.div`
  padding-top: 25em;
`;
const MobileLogo = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavBarDisplay = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Animation = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 2em;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <MobileLogo>
        <img src={Logo} />
      </MobileLogo>
      <NavBarDisplay>
        <NavBar />
      </NavBarDisplay>
      <Animation>ANIMATION PLACEHOLDER</Animation>
    </FooterContainer>
  );
};

export default Footer;
