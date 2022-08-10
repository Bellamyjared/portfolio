import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Preload,
  OrbitControls,
  AdaptiveDpr,
  AdaptiveEvents,
  Stats,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import ScrollContainer from "./Components/ScrollContainer";

export default function App(props) {
  const [test, settest] = useState("PCFShadowMap");
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      {/* <button
        style={{ marginLeft: "100px" }}
        onClick={() => {
          console.log("test");
          settest("PCFShadowMap");
        }}
      >
        test
      </button> */}
      <Canvas
        orthographic
        shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
        performance={{
          min: 0.5,
        }}
      >
        <Stats />
        <Suspense fallback={null}>
          <Preload all />
          {/* <OrbitControls /> */}
          <ScrollContainer />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />

          {/* ~~~~~~~~~~~~~~~~ CANVAS PROP AND BACKGROPS ~~~~~~~~~~~~~~~~  */}
        </Suspense>
      </Canvas>
    </div>
  );
}
