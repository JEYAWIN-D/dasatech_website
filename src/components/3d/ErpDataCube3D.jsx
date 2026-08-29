import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function ErpCube() {
  const cubeRef = useRef()
  const orbitRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (cubeRef.current) {
      cubeRef.current.rotation.x = t * 0.3 + mouse.y * 0.2
      cubeRef.current.rotation.y = t * 0.4 + mouse.x * 0.3
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z = -t * 0.25
    }
  })

  return (
    <group>
      {/* Central Glass Data Cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshBasicMaterial color="#2B6CFF" wireframe transparent opacity={0.45} />
      </mesh>

      {/* Orbiting ERP Module Nodes */}
      <group ref={orbitRef}>
        <mesh position={[2.6, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.8} />
        </mesh>
        <mesh position={[-2.6, 0, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#8B3CFF" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, 2.6, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.8} />
        </mesh>
        <mesh position={[0, -2.6, 0]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshBasicMaterial color="#F59E0B" transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  )
}

export default function ErpDataCube3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <ErpCube />
        </Suspense>
      </Canvas>
    </div>
  )
}
