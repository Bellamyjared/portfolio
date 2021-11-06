import React from "react";
import styled from "styled-components";

import Expressicon from "../../Images/TechnologyImages/Express_icon.svg";
import NodeJSicon from "../../Images/TechnologyImages/NodeJS_icon.svg";
import Plusicon from "../../Images/TechnologyImages/Plus_icon.svg";
import RestAPIicon from "../../Images/TechnologyImages/RestAPI_icon.svg";
import Pythonicon from "../../Images/TechnologyImages/Python_icon.svg";

const BackEndIconsContainer = styled.div`
  .BackEndIcon {
    width: 90px;
    padding-bottom: 10px;
  }
`;
const NodeJSIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  padding-top: 3em;
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
`;

const ExpressIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;
  text-align: center;
`;

const PythonIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;

  img {
    width: 5em;
  }
`;

const RestAPIIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
`;

const TechLable = styled.div`
  font-weight: bold;
  text-align: center;
`;

const BackEndIcons = () => {
  return (
    <BackEndIconsContainer>
      <NodeJSIconContainer>
        <img className="BackEndIcon" src={NodeJSicon} alt="NodeJSImage" />
      </NodeJSIconContainer>

      <PlusIconContainer>
        <img className="BackEndIcon" src={Plusicon} alt="PlusImage" />
      </PlusIconContainer>

      <ExpressIconContainer>
        <img className="BackEndIcon" src={Expressicon} alt="ExpressImage" />
      </ExpressIconContainer>

      <PythonIconContainer>
        <img className="BackEndIcon" src={Pythonicon} alt="PythonImage" />
        <TechLable>Python</TechLable>
      </PythonIconContainer>

      <RestAPIIconContainer>
        <img className="BackEndIcon" src={RestAPIicon} alt="RestAPIImage" />
      </RestAPIIconContainer>
    </BackEndIconsContainer>
  );
};

export default BackEndIcons;
