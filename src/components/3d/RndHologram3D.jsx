import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function QuantumLabSphere() {
  const sphereRef = useRef()
  const ringRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t * 0.25 + mouse.x * 0.3
      sphereRef.current.rotation.z = Math.sin(t * 0.4) * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.5
      ringRef.current.rotation.y = mouse.y * 0.3
    }
  })

  return (
    <group>
      <mesh ref={sphereRef}>
        <icosahedronGeometry args={[2.0, 3]} />
        <meshBasicMaterial color="#8B3CFF" wireframe transparent opacity={0.35} />
      </mesh>

      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[2.7, 0.03, 16, 100]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.7} />
        </mesh>
      </group>
    </group>
  )
}

export default function RndHologram3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <QuantumLabSphere />
        </Suspense>
      </Canvas>
    </div>
  )
}
