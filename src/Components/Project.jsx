import React from "react";
import styled from "styled-components";

import Project1 from "./Projects/Project_1.jsx";
import Project2 from "./Projects/Project_2.jsx";
import Project3 from "./Projects/Project_3.jsx";

import mySvg from "../Images/Background_1.svg";

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

  .ProjectIcon {
    width: 2em;
    text-align: center;
  }

  .ProjectImage {
    object-fit: cover;
  }
`;

const Project = () => {
  return (
    <ProjectContainer>
      <Project1 />
      <Project2 />
      <Project3 />
    </ProjectContainer>
  );
};

export default Project;
