import React from "react";
import styled from "styled-components";

import Expressicon from "../../Images/TechnologyImages/Express_icon.svg";
import NodeJSicon from "../../Images/TechnologyImages/NodeJS_icon.svg";
import Plusicon from "../../Images/TechnologyImages/Plus_icon.svg";
import RestAPIicon from "../../Images/TechnologyImages/RestAPI_icon.svg";
import Pythonicon from "../../Images/TechnologyImages/Python_icon.svg";

const NodeJSIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  padding-top: 3em;
  padding-left: 1em;
`;

const PlusIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  padding-left: 1em;

  img {
    width: 2em;
  }
`;

const ExpressIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;
  padding-left: 1em;
  text-align: center;
`;

const PythonIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 2em;
  padding-left: 1em;

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
  padding-left: 1em;
`;

const TechLable = styled.div`
  font-weight: bold;
  text-align: center;
`;

const BackEndIcons = () => {
  return (
    <div>
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
    </div>
  );
};

export default BackEndIcons;
