import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Preload,
  OrbitControls,
  AdaptiveDpr,
  AdaptiveEvents,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import ScrollContainer from "./Components/ScrollContainer";

export default function App(props) {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas
        orthographic
        // shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
        performance={{
          min: 0.5,
        }}
      >
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
