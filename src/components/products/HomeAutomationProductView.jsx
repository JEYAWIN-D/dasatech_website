import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Lightbulb, Thermometer, Lock, ShieldCheck, Cpu, Mic, Zap,
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Database, Check,
  Clock, Server, Layers, FileText, Search, Activity, RefreshCw, Smartphone
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA SMARTHOME AUTOMATION PRODUCT VIEW (home-automation)
// Category: Smart Automation Solutions
// Unique Theme: Intelligent Home Automation & Smart Living Control Station
// Color Accents: Sky Blue (#0284C7), Clean Indigo (#4F46E5), Pure White
// Unique Interactive Features:
// 1. Smart Living Mesh Gateway Hero (Scene Switcher: Ambient, Cinema, Security)
// 2. Interactive Room Climate & Lighting Controller
// 3. Biometric Door Access & AI Surveillance Camera Console
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside HomeAutomationProductView component file
const HOME_AUTOMATION_SCREEN_ASSETS = [
  {
    id: 'scene-controller',
    module: 'Mesh Scene Gateway',
    title: 'Smart Home Mesh Lighting & Scene Controller',
    subtitle: 'Central touch panel for configuring ambient lighting scenes, circadian rhythm, and security modes.',
    tag: 'Smart Mesh Gateway',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/smarthome/mesh-gateway',
    specs: ['Matter / Zigbee 3.0', 'Offline Edge Gateway', 'Circadian Lighting']
  },
  {
    id: 'climate-zones',
    module: 'Multi-Zone HVAC',
    title: 'Precision Multi-Zone HVAC Climate Control Panel',
    subtitle: 'Individual room temperature orchestration with occupancy sensors and energy-saving schedules.',
    tag: 'Climate Orchestrator',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/smarthome/hvac-zones',
    specs: ['Occupancy Sensing', '35% Energy Reduction', 'Touch Keypad']
  }
]

export default function HomeAutomationProductView() {
  const [activeScene, setActiveScene] = useState('ambient')
  const [roomTemp, setRoomTemp] = useState(22.5)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const SCENES = {
    ambient: { name: 'Evening Ambient', lighting: 'Warm Amber 2700K', hvac: '22.5°C Eco', security: 'Disarmed' },
    cinema: { name: 'Home Theater Scene', lighting: 'Deep Blue 5% Dim', hvac: '21.0°C Cool', security: 'Perimeter Armed' },
    night: { name: 'Goodnight Sleep Mode', lighting: 'Path Lights Off', hvac: '23.0°C Night', security: 'Full Guard Armed' }
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#0284C7] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#0284C7] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#0284C7] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#0284C7] font-bold">Home Automation</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#0284C7] bg-white hover:bg-[#F0F9FF] border border-[#E9E2F5] hover:border-[#BAE6FD] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: SMART LIVING MESH GATEWAY ────────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#F0F9FF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[#0369A1] text-xs font-mono font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>SMART AUTOMATION SOLUTIONS</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Intelligent Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#4F46E5]">Automation Systems.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Transform residential spaces into responsive, high-tech environments — integrating smart lighting scenes, multi-zone HVAC climate control, biometric door access, and AI security cameras.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Adaptive Lighting Scenes', 'Multi-Zone HVAC Control', 'Biometric Door Access', 'AI Camera Surveillance', 'Local Voice AI Hub'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#075985] bg-[#E0F2FE] border border-[#BAE6FD] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#scene-switcher"
                  className="px-6 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#0284C7]/25 transition-all flex items-center gap-2"
                >
                  <span>Try Ambient Scene Controller</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#climate-control"
                  className="px-5 py-3.5 rounded-full bg-[#E0F2FE] hover:bg-[#BAE6FD] text-[#075985] font-display font-bold text-xs sm:text-sm border border-[#BAE6FD] transition-colors"
                >
                  <span>Climate Control Dials</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Scene Switcher Console */}
            <div className="lg:col-span-7">
              <div id="scene-switcher" className="rounded-3xl p-6 sm:p-7 bg-[#07131E] border-2 border-white/15 text-white shadow-2xl space-y-4 font-mono text-xs">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">Smart Home Mesh Scene Controller</div>
                      <div className="text-[10px] text-slate-400">Click a scene below to test real-time room automation</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-[#38BDF8] bg-[#0284C7]/20 border border-[#0284C7]/40 px-3 py-1 rounded-full">
                    MESH GATEWAY READY
                  </span>
                </div>

                {/* Scene Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'ambient', label: 'Evening Ambient' },
                    { key: 'cinema', label: 'Home Theater' },
                    { key: 'night', label: 'Goodnight Sleep' }
                  ].map((sc) => (
                    <button
                      key={sc.key}
                      onClick={() => setActiveScene(sc.key)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        activeScene === sc.key
                          ? 'bg-[#0284C7] border-[#38BDF8] text-white font-bold shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-[11px]">{sc.label}</div>
                    </button>
                  ))}
                </div>

                {/* Active Scene Spec Status */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Active Lighting Scene:</span>
                    <strong className="text-[#38BDF8]">{SCENES[activeScene].lighting}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Multi-Zone HVAC Target:</span>
                    <strong className="text-emerald-400">{SCENES[activeScene].hvac}</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>AI Security System:</span>
                    <strong className="text-amber-400">{SCENES[activeScene].security}</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="home-automation"
        productName="DASA SmartHome Automation"
        directScreens={HOME_AUTOMATION_SCREEN_ASSETS}
      />

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#07131E] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#38BDF8] uppercase tracking-wider bg-sky-950/60 border border-sky-800/60 px-4 py-1.5 rounded-full">
            READY TO AUTOMATE YOUR HOME?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Smart Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#0284C7]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss smart lighting scenes, biometric door locks, and multi-zone HVAC automation directly with Founder &amp; CEO Jeyawin D and our automation engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-display font-bold text-sm shadow-xl shadow-[#0284C7]/30 transition-all"
            >
              <span>Start Home Automation Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
