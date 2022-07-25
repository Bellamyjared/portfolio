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
  Preload,
} from "@react-three/drei";
import * as THREE from "three";

import NavBar from "./Components/NavBar/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Html from "./Components/Html.jsx";
import Scene from "./Components/Scene.jsx";

export default function App(props) {
  const [HasUserScrolled, setHasUserScrolled] = useState(0);

  return (
    <div style={{ height: "100vh" }}>
      <GlobalStyle HasUserScrolled={HasUserScrolled} />
      <Canvas
        orthographic
        shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
      >
        <Suspense fallback={null}>
          <Preload all />
          {/* <OrbitControls /> */}
          <ScrollControls damping={10} pages={7} distance={1}>
            <Scroll>
              <Scene setHasUserScrolled={setHasUserScrolled} />
            </Scroll>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~ HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Scroll html style={{ width: "100%" }}>
              <NavBar HasUserScrolled={HasUserScrolled} />
              <Hero HasUserScrolled={HasUserScrolled} />
              <Html HasUserScrolled={HasUserScrolled} />
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
     background-color: white;
    margin : 0;
    
    @media screen and (min-width: 768px){
      width: 100%;
      font-size: 18px;
    }    
    
    @media screen and (min-width: 2560px){
      width: 100%;
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

  .invertSVG {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
      brightness(103%) contrast(103%);
  }

  ::-webkit-scrollbar {
    display:none
  }
 
  
  ::-webkit-scrollbar-track {
background: ${(props) =>
  props.HasUserScrolled ? "rgba(90, 90, 90, 0.8);" : "rgba(255, 0, 0, 0.0);"}

  }

.FirstVisit {
  width: 0px;
  opacity: 0;
}

.FadeIn {
  animation-name: fadeIn;
  animation-duration: 2s;
}
.FadeOut {
  opacity: 0;
  animation-name: fadeOut;
  animation-duration: 0.5s;
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.NavFadeIn {
  animation-name: navFadeIn;
  animation-duration: 0.5s;
  img {
    padding-right: 1em;
  }

}
.NavFadeOut {
  opacity: 0;
  height: 0px;
  animation-name: navFadeOut;
  animation-duration: 0.5s;
}

.DisablingNavLinks {
  height: 0px;
  padding-right: 0em;
  animation-name: disablingNavLinks;
  animation-duration: 0.6s;
}


@keyframes navFadeIn {
  from {
    height: 0px;
    opacity: 0;
  }
  to {
    height: 3em;
    opacity: 1;
  }
}

@keyframes navFadeOut {
  from {
    height: 3em;
    opacity: 1;
  }
  to {
    height: 0px;
    opacity: 0;
  }
}

@keyframes disablingNavLinks {
  from {
    height: auto;
    padding-right: 1em;
  }
  to {
    height: auto;
    padding-right: 1em;
  }
}








`;
