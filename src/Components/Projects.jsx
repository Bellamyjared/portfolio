import React from "react";
import styled from "styled-components";

import Project from "../Methods/Project.jsx";
import Project2 from "./Projects/Project_2.jsx";
import Project3 from "./Projects/Project_3.jsx";

import mySvg from "../Images/Background_1.svg";

import Grocery_App_Banner from "../Images/ProjectImages/Grocery_App_Banner.png";
import React_icon from "../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../Images/ProjectImages/MongoDB_Icon.svg";

const ProjectContainer = styled.div`
  position: absolute;
  top: 100vh;
  width: 100%;

  // background-color: lightgrey;
  // background: url(${mySvg}) no-repeat,
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
      <Project
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
    </ProjectContainer>
  );
};

export default Projects;
