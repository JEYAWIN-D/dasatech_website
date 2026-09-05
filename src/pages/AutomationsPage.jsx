import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Building2,
  Briefcase,
  Hotel,
  Factory,
  Sprout,
  Snowflake,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Layers,
  Settings,
  Radio,
  PhoneCall
} from 'lucide-react'
import { AUTOMATIONS_CATALOG } from '../data/automationsData'
import { Link, usePath } from '../components/Router'
import CTA from '../components/CTA'

const SECTOR_ICONS = {
  home: Home,
  hospital: Building2,
  office: Briefcase,
  hotel: Hotel,
  industrial: Factory,
  agri: Sprout,
  'cold-storage': Snowflake
}

export default function AutomationsPage() {
  const { path } = usePath()
  const [selectedId, setSelectedId] = useState('home')

  // Check URL query param or route param on load/change
  useEffect(() => {
    // Check if path has /automations/something
    const parts = path.split('/')
    if (parts.length >= 3 && parts[1] === 'automations') {
      const match = AUTOMATIONS_CATALOG.find(a => a.id === parts[2] || a.slug === parts[2])
      if (match) {
        setSelectedId(match.id)
        return
      }
    }

    // Check window.location.search (?type=...)
    const params = new URLSearchParams(window.location.search)
    const typeParam = params.get('type')
    if (typeParam) {
      const match = AUTOMATIONS_CATALOG.find(a => a.id === typeParam || a.slug === typeParam)
      if (match) {
        setSelectedId(match.id)
      }
    }
  }, [path])

  const activeAutomation = AUTOMATIONS_CATALOG.find(a => a.id === selectedId) || AUTOMATIONS_CATALOG[0]
  const ActiveIcon = SECTOR_ICONS[activeAutomation.id] || Cpu

  const handleSelectTab = (id) => {
    setSelectedId(id)
    // Update url without full refresh
    window.history.pushState({}, '', `/automations?type=${id}`)
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] relative overflow-hidden select-none">
      
      {/* ── 1. CINEMATIC HERO SECTION ───────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#FAF8FF] border-b border-[#E9E2F5] overflow-hidden">
        
        {/* Soft Background Radiance */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(2,132,199,0.15) 70%, transparent 100%)' }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-6 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 shadow-2xs text-xs font-mono font-bold text-[#6D28D9] tracking-wider uppercase mx-auto">
            <Zap className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>ENTERPRISE &amp; SECTOR AUTOMATION ECOSYSTEM</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-tight">
            Intelligent Automation for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#0284C7]">
              Every Industry
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            From luxury smart homes and critical hospital infrastructure to heavy industrial plants and cold chains, we engineer connected IoT automation systems tailored to your specific operational needs.
          </p>

          {/* Quick Stats Pill Bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>7 Specialized Industry Verticals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>Offline-First Edge Reliability</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              <span>Direct Cloud &amp; Mobile Synchronization</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SECTOR SELECTION TABS BAR (7 Verticals) ─────────────── */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-b border-[#E9E2F5] shadow-xs py-4">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none">
            {AUTOMATIONS_CATALOG.map((item) => {
              const Icon = SECTOR_ICONS[item.id] || Cpu
              const isActive = selectedId === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-mono font-bold tracking-wide transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 hover:text-slate-900 bg-[#FAF8FF] border border-[#E9E2F5] hover:border-purple-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeAutomationTab"
                      transition={{ type: 'spring', damping: 26, stiffness: 280 }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#6D28D9] to-[#7C3AED] shadow-md shadow-purple-500/25"
                    />
                  )}
                  <Icon className={`w-4 h-4 relative z-10 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                  <span className="relative z-10">{item.navLabel}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 3. DETAILED AUTOMATION VIEW ─────────────────────────── */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAutomation.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-16"
          >
            {/* Active Vertical Banner Header */}
            <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] relative overflow-hidden space-y-8">
              
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 relative z-10">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 shadow-2xs">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold tracking-widest text-[#6D28D9] uppercase block">
                        {activeAutomation.sector}
                      </span>
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
                        {activeAutomation.title}
                      </h2>
                    </div>
                  </div>

                  <p className="font-mono text-sm sm:text-base font-semibold text-purple-700">
                    {activeAutomation.tagline}
                  </p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {activeAutomation.summary}
                  </p>
                </div>

                <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#3B82F6] hover:opacity-95 text-white font-mono text-xs font-bold shadow-lg transition-all cursor-pointer"
                  >
                    <span>Request System Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="tel:+917639930148"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#E9E2F5] hover:border-purple-300 text-slate-700 font-mono text-xs font-semibold shadow-2xs transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-purple-600" />
                    <span>Speak with Specialist</span>
                  </a>
                </div>
              </div>

              {/* 4 Stat Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#E9E2F5]">
                {activeAutomation.statHighlights.map((stat, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-2xl bg-white border border-[#EDE5F7] space-y-1">
                    <div className="font-display font-black text-2xl sm:text-3xl text-[#17121F]">
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* ── 4. DETAILED CAPABILITY MODULES (6 Grid) ─────────── */}
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-[#6D28D9] uppercase">
                  CORE MODULES &amp; AUTOMATION ARCHITECTURE
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
                  Comprehensive Feature Capabilities
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activeAutomation.modules.map((mod, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E9E2F5] hover:border-purple-300 hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between group"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 group-hover:scale-105 transition-transform">
                        <CheckCircle2 className="w-5 h-5 text-purple-600" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-[#17121F] group-hover:text-purple-700 transition-colors">
                        {mod.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {mod.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Module 0{mIdx + 1}</span>
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Integrated
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 5. HARDWARE & APPLICATION SPECIFICATIONS ─────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Hardware Specifications */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#17121F]">
                      Hardware &amp; Protocols
                    </h4>
                    <p className="text-xs font-mono text-slate-500">
                      Sensors, Controllers &amp; Mesh Architecture
                    </p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {activeAutomation.hardwareSpecs.map((spec, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Sector Use Cases */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#17121F]">
                      Ideal Deployment Environments
                    </h4>
                    <p className="text-xs font-mono text-slate-500">
                      Standard Commercial &amp; Enterprise Formats
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeAutomation.useCases.map((useCase, uIdx) => (
                    <div
                      key={uIdx}
                      className="p-4 rounded-2xl bg-white border border-[#EDE5F7] flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>
      </section>

      {/* ── 6. CLOSING CTA ───────────────────────────────────────── */}
      <CTA />

    </div>
  )
}
