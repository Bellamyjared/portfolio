/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/lamp.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-11.07, 79.05, 0]} scale={[0.97, 1, 0.97]}>
            <group position={[2.36, -0.06, 0]}>
              <mesh
                geometry={nodes["Inners_Material_#48_0"].geometry}
                material={materials.Material_48}
              />
            </group>
          </group>
          <group position={[0, 50.07, 0]}>
            <group position={[1.83, -3.72, 0]} scale={[1, 2.05, 1]}>
              <mesh
                geometry={nodes.Post_Metal_M_0.geometry}
                material={materials.Metal_M}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/lamp.glb");
