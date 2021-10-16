import React from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Projects from "./Components/Projects.jsx";
import Technology from "./Components/Technology.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import test from "./Images/Group_4.svg";

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    background-image: url("./Images/Group_4.png");
    
    /* background-color: #EBF8FF; */
    margin: 2em 2em 0em 2em;
  }
  button {
    font-size : 20px;
    padding : 9px 30px 9px 30px;
    color: white;
  background-color: #031f4b;
  border-radius: 20px;
  border : none;
  }


`;
function App() {
  return (
    <>
      <img alt="test" src={test}></img>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Projects />
      <Technology />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
