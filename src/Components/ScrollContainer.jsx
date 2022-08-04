import React, { useState, useRef } from "react";
import { ScrollControls, Scroll, useScroll, Center } from "@react-three/drei";
import { createGlobalStyle } from "styled-components";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

import NavBar from "./NavBar/NavBar.jsx";
import Hero from "./Hero.jsx";
import Html from "./Html.jsx";
import Scene from "./Scene.jsx";

export default function ScrollContainer() {
  const [HasUserScrolled, setHasUserScrolled] = useState(0);

  const w = 0.7;
  const gap = 0.15;
  const urls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <>
      <GlobalStyle HasUserScrolled={HasUserScrolled} />
      <ScrollControls damping={10} pages={8} distance={1}>
        {/* <Minimap urls={urls} position={[0, 35, 20]} scale={3} /> */}
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
    </>
  );
}

// const material = new THREE.LineBasicMaterial({ color: "white" });
// const geometry = new THREE.BufferGeometry().setFromPoints([
//   new THREE.Vector3(0, -0.5, 0),
//   new THREE.Vector3(0, 0.5, 0),
// ]);
// export function Minimap({ urls, ...props }) {
//   const damp = THREE.MathUtils.damp;
//   const ref = useRef();
//   const scroll = useScroll();
//   const { height } = useThree((state) => state.viewport);
//   useFrame((state, delta) => {
//     ref.current.children.forEach((child, index) => {
//       const y = scroll.curve(
//         index / urls.length - 1.5 / urls.length,
//         4 / urls.length
//       );
//       child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, delta);
//     });
//   });
//   return (
//     <group ref={ref} {...props}>
//       {urls.map((_, i) => (
//         <line
//           key={i}
//           geometry={geometry}
//           material={material}
//           position={[i * 0.06 - urls.length * 0.03, -height / 2 + 0.6, 0]}
//         />
//       ))}
//     </group>
//   );
// }

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
  height: 0px;
  opacity: 0;
  user-select: none;
}

.FadeIn {
  animation-name: fadeIn;
  animation-duration: 2s;
  user-select: auto;
}
.FadeOut {
  opacity: 0;
  animation-name: fadeOut;
  animation-duration: 0.5s;
  user-select: none;
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
  user-select: auto;
}
.NavFadeOut {
  opacity: 0;
  height: 0px;
  animation-name: navFadeOut;
  animation-duration: 0.5s;
  user-select: none;
}

.DisablingNavLinks {
  height: 0px;
  padding-right: 0em;
  animation-name: disablingNavLinks;
  animation-duration: 0.6s;
  user-select: none;
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
