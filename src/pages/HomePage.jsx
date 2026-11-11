import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '../components/Router'
import { ArrowUpRight, ArrowRight, Eye, Layers, Cpu, CheckCircle2, ChevronRight, Activity, Database, ShieldCheck, Sparkles, Building, Pill, Boxes, Factory, Camera } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'
import EyebrowPill from '../components/EyebrowPill'
import BentoCard from '../components/BentoCard'
import HeroNodeGraph from '../components/HeroNodeGraph'
import IndustriesStrip from '../components/IndustriesStrip'
import GlobalPresenceMap from '../components/GlobalPresenceMap'
import ProcessTimeline from '../components/ProcessTimeline'
import FaqAccordion from '../components/FaqAccordion'
import CtaBand from '../components/CtaBand'

// Featured Products Spec
const PRODUCTS = [
  {
    id: 'educore',
    name: 'EduCore School System',
    subtitle: 'School & Campus Management',
    description: 'All-in-one educational ERP unifying student admissions, fee ledgers, automated attendance, and parent communication.',
    icon: Building,
    badge: 'Education ERP',
    color: '#00D4FF',
    link: '/products',
  },
  {
    id: 'medflow',
    name: 'MedFlow Pharmacy Software',
    subtitle: 'Pharmacy Operations & Billing',
    description: 'High-speed keyboard-first billing, automated batch-wise FIFO inventory, expiry alerts, and GST tax compliance.',
    icon: Pill,
    badge: 'Healthcare Retail',
    color: '#22FF9A',
    link: '/products',
  },
  {
    id: 'wareflex',
    name: 'WareFlex Warehouse System',
    subtitle: 'Smart Inventory & Stock Control',
    description: 'Barcode & QR rack tracking, multi-warehouse dispatch orchestration, and real-time stock reconciliation.',
    icon: Boxes,
    badge: 'Supply Chain',
    color: '#00D4FF',
    link: '/products',
  },
  {
    id: 'iot-factory',
    name: 'IoT Factory Automation',
    subtitle: 'Smart Factory & Production Tracking',
    description: 'Sub-GHz LoRaWAN mesh and Siemens PLC telemetry streaming live output counts, downtime alarms, and power consumption.',
    icon: Factory,
    badge: 'Industry 4.0',
    color: '#22FF9A',
    link: '/products',
  },
  {
    id: 'snapshare',
    name: 'SnapShare Photography Studio',
    subtitle: 'AI Photo Galleries & CRM',
    description: 'Intelligent AI facial-recognition client galleries, automated digital asset watermarking, and instant studio invoicing.',
    icon: Camera,
    badge: 'Media & AI',
    color: '#00D4FF',
    link: '/products',
  },
]

// Stats Counter
function StatCard({ number, suffix = '', label, sub }) {
  return (
    <div className="p-6 rounded-2xl bg-[#0F1117] border border-white/5 text-center">
      <div className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
        {number}
        <span className="text-[#00D4FF]">{suffix}</span>
      </div>
      <div className="font-mono text-xs uppercase tracking-wider text-slate-300 mt-2 font-semibold">
        {label}
      </div>
      <div className="text-xs text-[#9AA3B2] mt-1">{sub}</div>
    </div>
  )
}

export default function HomePage() {
  useSEO({
    title: 'DASA TECH | Intelligent Enterprise & Connected Digital Solutions',
    description:
      'DASA TECH engineers mission-critical enterprise software, custom ERP platforms, AI computer vision, and IoT telemetry architectures that solve real operational bottlenecks.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DASA TECH',
      url: 'https://dasatech.in',
    },
  })

  // Headline words for staggered reveal
  const headlineWords = 'Intelligent Enterprise & Connected Digital Solutions for Modern Businesses.'.split(' ')

  return (
    <main className="w-full bg-[#07080C] text-slate-100 overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1) HERO SECTION
          Word-by-word reveal, Cyber Node Graph with live telemetry
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00D4FF]/15 via-[#22FF9A]/10 to-transparent blur-[140px] rounded-full pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <EyebrowPill dotColor="bg-[#00D4FF]">Technology • Innovation • Future</EyebrowPill>

            {/* Word-by-Word Revealed H1 */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`inline-block mr-2.5 ${
                    word === 'Intelligent' || word === 'Enterprise'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#00B4D8] to-white'
                      : word === 'Connected' || word === 'Digital'
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#22FF9A]'
                      : 'text-white'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-base sm:text-lg text-[#9AA3B2] max-w-2xl leading-relaxed"
            >
              We turn complex business challenges into reliable software, smart management platforms, and modern digital solutions built for growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all duration-300 group"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F1117] border border-white/10 text-white font-medium text-sm hover:border-white/25 hover:bg-[#151821] transition-all duration-300"
              >
                <span>Explore Solutions</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </motion.div>

            {/* Trust Micro-Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22FF9A]" />
                <span>Zero Per-Seat License Bloat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D4FF]" />
                <span>99.9% Uptime Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22FF9A]" />
                <span>Direct Leadership Engineering</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual - Cyber Telemetry Node Graph */}
          <div className="lg:col-span-5">
            <HeroNodeGraph />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2) INDUSTRIES & TECH MARQUEE
      ─────────────────────────────────────────────────────────────── */}
      <IndustriesStrip />

      {/* ─────────────────────────────────────────────────────────────
          3) CORE ENGINEERING CAPABILITIES (BENTO GRID OF 3 CARDS)
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="solutions">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <EyebrowPill dotColor="bg-[#22FF9A]">ENGINEERING EXCELLENCE</EyebrowPill>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Core Engineering Capabilities.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA3B2] leading-relaxed">
            Proprietary architectures engineered to withstand industrial load, edge latencies, and high data concurrency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: AI & Computer Vision */}
          <BentoCard
            glowColor="rgba(0, 212, 255, 0.18)"
            borderColor="hover:border-[#00D4FF]/40"
            className="p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-[#00D4FF] font-semibold tracking-wider">
                Edge AI &amp; Inference
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                AI &amp; Computer Vision
              </h3>
              <p className="text-sm text-[#9AA3B2] mt-3 leading-relaxed">
                Smart automated inspection models running at the edge. Automated fabric defect scanning, optical character recognition, and real-time CCTV safety compliance.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>On-Prem Edge Jetson &amp; NPU Inference</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>Sub-15ms Classification Latency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>Automated Defect Flagging HUD</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Custom ERP Development */}
          <BentoCard
            glowColor="rgba(34, 255, 154, 0.18)"
            borderColor="hover:border-[#22FF9A]/40"
            className="p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#22FF9A]/10 border border-[#22FF9A]/30 flex items-center justify-center text-[#22FF9A] mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-[#22FF9A] font-semibold tracking-wider">
                Enterprise Core
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                Custom ERP Development
              </h3>
              <p className="text-sm text-[#9AA3B2] mt-3 leading-relaxed">
                Connected enterprise systems architected around your exact operational workflows. High-throughput inventory synchronization, double-entry ledgers, and 99.9% uptime.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22FF9A]" />
                <span>Multi-Facility Distributed DB</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22FF9A]" />
                <span>Microsecond Cash Drawer POS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22FF9A]" />
                <span>Full Source Code &amp; Data Ownership</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Industrial Workflow Automation */}
          <BentoCard
            glowColor="rgba(0, 212, 255, 0.18)"
            borderColor="hover:border-[#00D4FF]/40"
            className="p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/30 flex items-center justify-center text-[#00D4FF] mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-[#00D4FF] font-semibold tracking-wider">
                Hardware &amp; SCADA
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-1">
                Industrial Automation
              </h3>
              <p className="text-sm text-[#9AA3B2] mt-3 leading-relaxed">
                Contactless NFC stationing, LoRaWAN sensor networks, and Siemens S7 PLC telemetry bridging physical factory production lines with live executive dashboards.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>Per-Machine KWh &amp; Cycle Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>Sub-GHz Long Range Wireless Mesh</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                <span>Instant Predictive Maintenance Alerts</span>
              </div>
            </div>
          </BentoCard>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4) PRODUCT ECOSYSTEM (BENTO PRODUCT CARDS)
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <EyebrowPill dotColor="bg-[#00D4FF]">PROPRIETARY PRODUCT SUITE</EyebrowPill>
            <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Production-Grade Platforms.
            </h2>
            <p className="mt-3 text-base text-[#9AA3B2] max-w-xl">
              Turnkey software platforms deployed across schools, multi-branch pharmacies, warehouses, and industrial plants.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4FF] hover:text-white transition-colors"
          >
            <span>View All Platforms</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => {
            const Icon = prod.icon
            return (
              <BentoCard
                key={prod.id}
                className="p-7 flex flex-col justify-between"
                glowColor={`${prod.color}20`}
                borderColor={`hover:border-[${prod.color}]/40`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${prod.color}15`,
                        color: prod.color,
                        border: `1px solid ${prod.color}30`,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#151821] border border-white/10 text-slate-300">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white">
                    {prod.name}
                  </h3>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    {prod.subtitle}
                  </div>
                  <p className="text-xs text-[#9AA3B2] mt-3 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    <span>Explore Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: prod.color }} />
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5) STATS BAND (COUNT-UP PRECISION METRICS)
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            number="99.9"
            suffix="%"
            label="Platform Uptime"
            sub="Continuous architecture SLA"
          />
          <StatCard
            number="50"
            suffix="+"
            label="Enterprise Modules"
            sub="Inventory, POS, telemetry & SIS"
          />
          <StatCard
            number="100"
            suffix="%"
            label="Custom Engineered"
            sub="Zero third-party code restrictions"
          />
          <StatCard
            number="24/7"
            label="Telemetry Monitoring"
            sub="Active sensor & API health checks"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6) GLOBAL PRESENCE MAP (SPEC COMPLIANT)
      ─────────────────────────────────────────────────────────────── */}
      <GlobalPresenceMap />

      {/* ─────────────────────────────────────────────────────────────
          7) PROCESS TIMELINE
      ─────────────────────────────────────────────────────────────── */}
      <ProcessTimeline />

      {/* ─────────────────────────────────────────────────────────────
          8) FAQ ACCORDION
      ─────────────────────────────────────────────────────────────── */}
      <FaqAccordion />

      {/* ─────────────────────────────────────────────────────────────
          9) CONVERSION CTA BAND
      ─────────────────────────────────────────────────────────────── */}
      <CtaBand />

    </main>
  )
}
