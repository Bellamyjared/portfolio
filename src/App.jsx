import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, AdaptiveDpr } from "@react-three/drei";

import ScrollContainer from "./Components/ScrollContainer";

export default function App(props) {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas
        frameloop="demand"
        orthographic
        shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
        performance={{
          current: 1,
          min: 0.5,
          max: 1,
        }}
      >
        <Suspense fallback={null}>
          <Preload all />
          {/* <OrbitControls /> */}
          <ScrollContainer />
          <AdaptiveDpr pixelated />

          {/* ~~~~~~~~~~~~~~~~ CANVAS PROP AND BACKGROPS ~~~~~~~~~~~~~~~~  */}
        </Suspense>
      </Canvas>
    </div>
  );
}
