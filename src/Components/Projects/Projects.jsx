import React from "react";
import styled from "styled-components";

import Project from "./ConstructorProject.jsx";

import Grocery_App_Banner from "../../Images/ProjectImages/Grocery_App_Banner.png";
import React_icon from "../../Images/ProjectImages/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/MongoDB_Icon.svg";
import Miner_Info_Banner from "../../Images/ProjectImages/1.png";
import API_icon from "../../Images/ProjectImages/API_icon.svg";
import Flask_icon from "../../Images/ProjectImages/Flask_icon.svg";
import Html_icon from "../../Images/ProjectImages/Html_icon.svg";

const ProjectContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 1%,
    rgba(255, 255, 255, 1) 3%
  );
  width: 100%;
  padding-top: 10vh;
  @media screen and (min-width: 768px) {
    padding-top: 20vh;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 1%,
      rgba(255, 255, 255, 1) 5%
    );
    padding-top: 15em;
    width: 100%;
  }
  @media screen and (min-width: 2560px) {
  }
`;

const Projects = () => {
  return (
    <ProjectContainer>
      <div>
        <Project
          id="project1"
          bannerPosition="left"
          banner={Grocery_App_Banner}
          projectTech={[
            [React_icon, "React Native"],
            [NodeJS_Icon, "NodeJS"],
            [MongoDB_Icon, "MongoDB"],
          ]}
          title="Grocery List"
          subTitle="Mobile Appication"
          // these descriptions need more detail, and creativity that my brain just cant do right now so, please fix at a later date.
          paragraph="This is an ongoing passion project inspired by my wife. Simply put, it allows a user to create grocery lists and recipes based on custom item widgets. I used the MERN stack to complete this project.


          After signing in with google the user will be able to create custom item widgets. These widgets can be easily added, removed, or edited to their grocery list or recipes.
                   
          As mentioned before, I used React Native (powered by Expo), NodeJs alongside Express, and MongoDB
          "
          buttonLink="Live"
        />
        <Project
          bannerPosition="right"
          banner={Miner_Info_Banner}
          projectTech={[
            [Html_icon, "Html"],
            [Flask_icon, "Flask"],
            [API_icon, "API"],
          ]}
          title="Crypto Monitoring System"
          subTitle="Web Appication"
          paragraph="Based on commission work, this web application allows a user to monitor their crypto coin miners. Through the use of simple aesthetics the user is quickly informed of the most important information about their mining operation. The front end was created with Python (powered by flask). Information is provided to the front end by a custom API script hosted by a Raspberry Pi. The Pi needs to be on the local network on the crypto miners so it can scrap the information the miners naturally log. 

          The original creation of this monitoring system was to fill a need of a small local client where they wanted a simple, low cost,  and low latency solution to monitoring their hardware. 
          "
          buttonLink="Live"
        />
      </div>
    </ProjectContainer>
  );
};

export default Projects;
