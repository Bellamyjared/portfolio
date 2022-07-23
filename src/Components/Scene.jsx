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

  // const ConcreteTextures = useTexture({
  //   map: "./concreteTextures/granular_concrete_diff_1k.jpg",
  //   // displacementMap: "./concreteTextures/granular_concrete_disp_1k.png",
  //   // aoMap: "./concreteTextures/granular_concrete_arm_1k.jpg",
  //   // roughnessMap: "./concreteTextures/granular_concrete_arm_1k.jpg",
  //   // metalnessMap: "./concreteTextures/granular_concrete_arm_1k.jpg",
  //   // normalMap: "./concreteTextures/granular_concrete_nor_gl_1k.jpg",
  // });

  // ConcreteTextures.map.wrapS = ConcreteTextures.map.wrapT =
  //   THREE.RepeatWrapping;
  // ConcreteTextures.map.repeat.set(2, 2);
  // ConcreteTextures.displacementMap.wrapS =
  //   ConcreteTextures.displacementMap.wrapT = THREE.RepeatWrapping;
  // ConcreteTextures.displacementMap.repeat.set(2, 2);
  // ConcreteTextures.aoMap.wrapS = ConcreteTextures.aoMap.wrapT =
  //   THREE.RepeatWrapping;
  // ConcreteTextures.aoMap.repeat.set(2, 2);
  // ConcreteTextures.roughnessMap.wrapS = ConcreteTextures.roughnessMap.wrapT =
  //   THREE.RepeatWrapping;
  // ConcreteTextures.roughnessMap.repeat.set(2, 2);
  // ConcreteTextures.metalnessMap.wrapS = ConcreteTextures.metalnessMap.wrapT =
  //   THREE.RepeatWrapping;
  // ConcreteTextures.metalnessMap.repeat.set(2, 2);
  // ConcreteTextures.normalMap.wrapS = ConcreteTextures.normalMap.wrapT =
  //   THREE.RepeatWrapping;
  // ConcreteTextures.normalMap.repeat.set(2, 2);

  const DirectionalLightWithHelper = () => {
    const sLightRef = useRef();
    const shadowCameraRef = useRef();
    useHelper(sLightRef, THREE.DirectionalLightHelper);
    useHelper(shadowCameraRef, THREE.CameraHelper);
    return (
      <directionalLight
        ref={sLightRef}
        shadow-camera-top={10}
        shadow-camera-left={-10}
        shadow-camera-right={30}
        shadow-camera-bottom={-30}
        // shadow-mapSize-width={1000}
        // shadow-mapSize-height={1000}
        castShadow
        color="#70a3dd"
        intensity={1}
        position={[-5, 10, -2]}
      />
    );
  };

  const light = useMemo(() => new THREE.SpotLight(0xffffff), []);
  const sLightRef = useRef();
  useHelper(sLightRef, THREE.SpotLightHelper);

  useFrame(() => {});

  return (
    <>
      {/* ~~~~~~~~~~~~~~~~ BACKGROUND ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
      {/* <ambientLight intensity={1} /> */}
      <Lamp scale={width / widthScale} position={[8, -0.25, 5]} />
      <Bench
        scale={(width / widthScale) * 1.5}
        position={[8, -0.25, 7.5]}
        rotation={[0, -Math.PI / 2, 0]}
      />

      <primitive
        // ref={sLightRef}
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

      <primitive object={light.target} position={[2, 0, 7]} />

      <mesh
        position={[0, -1.3, 20.5]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 2]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      <spotLight
        color={"#a8c6e9"}
        intensity={0.4}
        position={[1, 15, 1]}
        angle={0.8}
        penumbra={1}
      />

      <pointLight
        // ref={sLightRef}
        scale={0.1}
        color={"white"}
        position={[8, 1.7, 10]}
        intensity={10}
        distance={6}
        decay={4}
      />
      {/* <hemisphereLight args={["#fff", "pink", 0.02]} /> */}

      {/* Platform RIGHT Side */}

      {/* Platform LEFT Side */}
      <mesh
        position={[0, -0.8, -22]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <boxBufferGeometry args={[80, 40, 2]} />
        <meshPhongMaterial color="grey" />
      </mesh>

      {/* ~~~~~~~~~~~~~~~~ MODELS ~~~~~~~~~~~~~~~~  */}
      <Train
        setHasUserScrolled={setHasUserScrolled}
        position={[0, -0.5, 0]}
        scale={width / widthScale}
        setSpawnCharacter={setSpawnCharacter}
      />
      <Wave_Constructor
        WindowSize={WindowSize}
        ScaleSize={ScaleSize}
        floorPlane={floorPlane}
        spawnCharacter={spawnCharacter}
      />
      <Lamp scale={width / widthScale} position={[8, -0.25, 10]} />
    </>
  );
};

export default Scene;
