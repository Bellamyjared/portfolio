import React from "react";
import styled from "styled-components";

import NodeJSicon from "../../Images/TechnologyImages/MySQL_icon.svg";
import RestAPIicon from "../../Images/TechnologyImages/MongoDB_icon.svg";

const DataBaseIconsContainer = styled.div`
  padding-top: 2em;
  .DataBaseIcon {
    width: 125px;
    padding-bottom: 3em;
  }
`;

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
    <DataBaseIconsContainer>
      <NodeJSIconContainer>
        <img className="DataBaseIcon" src={NodeJSicon} alt="NodeJSImage" />
      </NodeJSIconContainer>

      <RestAPIIconContainer>
        <img className="DataBaseIcon" src={RestAPIicon} alt="RestAPIImage" />
      </RestAPIIconContainer>
    </DataBaseIconsContainer>
  );
};

export default DataBaseIcons;
