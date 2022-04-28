import { createGlobalStyle } from "styled-components";
import { Canvas, useThree } from "@react-three/fiber";
import { Center } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import React, { useRef, useState, Easing } from "react";
import NavBar from "./Components/NavBar.jsx";
import { Html, Text, Stars } from "@react-three/drei";
import Train from "./Models/Train";
import Character_Creator from "./Models/Characters/Character_Creator";
import * as THREE from "three";

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

export default function App(props) {
  // !~ Normal app
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState == "hidden"
      ? setToggleMobileState("none") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");

  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [spawnCharacter, setSpawnCharacter] = useState(false);
  const [hidden, set] = useState();
  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <Canvas
        shadows
        orthographic
        camera={{ zoom: 50, position: [-150, 100, 201] }}
      >
        <Suspense fallback={null}>
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
          <Train
            position={[0, -0.5, 0]}
            scale={0.5}
            setSpawnCharacter={setSpawnCharacter}
          />
          <Character_Creator
            floorPlane={floorPlane}
            spawnCharacter={spawnCharacter}
          />

          {/* <GlobalStyle /> */}
          <Center alignTop>
            <Html style={{ width: "100vw" }}>
              <NavBar
                ToggleMobileNav={ToggleMobileNav}
                ToggleMobileState={ToggleMobileState}
              />
            </Html>
          </Center>
          {/* <Hero /> */}

          <ambientLight intensity={0.5} />
          <directionalLight color="white" position={[0, 5, 1]} />
          {/* <OrbitControls></OrbitControls> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
