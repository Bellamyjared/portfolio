import React from "react";
import styled from "styled-components";

import MySQL from "../../Images/TechnologyImages/MySQL_icon.svg";
import MongoDB from "../../Images/TechnologyImages/MongoDB_icon.svg";

const DataBaseIconsContainer = styled.div`
  padding-top: 2em;
  padding-left: 0em;
  padding-right: 1em;
  .DataBaseIcon {
    width: 80%;
    max-width: 200px;
    padding-bottom: 3em;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    margin: auto;
    width: 100%;
    height: auto;
    padding-top: 3em;
    max-width: 1200px;

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
  padding-top: 4em;
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
