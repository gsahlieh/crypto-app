import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import House from './House'
import * as THREE from 'three'

function Nav3d() {

  function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => (
      camera.position.lerp(vec.set(mouse.x * 100, mouse.y * 20, 200), 0.02)
      ))
  }

  return (
    <Canvas>
      <Rig />
      <Suspense fallback={null}>
        <ambientLight color='white' intensity={0.8}/>
        <pointLight position={[10, 10, 10]} color='red' intensity={10}/>
        <House scale={[0.3, 0.3, 0.3]} position-x={-40} rotation-y={2.7} rotation-z={0} rotation-x={0}/>
      </Suspense>
    </Canvas>
  )
}

export default Nav3d