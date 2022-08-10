import React from "react";
import styled from "styled-components";

import ProjectConstructor from "./ProjectConstructor.jsx";

import GA_Banner from "../../Images/ProjectImages/grocery_App_Pictures/Banner.png";
import GA_Category from "../../Images/ProjectImages/grocery_App_Pictures/category.png";
import GA_Item from "../../Images/ProjectImages/grocery_App_Pictures/item.png";
import GA_ItemCreate from "../../Images/ProjectImages/grocery_App_Pictures/itemCreate.png";
import GA_List from "../../Images/ProjectImages/grocery_App_Pictures/list.png";
import GA_Pantry from "../../Images/ProjectImages/grocery_App_Pictures/pantry.png";
import GA_Recipe from "../../Images/ProjectImages/grocery_App_Pictures/recipe.png";
import GA_RecipeCreate from "../../Images/ProjectImages/grocery_App_Pictures/recipeCreate.png";

import MI_Online from "../../Images/ProjectImages/crypto_Monitor_Pictures/online.png";
import MI_Error from "../../Images/ProjectImages/crypto_Monitor_Pictures/error.png";
import MI_MultiError from "../../Images/ProjectImages/crypto_Monitor_Pictures/multiError.png";
import MI_Offline from "../../Images/ProjectImages/crypto_Monitor_Pictures/offline.png";

import React_icon from "../../Images/ProjectImages/icons/React_icon.svg";
import NodeJS_Icon from "../../Images/ProjectImages/icons/NodeJS_Icon.svg";
import MongoDB_Icon from "../../Images/ProjectImages/icons/MongoDB_Icon.svg";
import API_icon from "../../Images/ProjectImages/icons/API_icon.svg";
import Flask_icon from "../../Images/ProjectImages/icons/Flask_icon.svg";
import Html_icon from "../../Images/ProjectImages/icons/Html_icon.svg";

// list of pictures for carousel, put in order
const grocery_app_pictures = [
  GA_Banner,
  GA_Pantry,
  GA_List,
  GA_Recipe,
  GA_RecipeCreate,
  GA_Category,
  GA_ItemCreate,
  GA_Item,
];

const miner_info_pictures = [MI_Online, MI_Error, MI_MultiError, MI_Offline];

const Projects = () => {
  return (
    <ProjectContainer>
      <div>
        <ProjectConstructor
          id="project1"
          bannerPosition="left"
          images={grocery_app_pictures}
          projectTech={[
            [React_icon, "React Native"],
            [NodeJS_Icon, "NodeJS"],
            [MongoDB_Icon, "MongoDB"],
          ]}
          title="Grocery List"
          subTitle="Mobile Appication"
          // these descriptions need more detail, and creativity that my brain just cant do right now so, please fix at a later date.
          paragraph={[
            `This is an ongoing passion project inspired by my wife. She needed a portable and easy to use grocery application. 
          So I decided to put my skills to use and custom-built a simple, sleek, and user friendly mobile app.`,
            `After signing in with google the user will be able to create custom item widgets. These widgets can be easily 
          added, removed, or edited to their grocery list or recipes. There are future plans to add a Pantry section, which will 
          dynamically track food and other perishable items.`,
            `As for the application's core technologies, I decided to use the MERN stack. React Native (powered by Expo) allowed 
          for rapid UI prototypes to be designed and deployed. NodeJs, alongside Express, was perfect for seamless connection and 
          operations between the front and back end. MongoDB's effortless scaling and flexibility made it the perfect choice for 
          the database.`,
          ]}
          buttonLink="Live"
        />
        <ProjectConstructor
          bannerPosition="right"
          images={miner_info_pictures}
          projectTech={[
            [Html_icon, "Html"],
            [Flask_icon, "Flask"],
            [API_icon, "API"],
          ]}
          title="Crypto Monitoring System"
          subTitle="Web Appication"
          paragraph={[
            `Based on commission work, this web application allows a user to monitor their crypto miners. 
          Through the use of simple aesthetics, the user is quickly informed of the most important information about their mining operation.`,
            `The front end was created with Python (powered with flask). Information is provided to the front end by a custom API script hosted 
          by a Raspberry Pi. The Pi needs to be on the local network on the crypto miners, so it can scrap information the miners naturally log. 
          The original motive of this application was to fulfill a local business' request for a customizable, affordable , and low latency solution 
          for monitoring their hardware. `,
          ]}
          buttonLink="Live"
        />
      </div>
    </ProjectContainer>
  );
};

export default Projects;

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
