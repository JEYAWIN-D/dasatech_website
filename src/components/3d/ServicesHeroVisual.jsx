import React from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  Brain,
  Globe,
  Database,
  Radio,
  Sparkles,
  ShieldCheck,
  Activity
} from 'lucide-react'

export default function ServicesHeroVisual() {
  const nodes = [
    { icon: Brain, label: 'AI & Vision', x: '18%', y: '22%', color: '#2563EB', delay: 0 },
    { icon: Database, label: 'Enterprise ERP', x: '82%', y: '22%', color: '#0284C7', delay: 0.2 },
    { icon: Radio, label: 'IoT Sensor Mesh', x: '15%', y: '78%', color: '#059669', delay: 0.4 },
    { icon: Activity, label: 'SCADA Automation', x: '85%', y: '78%', color: '#D97706', delay: 0.6 },
    { icon: Globe, label: 'Cloud Microservices', x: '50%', y: '10%', color: '#7C3AED', delay: 0.8 }
  ]

  return (
    <div className="relative w-full h-[440px] sm:h-[500px] flex items-center justify-center select-none overflow-hidden rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Orbit 1: Outer Holographic Dashed Gyro Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-dashed border-slate-300 pointer-events-none"
      />

      {/* Orbit 2: Middle Counter-Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[250px] sm:w-[310px] h-[250px] sm:h-[310px] rounded-full border border-blue-200 pointer-events-none"
      />

      {/* Orbit 3: Inner Fast Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[170px] sm:w-[210px] h-[170px] sm:h-[210px] rounded-full border border-dashed border-indigo-200 pointer-events-none"
      />

      {/* Center Core: DASA TECH Quantum Engine Badge */}
      <motion.div
        animate={{
          scale: [1, 1.04, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-1 shadow-lg flex flex-col items-center justify-center text-center text-slate-900 border border-blue-200"
      >
        <div className="w-full h-full rounded-[22px] bg-blue-50/60 flex flex-col items-center justify-center p-2">
          <Cpu className="w-7 h-7 text-blue-600 mb-1" />
          <span className="font-orbitron font-black text-xs tracking-wider text-slate-900">
            DASA <span className="text-blue-600">CORE</span>
          </span>
          <span className="text-[8px] font-mono text-blue-700 font-bold uppercase mt-0.5">
            100% ONLINE
          </span>
        </div>
      </motion.div>

      {/* Connected Neural Node Badges */}
      {nodes.map((n, idx) => {
        const NIcon = n.icon
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -6, 0]
            }}
            transition={{
              y: { duration: 3 + idx, repeat: Infinity, ease: 'easeInOut', delay: n.delay }
            }}
            style={{ left: n.x, top: n.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2 p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200 shadow-sm group hover:border-blue-400 cursor-pointer transition-all duration-200"
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-2xs"
              style={{ backgroundColor: n.color }}
            >
              <NIcon className="w-4 h-4 text-white" />
            </div>
            <div className="hidden sm:block text-left font-mono">
              <div className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {n.label}
              </div>
              <div className="text-[9px] text-emerald-600 font-bold flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span>Synchronized</span>
              </div>
            </div>
          </motion.div>
        )
      })}

      {/* Top Left Telemetry Chip */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-blue-700 font-bold flex items-center gap-1.5 shadow-2xs">
        <Sparkles className="w-3 h-3 text-blue-600" />
        <span>Enterprise Mesh Active</span>
      </div>

      {/* Bottom Right Telemetry Chip */}
      <div className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1.5 shadow-2xs">
        <ShieldCheck className="w-3 h-3 text-emerald-600" />
        <span>High-Availability 99.99%</span>
      </div>

    </div>
  )
}

