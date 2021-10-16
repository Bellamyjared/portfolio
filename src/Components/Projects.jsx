import React from "react";
import styled from "styled-components";

const HighlightedProject = styled.div``;
const LeftSection = styled.div``;
const Title = styled.div``;
const Paragraph = styled.div``;
const RightSection = styled.div``;
const ProjectImage = styled.div``;
const ProjectTech = styled.div``;
const TechImage = styled.div``;
const TechLable = styled.div``;

// REMOVE SHADOW FROM ALL SVG
// REMOVE SHADOW FROM BACKGROUND AND THEN INPLEMANT IT
// DELETING TESTING IMAGES

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
