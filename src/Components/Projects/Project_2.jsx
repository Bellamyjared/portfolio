import React from "react";
import styled from "styled-components";

import ProjectImage from "../../Images/ProjectImageTemp.png";
import React_icon from "../../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/MongoDB_Icon.svg";

const Project = styled.div`
  display: flex;
  justify-content: center;
  padding: 20em 2.5em 10em 2.5em;
  flex-direction: row-reverse;

  // @media screen and (min-width: 1024px) {
  //   display: flex;
  //   flex-direction: row-reverse;
  //   justify-content: right;
  //   padding: 15em 2.5em 10em 2.5em;
  // }
  // @media screen and (min-width: 1440px) {
  //   justify-content: center;
  //   max-width: 1400px;
  //   margin-left: auto;
  //   margin-right: auto;
  // }
  // @media screen and (min-width: 2560px) {
  //   padding: 15em 2.5em 10em 2.5em;
  //   max-width: 1800px;
  // }
`;

const LeftSection = styled.div`
  padding-top: 1em;
  padding-bottom: 2em;
  @media screen and (min-width: 1024px) {
    max-width: 600px;

    padding-top: 3em;
    padding-left: 3em;
    padding-right: 0em;

    width: 50%;
  }
  @media screen and (min-width: 2560px) {
    max-width: 1000px;
  }
`;
const Title = styled.h1`
  margin-bottom: 5px;
`;
const Paragraph = styled.div``;

const RightSection = styled.div`
  padding-bottom: 2em;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 400px;
  }
  @media screen and (min-width: 1024px) {
    width: 55%;
    max-width: 600px;

    img {
      margin-left: 0px;
      margin-right: 0px;
      width: 100%;
      max-width: none;
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

const ProjectLinks = styled.div`
  div {
    display: flex;
    justify-content: space-around;
    padding-top: 2em;
  }
  @media screen and (max-width: 350px) {
    button {
      width: 7em;
    }
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    width: 45%;
    padding-top: 15em;

    justify-content: left;
    div {
      display: flex;
      justify-content: left;
      button {
        margin-left: 2em;
        margin-right: 3em;
      }
    }
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    width: 400px;

    padding-top: 15em;
    padding-left: 400px;

    justify-content: right;
    div {
      display: flex;
      justify-content: left;
      button {
        margin-left: 2em;
        margin-right: 3em;
      }
    }
  }
  @media screen and (min-width: 2560px) {
    width: 1000px;
    padding-left: 780px;
  }
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
        <img className="ProjectImage" src={ProjectImage} alt="Project1Image" />
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
      </RightSection>
      <ProjectLinks>
        <div className="DivOfUnprecedentedGloryOfTheHighest">
          <button>Live</button>
          <button>Code</button>
        </div>
      </ProjectLinks>
    </Project>
  );
};

export default Projects_2;
