import React from "react";
import styled from "styled-components";

import NavImgLinks from "./NavImgLinks";

import Logo from "../Images/Logo.svg";

const FooterContainer = styled.div`
  position: absolute;
  top: 610vh;
  background-color: lightgrey;
  width: 100%;
`;
const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1em;

  a {
    margin-right: 1em;
    margin-left: 1em;
  }

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
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
      <MobileLogo>
        <img src={Logo} />
      </MobileLogo>
      <FooterLinks>
        <NavImgLinks ShowNavLinks={true} />
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
