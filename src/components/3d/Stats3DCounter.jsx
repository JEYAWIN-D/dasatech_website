import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Cpu, ShieldCheck, Globe, Activity, Zap, TrendingUp, Sparkles } from 'lucide-react'
import Reveal from '../Reveal'
import TextLineReveal from '../TextLineReveal'
import useCountUp from '../../hooks/useCountUp'
import TiltCard from '../TiltCard'

// 3D Animated Ring Orbit for Stats
function StatOrbitRing({ color = '#8B3CFF', speed = 0.5 }) {
  const ringRef = useRef()

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime()
    if (ringRef.current) {
      ringRef.current.rotation.x = t * speed + mouse.y * 0.2
      ringRef.current.rotation.y = t * (speed * 0.8) + mouse.x * 0.3
    }
  })

  return (
    <group ref={ringRef}>
      <mesh>
        <torusGeometry args={[1.5, 0.04, 16, 60]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.02, 16, 40]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

function StatCard({ item, idx }) {
  const [ref, count] = useCountUp(item.numericTarget || 100)
  const Icon = item.icon

  return (
    <Reveal delay={idx * 0.1}>
      <TiltCard
        maxTilt={8}
        glowColor={item.glowColor}
        className="glass rounded-3xl p-6 border border-purple-500/30 bg-[#090D1A]/90 hover:border-purple-400 shadow-2xl flex flex-col justify-between h-[320px] text-white group"
      >
        <div className="flex items-center justify-between z-10">
          <div className="w-11 h-11 rounded-2xl bg-purple-950/60 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-white transition duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        <div className="z-10 my-4" ref={ref}>
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2 font-display text-gradient tabular-nums">
            {item.prefix || ''}{count}{item.suffix || ''}
          </div>
          <div className="text-sm font-bold text-white mb-2">
            {item.label}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-mono">
            {item.detail}
          </p>
        </div>

        {/* 3D Orbiting Ring Canvas Background Accent */}
        <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-35 pointer-events-none z-0">
          <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <StatOrbitRing color={item.color} speed={item.speed} />
            </Suspense>
          </Canvas>
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default function Stats3DCounter() {
  const stats = [
    {
      numericTarget: 150,
      suffix: '+',
      label: 'Enterprise Projects Delivered',
      detail: 'Across Healthcare ERPs, AI Vision systems, Industrial SCADA, and IoT Hardware',
      color: '#00E5FF',
      glowColor: 'rgba(0, 229, 255, 0.25)',
      icon: Globe,
      speed: 0.6
    },
    {
      numericTarget: 45,
      suffix: '+',
      label: 'Specialized Engineers',
      detail: 'Multidisciplinary experts in AI research, embedded firmware, and cloud microservices',
      color: '#8B3CFF',
      glowColor: 'rgba(139, 60, 255, 0.25)',
      icon: Cpu,
      speed: 0.8
    },
    {
      numericTarget: 99.9,
      suffix: '%',
      label: 'System Telemetry Uptime',
      detail: 'Industrial-grade reliability for 24/7 continuous SCADA and mission-critical ERP backends',
      color: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.25)',
      icon: ShieldCheck,
      speed: 0.5
    },
    {
      numericTarget: 10,
      prefix: '',
      suffix: 'k+',
      label: 'Active IoT Telemetry Sensors',
      detail: 'Real-time telemetry streams ingesting millions of sensor payloads daily over MQTT & LoRaWAN',
      color: '#F59E0B',
      glowColor: 'rgba(245, 158, 11, 0.25)',
      icon: Activity,
      speed: 0.7
    }
  ]

  return (
    <section className="relative py-28 bg-[#05070F] text-white overflow-hidden border-t border-purple-900/30">
      {/* Ambient Glow background */}
      <div className="absolute inset-0 bg-grid-bg opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono mb-4 font-bold">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span>Proven Performance &amp; Impact</span>
          </div>

          <TextLineReveal
            as="h2"
            lines={['DASA TECH by the Numbers', 'Proof in the Engineering']}
            className="font-display text-3xl sm:text-5xl font-bold text-white"
          />

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-medium">
            Empowering healthcare, manufacturing, and commercial enterprises with measurable operational results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <StatCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
