import React from "react";
import styled from "styled-components";

import About_Image from "../Images/About_Image.svg";

const BackgroundTransition = styled.div``;

const AboutContainer = styled.div`
  padding: 15em 0em 20em 0em;
  margin-right: -200px;
  width: 100%;
  background: linear-gradient(
    4deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(255, 255, 255, 1) 90%
  );

  @media screen and (min-width: 768px) {
    padding: 15em 0em 28em 0em;
  }
  @media screen and (min-width: 1024px) {
    padding: 25em 0em 15em 0em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
const Title = styled.h1`
  margin-bottom: -250px;
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
    justify-content: center;
    padding-top: 3em;
    padding-bottom: 8em;
    width: 90vw;
  }
`;

const LeftSection = styled.div`
  img {
    margin-top: 150px;
    margin-left: -110px;
    height: 300px;
    opacity: 0.2;
  }
  @media screen and (min-width: 1024px) {
    img {
      margin-top: 0px;
      margin-left: 0px;
      height: 275px;
      width: auto;
      opacity: 0.2;
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
  margin-top: -155px;
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
    <>
      <BackgroundTransition />
      <AboutContainer>
        <Title>About</Title>
        <ContentContainer>
          <LeftSection>
            <img src={About_Image} />
          </LeftSection>
          <RightSection>
            <Paragraph>
              I am a Full Stack Developer with a lifelong passion for computers
              and problem solving. This passion originated over many years of
              tinkering with desktop application and game modifications. <br />
              After rising to leadership positions in the construction industry,
              I felt as though my creativity and problem solving skills weren't
              being challenged enough. So I decided to reignite my passion for
              programming by attending and graduating with honours from South
              Alberta Institute of Technology's Object Oriented Software
              Development program. <br />
              Since graduation I have ventured into lead development positions
              with a few internet startups. These positions allowed my skills
              and understanding of full stack development to multiple. This
              exponential growth allowed me to penetrate into the crypto market.
              There I picked up commissions to create custom monitoring systems
              and applications to aid in the management of crypto softwares.
              <br />
              As my adventure into the crypto market was coming to an end, I
              decided take some time and deepen my understanding of different
              technologies. During my journey, inspiration from my wife led to
              the creation of a fully fledged mobile grocery app. <br />
              Looking to the future, I find myself being guided by my appetite
              for and desire to learn new technologies. I fully expect this
              passion to lead to new and challenging prospects opportunities.
            </Paragraph>
          </RightSection>
        </ContentContainer>
      </AboutContainer>
    </>
  );
};

export default About;
