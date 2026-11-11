import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, Thermometer, ShieldCheck, Lock, Unlock, Sun, Moon, Volume2, Power, Wifi, Cpu, Sparkles } from 'lucide-react'

export default function SmartHomeEcosystemSimulator() {
  // Smart Home Ecosystem Live Interactive State
  const [activeScene, setActiveScene] = useState('cyber') // cyber | daylight | cinema | relaxation
  const [hvacTemp, setHvacTemp] = useState(21.5)
  const [isDoorLocked, setIsDoorLocked] = useState(true)
  const [powerConsumption, setPowerConsumption] = useState(1.42) // kW
  const [activeLightsCount, setActiveLightsCount] = useState(18)

  const scenes = [
    { id: 'cyber', name: 'Cyberpunk Neon', bg: 'from-amber-950/80 to-slate-950/90', border: 'border-amber-500', color: '#F59E0B', temp: 21.0, power: 1.45, lights: 24 },
    { id: 'daylight', name: 'Bright Daylight', bg: 'from-amber-950/40 to-slate-900/80', border: 'border-amber-400', color: '#F59E0B', temp: 23.0, power: 0.85, lights: 32 },
    { id: 'cinema', name: 'Cinema Theater', bg: 'from-orange-950/80 to-slate-950/90', border: 'border-orange-500', color: '#EA580C', temp: 20.5, power: 1.15, lights: 8 },
    { id: 'relaxation', name: 'Evening Relax', bg: 'from-rose-950/80 to-slate-950/90', border: 'border-rose-400', color: '#BE123C', temp: 22.0, power: 0.95, lights: 12 }
  ]

  const handleSelectScene = (sc) => {
    setActiveScene(sc.id)
    setHvacTemp(sc.temp)
    setPowerConsumption(sc.power)
    setActiveLightsCount(sc.lights)
  }

  const handleTempAdjust = (delta) => {
    setHvacTemp((prev) => parseFloat(Math.max(16, Math.min(28, prev + delta)).toFixed(1)))
    setPowerConsumption((prev) => parseFloat(Math.max(0.5, prev + delta * 0.08).toFixed(2)))
  }

  return (
    <div className="glass rounded-3xl p-6 sm:p-10 border border-amber-500/30 bg-[#0E0A12]/95 shadow-2xl space-y-8 relative overflow-hidden text-white">
      
      {/* Dynamic Background Atmospheric Glow based on Active Lighting Scene */}
      <div className={`absolute inset-0 bg-gradient-to-br ${scenes.find(s => s.id === activeScene)?.bg} opacity-50 transition-all duration-700 pointer-events-none`}></div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/20 pb-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-amber-300 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Interactive Live Smart Home Ecosystem Simulator</span>
          </div>
          <h3 className="text-2xl font-bold text-white font-display">DASA Touch Gateway &amp; Scene Controller</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Zigbee 3.0 Mesh Online</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* Left Column: Lighting Scene Selector & Biometric Access */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Lighting Mood Scenes */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-wider flex items-center gap-2 font-bold">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>1. Ambient Lighting Mood Scenes</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {scenes.map((sc) => {
                const isActive = activeScene === sc.id
                return (
                  <button
                    key={sc.id}
                    onClick={() => handleSelectScene(sc)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-24 ${
                      isActive
                        ? `bg-amber-950/80 border-amber-400 shadow-lg shadow-amber-900/40 text-white scale-[1.02]`
                        : 'glass border-amber-500/20 bg-[#120D16]/80 text-slate-300 hover:text-white hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold">{sc.name}</span>
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sc.color }}></div>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      {sc.lights} Smart Fixtures
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Biometric Security Door Access */}
          <div className="p-5 rounded-2xl bg-[#17121F] border border-amber-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl border ${isDoorLocked ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
                {isDoorLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
              </div>
              <div>
                <div className="text-xs font-mono text-white font-bold">Biometric Main Door Access</div>
                <div className="text-[11px] font-mono text-slate-300 mt-0.5 font-medium">
                  Status: <span className={isDoorLocked ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>{isDoorLocked ? 'ARMED & LOCKED' : 'UNLOCKED (GUEST ENTER)'}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsDoorLocked(!isDoorLocked)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition border ${
                isDoorLocked
                  ? 'bg-amber-900/50 border-amber-500/40 text-amber-200 hover:bg-amber-800 hover:text-white'
                  : 'bg-emerald-500 text-slate-950 border-emerald-400 hover:bg-emerald-400'
              }`}
            >
              {isDoorLocked ? 'Unlock Door' : 'Lock Main Door'}
            </button>
          </div>

        </div>

        {/* Right Column: Climate HVAC Tuner & Real-Time Telemetry Dashboard */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Climate HVAC Temperature Control */}
          <div className="p-6 rounded-2xl bg-[#17121F] border border-amber-500/30 space-y-4">
            <div className="text-xs font-mono text-amber-300 uppercase tracking-wider flex items-center justify-between font-bold">
              <span className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-amber-400" />
                <span>2. Multi-Zone Climate HVAC Controller</span>
              </span>
              <span className="text-amber-300 font-bold">{hvacTemp}°C</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => handleTempAdjust(-0.5)}
                className="w-12 h-12 rounded-2xl bg-[#1F1626] border border-amber-500/40 text-amber-300 hover:bg-amber-800 hover:text-white font-mono font-bold text-lg transition flex items-center justify-center"
              >
                -
              </button>

              <div className="text-center font-mono">
                <div className="text-3xl font-bold text-white tracking-tight">{hvacTemp}°C</div>
                <div className="text-[11px] text-slate-400 mt-1 font-medium">Living Room &amp; Master Suite</div>
              </div>

              <button
                onClick={() => handleTempAdjust(0.5)}
                className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/40 text-rose-300 hover:bg-rose-600 hover:text-white font-mono font-bold text-lg transition flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Live Ecosystem Telemetry Metrics */}
          <div className="p-5 rounded-2xl bg-[#0E0A12] border border-amber-500/30 space-y-3 font-mono text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Active Smart Light Fixtures:</span>
              <span className="text-amber-400 font-bold">{activeLightsCount} / 36 Fixtures</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Estimated Power Load:</span>
              <span className="text-amber-400 font-bold">{powerConsumption} kW (Power Factor: 0.98)</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Local Mesh Latency:</span>
              <span className="text-emerald-400 font-bold">12ms (Zero Cloud Dependency)</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
