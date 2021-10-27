import React from "react";
import styled from "styled-components";

import ProjectImage from "../../Images/ProjectImageTemp.png";
import React_icon from "../../Images/React_icon.svg";
import NodeJS_Icon from "../../Images/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/MongoDB_Icon.svg";

const Project = styled.div`
  padding-bottom: 10em;
`;

const LeftSection = styled.div`
  padding-top: 1em;
  padding-bottom: 2em;
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const Paragraph = styled.div``;

const RightSection = styled.div`
  display: flex;
  padding-bottom: 3em;
`;

const ProjectTech = styled.div`
  padding-left: 1em;
  padding-right: 3em;
`;
const ReactIcon = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 5px;
`;
const NodeJSIcon = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 5px;
`;
const MongoDBIcon = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 5px;
`;
const TechLable = styled.div`
  font-weight: bold;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
`;

const Projects_2 = () => {
  return (
    <Project>
      <LeftSection>
        <Title>Name of project</Title>
        <Paragraph>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Paragraph>
      </LeftSection>
      <RightSection>
        <ProjectTech>
          <ReactIcon>
            <img className="TechImage" src={React_icon} alt="React_Icon" />
            <TechLable>React</TechLable>
          </ReactIcon>
          <NodeJSIcon>
            <img className="TechImage" src={NodeJS_Icon} alt="NodeJS_Icon" />
            <TechLable>NodeJS</TechLable>
          </NodeJSIcon>
          <MongoDBIcon>
            <img className="TechImage" src={MongoDB_Icon} alt="MongoDB_Icon" />
            <TechLable>MongoDB</TechLable>
          </MongoDBIcon>
        </ProjectTech>
        <img className="ProjectImage" src={ProjectImage} alt="Project1Image" />
      </RightSection>

      <ProjectLinks>
        <button>Live</button>
        <button>Code</button>
      </ProjectLinks>
    </Project>
  );
};

export default Projects_2;
