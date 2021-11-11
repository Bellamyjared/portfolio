import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Project from "./Components/Project.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    
    font-family: 'Poppins', sans-serif;
    background-color: #EBF8FF;
    margin : 0;

    @media screen and (min-width: 768px){
      font-size: 18px;
    }    
    @media screen and (min-width: 2560px){
      font-size: 25px;
    }
  
  }
  button {
    font-size : 16px;
    width: 8em;
    height: 2.4em;
    color: white;
    background-color: #031f4b;
    border-radius: 20px;
    border : none;
    @media screen and (min-width: 2560px){
      font-size: 25px;
      border-radius: 50px;
    }
  }




`;
function App() {
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState == "hidden"
      ? setToggleMobileState("visible") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");
  console.log(ToggleMobileState);

  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <GlobalStyle />
      <NavBar
        ToggleMobileNav={ToggleMobileNav}
        ToggleMobileState={ToggleMobileState}
      />
      <Hero />
      <Project />

      {/* everything else was moved to project, because it was a headache trying to get the proper layering effect */}
    </div>
  );
}

export default App;
