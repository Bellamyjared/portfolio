import React from "react";
import styled from "styled-components";

import Project from "./ConstructorProject.jsx";

import Grocery_App_Banner from "../../Images/ProjectImages/Grocery_App_Banner.png";
import React_icon from "../../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/MongoDB_Icon.svg";
import Miner_Info_Banner from "../../Images/ProjectImages/1.png";
import API_icon from "../../Images/ProjectImages/API_icon.svg";
import Flask_icon from "../../Images/ProjectImages/Flask_icon.svg";
import Html_icon from "../../Images/ProjectImages/Html_icon.svg";

const ProjectContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(255, 255, 255, 1) 3%
  );
  width: 100%;
  padding-top: 10vh;
  @media screen and (min-width: 768px) {
    padding-top: 20vh;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 1%,
      rgba(255, 255, 255, 1) 5%
    );
    padding-top: 15em;
  }
  @media screen and (min-width: 2560px) {
  }
`;

const Projects = () => {
  return (
    <ProjectContainer>
      <div>
        <Project
          id="project1"
          bannerPosition="left"
          banner={Grocery_App_Banner}
          projectTech={[
            [React_icon, "React Native"],
            [NodeJS_Icon, "NodeJS"],
            [MongoDB_Icon, "MongoDB"],
          ]}
          title="Grocery List"
          subTitle="Mobile Appication"
          paragraph="This is an on going passion project that I've create for my wife. It
        allows a user to create a grocery list based off custom item widgets."
          buttonLink="Live"
        />
        <Project
          bannerPosition="right"
          banner={Miner_Info_Banner}
          projectTech={[
            [Html_icon, "Html"],
            [Flask_icon, "Flask"],
            [API_icon, "API"],
          ]}
          title="Bitcoin Miner Monitor"
          subTitle="Web Appication"
          paragraph="Custom made monitor for crypto currency mining machines"
          buttonLink="Live"
        />
      </div>
    </ProjectContainer>
  );
};

export default Projects;
