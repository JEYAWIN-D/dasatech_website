import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Radio, Cpu, Activity, Zap, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Layers,
  FileText, Search, RefreshCw, Gauge, Wifi
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA EDGEMESH IOT PRODUCT VIEW (iot-telemetry)
// Unique Theme: Long-Range Sub-GHz Wireless Mesh & Cloud MQTT Radar
// Color Accents: Signal Amber (#F59E0B), Industrial Navy (#0A1128)
// Unique Interactive Features:
// 1. 5 KM Wireless Mesh Topography Map
// 2. High-Throughput EMQX Cloud MQTT Ingestion Radar
// 3. Interactive 5+ Year Sensor Battery Lifespan Calculator
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside IotTelemetryProductView component file
const IOT_TELEMETRY_SCREEN_ASSETS = [
  {
    id: 'mesh-topography',
    module: 'Wireless Mesh',
    title: '5 KM Sub-GHz Wireless Sensor Mesh Topography',
    subtitle: 'Multi-kilometer RF mesh map visualizing gateway nodes, repeaters, and field sensor endpoints.',
    tag: 'Sub-GHz Mesh',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/edgemesh/rf-topography',
    specs: ['SX1262 LoRa Radio', '5 KM Range', 'Multi-Hop Routing']
  },
  {
    id: 'mqtt-broker',
    module: 'MQTT Cloud Broker',
    title: 'High-Throughput EMQX Cloud MQTT Message Ingestion Radar',
    subtitle: 'High-speed MQTT message broker parsing 100,000+ sensor telemetry packets per second.',
    tag: 'EMQX Broker',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/edgemesh/mqtt-radar',
    specs: ['100k Packets/Sec', 'Sub-8ms Ingestion', 'TimescaleDB Sink']
  }
]

export default function IotTelemetryProductView() {
  const [sampleInterval, setSampleInterval] = useState(60) // seconds

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // Battery life calculation in years based on interval
  const batteryYears = (sampleInterval * 0.08 + 1.2).toFixed(1)

  return (
    <div className="min-h-screen bg-[#0A1128] text-slate-100 selection:bg-[#F59E0B] selection:text-[#0A1128] pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#060B1B]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#F59E0B] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#F59E0B] font-bold">DASA EdgeMesh IoT</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-white hover:text-[#F59E0B] bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-1.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: SUB-GHZ WIRELESS MESH RADAR ─────────────── */}
      <section className="relative py-14 lg:py-22 bg-[#0A1128] overflow-hidden border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#F59E0B] text-xs font-mono font-bold uppercase tracking-wider">
                <Radio className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>SUB-GHZ WIRELESS MESH &amp; CLOUD TELEMETRY</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                DASA EdgeMesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#EA580C]">IoT Platform.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Long-range wireless environmental and machine telemetry mesh operating across multi-kilometer industrial sites with 5+ year battery life and sub-10ms MQTT cloud ingestion.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  '5 KM Sub-GHz Mesh', 'EMQX MQTT Cloud Broker', '5+ Year Battery Life', 'ESP32-S3 / STM32 MCUs', 'WebSockets Telemetry HUD'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#battery-calc"
                  className="px-6 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1128] font-display font-black text-xs sm:text-sm shadow-md shadow-[#F59E0B]/25 transition-all flex items-center gap-2"
                >
                  <span>Battery Life Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#mqtt-broker"
                  className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs sm:text-sm border border-white/15 transition-colors"
                >
                  <span>MQTT Broker Feed</span>
                </a>
              </div>
            </div>

            {/* Right: Live Wireless Mesh Radar Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-7 bg-[#040814] border-2 border-white/15 text-white shadow-2xl space-y-4 font-mono text-xs">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#F59E0B] text-[#0A1128] flex items-center justify-center font-bold">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">5 KM Sub-GHz Mesh Status</div>
                      <div className="text-[10px] text-slate-400">SX1262 Radios &bull; 868 MHz Frequency</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#FBBF24] bg-[#F59E0B]/20 border border-[#F59E0B]/40 px-3 py-1 rounded-full">
                    SIGNAL RSSI -84 dBm
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400">Node ID</div>
                    <div className="font-bold text-white mt-1">NODE-8820-RF</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400">Packet Delay</div>
                    <div className="font-bold text-emerald-400 mt-1">8ms</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. BATTERY LIFESPAN CALCULATOR ────────────────────── */}
      <section id="battery-calc" className="py-16 lg:py-24 bg-[#060B1B] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F59E0B] uppercase tracking-wider bg-[#F59E0B]/15 px-3.5 py-1.5 rounded-full border border-[#F59E0B]/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>ULTRA-LOW POWER HARDWARE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Sensor Battery <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-[#FBBF24]">Lifespan Calculator</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Drag the telemetry sampling interval slider below to estimate field battery longevity on a standard coin-cell battery.
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white/5 border border-white/15 space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-300 font-bold">
              <span>Sampling Frequency: Every {sampleInterval} Seconds</span>
              <span className="text-[#FBBF24]">Microamp Deep-Sleep</span>
            </div>

            <input
              type="range"
              min="10"
              max="300"
              step="10"
              value={sampleInterval}
              onChange={(e) => setSampleInterval(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#F59E0B]"
            />

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 text-center space-y-1">
              <div className="text-slate-400 text-[11px]">Estimated Battery Longevity:</div>
              <div className="text-3xl font-bold text-[#FBBF24]">{batteryYears} Years</div>
              <div className="text-[10px] text-emerald-400 font-bold">Zero Maintenance Required</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="iot-telemetry"
        productName="DASA EdgeMesh IoT"
        directScreens={IOT_TELEMETRY_SCREEN_ASSETS}
      />

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0A1128] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider bg-amber-950/60 border border-amber-800/60 px-4 py-1.5 rounded-full">
            READY TO CONNECT YOUR HARDWARE?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a DASA EdgeMesh IoT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss Sub-GHz RF mesh topography, EMQX MQTT cloud broker setups, and custom silicon PCB designs directly with Founder &amp; CEO Jeyawin D and our IoT hardware leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1128] font-display font-bold text-sm shadow-xl shadow-[#F59E0B]/30 transition-all"
            >
              <span>Start EdgeMesh Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
