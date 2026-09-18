import React, { Suspense, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { motion } from 'framer-motion'
import * as THREE from 'three'

/**
 * 3D Interactive Quantum Crystalline Core & Orbital Holographic Structure
 */
function HolographicQuantumSculpture({ mousePos }) {
  const mainGroup = useRef()
  const coreGroup = useRef()
  const crystalOuter = useRef()
  const crystalInner = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()
  const satellitesGroup = useRef()

  // 1. Cosmic Deep Space Particle Dust
  const { particlesPos, particlesColors, particlesCount } = useMemo(() => {
    const count = 1200
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#00F5FF'), // Bright Cyan
      new THREE.Color('#0066FF'), // Deep Sapphire
      new THREE.Color('#8B5CF6'), // Electric Violet
      new THREE.Color('#C084FC'), // Soft Lavender
      new THREE.Color('#E0F2FE'), // Starlight White
    ]

    for (let i = 0; i < count; i++) {
      const radius = 2.0 + Math.random() * 12.0
      const theta = Math.random() * Math.PI * 2
      const phi = (Math.random() - 0.5) * Math.PI

      positions[i * 3] = radius * Math.cos(theta) * Math.cos(phi)
      positions[i * 3 + 1] = radius * Math.sin(phi) * 0.8
      positions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi)

      const col = palette[Math.floor(Math.random() * palette.length)]
      colors[i * 3] = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }
    return { particlesPos: positions, particlesColors: colors, particlesCount: count }
  }, [])

  // 2. Orbiting Satellite Micro-Crystals
  const satellites = useMemo(() => {
    return [
      { radius: 2.3, speed: 0.35, size: 0.1, yOffset: 0.3, phase: 0, color: '#00E5FF' },
      { radius: 2.7, speed: -0.28, size: 0.12, yOffset: -0.4, phase: 1.2, color: '#8B5CF6' },
      { radius: 3.1, speed: 0.22, size: 0.08, yOffset: 0.5, phase: 2.5, color: '#38BDF8' },
      { radius: 3.6, speed: -0.18, size: 0.14, yOffset: -0.2, phase: 3.8, color: '#A855F7' },
      { radius: 4.0, speed: 0.15, size: 0.09, yOffset: 0.6, phase: 5.0, color: '#06B6D4' },
      { radius: 4.4, speed: -0.12, size: 0.11, yOffset: -0.5, phase: 0.8, color: '#6366F1' },
    ]
  }, [])

  // 3. Mathematical Animation Frame Loop
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Smooth Parallax Interpolation
    if (mainGroup.current) {
      const targetRotY = t * 0.08 + mousePos.current.x * 0.45
      const targetRotX = mousePos.current.y * 0.35
      const targetPosY = Math.sin(t * 0.8) * 0.06

      mainGroup.current.rotation.y = THREE.MathUtils.lerp(mainGroup.current.rotation.y, targetRotY, 0.05)
      mainGroup.current.rotation.x = THREE.MathUtils.lerp(mainGroup.current.rotation.x, targetRotX, 0.05)
      mainGroup.current.position.y = THREE.MathUtils.lerp(mainGroup.current.position.y, targetPosY, 0.05)
    }

    // Outer Crystal Facets Rotation
    if (crystalOuter.current) {
      crystalOuter.current.rotation.x = t * 0.2
      crystalOuter.current.rotation.y = t * 0.25
      crystalOuter.current.rotation.z = Math.sin(t * 0.3) * 0.15
    }

    // Inner Crystalline Energy Core Pulsing
    if (crystalInner.current) {
      crystalInner.current.rotation.x = -t * 0.35
      crystalInner.current.rotation.y = -t * 0.4
      const pulse = 1 + Math.sin(t * 2.0) * 0.08
      crystalInner.current.scale.set(pulse, pulse, pulse)
    }

    // Concentric Gyroscopic Rings
    if (ring1.current) ring1.current.rotation.z = t * 0.25
    if (ring2.current) ring2.current.rotation.x = t * 0.2
    if (ring3.current) ring3.current.rotation.y = -t * 0.18

    // Satellites Orbital Motion
    if (satellitesGroup.current) {
      satellitesGroup.current.children.forEach((child, idx) => {
        const sat = satellites[idx]
        if (sat) {
          const angle = t * sat.speed + sat.phase
          child.position.x = Math.cos(angle) * sat.radius
          child.position.z = Math.sin(angle) * sat.radius
          child.position.y = sat.yOffset + Math.sin(t * 1.5 + sat.phase) * 0.15
          child.rotation.x = t * 1.2
          child.rotation.y = t * 1.5
        }
      })
    }
  })

  return (
    <group ref={mainGroup}>
      {/* Central Quantum Holographic Crystal Core */}
      <group ref={coreGroup}>
        {/* Layer 1: Outer Faceted Transparent Geometric Crystal (Icosahedron) */}
        <mesh ref={crystalOuter}>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial
            color="#00C5B5"
            emissive="#0066FF"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.8}
            transparent
            opacity={0.7}
            wireframe={false}
          />
        </mesh>

        {/* Layer 2: Faceted Wireframe Lattice Hologram */}
        <mesh>
          <icosahedronGeometry args={[1.52, 0]} />
          <meshBasicMaterial
            color="#00F5FF"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Layer 3: Nested Octahedral Quantum Resonator */}
        <mesh ref={crystalInner}>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial
            color="#7C2BF8"
            emissive="#8B5CF6"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Layer 4: Deep Inner Luminescent Singularity Sphere */}
        <mesh>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshBasicMaterial
            color="#FFFFFF"
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      {/* Kinetic Gyroscopic Quantum Rings */}
      {/* Ring 1: Cyan Horizontal Gyro */}
      <group ref={ring1} rotation={[Math.PI / 3, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[2.4, 0.016, 16, 120]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.6}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* High-tech ring nodes */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
          <mesh key={i} position={[Math.cos(angle) * 2.4, Math.sin(angle) * 2.4, 0]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#00F5FF" />
          </mesh>
        ))}
      </group>

      {/* Ring 2: Deep Indigo / Violet Diagonal Gyro */}
      <group ref={ring2} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <mesh>
          <torusGeometry args={[2.85, 0.014, 16, 120]} />
          <meshStandardMaterial
            color="#6366F1"
            emissive="#4F46E5"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.2}
          />
        </mesh>
        {/* Subtle Node markers */}
        {[Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map((angle, i) => (
          <mesh key={i} position={[Math.cos(angle) * 2.85, Math.sin(angle) * 2.85, 0]}>
            <boxGeometry args={[0.05, 0.05, 0.05]} />
            <meshBasicMaterial color="#818CF8" />
          </mesh>
        ))}
      </group>

      {/* Ring 3: Purple / Magenta Outer Boundary Gyro */}
      <group ref={ring3} rotation={[Math.PI / 6, -Math.PI / 4, Math.PI / 3]}>
        <mesh>
          <torusGeometry args={[3.3, 0.012, 16, 120]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#7C2BF8"
            emissiveIntensity={0.4}
            metalness={0.85}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* Orbiting Satellite Micro-Crystals */}
      <group ref={satellitesGroup}>
        {satellites.map((sat, i) => (
          <mesh key={i}>
            <octahedronGeometry args={[sat.size, 0]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={0.7}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Volumetric Cosmic Starfield Particle Dust */}
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
          size={0.038}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

/**
 * Camera Controller with subtle smooth dolly zoom
 */
function CameraController() {
  const { camera } = useThree()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    camera.position.z = 7.5 + Math.sin(t * 0.4) * 0.15
  })
  return null
}

/**
 * Main Cinematic Landing & Entry Screen
 */
export default function DasaCinematicIntro({ onComplete }) {
  const mousePos = useRef({ x: 0, y: 0 })
  const [mouseUi, setMouseUi] = useState({ x: 0, y: 0 })

  // Track mouse movements smoothly
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
        if (onComplete) onComplete()
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    // Auto-advance after 8.5 seconds of pure cinematic contemplation
    const autoAdvanceTimer = setTimeout(() => {
      if (onComplete) onComplete()
    }, 8500)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('keydown', handleKeyDown)
      clearTimeout(autoAdvanceTimer)
    }
  }, [onComplete])

  return (
    <div
      onClick={onComplete}
      className="relative w-full h-screen overflow-hidden bg-[#030611] text-white select-none cursor-pointer flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(ellipse at center, #070D24 0%, #030612 55%, #010207 100%)',
      }}
    >
      {/* 1. Atmospheric Ambient Lighting & Volumetric Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cyan Ambient Aura (Top Left) */}
        <div
          className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full blur-[140px] opacity-25 pointer-events-none transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(0,229,255,0.4) 0%, rgba(0,102,255,0.1) 60%, transparent 80%)',
            transform: `translate(${mouseUi.x * 25}px, ${-mouseUi.y * 25}px)`,
          }}
        />

        {/* Royal Sapphire Central Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45vw] h-[45vw] rounded-full blur-[120px] opacity-35 pointer-events-none transition-transform duration-700 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, rgba(124,43,248,0.15) 50%, transparent 75%)',
            transform: `translate(calc(-50% + ${mouseUi.x * 15}px), calc(-50% + ${-mouseUi.y * 15}px))`,
          }}
        />

        {/* Violet Nebula Core (Bottom Right) */}
        <div
          className="absolute -bottom-[15%] -right-[10%] w-[55vw] h-[55vw] rounded-full blur-[150px] opacity-25 pointer-events-none transition-transform duration-1000 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(124,43,248,0.4) 0%, rgba(0,197,181,0.1) 60%, transparent 80%)',
            transform: `translate(${-mouseUi.x * 25}px, ${mouseUi.y * 25}px)`,
          }}
        />

        {/* Subtle Cinematic Grid & Vignette */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(2,3,8,0.85)_100%)] pointer-events-none" />
      </div>

      {/* 2. Interactive 3D Canvas Stage */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.6} color="#0E1E45" />
            <pointLight position={[10, 10, 10]} intensity={2.2} color="#00F5FF" />
            <pointLight position={[-10, -10, -10]} intensity={1.8} color="#8B5CF6" />
            <pointLight position={[0, 0, 8]} intensity={1.2} color="#FFFFFF" />
            <directionalLight position={[0, 8, 5]} intensity={1.0} color="#38BDF8" />

            <HolographicQuantumSculpture mousePos={mousePos} />
            <CameraController />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. Central Brand Hero Lockup & Typography Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pointer-events-none max-w-2xl">
        
        {/* Central Logo with Dynamic Parallax Sheen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col items-center justify-center"
          style={{
            transform: `perspective(1000px) rotateX(${mouseUi.y * -6}deg) rotateY(${mouseUi.x * 6}deg)`,
            transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {/* Logo Volumetric Core Backlight */}
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 via-blue-600/25 to-purple-600/20 blur-[50px] rounded-full -z-10 pointer-events-none" />

          {/* High-Resolution DASA Emblem */}
          <div className="relative px-8 py-3">
            <motion.img
              src={import.meta.env.BASE_URL + 'dasa-wordmark.png'}
              alt="DASA"
              initial={{ filter: 'brightness(1.6) contrast(1.1) drop-shadow(0 0 45px rgba(0,197,181,0.6))' }}
              animate={{ filter: 'brightness(1.05) contrast(1.05) drop-shadow(0 0 35px rgba(0,102,255,0.45))' }}
              transition={{ duration: 2.0, ease: 'easeOut' }}
              className="h-16 sm:h-20 md:h-24 w-auto object-contain select-none"
            />

            {/* Shimmer Light Reflection Sweep */}
            <motion.div
              initial={{ x: '-180%', opacity: 0 }}
              animate={{ x: ['-180%', '220%'], opacity: [0, 0.75, 0] }}
              transition={{
                delay: 1.0,
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 3.5,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none"
            />
          </div>

          {/* Primary Tagline: TECHNOLOGY • INNOVATION • FUTURE */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-[12.5px] md:text-[13.5px] font-mono tracking-[0.32em] sm:tracking-[0.38em] text-slate-100 uppercase font-semibold mt-4 sm:mt-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
              TECHNOLOGY
            </span>
            <span className="text-[#00F5FF] font-black text-xs drop-shadow-[0_0_10px_#00F5FF]">•</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-teal-200">
              INNOVATION
            </span>
            <span className="text-[#A855F7] font-black text-xs drop-shadow-[0_0_10px_#A855F7]">•</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-purple-200">
              FUTURE
            </span>
          </motion.div>

          {/* Elegant Horizontal Optical Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.0, ease: 'easeOut' }}
            className="w-40 sm:w-56 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 via-purple-400/40 to-transparent my-3 sm:my-3.5"
          />

          {/* Secondary Brand Signature: DASA IS THE SOLUTION */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 1.0, ease: 'easeOut' }}
            className="text-[9px] sm:text-[10.5px] md:text-[11.5px] font-mono tracking-[0.42em] sm:tracking-[0.48em] text-indigo-200/90 uppercase font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            DASA IS THE SOLUTION
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
