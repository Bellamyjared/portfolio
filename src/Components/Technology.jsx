import React, { useState } from "react";
import styled from "styled-components";

const BackGroundText = styled.div``;
const TechImages = styled.div``;
const FrontEnd = styled.div``;
const BackEnd = styled.div``;
const DataBase = styled.div``;
const TechLables = styled.div``;

const Technology = () => {
  const [TechnologyText, setTechnologyText] = useState("Technology");
  return (
    <div>
      <BackGroundText>{TechnologyText}</BackGroundText>
      <TechImages>
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
        <DataBase></DataBase>
      </TechImages>
      <TechLables></TechLables>
    </div>
  );
};

export default Technology;
