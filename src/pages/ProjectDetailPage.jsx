import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Cpu,
  Database,
  Thermometer,
  Receipt,
  Pill,
  Truck,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Users,
  Boxes,
  FileText,
  Sparkles,
  Clock,
  Lock,
  Server,
  Zap,
  AlertTriangle,
  TrendingUp,
  QrCode,
  Calendar,
  DollarSign,
  Check,
  Search,
  Building2,
  Grid3X3,
  Stethoscope,
  BadgeCheck,
  Workflow,
  Radio,
  Printer,
  ChevronRight
} from 'lucide-react'
import { Link, usePath } from '../components/Router.jsx'
import PillButton from '../components/PillButton.jsx'
import Reveal from '../components/Reveal.jsx'

export default function ProjectDetailPage() {
  const { path } = usePath()
  const [activeCapabilityTab, setActiveCapabilityTab] = useState('clinical')
  const [activeSimulatorTab, setActiveSimulatorTab] = useState('dashboard')
  const [activeArchLayer, setActiveArchLayer] = useState('gateway')
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  // 1. CAPABILITIES DATA (Distilled from 19 subsystems)
  const CAPABILITIES = [
    {
      id: 'clinical',
      title: 'Clinical E-Rx & Dispensing',
      icon: Stethoscope,
      badge: 'CLINICAL GOVERNANCE',
      shortDesc: 'Doctor digital prescribing connected directly to dispensing desk with schedule drug validation.',
      features: [
        'Electronic Prescriptions with structured dosage and duration',
        'Schedule H, H1, X, & G drug regulatory compliance flags',
        'Real-time formulary search & clinical generic substitution',
        '1-click direct push to POS cashier checkout desk'
      ],
      metric: '99.9% Dispensing Accuracy'
    },
    {
      id: 'fefo',
      title: 'FEFO Batch & Expiry Engine',
      icon: Boxes,
      badge: 'AUTOMATED ALLOCATION',
      shortDesc: 'Algorithmic First-Expiry-First-Out batch reservation eliminating shelf expiry write-offs.',
      features: [
        'Automated earliest-expiry batch selection for orders',
        'Color-coded 30/60/90-day expiry forecast radar',
        'Batch manufacturing, MRP, purchase rate & GST ledger',
        'Clinical override protection with audit trail logging'
      ],
      metric: '95% Waste Elimination'
    },
    {
      id: 'pos',
      title: 'Sub-30s POS Billing Desk',
      icon: Receipt,
      badge: 'HIGH-SPEED CHECKOUT',
      shortDesc: 'Rapid barcode-driven counter checkout with multi-split payment reconciliation.',
      features: [
        'Barcode scanner & generic name instant item lookup',
        'Split Tender: Cash, UPI BharatQR, Credit Card, Insurance',
        '<50ms client-side thermal receipt & A4 tax invoice generation',
        'Customer credit account & loyalty point reconciliation'
      ],
      metric: '< 30s Counter Time'
    },
    {
      id: 'warehouse',
      title: 'Multi-Tier Rack Topology',
      icon: Grid3X3,
      badge: 'PHYSICAL SPATIAL MAP',
      shortDesc: 'Granular 4-tier spatial mapping from central warehouse down to individual shelf compartments.',
      features: [
        'Hierarchy: Central Hub ➔ Retail Branch ➔ Rack ➔ Shelf/Bin',
        'Visual occupancy percentage and bin volume monitoring',
        'Inter-branch stock transfer manifests & transit logs',
        'Pick-list path optimization for fast order assembly'
      ],
      metric: '100% Traceability'
    },
    {
      id: 'coldchain',
      title: 'IoT Cold-Chain Telemetry',
      icon: Thermometer,
      badge: '2°C–8°C TELEMETRY',
      shortDesc: 'Continuous digital sensor telemetry for biological refrigerators with instant breach alerts.',
      features: [
        '24/7 continuous temperature & humidity telemetry ingest',
        'Strict 2°C to 8°C biological vaccine safety boundary',
        'Instant audio-visual warning broadcast upon excursion',
        'Automated compliance logs for healthcare audits'
      ],
      metric: 'Zero Spoilage'
    },
    {
      id: 'hrms',
      title: 'Integrated HRMS & Shifts',
      icon: Users,
      badge: 'WORKFORCE GOVERNANCE',
      shortDesc: 'Staff shift rosters, biometric attendance, and automated pharmacy payroll processing.',
      features: [
        '24/7 3-shift rotation rosters (Morning / Evening / Night)',
        'Daily biometric attendance logging & leave approvals',
        'Automated monthly salary slip calculation with deductions',
        '7-tier Role-Based Access Control (Admin to Cashier)'
      ],
      metric: '7 Granular Roles'
    }
  ]

  // 2. WORKFLOW PIPELINE STEPS
  const WORKFLOW_STEPS = [
    {
      step: '01',
      title: 'Multi-Source Input Ingestion',
      category: 'DATA INTAKE',
      desc: 'System ingests doctor digital prescriptions, barcode scanner reads, supplier GRN batch deliveries, or IoT temperature sensor pulses.',
      details: 'Accepts RESTful JSON payloads validated against Zod & express-validator schemas with JWT bearer token verification.'
    },
    {
      step: '02',
      title: 'Algorithmic FEFO & ACID Locking',
      category: 'BUSINESS LOGIC',
      desc: 'The FEFO engine sorts active inventory by earliest expiry (`orderBy: { expiryDate: "asc" }`) and reserves stock inside an atomic transaction.',
      details: 'Prisma client atomic transactions (`prisma.$transaction`) eliminate race conditions across concurrent billing counters.'
    },
    {
      step: '03',
      title: 'Instant POS Push & Ledger Update',
      category: 'EXECUTION & PRINT',
      desc: 'Order instantly reflects at POS. Upon cashier checkout, stock ledgers deduct atomically and client-side PDF thermal receipts generate in <50ms.',
      details: 'Updates accounts payable/receivable, customer loyalty CRM, GST tax reports, and cold-chain audit trails in real time.'
    }
  ]

  // 3. TEAM MEMBERS & DISCIPLINES
  const TEAM_ROLES = [
    {
      role: 'Lead Full-Stack Architect',
      name: 'Systems Architecture Team',
      desc: 'Designed micro-modular domain service architecture, PostgreSQL relational schema with 25+ models, and Prisma connection pooling.'
    },
    {
      role: 'Frontend UI/UX Engineer',
      name: 'Client Engineering',
      desc: 'Built React 19 operational desks, Tailwind CSS component design system, sub-30s POS workflow, and client-side jsPDF compilation.'
    },
    {
      role: 'Backend & Database Engineer',
      name: 'API & Platform Team',
      desc: 'Engineered Express.js REST API controllers, JWT RBAC security middleware, and atomic database transaction isolation pipelines.'
    },
    {
      role: 'Clinical Domain Analyst',
      name: 'Healthcare Compliance',
      desc: 'Structured medical drug formulary, Schedule H/H1/X regulatory logic, 2°C–8°C cold chain safety rules, and doctor dispensing workflows.'
    },
    {
      role: 'QA & Security Specialist',
      name: 'Verification & Reliability',
      desc: 'Conducted high-concurrency race condition tests on stock deductions, RBAC penetration tests, and cross-browser performance audits.'
    }
  ]

  const activeCap = CAPABILITIES.find((c) => c.id === activeCapabilityTab) || CAPABILITIES[0]

  return (
    <div className="min-h-screen bg-white text-[#0F172A] selection:bg-blue-600 selection:text-white pt-24 select-none">
      
      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-slate-200 bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-blue-600 font-bold">PharmaPulse ERP</span>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-200 px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Case Studies</span>
          </Link>
        </div>
      </div>

      {/* ── SECTION 1: HERO & PROJECT OVERVIEW ────────────────── */}
      <section className="relative pt-12 pb-16 px-6 sm:px-10 lg:px-16 overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50/50 via-white to-white">
        <div className="max-w-[1440px] mx-auto">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>ENTERPRISE CASE STUDY</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>PRODUCTION DEPLOYMENT</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono font-bold">
              <span>Healthcare & Pharmacy Retail</span>
            </div>
          </div>

          {/* Headline & High-Impact Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] font-display tracking-tight leading-[1.1]">
                Enterprise Pharmacy ERP & <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                  Clinical Management System
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl font-medium">
                An all-in-one, high-concurrency cloud & on-premise ERP platform engineered by DASA TECH. Unifies clinical e-prescriptions, intelligent FEFO expiry batch picking, multi-tier warehouse rack topology, IoT cold-chain telemetry, and sub-30s POS cashier checkout.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <PillButton
                  to="/contact"
                  variant="primary"
                  arrow="up-right"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25"
                >
                  Request System Architecture
                </PillButton>

                <a
                  href="#simulator"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-semibold text-sm text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-200 transition-all shadow-xs"
                >
                  <span>Explore Live Screen Simulator</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Spec Card */}
            <div className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest pb-2 border-b border-slate-100">
                Project Engineering Specs
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[11px]">System Type</span>
                  <span className="font-bold text-slate-900 text-[13px]">Full-Stack ERP & POS</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Modules</span>
                  <span className="font-bold text-blue-600 text-[13px]">19 Subsystems</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Architecture</span>
                  <span className="font-bold text-slate-900 text-[13px]">React 19 + Express</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Database</span>
                  <span className="font-bold text-slate-900 text-[13px]">PostgreSQL + Prisma</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Concurrency</span>
                  <span className="font-bold text-emerald-600 text-[13px]">ACID Multi-Counter</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Deployment</span>
                  <span className="font-bold text-slate-900 text-[13px]">Cloud & Hospital LAN</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5-KPI Strip */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Counter Transaction', value: '< 30 Sec', sub: '85% Faster Checkout', icon: Zap, color: 'text-blue-600' },
              { label: 'Expiry Waste Reduction', value: '95% Cut', sub: 'FEFO Algorithmic Pick', icon: TrendingUp, color: 'text-emerald-600' },
              { label: 'Cold-Chain Safety', value: '100%', sub: '2°C–8°C Continuous IoT', icon: Thermometer, color: 'text-cyan-600' },
              { label: 'Clinical Accuracy', value: '99.9%', sub: 'Zero Prescription Errors', icon: BadgeCheck, color: 'text-indigo-600' },
              { label: 'Tax & Audit Speed', value: '90% Saved', sub: 'Instant 1-Click GST Report', icon: Clock, color: 'text-purple-600' }
            ].map((kpi, idx) => {
              const KIcon = kpi.icon
              return (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500 font-semibold">{kpi.label}</span>
                    <KIcon className={`w-4 h-4 ${kpi.color}`} />
                  </div>
                  <div>
                    <div className={`text-2xl sm:text-3xl font-black font-display ${kpi.color}`}>
                      {kpi.value}
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 font-medium mt-0.5">
                      {kpi.sub}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 2 & 3: THE CHALLENGE VS THE SOLUTION ──────── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              PROBLEM & SOLUTION DICHOTOMY
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display">
              Transforming Pharmacy Bottlenecks into Precision Automation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              How DASA TECH replaced fragmented desktop billing and paper registers with an atomic, connected enterprise operating system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* The 4 Core Challenges */}
            <div className="p-8 sm:p-10 rounded-3xl bg-rose-50/50 border border-rose-100 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">The Operational Challenges</h3>
                  <p className="text-xs text-rose-700 font-mono">CRITICAL VULNERABILITIES IDENTIFIED</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Severe Medication Expiry Losses',
                    desc: 'Pharmacies suffered 6–10% revenue loss annually due to unmonitored shelf expiry and picking new stock over older batches.'
                  },
                  {
                    title: 'Disconnected Paper Prescriptions',
                    desc: 'Illegible doctor handwriting, slow verification queues, manual billing re-entry errors, and picking mistakes.'
                  },
                  {
                    title: 'Cold-Chain Vaccine Spoilage',
                    desc: 'High-value insulin and vaccines risked degradation due to unmonitored refrigerator temperature drift outside 2°C–8°C.'
                  },
                  {
                    title: 'Peak Counter Billing Bottlenecks',
                    desc: 'Legacy single-counter software slowed checkouts to 3–4 minutes per patient, creating long queues and frustrated customers.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-rose-100 space-y-1 shadow-2xs">
                    <div className="text-xs font-mono font-bold text-rose-800 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* The 4 Engineered Solutions */}
            <div className="p-8 sm:p-10 rounded-3xl bg-blue-50/50 border border-blue-100 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">The Engineered DASA Solution</h3>
                  <p className="text-xs text-blue-700 font-mono">AUTOMATED ALGORITHMIC GOVERNANCE</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: 'Algorithmic FEFO (First-Expiry-First-Out)',
                    desc: 'System automatically prioritizes and locks the earliest expiring batch during dispensing and POS checkout, eliminating stock waste.'
                  },
                  {
                    title: 'Direct Clinical-to-POS Pipeline',
                    desc: 'Doctors issue structured e-prescriptions. Pharmacists verify in 1 click, auto-allocating batches and dispatching directly to checkout.'
                  },
                  {
                    title: '24/7 IoT Cold-Chain Storage HUD',
                    desc: 'Continuous temperature sensor telemetry in biological refrigerators with real-time audio-visual alerts upon temperature drift.'
                  },
                  {
                    title: 'Sub-30s POS & ACID Concurrency',
                    desc: 'Multi-counter barcode checkout with split tender (Cash, Card, UPI QR, Insurance) and atomic database concurrency preventing race conditions.'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-blue-100 space-y-1 shadow-2xs">
                    <div className="text-xs font-mono font-bold text-blue-800 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 4: CORE CAPABILITIES (INTERACTIVE EXPLORER) ─ */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-[#FAF8FF]">
        <div className="max-w-[1440px] mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
                MODULAR SUBSYSTEM ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display mt-1">
                Core Capabilities & Workspaces
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md font-medium">
              19 interconnected operational subsystems unified in a single high-performance browser workspace.
            </p>
          </div>

          {/* Interactive Navigation Pills */}
          <div className="flex flex-wrap gap-2.5 p-2 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            {CAPABILITIES.map((cap) => {
              const CIcon = cap.icon
              const active = cap.id === activeCapabilityTab
              return (
                <button
                  key={cap.id}
                  onClick={() => setActiveCapabilityTab(cap.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-display text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <CIcon className="w-4 h-4" />
                  <span>{cap.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Capability Presentation Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCap.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                  {activeCap.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {activeCap.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                  {activeCap.shortDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {activeCap.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Box */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-xl flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Validated Metric</span>
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-300 font-display">
                    {activeCap.metric}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    Tested under concurrent multi-branch retail throughput
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Subsystem Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE PRODUCTION
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS (3-TIER WORKFLOW) ─────────── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              END-TO-END DATA FLOW
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display">
              How the PharmaPulse Engine Works
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              From physical input capture to ACID database processing and hardware output dispatch.
            </p>
          </div>

          {/* Interactive Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {WORKFLOW_STEPS.map((wf, idx) => {
              const active = activeWorkflowStep === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                    active
                      ? 'bg-blue-50/70 border-blue-300 shadow-md'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-black text-blue-600">
                        {wf.step}
                      </span>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                        {wf.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 font-display">
                      {wf.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {wf.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500">
                    <span className="text-slate-700 font-bold block mb-0.5">Under the Hood:</span>
                    {wf.details}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── SECTION 6: INTERACTIVE LIVE SCREEN SIMULATOR ──────── */}
      <section id="simulator" className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-[#0B0F19] text-white">
        <div className="max-w-[1440px] mx-auto space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                OPERATIONAL DESK PREVIEWS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-1">
                Interactive Workspace Simulator
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              Switch through live mockup screens to see how pharmacists, cashiers, and store managers operate PharmaPulse ERP.
            </p>
          </div>

          {/* Simulator Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl">
            {[
              { id: 'dashboard', label: 'Executive BI Dashboard', icon: BarChart3 },
              { id: 'fefo', label: 'FEFO Batch Tracker', icon: Boxes },
              { id: 'pos', label: 'Sub-30s POS Terminal', icon: Receipt },
              { id: 'clinical', label: 'Clinical Dispense Desk', icon: Stethoscope },
              { id: 'coldchain', label: 'IoT Cold Storage HUD', icon: Thermometer },
              { id: 'rack', label: 'Warehouse Rack Topology', icon: Grid3X3 }
            ].map((tab) => {
              const TIcon = tab.icon
              const active = activeSimulatorTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSimulatorTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <TIcon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Screen Simulator Canvas */}
          <div className="rounded-3xl border border-white/15 bg-slate-950 p-6 sm:p-8 shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
            
            {/* Screen Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-slate-400 ml-3">PharmaPulse v4.2 / {activeSimulatorTab.toUpperCase()}_WORKSPACE</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  PostgreSQL 16 SYNCED
                </span>
              </div>
            </div>

            {/* Screen Dynamic Content */}
            <div className="py-6">
              {activeSimulatorTab === 'dashboard' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs text-slate-400 font-mono">Today's Gross Sales</div>
                      <div className="text-2xl font-bold text-white font-mono mt-1">$28,450.00</div>
                      <div className="text-[11px] text-emerald-400 font-mono mt-1">↑ +14.2% vs yesterday</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs text-slate-400 font-mono">Active Prescriptions</div>
                      <div className="text-2xl font-bold text-blue-400 font-mono mt-1">1,428 Orders</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-1">Avg 22s dispatch</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs text-slate-400 font-mono">Cold Storage Temp</div>
                      <div className="text-2xl font-bold text-cyan-400 font-mono mt-1">4.2°C NORMAL</div>
                      <div className="text-[11px] text-cyan-400 font-mono mt-1">2°C – 8°C Boundary</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="text-xs text-slate-400 font-mono">Near-Expiry Batches</div>
                      <div className="text-2xl font-bold text-amber-400 font-mono mt-1">3 Flagged</div>
                      <div className="text-[11px] text-amber-400 font-mono mt-1">Auto-prioritized FEFO</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300">Active Outlets: Central Hub, City Dispensary #1, Apex Hospital Ward #3</span>
                    <span className="text-blue-400 font-bold">19 Modules Active</span>
                  </div>
                </div>
              )}

              {activeSimulatorTab === 'fefo' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="text-slate-300 text-sm font-bold font-display">Algorithmic FEFO Prioritization Sequence:</div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-white/10 text-slate-400">
                          <th className="py-2">Medicine / Batch No</th>
                          <th>Expiry Date</th>
                          <th>Days Left</th>
                          <th>Stock Qty</th>
                          <th>Allocation Order</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr className="bg-amber-500/10">
                          <td className="py-2.5 font-bold text-white">Augmentin 625mg (BAT-2024-09A)</td>
                          <td className="text-amber-400">2026-09-15</td>
                          <td className="text-amber-400 font-bold">28 Days</td>
                          <td>140 Boxes</td>
                          <td className="text-blue-400 font-bold">#1 PRIORITY PICK</td>
                          <td><span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300">EXPEDITE FEFO</span></td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-white">Augmentin 625mg (BAT-2024-11C)</td>
                          <td>2026-11-30</td>
                          <td>104 Days</td>
                          <td>500 Boxes</td>
                          <td className="text-slate-400">#2 Queued</td>
                          <td><span className="px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">STANDBY</span></td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-white">Augmentin 625mg (BAT-2025-04K)</td>
                          <td>2027-04-30</td>
                          <td>255 Days</td>
                          <td>1,200 Boxes</td>
                          <td className="text-slate-400">#3 Queued</td>
                          <td><span className="px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">FRESH STOCK</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeSimulatorTab === 'pos' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-bold text-white">Active Checkout Cart #POS-8842</span>
                        <span className="text-emerald-400">Customer: Apex Inpatient Ward</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-300">
                          <span>1x Amoxicillin 500mg (FEFO Batch #84)</span>
                          <span>$14.50</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>2x Paracetamol IV Infusion 100ml</span>
                          <span>$22.00</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>1x Insulin Glargine (2°C–8°C Logged)</span>
                          <span>$45.00</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-white/10 flex justify-between font-bold text-sm text-white">
                        <span>Total Payable (GST Included)</span>
                        <span className="text-emerald-400">$81.50</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 space-y-3">
                      <div className="font-bold text-blue-300">Split Payment Methods</div>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-xl bg-white/10 flex justify-between text-[11px]">
                          <span>Cash Drawer</span>
                          <span>$31.50</span>
                        </div>
                        <div className="p-2 rounded-xl bg-blue-600/30 border border-blue-400/40 flex justify-between text-[11px] text-blue-200">
                          <span>UPI BharatQR</span>
                          <span>$50.00 PAID</span>
                        </div>
                      </div>
                      <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md">
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Thermal Receipt (&lt;50ms)</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeSimulatorTab === 'clinical' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-bold text-white">Doctor E-Rx: Dr. Sarah Williams (Cardiology)</span>
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300">SCHEDULE H1 DRUG VERIFIED</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-slate-300 text-[11px]">
                      <div>Patient: John Doe (MRN-90214)</div>
                      <div>Dosage: 1 Tab PO BID x 14 Days</div>
                      <div>Dispensing Desk: Counter #2</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 text-slate-200 flex items-center justify-between">
                      <span>Assigned Batch: Atorvastatin 20mg (BAT-8839, Exp: 2026-10)</span>
                      <span className="text-emerald-400 font-bold">1-Click Pushed to POS</span>
                    </div>
                  </div>
                </div>
              )}

              {activeSimulatorTab === 'coldchain' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                      <div className="text-slate-400">Vaccine Refrigerator #01 (Main Pharmacy)</div>
                      <div className="text-3xl font-bold text-cyan-400">3.8°C</div>
                      <div className="text-[11px] text-emerald-400">STATUS: COMPLIANT (2°C ≤ Temp ≤ 8°C)</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-2">
                      <div className="text-slate-400">Biological Storage Unit #02 (Central Warehouse)</div>
                      <div className="text-3xl font-bold text-cyan-400">4.5°C</div>
                      <div className="text-[11px] text-emerald-400">STATUS: COMPLIANT (2°C ≤ Temp ≤ 8°C)</div>
                    </div>
                  </div>
                </div>
              )}

              {activeSimulatorTab === 'rack' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <div className="text-slate-300 font-bold">Warehouse Topology Hierarchy:</div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-white/10">
                        <div className="text-slate-400 text-[10px]">Zone</div>
                        <div className="font-bold text-white text-xs mt-1">Zone A (Fast Move)</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10">
                        <div className="text-slate-400 text-[10px]">Rack</div>
                        <div className="font-bold text-white text-xs mt-1">Rack #04</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10">
                        <div className="text-slate-400 text-[10px]">Compartment</div>
                        <div className="font-bold text-white text-xs mt-1">Comp #02 (Oral)</div>
                      </div>
                      <div className="p-3 rounded-xl bg-blue-600/30 border border-blue-400/40">
                        <div className="text-blue-300 text-[10px]">Shelf Bin</div>
                        <div className="font-bold text-blue-200 text-xs mt-1">Bin #A4-C2-S1</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Screen Bottom Status */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Client Runtime: React 19 + TanStack Query v5</span>
              <span>Backend ORM: Prisma v6 on PostgreSQL 16</span>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 7: SYSTEM ARCHITECTURE & TECH STACK ──────── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              ENTERPRISE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display">
              Modular 4-Layer Architecture
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              High-concurrency micro-modular controllers protected by atomic ACID transactions.
            </p>
          </div>

          {/* 4-Tier Interactive Architecture Diagram */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                id: 'presentation',
                layer: '01. PRESENTATION & CLIENT LAYER',
                tech: 'React 19 + Vite 8 + Tailwind CSS + TanStack Query',
                desc: 'Client-side reactive state cache, instant PDF/thermal receipt engine, and responsive operational workspaces.'
              },
              {
                id: 'gateway',
                layer: '02. API GATEWAY & SECURITY LAYER',
                tech: 'Express.js v5 + Helmet + JWT RBAC + Express-Validator',
                desc: 'Bearer token authorization, 7-role permission enforcement, request sanitization, and CORS headers hardening.'
              },
              {
                id: 'controllers',
                layer: '03. DOMAIN CONTROLLER SUBSYSTEMS',
                tech: 'Modular Controllers (FEFO, POS, Clinical, HRMS, IoT)',
                desc: 'Isolated business logic modules governing procurement GRN, FEFO batch prioritization, dispensing desk, and IoT telemetry.'
              },
              {
                id: 'persistence',
                layer: '04. PERSISTENCE & DATABASE LAYER',
                tech: 'Prisma ORM v6 + PostgreSQL 16 (25+ Relational Models)',
                desc: 'ACID transaction boundaries (`prisma.$transaction`), connection pooling, and strict relational data integrity.'
              }
            ].map((arch) => {
              const active = activeArchLayer === arch.id
              return (
                <div
                  key={arch.id}
                  onClick={() => setActiveArchLayer(arch.id)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    active
                      ? 'bg-blue-50/80 border-blue-400 shadow-md'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${active ? 'bg-blue-600' : 'bg-slate-400'}`} />
                      <span className="font-mono text-xs font-bold text-slate-500 uppercase">{arch.layer}</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-blue-700 bg-white px-3 py-1 rounded-full border border-slate-200">
                      {arch.tech}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-3 font-medium leading-relaxed pl-6">
                    {arch.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Technology Badges Grid */}
          <div className="pt-6 border-t border-slate-100">
            <div className="text-xs font-mono font-bold text-slate-400 text-center uppercase tracking-widest mb-6">
              Verified Production Technology Stack
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                'React 19.2',
                'Vite 8.0',
                'Tailwind CSS',
                'TanStack Query v5',
                'Node.js (ESM)',
                'Express.js v5',
                'PostgreSQL 16',
                'Prisma ORM v6',
                'JWT Security',
                'jsPDF Engine',
                'IoT Telemetry',
                'Docker & AWS'
              ].map((t, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-800 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 8: TEAM ROLES & DISCIPLINES ───────────────── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-[#FAF8FF]">
        <div className="max-w-[1440px] mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              ENGINEERING DISCIPLINES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display">
              Team & Architectural Roles
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Multidisciplinary engineering covering full-stack architecture, clinical domain modeling, and security testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_ROLES.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 px-3 py-1 rounded-full bg-blue-50 border border-blue-200">
                    {member.role}
                  </span>
                  <Users className="w-4 h-4 text-slate-400" />
                </div>
                <div className="font-bold text-slate-900 font-display text-base">
                  {member.name}
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 9: KEY OUTCOMES & BUSINESS VALUE ──────────── */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 border-b border-slate-100 bg-white">
        <div className="max-w-[1440px] mx-auto space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              MEASURED BUSINESS VALUE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] font-display">
              Validated Real-World ROI
            </h2>
            <p className="text-sm text-slate-600 font-medium">
              Tangible impact across revenue preservation, clinical accuracy, and checkout throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                metric: '85% Faster Checkout',
                title: 'Eliminated Billing Queues',
                desc: 'POS counter transactions reduced from 3–4 minutes down to under 30 seconds per customer via barcode lookup & instant split payment.'
              },
              {
                metric: '95% Waste Elimination',
                title: 'Zero Expired Stock Losses',
                desc: 'Automated FEFO batch picking algorithms prevent older medicine batches from lingering and expiring on warehouse shelves.'
              },
              {
                metric: '100% Cold Chain Safety',
                title: 'Vaccine & Insulin Integrity',
                desc: 'Continuous 2°C to 8°C temperature logging guarantees zero unmonitored temperature breaches for critical biologicals.'
              },
              {
                metric: '99.9% Clinical Accuracy',
                title: 'Zero Dispensing Errors',
                desc: 'Direct electronic prescription-to-dispensing pipeline eliminates handwriting misinterpretation and batch picking errors.'
              },
              {
                metric: '90% Audit Time Saved',
                title: 'Instant GST & Tax Compliance',
                desc: '1-click generation of GST tax filing breakdowns, Schedule drug logs, and real-time inventory valuation reports.'
              },
              {
                metric: 'Multi-Branch Scalable',
                title: 'Central Warehouse to Outlets',
                desc: 'Centralized architecture allows seamless expansion from a single flagship retail store to a 50+ hospital pharmacy chain.'
              }
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition-all"
              >
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-display">
                  {outcome.metric}
                </div>
                <div className="text-sm font-bold text-slate-900 font-display">
                  {outcome.title}
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 10: FUTURE SCOPE & CONSULTATION CTA ───────── */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1440px] mx-auto space-y-12">
          
          {/* Future Scope Grid */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
            <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">
              NEXT-GENERATION ROADMAP
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Future Scope & Planned Evolutions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'AI Demand Forecasting', desc: 'Predicting seasonal flu spikes and auto-generating optimized Purchase Orders.' },
                { title: 'WhatsApp Patient Gateway', desc: 'Automated SMS/WhatsApp digital invoices, refill reminders, and dosage alerts.' },
                { title: 'Telemedicine Integration', desc: 'Direct video doctor consults linked to instant prescription home delivery dispatch.' },
                { title: 'Direct EDI Vendor Sync', desc: 'Automated electronic data interchange with major pharmaceutical manufacturers.' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 font-display flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Impact CTA Banner */}
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 text-white shadow-xl text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs font-mono font-bold uppercase tracking-wider">
              DASA TECH CUSTOM ENTERPRISE ENGINEERING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display max-w-3xl mx-auto leading-tight">
              Ready to Engineer a Custom ERP or Mission-Critical Platform?
            </h2>

            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
              Whether you are running multi-branch pharmacy retail, hospital networks, or complex supply chain operations, DASA TECH builds custom software tailored to your workflows.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="up-right"
                size="lg"
                className="bg-white text-blue-700 hover:bg-slate-50 border-white shadow-lg font-bold"
              >
                Discuss Your ERP Project
              </PillButton>

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-sm text-white hover:bg-white/10 border border-white/30 transition-all"
              >
                <span>View More Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
