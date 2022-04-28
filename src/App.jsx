import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import NavBar from "./Components/NavBar.jsx";
import Hero from "./Components/Hero.jsx";
import Project from "./Components/Project.jsx";

import { Canvas } from "@react-three/fiber";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

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

function Train_Head(props) {
  const gltf = useLoader(GLTFLoader, "/train_head.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

function App() {
  const [ToggleMobileState, setToggleMobileState] = useState("hidden");
  const [ToggleOverFlow, setToggleOverFlow] = useState("visible");

  const ToggleMobileNav = () =>
    ToggleMobileState == "hidden"
      ? setToggleMobileState("none") + setToggleOverFlow("hidden")
      : setToggleMobileState("hidden") + setToggleOverFlow("visible");
  console.log(ToggleMobileState);

  const [positions, setPositions] = useState(0);
  const [loop, setLoop] = useState(0);

  let { position1 } = useSpring({
    position1:
      positions === 0
        ? [-30, 50, 0]
        : positions === 1
        ? [-30, 0, 0]
        : positions === 2
        ? [-6, 0, 0]
        : positions === 3
        ? [90, 0, 0]
        : [90, 50, 0],
  });

  function MyRotatingBox() {
    const myMesh = React.useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      console.log(a);
      if (a > loop + 1 && a < loop + 2) {
        setPositions(0);
      } else if (a > loop + 2 && a < loop + 3) {
        setPositions(1);
      } else if (a > loop + 3 && a < loop + 4) {
        setPositions(2);
      } else if (a > loop + 4 && a < loop + 5) {
        setPositions(3);
      } else if (a > loop + 5 && a < loop + 6) {
        setPositions(4);
      } else if (a > loop + 6 && a < loop + 7) {
        setLoop(a);
      }
    });

    return (
      <animated.mesh ref={myMesh} position={position1}>
        <Train_Head />
      </animated.mesh>
    );
  }

  return (
    <div style={{ overflow: `${ToggleOverFlow}`, height: "100vh" }}>
      <GlobalStyle />
      <NavBar
        ToggleMobileNav={ToggleMobileNav}
        ToggleMobileState={ToggleMobileState}
      />
      <Hero />
      <Canvas camera={{ position: [-30, 10, 20], fov: 50 }}>
        <Suspense fallback={null}>
          <MyRotatingBox />
          <ambientLight intensity={0.4} />
          <directionalLight color="white" position={[0, 5, 1]} />
        </Suspense>
      </Canvas>
      <Project ToggleMobileState={ToggleMobileState} />
      {/* everything else was moved to project, because it was a headache trying to
      get the proper layering effect */}
    </div>
  );
}

export default App;
