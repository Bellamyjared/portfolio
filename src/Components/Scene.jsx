import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  useScroll,
  OrbitControls,
  SpotLight,
  MeshWobbleMaterial,
  useHelper,
  useTexture,
  Plane,
} from "@react-three/drei";
import * as THREE from "three";

import TrainWarningLines from "../Models/TrainWarningLines";
import Bench from "../Models/Bench";
import Lamp from "../Models/Lamp";
import Train from "../Models/Train";
import Wave_Constructor from "../Models/Characters/Wave_Constructor";

const Scene = ({ setHasUserScrolled }) => {
  const floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const [spawnCharacter, setSpawnCharacter] = useState(true);
  const WindowSize = { large: 30, medium: 15 };
  const ScaleSize = { large: 95, medium: 48, small: 25 };

  const { width } = useThree((state) => state.viewport);
  const widthScale =
    width > WindowSize.large
      ? ScaleSize.large
      : width > WindowSize.medium
      ? ScaleSize.medium
      : ScaleSize.small;
  const TrainScale = 1.4;

  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  const sLightRef = useRef();
  useHelper(sLightRef, THREE.SpotLightHelper);

  const LampAndBench = ({ positions, rotations }) => {
    return (
      <>
        {/* right lamp */}
        <Lamp
          scale={width / widthScale}
          position={[positions[0], -0.25, positions[1] + 5]}
        />
        {/* left lamp */}
        <Lamp
          scale={width / widthScale}
          position={[positions[0], -0.25, positions[1]]}
        />
        {/* Lamp Post Light (right lamp)*/}
        <pointLight
          scale={0.1}
          color={"white"}
          position={[positions[0], 1.7, positions[1] + 5]}
          intensity={10}
          distance={6}
          decay={4}
        />

        {/* Lamp Post Light (left lamp)*/}
        <pointLight
          // ref={sLightRef}
          scale={0.1}
          color={"white"}
          position={[positions[0], 1.7, positions[1]]}
          intensity={10}
          distance={6}
          decay={4}
        />
        <Bench
          scale={(width / widthScale) * 1.5}
          position={[positions[0], -0.25, positions[1] + 2.5]}
          rotation={rotations}
        />
      </>
    );
  };

  return (
    <>
      {/* ~~~~~~~~~~~~~~~~ LIGHTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* <ambientLight intensity={1} /> */}

      {/* SpotLight Targert */}
      <primitive object={light.target} position={[2, 0, 7]} />

      {/* Main SpotLight */}
      <primitive
        object={light}
        shadow-mapSize-height={800}
        shadow-mapSize-width={800}
        color={"#a8c6e9"}
        intensity={1}
        position={[20, 40, 40]}
        angle={0.35}
        penumbra={1}
        castShadow
      />

      {/* center SpotLight */}
      <spotLight
        color={"#a8c6e9"}
        intensity={0.4}
        position={[1, 15, 1]}
        angle={0.8}
        penumbra={1}
      />

      {/* ~~~~~~~~~~~~~~ TERRAIN ~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* Platform RIGHT Side */}
      <mesh
        position={[0, -1.3, 20.7]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 2]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      {/* Platform LEFT Side */}
      <mesh
        position={[0, -0.8, -22]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 2]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      {/* Track Warning Lines */}

      {/* ~~~~~~~~~~~~~~~~ MODELS ~~~~~~~~~~~~~~~~  */}
      <Train
        setHasUserScrolled={setHasUserScrolled}
        position={[0, -0.5, 0]}
        scale={(width / widthScale) * TrainScale}
        setSpawnCharacter={setSpawnCharacter}
      />
      <TrainWarningLines
        scale={width / widthScale}
        position={[0, -0.29, (width / widthScale) * 6]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Wave_Constructor
        WindowSize={WindowSize}
        ScaleSize={ScaleSize}
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
      />
      <LampAndBench positions={[8, 10]} rotations={[0, -Math.PI / 2, 0]} />
      <LampAndBench positions={[-8, 10]} rotations={[0, Math.PI / 2, 0]} />
      {/* <LampAndBench positions={[8, -15]} rotations={[0, -Math.PI / 2, 0]} />
      <LampAndBench positions={[-8, -15]} rotations={[0, Math.PI / 2, 0]} /> */}
    </>
  );
};

export default Scene;
