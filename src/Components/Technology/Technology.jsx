import React, { useState } from "react";
import styled from "styled-components";

import FrontEndIcons from "./FrontEndIcons";
import BackEndIcons from "./BackEndIcons";
import DataBaseIcons from "./DataBaseIcons";

import Server_image from "../../Images/TechnologyImages/Server_image.svg";
import DataBase_image from "../../Images/TechnologyImages/DataBase_image.svg";
import FrontEnd_image from "../../Images/TechnologyImages/FrontEnd_image.svg";

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
    min-height: 36em;
  }
`;

const BackgroundText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${(props) =>
    props.changeFontSize === "TECHNOLOGY" ? "12vw" : "14vw"};
  font-weight: 800;
  color: transparent;
  /* background-color: pink; */
  background-image: linear-gradient(
    180deg,
    rgba(3, 31, 75, 0.7447795823665893) 6%,
    rgba(3, 31, 75, 0.26914153132250584) 54%,
    rgba(255, 255, 255, 1) 96%
  );
  background-clip: text;
  -webkit-background-clip: text;

  @media screen and (min-width: 1024px) {
    font-size: ${(props) =>
      props.changeFontSize === "TECHNOLOGY" ? "12vw" : "15vw"};

    margin-top: ${(props) =>
      props.changeFontSize === "TECHNOLOGY" ? "-0.5vw" : "-4vw"};
  }
  @media screen and (min-width: 2560px) {
  }
`;

const TechContainer = styled.div`
  margin-top: 15vw;
  display: flex;
  justify-content: space-between;
  padding: 2em 4em 0em 6em;

  @media screen and (min-width: 1024px) {
    display: flex;
    position: relative;
    z-index: 10;
    flex-wrap: wrap-reverse;
    padding: 0em 0em 0em 0em;
    margin-top: 10vw;
  }
`;

const RightSection = styled.div`
  margin-top: 1.8em;
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

  @media screen and (min-width: 450px) {
    width: 50%;
    display: grid;
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    height: auto;
    margin-top: 0px;
    padding-top: 2em;
  }
  @media screen and (min-width: 2560px) {
    padding-top: 8em;
  }
`;
const FrontEnd = styled.div`
  padding-bottom: 1em;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 300ms;

  :focus {
    outline: none !important;
  }
  :hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 1024px) {
    padding: 1em 4em 0em 0em;
  }
`;
const BackEnd = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 300ms;

  :focus {
    outline: none !important;
  }
  :hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 1024px) {
    padding: 1em 4em 0em 4em;
  }
`;
const DataBase = styled.div`
  padding-top: 1.5em;
  padding-bottom: 1em;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 300ms;

  :focus {
    outline: none !important;
  }
  :hover {
    transform: scale(1.2);
  }
  @media screen and (min-width: 1024px) {
    padding: 0em 0em 0em 4em;
  }
`;

const Technology = () => {
  const [TechnologyBackgroundTxt, setTechnologyBackgroundTxt] =
    useState("TECHNOLOGY");
  const [toggleFrontEnd, setToggleFrontEnd] = useState("none");
  const [toggleBackEnd, setToggleBackEnd] = useState("none");
  const [toggleDataBase, setToggleDataBase] = useState("none");

  return (
    <TechnologyContent id="projects">
      <BackgroundText changeFontSize={TechnologyBackgroundTxt}>
        {TechnologyBackgroundTxt}
      </BackgroundText>
      <TechContainer>
        <LeftSection>
          <div
            style={{
              display: toggleFrontEnd,
              width: "100%",
              height: toggleFrontEnd === "none" ? "0px" : "auto",
            }}
          >
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
              setTechnologyBackgroundTxt("FRONT END") &
              setToggleFrontEnd("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt("TECHNOLOGY") &
              setToggleFrontEnd("none")
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
              setTechnologyBackgroundTxt("BACK END") & setToggleBackEnd("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt("TECHNOLOGY") &
              setToggleBackEnd("none")
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
              setTechnologyBackgroundTxt("DATA BASE") &
              setToggleDataBase("flex")
            }
            onMouseLeave={() =>
              setTechnologyBackgroundTxt("TECHNOLOGY") &
              setToggleDataBase("none")
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
