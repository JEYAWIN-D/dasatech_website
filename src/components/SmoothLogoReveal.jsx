import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import * as THREE from 'three'
import { ArrowRight } from 'lucide-react'

/**
 * 3D Celestial Astrolabe & Quantum Holographic Gyroscope
 * Lightweight 60-120 FPS Three.js installation that frames the DASA brand emblem
 */
function CelestialQuantumGyroscope({ mousePos }) {
  const mainGroup = useRef()
  const coreMeshRef = useRef()
  const innerFacetRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()
  const satellitesRef = useRef()

  // 1. Cosmic Stardust Particle Constellation
  const { particlesPos, particlesColors, particlesCount } = useMemo(() => {
    const count = 900
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#00E5FF'), // Bright Cyan
      new THREE.Color('#0066FF'), // Deep Sapphire
      new THREE.Color('#8B5CF6'), // Electric Violet
      new THREE.Color('#38BDF8'), // Sky Blue
      new THREE.Color('#FFFFFF'), // Starlight
    ]

    for (let i = 0; i < count; i++) {
      const r = 2.8 + Math.random() * 10.0
      const theta = Math.random() * Math.PI * 2
      const phi = (Math.random() - 0.5) * Math.PI

      positions[i * 3] = r * Math.cos(theta) * Math.cos(phi)
      positions[i * 3 + 1] = r * Math.sin(phi) * 0.75
      positions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi)

      const col = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }

    return { particlesPos: positions, particlesColors: colors, particlesCount: count }
  }, [])

  // 2. Orbiting Satellite Micro-Nodes
  const satellites = useMemo(() => [
    { radius: 3.2, speed: 0.5, yOffset: 0.25, color: '#00F5FF', size: 0.08, phase: 0 },
    { radius: 3.6, speed: -0.4, yOffset: -0.3, color: '#8B5CF6', size: 0.09, phase: 1.8 },
    { radius: 3.2, speed: -0.6, yOffset: 0.4, color: '#00C5B5', size: 0.07, phase: 3.5 },
    { radius: 4.0, speed: 0.35, yOffset: -0.2, color: '#38BDF8', size: 0.09, phase: 5.0 },
  ], [])

  // 3. 60 FPS Render Loop
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Smooth Cursor Parallax Interpolation
    if (mainGroup.current) {
      const targetRotY = t * 0.09 + mousePos.current.x * 0.4
      const targetRotX = -mousePos.current.y * 0.3
      const targetPosY = Math.sin(t * 0.6) * 0.07

      mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, targetRotY, 0.05)
      mainGroup.current.rotation.x = THREE.MathUtils.lerp(mainGroup.current.rotation.x, targetRotX, 0.05)
      mainGroup.current.position.y = THREE.MathUtils.lerp(mainGroup.current.position.y, targetPosY, 0.05)
    }

    // Outer Geodesic Sphere Rotation
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y = t * 0.15
      coreMeshRef.current.rotation.x = t * 0.1
    }

    // Inner Crystalline Facets Counter-Rotation
    if (innerFacetRef.current) {
      innerFacetRef.current.rotation.y = -t * 0.25
      innerFacetRef.current.rotation.z = Math.sin(t * 0.5) * 0.2
      const pulse = 1 + Math.sin(t * 2.0) * 0.08
      innerFacetRef.current.scale.set(pulse, pulse, pulse)
    }

    // Celestial Gimbal Rings Rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.22
      ring1Ref.current.rotation.y = t * 0.15
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.18
      ring2Ref.current.rotation.z = Math.PI / 4 + Math.sin(t * 0.3) * 0.15
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.12
      ring3Ref.current.rotation.x = t * 0.16
    }

    // Satellite Nodes Orbit
    if (satellitesRef.current) {
      satellitesRef.current.children.forEach((child, idx) => {
        const sat = satellites[idx]
        if (sat) {
          const angle = t * sat.speed + sat.phase
          child.position.x = Math.cos(angle) * sat.radius
          child.position.z = Math.sin(angle) * sat.radius
          child.position.y = sat.yOffset + Math.sin(t * 1.5 + sat.phase) * 0.25
        }
      })
    }
  })

  return (
    <group ref={mainGroup}>
      {/* 3D Holographic Core - Framed behind center */}
      <group position={[0, 0, -1.2]}>
        {/* Layer 1: Geodesic Wireframe Sphere */}
        <mesh ref={coreMeshRef}>
          <icosahedronGeometry args={[2.1, 1]} />
          <meshBasicMaterial
            color="#00E5FF"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Layer 2: Inner Faceted Octahedron Resonator */}
        <mesh ref={innerFacetRef}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#7C2BF8"
            emissive="#8B5CF6"
            emissiveIntensity={0.7}
            roughness={0.2}
            metalness={0.85}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Layer 3: Glowing Singularity Sphere */}
        <mesh>
          <sphereGeometry args={[0.5, 24, 24]} />
          <meshBasicMaterial color="#00F5FF" />
        </mesh>
      </group>

      {/* Layer 4: Wide Orbit Celestial Gimbal Rings (Surrounds Screen) */}
      <group>
        {/* Ring 1: Cyan Orbit */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[3.3, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#00C5B5"
            emissive="#00F5FF"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Ring 2: Royal Violet Orbit */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[3.7, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#7C2BF8"
            emissive="#8B5CF6"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Ring 3: Thin Starlight Horizon */}
        <mesh ref={ring3Ref}>
          <torusGeometry args={[4.1, 0.015, 16, 100]} />
          <meshBasicMaterial
            color="#38BDF8"
            transparent
            opacity={0.45}
          />
        </mesh>
      </group>

      {/* Layer 5: Orbiting Quantum Satellites */}
      <group ref={satellitesRef}>
        {satellites.map((sat, i) => (
          <mesh key={i}>
            <sphereGeometry args={[sat.size, 16, 16]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={1.3}
            />
          </mesh>
        ))}
      </group>

      {/* Layer 6: Cosmic Nebula Stardust Field */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            array={particlesPos}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesCount}
            array={particlesColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

/**
 * Camera Controller
 */
function CameraController() {
  const { camera } = useThree()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    camera.position.z = 8.2 + Math.sin(t * 0.4) * 0.12
  })
  return null
}

/**
 * Modern High-Impact DASA 3D Entry Screen
 * - Official DASA ribbon lockup with soft aurora backlight
 * - 3D Celestial Astrolabe & Quantum Holographic Gyroscope
 * - Zero loading bars / zero system tickers
 * - Instant click-to-enter or smooth auto-advance
 */
export default function SmoothLogoReveal({ onComplete }) {
  const mousePos = useRef({ x: 0, y: 0 })
  const [mouseUi, setMouseUi] = useState({ x: 0, y: 0 })
  const [isWarping, setIsWarping] = useState(false)

  // Mouse Parallax
  useEffect(() => {
    let ticking = false
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      mousePos.current = { x, y }

      if (!ticking) {
        requestAnimationFrame(() => {
          setMouseUi({ x, y })
          ticking = false
        })
        ticking = true
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        handleEnter()
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    // Auto-advance after 6.5s
    const timer = setTimeout(() => {
      handleEnter()
    }, 6500)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(timer)
    }
  }, [onComplete])

  const handleEnter = () => {
    if (isWarping) return
    setIsWarping(true)
    setTimeout(() => {
      if (onComplete) onComplete()
    }, 500)
  }

  return (
    <div
      onClick={handleEnter}
      className="relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden bg-[#02040b] text-white cursor-pointer"
    >
      {/* 1. Deep Multi-Color Aurora Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: [0.3, 0.75, 0.6],
          scale: [0.9, 1.05, 1]
        }}
        transition={{ duration: 5, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,255,0.2)_0%,rgba(0,197,181,0.12)_30%,rgba(124,43,248,0.16)_55%,rgba(2,4,11,1)_82%)] pointer-events-none"
      />

      {/* 2. Micro Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* 3. 3D WebGL Canvas Stage */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8.2], fov: 40 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} color="#0D1F4D" />
            <pointLight position={[10, 10, 10]} intensity={2.0} color="#00F5FF" />
            <pointLight position={[-10, -10, -10]} intensity={1.8} color="#8B5CF6" />
            <directionalLight position={[0, 8, 6]} intensity={1.2} color="#38BDF8" />

            <CelestialQuantumGyroscope mousePos={mousePos} />
            <CameraController />
          </Suspense>
        </Canvas>
      </div>

      {/* 4. Center Stage: Official DASA Brand Lockup */}
      <div className="relative z-10 w-full max-w-xl px-6 flex flex-col items-center justify-center text-center pointer-events-none">
        
        {/* Soft Radial Vignette for Clean Logo Readability */}
        <div className="absolute w-[460px] h-60 bg-black/40 blur-[50px] rounded-full -z-10 pointer-events-none" />

        {/* Soft Neon Glow Core Backlight */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: [0.8, 1.15, 1], opacity: [0.4, 0.85, 0.7] }}
          transition={{ duration: 4, ease: 'easeInOut' }}
          className="absolute w-[460px] h-56 bg-gradient-to-r from-blue-600/35 via-teal-500/30 to-purple-600/35 blur-[75px] rounded-full pointer-events-none -z-10"
        />

        {/* Main Logo Container with 3D Mouse Parallax Tilt */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center select-none"
          style={{
            transform: `perspective(1000px) rotateX(${mouseUi.y * -4}deg) rotateY(${mouseUi.x * 4}deg)`,
            transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* High-Resolution DASA Ribbon Mark */}
          <div className="relative">
            <motion.img
              src={import.meta.env.BASE_URL + 'dasa-wordmark.png'}
              alt="DASA"
              initial={{ filter: 'brightness(1.5) contrast(1.1) drop-shadow(0 4px 30px rgba(0,102,255,0.6))' }}
              animate={{ filter: 'brightness(1.05) contrast(1.05) drop-shadow(0 4px 30px rgba(0,102,255,0.45))' }}
              transition={{ delay: 0.3, duration: 1.6 }}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />

            {/* Shimmer Light Sweep */}
            <motion.div
              initial={{ x: '-150%', opacity: 0 }}
              animate={{ x: ['-150%', '220%'], opacity: [0, 0.8, 0] }}
              transition={{
                delay: 1.2,
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 2.8,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] pointer-events-none"
            />
          </div>

          {/* Tagline 1: TECHNOLOGY • INNOVATION • FUTURE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.0 }}
            className="flex items-center justify-center gap-2 sm:gap-2.5 text-[10px] sm:text-[11px] md:text-[12px] font-mono tracking-[0.28em] text-slate-100 uppercase font-bold mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
          >
            <span>TECHNOLOGY</span>
            <span className="text-[#0066FF] font-black text-xs shadow-[0_0_8px_#0066FF]">•</span>
            <span>INNOVATION</span>
            <span className="text-[#00C5B5] font-black text-xs shadow-[0_0_8px_#00C5B5]">•</span>
            <span>FUTURE</span>
          </motion.div>

          {/* Subtle Horizontal Divider Accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.0 }}
            className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent my-2.5"
          />

          {/* Tagline 2: DASA IS THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 1.0 }}
            className="text-[9px] sm:text-[10px] font-mono tracking-[0.34em] text-indigo-300 uppercase font-semibold"
          >
            DASA IS THE SOLUTION
          </motion.div>
        </motion.div>

      </div>

      {/* 5. Minimalist Elegant Enter Prompt (Zero robotic loading bar) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 left-0 right-0 max-w-sm mx-auto px-6 flex flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10.5px] font-mono text-cyan-200/90 tracking-[0.2em] shadow-[0_0_15px_rgba(0,197,181,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C5B5] animate-ping" />
          <span>CLICK ANYWHERE TO ENTER</span>
          <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
        </div>
      </motion.div>

      {/* 6. Soft Smooth Transition Flash on Click */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 z-[999999] pointer-events-none bg-gradient-to-b from-[#00C5B5]/20 via-[#0066FF]/30 to-black"
          />
        )}
      </AnimatePresence>

    </div>
  )
}
