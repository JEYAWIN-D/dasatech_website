import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory, Cpu, Layers, Activity, Gauge, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Check, Clock, Wrench,
  Boxes, FileText, Search, RefreshCw, AlertTriangle, Radio, ShieldCheck,
  Smartphone, TrendingUp, Zap, BarChart3, Users, QrCode, Shield,
  CheckCircle, ArrowUpRight, Scissors, Eye, Maximize2, GitBranch,
  Sliders, Calendar, UserCheck, ShieldAlert, Monitor, Terminal, Lock
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA TEXFLOW: IOT TEXTILE ERP & NFC SMART MES
// Theme: High-Tech Industrial Warm Stone & Deep Electric Charcoal
// Visual Style: Spacious, Modern, Editorial Typography, Multi-Screen Breathing Room
// ─────────────────────────────────────────────────────────────

const TEXFLOW_SCREEN_ASSETS = [
  {
    id: 'digital-twin',
    module: 'Digital Twin SCADA',
    title: 'Live 2D/3D Factory Floor Digital Twin & Workstation Telemetry',
    subtitle: 'Real-time WebSocket mapping broadcasting machine states, line velocity, active bundle progression, and line balancing rates across sewing lines.',
    tag: 'Digital Twin SCADA',
    img: '/smart-garment-iot-factory.jpg',
    route: 'app.dasatech.com/texflow/digital-twin',
    specs: ['Sub-100ms WebSocket Stream', 'Color-Coded Status Heatmap', 'Interactive Machine Detail Drawer']
  },
  {
    id: 'nfc-terminals',
    module: 'Hardware Terminal MES',
    title: 'Dual-Tap Touchscreen IoT Terminals & Operator Kiosks',
    subtitle: 'Industrial touchscreen interface validating worker ID cards and bundle tags with sub-second Scan-IN and Scan-OUT cycles.',
    tag: 'Hardware NFC MES',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/nfc-terminals',
    specs: ['Dual-Tap NFC Verification', 'Offline Buffering', 'Sub-100ms Scan Response']
  },
  {
    id: 'auto-scheduler',
    module: 'AI Auto-Scheduler',
    title: 'Smart Production Planning Center & SAM Line Balancing',
    subtitle: 'Dynamic line balancing using Standard Allowed Minutes (SAM), operation sequence trees, and algorithmic worker skill grade matching.',
    tag: 'AI Line Balancing',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/planning',
    specs: ['SAM / SMV Matrix Engine', 'Gantt & Kanban Timeline', 'Automated Tag Pool Provisioning']
  },
  {
    id: 'sequential-gating',
    module: 'Sequential Gating Engine',
    title: 'Cryptographic Sequential Routing & Anti-Fraud Security',
    subtitle: 'Physically blocks station scans if prior routing tasks were skipped, preventing out-of-order bundles and piece-rate incentive fraud.',
    tag: 'Anti-Fraud Security',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/sequential-gating',
    specs: ['Zero Operation Skipping', 'Cryptographic SHA-256 Audit', 'Dispute Elimination']
  },
  {
    id: 'two-tier-qc',
    module: 'Two-Tier Quality Control',
    title: 'Two-Tier Quality Control (Line QC & Final QC) with Digital Rework',
    subtitle: 'Granular defect logging with automated reverse-routing to the exact operator and machine for instantaneous flaw containment.',
    tag: 'Quality Control MES',
    img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/qc-station',
    specs: ['Line QC + Final Inspection', 'Automated Reverse Rework Trace', 'Defect Pareto Analytics']
  },
  {
    id: 'workforce-matrix',
    module: 'Workforce Skill Matrix',
    title: 'Dynamic Operator Skill & Grade Validation Matrix (Grades A to D)',
    subtitle: 'Digital worker NFC profiles matching operator proficiencies with certified sewing machines to prevent needle breaks and quality flaws.',
    tag: 'Skill Matrix',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/workforce',
    specs: ['Grade A-D Hierarchy', 'Machine Authorization Lock', 'NFC Shift Attendance']
  },
  {
    id: 'raw-materials',
    module: 'Raw Materials & Warehouse',
    title: 'Raw Fabric & Yarn Lot Reservation & Automated Supplier Orders',
    subtitle: 'Real-time allocation of fabric rolls, trims, and cotton yarn lots with barcode tagging and automated inventory reorder triggers.',
    tag: 'Raw Materials Ledger',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/raw-materials',
    specs: ['Roll Barcode Tracking', 'Auto Supplier Reorder', 'Lot Reservation Guard']
  },
  {
    id: 'executive-bi',
    module: 'Executive BI & Payroll',
    title: 'Overall Equipment Effectiveness (OEE) & Piece-Rate Payroll',
    subtitle: 'Automated calculation of line availability, performance velocity, and quality yield with 100% verifiable piece-rate payroll exports.',
    tag: 'Executive Analytics',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/texflow/mill-bi',
    specs: ['Availability / Perf / Yield', 'Piece-Rate Payroll Sync', 'Excel & PDF One-Click Export']
  }
]

// ─────────────────────────────────────────────────────────────
// REAL-TIME SHOP FLOOR MACHINE TELEMETRY & STATUS DATA (6 STATIONS)
// ─────────────────────────────────────────────────────────────
const FLOOR_MACHINES = [
  {
    id: 'mch-01',
    code: 'SNLS-01',
    name: 'Single Needle Lockstitch',
    model: 'Juki DDL-9000C',
    operation: 'Collar & Yoke Assembly',
    operator: 'Priya S.',
    grade: 'Grade A',
    card: 'CARD-884',
    status: 'running',
    speed: '4,400 SPM',
    bundle: 'NFC-TAG-7041',
    pcs: '52 / 60 Pcs',
    progress: 86,
    sam: '1.45 min',
    efficiency: '98.2%',
    temp: '41°C',
    alert: null
  },
  {
    id: 'mch-02',
    code: 'OVR-02',
    name: '4-Thread Overlock',
    model: 'Pegasus M900',
    operation: 'Side Seam & Underarm Join',
    operator: 'Anitha M.',
    grade: 'Grade A',
    card: 'CARD-612',
    status: 'running',
    speed: '5,200 SPM',
    bundle: 'NFC-TAG-7038',
    pcs: '58 / 60 Pcs',
    progress: 96,
    sam: '1.20 min',
    efficiency: '96.4%',
    temp: '44°C',
    alert: null
  },
  {
    id: 'mch-03',
    code: 'FLT-03',
    name: 'Flatlock Seamer',
    model: 'Yamato FD-62SD',
    operation: 'Bottom Hemming & Cuff',
    operator: 'Ramesh K.',
    grade: 'Grade B',
    card: 'CARD-309',
    status: 'defect',
    speed: '0 SPM',
    bundle: 'NFC-TAG-7032',
    pcs: '18 / 60 Pcs',
    progress: 30,
    sam: '1.80 min',
    efficiency: '74.0%',
    temp: '38°C',
    alert: 'Skip stitch at hem — Bundle auto-routed to rework'
  },
  {
    id: 'mch-04',
    code: 'BTN-04',
    name: 'Computerized Button Holer',
    model: 'Brother HE-800C',
    operation: 'Front Placket Button Hole',
    operator: 'Suresh V.',
    grade: 'Grade B',
    card: 'CARD-441',
    status: 'running',
    speed: '3,800 SPM',
    bundle: 'NFC-TAG-7029',
    pcs: '42 / 60 Pcs',
    progress: 70,
    sam: '0.85 min',
    efficiency: '94.8%',
    temp: '40°C',
    alert: null
  },
  {
    id: 'mch-05',
    code: 'SNLS-05',
    name: 'Single Needle Lockstitch',
    model: 'Juki DDL-8700',
    operation: 'Sleeve Attachment',
    operator: 'Lakshmi P.',
    grade: 'Grade A',
    card: 'CARD-520',
    status: 'maintenance',
    speed: '0 SPM',
    bundle: 'NFC-TAG-7026',
    pcs: '24 / 60 Pcs',
    progress: 40,
    sam: '1.30 min',
    efficiency: '61.5%',
    temp: '48°C',
    alert: 'Needle deflection & thread break — Tech dispatched'
  },
  {
    id: 'mch-06',
    code: 'LQC-06',
    name: 'Digital Quality Control Kiosk',
    model: 'DASA Smart Q1',
    operation: '100% In-Line Defect Audit',
    operator: 'Rajesh (QC)',
    grade: 'Auditor A',
    card: 'CARD-QC01',
    status: 'idle',
    speed: '180 Pcs/Hr',
    bundle: 'Waiting Feed',
    pcs: '0 / 60 Pcs',
    progress: 0,
    sam: '0.90 min',
    efficiency: '99.1%',
    temp: '35°C',
    alert: 'Awaiting next bundle transfer — Station buffer ready'
  }
]

export default function FactoryErpProductView() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(4) // Default to Shop Floor Execution
  const [isScannedOut, setIsScannedOut] = useState(false)
  const [selectedMachineState, setSelectedMachineState] = useState('running')
  const [selectedMachineId, setSelectedMachineId] = useState('mch-01')
  const [machineFilter, setMachineFilter] = useState('all')
  const [floorViewMode, setFloorViewMode] = useState('grid') // 'grid' | 'camera'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // 1. Measurable Business Impact (ROI Metrics)
  const ROI_METRICS = [
    {
      metric: '+25%',
      label: 'Increase in Line Balancing Efficiency',
      desc: 'Real-time bottleneck detection enables supervisors to redeploy operators before pile-ups occur.',
      icon: TrendingUp,
      accent: '#EA580C'
    },
    {
      metric: '90%',
      label: 'Reduction in Administrative Logging Time',
      desc: 'Replaces manual daily data entry by floor clerks with instant digital logging.',
      icon: Zap,
      accent: '#F59E0B'
    },
    {
      metric: '100%',
      label: 'Piece-Rate Accuracy',
      desc: 'Eliminates lost bundles and disputed incentive payouts with verifiable worker ID scans.',
      icon: ShieldCheck,
      accent: '#10B981'
    },
    {
      metric: '40%',
      label: 'Faster Turnaround on Defect Resolution',
      desc: 'Immediate feedback loops prevent defective batches from travelling downstream.',
      icon: Clock,
      accent: '#6366F1'
    }
  ]

  // 2. The 7-Step End-to-End System Workflow
  const WORKFLOW_STAGES = [
    {
      step: '01',
      title: 'Master Setup & Configuration',
      badge: 'Plant Architecture',
      desc: 'Define company hierarchy across facilities: Buildings ➔ Floors ➔ Rooms ➔ Lines ➔ Machine Grids. Register hardware terminal IP addresses, machine types, and provision secure worker NFC ID badges (CARD-XXX).',
      points: ['Facility Machine Grids', 'Hardware Terminal Mapping', 'Encrypted Worker Badges']
    },
    {
      step: '02',
      title: 'Planning & Auto-Scheduling',
      badge: 'SAM & Skill Match',
      desc: 'Order intake captures buyer style specifications and Standard Allowed Minutes (SAM/SMV). An algorithmic recommendation engine evaluates operator skill certifications (Grades A–D) and machine uptime to compute an optimal resource pairing score (0–100%).',
      points: ['SAM / SMV Matrix', 'AI Worker Grade Match', 'Gantt & Kanban Timeline']
    },
    {
      step: '03',
      title: 'NFC Bundle Provisioning',
      badge: 'Zero Paper Chits',
      desc: 'Cutting tables split production work orders into physical bundles (50–60 pieces). High-durability NFC tags (NFC-TAG-XXXX) are automatically bound to the bundle lot, replacing torn, misplaced, or forged paper tickets forever.',
      points: ['Durable Reusable Tags', 'Automated Pool Provisioning', 'Cryptographic Lot Binding']
    },
    {
      step: '04',
      title: 'Shift Allocation & Attendance',
      badge: 'Station Assignment',
      desc: 'Operators clock into shifts (Morning, Evening, Night) by tapping their personal NFC badge at their workstation. The system verifies attendance, enforces machine certifications, and opens station clearance.',
      points: ['NFC Shift Clock-In', 'Skill Clearance Guard', 'Automated Break Rosters']
    },
    {
      step: '05',
      title: 'Shop-Floor Execution via Terminals',
      badge: 'Dual-Tap Gating',
      desc: 'At each workstation, operators execute a Dual-Tap: [Worker Card] + [Bundle Tag]. Sequential Gating strictly verifies that the preceding operation was scanned and approved. Cycle times are monitored against standard SAM in sub-second WebSocket streams.',
      points: ['Dual-Tap Authentication', 'Anti-Fraud Sequential Gate', 'Scan-IN & Scan-OUT Cycle']
    },
    {
      step: '06',
      title: 'Two-Tier Quality Control (QC)',
      badge: 'Line QC & Final QC',
      desc: 'Inspectors perform mid-line checks (Line QC) and final packaging audits (Final QC). Defective bundles are immediately flagged with granular flaw tags (skip stitches, tension errors) and reverse-routed to the exact operator and machine.',
      points: ['Line QC Mid-Checks', 'Reverse Rework Traceability', 'Defect Pareto Analytics']
    },
    {
      step: '07',
      title: 'Executive Dashboard & Dispatch',
      badge: 'Live Digital Twin',
      desc: 'Plant managers monitor a live 2D/3D plant digital twin with color-coded machine statuses. Finished garment cartons are barcode-scanned for automated packing manifests and 100% auditable piece-rate payroll exports.',
      points: ['2D/3D Digital Twin Layout', 'Real-Time OEE Telemetry', 'Piece-Rate Payroll Export']
    }
  ]

  // 3. Industry Problem vs. FactoryOS Solution Matrix
  const PROBLEM_SOLUTION_DATA = [
    {
      problem: 'The "Black Box" Factory Floor',
      problemDesc: 'Operations managers only discover line bottlenecks, operator delays, or machine breakdowns hours or days later during manual end-of-day tallying.',
      solution: 'Sub-Second Digital Twin Layout',
      solutionDesc: 'Real-time WebSocket telemetry broadcasts machine states, line velocity, and operator outputs instantly onto an interactive 2D/3D plant floor layout.'
    },
    {
      problem: 'Lost & Damaged Paper Bundle Tickets',
      problemDesc: 'Garment bundles carry paper chits that tear, smudge, get misplaced, or get forged, triggering payroll disputes and inventory chaos.',
      solution: 'Encrypted NFC Tag Tracking',
      solutionDesc: 'Durable NFC/RFID tags attached to physical bundles maintain an immutable, cryptographic audit trail with verifiable operator timestamps.'
    },
    {
      problem: 'Out-of-Sequence Manufacturing',
      problemDesc: 'Workers skip difficult operations or grab bundles out of order to claim higher piece-rate incentives, leading to catastrophic assembly defects.',
      solution: 'Automated Sequential Gating',
      solutionDesc: 'Kiosk terminals physically reject and block a scan if the preceding operation in the product routing sequence was not verified and scanned out.'
    },
    {
      problem: 'Mismatched Operator Skills & Machines',
      problemDesc: 'Uncertified operators operate complex specialty machines, leading to needle breaks, premature machine wear, and high scrap rates.',
      solution: 'Skill Matrix & Grade Validation',
      solutionDesc: 'System validates operator grade (Grades A to D) and machine certifications on every tap before granting operational clearance.'
    },
    {
      problem: 'Delayed Quality Control Feedback',
      problemDesc: 'Defects are often caught only at final packaging, after hundreds of units have already repeated the same flaw down the line.',
      solution: 'Two-Tier QC & Reverse Rework Loops',
      solutionDesc: 'Defective bundles caught at Line QC are immediately routed into digital rework loops, alerting supervisors and tracing the fault to the exact machine and operator.'
    }
  ]

  // 4. Core Modules Deep Dive
  const CORE_MODULES_DEEP_DIVE = [
    {
      num: '01',
      title: 'Smart Production Planning & Auto-Scheduler',
      summary: 'Automate operation sequences, SAM calculations, and AI worker-to-machine pairings.',
      features: [
        'Define sequence of operations for every garment style with Standard Allowed Minutes (SAM / SMV).',
        'Algorithmic match score (0–100%) evaluates operator grade (A–D), skill certifications, and machine uptime.',
        'Automatically provisions production bundles and binds them to reusable pool tags upon publishing the plan.',
        'Interactive Gantt and Kanban timeline views showing planned vs. actual start and completion times.'
      ]
    },
    {
      num: '02',
      title: 'Shop Floor NFC IoT Terminal System',
      summary: 'Sub-second kiosk execution with cryptographic dual-tap verification and sequential gating.',
      features: [
        'Dual-Authentication: Operator taps personal NFC ID card and scans the bundle tag on the terminal.',
        'Sequential Gating Engine: Physically blocks scan execution if the previous mandatory task was not completed.',
        'Scan-In / Scan-Out Lifecycle: Logs worker, station, and timestamp; transitions machine to actively running.',
        'Standalone Touchscreen Kiosk UI: Dedicated full-screen interface built for industrial line touchscreens.'
      ]
    },
    {
      num: '03',
      title: 'Interactive Factory Digital Twin (2D / 3D Layout)',
      summary: 'Hierarchical visual representation of physical plant operations in real time.',
      features: [
        'Hierarchical facility mapping: Buildings ➔ Floors ➔ Rooms ➔ Lines ➔ Machine Grids.',
        'Color-coded machine states: 🟢 Running (Active), 🟡 Idle (Waiting), 🟠 Maintenance, ⚪ Offline.',
        'Live Machine Details Drawer: Click any station to view IP, assigned operator, active bundle, and cycle pace.',
        'Live WebSocket telemetry pushing machine state transitions in under 100ms.'
      ]
    },
    {
      num: '04',
      title: 'Workforce Management & Dynamic Skill Matrix',
      summary: 'Enforce operator grade standards and digital attendance across all factory shifts.',
      features: [
        'Digital Worker ID Cards: Provision each operator with a secure NFC identifier (CARD-XXX).',
        'Skill Certification Matrix: Workers are graded (A, B, C, D) and certified on specific machines (SNLS, Overlock, Flatlock).',
        'Shift Rosters & Attendance: Automate Morning, Evening, and Night shifts with station-tap attendance logging.',
        'Automated piece-rate incentive calculations based on validated completed bundle operations.'
      ]
    },
    {
      num: '05',
      title: 'Multi-Tier Quality Control & Rework Management',
      summary: 'Catch flaws at the needle with mid-line and end-of-line digital inspection audits.',
      features: [
        'Dual-Stage Auditing: Supports both Line QC (in-line inspection) and Final QC (end-of-line audits).',
        'Granular Defect Logging: Categorize flaws (skip stitches, oil marks, measurement variance, tension issues).',
        'Digital Rework Loop: Defective bundles are reverse-routed to the exact responsible operator without losing history.',
        'Defect Pareto analytics highlighting machines and styles generating recurring quality issues.'
      ]
    },
    {
      num: '06',
      title: 'Executive Analytics & Reporting Suite',
      summary: 'Complete plant visibility with OEE dials, line balance curves, and exportable audits.',
      features: [
        'Overall Equipment Effectiveness (OEE): Automated calculation of Availability, Performance, and Quality rates.',
        'Bottleneck Discovery: Visual heatmaps highlighting stations where WIP bundles are accumulating.',
        'Exportable Audit Reports: One-click generation of production logs, shift attendance, and defect reports in Excel and PDF.',
        'Built-in sandbox demo engine to simulate attendance, bundle flow, and machine breakdowns without hardware.'
      ]
    }
  ]

  const handleSimulateTap = () => {
    setIsScannedOut(!isScannedOut)
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#EA580C] selection:text-white pt-24 select-none font-sans antialiased">

      {/* ── BREADCRUMB NAVIGATION ──────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-4 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <ol className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <li>
              <Link to="/" className="hover:text-[#EA580C] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-[#EA580C] transition-colors">Products</Link>
            </li>
            <li>/</li>
            <li className="text-[#EA580C] font-bold" aria-current="page">
              IoT Textile ERP
            </li>
          </ol>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#EA580C] bg-white hover:bg-[#FFF7ED] border border-[#E9E2F5] hover:border-[#FDBA74] px-4 py-2 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </nav>

      {/* ── 1. HERO SECTION: ELEGANT & WELL-BALANCED ─── */}
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-18 bg-gradient-to-b from-[#FFF7ED] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-8 lg:space-y-10">
          
          {/* Top Hero Text Header (Clean & Unrushed) */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-[#EA580C] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-[#EA580C] animate-pulse" />
              <span>NFC SMART FACTORY ERP &amp; REAL-TIME MES</span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight">
              IoT Textile ERP
            </h1>

            <p className="font-display font-bold text-base sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#C2410C] to-[#EAB308]">
              Smart Factory &amp; NFC Manufacturing Execution System
            </p>

            <p className="font-body text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Eliminate paper tickets, stop production blind spots, and monitor your entire textile shop floor in real time with encrypted NFC cards and live floor telemetry.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-[#EA580C]/25 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Request Live Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#end-to-end-workflow"
                className="px-6 py-3 rounded-full bg-white hover:bg-[#FFF7ED] text-[#17121F] font-display font-bold text-xs sm:text-sm border border-[#E9E2F5] hover:border-[#FDBA74] transition-all shadow-2xs"
              >
                <span>Explore Architecture</span>
              </a>
            </div>
          </div>

          {/* Grand Visual Centerpiece: Ultra-Premium Factory Floor SCADA & Digital Twin */}
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-[#0B0D14] shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              
              {/* Sleek 2-Tier SCADA Control Header */}
              <div className="p-5 sm:p-6 bg-[#121522] border-b border-white/[0.08] space-y-4">
                
                {/* Top Tier: Title, Telemetry Ping & View Switcher */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative flex items-center justify-center">
                      <span className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="absolute w-5 h-5 rounded-full bg-emerald-400/30 animate-ping" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide flex items-center gap-2.5">
                        <span>Sewing Line 03: Live Digital Twin</span>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                          WebSocket: 38ms
                        </span>
                      </h3>
                      <p className="text-xs text-slate-400 font-normal mt-0.5">
                        Real-time shop floor workstation telemetry, piece velocity, and defect containment.
                      </p>
                    </div>
                  </div>

                  {/* View Switcher: Workstations vs Floor Photo */}
                  <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/[0.08] text-xs font-mono shrink-0 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={() => setFloorViewMode('grid')}
                      className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                        floorViewMode === 'grid'
                          ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Activity className="w-3.5 h-3.5" />
                      <span>Workstations Grid</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFloorViewMode('camera')}
                      className={`px-3.5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                        floorViewMode === 'camera'
                          ? 'bg-[#EA580C] text-white font-bold shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Floor Camera</span>
                    </button>
                  </div>
                </div>

                {/* Bottom Tier: Spacious Filter Pills */}
                <div className="flex items-center gap-2 pt-1 overflow-x-auto text-xs font-mono">
                  {[
                    { id: 'all', label: 'All Workstations (6)' },
                    { id: 'running', label: '● Running (3)', color: 'text-emerald-400' },
                    { id: 'defect', label: '▲ Defect Alert (1)', color: 'text-rose-400' },
                    { id: 'maintenance', label: '⚙ Maintenance (1)', color: 'text-orange-400' },
                    { id: 'idle', label: '○ Buffer / Idle (1)', color: 'text-amber-400' }
                  ].map((flt) => {
                    const isCurrent = machineFilter === flt.id
                    return (
                      <button
                        key={flt.id}
                        type="button"
                        onClick={() => setMachineFilter(flt.id)}
                        className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                          isCurrent
                            ? 'bg-white/15 text-white font-bold shadow-xs border border-white/20'
                            : `${flt.color || 'text-slate-400'} hover:text-white hover:bg-white/5 border border-transparent`
                        }`}
                      >
                        {flt.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* ── VIEW A: SPACIOUS 3-COLUMN WORKSTATION GRID ───────── */}
              {floorViewMode === 'grid' ? (
                <div className="p-6 sm:p-7 bg-[#090B12]">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FLOOR_MACHINES
                      .filter((m) => machineFilter === 'all' ? true : m.status === machineFilter)
                      .map((mch) => {
                        const isSelected = selectedMachineId === mch.id
                        const isRunning = mch.status === 'running'
                        const isDefect = mch.status === 'defect'
                        const isIdle = mch.status === 'idle'
                        const isMaint = mch.status === 'maintenance'

                        let statusBadge = (
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Running</span>
                          </span>
                        )

                        if (isDefect) {
                          statusBadge = (
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center gap-1.5 animate-pulse">
                              <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                              <span>Defect Alert</span>
                            </span>
                          )
                        } else if (isIdle) {
                          statusBadge = (
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                              <span>Buffer / Idle</span>
                            </span>
                          )
                        } else if (isMaint) {
                          statusBadge = (
                            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-orange-500/10 text-orange-300 border border-orange-500/20 flex items-center gap-1.5">
                              <Wrench className="w-3 h-3 text-orange-400 shrink-0" />
                              <span>Maintenance</span>
                            </span>
                          )
                        }

                        return (
                          <div
                            key={mch.id}
                            onClick={() => setSelectedMachineId(mch.id)}
                            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 bg-[#131622] ${
                              isSelected
                                ? 'border-[#EA580C] ring-2 ring-[#EA580C]/40 bg-[#181C2B] shadow-xl'
                                : isDefect
                                ? 'border-rose-500/40 hover:border-rose-500/80 hover:bg-[#1A1524]'
                                : 'border-slate-800/90 hover:border-slate-700 hover:bg-[#181C28]'
                            }`}
                          >
                            {/* Card Top: Code + Status Badge */}
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-mono text-xs font-bold text-white tracking-wider">
                                {mch.code}
                              </span>
                              {statusBadge}
                            </div>

                            {/* Card Middle: Machine Name & Complete Operation */}
                            <div className="space-y-1">
                              <div className="text-sm font-display font-bold text-slate-100 leading-snug">
                                {mch.name}
                              </div>
                              <div className="text-xs text-slate-400 font-mono leading-relaxed">
                                {mch.model} &bull; {mch.operation}
                              </div>
                            </div>

                            {/* Operator Assigned with Full Legibility */}
                            <div className="flex items-center justify-between text-xs font-mono text-slate-300 border-t border-white/[0.06] pt-3">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-white/10 text-[10px] text-slate-300 flex items-center justify-center font-bold">
                                  {mch.operator.charAt(0)}
                                </span>
                                <span>{mch.operator}</span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#FDBA74] border border-white/10">
                                {mch.grade}
                              </span>
                            </div>

                            {/* Bottom Telemetry Status / Alert Box */}
                            <div className="pt-1">
                              {isRunning && (
                                <div className="space-y-1.5">
                                  <div className="flex items-center justify-between text-xs font-mono text-emerald-400 font-bold">
                                    <span>{mch.speed}</span>
                                    <span>{mch.pcs}</span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                    <div
                                      className="h-full bg-emerald-400 rounded-full"
                                      style={{ width: `${mch.progress}%` }}
                                    />
                                  </div>
                                </div>
                              )}

                              {isDefect && (
                                <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-xs font-mono text-rose-300 leading-relaxed">
                                  {mch.alert}
                                </div>
                              )}

                              {isIdle && (
                                <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs font-mono text-amber-300 leading-relaxed">
                                  {mch.alert}
                                </div>
                              )}

                              {isMaint && (
                                <div className="p-2.5 rounded-xl bg-orange-950/30 border border-orange-500/20 text-xs font-mono text-orange-300 leading-relaxed">
                                  {mch.alert}
                                </div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              ) : (
                /* ── VIEW B: SMART GARMENT FACTORY PHOTOGRAPH ─────────── */
                <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/smart-garment-iot-factory.jpg"
                    alt="DASA Smart Garment & Textile Manufacturing Factory Floor"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 opacity-95"
                  />
                  
                  {/* Ambient Soft Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Floating Telemetry Overlay */}
                  <div className="absolute top-4 left-4 right-4 sm:top-8 sm:left-8 sm:right-8 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
                    <div className="px-4 py-2 rounded-2xl bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs flex items-center gap-2.5 shadow-xl">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-bold text-emerald-300">LIVE WEBSOCKET STREAM</span>
                      <span className="text-slate-400 hidden sm:inline">&bull; Sewing Line 03 Active</span>
                    </div>

                    <div className="px-4 py-2 rounded-2xl bg-[#EA580C]/90 backdrop-blur-md text-white font-mono text-xs font-bold shadow-xl">
                      PLANT OEE: 95.8% &bull; WORLD CLASS
                    </div>
                  </div>

                  {/* Bottom Floating Telemetry Highlights */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pointer-events-none">
                    <div className="p-3.5 sm:p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono">
                      <div className="text-[10px] text-slate-400">Active Bundle</div>
                      <div className="text-base sm:text-2xl font-bold text-emerald-400 mt-1">60 / 60 Pcs</div>
                      <div className="text-[10px] text-slate-400">NFC-TAG-7041</div>
                    </div>

                    <div className="p-3.5 sm:p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono">
                      <div className="text-[10px] text-slate-400">Operator ID</div>
                      <div className="text-base sm:text-2xl font-bold text-amber-300 mt-1">Priya S.</div>
                      <div className="text-[10px] text-slate-400">Grade A (Op #03)</div>
                    </div>

                    <div className="p-3.5 sm:p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono">
                      <div className="text-[10px] text-slate-400">Line Velocity</div>
                      <div className="text-base sm:text-2xl font-bold text-cyan-300 mt-1">142 Pcs/Hr</div>
                      <div className="text-[10px] text-slate-400">SAM 1.45 Min</div>
                    </div>

                    <div className="p-3.5 sm:p-5 rounded-2xl bg-black/85 backdrop-blur-md border border-white/15 text-white font-mono">
                      <div className="text-[10px] text-slate-400">Sequential Gate</div>
                      <div className="text-base sm:text-2xl font-bold text-[#FDBA74] mt-1">100% Passed</div>
                      <div className="text-[10px] text-slate-400">Zero Skipping</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Interactive Machine Inspector & NFC Console Bar */}
              {(() => {
                const activeMch = FLOOR_MACHINES.find((m) => m.id === selectedMachineId) || FLOOR_MACHINES[0]
                const isRunning = activeMch.status === 'running'
                const isDefect = activeMch.status === 'defect'
                const isIdle = activeMch.status === 'idle'
                const isMaint = activeMch.status === 'maintenance'

                return (
                  <div className="p-5 sm:p-6 bg-[#0E111A] border-t border-white/[0.08] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 text-xs font-mono">
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold shrink-0 ${
                        isDefect
                          ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                          : isIdle
                          ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          : isMaint
                          ? 'bg-orange-500/15 text-orange-400 border border-orange-500/30'
                          : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      }`}>
                        {isDefect ? <AlertTriangle className="w-5 h-5" /> : <QrCode className="w-5 h-5" />}
                      </div>

                      <div className="space-y-1">
                        <div className="font-display font-bold text-sm text-white flex flex-wrap items-center gap-2.5">
                          <span>{activeMch.code} &bull; {activeMch.name}</span>
                          <span className="text-slate-400 font-normal font-mono text-xs">({activeMch.model})</span>
                          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                            isDefect
                              ? 'text-rose-300 bg-rose-950/60 border-rose-500/40'
                              : isRunning
                              ? 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40'
                              : isIdle
                              ? 'text-amber-300 bg-amber-950/60 border-amber-500/40'
                              : 'text-orange-300 bg-orange-950/60 border-orange-500/40'
                          }`}>
                            {activeMch.status.toUpperCase()}
                          </span>
                        </div>

                        <div className="text-xs text-slate-300 font-mono leading-relaxed">
                          {isDefect && (
                            <span className="text-rose-300">
                              Defect Log: {activeMch.alert} &bull; Responsible: {activeMch.operator} ({activeMch.grade}) &bull; Bundle: {activeMch.bundle}
                            </span>
                          )}

                          {isRunning && (
                            <span className="text-slate-300">
                              Operator: {activeMch.operator} ({activeMch.grade}) &bull; Tag: {activeMch.bundle} &bull; Speed: {activeMch.speed} &bull; SAM: {activeMch.sam} &bull; OEE: {activeMch.efficiency}
                            </span>
                          )}

                          {isIdle && (
                            <span className="text-amber-300">
                              Buffer Status: {activeMch.alert} &bull; Ready for next batch feed
                            </span>
                          )}

                          {isMaint && (
                            <span className="text-orange-300">
                              Service Ticket: {activeMch.alert} &bull; Temperature: {activeMch.temp} &bull; Tech Vikram Assigned
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-auto shrink-0 pt-1 lg:pt-0">
                      {isRunning ? (
                        <button
                          type="button"
                          onClick={handleSimulateTap}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-mono font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-[#EA580C]/25 hover:scale-102"
                        >
                          <Smartphone className="w-4 h-4" />
                          <span>{isScannedOut ? 'Scan-IN Next Bundle' : 'Scan-OUT Completed Bundle'}</span>
                        </button>
                      ) : isDefect ? (
                        <button
                          type="button"
                          onClick={() => alert(`Rework Ticket #QC-7032: Flaw mapped to ${activeMch.operator} (${activeMch.code}). Bundle reverse-routed.`)}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-rose-600/25 hover:scale-102"
                        >
                          <AlertTriangle className="w-4 h-4" />
                          <span>Inspect Reverse-Rework Route</span>
                        </button>
                      ) : isMaint ? (
                        <button
                          type="button"
                          onClick={() => alert(`Maintenance Dispatch: Work Order #MO-520 assigned to Technician Vikram for needle calibration.`)}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-orange-600/25 hover:scale-102"
                        >
                          <Wrench className="w-4 h-4" />
                          <span>View Maintenance Work Order</span>
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => alert(`Buffer Manager: Priority bundle #7044 dispatched to station ${activeMch.code}.`)}
                          className="w-full sm:w-auto px-6 py-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-mono font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-amber-600/25 hover:scale-102"
                        >
                          <Boxes className="w-4 h-4" />
                          <span>Dispatch WIP Bundle</span>
                        </button>
                      )}
                    </div>
                  </div>
                )
              })()}

            </div>
          </div>

        </div>
      </section>

      {/* ── 2. MEASURABLE BUSINESS IMPACT (ROI METRICS) ────────── */}
      <section className="py-12 lg:py-16 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1 rounded-full border border-[#FDBA74]">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>MEASURABLE BUSINESS IMPACT</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#17121F] tracking-tight">
              Validated Production ROI &amp; <span className="text-color-shift">Floor Velocity</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Proven, auditable returns validated across textile mills and garment manufacturing operations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {ROI_METRICS.map((item, idx) => {
              const IconComp = item.icon
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E9E2F5] shadow-xs hover:shadow-lg hover:border-[#FDBA74] transition-all duration-300 space-y-3 relative overflow-hidden group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFEDD5] text-[#EA580C] flex items-center justify-center font-bold group-hover:scale-105 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
                      {item.metric}
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-[#17121F] mt-1">
                      {item.label}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 3. INDUSTRY PROBLEM VS. FACTORYOS SOLUTION ─────────── */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1 rounded-full border border-[#FDBA74]">
              <Shield className="w-3.5 h-3.5" />
              <span>COMPETITIVE ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#17121F] tracking-tight">
              Traditional Shop Floors vs. <span className="text-color-shift">IoT Textile ERP</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Why leading textile and garment manufacturing exporters replace fragile paper tickets with encrypted NFC MES telemetry.
            </p>
          </div>

          <div className="space-y-4 max-w-5xl mx-auto">
            {PROBLEM_SOLUTION_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center"
              >
                {/* Traditional Pain Point (5 Cols) */}
                <div className="lg:col-span-5 p-4 rounded-xl bg-rose-50/80 border border-rose-200/80 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-rose-700 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>TRADITIONAL PAIN POINT:</span>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">{item.problem}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.problemDesc}</p>
                </div>

                {/* Arrow Divider (2 Cols) */}
                <div className="lg:col-span-2 flex justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#FFEDD5] border border-[#FDBA74] flex items-center justify-center text-[#EA580C] shadow-xs">
                    <ArrowRight className="w-4 h-4 hidden lg:block" />
                    <ArrowRight className="w-4 h-4 rotate-90 lg:hidden" />
                  </div>
                </div>

                {/* The DASA TexFlow Solution (5 Cols) */}
                <div className="lg:col-span-5 p-4 rounded-xl bg-emerald-50/80 border border-emerald-200/80 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>THE IOT TEXTILE ERP ADVANTAGE:</span>
                  </div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">{item.solution}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. THE 7-STEP END-TO-END SYSTEM WORKFLOW ───────────── */}
      <section id="end-to-end-workflow" className="py-12 lg:py-16 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1 rounded-full border border-[#FDBA74]">
              <Layers className="w-3.5 h-3.5" />
              <span>END-TO-END EXECUTION LIFECYCLE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#17121F] tracking-tight leading-tight">
              The 7-Step Production Engine: <br />
              <span className="text-color-shift">From Setup to Carton Dispatch</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Click through the 7 interconnected modules orchestrating every workstation, terminal tap, and QC audit across your plant.
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 max-w-6xl mx-auto">
            {WORKFLOW_STAGES.map((st, i) => {
              const isSelected = activeWorkflowStep === i
              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveWorkflowStep(i)}
                  className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-[#FFEDD5] border-[#EA580C] shadow-md -translate-y-0.5'
                      : 'bg-white border-[#E9E2F5] hover:border-[#FDBA74]'
                  }`}
                >
                  <div className="font-mono text-[11px] font-bold text-[#EA580C]">Step {st.step}</div>
                  <div className="font-display font-bold text-xs text-[#17121F] mt-1 line-clamp-2">
                    {st.title}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active Step Detailed Console */}
          <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-[#140F0A] border-2 border-white/15 text-white shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#FDBA74] uppercase tracking-wider bg-orange-950/60 border border-orange-800/60 px-3.5 py-1 rounded-full">
                  STEP {WORKFLOW_STAGES[activeWorkflowStep].step} &bull; {WORKFLOW_STAGES[activeWorkflowStep].badge}
                </span>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-2">
                  {WORKFLOW_STAGES[activeWorkflowStep].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {WORKFLOW_STAGES[activeWorkflowStep].desc}
            </p>

            {/* Stage Technical Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              {WORKFLOW_STAGES[activeWorkflowStep].points.map((pt, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">{pt}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. DEEP-DIVE: CORE FUNCTIONAL MODULES ──────────────── */}
      <section className="py-12 lg:py-16 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8 sm:space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1 rounded-full border border-[#FDBA74]">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE SYSTEM CAPABILITIES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#17121F] tracking-tight">
              Comprehensive Deep-Dive: <span className="text-color-shift">Core Modules</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Engineered for precision shop floor operations with zero blind spots and end-to-end data integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {CORE_MODULES_DEEP_DIVE.map((mod, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] shadow-xs hover:shadow-lg hover:border-[#FDBA74] transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#EA580C] bg-[#FFEDD5] border border-[#FDBA74] px-3 py-0.5 rounded-full">
                      MODULE {mod.num}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl text-[#17121F] tracking-tight">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {mod.summary}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {mod.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. PRODUCTION MODULE IMPLEMENTATION SCREENS ───────── */}
      <ProductImplementationShowcase
        productId="factory-erp"
        productName="IoT Textile ERP"
        directScreens={TEXFLOW_SCREEN_ASSETS}
      />

      {/* ── 7. DISCOVERY SESSION & PLANT PILOT CTA ──────────────── */}
      <section className="py-14 lg:py-20 bg-[#140F0A] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6 sm:space-y-8">
          <span className="text-xs font-mono font-bold text-[#FDBA74] uppercase tracking-wider bg-orange-950/60 border border-orange-800/60 px-4 py-1.5 rounded-full">
            READY TO DIGITIZE YOUR SHOP FLOOR?
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.12]">
            Schedule an IoT Textile ERP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDBA74] to-[#EA580C]">
              Discovery Session &amp; Pilot
            </span>
          </h2>
          <p className="font-body text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Eliminate paper bundle tickets, eliminate line blind spots, and monitor your entire textile and garment shop floor in real time. Meet directly with Founder &amp; CEO Jeyawin D and our industrial automation team to pilot our IoT-enabled NFC MES platform.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-sm shadow-xl shadow-[#EA580C]/40 transition-all hover:scale-[1.02]"
            >
              <span>Schedule Plant Pilot Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#end-to-end-workflow"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-display font-bold text-sm border border-white/20 transition-all"
            >
              <span>Review 7-Step Architecture</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
