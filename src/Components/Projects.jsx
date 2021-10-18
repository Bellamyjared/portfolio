import React from "react";
import styled from "styled-components";

import mySvg from "../Images/Group_4.png";

const HighlightedProject = styled.div`
  background-repeat: no-repeat;
  height: 100vh;
  border: 2px solid;
  background-size: cover;
  background-image: url(${mySvg});
  background-position: -100px;
  overflow: visible;
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
      {/* <img alt="test" className="test" src={mySvg}></img> */}

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
