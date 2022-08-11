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
  const [arrowHover, setArrowHover] = useState("");

  const Arrow = ({ className, style, onClick, direction }) => {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          ...style,
          transform: direction === "next" ? "rotate(270deg)" : "rotate(90deg)",
        }}
        onMouseEnter={() => setArrowHover(direction)}
        onMouseLeave={() => setArrowHover()}
      >
        <img
          className={`arrow disableArrow ${
            direction === arrowHover ? "hover" : ""
          }`}
          src={DownArrow}
          alt="DownArrow"
        />
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
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <ProjectContainer position={bannerPosition}>
      <BannerSection position={bannerPosition}>
        {/* Carousel */}
        <Carousel>
          <Slider {...carouselSettings} className="SliderContainer">
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
            return <p> {para}</p>;
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

  padding: 2em 2.5em 8em 2.5em;
  .ProjectIcon {
    width: 2em;
    text-align: center;
  }
  .ProjectImage {
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    padding: 0em 2.5em 17em 2.5em;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 18em;
    width: 95vw;
  }
`;

const BannerSection = styled.div`
  padding-bottom: 2em;

  img {
    width: 100%;
    max-width: 160px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1024px) {
    max-width: 40%;
    img {
      width: 100%;
      max-width: 190px;
    }
  }
  @media screen and (min-width: 2560px) {
    img {
      max-width: 500px;
    }
  }

  ${(props) =>
    props.position === "left"
      ? `
          @media screen and (min-width: 1024px) {
            padding-bottom: 0em;
            padding-top: 3em;
            padding-left: 1em;
          }
        `
      : null}

  .ProjectBanner {
    width: 100%;
  }
`;

const Carousel = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 90vw;
  max-width: 700px;
  height: 20em;
  padding-bottom: 3em;
  @media screen and (min-width: 1024px) {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    max-width: 800px;
    height: 20em;
    padding-bottom: 3em;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 1em 0em 1em;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  @media screen and (min-width: 500px) {
    justify-content: space-evenly;
    padding: 1.5em 1em 0em 1em;
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
  padding-top: 1em;
  padding-bottom: 2em;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 1024px) {
    max-width: 700px;
    padding-top: 3em;
    width: 45%;
    margin-left: 0px;
    margin-right: 0px;
  }
  @media screen and (min-width: 2560px) {
    max-width: 1000px;
  }
  ${(props) =>
    props.position === "left"
      ? `
          @media screen and (min-width: 1024px) {
            display:grid;
            justify-self:center;
            padding-left: 5em;
            padding-right: 0em;
          }
        `
      : props.position === "right"
      ? `
          @media screen and (min-width: 1024px) {
            padding-left: 0em;
            padding-right: 5em;
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
