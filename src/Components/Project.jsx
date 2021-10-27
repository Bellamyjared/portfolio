import React from "react";
import styled from "styled-components";

import Project1 from "./Projects/Projects_1.jsx";
import Project2 from "./Projects/Projects_2.jsx";
import Project3 from "./Projects/Projects_3.jsx";

import mySvg from "../Images/Background_1.svg";
import mySvg2 from "../Images/Background_2.svg";

const ProjectContainer = styled.div`
  background: url(${mySvg}) no-repeat,
    radial-gradient(farthest-side at 50% -100%, #ebf8ff, #6497b1) no-repeat;
  background-size: 100%, 300vw auto;
  background-position: 0px 0px, 0px 200px;

  /* overflow: hidden; */

  padding: 15em 2em 0px 2em;
  height: 200vh;
  z-index: 1;
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
