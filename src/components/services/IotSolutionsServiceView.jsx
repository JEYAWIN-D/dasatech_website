import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Radio, Cpu, Zap, Activity, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Compass, Gauge, AlertTriangle, PlayCircle,
  Clock, Check, RefreshCw, Layers, Sliders, Wifi, HardDrive, Factory,
  Tag, ChevronRight
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// INDUSTRIAL WORKFLOW AUTOMATION SERVICE COMPONENT (NFC / IoT)
// Unique Theme: Touchless Factory Floor Blueprint & NFC Telemetry Station
// Color Accents: Industrial Orange (#EA580C), Charcoal Dark (#18181B), Warning Amber
// Unique Visual Features:
// 1. Factory Station Blueprint Hero with NFC Tag Status Trackers
// 2. Interactive Touchless NFC Order Execution Simulator (Click NFC Order Tag -> Advance Station 1 -> Station 2 -> Station 3 -> QC Pass)
// 3. Real-Time Machine Telemetry & Sensor Condition Gauge Console
// 4. Shop-Floor Hardware Specs Grid
// ─────────────────────────────────────────────────────────────

export default function IotSolutionsServiceView() {
  const [activeStation, setActiveStation] = useState(1)
  const [orderState, setOrderState] = useState({
    orderId: 'NFC-ORD-8921',
    product: 'Machined Valve Assembly',
    currentStation: 'Station 01: Raw Materials Ingestion',
    status: 'In Progress',
    nfcTagId: 'TAG-8820-NFC'
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const advanceNfcStation = (stNum) => {
    setActiveStation(stNum)
    if (stNum === 1) {
      setOrderState({
        orderId: 'NFC-ORD-8921',
        product: 'Machined Valve Assembly',
        currentStation: 'Station 01: Raw Materials Ingestion',
        status: 'In Progress',
        nfcTagId: 'TAG-8820-NFC'
      })
    } else if (stNum === 2) {
      setOrderState({
        orderId: 'NFC-ORD-8921',
        product: 'Machined Valve Assembly',
        currentStation: 'Station 02: CNC Precision Milling',
        status: 'Machining Active',
        nfcTagId: 'TAG-8820-NFC'
      })
    } else if (stNum === 3) {
      setOrderState({
        orderId: 'NFC-ORD-8921',
        product: 'Machined Valve Assembly',
        currentStation: 'Station 03: Final QC Inspection',
        status: 'QC Verified Pass',
        nfcTagId: 'TAG-8820-NFC'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#EA580C] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#EA580C] font-bold">Industrial Workflow Automation</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: FACTORY BLUEPRINT & NFC TELEMETRY ─────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#FFF7ED] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#EA580C]">
                Factory IoT &amp; Machine Telemetry
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Touchless Factory Orders &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#C2410C] to-[#EAB308]">Automated Execution.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Connect your factory floor to receive orders through touchless NFC systems and automate production workflows from initial order handling to work execution.
              </p>

              {/* NFC Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'NFC Order Handling', 'Automated Execution', 'Station Tracking', 'Machine Telemetry', 'Live Status Feeds'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#9A3412] bg-[#FFEDD5] border border-[#FDBA74] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#nfc-simulator"
                  className="px-6 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#EA580C]/25 transition-all flex items-center gap-2"
                >
                  <span>Try NFC Station Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#telemetry-console"
                  className="px-5 py-3.5 rounded-full bg-[#FFEDD5] hover:bg-[#FDBA74] text-[#9A3412] font-display font-bold text-xs sm:text-sm border border-[#FDBA74] transition-colors"
                >
                  <span>Machine Telemetry</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Touchless NFC Order Handling Simulator */}
            <div className="lg:col-span-7">
              <div id="nfc-simulator" className="rounded-3xl p-6 sm:p-7 bg-[#140F0A] border-2 border-white/15 text-white shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-bold">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Touchless NFC Order Station Simulator</div>
                      <div className="text-[10px] font-mono text-slate-400">Click a station button below to test touchless NFC order tracking</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#EA580C]/30 text-[#FDBA74] px-3 py-1 rounded-full border border-[#FDBA74]/30">
                    NFC LIVE TELEMETRY
                  </span>
                </div>

                {/* Station Selection Tabs */}
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {[
                    { num: 1, label: 'Station 01: Ingestion' },
                    { num: 2, label: 'Station 02: Milling' },
                    { num: 3, label: 'Station 03: Final QC' }
                  ].map((st) => (
                    <button
                      key={st.num}
                      onClick={() => advanceNfcStation(st.num)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        activeStation === st.num
                          ? 'bg-[#EA580C] border-[#FDBA74] text-white shadow-lg'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-bold text-[11px]">{st.label}</div>
                    </button>
                  ))}
                </div>

                {/* Active Order Telemetry Card */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2 text-[11px]">
                    <span>Active Order Tag: <strong className="text-white">{orderState.nfcTagId}</strong></span>
                    <span>Order ID: <strong className="text-[#FDBA74]">{orderState.orderId}</strong></span>
                  </div>
                  <div className="pt-1">
                    <div className="text-[11px] text-slate-400">Product Line:</div>
                    <div className="font-bold text-white text-sm">{orderState.product}</div>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="text-[10px] text-slate-400">Current Station:</div>
                      <div className="font-bold text-[#FDBA74]">{orderState.currentStation}</div>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                      {orderState.status}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. REAL-TIME MACHINE TELEMETRY CONSOLE ────────────── */}
      <section id="telemetry-console" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1.5 rounded-full border border-[#FDBA74]">
              <Gauge className="w-3.5 h-3.5" />
              <span>SHOP-FLOOR SENSOR CONSOLE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Real-Time Machine <span className="text-color-shift">Telemetry</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Connect machine sensors and hardware telemetry modules to monitor temperature, vibration, and production status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#EA580C] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center border border-[#FDBA74]">
                <Tag className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">NFC Smart Tag Readers</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Touchless NFC tag scanners mounted on factory workstations to register job order arrivals and station execution progress.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#EA580C] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center border border-[#FDBA74]">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Machine Health Sensors</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Industrial sensors monitoring temperature, motor vibration, and electrical draw with automated alert triggers.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#EA580C] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center border border-[#FDBA74]">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Live Web Production Dashboards</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Real-time browser management dashboards displaying order completion status, active station loads, and work execution logs.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#140F0A] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#FDBA74] uppercase tracking-wider bg-orange-950/60 border border-orange-800/60 px-4 py-1.5 rounded-full">
            READY TO AUTOMATE YOUR FACTORY WORKFLOW?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule an Industrial Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDBA74] to-[#EA580C]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss NFC smart tag specifications, station order tracking, and shop-floor hardware deployments directly with Founder &amp; CEO Jeyawin D and our IoT engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-sm shadow-xl shadow-[#EA580C]/30 transition-all"
            >
              <span>Start Factory Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
