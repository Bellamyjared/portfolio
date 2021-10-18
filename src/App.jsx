import React from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Technology from "./Components/Technology.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import test from "./Images/TEST_2.svg";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    
    background-color: #EBF8FF;
    margin: 0%;
    /* margin-left: 0%; */
  }
  button {
    font-size : 20px;
    padding : 9px 30px 9px 30px;
    color: white;
  background-color: #031f4b;
  border-radius: 20px;
  border : none;
  }
img.test {
  height: 100vh;
  width : 150vh;
  border : 2px solid;
  /* object-fit : cover 100%; */
  overflow: clip;

  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
}

`;
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <div style={{ border: `2px solid` }}>
        <Projects />
      </div>
      <Technology />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
