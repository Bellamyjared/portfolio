import React from "react";
import styled from "styled-components";

import NavLinksImg from "./NavBar/NavLinksImg";

import Logo from "../Images/Logo.svg";

const FooterContainer = styled.div`
  padding: 10em 0em 5em 0em;
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
`;
const MobileLogo = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MobileLogo className="invertSVG">
        <img src={Logo} />
      </MobileLogo>
      <FooterLinks>
        <NavLinksImg ShowNavLinks={true} EnableHref={true} />
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
