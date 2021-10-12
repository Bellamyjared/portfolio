import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Projects>
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
            <TechImage />
            <TechLable>NodeJs</TechLable>
            <TechImage />
            <TechLable>MongoDb</TechLable>
          </ProjectTech>
        </RightSection>
      </HighlightedProject>
    </Projects>
  );
};

export default Projects;
