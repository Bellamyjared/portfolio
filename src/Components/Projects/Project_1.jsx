import React from "react";
import styled from "styled-components";

import ProjectImage from "../../Images/ProjectImageTemp.png";
import React_icon from "../../Images/React_icon.svg";
import NodeJS_Icon from "../../Images/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/MongoDB_Icon.svg";

const Project = styled.div`
  padding-bottom: 10em;
`;

const RightSection = styled.div`
  display: flex;
  padding-top: 6em;
`;

const ProjectTech = styled.div`
  padding-left: 2em;
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

const LeftSection = styled.div`
  padding-top: 1em;
  padding-bottom: 2em;
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const Paragraph = styled.div``;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const Project_1 = () => {
  return (
    <Project>
      <RightSection>
        <img className="ProjectImage" src={ProjectImage} alt="Project1Image" />
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
      </RightSection>
      <LeftSection>
        <Title>Name of project</Title>
        <Paragraph>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
        </Paragraph>
      </LeftSection>
      <ProjectLinks>
        <button>Live</button>
      </ProjectLinks>
    </Project>
  );
};

export default Project_1;
