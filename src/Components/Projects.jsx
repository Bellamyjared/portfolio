import React from "react";
import styled from "styled-components";

import Project from "../Methods/Project.jsx";

import Grocery_App_Banner from "../Images/ProjectImages/Grocery_App_Banner.png";
import React_icon from "../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../Images/ProjectImages/MongoDB_Icon.svg";
import Miner_Info_Banner from "../Images/ProjectImages/Miner_Info_Banner.png";
import API_icon from "../Images/ProjectImages/API_icon.svg";
import Flask_icon from "../Images/ProjectImages/Flask_icon.svg";
import Html_icon from "../Images/ProjectImages/Html_icon.svg";

const ProjectContainer = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;

  // background-color: lightgrey;
  //   radial-gradient(farthest-side at 60% 30%, #ebf8ff, #6497b1) no-repeat;
  // background-size: 300vw 1100px, 150vw auto;

  @media screen and (min-width: 1024px) {
    // background-size: 100vw 950px, 150vw auto;
  }
  @media screen and (min-width: 2560px) {
    // background-size: 100vw 1200px, 150vw auto;
    // background-position: 0px 0px, 0px 300px;
  }
`;

const Projects = () => {
  return (
    <ProjectContainer>
      <p id="test">test</p>
      <Project
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
    </ProjectContainer>
  );
};

export default Projects;
