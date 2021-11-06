import React from "react";
import styled from "styled-components";

import MySQL from "../../Images/TechnologyImages/MySQL_icon.svg";
import MongoDB from "../../Images/TechnologyImages/MongoDB_icon.svg";

const DataBaseIconsContainer = styled.div`
  padding-top: 2em;
  padding-left: 2em;
  .DataBaseIcon {
    width: 125px;
    padding-bottom: 3em;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-evenly;

    .DataBaseIcon {
      width: 250px;
    }
    #MongoDB {
      width: 350px;
    }
  }
`;

const MySQLContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 3em;
  padding-top: 7em;
  margin-left: -2em;
  img {
    width: 10em;
  }
  @media screen and (min-width: 1024px) {
    padding: 0em;
  }
`;

const MongoDBContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1em;
  margin-left: -2em;
  img {
    width: 13em;
  }
  @media screen and (min-width: 1024px) {
    padding: 0em;
    margin: 0em;
  }
`;

const DataBaseIcons = () => {
  return (
    <DataBaseIconsContainer>
      <MySQLContainer>
        <img className="DataBaseIcon" src={MySQL} alt="NodeJSImage" />
      </MySQLContainer>

      <MongoDBContainer>
        <img
          className="DataBaseIcon"
          id="MongoDB"
          src={MongoDB}
          alt="RestAPIImage"
        />
      </MongoDBContainer>
    </DataBaseIconsContainer>
  );
};

export default DataBaseIcons;
