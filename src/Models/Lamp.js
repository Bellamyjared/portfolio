/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/lamp.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cylinder001"
          position={[-0.03, 4.32, -0.1]}
          rotation={[0, 0.48, 0]}
          scale={[0.19, 0.19, 0.2]}
        >
          <mesh
            castShadow
            name="Cylinder004"
            geometry={nodes.Cylinder004.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            name="Cylinder004_1"
            geometry={nodes.Cylinder004_1.geometry}
            material={materials["Material.007"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lamp.glb");