import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls } from "@react-three/drei";

import ScrollContainer from "./Components/ScrollContainer";

export default function App(props) {
  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas
        orthographic
        shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
      >
        <Suspense fallback={null}>
          <Preload all />
          {/* <OrbitControls /> */}
          <ScrollContainer />

          {/* ~~~~~~~~~~~~~~~~ CANVAS PROP AND BACKGROPS ~~~~~~~~~~~~~~~~  */}
        </Suspense>
      </Canvas>
    </div>
  );
}
