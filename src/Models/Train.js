/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGraph, useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ rotateWave, setSpawnCharacter, ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/train.glb");
  const { actions } = useAnimations(animations, group);

  useFrame(() => {
    if (
      actions.Direction_Controller_Cab_Head.time > 3.8 &&
      actions.Direction_Controller_Cab_Head.time < 8.8
    ) {
      console.log(true);
      setSpawnCharacter(true);
    } else {
      setSpawnCharacter(false);
    }

    if (document.hasFocus()) {
      if (!actions.Direction_Controller_Cab_1.isRunning()) {
        actions.Direction_Controller_Cab_Head.play();
        actions.Direction_Controller_Cab_1.play();
        actions.Direction_Controller_Cab_2.play();
        actions.Direction_Controller_Cab_Back.play();
        actions.Head_Cab_Door.play();
        actions.Back_Cab_Door.play();
        actions.Cab_1_Left_Door.play();
        actions.Cab_1_Right_Door.play();
        actions.Cab_2_Left_Door.play();
        actions.Cab_2_Right_Door.play();
      }
    } else {
      if (
        actions.Direction_Controller_Cab_Head.time > 0 &&
        actions.Direction_Controller_Cab_Head.time < 0.2
      ) {
        actions.Direction_Controller_Cab_Head.stop();
        actions.Direction_Controller_Cab_1.stop();
        actions.Direction_Controller_Cab_2.stop();
        actions.Direction_Controller_Cab_Back.stop();
        actions.Head_Cab_Door.stop();
        actions.Back_Cab_Door.stop();
        actions.Cab_1_Left_Door.stop();
        actions.Cab_1_Right_Door.stop();
        actions.Cab_2_Left_Door.stop();
        actions.Cab_2_Right_Door.stop();
      }
    }
  });

  useEffect(() => {
    actions.Direction_Controller_Cab_Head.play();
    actions.Direction_Controller_Cab_1.play();
    actions.Direction_Controller_Cab_2.play();
    actions.Direction_Controller_Cab_Back.play();
    actions.Head_Cab_Door.play();
    actions.Back_Cab_Door.play();
    actions.Cab_1_Left_Door.play();
    actions.Cab_1_Right_Door.play();
    actions.Cab_2_Left_Door.play();
    actions.Cab_2_Right_Door.play();
    // if (actions.Direction_Controller_Cab_Head.time > 3.8) {
    //   actions.Direction_Controller_Cab_Head.paused = true;
    //   actions.Direction_Controller_Cab_1.paused = true;
    //   actions.Direction_Controller_Cab_2.paused = true;
    //   actions.Direction_Controller_Cab_Back.paused = true;
    //   actions.Head_Cab_Door.paused = true;
    //   actions.Back_Cab_Door.paused = true;
    //   actions.Cab_1_Left_Door.paused = true;
    //   actions.Cab_1_Right_Door.paused = true;
    //   actions.Cab_2_Left_Door.paused = true;
    //   actions.Cab_2_Right_Door.paused = true;
    // }
  }, []);
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group
          name="Direction_Controller"
          position={[-95.84, 2.38, -0.14]}
          scale={[3.37, 1.92, 1.92]}
        >
          <group
            name="cab001"
            position={[-0.22, -0.26, 0.02]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Mesh.geometry}
              material={materials["Material.023"]}
            />
            <mesh
              geometry={nodes.Mesh_1.geometry}
              material={materials["Material.030"]}
            />
          </group>
          <mesh
            name="door_Right001"
            geometry={nodes.door_Right001.geometry}
            material={materials["Material.045"]}
            position={[-0.23, -0.26, 0.03]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="black_Left001"
            geometry={nodes.black_Left001.geometry}
            material={materials["Material.048"]}
            position={[-0.32, -0.11, -0.64]}
            rotation={[Math.PI / 2, 0, Math.PI]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="door_Left001"
            geometry={nodes.door_Left001.geometry}
            material={materials["Material.025"]}
            position={[-0.22, -0.26, 0.02]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="black_Right001"
            geometry={nodes.black_Right001.geometry}
            material={materials["Material.049"]}
            position={[-0.32, -0.11, 0.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          />
        </group>
        <group
          name="Direction_Controller003"
          position={[-116.31, 2.38, -0.14]}
          scale={[3.37, 1.92, 1.92]}
        >
          <group
            name="cab002"
            position={[0.22, -0.26, 0.01]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Mesh_4.geometry}
              material={materials["Material.069"]}
            />
            <mesh
              geometry={nodes.Mesh_5.geometry}
              material={materials["Material.070"]}
            />
          </group>
          <mesh
            name="door_right"
            geometry={nodes.door_right.geometry}
            material={materials["Material.071"]}
            position={[0.22, -0.26, 0.01]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="door_left"
            geometry={nodes.door_left.geometry}
            material={materials["Material.072"]}
            position={[0.23, -0.26, 0]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="black_left"
            geometry={nodes.black_left.geometry}
            material={materials["Material.073"]}
            position={[0.32, -0.11, -0.61]}
            rotation={[Math.PI / 2, 0, 3.14]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="black_right"
            geometry={nodes.black_right.geometry}
            material={materials["Material.074"]}
            position={[0.32, -0.11, 0.66]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          />
        </group>
        <group
          name="Direction_Controller001"
          position={[-102.74, 2.38, -0.14]}
          scale={[3.37, 1.92, 1.92]}
        >
          <mesh
            name="Cab"
            geometry={nodes.Cab.geometry}
            material={materials["Material.021"]}
            position={[-0.18, -0.23, 0.04]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="door_Right"
            geometry={nodes.door_Right.geometry}
            material={materials["Material.019"]}
            position={[-0.18, -0.23, 0.03]}
            scale={[0.3, 0.52, 0.52]}
          />
          <group
            name="black_Right"
            position={[0.37, -0.11, 0.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Plane004.geometry}
              material={materials["Material.062"]}
            />
            <points
              geometry={nodes.Plane004_1.geometry}
              material={materials["Material.062"]}
            />
          </group>
          <mesh
            name="door_Left002"
            geometry={nodes.door_Left002.geometry}
            material={materials["Material.020"]}
            position={[-0.18, -0.23, 0.02]}
            scale={[0.3, 0.52, 0.52]}
          />
          <group
            name="black_Left002"
            position={[-0.46, -0.11, 0.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Plane005.geometry}
              material={materials["Material.063"]}
            />
            <points
              geometry={nodes.Plane005_1.geometry}
              material={materials["Material.063"]}
            />
          </group>
        </group>
        <group
          name="Direction_Controller002"
          position={[-109.54, 2.38, -0.14]}
          scale={[3.37, 1.92, 1.92]}
        >
          <mesh
            name="cab"
            geometry={nodes.cab.geometry}
            material={materials["Material.064"]}
            position={[-0.16, -0.23, 0.04]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="door_Left"
            geometry={nodes.door_Left.geometry}
            material={materials["Material.065"]}
            position={[-0.16, -0.23, 0.02]}
            scale={[0.3, 0.52, 0.52]}
          />
          <mesh
            name="door_Right002"
            geometry={nodes.door_Right002.geometry}
            material={materials["Material.066"]}
            position={[-0.16, -0.23, 0.03]}
            scale={[0.3, 0.52, 0.52]}
          />
          <group
            name="black_Left"
            position={[-0.44, -0.11, 0.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Plane006.geometry}
              material={materials["Material.067"]}
            />
            <points
              geometry={nodes.Plane006_1.geometry}
              material={materials["Material.067"]}
            />
          </group>
          <group
            name="black_RIght"
            position={[0.39, -0.11, 0.64]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.3, 0.52, 0.52]}
          >
            <mesh
              geometry={nodes.Plane007.geometry}
              material={materials["Material.068"]}
            />
            <points
              geometry={nodes.Plane007_1.geometry}
              material={materials["Material.068"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/train.glb");
