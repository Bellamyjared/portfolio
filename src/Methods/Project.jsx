import React from "react";
import styled from "styled-components";

import Grocery_App_Banner from "../Images/ProjectImages/Grocery_App_Banner.png";
import React_icon from "../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../Images/ProjectImages/MongoDB_Icon.svg";

const ProjectContainer = styled.div`
  .ProjectIcon {
    width: 2em;
    text-align: center;
  }

  .ProjectImage {
    object-fit: cover;
  }

  // padding: 0em 2.5em 10em 2.5em;

  @media screen and (min-width: 768px) {
    // padding: 0em 2.5em 17em 2.5em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: right;
    // padding: 10em 2.5em 20em 2.5em;
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
const ProjectTechIcon = styled.div`
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

const Project = ({
  banner,
  projectTech,
  title,
  subTitle,
  paragraph,
  buttonLink,
}) => {
  return (
    <ProjectContainer>
      <RightSection>
        {/* Banner */}
        <img src={banner} alt={banner} />
        {/* Tech Icons under banner */}
        <ProjectTech>
          {projectTech.map((tech) => (
            <ProjectTechIcon>
              <img className="ProjectIcon" src={tech[0]} alt={tech[0]} />
              <TechLable>{tech[1]}</TechLable>
            </ProjectTechIcon>
          ))}
        </ProjectTech>
      </RightSection>
      <LeftSection>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Paragraph>{paragraph}</Paragraph>
        <ProjectLinks>
          <button>{buttonLink}</button>
        </ProjectLinks>
      </LeftSection>
    </ProjectContainer>
  );
};

export default Project;
