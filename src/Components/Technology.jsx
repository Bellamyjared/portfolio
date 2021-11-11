import React, { useState } from "react";
import styled from "styled-components";

import FrontEndIcons from "./Technology_Icon_Containers/FrontEndIcons";
import BackEndIcons from "./Technology_Icon_Containers/BackEndIcons";
import DataBaseIcons from "./Technology_Icon_Containers/DataBaseIcons";

import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import mySvg from "../Images/Background_2.svg";

import TECHNOLOGY from "../Images/TechnologyBackgrounds/TECHNOLOGY.svg";
import BACKEND from "../Images/TechnologyBackgrounds/BACKEND.svg";
import DATABASE from "../Images/TechnologyBackgrounds/DATABASE.svg";
import FRONTEND from "../Images/TechnologyBackgrounds/FRONTEND.svg";

import Server_image from "../Images/TechnologyImages/Server_image.svg";
import DataBase_image from "../Images/TechnologyImages/DataBase_image.svg";
import FrontEnd_image from "../Images/TechnologyImages/FrontEnd_image.svg";

const BackgroundForTheRest = styled.div`
  background: url(${mySvg}) no-repeat,
    radial-gradient(farthest-side at 0% 0%, #036196, #6497b1) no-repeat;
  background-size: 170vw 800px, 100vw auto;
  background-position: 0px 0px, 0px 700px;

  overflow: hidden;

  height: 170em;

  @media screen and (min-width: 425px) {
    height: 160em;
  }

  @media screen and (min-width: 768px) {
    background-size: 170vw 1000px, 100vw auto;

    margin-top: -100px;
  }
  @media screen and (min-width: 1024px) {
    height: 200em;
  }

  @media screen and (min-width: 1100px) {
    background-size: 170vw 1200px, 100vw auto;
    margin-top: -100px;
    height: 210em;
  }
  @media screen and (min-width: 1440px) {
    height: 220em;
  }
  @media screen and (min-width: 1750px) {
    height: 228em;
  }
  @media screen and (min-width: 2560px) {
    background-size: 170vw 1400px, 100vw auto;
    height: 208em;
  }
`;

const TechnologyContent = styled.div`
  padding-top: 8em;
  height: 45em;

  .TechImage {
    width: 100px;
    height: auto;
  }

  @media screen and (min-width: 600px) {
  }

  @media screen and (min-width: 1024px) {
    .TechImage {
      width: 100%;
      height: auto;
    }
  }
  @media screen and (min-width: 1100px) {
    padding-top: 14em;
  }
  @media screen and (min-width: 1750px) {
    padding-top: 20em;
  }
  @media screen and (min-width: 2560px) {
    padding-top: 12em;
  }
`;

const BackgroundText = styled.div`
  background-repeat: no-repeat;
  background-size: 100vw auto;
  background-position: center;
  height: 45em;

  margin-top: -300px;
  margin-bottom: -275px;

  @media screen and (min-width: 1024px) {
    margin-bottom: -415px;
  }
  @media screen and (min-width: 2560px) {
    margin-bottom: -545px;
  }
`;

const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 3em 0em 4em;

  @media screen and (min-width: 600px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 1024px) {
    display: flex;

    flex-wrap: wrap-reverse;
    padding: 0em 0em 0em 0em;
  }
`;

const RightSection = styled.div`
  margin-top: -50px;
  @media screen and (min-width: 1024px) {
    display: flex;
    height: auto;
    width: 100%;
    justify-content: center;
    margin-top: 0px;
  }
`;

const LeftSection = styled.div`
  font-weight: bold;
  margin-top: -100px;

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    height: auto;
    padding-top: 11em;
  }
  @media screen and (min-width: 2560px) {
    padding-top: 8em;
  }
`;
const FrontEnd = styled.div`
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    padding: 1em 8em 0em 0em;
  }
`;
const BackEnd = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    padding: 1em 8em 0em 0em;
  }
`;
const DataBase = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    padding: 0em 0em 0em 0em;
  }
`;

const Technology = () => {
  const [TechnologyBackgroundTxt, setTechnologyBackgroundTxt] =
    useState(TECHNOLOGY);

  const ShowIcons = () => {
    if (TechnologyBackgroundTxt === FRONTEND) return <FrontEndIcons />;
    else if (TechnologyBackgroundTxt === BACKEND) return <BackEndIcons />;
    else if (TechnologyBackgroundTxt === DATABASE) return <DataBaseIcons />;
    else return <div></div>;
  };
  return (
    <BackgroundForTheRest>
      <TechnologyContent>
        <BackgroundText
          style={{
            backgroundImage: `url(${TechnologyBackgroundTxt})`,
          }}
        ></BackgroundText>

        <TechContainer>
          <LeftSection>{ShowIcons()}</LeftSection>
          <RightSection>
            <FrontEnd
              onMouseEnter={() => setTechnologyBackgroundTxt(FRONTEND)}
              onMouseLeave={() => setTechnologyBackgroundTxt(TECHNOLOGY)}
            >
              <img
                className="TechImage"
                src={FrontEnd_image}
                alt="Front_End_Image"
              />
            </FrontEnd>
            <BackEnd
              onMouseEnter={() => setTechnologyBackgroundTxt(BACKEND)}
              onMouseLeave={() => setTechnologyBackgroundTxt(TECHNOLOGY)}
            >
              <img
                className="TechImage"
                src={Server_image}
                alt="Back_End_Image"
              />
            </BackEnd>
            <DataBase
              onMouseEnter={() => setTechnologyBackgroundTxt(DATABASE)}
              onMouseLeave={() => setTechnologyBackgroundTxt(TECHNOLOGY)}
            >
              <img
                className="TechImage"
                src={DataBase_image}
                alt="Data_Base_Image"
              />
            </DataBase>
          </RightSection>
        </TechContainer>
      </TechnologyContent>

      <About />
      <Contact />
      <Footer />
    </BackgroundForTheRest>
  );
};

export default Technology;
