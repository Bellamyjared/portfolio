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
  const WindowSize = { xlarge: 45, large: 30, medium: 15 };
  const ScaleSize = { xlarge: 95, large: 65, medium: 45, small: 25 };

  const { width } = useThree((state) => state.viewport);
  const widthScale =
    width > WindowSize.xlarge
      ? ScaleSize.xlarge
      : width > WindowSize.large
      ? ScaleSize.large
      : width > WindowSize.medium
      ? ScaleSize.medium
      : ScaleSize.small;
  const TrainScale = 1.4;

  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  const sLightRef = useRef();
  useHelper(sLightRef, THREE.PointLightHelper);

  const LampAndBench = ({ setPositions, rotations }) => {
    const lampAndBenchHeight = -0.6;
    return (
      <>
        {/* right lamp */}
        <Lamp
          scale={width / widthScale}
          position={[
            (width / widthScale) * setPositions[0],
            (width / widthScale) * lampAndBenchHeight,
            (width / widthScale) * 29.9,
          ]}
        />
        {/* left lamp */}
        <Lamp
          scale={width / widthScale}
          position={[
            (width / widthScale) * setPositions[0],
            (width / widthScale) * lampAndBenchHeight,
            (width / widthScale) * 20,
          ]}
        />
        {/* Lamp Post Light (right lamp)*/}
        <pointLight
          scale={0.1}
          color={"white"}
          position={[
            (width / widthScale) * setPositions[0],
            (width / widthScale) * 3.3,
            (width / widthScale) * 29.9,
          ]}
          intensity={10}
          distance={(width / widthScale) * 11}
          decay={4}
        />

        {/* Lamp Post Light (left lamp)*/}
        <pointLight
          ref={sLightRef}
          scale={0.1}
          color={"white"}
          position={[
            (width / widthScale) * setPositions[0],
            (width / widthScale) * 3.3,
            (width / widthScale) * 20,
          ]}
          intensity={10}
          distance={(width / widthScale) * 11}
          decay={4}
        />
        <Bench
          scale={(width / widthScale) * 1.5}
          position={[
            (width / widthScale) * setPositions[0],
            (width / widthScale) * lampAndBenchHeight,
            (width / widthScale) * 24.9,
          ]}
          rotation={rotations}
        />
      </>
    );
  };

  return (
    <>
      {/* ~~~~~~~~~~~~~~~~ LIGHTS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* <ambientLight intensity={0.2} /> */}

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
        angle={(width / widthScale) * 0.69}
        penumbra={1}
        castShadow
      />

      {/* center SpotLight */}
      <spotLight
        color={"#a8c6e9"}
        intensity={0.4}
        position={[1, 15, 1]}
        angle={(width / widthScale) * 1.6}
        penumbra={1}
      />

      {/* ~~~~~~~~~~~~~~ TERRAIN ~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* Platform RIGHT Side */}
      <mesh
        scale={(width / widthScale) * 2}
        position={[0, (width / widthScale) * -2.7, (width / widthScale) * 41.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 2]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      {/* Platform LEFT Side */}
      <mesh
        scale={(width / widthScale) * 2}
        position={[0, (width / widthScale) * -5.6, (width / widthScale) * -49]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 4]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      {/* Track Warning Lines */}

      {/* ~~~~~~~~~~~~~~~~ MODELS ~~~~~~~~~~~~~~~~  */}
      <Train
        setHasUserScrolled={setHasUserScrolled}
        position={[0, (width / widthScale) * -1.2, 0]}
        scale={(width / widthScale) * TrainScale}
        setSpawnCharacter={setSpawnCharacter}
      />
      <TrainWarningLines
        scale={width / widthScale}
        position={[0, (width / widthScale) * -0.65, (width / widthScale) * 6]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Wave_Constructor
        WindowSize={WindowSize}
        ScaleSize={ScaleSize}
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
      />
      <LampAndBench setPositions={[16, 10]} rotations={[0, -Math.PI / 2, 0]} />
      <LampAndBench setPositions={[-16, 10]} rotations={[0, Math.PI / 2, 0]} />
    </>
  );
};

export default Scene;
