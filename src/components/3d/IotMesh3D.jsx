import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function SensorMesh() {
  const meshGroup = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (meshGroup.current) {
      meshGroup.current.rotation.y = t * 0.18 + mouse.x * 0.4
      meshGroup.current.rotation.x = Math.sin(t * 0.3) * 0.1 + mouse.y * 0.2
    }
  })

  const nodes = [
    [-2, 1, 0], [2, 1, 0], [0, 2, -1],
    [-1.5, -1.2, 1], [1.5, -1.2, 1], [0, -1.8, -1],
    [0, 0, 1.8], [0, 0, -1.8]
  ]

  return (
    <group ref={meshGroup}>
      {/* Sensor Nodes */}
      {nodes.map((pos, i) => (
        <group key={i} position={pos}>
          <mesh>
            <octahedronGeometry args={[0.3, 0]} />
            <meshBasicMaterial color={i % 2 === 0 ? '#00E5FF' : '#8B3CFF'} transparent opacity={0.85} />
          </mesh>
        </group>
      ))}

      {/* Wireframe Grid Outer Shield */}
      <mesh>
        <sphereGeometry args={[2.5, 16, 16]} />
        <meshBasicMaterial color="#2B6CFF" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

export default function IotMesh3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <SensorMesh />
        </Suspense>
      </Canvas>
    </div>
  )
}
