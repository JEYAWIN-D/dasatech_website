import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function EnergyRing() {
  const ring1 = useRef()
  const ring2 = useRef()
  const pulseCore = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (ring1.current) {
      ring1.current.rotation.x = Math.PI / 3 + mouse.y * 0.2
      ring1.current.rotation.y = t * 0.4 + mouse.x * 0.3
    }
    if (ring2.current) {
      ring2.current.rotation.x = -Math.PI / 4
      ring2.current.rotation.y = -t * 0.6
    }
    if (pulseCore.current) {
      const scale = 1 + Math.sin(t * 3) * 0.15
      pulseCore.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group>
      <group ref={ring1}>
        <mesh>
          <torusGeometry args={[2.4, 0.05, 16, 80]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.8} />
        </mesh>
      </group>

      <group ref={ring2}>
        <mesh>
          <torusGeometry args={[1.8, 0.04, 16, 60]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.7} />
        </mesh>
      </group>

      <mesh ref={pulseCore}>
        <icosahedronGeometry args={[0.9, 2]} />
        <meshBasicMaterial color="#10B981" wireframe transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

export default function EmsPower3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <EnergyRing />
        </Suspense>
      </Canvas>
    </div>
  )
}
