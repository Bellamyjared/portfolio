import React, { useState } from "react";
import styled from "styled-components";

import FrontEndIcons from "./Technology_Icon_Containers/FrontEndIcons";
import BackEndIcons from "./Technology_Icon_Containers/BackEndIcons";
import DataBaseIcons from "./Technology_Icon_Containers/DataBaseIcons";

import mySvg from "../Images/Background_2.svg";

import TECHNOLOGY from "../Images/TechnologyBackgrounds/TECHNOLOGY.svg";
import BACKEND from "../Images/TechnologyBackgrounds/BACKEND.svg";
import DATABASE from "../Images/TechnologyBackgrounds/DATABASE.svg";
import FRONTEND from "../Images/TechnologyBackgrounds/FRONTEND.svg";

import Server_image from "../Images/TechnologyImages/Server_image.svg";
import DataBase_image from "../Images/TechnologyImages/DataBase_image.svg";
import FrontEnd_image from "../Images/TechnologyImages/FrontEnd_image.svg";

const TechnologyContent = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 5em 0em 5em 0em;
  min-height: 33em;

  .TechImage {
    width: 100px;
    height: auto;
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
    padding-top: 15em;
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

  @media screen and (min-width: 1024px) {
    display: flex;

    flex-wrap: wrap-reverse;
    padding: 0em 0em 0em 0em;
  }
`;

const RightSection = styled.div`
  margin-top: -50px;
  img {
    cursor: pointer;
  }
  @media screen and (min-width: 450px) {
    width: 50%;
    display: grid;
    justify-content: center;
  }
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
  margin-top: -80px;

  @media screen and (min-width: 450px) {
    width: 50%;
    display: grid;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    height: auto;
    padding-top: 7em;
  }
  @media screen and (min-width: 2560px) {
    padding-top: 8em;
  }
`;
const FrontEnd = styled.div`
  padding-bottom: 1em;

  @media screen and (min-width: 1024px) {
    padding: 1em 4em 0em 0em;
  }
`;
const BackEnd = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    padding: 1em 4em 0em 4em;
  }
`;
const DataBase = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    padding: 0em 0em 0em 4em;
  }
`;

const Technology = () => {
  const [TechnologyBackgroundTxt, setTechnologyBackgroundTxt] =
    useState(TECHNOLOGY);
  const [toggleFrontEnd, setToggleFrontEnd] = useState("none");
  const [toggleBackEnd, setToggleBackEnd] = useState("none");
  const [toggleDataBase, setToggleDataBase] = useState("none");

  return (
    <TechnologyContent id="projects">
      <BackgroundText
        style={{
          backgroundImage: `url(${TechnologyBackgroundTxt})`,
        }}
      ></BackgroundText>

      <TechContainer>
        <LeftSection>
          <div style={{ display: toggleFrontEnd, width: "100%" }}>
            <FrontEndIcons />
          </div>
          <div style={{ display: toggleBackEnd, width: "100%" }}>
            <BackEndIcons />
          </div>
          <div style={{ display: toggleDataBase, width: "100%" }}>
            <DataBaseIcons />
          </div>
        </LeftSection>
        <RightSection>
          <FrontEnd
            onMouseEnter={() =>
              setTechnologyBackgroundTxt(FRONTEND) & setToggleFrontEnd("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt(TECHNOLOGY) & setToggleFrontEnd("none")
            }
          >
            <img
              className="TechImage"
              src={FrontEnd_image}
              alt="Front_End_Image"
            />
          </FrontEnd>
          <BackEnd
            onMouseEnter={() =>
              setTechnologyBackgroundTxt(BACKEND) & setToggleBackEnd("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt(TECHNOLOGY) & setToggleBackEnd("none")
            }
          >
            <img
              className="TechImage"
              src={Server_image}
              alt="Back_End_Image"
            />
          </BackEnd>
          <DataBase
            onMouseEnter={() =>
              setTechnologyBackgroundTxt(DATABASE) & setToggleDataBase("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt(TECHNOLOGY) & setToggleDataBase("none")
            }
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
  );
};

export default Technology;
