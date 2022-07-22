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
          name="Empty"
          position={[0.17, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="IrradianceVolume"
          position={[0.41, 4.02, -11.81]}
          scale={[4.03, 4.03, 13.69]}
        />
        <group
          name="Cylinder001"
          position={[0, 4.3, 0]}
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
