import React from "react";
import styled from "styled-components";

import ProjectImage from "../../Images/ProjectImageTemp.png";
import React_icon from "../../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/MongoDB_Icon.svg";

const Project = styled.div`
  padding: 0em 2.5em 10em 2.5em;
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
            <img className="ProjectIcon" src={React_icon} alt="React_Icon" />
            <TechLable>React</TechLable>
          </ReactIcon>
          <NodeJSIcon>
            <img className="ProjectIcon" src={NodeJS_Icon} alt="NodeJS_Icon" />
            <TechLable>NodeJS</TechLable>
          </NodeJSIcon>
          <MongoDBIcon>
            <img
              className="ProjectIcon"
              src={MongoDB_Icon}
              alt="MongoDB_Icon"
            />
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
