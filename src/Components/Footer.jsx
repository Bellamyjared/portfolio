import React from "react";
import styled from "styled-components";

import NavLinks from "./NavLinks";

import Logo from "../Images/Logo.svg";

const FooterContainer = styled.div`
  padding-top: 15em;
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2em;

  a {
    text-decoration: none;
    color: black;
    margin-right: 1em;
    margin-left: 1em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MobileLogo = styled.div`
  display: flex;
  justify-content: center;
`;
const Animation = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 2em;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <NavLinks />
      </FooterLinks>
      <MobileLogo>
        <img src={Logo} />
      </MobileLogo>
      <Animation>ANIMATION PLACEHOLDER</Animation>
    </FooterContainer>
  );
};

export default Footer;
