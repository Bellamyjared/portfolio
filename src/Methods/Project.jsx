import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  ${(props) =>
    props.position === "right" ? `flex-direction: row-reverse;` : null}
  .ProjectIcon {
    width: 2em;
    text-align: center;
  }

  .ProjectImage {
    object-fit: cover;
  }

  padding: 0em 2.5em 10em 2.5em;

  @media screen and (min-width: 768px) {
    padding: 0em 2.5em 17em 2.5em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: right;
    padding: 0em 2.5em 10em 2.5em;
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

const BannerSection = styled.div`
  ${(props) =>
    props.position === "left"
      ? `
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
        `
      : props.position === "right"
      ? `
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
        `
      : null}

  .ProjectBanner {
    width: 100%;
    height: auto;
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

const InformationSection = styled.div`
  ${(props) =>
    props.position === "left"
      ? `
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
        `
      : props.position === "right"
      ? `
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
        `
      : null}
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
  bannerPosition,
  banner,
  projectTech,
  title,
  subTitle,
  paragraph,
  buttonLink,
}) => {
  return (
    <ProjectContainer position={bannerPosition}>
      <BannerSection position={bannerPosition}>
        {/* Banner */}
        <img className="ProjectBanner" src={banner} alt={banner} />
        {/* Tech Icons under banner */}
        <ProjectTech>
          {projectTech.map((tech) => (
            <ProjectTechIcon>
              <img className="ProjectIcon" src={tech[0]} alt={tech[0]} />
              <TechLable>{tech[1]}</TechLable>
            </ProjectTechIcon>
          ))}
        </ProjectTech>
      </BannerSection>

      <InformationSection position={bannerPosition}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Paragraph>{paragraph}</Paragraph>
        <ProjectLinks>
          <button>{buttonLink}</button>
        </ProjectLinks>
      </InformationSection>
    </ProjectContainer>
  );
};

export default Project;
