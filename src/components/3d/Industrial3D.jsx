import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function IndustrialRig() {
  const outerRing = useRef()
  const innerRing = useRef()
  const coreRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (outerRing.current) {
      outerRing.current.rotation.z = t * 0.2
      outerRing.current.rotation.x = mouse.y * 0.2
    }
    if (innerRing.current) {
      innerRing.current.rotation.z = -t * 0.35
      innerRing.current.rotation.y = mouse.x * 0.3
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5
    }
  })

  return (
    <group>
      {/* Outer SCADA Ring */}
      <group ref={outerRing}>
        <mesh>
          <torusGeometry args={[2.5, 0.04, 16, 60]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} wireframe />
        </mesh>
      </group>

      {/* Inner Robotics Ring */}
      <group ref={innerRing} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[1.8, 0.06, 12, 40]} />
          <meshBasicMaterial color="#8B3CFF" transparent opacity={0.7} wireframe />
        </mesh>
      </group>

      {/* Core Telemetry Unit */}
      <group ref={coreRef}>
        <mesh>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshBasicMaterial color="#2B6CFF" wireframe transparent opacity={0.5} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshBasicMaterial color="#00E5FF" transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  )
}

export default function Industrial3D() {
  return (
    <div className="w-full h-[420px] relative">
      <Canvas camera={{ position: [0, 0, 6.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <IndustrialRig />
        </Suspense>
      </Canvas>
    </div>
  )
}
