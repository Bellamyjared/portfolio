import React from "react";
import styled from "styled-components";

import Cssicon from "../../Images/TechnologyImages/Css_icon.svg";
import htmlicon from "../../Images/TechnologyImages/html_icon.svg";
import JSicon from "../../Images/TechnologyImages/JS_icon.svg";
import reacticon from "../../Images/TechnologyImages/react_icon.svg";
import reduxicon from "../../Images/TechnologyImages/redux_icon.svg";

const CssIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  text-align: center;
`;
const HtmlIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
`;
const JSIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
`;
const ReactIconContainer = styled.div`
  display: flex;
  width: 3em;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
`;
const ReduxIconContainer = styled.div`
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

const FrontEnd = () => {
  return (
    <div>
      <CssIconContainer>
        <img className="FrontEndIcon" src={Cssicon} alt="CssImage" />
        <TechLable>CSS</TechLable>
      </CssIconContainer>

      <HtmlIconContainer>
        <img className="FrontEndIcon" src={htmlicon} alt="HtmlImage" />
        <TechLable>HTML5</TechLable>
      </HtmlIconContainer>

      <JSIconContainer>
        <img className="FrontEndIcon" src={JSicon} alt="JSImage" />
        <TechLable>JavaScript</TechLable>
      </JSIconContainer>

      <ReactIconContainer>
        <img className="FrontEndIcon" src={reacticon} alt="ReactImage" />
        <TechLable>React</TechLable>
      </ReactIconContainer>

      <ReduxIconContainer>
        <img className="FrontEndIcon" src={reduxicon} alt="ReduxImage" />
        <TechLable>Redux</TechLable>
      </ReduxIconContainer>
    </div>
  );
};

export default FrontEnd;
