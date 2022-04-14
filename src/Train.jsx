import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

function Train_Head(props) {
  const gltf = useLoader(GLTFLoader, "/train_head.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
function Train_Cab(props) {
  const gltf = useLoader(GLTFLoader, "/train_cab.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
function Train_Cab2(props) {
  const gltf = useLoader(GLTFLoader, "/train_cab2.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
function Train_Back(props) {
  const gltf = useLoader(GLTFLoader, "/train_back.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export default function Train(props) {
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
  const { position2 } = useSpring({
    position2: positions ? [0, 0, 0] : [-6, 0, 0],
  });
  const { position3 } = useSpring({
    position3: positions ? [-6, 0, 0] : [-12, 0, 0],
  });
  const { position4 } = useSpring({
    position4: positions ? [-11, 0, 0] : [-17, 0, 0],
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
    <div>
      <Canvas camera={{ position: [-30, 10, 20], fov: 50 }}>
        <Suspense fallback={null}>
          <MyRotatingBox />

          {/* <animated.mesh position={position2}>
            <Train_Cab />
          </animated.mesh>

          <animated.mesh position={position3}>
            <Train_Cab2 />
          </animated.mesh>
          <animated.mesh position={position4}>
            <Train_Back />
          </animated.mesh> */}

          <ambientLight intensity={0.4} />
          <directionalLight color="white" position={[0, 5, 1]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
