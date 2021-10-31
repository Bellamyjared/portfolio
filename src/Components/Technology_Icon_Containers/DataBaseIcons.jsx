import React from "react";
import styled from "styled-components";

import NodeJSicon from "../../Images/TechnologyImages/MySQL_icon.svg";
import RestAPIicon from "../../Images/TechnologyImages/MongoDB_icon.svg";

const NodeJSIconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3em;
  padding-top: 7em;
  margin-left: -2em;
  img {
    width: 10em;
  }
`;

const RestAPIIconContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  margin-left: -2em;
  img {
    width: 13em;
  }
`;

const DataBaseIcons = () => {
  return (
    <div>
      <NodeJSIconContainer>
        <img className="BackEndIcon" src={NodeJSicon} alt="NodeJSImage" />
      </NodeJSIconContainer>

      <RestAPIIconContainer>
        <img className="BackEndIcon" src={RestAPIicon} alt="RestAPIImage" />
      </RestAPIIconContainer>
    </div>
  );
};

export default DataBaseIcons;
