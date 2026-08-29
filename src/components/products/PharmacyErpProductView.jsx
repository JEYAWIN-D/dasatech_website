import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Pill, Scan, AlertTriangle, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Layers,
  Store, Box, ChevronRight, FileText, Search, Activity, RefreshCw,
  Thermometer, Cpu, Zap, ShoppingCart, UserCheck, Stethoscope,
  Warehouse, Truck, FileSpreadsheet, Lock, BarChart3, AlertCircle,
  Radio, Network, HardDrive, Share2, Layers3, Smartphone, Eye, Compass, Code2, Workflow, MapPin, Layout
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// PHARMAPULSE PRODUCT VIEW (pharmacy-erp)
// Title: Enterprise Pharmacy ERP & Clinical Management System
// Product Name: PharmaPulse
// Theme: Healthcare Emerald Mint (#10B981), Cyan Pulse (#06B6D4), Deep Slate (#061812)
// ─────────────────────────────────────────────────────────────

// 9 Product Implementation Screen Image Assets
const PHARMACY_ERP_SCREEN_ASSETS = [
  {
    id: 'dashboard',
    module: 'Executive Dashboard',
    title: 'Executive Sales & Clinical Telemetry Dashboard',
    subtitle: 'Real-time daily revenue, prescription velocity, stock alerts, and branch performance metrics.',
    tag: 'Executive Command Center',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/dashboard',
    specs: ['React 19 Telemetry', 'Sub-second KPIs', 'Multi-Branch Overview']
  },
  {
    id: 'billing',
    module: 'Sales & Billing',
    title: 'High-Speed Keyboard POS Billing & Thermal Receipt Engine',
    subtitle: 'Sub-second checkout interface with barcode lookup, FEFO batch selection, and thermal print sync.',
    tag: 'POS Billing Terminal',
    img: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/pos-terminal',
    specs: ['24s Checkout Latency', 'ESC/POS Printer SDK', 'Offline IndexedDB']
  },
  {
    id: 'inventory',
    module: 'Inventory Intelligence',
    title: 'FEFO Batch Expiry & Shelf Location Matrix',
    subtitle: 'Visual shelf-to-bin locator with automated color-coded expiry countdowns preventing medicine waste.',
    tag: 'FEFO Inventory Matrix',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/inventory/fefo-matrix',
    specs: ['FEFO Allocation Engine', 'Expiry Risk Forecasting', 'Batch Partitioning']
  },
  {
    id: 'procurement',
    module: 'Procurement & Supply',
    title: 'Automated Supplier Purchase Orders & Goods Receipt (GRN)',
    subtitle: '3-way invoice matching connecting purchase orders, gate receiving challans, and supplier bills.',
    tag: 'Procurement Pipeline',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/procurement/po-manager',
    specs: ['Smart Reorder Rules', '3-Way Invoice Match', 'Vendor Ledger']
  },
  {
    id: 'clinical',
    module: 'Clinical Operations',
    title: 'Digital E-Prescription Parsing & Medicine Verification',
    subtitle: 'Doctor e-prescription intake, dosage validation, and drug-drug collision prevention guard.',
    tag: 'Clinical Dispensing Vault',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/clinical/e-prescriptions',
    specs: ['99.7% Accuracy Rate', 'Drug Collision Check', 'Dosage Validation']
  },
  {
    id: 'coldchain',
    module: 'Storage & Cold Chain',
    title: 'Real-Time IoT Cold Chain Temperature & Humidity Telemetry',
    subtitle: 'Continuous wireless IoT monitoring for vaccine refrigerators and temperature-sensitive bio-therapeutics.',
    tag: 'IoT Telemetry Core',
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/coldchain/telemetry',
    specs: ['Real-Time IoT Breach Alerts', '2°C - 8°C Thermal Lock', 'Telemetry Logs']
  },
  {
    id: 'workforce',
    module: 'Workforce & Administration',
    title: 'Pharmacist HR, Attendance, Shift Schedules & Spatie RBAC',
    subtitle: 'Granular role security matrix restricting Schedule H1 narcotic register edits to licensed chief pharmacists.',
    tag: 'Workforce & Security',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/admin/permissions',
    specs: ['JWT + Spatie RBAC', 'Shift Roster Sync', 'Pharmacist Audit Log']
  },
  {
    id: 'reports',
    module: 'Analytics & Compliance',
    title: 'Automated GSTR Tax Exports & Schedule H1 Narcotics Register',
    subtitle: 'One-click tax return filing with E-Way API sync and digital regulatory narcotics compliance registers.',
    tag: 'Tax & Compliance Engine',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/reports/gst-exporter',
    specs: ['GSTR-1 & 3B XML Export', 'Schedule H1 Audit', 'Audit Anomaly Detection']
  },
  {
    id: 'warehouse',
    module: 'Rack & Warehouse',
    title: 'Hierarchical Warehouse-to-Shelf Storage Placement Optimizer',
    subtitle: 'Multi-location warehouse bin mapping prioritizing fast-moving drugs near billing counters.',
    tag: 'Storage Placement Optimizer',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/pharmapulse/warehouse/bin-locator',
    specs: ['Bin Placement Heuristics', 'Multi-Store Inventory', 'Zero Race Errors']
  }
]

export default function PharmacyErpProductView() {
  const [activeSimulatorTab, setActiveSimulatorTab] = useState('pos')
  const [activeChallengeIdx, setActiveChallengeIdx] = useState(0)
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(0)
  const [activeControlNode, setActiveControlNode] = useState(0)
  const [activeConstellationZone, setActiveConstellationZone] = useState(0)
  const [activeTechDomain, setActiveTechDomain] = useState(0)
  const [activeModuleTab, setActiveModuleTab] = useState('inventory')
  const [activeEngineIdx, setActiveEngineIdx] = useState(0)
  const [simTemp, setSimTemp] = useState(4.2)
  const [cart, setCart] = useState([
    { id: '1', name: 'Amoxicillin 500mg', batch: 'BTH-402', expiry: '2026-11-30', price: 140, qty: 2, scheduleH1: true },
    { id: '2', name: 'Paracetamol 650mg', batch: 'BTH-108', expiry: '2027-04-15', price: 50, qty: 1, scheduleH1: false }
  ])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0)
  const gst = Math.round(subtotal * 0.12)
  const grandTotal = subtotal + gst

  // 6 Connected Operations Control Rail Nodes
  const CONTROL_RAIL_NODES = [
    {
      id: 0,
      code: '01',
      title: 'FEFO Batch Intelligence',
      statusTag: 'AUTO PRIORITY SELECTED',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: Cpu,
      visualType: 'fefo',
      fefoData: [
        { batch: 'BATCH-021', exp: 'EXP: 18 DAYS', active: true },
        { batch: 'BATCH-045', exp: 'EXP: 46 DAYS', active: false },
        { batch: 'BATCH-089', exp: 'EXP: 92 DAYS', active: false }
      ]
    },
    {
      id: 1,
      code: '02',
      title: 'High-Speed POS Billing',
      statusTag: 'TRANSACTION COMPLETE',
      badgeColor: 'bg-[#6EE7B7]/20 text-[#6EE7B7] border-[#6EE7B7]/40',
      icon: Scan,
      visualType: 'pos',
      flowSteps: ['SCAN', 'VERIFY', 'PAY'],
      statMetric: '24s AVERAGE CHECKOUT'
    },
    {
      id: 2,
      code: '03',
      title: 'Digital Prescription & Dispensing',
      statusTag: 'CLINICAL VALIDATION ACTIVE',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      icon: Stethoscope,
      visualType: 'clinical',
      checks: [
        'PRESCRIPTION RECEIVED',
        'DOSAGE CHECKED',
        'MEDICINE VERIFIED'
      ]
    },
    {
      id: 3,
      code: '04',
      title: 'Cold Chain Monitoring',
      statusTag: 'LIVE SENSOR FEED',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      icon: Thermometer,
      visualType: 'coldchain',
      liveTemp: '5.2°C',
      tempRange: 'SAFE RANGE: 2°C — 8°C',
      waveform: [4.8, 5.0, 5.2, 5.1, 5.2]
    },
    {
      id: 4,
      code: '05',
      title: 'Smart Inventory & Rack Management',
      statusTag: 'EXACT STOCK LOCATION',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      icon: Warehouse,
      visualType: 'rack',
      path: ['WAREHOUSE A', 'RACK B-04', 'SHELF S-12']
    },
    {
      id: 5,
      code: '06',
      title: 'Real-Time Business Intelligence',
      statusTag: 'LIVE OPERATIONAL INSIGHTS',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      icon: BarChart3,
      visualType: 'analytics',
      metrics: [
        { label: 'REVENUE', val: '↑ 18.4%' },
        { label: 'STOCK HEALTH', val: '96%' },
        { label: 'ACTIVE ALERTS', val: '03' }
      ]
    }
  ]

  // 6 Orbital Pharmacy Operations Network Nodes
  const NETWORK_NODES = [
    {
      id: 0,
      code: '01',
      title: 'PROCUREMENT',
      status: 'SUPPLY READY',
      icon: Truck,
      badgeColor: 'bg-[#6EE7B7]/20 text-[#6EE7B7] border-[#6EE7B7]/40',
      items: ['PURCHASE ORDER', 'GRN VERIFIED', 'SUPPLIER SYNCED'],
      detailTag: 'Document & Verification Gate'
    },
    {
      id: 1,
      code: '02',
      title: 'INVENTORY',
      status: '1,284 ITEMS TRACKED',
      icon: Box,
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      items: ['BATCH CONTROL', 'LIVE STOCK', 'LOCATION TRACKING'],
      detailTag: 'Storage Rack Bin Matrix'
    },
    {
      id: 2,
      code: '03',
      title: 'FEFO ENGINE',
      status: 'EARLIEST EXPIRY LOCK',
      icon: Cpu,
      isHighlighted: true,
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      items: ['BTH-402 \u2022 EXP 2026-11-30', '\u2713 SELECTED FOR DISPENSE', 'AUTO PRIORITIZED'],
      detailTag: 'Intelligence Priority Lock'
    },
    {
      id: 3,
      code: '04',
      title: 'CLINICAL',
      status: 'SAFE TO DISPENSE',
      icon: Stethoscope,
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
      items: ['E-PRESCRIPTION', 'DOSAGE CHECKED', 'MEDICINE VERIFIED'],
      detailTag: 'Clinical Safety Check'
    },
    {
      id: 4,
      code: '05',
      title: 'POS CHECKOUT',
      status: '24s AVG CHECKOUT',
      icon: Scan,
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      items: ['BARCODE SCAN', 'PAYMENT VERIFIED', 'RECEIPT GENERATED'],
      detailTag: 'Fast Transaction Pulse'
    },
    {
      id: 5,
      code: '06',
      title: 'ANALYTICS',
      status: 'LIVE METRICS',
      icon: BarChart3,
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
      items: ['\u20b92.4L TODAY', '96% STOCK HEALTH', '03 ACTIVE ALERTS'],
      detailTag: 'Real-Time Telemetry'
    }
  ]

  // 6 Interactive PharmaPulse Module Constellation Zones Data
  const CONSTELLATION_ZONES = [
    {
      id: 0,
      code: '01',
      title: 'INVENTORY INTELLIGENCE',
      icon: Box,
      accentColor: '#10B981',
      bgGradient: 'from-emerald-50/80 via-white to-white',
      borderColor: 'border-emerald-200',
      activeBorder: 'border-emerald-500 shadow-emerald-500/20 ring-4 ring-emerald-500/10',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      capabilities: ['MEDICINE MASTER', 'BATCH CONTROL', 'FEFO', 'EXPIRY TRACKING'],
      metrics: [
        { label: 'ACTIVE BATCHES', val: '1,248' },
        { label: 'FEFO READY', val: '96%' },
        { label: 'EXPIRY WATCH', val: '18' }
      ],
      visualType: 'inventoryBlocks'
    },
    {
      id: 1,
      code: '02',
      title: 'PROCUREMENT & SUPPLY',
      icon: Truck,
      accentColor: '#3B82F6',
      bgGradient: 'from-blue-50/80 via-white to-white',
      borderColor: 'border-blue-200',
      activeBorder: 'border-blue-500 shadow-blue-500/20 ring-4 ring-blue-500/10',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      capabilities: ['SUPPLIERS', 'PURCHASE ORDERS', 'GOODS RECEIVING', 'RETURNS'],
      flowSteps: ['PO CREATED', 'GRN VERIFIED', 'STOCK SYNCED'],
      visualType: 'supplyFlow'
    },
    {
      id: 2,
      code: '03',
      title: 'CLINICAL OPERATIONS',
      icon: Stethoscope,
      accentColor: '#0D9488',
      bgGradient: 'from-teal-50/80 via-white to-white',
      borderColor: 'border-teal-200',
      activeBorder: 'border-teal-500 shadow-teal-500/20 ring-4 ring-teal-500/10',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      capabilities: ['E-PRESCRIPTIONS', 'VERIFICATION', 'DISPENSING'],
      checks: ['Rx PRESCRIPTION RECEIVED', '✓ DOSAGE VERIFIED', '✓ MEDICINE VALIDATED', '✓ READY TO DISPENSE'],
      visualType: 'clinicalValidation'
    },
    {
      id: 3,
      code: '04',
      title: 'SALES & BILLING',
      icon: Scan,
      accentColor: '#6366F1',
      bgGradient: 'from-indigo-50/80 via-white to-white',
      borderColor: 'border-indigo-200',
      activeBorder: 'border-indigo-500 shadow-indigo-500/20 ring-4 ring-indigo-500/10',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      capabilities: ['POS', 'BARCODE BILLING', 'PAYMENTS', 'RETURNS'],
      beamSteps: ['SCAN', 'VERIFY', 'PAY', 'RECEIPT'],
      avgCheckout: '24s',
      visualType: 'salesBeam'
    },
    {
      id: 4,
      code: '05',
      title: 'STORAGE & COLD CHAIN',
      icon: Thermometer,
      accentColor: '#06B6D4',
      bgGradient: 'from-cyan-50/80 via-white to-white',
      borderColor: 'border-cyan-200',
      activeBorder: 'border-cyan-500 shadow-cyan-500/20 ring-4 ring-cyan-500/10',
      badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      capabilities: ['WAREHOUSE', 'RACK MANAGEMENT', 'COLD STORAGE', 'IOT MONITORING'],
      tempData: { range: '2°C ━━━━━●━━━━━ 8°C', current: '4.6°C', status: 'NORMAL' },
      visualType: 'coldChainRange'
    },
    {
      id: 5,
      code: '06',
      title: 'WORKFORCE & ADMINISTRATION',
      icon: UserCheck,
      accentColor: '#8B5CF6',
      bgGradient: 'from-purple-50/80 via-white to-white',
      borderColor: 'border-purple-200',
      activeBorder: 'border-purple-500 shadow-purple-500/20 ring-4 ring-purple-500/10',
      badgeBg: 'bg-purple-50 text-purple-800 border-purple-200',
      capabilities: ['HR', 'ATTENDANCE', 'SHIFTS', 'PAYROLL', 'ACCESS CONTROL'],
      metrics: [
        { label: 'ACTIVE STAFF', val: '42' },
        { label: 'LIVE SHIFTS', val: '06' },
        { label: 'SYSTEM ACCESS', val: 'SECURE' }
      ],
      visualType: 'workforceNodes'
    }
  ]

  // 4 Interactive Pharmacy Risk Landscape Hotspots Data
  const HOTSPOTS = [
    {
      id: 0,
      code: '01',
      title: 'Inventory Loss',
      pin: 'Expiring batches and missed stock movement',
      location: 'Store Shelves & Rack Bins',
      desc: 'Poor batch visibility and manual stock handling leave older inventory unnoticed until it becomes a dead-stock financial loss.',
      metric: '-14% Annual Inventory Waste',
      visualBadge: 'EXPIRY RISK DETECTED',
      badgeColor: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      icon: Box,
      coords: 'top-[18%] left-[12%]',
      pharmaPulseFix: 'FEFO Allocation Engine automatically locks earliest expiry batches for immediate cashier pick.'
    },
    {
      id: 1,
      code: '02',
      title: 'Slow Dispensing',
      pin: 'Manual verification and checkout delays',
      location: 'POS Billing & Cashier Counter',
      desc: 'Manual price lookups, paper prescription verification, and dosage checks create long customer queues and cashier fatigue.',
      metric: '> 3.5 Mins Checkout Queue',
      visualBadge: 'COUNTER BOTTLENECK',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      icon: Scan,
      coords: 'top-[18%] right-[12%]',
      pharmaPulseFix: '24s High-Speed POS cashier terminal with optical barcode scanning and digital e-script parsing.'
    },
    {
      id: 2,
      code: '03',
      title: 'Cold-Chain Risk',
      pin: 'Temperature-sensitive medicines without continuous monitoring',
      location: 'Vaccine Refrigerator #04',
      desc: 'Without 24/7 wireless telemetry, temperature spikes in cold storage expose insulin and bio-therapeutics to unseen thermal spoilage.',
      metric: '9.2°C Thermal Breach Spike',
      visualBadge: 'TEMPERATURE BREACH',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      icon: Thermometer,
      coords: 'bottom-[22%] left-[12%]',
      pharmaPulseFix: 'Continuous IoT wireless thermal sensors with real-time SMS/WhatsApp breach alert pings.'
    },
    {
      id: 3,
      code: '04',
      title: 'Disconnected Operations',
      pin: 'Separate systems creating operational blind spots',
      location: 'Back-Office & Admin Silos',
      desc: 'Procurement, inventory ledgers, cashier sales, HR shifts, and tax returns operate in disconnected software silos.',
      metric: 'Manual Double-Entry Errors',
      visualBadge: 'SYSTEM DATA SILOS',
      badgeColor: 'bg-[#C7D2FE]/20 text-[#A5B4FC] border-[#818CF8]/40',
      icon: Network,
      coords: 'bottom-[22%] right-[12%]',
      pharmaPulseFix: 'Single unified platform connecting store procurement, cashier POS, clinical e-scripts, HR & GSTR tax.'
    }
  ]

  // 6 Connected Digital Medicine Journey Stages
  const JOURNEY_STAGES = [
    {
      id: 0,
      code: '01',
      name: 'PROCUREMENT',
      tag: 'Purchase Orders & GRN',
      desc: 'Medicine stock enters the system through controlled procurement and receiving.',
      checkpoint: 'PO & GRN Receiving Station',
      badge: 'GATE RECEIVING VERIFIED',
      icon: Truck,
      color: 'emerald',
      visualElement: {
        tag: 'GRN RECEIVING GATE',
        title: 'Supplier PO #8402 Verified',
        specs: '3-way automated matching (PO vs Gate Receiving Challan vs Vendor Ledger).'
      }
    },
    {
      id: 1,
      code: '02',
      name: 'INVENTORY',
      tag: 'Batch & Stock Visibility',
      desc: 'Every medicine is tracked by batch, quantity, expiry, and storage location.',
      checkpoint: 'Rack Bin Locator Matrix',
      badge: 'SHELF BIN LOCKED',
      icon: Box,
      color: 'emerald',
      visualElement: {
        tag: 'STORAGE BIN LOCATOR',
        title: 'Rack A-04 \u2022 Shelf 02 \u2022 Bin B-14',
        specs: 'Visual locator map tracking physical stock count & rack location.'
      }
    },
    {
      id: 2,
      code: '03',
      name: 'FEFO ENGINE',
      tag: 'Expiry Priority Intelligence',
      desc: 'The system automatically prioritizes the earliest-expiring eligible batch.',
      checkpoint: 'FEFO Priority Selection Engine',
      badge: 'EXPIRY LOCK ACTIVE',
      icon: Cpu,
      color: 'amber',
      isHeroStage: true,
      visualElement: {
        tag: 'FEFO AUTO-PRIORITY DECISION ENGINE',
        title: 'Batch Priority Auto-Lock',
        batches: [
          { batch: 'BTH-108', exp: '2027-04-15', status: 'Deferred' },
          { batch: 'BTH-402', exp: '2026-11-30', status: 'SELECTED (Earliest Expiry)', selected: true },
          { batch: 'BTH-901', exp: '2028-01-10', status: 'Deferred' }
        ]
      }
    },
    {
      id: 3,
      code: '04',
      name: 'CLINICAL',
      tag: 'Prescription Verification',
      desc: 'Digital prescriptions are reviewed and medicines are verified before dispensing.',
      checkpoint: 'Clinical Safety & Dosage Check',
      badge: 'SCHEDULE H1 PASSED',
      icon: Stethoscope,
      color: 'indigo',
      visualElement: {
        tag: 'CLINICAL E-SCRIPT PARSER',
        title: 'Doctor Registration & Dosage Checked',
        specs: 'Spatie RBAC narcotic logs & drug collision safety verification.'
      }
    },
    {
      id: 4,
      code: '05',
      name: 'POS CHECKOUT',
      tag: 'Instant Checkout',
      desc: 'Barcode scanning, payments, and receipt generation happen in one fast transaction.',
      checkpoint: 'Optical Barcode POS Beam',
      badge: '24s CHECKOUT LATENCY',
      icon: Scan,
      color: 'cyan',
      visualElement: {
        tag: 'HIGH-SPEED POS TERMINAL',
        title: 'Barcode Scan & ESC/POS Print',
        specs: 'Sub-second cashier checkout with instant thermal receipt print.'
      }
    },
    {
      id: 5,
      code: '06',
      name: 'ANALYTICS',
      tag: 'Business Intelligence',
      desc: 'Operational data becomes real-time insights for sales, stock, and performance.',
      checkpoint: 'Real-Time Business Telemetry',
      badge: 'GST RETURN READY',
      icon: BarChart3,
      color: 'emerald',
      visualElement: {
        tag: 'REAL-TIME BUSINESS TELEMETRY',
        title: 'Multi-Branch Margin & GSTR-1 Logs',
        specs: 'Automated tax return filing & dead stock financial heatmaps.'
      }
    }
  ]

  // Core Capabilities
  const CORE_CAPABILITIES = [
    {
      title: 'FEFO Batch Intelligence',
      desc: 'Automatic first-expiry, first-out allocation algorithm enforcing strict batch priority to reduce medicine waste.',
      icon: Box,
      tag: 'EXPIRY GUARD'
    },
    {
      title: 'High-Speed POS Billing',
      desc: 'Keyboard-first cashier terminal enabling sub-second barcode scans, instant receipt printing, and offline checkout.',
      icon: Scan,
      tag: '24s CHECKOUT'
    },
    {
      title: 'Digital Prescription & Dispensing',
      desc: 'Structured e-prescription parsing with built-in doctor signature validation and dosage collision warnings.',
      icon: Stethoscope,
      tag: 'CLINICAL VAULT'
    },
    {
      title: 'Cold Chain Monitoring',
      desc: 'Wireless IoT telemetry continuously tracking vaccine storage temperatures with real-time SMS/WhatsApp breach pings.',
      icon: Thermometer,
      tag: '2°C - 8°C GUARD'
    },
    {
      title: 'Smart Inventory & Rack Management',
      desc: 'Visual shelf-to-bin locator mapping exact physical racks across central warehouses and retail branch counters.',
      icon: Warehouse,
      tag: 'BIN LOCATOR'
    },
    {
      title: 'Real-Time Business Intelligence',
      desc: 'Automated GSTR-1 & 3B tax return generator, dead stock heatmaps, and multi-branch revenue telemetry.',
      icon: BarChart3,
      tag: 'GST EXPORTER'
    }
  ]

  // Platform Ecosystem Modules Data
  const MODULES = [
    {
      id: 'inventory',
      title: 'Inventory Intelligence',
      icon: Box,
      items: ['Medicine Master', 'Batch Management', 'FEFO Allocation', 'Expiry Tracking', 'Stock Adjustment', 'Barcode Tagging']
    },
    {
      id: 'procurement',
      title: 'Procurement & Supply',
      icon: Truck,
      items: ['Suppliers Ledger', 'Purchase Orders (PO)', 'Goods Receipt Note (GRN)', 'Supplier Returns', 'Automated Auto-PO', 'Vendor Quotes']
    },
    {
      id: 'clinical',
      title: 'Clinical Operations',
      icon: Stethoscope,
      items: ['E-Prescriptions', 'Clinical Dispensing', 'Medicine Verification', 'Drug Interaction Guard', 'Doctor Registry', 'Patient History']
    },
    {
      id: 'billing',
      title: 'Sales & Billing',
      icon: ShoppingCart,
      items: ['POS Cashier Client', 'Barcode Billing', 'Multi-Tender Payments', 'Customer Sales Returns', 'Customer Loyalty', 'Thermal Printing']
    },
    {
      id: 'coldchain',
      title: 'Storage & Cold Chain',
      icon: Thermometer,
      items: ['Central Warehouse', 'Rack & Bin Management', 'Cold Storage Refrigerator', 'IoT Sensor Telemetry', 'Breach Alarms', 'Humidity Logs']
    },
    {
      id: 'workforce',
      title: 'Workforce & Administration',
      icon: UserCheck,
      items: ['HR & Employee Profiles', 'Biometric Attendance', 'Shift Roster Sync', 'Payroll Processing', 'Spatie RBAC Roles', 'Audit Logs']
    }
  ]

  // Intelligent Engines Data
  const INTELLIGENT_ENGINES = [
    {
      title: 'FEFO Allocation Engine',
      subtitle: 'Shortest Shelf-Life Priority Algorithm',
      desc: 'Scans all available inventory batches in real time and automatically locks the earliest expiring batch for dispensing.',
      icon: Cpu,
      stats: '100% Expiry Enforcement'
    },
    {
      title: 'Cold-Chain Anomaly Detector',
      subtitle: 'IoT Thermal Breach Warning System',
      desc: 'Monitors wireless IoT sensor streams every 5 seconds, predicting thermal deviation trends before medicine spoils.',
      icon: Thermometer,
      stats: 'Sub-5s Threshold Ping'
    },
    {
      title: 'Expiry Risk Forecasting',
      subtitle: 'Predictive Inventory Markdown Heuristic',
      desc: 'Projects 30-60-90 day drug expiry velocity, triggering automated supplier return requests or price markdown alerts.',
      icon: Activity,
      stats: '95.5% Waste Reduction'
    },
    {
      title: 'Smart Stock Reorder Engine',
      subtitle: 'Dynamic Safety Stock PO Generator',
      desc: 'Calculates daily dispensing consumption rates and automatically drafts purchase orders when stock hits safety thresholds.',
      icon: RefreshCw,
      stats: 'Zero Stockout Events'
    },
    {
      title: 'Storage Placement Optimizer',
      subtitle: 'Fast-Moving Rack Position Heuristic',
      desc: 'Analyzes high-frequency prescription drugs and suggests optimal front-counter bin placements to minimize cashier steps.',
      icon: Warehouse,
      stats: '35% Faster Picking'
    },
    {
      title: 'Audit Anomaly Detection',
      subtitle: 'Narcotics Schedule H1 Compliance Guard',
      desc: 'Cross-verifies prescribing doctor registration IDs and patient Aadhaar tokens against Schedule H1 narcotics dispense logs.',
      icon: ShieldCheck,
      stats: 'FDA Regulatory Audit Pass'
    }
  ]

  // 5 Technology Architecture Command-Center Domains Data
  const TECH_DOMAINS = [
    {
      id: 0,
      domain: 'Frontend',
      title: 'High-Performance UI Engine',
      icon: Layout,
      accentColor: '#10B981',
      bgGradient: 'from-emerald-50/90 via-white to-white',
      borderColor: 'border-emerald-200',
      activeBorder: 'border-emerald-500 shadow-emerald-500/20 ring-4 ring-emerald-500/10',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      techs: ['React 19', 'Vite', 'Tailwind CSS'],
      desc: 'Instant single-page client interface featuring sub-millisecond HMR state updates, keyboard-first cashier shortcuts, and responsive glassmorphism designs.'
    },
    {
      id: 1,
      domain: 'Backend',
      title: 'Asynchronous API Controller',
      icon: Server,
      accentColor: '#3B82F6',
      bgGradient: 'from-blue-50/90 via-white to-white',
      borderColor: 'border-blue-200',
      activeBorder: 'border-blue-500 shadow-blue-500/20 ring-4 ring-blue-500/10',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
      techs: ['Node.js', 'Express.js'],
      desc: 'Non-blocking, event-driven REST API middleware designed for high-concurrency pharmacy checkout requests and real-time socket connections.'
    },
    {
      id: 2,
      domain: 'Database',
      title: 'ACID Relational Storage',
      icon: Database,
      accentColor: '#0D9488',
      bgGradient: 'from-teal-50/90 via-white to-white',
      borderColor: 'border-teal-200',
      activeBorder: 'border-teal-500 shadow-teal-500/20 ring-4 ring-teal-500/10',
      badgeBg: 'bg-teal-50 text-teal-800 border-teal-200',
      techs: ['PostgreSQL', 'Prisma ORM'],
      desc: 'Robust relational database architecture featuring partitioned batch inventory tables, atomic write locks, and type-safe Prisma schema definitions.'
    },
    {
      id: 3,
      domain: 'Security',
      title: 'Cryptographic Hardening',
      icon: ShieldCheck,
      accentColor: '#6366F1',
      bgGradient: 'from-indigo-50/90 via-white to-white',
      borderColor: 'border-indigo-200',
      activeBorder: 'border-indigo-500 shadow-indigo-500/20 ring-4 ring-indigo-500/10',
      badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      techs: ['JWT', 'RBAC', 'Helmet'],
      desc: 'Zero-trust enterprise security layer with encrypted stateless JSON web tokens, granular pharmacist role-based permissions, and Helmet header protection.'
    },
    {
      id: 4,
      domain: 'Integration',
      title: 'Telematics & Document Pipeline',
      icon: Network,
      accentColor: '#06B6D4',
      bgGradient: 'from-cyan-50/90 via-white to-white',
      borderColor: 'border-cyan-200',
      activeBorder: 'border-cyan-500 shadow-cyan-500/20 ring-4 ring-cyan-500/10',
      badgeBg: 'bg-cyan-50 text-cyan-800 border-cyan-200',
      techs: ['Axios', 'jsPDF', 'html2canvas', 'IoT Sensors'],
      desc: 'High-frequency REST client, client-side GSTR PDF compilation, html2canvas thermal receipt rendering, and wireless IoT refrigerator sensor streams.'
    }
  ]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#10B981] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB NAVIGATION BAR ──────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#10B981] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#10B981] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#10B981] font-bold">PharmaPulse ERP</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#10B981] bg-white hover:bg-[#F0FDF4] border border-[#E9E2F5] hover:border-[#A7F3D0] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO SECTION (PHARMAPULSE COMMAND CENTER) ────────── */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#ECFDF5] via-[#FAF8FF] to-white overflow-hidden border-b border-[#E9E2F5]">
        
        {/* Subtle Ambient Medical Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15 pointer-events-none -z-0" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-br from-[#10B981]/10 via-[#06B6D4]/08 to-[#047857]/05 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: HERO TYPOGRAPHY & CAPABILITY MINI-CARDS */}
            <div className="lg:col-span-6 space-y-7">
              
              {/* Technical Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-[11px] font-mono font-bold uppercase tracking-wider shadow-2xs">
                <Pill className="w-3.5 h-3.5 text-[#10B981]" />
                <span>ENTERPRISE PHARMACY ERP &amp; CLINICAL MANAGEMENT SYSTEM</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.06]">
                  One <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4]">Intelligent</span> System.
                  <br />
                  Every Pharmacy Operation.
                </h1>
                
                {/* Product Name & Short Description */}
                <div className="pt-2 space-y-2">
                  <div className="inline-block px-3 py-1 rounded-md bg-[#17121F] text-white font-mono text-xs font-black uppercase tracking-widest">
                    PHARMAPULSE
                  </div>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                    A unified enterprise platform connecting inventory, clinical dispensing, billing, cold-chain intelligence, and workforce operations.
                  </p>
                </div>
              </div>

              {/* 4 Compact Capability Indicators (Floating Mini-Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  {
                    title: 'FEFO Intelligence',
                    subtitle: 'Smart batch prioritization & expiry control',
                    icon: Box,
                    badge: 'FEFO LOCK'
                  },
                  {
                    title: 'High-Speed Billing',
                    subtitle: 'Barcode-driven POS & instant checkout',
                    icon: Scan,
                    badge: '24s POS'
                  },
                  {
                    title: 'Digital Dispensing',
                    subtitle: 'Connected prescription-to-pharmacy workflow',
                    icon: Stethoscope,
                    badge: 'E-SCRIPT'
                  },
                  {
                    title: 'Cold-Chain Intelligence',
                    subtitle: 'Real-time storage monitoring & alerts',
                    icon: Thermometer,
                    badge: '2°C - 8°C'
                  }
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.title}
                      className="p-3.5 rounded-2xl bg-white/80 backdrop-blur-md border border-[#E9E2F5] shadow-xs hover:border-[#10B981] hover:shadow-md transition-all duration-300 space-y-1.5 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#10B981] flex items-center justify-center font-bold shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <h4 className="font-display font-bold text-xs text-[#17121F] group-hover:text-[#10B981] transition-colors">
                            {item.title}
                          </h4>
                        </div>
                        <span className="text-[9px] font-mono font-bold text-[#047857] bg-[#D1FAE5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug pl-9">
                        {item.subtitle}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: PHARMAPULSE COMMAND CENTER VISUALIZATION */}
            <div className="lg:col-span-6 relative">
              
              {/* Outer Glow Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#10B981]/20 via-[#06B6D4]/20 to-[#047857]/20 blur-xl opacity-70" />

              {/* Main Command Center Container */}
              <div className="relative rounded-3xl p-6 sm:p-7 bg-[#061812] border-2 border-emerald-500/30 text-white shadow-2xl space-y-6 backdrop-blur-2xl">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] text-white flex items-center justify-center font-bold shadow-md">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-white">PHARMAPULSE LIVE OPERATIONS</div>
                      <div className="text-[10px] font-mono text-slate-400">Enterprise Operations Control Core</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-emerald-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    <span>SYSTEMS ONLINE</span>
                  </div>
                </div>

                {/* Primary Focus Card: POS & DISPENSING */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scan className="w-4 h-4 text-[#6EE7B7]" />
                      <span className="font-mono text-xs font-bold text-[#6EE7B7]">POS &amp; DISPENSING</span>
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      LIVE COUNTER #01
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 space-y-2 font-mono text-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white flex items-center gap-2">
                          <span>Amoxicillin 500mg Capsule</span>
                          <span className="text-[9px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                            FEFO SELECTED
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400">Batch: BTH-402 &bull; Exp: 2026-11-30 &bull; Qty: 2</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-[#6EE7B7]">₹280</div>
                        <div className="text-[9px] text-slate-400">₹140 &times; 2</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="font-mono text-[9px] tracking-widest text-slate-500">||| || | ||| BTH-402-AMX</span>
                      <span className="text-emerald-400 font-bold">Subtotal: ₹280 &bull; GST: ₹50 &bull; Total: ₹330</span>
                    </div>
                  </div>
                </div>

                {/* 4 Floating Connected System Cards Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  
                  {/* Card 1: Cold Storage */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                        <span>COLD STORAGE</span>
                      </span>
                      <span className="text-emerald-400 font-bold">OPTIMAL</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <div className="text-2xl font-black text-cyan-400 font-mono">4.2°C</div>
                      <div className="flex items-end gap-1 h-5 shrink-0">
                        {[40, 55, 45, 60, 50].map((h, i) => (
                          <span key={i} className="w-1 bg-cyan-400/80 rounded-t" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Inventory Health */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Box className="w-3.5 h-3.5 text-emerald-400" />
                        <span>INVENTORY HEALTH</span>
                      </span>
                      <span className="text-emerald-400 font-bold">98.4%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-300 pt-1">
                      <span>Low Stock: <strong className="text-amber-300">08</strong></span>
                      <span>Expiry Risk: <strong className="text-rose-300">03</strong></span>
                    </div>
                  </div>

                  {/* Card 3: FEFO Engine */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 col-span-2 sm:col-span-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                        <span>FEFO ENGINE</span>
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-emerald-300 font-bold truncate">
                      BATCH AUTO-SELECTED
                    </div>
                    <div className="text-[9px] font-mono text-slate-400 truncate">
                      Medicine &rarr; Expiry &rarr; Locked
                    </div>
                  </div>

                  {/* Card 4: Live Operations */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-2 col-span-2 sm:col-span-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-amber-400" />
                        <span>LIVE OPERATIONS</span>
                      </span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-300">
                      128 Bills &bull; 42 Prescriptions
                    </div>
                    <div className="text-[9px] font-mono text-emerald-400 font-bold">
                      0 Critical Alerts
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ── BOTTOM ENTERPRISE PERFORMANCE METRICS STRIP ──────── */}
          <div className="pt-8 border-t border-[#E9E2F5]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { val: '24s', label: 'Average POS Checkout' },
                { val: '95.5%', label: 'Expiry Waste Reduction' },
                { val: '99.7%', label: 'Dispensing Accuracy Improvement' },
                { val: '< 45ms', label: 'Receipt Generation' }
              ].map((m, idx) => (
                <div key={m.label} className="space-y-1 relative">
                  <div className="font-mono font-black text-3xl sm:text-4xl text-[#10B981]">
                    {m.val}
                  </div>
                  <div className="text-xs font-display font-bold text-[#17121F]">
                    {m.label}
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-[#E9E2F5]" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PHARMACY RISK LANDSCAPE (INTERACTIVE SYSTEM ENVIRONMENT MAP) ── */}
      <section className="py-20 lg:py-32 bg-[#061812] text-white relative overflow-hidden border-b border-emerald-950/80">
        
        {/* Faint Medical Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-10 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[650px] bg-gradient-to-br from-[#10B981]/10 via-rose-500/05 to-cyan-500/05 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <AlertCircle className="w-4 h-4 text-rose-400" />
              <span>PHARMACY RISK LANDSCAPE</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              The Risks Behind Every Pharmacy Operation
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              What looks like a simple daily workflow often hides critical operational gaps across inventory, dispensing, cold storage, and disconnected software tools.
            </p>
          </div>

          {/* ── INTERACTIVE HOTSPOT SELECTOR NAVIGATION BAR ── */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {HOTSPOTS.map((h) => {
              const isSelected = activeChallengeIdx === h.id
              const Icon = h.icon
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveChallengeIdx(h.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-300 ${
                    isSelected
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105 border border-rose-400'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span className="opacity-70 font-mono text-[10px]">{h.code}</span>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{h.title}</span>
                </button>
              )
            })}
          </div>

          {/* ── SINGLE LARGE VISUAL ENVIRONMENT LANDSCAPE COMPOSITION ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            
            {/* LEFT / CENTER: INTERACTIVE SYSTEM MAP CANVAS */}
            <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] rounded-3xl bg-slate-950/95 border-2 border-slate-800 p-6 shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col justify-between">
              
              {/* Canvas Header HUD */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <span className="font-mono text-xs font-bold text-slate-300">LIVE SYSTEM MAP TELEMETRY</span>
                </div>
                <span className="text-[10px] font-mono text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/30">
                  HOTSPOT DETECTED
                </span>
              </div>

              {/* Central Abstract Pharmacy Blueprint Visual Grid */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[380px] h-[380px] rounded-full border border-dashed border-emerald-500/40 animate-spin-slow" />
                <div className="w-[260px] h-[260px] rounded-full border border-rose-500/40" />
              </div>

              {/* 4 Interactive Hotspot Pin Nodes on Canvas */}
              <div className="relative z-20 grid grid-cols-2 gap-4 py-8">
                {HOTSPOTS.map((h) => {
                  const isActive = activeChallengeIdx === h.id
                  const Icon = h.icon
                  return (
                    <motion.div
                      key={h.id}
                      onClick={() => setActiveChallengeIdx(h.id)}
                      onMouseEnter={() => setActiveChallengeIdx(h.id)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer space-y-2.5 relative group ${
                        isActive
                          ? 'bg-slate-900/95 border-rose-500 shadow-xl shadow-rose-500/20 ring-2 ring-rose-500/30 scale-[1.03]'
                          : 'bg-white/5 border-white/10 hover:border-slate-700 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-300 text-[10px] font-mono font-bold flex items-center justify-center border border-rose-500/40">
                            {h.code}
                          </span>
                          <span className="text-xs font-display font-bold text-white group-hover:text-rose-400 transition-colors">
                            {h.title}
                          </span>
                        </div>
                        {isActive && <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />}
                      </div>

                      <div className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-rose-400 shrink-0" />
                        <span className="truncate">{h.pin}</span>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-950/80 border border-white/10 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">{h.location}</span>
                        <span className="text-rose-400 font-bold">{h.metric}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Canvas Bottom Status Bar */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400 relative z-20">
                <span>SECTOR: RETAIL &amp; CLINICAL PHARMACY</span>
                <span className="text-emerald-400 font-bold">HOVER / CLICK HOTSPOT TO ZOOM</span>
              </div>

            </div>

            {/* RIGHT COLUMN: RELEVANT PROBLEM & PHARMAPULSE SOLUTION PANEL */}
            <div className="lg:col-span-5">
              <motion.div
                key={activeChallengeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-7 rounded-3xl bg-slate-900/95 border-2 border-rose-500/60 text-white shadow-2xl space-y-6 backdrop-blur-2xl relative overflow-hidden"
              >
                {/* Active Hotspot Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center font-bold">
                      {(() => {
                        const Icon = HOTSPOTS[activeChallengeIdx].icon
                        return <Icon className="w-5 h-5" />
                      })()}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                        HOTSPOT {HOTSPOTS[activeChallengeIdx].code} IN FOCUS
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {HOTSPOTS[activeChallengeIdx].title}
                      </h3>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border ${HOTSPOTS[activeChallengeIdx].badgeColor}`}>
                    {HOTSPOTS[activeChallengeIdx].visualBadge}
                  </span>
                </div>

                {/* Hotspot Location Pin & Description */}
                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px] bg-white/5 px-3 py-2 rounded-xl border border-white/10">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span><strong>LOCATION:</strong> {HOTSPOTS[activeChallengeIdx].location}</span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {HOTSPOTS[activeChallengeIdx].desc}
                  </p>
                </div>

                {/* Risk Impact Metric Card */}
                <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-500/30 space-y-1 font-mono text-xs">
                  <div className="text-rose-400 font-bold uppercase tracking-wider text-[10px]">OPERATIONAL RISK IMPACT</div>
                  <div className="text-xl font-black text-white">{HOTSPOTS[activeChallengeIdx].metric}</div>
                  <div className="text-[11px] text-slate-400">📍 {HOTSPOTS[activeChallengeIdx].pin}</div>
                </div>

                {/* PharmaPulse Resolution Layer */}
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>PHARMAPULSE SOLUTION LAYER</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {HOTSPOTS[activeChallengeIdx].pharmaPulseFix}
                  </p>
                </div>

              </motion.div>
            </div>

          </div>

          {/* ── BOTTOM STATEMENT (TRANSFORMATION TRANSITION TO SOLUTION) ── */}
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/90 via-slate-950 to-cyan-950/90 border-2 border-emerald-500/50 shadow-2xl text-center space-y-5 backdrop-blur-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>THE TRANSFORMATION</span>
            </div>
            
            <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-tight">
              Visibility is the difference between managing operations and reacting to problems.
            </h3>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              PharmaPulse provides complete real-time visibility across your entire pharmacy ecosystem, turning operational blind spots into connected intelligence.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-bold">
              <span className="px-3.5 py-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/40">
                Fragmented Blind Spots
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="px-4 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-md">
                PharmaPulse Connected Intelligence
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. OUR SOLUTION (THE PHARMAPULSE DIFFERENCE: FRAGMENTED TO UNIFIED) ── */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-[#F0FDF4]/30 to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#10B981]" />
              <span>THE PHARMAPULSE DIFFERENCE</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-tight">
              From Fragmented Operations
              <br />
              to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4]">One Intelligent Flow</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              PharmaPulse brings pharmacy operations into one connected ecosystem — where procurement, inventory, clinical dispensing, billing, cold-chain monitoring, and workforce operations move together.
            </p>
          </div>

          {/* ── MAIN VISUAL TRANSFORMATION COMPOSITION (3-PHASE HORIZONTAL CORE) ── */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-slate-50/90 via-white to-[#ECFDF5]/80 border-2 border-[#E9E2F5] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden backdrop-blur-md">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#10B981]/10 to-[#06B6D4]/10 blur-3xl rounded-full pointer-events-none -z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* LEFT SIDE: BEFORE PHARMAPULSE (FRAGMENTED OPERATIONS) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center justify-between border-b border-rose-200 pb-2">
                  <span className="text-xs font-mono font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200 uppercase tracking-wider">
                    FRAGMENTED OPERATIONS
                  </span>
                  <span className="text-[10px] font-mono text-rose-500 font-bold">SILOED TOOLS</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { title: 'Procurement', detail: 'Siloed POs', icon: Truck },
                    { title: 'Inventory', detail: 'Manual Stock', icon: Box },
                    { title: 'Clinical', detail: 'Paper E-Scripts', icon: Stethoscope },
                    { title: 'POS Billing', detail: 'Isolated Checkout', icon: Scan },
                    { title: 'Cold Storage', detail: 'Unmonitored', icon: Thermometer },
                    { title: 'Workforce', detail: 'Manual Shifts', icon: UserCheck }
                  ].map((node) => {
                    const Icon = node.icon
                    return (
                      <div
                        key={node.title}
                        className="p-3 rounded-2xl bg-white border border-rose-200/80 shadow-2xs space-y-1 opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <div className="flex items-center gap-1.5 text-rose-600 font-bold text-xs">
                          <Icon className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{node.title}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">{node.detail}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* CENTER: PHARMAPULSE INTELLIGENCE CORE */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center py-4">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full flex items-center justify-center">
                  
                  {/* Outer Pulsing Glowing Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#10B981] via-[#059669] to-[#06B6D4] opacity-25 blur-xl animate-pulse" />
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-[#10B981]/50 animate-spin-slow" />

                  {/* Central Core Glass Sphere */}
                  <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-[#061812] border-2 border-[#10B981]/60 shadow-2xl p-5 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-2xl relative z-10 text-white">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] text-white flex items-center justify-center font-bold shadow-md">
                      <Activity className="w-5 h-5" />
                    </div>

                    <div className="space-y-0.5">
                      <div className="font-mono font-black text-xs text-white tracking-widest uppercase">
                        PHARMAPULSE
                      </div>
                      <div className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        UNIFIED OPERATIONAL CORE
                      </div>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                      LIVE INTEGRATION
                    </span>
                  </div>

                </div>
              </div>

              {/* RIGHT SIDE: AFTER PHARMAPULSE (ONE CONNECTED PLATFORM) */}
              <div className="lg:col-span-4 space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                  <span className="text-xs font-mono font-bold text-[#047857] bg-[#D1FAE5] px-3 py-1 rounded-full border border-[#A7F3D0] uppercase tracking-wider">
                    ONE CONNECTED PLATFORM
                  </span>
                  <span className="text-[10px] font-mono text-[#10B981] font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    REAL-TIME
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { title: 'Procurement', detail: 'PO & GRN Sync', icon: Truck },
                    { title: 'Inventory', detail: 'FEFO Intelligence', icon: Box },
                    { title: 'Clinical', detail: 'Digital Prescriptions', icon: Stethoscope },
                    { title: 'POS Billing', detail: 'Instant Checkout', icon: Scan },
                    { title: 'Cold Chain', detail: 'Live Telemetry', icon: Thermometer },
                    { title: 'Workforce', detail: 'HR & Shift Sync', icon: UserCheck }
                  ].map((node) => {
                    const Icon = node.icon
                    return (
                      <div
                        key={node.title}
                        className="p-3 rounded-2xl bg-white border border-[#A7F3D0] shadow-xs space-y-1 hover:border-[#10B981] hover:shadow-md transition-all group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-[#17121F] font-bold text-xs group-hover:text-[#10B981] transition-colors">
                            <Icon className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                            <span className="truncate">{node.title}</span>
                          </div>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        </div>
                        <div className="text-[10px] font-mono font-bold text-[#047857]">{node.detail}</div>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* ── BOTTOM IMPACT STRIP (4 MINIMAL IMPACT STATEMENTS) ── */}
          <div className="pt-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {[
                'No disconnected workflows',
                'One source of operational truth',
'Real-time data across departments',
                'Built for pharmacy-scale operations'
              ].map((statement) => (
                <div
                  key={statement}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white border border-[#E9E2F5] shadow-2xs font-display font-bold text-xs sm:text-sm text-[#17121F]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>{statement}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. PHARMACY OPERATIONS CONTROL MAP (ORBITAL NETWORK) ── */}
      <section className="py-20 lg:py-32 bg-[#061812] text-white relative overflow-hidden border-b border-emerald-950/80">
        
        {/* Subtle Atmospheric Grid & Glowing Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-10 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-gradient-to-br from-[#10B981]/15 via-[#06B6D4]/10 to-[#047857]/05 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Network className="w-4 h-4 text-emerald-400" />
              <span>PHARMACY OPERATIONS NETWORK</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              One System.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4]">Every Operation Connected.</span>
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              PharmaPulse brings every critical pharmacy operation into one intelligent ecosystem, where information, inventory, and decisions move together in real time.
            </p>
          </div>

          {/* ── CINEMATIC ORBITAL NETWORK VISUALIZATION WORKSPACE ── */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-slate-950/95 border-2 border-slate-800 p-6 sm:p-10 shadow-2xl space-y-10 backdrop-blur-2xl relative overflow-hidden">
            
            {/* Active System Signal Banner */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span>ACTIVE CONNECTION: {NETWORK_NODES[activeWorkflowStage].title}</span>
              </div>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                Hover node to inspect operational intelligence stream
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* LEFT 3 ORBITAL NODES (01, 02, 03) */}
              <div className="lg:col-span-4 space-y-4">
                {NETWORK_NODES.slice(0, 3).map((nd) => {
                  const isActive = activeWorkflowStage === nd.id
                  const Icon = nd.icon
                  return (
                    <div
                      key={nd.id}
                      onClick={() => setActiveWorkflowStage(nd.id)}
                      onMouseEnter={() => setActiveWorkflowStage(nd.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 space-y-2.5 relative backdrop-blur-md ${
                        isActive
                          ? nd.isHighlighted
                            ? 'bg-slate-900/95 border-amber-500/80 ring-2 ring-amber-500/40 shadow-xl shadow-amber-500/20 scale-[1.03]'
                            : 'bg-slate-900/95 border-emerald-400 ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/20 scale-[1.03]'
                          : 'bg-white/5 border-white/10 opacity-60 hover:opacity-100 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400">{nd.code}</span>
                          <span className="font-display font-bold text-sm text-white">{nd.title}</span>
                        </div>
                        <Icon className={`w-4 h-4 ${isActive ? (nd.isHighlighted ? 'text-amber-400' : 'text-emerald-400') : 'text-slate-500'}`} />
                      </div>

                      <div className="space-y-1 font-mono text-[11px]">
                        {nd.items.map((item, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 ${
                              nd.isHighlighted && idx === 1
                                ? 'text-amber-300 font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40'
                                : 'text-slate-300'
                            }`}
                          >
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">{nd.detailTag}</span>
                        <span className={`px-2 py-0.5 rounded font-bold border ${nd.badgeColor}`}>
                          {nd.status}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CENTER INTENSE GLOWING CORE */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full flex items-center justify-center">
                  
                  {/* Glowing Outer Radial Aura */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#10B981] via-[#059669] to-[#06B6D4] opacity-30 blur-2xl animate-pulse" />
                  <div className="absolute inset-2 rounded-full border-2 border-dashed border-emerald-400/50 animate-spin-slow" />
                  <div className="absolute inset-6 rounded-full border border-emerald-500/30" />

                  {/* Central Core Glass Hub */}
                  <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-full bg-[#061812] border-2 border-emerald-400 shadow-2xl p-6 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-2xl relative z-10 text-white">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] text-white flex items-center justify-center font-bold shadow-lg">
                      <Cpu className="w-6 h-6 animate-pulse" />
                    </div>

                    <div className="space-y-0.5 font-mono">
                      <div className="font-black text-xs text-white tracking-widest uppercase">
                        PHARMAPULSE
                      </div>
                      <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
                        INTELLIGENCE CORE
                      </div>
                    </div>

                    <div className="text-[9px] font-mono text-slate-300 leading-tight pt-1">
                      CONNECTING DATA &bull; STOCK &bull; WORKFLOWS &bull; DECISIONS
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                      LIVE INTEGRATION STREAM
                    </span>
                  </div>

                </div>
              </div>

              {/* RIGHT 3 ORBITAL NODES (04, 05, 06) */}
              <div className="lg:col-span-4 space-y-4">
                {NETWORK_NODES.slice(3, 6).map((nd) => {
                  const isActive = activeWorkflowStage === nd.id
                  const Icon = nd.icon
                  return (
                    <div
                      key={nd.id}
                      onClick={() => setActiveWorkflowStage(nd.id)}
                      onMouseEnter={() => setActiveWorkflowStage(nd.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 space-y-2.5 relative backdrop-blur-md ${
                        isActive
                          ? 'bg-slate-900/95 border-emerald-400 ring-2 ring-emerald-500/40 shadow-xl shadow-emerald-500/20 scale-[1.03]'
                          : 'bg-white/5 border-white/10 opacity-60 hover:opacity-100 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-400">{nd.code}</span>
                          <span className="font-display font-bold text-sm text-white">{nd.title}</span>
                        </div>
                        <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                      </div>

                      <div className="space-y-1 font-mono text-[11px]">
                        {nd.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-400">{nd.detailTag}</span>
                        <span className={`px-2 py-0.5 rounded font-bold border ${nd.badgeColor}`}>
                          {nd.status}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. PHARMAPULSE OPERATIONS CONTROL RAIL ───────────────── */}
      <section className="py-20 lg:py-32 bg-[#061812] text-white relative overflow-hidden border-b border-emerald-950/80">
        
        {/* Subtle Faint Tech Lines & Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#10B981_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-10 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[650px] bg-gradient-to-br from-[#10B981]/10 via-[#06B6D4]/08 to-cyan-500/05 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Layers3 className="w-4 h-4 text-emerald-400" />
              <span>CORE OPERATIONAL SYSTEM</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Every Critical Operation.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4]">Continuously Connected.</span>
            </h2>
            
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              PharmaPulse brings inventory intelligence, clinical workflows, billing, storage monitoring, and business analytics together through one connected operational system.
            </p>
          </div>

          {/* ── CENTRAL OPERATIONAL CONTROL RAIL WORKSPACE ── */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-slate-950/95 border-2 border-slate-800 p-6 sm:p-10 shadow-2xl space-y-10 backdrop-blur-2xl relative overflow-hidden">
            
            <div className="relative">
              {/* 6 OPERATIONAL CHECKPOINT NODES */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
                {CONTROL_RAIL_NODES.map((node) => {
                  const isActive = activeControlNode === node.id
                  const Icon = node.icon
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveControlNode(node.id)}
                      onMouseEnter={() => setActiveControlNode(node.id)}
                      className={`p-4 rounded-2xl border text-left transition-all duration-300 space-y-3 relative group ${
                        isActive
                          ? 'bg-slate-900/95 border-emerald-400 shadow-xl shadow-emerald-500/25 ring-4 ring-emerald-500/20 scale-[1.04]'
                          : 'bg-slate-950/80 border-slate-800 opacity-65 hover:opacity-100 hover:border-slate-700'
                      }`}
                    >
                      {/* Node Header & Code */}
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold flex items-center justify-center border border-emerald-500/40">
                          {node.code}
                        </span>
                        <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                      </div>

                      {/* Title */}
                      <div className="font-display font-bold text-xs text-white group-hover:text-emerald-300 transition-colors leading-snug">
                        {node.title}
                      </div>

                      {/* Connection Signal Dot */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[9px] font-mono text-slate-400">NODE {node.code}</span>
                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* ── ACTIVE OPERATIONAL NODE CUSTOM VISUAL DATA DISPLAY ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeControlNode}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-7 rounded-3xl bg-slate-900/90 border-2 border-emerald-500/50 text-white shadow-2xl backdrop-blur-xl relative overflow-hidden"
              >
                {/* Active Header Status */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold">
                      {(() => {
                        const Icon = CONTROL_RAIL_NODES[activeControlNode].icon
                        return <Icon className="w-5 h-5" />
                      })()}
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                        ACTIVE OPERATIONAL CHECKPOINT {CONTROL_RAIL_NODES[activeControlNode].code}
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                        {CONTROL_RAIL_NODES[activeControlNode].title}
                      </h3>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border ${CONTROL_RAIL_NODES[activeControlNode].badgeColor}`}>
                    {CONTROL_RAIL_NODES[activeControlNode].statusTag}
                  </span>
                </div>

                {/* ── NODE-SPECIFIC CUSTOM VISUAL DATA READOUT ── */}
                <div className="pt-6">
                  
                  {/* NODE 01: FEFO BATCH INTELLIGENCE VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'fefo' && (
                    <div className="space-y-4">
                      <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                        <span>FEFO PRIORITY SCANNING ENGINE</span>
                        <span className="text-amber-400 font-bold">AUTO PRIORITY SELECTED</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {CONTROL_RAIL_NODES[activeControlNode].fefoData.map((b) => (
                          <div
                            key={b.batch}
                            className={`p-4 rounded-2xl border transition-all font-mono space-y-1.5 ${
                              b.active
                                ? 'bg-amber-500/10 border-amber-500/80 shadow-lg text-white ring-2 ring-amber-500/40 scale-[1.02]'
                                : 'bg-white/5 border-white/10 text-slate-400 opacity-60'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs font-bold">
                              <span>{b.batch}</span>
                              {b.active && <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />}
                            </div>
                            <div className="text-[11px] text-amber-300 font-bold">{b.exp}</div>
                            {b.active && (
                              <div className="text-[9px] font-bold bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-center">
                                AUTO PRIORITY SELECTED
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NODE 02: HIGH-SPEED POS BILLING VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'pos' && (
                    <div className="space-y-4 font-mono">
                      <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {CONTROL_RAIL_NODES[activeControlNode].flowSteps.map((step, idx) => (
                            <React.Fragment key={step}>
                              <span className="px-3 py-1 rounded bg-white/10 text-xs font-bold text-emerald-300 border border-white/10">
                                {step}
                              </span>
                              {idx < 2 && <ArrowRight className="w-4 h-4 text-emerald-400" />}
                            </React.Fragment>
                          ))}
                        </div>

                        <div className="text-right">
                          <div className="text-2xl font-black text-[#6EE7B7]">24s</div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">AVERAGE CHECKOUT</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NODE 03: DIGITAL PRESCRIPTION & DISPENSING VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'clinical' && (
                    <div className="space-y-3 font-mono">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {CONTROL_RAIL_NODES[activeControlNode].checks.map((chk) => (
                          <div key={chk} className="p-4 rounded-2xl bg-white/5 border border-indigo-500/40 text-xs flex items-center justify-between">
                            <span className="font-bold text-white">{chk}</span>
                            <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NODE 04: COLD CHAIN MONITORING VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'coldchain' && (
                    <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 space-y-4 font-mono">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-4xl font-black text-cyan-400">
                            {CONTROL_RAIL_NODES[activeControlNode].liveTemp}
                          </div>
                          <div className="text-xs text-slate-400 pt-0.5">
                            {CONTROL_RAIL_NODES[activeControlNode].tempRange}
                          </div>
                        </div>

                        {/* Live Telemetry Waveform */}
                        <div className="flex items-end gap-1.5 h-8">
                          {CONTROL_RAIL_NODES[activeControlNode].waveform.map((val, idx) => (
                            <div
                              key={idx}
                              className="w-2 rounded-t bg-cyan-400/80 animate-pulse"
                              style={{ height: `${val * 16}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NODE 05: SMART INVENTORY & RACK MANAGEMENT VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'rack' && (
                    <div className="p-5 rounded-2xl bg-slate-950/90 border border-white/10 font-mono space-y-3">
                      <div className="text-xs text-slate-400">PHYSICAL LOCATION PATH:</div>
                      <div className="flex flex-wrap items-center gap-3">
                        {CONTROL_RAIL_NODES[activeControlNode].path.map((loc, idx) => (
                          <React.Fragment key={loc}>
                            <span className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                              idx === 2
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-md ring-2 ring-emerald-500/30'
                                : 'bg-white/5 text-slate-300 border-white/10'
                            }`}>
                              {loc}
                            </span>
                            {idx < 2 && <ArrowRight className="w-4 h-4 text-emerald-400" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* NODE 06: REAL-TIME BUSINESS INTELLIGENCE VISUALIZATION */}
                  {CONTROL_RAIL_NODES[activeControlNode].visualType === 'analytics' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono">
                      {CONTROL_RAIL_NODES[activeControlNode].metrics.map((m) => (
                        <div key={m.label} className="p-4 rounded-2xl bg-white/5 border border-teal-500/40 space-y-1">
                          <div className="text-[10px] text-slate-400 font-bold">{m.label}</div>
                          <div className="text-2xl font-black text-teal-300">{m.val}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Footer Connection Status */}
                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-emerald-300 font-bold">
                  <span>Continuous Data Flow Stream Active</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    SYSTEM ONLINE
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* ── 6. THE PHARMAPULSE MODULE CONSTELLATION ───────────────── */}
      <section id="ecosystem" className="py-20 lg:py-32 bg-[#FAF8FF] border-b border-[#E9E2F5] relative overflow-hidden">
        
        {/* Subtle Architectural Operations Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E9E2F5_1px,transparent_1px),linear-gradient(to_bottom,#E9E2F5_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[700px] bg-gradient-to-br from-[#10B981]/08 via-[#06B6D4]/06 to-indigo-500/04 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
              <Layers3 className="w-4 h-4 text-[#10B981]" />
              <span>ENTERPRISE ECOSYSTEM</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-tight">
              Six Systems.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#059669] to-[#06B6D4]">One Intelligent Landscape.</span>
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Explore the six integrated systems that power every movement, decision, and operation across the PharmaPulse enterprise platform.
            </p>
          </div>

          {/* ── IMMERSIVE DIGITAL OPERATIONS MAP CANVAS (6 CONSTELLATION ZONES) ── */}
          <div className="space-y-6 max-w-6xl mx-auto">
            
            {/* Active Territory Telemetry Status Bar */}
            <div className="flex items-center justify-between px-6 py-3 rounded-2xl bg-white border border-[#E9E2F5] shadow-xs font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-bold text-[#17121F]">
                  ACTIVE TERRITORY: ZONE {CONSTELLATION_ZONES[activeConstellationZone].code} — {CONSTELLATION_ZONES[activeConstellationZone].title}
                </span>
              </div>
              <span className="text-slate-500 text-[11px] hidden sm:inline">
                Hover any operational territory to illuminate digital data flow
              </span>
            </div>

            {/* 6 OPERATIONAL TERRITORIES IN AN ASYMMETRIC ENTERPRISE CANVAS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {CONSTELLATION_ZONES.map((zone, idx) => {
                const isActive = activeConstellationZone === idx
                const Icon = zone.icon
                return (
                  <div
                    key={zone.code}
                    onClick={() => setActiveConstellationZone(idx)}
                    onMouseEnter={() => setActiveConstellationZone(idx)}
                    className={`p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 space-y-5 bg-gradient-to-r ${zone.bgGradient} cursor-pointer relative overflow-hidden backdrop-blur-md ${
                      isActive
                        ? `${zone.activeBorder} shadow-xl scale-[1.03] z-20`
                        : `${zone.borderColor} opacity-80 hover:opacity-100 shadow-xs z-10`
                    }`}
                  >
                    {/* Zone Header & Architectural Oversized Code */}
                    <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-black text-3xl text-[#17121F]/20">
                          {zone.code}
                        </span>
                        <div className="w-9 h-9 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                          <Icon className="w-4 h-4" style={{ color: zone.accentColor }} />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            ZONE {zone.code}
                          </span>
                          <h3 className="font-display font-black text-base text-[#17121F]">
                            {zone.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Zone Custom Visual Telemetry Readouts */}
                    <div className="space-y-3">
                      
                      {/* ZONE 01: INVENTORY FLOATING METRICS */}
                      {zone.visualType === 'inventoryBlocks' && (
                        <div className="grid grid-cols-3 gap-2 font-mono text-center">
                          {zone.metrics.map((m) => (
                            <div key={m.label} className="p-2.5 rounded-2xl bg-white border border-emerald-200/80 shadow-2xs">
                              <div className="text-lg font-black text-emerald-600">{m.val}</div>
                              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* ZONE 02: PROCUREMENT FLOWING SUPPLY STATUS */}
                      {zone.visualType === 'supplyFlow' && (
                        <div className="p-3 rounded-2xl bg-white border border-blue-200/80 font-mono space-y-2 shadow-2xs">
                          <div className="text-[10px] text-slate-400 font-bold uppercase">SUPPLY PROGRESSION:</div>
                          <div className="flex items-center justify-between text-[11px]">
                            {zone.flowSteps.map((st, i) => (
                              <React.Fragment key={st}>
                                <span className="font-bold text-blue-700">{st}</span>
                                {i < 2 && <ArrowRight className="w-3 h-3 text-blue-400" />}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ZONE 03: CLINICAL CALM PRECISION VALIDATION */}
                      {zone.visualType === 'clinicalValidation' && (
                        <div className="p-3 rounded-2xl bg-white border border-teal-200/80 font-mono space-y-1.5 shadow-2xs text-[11px]">
                          {zone.checks.map((chk) => (
                            <div key={chk} className="flex items-center justify-between text-slate-700 font-medium">
                              <span>{chk}</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* ZONE 04: HIGH-SPEED SALES TRANSACTION BEAM */}
                      {zone.visualType === 'salesBeam' && (
                        <div className="p-3.5 rounded-2xl bg-white border border-indigo-200/80 font-mono space-y-2 shadow-2xs">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-400 text-[10px] font-bold">TRANSACTION PULSE</span>
                            <span className="text-indigo-600 font-black">{zone.avgCheckout} AVG CHECKOUT</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px]">
                            {zone.beamSteps.map((st, i) => (
                              <React.Fragment key={st}>
                                <span className="font-bold text-indigo-700">{st}</span>
                                {i < 3 && <ArrowRight className="w-3 h-3 text-indigo-400" />}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ZONE 05: COLD CHAIN TEMPERATURE RANGE BAR */}
                      {zone.visualType === 'coldChainRange' && (
                        <div className="p-3.5 rounded-2xl bg-white border border-cyan-200/80 font-mono space-y-2 shadow-2xs">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-500 font-bold">{zone.tempData.range}</span>
                            <span className="text-cyan-600 font-black">{zone.tempData.current} ({zone.tempData.status})</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden relative border border-slate-200">
                            <div className="h-full bg-cyan-500 rounded-full w-[60%] animate-pulse" />
                          </div>
                        </div>
                      )}

                      {/* ZONE 06: WORKFORCE ACTIVITY INDICATORS */}
                      {zone.visualType === 'workforceNodes' && (
                        <div className="grid grid-cols-3 gap-2 font-mono text-center">
                          {zone.metrics.map((m) => (
                            <div key={m.label} className="p-2.5 rounded-2xl bg-white border border-purple-200/80 shadow-2xs">
                              <div className="text-lg font-black text-purple-700">{m.val}</div>
                              <div className="text-[8px] font-bold text-slate-500 uppercase tracking-tight">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>

                    {/* Zone Capabilities List */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {zone.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="px-2.5 py-1 rounded-xl bg-white/90 border border-slate-200/90 text-[10px] font-mono font-bold text-slate-700 shadow-2xs"
                        >
                          • {cap}
                        </span>
                      ))}
                    </div>

                  </div>
                )
              })}
            </div>

          </div>

          {/* Bottom Architectural Summary Statement */}
          <div className="pt-4 text-center space-y-1">
            <div className="font-mono font-black text-xs sm:text-sm text-[#17121F] uppercase tracking-widest bg-white border border-[#E9E2F5] p-4 rounded-2xl max-w-3xl mx-auto shadow-2xs">
              ⚡ ALL SYSTEMS ONLINE • ONE UNIFIED PHARMACY ENTERPRISE
            </div>
            <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider pt-2">
              SIX DISTINCT OPERATIONAL SYSTEMS. ONE CONTINUOUS INTELLIGENT ENTERPRISE.
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. INTELLIGENT ENGINES ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>SMART AUTOMATION ENGINES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Six Intelligent Automation Engines
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Proprietary algorithmic engines powering real-time decision making across inventory, cold-chain, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTELLIGENT_ENGINES.map((eng, idx) => {
              const Icon = eng.icon
              const isActive = activeEngineIdx === idx
              return (
                <div
                  key={eng.title}
                  onClick={() => setActiveEngineIdx(idx)}
                  onMouseEnter={() => setActiveEngineIdx(idx)}
                  className={`p-7 rounded-3xl transition-all duration-300 border cursor-pointer space-y-4 ${
                    isActive
                      ? 'bg-slate-900 border-cyan-400 shadow-2xl scale-[1.02] ring-4 ring-cyan-400/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-full border border-cyan-800">
                      {eng.stats}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">{eng.title}</h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold">{eng.subtitle}</div>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {eng.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 8. ENTERPRISE TECHNOLOGY STACK COMMAND-CENTER ─────────── */}
      <section className="py-20 lg:py-32 bg-[#FAF8FF] border-b border-[#E9E2F5] relative overflow-hidden">
        
        {/* Faint Architectural Technical Grid Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E9E2F5_1px,transparent_1px),linear-gradient(to_bottom,#E9E2F5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-br from-[#10B981]/08 via-[#06B6D4]/06 to-blue-500/04 blur-3xl rounded-full pointer-events-none -z-0" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857] text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
              <Code2 className="w-4 h-4 text-[#10B981]" />
              <span>TECHNOLOGY ARCHITECTURE</span>
            </div>
            
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-tight">
              Built on a Connected Technology Foundation
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              Every layer of PharmaPulse works together through a modern, secure, and scalable technology ecosystem.
            </p>
          </div>

          {/* ── CENTRAL VISUAL COMMAND-CENTER ECOSYSTEM WORKSPACE ── */}
          <div className="max-w-6xl mx-auto rounded-3xl bg-white border-2 border-[#E9E2F5] p-6 sm:p-10 shadow-xl space-y-10 relative overflow-hidden backdrop-blur-md">
            
            {/* Active Telemetry Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
                <span className="font-bold text-[#17121F]">
                  ACTIVE INFRASTRUCTURE DOMAIN: {TECH_DOMAINS[activeTechDomain].domain.toUpperCase()} — {TECH_DOMAINS[activeTechDomain].title}
                </span>
              </div>
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                Hover any domain panel to inspect technology stack specs
              </span>
            </div>

            {/* ASYMMETRIC ECOSYSTEM WORKSPACE (LEFT 2 PANELS / CENTRAL CORE / RIGHT 3 PANELS) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-center relative">
              
              {/* LEFT 2 PANELS (FRONTEND & BACKEND) */}
              <div className="lg:col-span-4 space-y-5">
                {[TECH_DOMAINS[0], TECH_DOMAINS[1]].map((domain) => {
                  const isActive = activeTechDomain === domain.id
                  const Icon = domain.icon
                  return (
                    <div
                      key={domain.id}
                      onClick={() => setActiveTechDomain(domain.id)}
                      onMouseEnter={() => setActiveTechDomain(domain.id)}
                      className={`p-6 rounded-3xl border-2 transition-all duration-300 space-y-4 cursor-pointer relative bg-gradient-to-r ${domain.bgGradient} ${
                        isActive
                          ? `${domain.activeBorder} shadow-lg scale-[1.03] z-20`
                          : `${domain.borderColor} opacity-85 hover:opacity-100 shadow-xs z-10`
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                            <Icon className="w-5 h-5" style={{ color: domain.accentColor }} />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              DOMAIN 0{domain.id + 1}
                            </span>
                            <h3 className="font-display font-bold text-lg text-[#17121F]">
                              {domain.domain}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="text-xs font-mono font-bold text-slate-600">
                        {domain.title}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {domain.techs.map((t) => (
                          <span
                            key={t}
                            className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border transition-all ${
                              isActive
                                ? 'bg-white text-slate-900 border-slate-300 shadow-2xs scale-105'
                                : 'bg-white/80 text-slate-700 border-slate-200'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CENTER CENTRAL VISUAL STRUCTURE — PHARMAPULSE TECHNOLOGY ECOSYSTEM */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center py-4">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl flex items-center justify-center">
                  
                  {/* Layered Outer Glow & Pulse Aura */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#10B981] via-[#06B6D4] to-blue-500 opacity-20 blur-xl animate-pulse" />
                  <div className="absolute inset-2 rounded-3xl border-2 border-dashed border-[#10B981]/40 animate-spin-slow" />
                  <div className="absolute inset-5 rounded-2xl border border-emerald-500/20" />

                  {/* Central Glass Core Visual Hub */}
                  <div className="w-52 h-52 sm:w-56 sm:h-56 rounded-2xl bg-[#061812] border-2 border-[#10B981] shadow-2xl p-5 flex flex-col items-center justify-center text-center space-y-2 backdrop-blur-2xl relative z-10 text-white">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#06B6D4] text-white flex items-center justify-center font-bold shadow-md">
                      <Network className="w-6 h-6 animate-pulse" />
                    </div>

                    <div className="space-y-0.5 font-mono">
                      <div className="font-black text-xs text-white tracking-widest uppercase">
                        PHARMAPULSE
                      </div>
                      <div className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider">
                        TECHNOLOGY ECOSYSTEM
                      </div>
                    </div>

                    <div className="flex flex-col gap-0.5 text-[8px] font-mono text-slate-300 uppercase tracking-wider pt-1 border-t border-white/10 w-full">
                      <span className="text-emerald-300 font-bold">5 TIERS INTEGRATED</span>
                      <span>ZERO RACE-CONDITION</span>
                      <span>SUB-50MS LATENCY</span>
                    </div>

                    <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                      STACK BUS ACTIVE
                    </span>
                  </div>

                </div>
              </div>

              {/* RIGHT 3 PANELS (DATABASE, SECURITY, INTEGRATION) */}
              <div className="lg:col-span-4 space-y-4">
                {[TECH_DOMAINS[2], TECH_DOMAINS[3], TECH_DOMAINS[4]].map((domain) => {
                  const isActive = activeTechDomain === domain.id
                  const Icon = domain.icon
                  return (
                    <div
                      key={domain.id}
                      onClick={() => setActiveTechDomain(domain.id)}
                      onMouseEnter={() => setActiveTechDomain(domain.id)}
                      className={`p-5 rounded-2xl border-2 transition-all duration-300 space-y-3 cursor-pointer relative bg-gradient-to-r ${domain.bgGradient} ${
                        isActive
                          ? `${domain.activeBorder} shadow-lg scale-[1.03] z-20`
                          : `${domain.borderColor} opacity-85 hover:opacity-100 shadow-xs z-10`
                      }`}
                    >
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                            <Icon className="w-4 h-4" style={{ color: domain.accentColor }} />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
                              DOMAIN 0{domain.id + 1}
                            </span>
                            <h3 className="font-display font-bold text-sm text-[#17121F]">
                              {domain.domain}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {domain.techs.map((t) => (
                          <span
                            key={t}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border transition-all ${
                              isActive
                                ? 'bg-white text-slate-900 border-slate-300 shadow-2xs scale-105'
                                : 'bg-white/80 text-slate-700 border-slate-200'
                            }`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>

            {/* Active Domain Detailed Description Panel */}
            <div className="p-5 rounded-2xl bg-[#17121F] text-white border border-slate-800 space-y-2 font-mono shadow-lg">
              <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                <span className="text-emerald-400 font-bold uppercase">
                  ARCHITECTURE SPECIFICATIONS — {TECH_DOMAINS[activeTechDomain].domain.toUpperCase()} DOMAIN
                </span>
                <span className="text-slate-400 text-[10px]">VERIFIED STACK COMPONENT</span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {TECH_DOMAINS[activeTechDomain].desc}
              </p>
            </div>

          </div>

          {/* Bottom Architectural Summary Statement */}
          <div className="pt-4 text-center font-mono font-black text-xs sm:text-sm text-[#17121F] uppercase tracking-widest bg-white border border-[#E9E2F5] p-4 rounded-2xl max-w-3xl mx-auto shadow-2xs">
            ⚡ SECURE • HIGH-PERFORMANCE • SCALABLE SAAS INFRASTRUCTURE
          </div>

        </div>
      </section>

      {/* ── 9. TECHNICAL ARCHITECTURE (VISUAL FLOW) ──────────── */}
      <section id="architecture" className="py-20 lg:py-28 bg-[#061812] text-white border-b border-emerald-900">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Network className="w-4 h-4 text-emerald-400" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              5-Tier System Architecture
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Sub-second request execution flow from client interface down to relational PostgreSQL tables.
            </p>
          </div>

          {/* Visual Vertical Stack Flow */}
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { name: 'React 19 Frontend', detail: 'Vite SPA + Tailwind CSS Client Interface', color: 'border-emerald-500/40 bg-emerald-950/60 text-emerald-300' },
              { name: 'Secure Express API Gateway', detail: 'Node.js REST Controllers + JWT & Helmet Middleware', color: 'border-cyan-500/40 bg-cyan-950/60 text-cyan-300' },
              { name: 'Business & Intelligent Engines', detail: 'FEFO Allocation, Cold-Chain Telemetry & Audit Rules', color: 'border-indigo-500/40 bg-indigo-950/60 text-indigo-300' },
              { name: 'Prisma ORM Layer', detail: 'Type-safe Schema Definitions & Query Optimization', color: 'border-purple-500/40 bg-purple-950/60 text-purple-300' },
              { name: 'PostgreSQL Relational Database', detail: 'ACID Transactions & Partitioned Batch Inventory Tables', color: 'border-teal-500/40 bg-teal-950/60 text-teal-300' }
            ].map((node, i) => (
              <React.Fragment key={node.name}>
                <div className={`p-6 rounded-2xl border ${node.color} flex items-center justify-between shadow-xl`}>
                  <div>
                    <div className="font-display font-bold text-lg text-white">{node.name}</div>
                    <div className="text-xs font-mono pt-0.5">{node.detail}</div>
                  </div>
                  <span className="text-xs font-mono font-bold opacity-60">TIER 0{i + 1}</span>
                </div>
                {i < 4 && (
                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-6 bg-emerald-500/40" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>


      {/* ── 11. UNIQUE INNOVATION ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#4F46E5] text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4 text-[#4F46E5]" />
              <span>CORE INNOVATION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#17121F] tracking-tight">
              Unique Engineering Innovations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Four core technological breakthroughs setting PharmaPulse apart from generic ERP tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Intelligent FEFO Priority Locking', desc: 'Algorithmic batch reservation ensuring shortest shelf life medicines are sold first.' },
              { title: 'Real-Time IoT Cold Chain Monitoring', desc: 'Continuous telemetry mapping vaccine refrigerators with automated breach pings.' },
              { title: 'Hierarchical Warehouse-to-Shelf Tracking', desc: 'Multi-tier storage bin mapping connecting central stores to local retail shelves.' },
              { title: 'Unified Clinical, ERP, Billing & Workforce', desc: 'Single connected codebase managing healthcare, retail sales, HR, and tax accounting.' }
            ].map((inno) => (
              <div key={inno.title} className="p-7 rounded-3xl bg-white border-2 border-[#C7D2FE] shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#17121F]">{inno.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{inno.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 12. FUTURE VISION ─────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>PRODUCT ROADMAP</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Future Vision &amp; Innovations
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Upcoming features currently in development for next-generation PharmaPulse releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'AI-Powered Inventory Prediction', desc: 'Machine learning demand forecasting based on seasonal illness trends and regional consumption.' },
              { title: 'OCR Prescription & Invoice Scanning', desc: 'Instant optical character recognition scanning handwritten doctor prescriptions and vendor bills.' },
              { title: 'Doctor & Patient Mobile Ecosystem', desc: 'Native iOS/Android apps for real-time prescription tracking, refill requests, and patient alerts.' }
            ].map((vis) => (
              <div key={vis.title} className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-white">{vis.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{vis.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 13. SYSTEM IMPLEMENTATION SHOWCASE (MODULE SCREENS) ── */}
      <div id="modules-gallery">
        <ProductImplementationShowcase
          productId="pharmacy-erp"
          productName="PharmaPulse ERP"
          directScreens={PHARMACY_ERP_SCREEN_ASSETS}
        />
      </div>

      {/* ── 14. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#061812] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#6EE7B7] uppercase tracking-wider bg-emerald-950/60 border border-emerald-800/60 px-4 py-1.5 rounded-full">
            READY TO MODERNIZE YOUR PHARMACY OPERATIONS?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a PharmaPulse <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6EE7B7] to-[#10B981]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss FEFO inventory intelligence, IoT cold-chain monitoring, Schedule H1 compliance registers, and thermal printer setups directly with Founder &amp; CEO Jeyawin D and our healthcare software leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-white font-display font-bold text-sm shadow-xl shadow-[#10B981]/30 transition-all"
            >
              <span>Start PharmaPulse Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
