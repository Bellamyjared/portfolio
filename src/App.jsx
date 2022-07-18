import React, { Suspense, useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  OrbitControls,
  SpotLight,
  MeshWobbleMaterial,
  useHelper,
} from "@react-three/drei";
import NavBar from "./Components/NavBar.jsx";
import * as THREE from "three";

import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Technology from "./Components/Technology";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Lamp from "./Models/Lamp";
import Train from "./Models/Train";
import Character_Creator from "./Models/Characters/Character_Creator";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

export default function App(props) {
  // !~ Normal app
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState === "hidden"
      ? setToggleMobileState("none") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");

  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [spawnCharacter, setSpawnCharacter] = useState(true);
  // const [hidden, set] = useState();
  const [testing, settesting] = useState(false);

  function ChromeWheel() {}

  document.addEventListener("keypress", console.log("test"));

  RectAreaLightUniformsLib.init();

  const DirectionalLightWithHelper = () => {
    // const sLightRef = useRef();
    // const shadowCameraRef = useRef();
    // useHelper(sLightRef, THREE.DirectionalLightHelper);
    // useHelper(shadowCameraRef, THREE.CameraHelper);
    return (
      <directionalLight
        // ref={sLightRef}
        shadow-camera-top={50}
        shadow-camera-left={-50}
        shadow-camera-right={100}
        shadow-camera-Bottom={-50}
        shadow-mapSize-width={2024}
        shadow-mapSize-height={2024}
        castShadow
        color="white"
        intensity={0.5}
        position={[0, 1, 1]}
      />
    );
  };

  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <GlobalStyle />
      <Canvas shadows camera={{ zoom: 10, position: [-150, 100, 201] }}>
        <Suspense fallback={null}>
          {/* <OrbitControls /> */}
          <ScrollControls damping={10} pages={9} id="testing">
            <Scroll>
              {/* ~~~~~~~~~~~~~~~~ BACKGROUND ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              {/* <SpotLight
                distance={1}
                angle={0.15}
                attenuation={10}
                anglePower={10} // Diffuse-cone anglePower (default: 5)
                position={[5, 5, 5]}
              /> */}

              <ambientLight intensity={0.5} />
              {/* https://stackoverflow.com/questions/66117340/three-js-improve-shadows-and-visualization */}
              <DirectionalLightWithHelper />

              {/* floor */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -0.5, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[150, 150]} />
                <meshPhongMaterial color="#ccc" side={THREE.DoubleSide} />
              </mesh>

              {/* ball */}
              {/* <mesh position={[-3, 20, 25]} castShadow>
                <sphereGeometry args={[20, 32, 32]} />
                <meshStandardMaterial color="white" />
              </mesh> */}

              {/* <mesh rotation={[300, 0, 0]} receiveShadow>
                <planeGeometry args={[30, 30]} />
                <meshPhongMaterial color="white" />
              </mesh> */}

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
              <Lamp scale={0.4} position={[0, -0.2, 0]} />
            </Scroll>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~ HTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
            <Scroll html style={{ width: "100%" }}>
              <NavBar
                ToggleMobileNav={ToggleMobileNav}
                ToggleMobileState={ToggleMobileState}
                settesting={settesting}
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
          {console.log(window.innerHeight)}

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
