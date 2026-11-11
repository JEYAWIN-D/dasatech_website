import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Pill, Boxes, Factory, Camera,
  CheckCircle2, ArrowUpRight, ArrowRight, Sparkles,
  Layers, Cpu, Eye, Database, Activity, ShieldCheck, Radio
} from 'lucide-react'
import { Link } from '../components/Router'
import { useSEO } from '../hooks/useSEO'
import EyebrowPill from '../components/EyebrowPill'
import BentoCard from '../components/BentoCard'
import CtaBand from '../components/CtaBand'

const FILTER_CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'education', label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'warehouse', label: 'Warehouse' },
  { id: 'factory', label: 'Factory Automation' },
  { id: 'photography', label: 'Photography & AI' },
]

const PRODUCTS = [
  {
    id: 'educore',
    category: 'education',
    name: 'EduCore School System',
    tag: 'School & Campus Management',
    purpose: 'All-in-one educational campus platform unifying student admissions, fee ledgers, automated biometric attendance, examination grading, and parent mobile communication.',
    color: '#00D4FF',
    icon: GraduationCap,
    features: [
      'Automated Biometric & RFID Student/Staff Attendance Telemetry',
      'Instant Fee Billing & Multi-Channel Payment Gateway Reconciliation',
      'Comprehensive Academic Gradebook & Automated Report Card Generation',
      'School Bus Fleet GPS Live Tracking with Parent Safety Alerts',
      'Modular Library, Hostel & Multi-Store Inventory Asset Management',
    ],
    mockupImg: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=90',
    stats: [
      { label: 'Campus Modules', value: '18+' },
      { label: 'Attendance Latency', value: '<500ms' },
      { label: 'Uptime SLA', value: '99.9%' },
    ],
  },
  {
    id: 'medflow',
    category: 'healthcare',
    name: 'MedFlow Pharmacy Software',
    tag: 'Pharmacy Operations & Billing',
    purpose: 'High-throughput pharmacy operations management software with sub-second keyboard-first POS billing, automated batch-wise FIFO inventory, expiry countdowns, and automated GST reporting.',
    color: '#22FF9A',
    icon: Pill,
    features: [
      'Keyboard-First POS Billing Terminal (sub-12ms barcode checkout)',
      'Automated FIFO Batch Expiry & Color-Coded Shelf Bin Matrix',
      'Doctor Prescription Digitization & Patient Medication History Tracker',
      'Predictive Supplier Purchase Reordering on Safety Threshold Breach',
      'One-Click GST Return Exporter (GSTR-1, 2B, 3B) & E-Way Bill Integration',
    ],
    mockupImg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    stats: [
      { label: 'Checkout Velocity', value: '12ms' },
      { label: 'Batch Expiry Loss', value: '0.0%' },
      { label: 'Tax Accuracy', value: '100%' },
    ],
  },
  {
    id: 'wareflex',
    category: 'warehouse',
    name: 'WareFlex Warehouse System',
    tag: 'Smart Inventory & Stock Control',
    purpose: 'High-velocity warehouse management system (WMS) orchestrating barcode/QR bin allocation, multi-facility inventory transfers, 3-way purchase matching, and dispatch optimization.',
    color: '#00D4FF',
    icon: Boxes,
    features: [
      'Visual 2D/3D Warehouse Bin & Rack Space Allocation Engine',
      'Barcode & QR Code Handheld Scanner Mobile Ingestion Workflows',
      '3-Way Purchase Order (PO), Gate Challan & Invoice Reconciliation',
      'Automated Low-Stock Reorder Triggers & Supplier RFQ Comparison',
      'Multi-Location Cross-Docking & Real-Time Stock Transfer Telemetry',
    ],
    mockupImg: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=90',
    stats: [
      { label: 'Dispatch Speed', value: '+45%' },
      { label: 'Stock Reconciliation', value: 'Live' },
      { label: 'Barcode Lookup', value: '<20ms' },
    ],
  },
  {
    id: 'iot-factory',
    category: 'factory',
    name: 'IoT Factory Automation',
    tag: 'Smart Factory & Production Tracking',
    purpose: 'Industrial Industry 4.0 plant floor automation and telemetry system connecting Siemens S7 PLCs, Modbus sensors, and LoRaWAN long-range edge hardware to live supervisory dashboards.',
    color: '#22FF9A',
    icon: Factory,
    features: [
      'Direct Siemens S7 & Modbus PLC Industrial Machine Interfacing',
      'Per-Machine KWh Electrical Consumption & Cycle Counter Telemetry',
      'Sub-GHz LoRaWAN Long-Range Wireless Mesh Across Heavy Shop Floors',
      'Real-Time Machine Downtime Logging & Predictive Maintenance Alarms',
      'Touchless NFC Operator Stationing & Shift Productivity Tracking',
    ],
    mockupImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90',
    stats: [
      { label: 'Sensor Sampling', value: '100Hz' },
      { label: 'Telemetry Mesh', value: 'Sub-GHz' },
      { label: 'Unplanned Downtime', value: '-35%' },
    ],
  },
  {
    id: 'snapshare',
    category: 'photography',
    name: 'SnapShare Photography Studio',
    tag: 'AI Photo Galleries & CRM',
    purpose: 'Next-generation creative media CRM and client delivery platform powered by edge AI facial recognition for instant guest photo finding, proofing watermarks, and studio accounting.',
    color: '#00D4FF',
    icon: Camera,
    features: [
      'On-Device AI Facial Recognition for Instant Client Face-Search',
      'Zero-Loss Compressed Cloud Client Gallery Delivery & Bulk Downloads',
      'Dynamic Anti-Theft Watermarking & Interactive Client Selection Proofing',
      'Integrated Studio Booking Calendar & Advance Payment Gateways',
      'Automated WhatsApp & Email Photo Delivery Notification Links',
    ],
    mockupImg: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1400&q=90',
    stats: [
      { label: 'AI Search Latency', value: '<1.2s' },
      { label: 'Photo Ingestion', value: '10K/hr' },
      { label: 'Storage Savings', value: '60%' },
    ],
  },
]

export default function ProductsPage() {
  useSEO({
    title: 'Products & Platforms | DASA TECH',
    description:
      'Explore DASA TECH proprietary software platforms: EduCore School ERP, MedFlow Pharmacy System, WareFlex WMS, IoT Factory Automation, and SnapShare AI Studio.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'DASA TECH Products',
      url: 'https://dasatech.in/products',
    },
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [activeProductInView, setActiveProductInView] = useState('educore')

  const filteredProducts =
    activeFilter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter)

  // Track product in view on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (const prod of PRODUCTS) {
        const el = document.getElementById(prod.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveProductInView(prod.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="w-full bg-[#07080C] text-slate-100 overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER WITH FILTER CHIPS
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-[#00D4FF]/10 via-[#22FF9A]/10 to-transparent blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-3xl">
          <EyebrowPill dotColor="bg-[#00D4FF]">PRODUCTION-READY PLATFORMS</EyebrowPill>
          <h1 className="mt-4 font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Enterprise software engineered for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-[#22FF9A]">
              real operations.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#9AA3B2] leading-relaxed">
            Every DASA TECH platform is built from scratch with zero third-party licensing baggage, microsecond transaction latencies, and total client data sovereignty.
          </p>

          {/* Filter Chips Bar */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeFilter === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#00D4FF] to-[#0099FF] text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]'
                      : 'bg-[#0F1117] text-slate-400 border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PRODUCT SHOWCASES WITH STICKY SIDE INDEX
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Showcase Column (Span 9) */}
          <div className="lg:col-span-9 space-y-24">
            {filteredProducts.map((prod, idx) => {
              const Icon = prod.icon
              const isEven = idx % 2 === 1

              return (
                <div
                  key={prod.id}
                  id={prod.id}
                  className="scroll-mt-32 rounded-3xl bg-[#0F1117] border border-white/10 p-8 sm:p-12 overflow-hidden relative shadow-2xl"
                >
                  {/* Subtle Background Glow per product */}
                  <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] pointer-events-none -z-0"
                    style={{ backgroundColor: `${prod.color}15` }}
                  />

                  <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Details Column (Span 7) */}
                    <div className="md:col-span-7 space-y-6 relative z-10">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            backgroundColor: `${prod.color}15`,
                            color: prod.color,
                            border: `1px solid ${prod.color}30`,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className="font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                          style={{
                            backgroundColor: `${prod.color}15`,
                            color: prod.color,
                            border: `1px solid ${prod.color}25`,
                          }}
                        >
                          {prod.tag}
                        </span>
                      </div>

                      <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
                        {prod.name}
                      </h2>

                      <p className="text-sm sm:text-base text-[#9AA3B2] leading-relaxed">
                        {prod.purpose}
                      </p>

                      {/* 5 Feature Bullets */}
                      <div className="space-y-2.5 pt-2">
                        {prod.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: prod.color }}
                            />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats Micro Row */}
                      <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/5">
                        {prod.stats.map((s, sIdx) => (
                          <div key={sIdx} className="p-3 rounded-xl bg-[#151821] border border-white/5 text-center">
                            <div className="font-display font-bold text-base text-white">{s.value}</div>
                            <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">{s.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Request Demo Button */}
                      <div className="pt-2">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold font-mono tracking-wider transition-all duration-300 hover:shadow-lg"
                          style={{
                            backgroundColor: prod.color,
                            color: '#000000',
                          }}
                        >
                          <span>Request Live Demo</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Mockup Column (Span 5) */}
                    <div className="md:col-span-5 relative z-10">
                      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group bg-[#151821]">
                        <img
                          src={prod.mockupImg}
                          alt={prod.name}
                          className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1117] via-transparent to-transparent opacity-80" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#22FF9A] animate-pulse" />
                            Live Deployment
                          </span>
                          <span className="text-[10px] text-slate-400">PostgreSQL Cloud</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

          {/* Sticky Side Index (Span 3) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 p-6 rounded-2xl bg-[#0F1117] border border-white/10 space-y-4 shadow-xl">
              <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider pb-3 border-b border-white/10 flex items-center justify-between">
                <span>PLATFORM INDEX</span>
                <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
              </div>

              <div className="space-y-1.5">
                {PRODUCTS.map((prod) => {
                  const isActive = activeProductInView === prod.id
                  return (
                    <a
                      key={prod.id}
                      href={`#${prod.id}`}
                      className={`block px-3.5 py-2.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                        isActive
                          ? 'bg-white/10 text-white font-bold border-l-2 border-[#00D4FF]'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{prod.name}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                        )}
                      </div>
                    </a>
                  )
                })}
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[11px] text-[#9AA3B2] leading-relaxed">
                  Need a bespoke system not listed here? We engineer completely custom business software.
                </div>
                <Link
                  to="/contact"
                  className="mt-3 block text-center px-4 py-2 rounded-xl bg-[#151821] border border-white/10 text-xs font-mono text-[#00D4FF] hover:border-[#00D4FF]/40 transition-colors"
                >
                  Custom Request &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. UNIFIED INTEGRATION STRIP (HOW PRODUCTS CONNECT)
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-b from-[#151821] to-[#0F1117] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <EyebrowPill dotColor="bg-[#22FF9A]">UNIFIED TELEMETRY MESH</EyebrowPill>
            <h2 className="mt-4 font-display font-bold text-2xl sm:text-4xl text-white tracking-tight">
              How DASA Products Connect via ERP + IoT + AI Core.
            </h2>
            <p className="mt-3 text-sm text-[#9AA3B2]">
              All platforms share a unified event stream, eliminating data silos between factories, sales counters, and executive decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0F1117] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Physical Edge Telemetry</h3>
              <p className="text-xs text-[#9AA3B2] leading-relaxed">
                LoRa mesh and Siemens PLCs ingest machine cycles, sensor logs, and RFID attendance at sub-second intervals directly from physical sites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1117] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#22FF9A]/10 text-[#22FF9A] flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">AI Vision &amp; Inference</h3>
              <p className="text-xs text-[#9AA3B2] leading-relaxed">
                Real-time edge neural networks inspect manufacturing defects, verify batch numbers, and index faces without transmitting raw video to cloud.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0F1117] border border-white/5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 text-[#00D4FF] flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">High-Throughput ERP Core</h3>
              <p className="text-xs text-[#9AA3B2] leading-relaxed">
                Aggregates all operations into unified PostgreSQL ledgers, calculating tax, stock FIFO reconciliation, and executive KPI intelligence in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CTA BAND
      ─────────────────────────────────────────────────────────────── */}
      <CtaBand
        eyebrow="READY TO DEPLOY"
        title="Schedule an On-Premise Demonstration."
        description="Experience our software platforms in action with your own sample operational data. Contact our engineering team for a customized walkthrough."
      />

    </main>
  )
}
