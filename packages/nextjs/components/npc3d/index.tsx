import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './Scene'

export function NPC3D() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows flat linear>
        <Scene />
        { 
        /*
        <OrbitControls />
        */
        }
      </Canvas>
    </Suspense>
  )
}