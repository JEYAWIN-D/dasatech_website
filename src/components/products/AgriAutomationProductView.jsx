import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity, Radio, Zap, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Layers,
  FileText, Search, RefreshCw, Droplets, Sun, Sprout
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA AGRISMART AUTOMATION PRODUCT VIEW (agri-automation)
// Category: Smart Automation Solutions
// Unique Theme: Precision Agriculture & Automated Solenoid Irrigation
// Color Accents: Emerald Green (#059669), Solar Gold (#D97706), Soft Mint
// Unique Interactive Features:
// 1. Crop Soil Telemetry & Irrigation Hero
// 2. Interactive Solenoid Valve Irrigation Controller
// 3. Crop Health & NPK Nutrient Telemetry Hub
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside AgriAutomationProductView component file
const AGRI_AUTOMATION_SCREEN_ASSETS = [
  {
    id: 'solenoid-irrigation',
    module: 'Solenoid Controller',
    title: 'Wireless Solenoid Valve Drip Irrigation Controller',
    subtitle: 'Automated irrigation valve scheduling linked with live field soil moisture telemetry.',
    tag: 'Wireless Irrigation',
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/agrismart/irrigation-valves',
    specs: ['Solar Solenoid Valve', 'Soil Moisture Feedback', 'Weather Sync']
  },
  {
    id: 'soil-telemetry',
    module: 'Soil Telemetry',
    title: 'Multi-Zone Soil Moisture & NPK Nutrient Telemetry Hub',
    subtitle: 'Sub-surface wireless probes transmitting soil moisture, temperature, and nitrogen levels.',
    tag: 'Agri Telemetry',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/agrismart/soil-telemetry',
    specs: ['Sub-Surface Probes', 'NPK Sensor Sync', 'Fertigation Alerts']
  }
]

export default function AgriAutomationProductView() {
  const [activeValve, setActiveValve] = useState('valve-01')
  const [soilMoisture, setSoilMoisture] = useState(38) // %

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const VALVES = [
    { id: 'valve-01', name: 'Field Zone A &bull; North Orchard', status: 'Active Irrigation', moisture: '38%', NPK: 'Good' },
    { id: 'valve-02', name: 'Field Zone B &bull; Greenhouse 02', status: 'Standby Idle', moisture: '62%', NPK: 'Optimal' },
    { id: 'valve-03', name: 'Field Zone C &bull; Drip Irrigation', status: 'Standby Idle', moisture: '55%', NPK: 'Optimal' }
  ]

  const activeValveData = VALVES.find(v => v.id === activeValve) || VALVES[0]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#059669] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#059669] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#059669] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#059669] font-bold">Agricultural Automation</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#059669] bg-white hover:bg-[#ECFDF5] border border-[#E9E2F5] hover:border-[#A7F3D0] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: PRECISION AGRICULTURE CONTROLLER ─────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#ECFDF5] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D1FAE5] border border-[#A7F3D0] text-[#047857] text-xs font-mono font-bold uppercase tracking-wider">
                <Sprout className="w-3.5 h-3.5 text-[#059669]" />
                <span>SMART AUTOMATION SOLUTIONS</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                DASA AgriSmart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#047857] to-[#D97706]">Agricultural Automation.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Precision soil moisture telemetry and wireless solenoid irrigation automation. Monitor field moisture levels, schedule automated drip cycles, and optimize crop yield.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Wireless Solenoid Valves', 'Soil Moisture Telemetry', 'Crop Health Monitoring', 'Automated Fertigation', 'Weather Sync'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#065F46] bg-[#D1FAE5] border border-[#A7F3D0] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#irrigation-valves"
                  className="px-6 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#059669]/25 transition-all flex items-center gap-2"
                >
                  <span>Inspect Solenoid Controller</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#soil-telemetry"
                  className="px-5 py-3.5 rounded-full bg-[#D1FAE5] hover:bg-[#A7F3D0] text-[#065F46] font-display font-bold text-xs sm:text-sm border border-[#A7F3D0] transition-colors"
                >
                  <span>Soil Telemetry Hub</span>
                </a>
              </div>
            </div>

            {/* Right: Live Solenoid Irrigation Controller Simulator */}
            <div className="lg:col-span-7">
              <div id="irrigation-valves" className="rounded-3xl p-6 sm:p-7 bg-[#051A13] border-2 border-white/15 text-white shadow-2xl space-y-4 font-mono text-xs">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#059669] text-white flex items-center justify-center font-bold">
                      <Droplets className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">Wireless Solenoid Irrigation Controller</div>
                      <div className="text-[10px] text-slate-400">Click field zone below to inspect active irrigation status</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#6EE7B7] bg-[#059669]/30 border border-[#6EE7B7]/30 px-3 py-1 rounded-full">
                    AUTOMATED WATERING
                  </span>
                </div>

                {/* Field Zone Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {VALVES.map((v) => {
                    const isSelected = activeValve === v.id
                    return (
                      <div
                        key={v.id}
                        onClick={() => setActiveValve(v.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#059669] border-[#6EE7B7] text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="font-display font-bold text-xs">{v.name}</div>
                        <div className="text-[10px] text-slate-300 mt-1">Moisture: {v.moisture}</div>
                      </div>
                    )
                  })}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1 text-[11px]">
                  <div className="text-slate-400">Selected Zone: <strong className="text-white">{activeValveData.name}</strong></div>
                  <div className="flex justify-between pt-1">
                    <span>Irrigation Valve Status:</span>
                    <strong className="text-emerald-400">{activeValveData.status}</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="agri-automation"
        productName="DASA AgriSmart Automation"
        directScreens={AGRI_AUTOMATION_SCREEN_ASSETS}
      />

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#051A13] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#6EE7B7] uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/60 px-4 py-1.5 rounded-full">
            READY TO AUTOMATE YOUR FARM IRRIGATION?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule an Agricultural Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#059669]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss wireless solenoid valves, soil moisture telemetry, and automated drip irrigation scheduling directly with Founder &amp; CEO Jeyawin D and our agritech engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-display font-bold text-sm shadow-xl shadow-[#059669]/30 transition-all"
            >
              <span>Start Agricultural Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
