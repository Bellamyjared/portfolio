import React from "react";
import styled from "styled-components";

import Project1 from "./Projects/Project_1.jsx";
import Project2 from "./Projects/Project_2.jsx";
import Project3 from "./Projects/Project_3.jsx";

import Technology from "./Technology.jsx";

import mySvg from "../Images/Background_1.svg";

const ProjectContainer = styled.div`
  background: url(${mySvg}) no-repeat,
    radial-gradient(farthest-side at 60% 30%, #ebf8ff, #6497b1) no-repeat;
  background-size: 300vw 1100px, 150vw auto;
  background-position: 0px 0px, 0px 200px;

  @media screen and (min-width: 1024px) {
    background-size: 100vw 900px, 150vw auto;
  }

  height: 175em;

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
      <Technology />
      {/* I moved the rest into Technology for the same reason as before */}
    </ProjectContainer>
  );
};

export default Project;