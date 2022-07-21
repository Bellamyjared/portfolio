import React from "react";
import styled from "styled-components";

import About_Image from "../Images/About_Image.svg";

const AboutContainer = styled.div`
  position: absolute;
  top: 430vh;
  width: 100%;
  background-color: lightgrey;
  @media screen and (min-width: 768px) {
    padding-top: 3em;
  }
  @media screen and (min-width: 1024px) {
    padding: 20em 4em 0em 4em;
    display: flex;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Title = styled.h1`
  margin-bottom: -275px;
  margin-top: 125px;
  color: white;

  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0px;
    margin-top: 0px;
    width: 100%;
    justify-content: center;
    font-size: 65px;
  }
`;

const ContentContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    padding-top: 3em;
    padding-bottom: 8em;
  }
`;

const LeftSection = styled.div`
  img {
    margin-top: 150px;
    margin-left: -165px;
    height: 275px;
    width: auto;
    opacity: 0.29;
  }
  @media screen and (min-width: 1024px) {
    img {
      margin-top: 0px;
      margin-left: 0px;
      height: 275px;
      width: auto;
      opacity: 1;
    }
  }
  @media screen and (min-width: 1440px) {
    img {
      margin-top: 0px;
      margin-left: 0px;
      height: auto;
      max-height: 900px;
      width: auto;
      opacity: 1;
    }
  }
`;
const RightSection = styled.div`
  color: white;
  padding: 0em 2.5em 0em 2.5em;
  margin-top: -125px;
  @media screen and (min-width: 1024px) {
    padding-top: 8em;
  }
`;
const Paragraph = styled.div`
  @media screen and (min-width: 1440px) {
    max-width: 900px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About</Title>
      <ContentContainer>
        <LeftSection>
          <img src={About_Image} />
        </LeftSection>
        <RightSection>
          <Paragraph>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups
          </Paragraph>
        </RightSection>
      </ContentContainer>
    </AboutContainer>
  );
};

export default About;
