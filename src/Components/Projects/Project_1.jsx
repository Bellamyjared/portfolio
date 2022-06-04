import React from "react";
import styled from "styled-components";

import ProjectImage from "../../Images/ProjectImageTemp.png";
import React_icon from "../../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/MongoDB_Icon.svg";

const Project = styled.div`
  padding: 0em 2.5em 10em 2.5em;

  @media screen and (min-width: 768px) {
    padding: 0em 2.5em 17em 2.5em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: right;
    padding: 10em 2.5em 20em 2.5em;
  }
  @media screen and (min-width: 1440px) {
    justify-content: center;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 2560px) {
    max-width: 1800px;
  }
`;

const RightSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 55%;
    max-width: 600px;

    img {
      width: 100%;
    }
  }
  @media screen and (min-width: 2560px) {
    max-width: 700px;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 1em 0em 1em;
  @media screen and (min-width: 500px) {
    justify-content: space-evenly;
    padding: 1.5em 1em 0em 1em;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
  }
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
  @media screen and (min-width: 1024px) {
    max-width: 600px;

    padding-top: 3em;
    padding-left: 3em;
    padding-right: 5em;

    width: 45%;
  }
  @media screen and (min-width: 2560px) {
    max-width: 1000px;
    padding-right: 3em;
  }
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const SubTitle = styled.div`
  font-size: 22px;
  margin-bottom: 5px;
`;
const Paragraph = styled.div``;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;

const Project_1 = () => {
  return (
    <Project>
      <RightSection>
        <img className="ProjectImage" src={ProjectImage} alt="Project1Image" />
        <ProjectTech>
          <ReactIcon>
            <img className="ProjectIcon" src={React_icon} alt="React_Icon" />
            <TechLable>React Native</TechLable>
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
      </RightSection>
      <LeftSection>
        <Title>Grocery List</Title>
        <SubTitle>Mobile Appication</SubTitle>
        <Paragraph>
          This is an on going passion project that I've create for my wife. It
          allows a user to create a grocery list based off custom item widgets.
        </Paragraph>
        <ProjectLinks>
          <button>Live</button>
          <button>Code</button>
        </ProjectLinks>
      </LeftSection>
    </Project>
  );
};

export default Project_1;
