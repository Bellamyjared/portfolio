import React from "react";
import styled from "styled-components";

import Expressicon from "../../Images/TechnologyImages/Express_icon.svg";
import JSicon from "../../Images/TechnologyImages/JS_icon.svg";
import NodeJSicon from "../../Images/TechnologyImages/NodeJS_icon.svg";
import Plusicon from "../../Images/TechnologyImages/Plus_icon.svg";
import RestAPIicon from "../../Images/TechnologyImages/RestAPI_icon.svg";
import Pythonicon from "../../Images/TechnologyImages/Python_icon.svg";

const BackEndIconsContainer = styled.div`
  .BackEndIcon {
    width: 90px;
    padding-bottom: 10px;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    width: 100%;
    height: auto;
    padding-top: 5em;
    max-width: 1200px;

    .BackEndIcon {
      width: 150px;
    }
  }
  @media screen and (min-width: 2560px) {
    max-width: 1500px;
  }
`;

const PythonIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 2em;

  img {
    width: 5em;
  }
  @media screen and (min-width: 1024px) {
    margin-top: -4em;
    margin-right: -2em;
    #Python {
      width: 6.5em;
    }
  }
`;

const NodeJSIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  padding-top: 3em;
  @media screen and (min-width: 1024px) {
    padding: 0em 0em 2em 0em;
  }
`;

const PlusIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;

  img {
    width: auto;
    height: 2em;
  }
  @media screen and (min-width: 1024px) {
    margin: 0em -9% 0em -9%;
    padding-top: 1em;
  }
`;

const ExpressIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;
  text-align: center;
  #ExpressJS {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    #Express {
      z-index: 1;
    }
    #ExpressJS {
      display: inherit;
      margin-top: -5em;
      padding-left: 8.5em;
      width: 3em;
      height: auto;
      z-index: 0;
    }
  }
  @media screen and (min-width: 2560px) {
    #ExpressJS {
      margin-top: -4em;
      padding-left: 7em;
    }
  }
`;

const RestAPIIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  @media screen and (min-width: 1024px) {
    margin-top: -3em;
    #RestAPI {
      width: 10em;
    }
  }
`;

const TechLable = styled.div`
  font-weight: bold;
  text-align: center;
`;

const BackEndIcons = () => {
  return (
    <BackEndIconsContainer>
      <PythonIconContainer>
        <img
          className="BackEndIcon"
          id="Python"
          src={Pythonicon}
          alt="PythonImage"
        />
        <TechLable>Python</TechLable>
      </PythonIconContainer>
      <NodeJSIconContainer>
        <img className="BackEndIcon" src={NodeJSicon} alt="NodeJSImage" />
      </NodeJSIconContainer>

      <PlusIconContainer>
        <img className="BackEndIcon" src={Plusicon} alt="PlusImage" />
      </PlusIconContainer>

      <ExpressIconContainer>
        <img
          className="BackEndIcon"
          id="Express"
          src={Expressicon}
          alt="ExpressImage"
        />
        <img id="ExpressJS" src={JSicon} alt="JSImage" />
      </ExpressIconContainer>

      <RestAPIIconContainer>
        <img
          className="BackEndIcon"
          id="RestAPI"
          src={RestAPIicon}
          alt="RestAPIImage"
        />
      </RestAPIIconContainer>
    </BackEndIconsContainer>
  );
};

export default BackEndIcons;
