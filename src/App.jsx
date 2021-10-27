import React from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Project from "./Components/Project.jsx";
import Technology from "./Components/Technology.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    height: 100vh;
    background-color: #EBF8FF;
    margin : 0;
  
  }
  button {
    font-size : 16px;
    width: 8em;
    height: 2.5em;
    color: white;
    background-color: #031f4b;
    border-radius: 20px;
    border : none;
  }
  .TechImage{
    width: 2em;
    text-align: center;

  }

  .ProjectImage{
    width: 250px;
    height: auto;
    object-fit: cover

  }


`;
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <Project />
      <Technology />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
