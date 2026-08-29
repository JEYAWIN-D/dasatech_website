import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function SmartHomeNodes() {
  const groupRef = useRef()

  useFrame(({ clock, mouse }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.15 + mouse.x * 0.3
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1 + mouse.y * 0.2
  })

  // Nodes representing Smart Home components (Lighting, Security, Climate, Voice, Energy, Entertainment)
  const nodePositions = [
    { pos: [0, 0, 0], label: 'Central AI Hub', color: '#00E5FF', size: 0.35 },
    { pos: [-1.8, 1.2, 0.8], label: 'Smart Climate', color: '#2B6CFF', size: 0.22 },
    { pos: [1.9, 1.1, -0.6], label: 'Biometric Access', color: '#8B3CFF', size: 0.22 },
    { pos: [-1.6, -1.3, -0.8], label: 'Lighting Grid', color: '#00E5FF', size: 0.22 },
    { pos: [1.7, -1.2, 0.9], label: 'Energy Monitor', color: '#10B981', size: 0.22 },
    { pos: [0, 2.0, -1.0], label: 'Surveillance Node', color: '#EC4899', size: 0.22 },
    { pos: [0, -2.1, 1.1], label: 'Voice Assistant', color: '#F59E0B', size: 0.22 },
  ]

  return (
    <group ref={groupRef}>
      {/* Central House Frame */}
      <mesh>
        <octahedronGeometry args={[2.2, 0]} />
        <meshBasicMaterial color="#2B6CFF" wireframe transparent opacity={0.25} />
      </mesh>

      {/* Outer Orbit Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00E5FF" transparent opacity={0.4} />
      </mesh>

      {/* Connection Lines from Center Hub to all Nodes */}
      {nodePositions.slice(1).map((node, i) => {
        const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(...node.pos)]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color={node.color} transparent opacity={0.5} lineWidth={1.5} />
          </line>
        )
      })}

      {/* Nodes */}
      {nodePositions.map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[node.size, 24, 24]} />
          <meshBasicMaterial color={node.color} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  )
}

export default function HomeAutomation3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <SmartHomeNodes />
        </Suspense>
      </Canvas>
    </div>
  )
}
