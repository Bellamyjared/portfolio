import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, OrbitControls, AdaptiveDpr } from "@react-three/drei";

import ScrollContainer from "./Components/ScrollContainer";

export default function App(props) {
  const [AntialiasRegression, setAntialiasRegression] = useState(true);

  return (
    <div style={{ height: "100vh", backgroundColor: "black" }}>
      <Canvas
        gl={{ antialias: AntialiasRegression }}
        frameloop="demand"
        orthographic
        shadows
        camera={{ zoom: 40, position: [-150, 100, 201] }}
        performance={{
          min: 0.5,
          regress: () => setAntialiasRegression(false),
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
