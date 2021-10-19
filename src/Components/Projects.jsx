import React from "react";
import styled from "styled-components";

import mySvg from "../Images/Background_1.png";

const HighlightedProject = styled.div`
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-image: url(${mySvg});
  overflow: hidden;
`;
const LeftSection = styled.div``;
const Title = styled.div``;
const Paragraph = styled.div`
  /* display: float; */
`;
const RightSection = styled.div``;
const ProjectImage = styled.div``;
const ProjectTech = styled.div``;
const TechImage = styled.div``;
const TechLable = styled.div``;

const Projects = () => {
  return (
    <HighlightedProject>
      <LeftSection>
        <Title>Name of project</Title>
        <Paragraph>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Paragraph>
      </LeftSection>
      <RightSection>
        <ProjectImage />
        <ProjectTech>
          <TechImage />
          <TechLable>React</TechLable>
        </ProjectTech>
      </RightSection>
    </HighlightedProject>
  );
};

export default Projects;
