import React, { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function NeuralNetwork() {
  const group = useRef()

  const { points, lines } = useMemo(() => {
    const pts = []
    const count = 70
    for (let i = 0; i < count; i++) {
      pts.push([
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 4
      ])
    }

    const lns = []
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pts[i][0] - pts[j][0]
        const dy = pts[i][1] - pts[j][1]
        const dz = pts[i][2] - pts[j][2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 1.8) {
          lns.push([new THREE.Vector3(...pts[i]), new THREE.Vector3(...pts[j])])
        }
      }
    }
    return { points: pts, lines: lns }
  }, [])

  useFrame(({ clock, mouse }) => {
    if (!group.current) return
    const t = clock.getElapsedTime()
    group.current.rotation.y = t * 0.12 + mouse.x * 0.35
    group.current.rotation.x = mouse.y * 0.25
  })

  return (
    <group ref={group}>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#00E5FF' : i % 3 === 1 ? '#8B3CFF' : '#2B6CFF'} transparent opacity={0.9} />
        </mesh>
      ))}

      {lines.map((ln, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(ln)
        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial color="#5EA0FF" transparent opacity={0.25} />
          </line>
        )
      })}
    </group>
  )
}

export default function AiNeural3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 5.8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <NeuralNetwork />
        </Suspense>
      </Canvas>
    </div>
  )
}
