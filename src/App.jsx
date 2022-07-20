import React, { Suspense, useState, useRef, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  OrbitControls,
  SpotLight,
  MeshWobbleMaterial,
  useHelper,
} from "@react-three/drei";
import * as THREE from "three";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Scene from "./Components/Scene.jsx";

export default function App(props) {
  // !~ Normal app
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState === "hidden"
      ? setToggleMobileState("none") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");

  // const [hidden, set] = useState();
  const [UserScrolledValue, setUserScrolledValue] = useState(0);

  function ChromeWheel() {}

  // document.addEventListener("keypress", console.log("test"));

  useEffect(() => {
    console.log(UserScrolledValue);
  }, [UserScrolledValue]);

  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <GlobalStyle test={UserScrolledValue} />
      <Canvas
        orthographic
        shadows
        gl={{ depth: false }}
        camera={{ zoom: 40, position: [-150, 100, 201] }}
      >
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <ScrollControls damping={10} pages={9} distance={1}>
            <Scroll>
              <Scene setUserScrolledValue={setUserScrolledValue} />
            </Scroll>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~ HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Scroll html style={{ width: "100%" }}>
              <NavBar
                ToggleMobileNav={ToggleMobileNav}
                ToggleMobileState={ToggleMobileState}
                settesting={"settesting"}
                ChromeWheel={ChromeWheel}
              />
              <Hero />
              <Projects />
              <Technology />
              <About />
              <Contact />
              <Footer />
            </Scroll>
          </ScrollControls>

          {/* ~~~~~~~~~~~~~~~~ CANVAS PROP AND BACKGROPS ~~~~~~~~~~~~~~~~  */}
        </Suspense>
      </Canvas>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
   
    font-family: 'Poppins', sans-serif;
    // background-color: black;
    margin : 0;
    
    @media screen and (min-width: 768px){
      width: 100%
      font-size: 18px;
      overflow-y: hidden;
    }    
    
    @media screen and (min-width: 2560px){
      width: 100%
      font-size: 25px;
      overflow-y: hidden;
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
  ::-webkit-scrollbar {
    display: ${(props) => (props.test ? "flex" : "none")}
  }
  ::-webkit-scrollbar-track {
    background: black
  }
  
`;
