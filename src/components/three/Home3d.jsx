import React, { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Ethereum from './Ethereum'
import * as THREE from 'three'

function Home3d() {

  function Rig() {
    const { camera, mouse } = useThree()
    const vec = new THREE.Vector3()
    return useFrame(() => (
      camera.position.lerp(vec.set(mouse.x * 8, mouse.y , 7), 0.02)
      ))
  }

  return (
    <Canvas>
      <Rig />
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Ethereum scale={[1, 1, 1]} position-x={3} rotation-y={0} rotation-z={0} rotation-x={0}/>
      </Suspense>
    </Canvas>
  )
}

export default Home3d