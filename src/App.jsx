import React from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Project from "./Components/Project.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: #EBF8FF;
    margin : 0;
  
  }
  button {
    font-size : 16px;
    width: 8em;
    height: 2.4em;
    color: white;
    background-color: #031f4b;
    border-radius: 20px;
    border : none;
  }

  .TechImage{
    width: 100px;
    height: auto;

  }

  .FrontEndIcon{
    width: 65px;
    padding-bottom: 10px

  }
  .BackEndIcon{
    width: 125px;
    padding-bottom: 10px

  }
  

  .ProjectIcon{
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

      {/* everything else was moved to project, because it was a headache trying to get the proper layering effect */}
    </>
  );
}

export default App;
