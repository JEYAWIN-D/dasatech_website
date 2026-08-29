import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function QuantumAiCore() {
  const mainGroup = useRef()
  const innerCore = useRef()
  const crystalMesh = useRef()
  const ringX = useRef()
  const ringY = useRef()
  const ringZ = useRef()

  // Quantum Data Particles Cloud
  const { positions, colors, count } = useMemo(() => {
    const count = 600
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const color1 = new THREE.Color('#52058C') // Royal Violet
    const color2 = new THREE.Color('#7B1FA2') // Deep Purple
    const color3 = new THREE.Color('#9C27B0') // Bright Violet

    for (let i = 0; i < count; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 1.8 + Math.random() * 0.8

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      const mixedColor = Math.random() > 0.5 ? (Math.random() > 0.5 ? color1 : color2) : color3
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }
    return { positions, colors, count }
  }, [])

  useFrame(({ mouse, clock }) => {
    if (!mainGroup.current) return
    const t = clock.getElapsedTime()

    // Smooth Interactive Mouse Parallax
    mainGroup.current.rotation.y = t * 0.15 + mouse.x * 0.4
    mainGroup.current.rotation.x = mouse.y * 0.3
    mainGroup.current.position.y = Math.sin(t * 1.2) * 0.08

    if (crystalMesh.current) {
      crystalMesh.current.rotation.x = t * 0.4
      crystalMesh.current.rotation.y = t * 0.5
    }

    if (innerCore.current) {
      const scale = 1 + Math.sin(t * 2.5) * 0.06
      innerCore.current.scale.set(scale, scale, scale)
    }

    if (ringX.current) ringX.current.rotation.x = t * 0.5
    if (ringY.current) ringY.current.rotation.y = -t * 0.4
    if (ringZ.current) ringZ.current.rotation.z = t * 0.6
  })

  return (
    <group ref={mainGroup}>
      
      {/* Central Holographic Quantum Crystal Core */}
      <group ref={crystalMesh}>
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <meshBasicMaterial color="#52058C" wireframe transparent opacity={0.85} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshBasicMaterial color="#7B1FA2" wireframe transparent opacity={0.9} />
        </mesh>
      </group>

      {/* Inner Glowing Pulsing Orb */}
      <mesh ref={innerCore}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshBasicMaterial color="#52058C" transparent opacity={0.75} />
      </mesh>

      {/* Orbiting Triple Gyroscope Tech Laser Rings */}
      <group ref={ringX} rotation={[Math.PI / 4, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.0, 0.015, 16, 100]} />
          <meshBasicMaterial color="#52058C" transparent opacity={0.95} />
        </mesh>
      </group>

      <group ref={ringY} rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <mesh>
          <torusGeometry args={[2.25, 0.012, 16, 100]} />
          <meshBasicMaterial color="#7B1FA2" transparent opacity={0.85} />
        </mesh>
      </group>

      <group ref={ringZ} rotation={[Math.PI / 6, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[2.45, 0.01, 16, 100]} />
          <meshBasicMaterial color="#9C27B0" transparent opacity={0.8} />
        </mesh>
      </group>

      {/* Floating Quantum Particle Cloud */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          vertexColors
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>

    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <QuantumAiCore />
      </Suspense>
    </Canvas>
  )
}
