import React from "react";
import styled from "styled-components";

import Projects from "./Projects/Projects";
import Technology from "./Technology/Technology";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

const HTMLContainer = styled.div`
  top: 120vh;
  position: absolute;
  width: 100%;
  display: grid;
  justify-content: center;
  background-color: black;
`;

export default function Html() {
  return (
    <HTMLContainer>
      <Projects />
      <Technology />
      <About />
      <Contact />
      <Footer />
    </HTMLContainer>
  );
}
