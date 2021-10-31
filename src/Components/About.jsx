import React from "react";
import styled from "styled-components";

import About_Image from "../Images/About_Image.svg";

const AboutBackground = styled.div`
  padding-top: 2em;
`;
const Title = styled.h1`
  margin-bottom: -275px;
  margin-top: 125px;
  color: white;

  display: flex;
  justify-content: center;
`;
const RightSection = styled.div`
  img {
    margin-top: 150px;
    margin-left: -165px;
    height: 275px;
    width: auto;
    opacity: 0.29;
  }
`;
const LeftSection = styled.div`
  color: white;
  padding: 0em 2.5em 0em 2.5em;
  margin-top: -125px;
`;
const Content = styled.div``;
const Paragraph = styled.div``;

const About = () => {
  return (
    <AboutBackground>
      <Title>About</Title>
      <RightSection>
        <img src={About_Image} />
      </RightSection>
      <LeftSection>
        <Paragraph>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual
          mockupsLorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockupsLorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual
          mockups
        </Paragraph>
      </LeftSection>
    </AboutBackground>
  );
};

export default About;
