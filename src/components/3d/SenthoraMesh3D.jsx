import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function WaveMeshGrid() {
  const meshRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position
      const count = positions.count
      for (let i = 0; i < count; i++) {
        const u = positions.getX(i)
        const v = positions.getY(i)
        const z = Math.sin(u * 0.8 + t * 1.2) * 0.35 + Math.cos(v * 0.8 + t * 1.5) * 0.35
        positions.setZ(i, z)
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
      meshRef.current.rotation.x = -Math.PI / 3 + mouse.y * 0.1
      meshRef.current.rotation.z = mouse.x * 0.15
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]}>
      <planeGeometry args={[12, 12, 40, 40]} />
      <meshBasicMaterial color="#8B3CFF" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

export default function SenthoraMesh3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 2, 7], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <WaveMeshGrid />
        </Suspense>
      </Canvas>
    </div>
  )
}
