import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Cpu, Eye, Activity, ShieldCheck, Database, Layers, Radio, Sparkles } from 'lucide-react'

export default function HeroNodeGraph() {
  const [liveCount, setLiveCount] = useState(14820)
  const [activePacket, setActivePacket] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 4) + 1)
      setActivePacket((prev) => (prev + 1) % 3)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none select-none">
      {/* Background Soft Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#00D4FF]/20 via-[#22FF9A]/15 to-transparent blur-3xl rounded-3xl -z-10 opacity-70" />

      {/* Main Node Graph Panel */}
      <div className="relative rounded-2xl bg-[#0F1117]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl overflow-hidden">
        
        {/* Subtle Cyber Grid Texture */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Header HUD Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22FF9A] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22FF9A]" />
            </span>
            <span className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase">
              DASA Neural Telemetry Mesh
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#151821] border border-white/10 text-[11px] font-mono text-[#00D4FF]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>STREAMING</span>
          </div>
        </div>

        {/* 3 Core Connected Nodes: IoT Sensors -> AI Engine -> ERP Core */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 relative">
          
          {/* Node 1: IoT Edge Sensors */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-xl bg-[#151821] border border-white/10 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Source Node</div>
            <div className="font-display font-bold text-sm text-white mt-0.5">IoT Telemetry</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              LoRa &amp; SCADA PLCs streaming machine metrics.
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#22FF9A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22FF9A]" />
              <span>48 Nodes Active</span>
            </div>
          </motion.div>

          {/* Node 2: AI Computer Vision & Inference */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-xl bg-[#151821] border border-[#00D4FF]/40 relative group shadow-[0_0_20px_rgba(0,212,255,0.12)]"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D4FF]/20 to-[#22FF9A]/20 border border-[#00D4FF]/50 flex items-center justify-center text-[#00D4FF] mb-3">
              <Eye className="w-5 h-5 text-[#00D4FF]" />
            </div>
            <div className="text-[11px] font-mono text-[#00D4FF] uppercase tracking-wider">Processing Engine</div>
            <div className="font-display font-bold text-sm text-white mt-0.5">AI Computer Vision</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Edge inference detecting micro-defects at 60 FPS.
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#00D4FF]">
              <Sparkles className="w-3 h-3" />
              <span>Sub-15ms Latency</span>
            </div>
          </motion.div>

          {/* Node 3: Custom ERP Ledger */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-4 rounded-xl bg-[#151821] border border-white/10 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#22FF9A]/10 border border-[#22FF9A]/30 flex items-center justify-center text-[#22FF9A] mb-3">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Destination Hub</div>
            <div className="font-display font-bold text-sm text-white mt-0.5">Enterprise ERP</div>
            <div className="text-xs text-slate-400 mt-1 leading-relaxed">
              Distributed PostgreSQL real-time business ledgers.
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#22FF9A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22FF9A]" />
              <span>Zero Drift Ledger</span>
            </div>
          </motion.div>
        </div>

        {/* Flow Indicator with Marching Packets */}
        <div className="relative py-2 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00D4FF] animate-pulse" />
            <span>Continuous Synced Pipeline: Sensors &rarr; Neural &rarr; ERP</span>
          </div>
          <span className="text-[#22FF9A]">100% HEALTHY</span>
        </div>

      </div>

      {/* 3 Floating KPI Chips */}
      {/* KPI 1: Uptime */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 px-4 py-2.5 rounded-xl bg-[#151821] border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-3 z-20"
      >
        <div className="w-8 h-8 rounded-lg bg-[#22FF9A]/15 border border-[#22FF9A]/30 flex items-center justify-center text-[#22FF9A]">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <div className="font-display font-bold text-white text-sm">99.9%</div>
          <div className="text-[10px] font-mono text-slate-400">Platform Uptime</div>
        </div>
      </motion.div>

      {/* KPI 2: Live Production Count */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 px-4 py-2.5 rounded-xl bg-[#151821] border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-3 z-20"
      >
        <div className="w-8 h-8 rounded-lg bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF]">
          <Layers className="w-4 h-4" />
        </div>
        <div>
          <div className="font-display font-bold text-white text-sm font-mono">
            {liveCount.toLocaleString()}+
          </div>
          <div className="text-[10px] font-mono text-slate-400">Live Production Units</div>
        </div>
      </motion.div>

      {/* KPI 3: AI Inspection Pass Rate */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
        className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 px-3.5 py-2 rounded-xl bg-[#151821]/95 border border-[#00D4FF]/30 backdrop-blur-xl shadow-xl items-center gap-2.5 z-20"
      >
        <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" />
        <div>
          <div className="font-display font-bold text-white text-xs">99.8% Pass Rate</div>
          <div className="text-[9px] font-mono text-slate-400">AI Optical Inspection</div>
        </div>
      </motion.div>
    </div>
  )
}

