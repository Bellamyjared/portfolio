import React, { useState, useRef } from "react";
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

import Lamp from "../Models/Lamp";
import Train from "../Models/Train";
import Wave_Constructor from "../Models/Characters/Wave_Constructor";

const Scene = () => {
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [spawnCharacter, setSpawnCharacter] = useState(true);

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

  // const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
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
      <Wave_Constructor
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
      />
      <Lamp scale={0.4} position={[0, -0.2, 0]} />
    </>
  );
};

export default Scene;
