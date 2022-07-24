/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/TrainWarningLines.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.007']} position={[0.02, 0, 0]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.012']} position={[0.02, 0, -20.21]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.008']} position={[0.02, 0, -4.01]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.009']} position={[0.02, 0, -8.08]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.010']} position={[0.02, 0, -12.12]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.011']} position={[0.02, 0, -16.11]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.005']} position={[0.02, 0, 8.25]} />
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.013']} position={[0.02, 0, -24.24]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.006']} position={[0.02, 0, 4.12]} />
      <mesh geometry={nodes.Plane010.geometry} material={materials['Material.004']} position={[0.02, 0, 12.44]} />
      <mesh geometry={nodes.Plane011.geometry} material={materials['Material.003']} position={[0.02, 0, 16.71]} />
      <mesh geometry={nodes.Plane012.geometry} material={materials['Material.002']} position={[0.02, 0, 21.12]} />
      <mesh geometry={nodes.Plane013.geometry} material={materials['Material.001']} position={[0.02, 0, 25.5]} />
    </group>
  )
}

useGLTF.preload('/TrainWarningLines.glb')
