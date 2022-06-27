import React, { Suspense, useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import NavBar from "./Components/NavBar.jsx";
import * as THREE from "three";

import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Train from "./Models/Train";
import Character_Creator from "./Models/Characters/Character_Creator";

export default function App(props) {
  // !~ Normal app
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState === "hidden"
      ? setToggleMobileState("none") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");

  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [spawnCharacter, setSpawnCharacter] = useState(false);
  // const [hidden, set] = useState();
  const [testing, settesting] = useState(false);
  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <GlobalStyle />
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [-150, 100, 201] }}
      >
        <Suspense fallback={null}>
          <ScrollControls damping={10} pages={9}>
            <Scroll>
              {/* ~~~~~~~~~~~~~~~~ BACKGROUND ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                receiveShadow
              >
                <planeBufferGeometry
                  attach="geometry"
                  args={[30, 30]}
                  receiveShadow
                />
                <meshPhongMaterial
                  attach="material"
                  color="#ccc"
                  side={THREE.DoubleSide}
                  receiveShadow
                />
              </mesh>
              <gridHelper args={[100, 100]} />

              {/* ~~~~~~~~~~~~~~~~ TRAIN AND CHARACTER ANIMATIONS ~~~~~~~~~~~~~~~~  */}
              <Train
                position={[0, -0.5, 0]}
                scale={0.5}
                setSpawnCharacter={setSpawnCharacter}
              />
              <Character_Creator
                floorPlane={floorPlane}
                spawnCharacter={spawnCharacter}
                testing={testing}
              />
            </Scroll>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~ HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Scroll html style={{ width: "100%" }}>
              <NavBar
                ToggleMobileNav={ToggleMobileNav}
                ToggleMobileState={ToggleMobileState}
                settesting={settesting}
              />
              <Hero />
              <Projects />
              <Technology />
              <About />
              <Contact />
              <Footer />
              {/* I moved the rest into Technology for the same reason as before */}
              {/* <h1
                style={{
                  position: "absolute",
                  top: `100vh`,
                  fontSize: "25em",
                  transform: `translate3d(0,-100%,0)`,
                }}
              >
                all
              </h1> */}
            </Scroll>
          </ScrollControls>
          {console.log(window.innerHeight)}

          {/* ~~~~~~~~~~~~~~~~ CANVAS PROP AND BACKGROPS ~~~~~~~~~~~~~~~~  */}
          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 5, 1]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    
    font-family: 'Poppins', sans-serif;
    // background-color: #EBF8FF;
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
