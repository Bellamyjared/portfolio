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
  background-size: auto 900px, 100vw auto;
  background-position: 0px 0px, 0px 700px;

  overflow: hidden;

  height: 200em;
`;

const TechnologyContent = styled.div`
  padding-top: 8em;
  padding-bottom: 6em;
`;
const BackgroundText = styled.div`
  background-repeat: no-repeat;
  background-size: 100vw auto;
  background-position: center;
  height: 45em;

  margin-top: -300px;
  margin-bottom: -275px;
`;
const TechImages = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 3em 0em 4em;
`;
const RightSection = styled.div``;
const FrontEnd = styled.div`
  padding-bottom: 1em;
`;
const BackEnd = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
`;
const DataBase = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
`;
const TechLables = styled.div``;

const LeftSection = styled.div`
  font-weight: bold;
  margin-top: -100px;
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

        <TechImages>
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
        </TechImages>
        <TechLables></TechLables>
      </TechnologyContent>
      <About />
      <Contact />
      <Footer />
    </BackgroundForTheRest>
  );
};

export default Technology;
