import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "./Project.css";
import DownArrow from "../../Images/DownArrow.svg";

const ProjectConstructor = ({
  bannerPosition,
  images,
  projectTech,
  title,
  subTitle,
  paragraph,
  buttonLink,
}) => {
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ transform: "rotate(270deg)" }}
      >
        <img src={DownArrow} alt="DownArrow" />
      </div>
    );
  };
  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ transform: "rotate(90deg)", backgroundColor: " #0000000 0%," }}
      >
        <img src={DownArrow} alt="DownArrow" />
      </div>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  const carouselSettings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <ProjectContainer position={bannerPosition}>
      <BannerSection position={bannerPosition}>
        {/* Carousel */}
        <Carousel>
          <Slider {...carouselSettings}>
            {images.map((img, i) => {
              return (
                <div
                  className={i === imageIndex ? "slide activeSlide" : "slide"}
                >
                  <img src={img} alt={img} />
                </div>
              );
            })}
          </Slider>
        </Carousel>
        {/* <img className="ProjectBanner" src={banner} alt={banner} /> */}
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
        <Paragraph>
          {paragraph.map((para) => {
            {
              return <p> {para}</p>;
            }
          })}
        </Paragraph>
        <ProjectLinks>
          <button>{buttonLink}</button>
        </ProjectLinks>
      </InformationSection>
    </ProjectContainer>
  );
};

export default ProjectConstructor;

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

  padding: 2em 2.5em 8em 2.5em;

  @media screen and (min-width: 768px) {
    padding: 0em 2.5em 17em 2.5em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    padding-bottom: 15em;
    width: 95vw;
  }
`;

const BannerSection = styled.div`
  padding-bottom: 2em;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 600px;
  }

  ${(props) =>
    props.position === "left"
      ? `
          @media screen and (min-width: 1024px) {
            width: 55%;
            max-width: 500px;

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

      @media screen and (min-width: 1024px) {
        width: 55%;
        max-width: 500px;
    
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
  }
`;
const Carousel = styled.div`
  svg {
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
            padding-right: 1em;

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
const Paragraph = styled.div`
  p {
    text-indent: 0.5em;
  }
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2em;
`;
