/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/earth.glb')
  return (
    <group scale={[2, 2, 2]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials.water} />
      <mesh geometry={nodes.Sphere_1.geometry} material={materials.earth} />
    </group>
  )
}

useGLTF.preload('/earth.glb')