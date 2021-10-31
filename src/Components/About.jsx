import React from "react";
import styled from "styled-components";

import About_Image from "../Images/About_Image.svg";

const AboutBackground = styled.div`
  /* background-color: blue; */
  /* background-position: 100px 200px; */
`;
const Title = styled.div``;
const RightSection = styled.div``;
const LeftSection = styled.div``;
const Content = styled.div``;
const Image = styled.div``;
const Paragraph = styled.div``;

const About = () => {
  return (
    <AboutBackground>
      <Title>About</Title>
      <RightSection></RightSection>
      <LeftSection>
        <Content>
          <Image />
          <Paragraph>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockupsLorem ipsum is placeholder text commonly used in the graphic,
            print, and publishing industries for previewing layouts and visual
            mockups
          </Paragraph>
        </Content>
      </LeftSection>
    </AboutBackground>
  );
};

export default About;
