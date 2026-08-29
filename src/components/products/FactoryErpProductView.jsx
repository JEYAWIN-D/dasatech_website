import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory, Cpu, Layers, Activity, Gauge, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Wrench,
  Boxes, FileText, Search, RefreshCw, AlertTriangle
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA FACTORYSYNC ERP PRODUCT VIEW (factory-erp)
// Unique Theme: Industrial SCADA Shop Floor & Machine OEE Telemetry Station
// Color Accents: Electric Orange (#EA580C), Dark Steel (#18181B), Warning Amber
// Unique Interactive Features:
// 1. Interactive Multi-Level Bill of Materials (BOM) Tree Visualizer
// 2. Live Machine OEE & Uptime Telemetry Gauge Dials
// 3. Work-In-Progress Shop Floor Job Card Controller
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside FactoryErpProductView component file
const FACTORY_ERP_SCREEN_ASSETS = [
  {
    id: 'dashboard',
    module: 'Executive Dashboard',
    title: 'Factory SCADA Operations & Live OEE Telemetry',
    subtitle: 'Real-time Overview Equipment Effectiveness (OEE), active production lines, and workstation alerts.',
    tag: 'SCADA Telemetry',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/scada-telemetry',
    specs: ['Modbus / OPC-UA', 'Live OEE Dials', 'Workstation Status']
  },
  {
    id: 'bom-explosion',
    module: 'Bill of Materials',
    title: 'Multi-Level Bill of Materials (BOM) Tree Inspector',
    subtitle: 'Explode complex manufactured products into sub-assemblies, raw metal stock, and hardware components.',
    tag: 'BOM Engineering',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/bom-tree',
    specs: ['Multi-Tier BOM', 'Raw Material Costing', 'Sub-Assembly Routing']
  },
  {
    id: 'job-cards',
    module: 'Shop Floor Job Cards',
    title: 'Touch-Screen Workstation Job Cards & Operator Terminal',
    subtitle: 'Touchscreen terminals mounted at CNC stations allowing operators to log setup time and completed units.',
    tag: 'Operator Console',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/job-cards',
    specs: ['Touch Keypad SDK', 'Station Time Tracker', 'Scrap Logging']
  },
  {
    id: 'raw-stock',
    module: 'Raw Materials Stock',
    title: 'Raw Material Lot Reservation & Automated Supplier POs',
    subtitle: 'Automatic allocation of raw steel ingots and components for approved production work orders.',
    tag: 'Raw Stock Ledger',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/raw-materials',
    specs: ['Lot Number Allocation', 'Auto Supplier PO', 'Reorder Triggers']
  },
  {
    id: 'qc-inspection',
    module: 'Quality Inspection',
    title: 'Work-In-Progress Quality Control & Defect Logging',
    subtitle: 'Digital QC checklists verifying tolerances, surface finish, and dimension specs before final assembly.',
    tag: 'QC Pass Inspection',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/qc-inspection',
    specs: ['ISO Quality Audit', 'Defect Pareto Analytics', 'QC Sign-Off']
  },
  {
    id: 'machine-health',
    module: 'Machine Health Telemetry',
    title: 'Machine Temperature & Motor Vibration Sensor Telemetry',
    subtitle: 'Continuous machine vibration FFT analysis and bearing heat sensing with automated technician alerts.',
    tag: 'Predictive Maintenance',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/machine-telemetry',
    specs: ['Vibration FFT Spectrum', 'Temperature Alarms', 'Sub-10ms Alerts']
  },
  {
    id: 'dispatch',
    module: 'Finished Goods Dispatch',
    title: 'Finished Goods Batch Packaging & Carrier Manifest',
    subtitle: 'Final barcode tagging of completed manufactured goods and carrier manifest generation.',
    tag: 'Goods Dispatch',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/goods-dispatch',
    specs: ['Barcode Label Print', 'E-Way Bill Export', 'Warehouse Handover']
  },
  {
    id: 'reports',
    module: 'Production Reports',
    title: 'Plant Capacity Utilization & OEE Performance Reports',
    subtitle: 'Executive shift summary reports analyzing machine downtime reasons, labor efficiency, and scrap rates.',
    tag: 'Plant Analytics',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/factorysync/plant-analytics',
    specs: ['Shift Utilization', 'Downtime Pareto', 'Cost Per Unit']
  }
]

export default function FactoryErpProductView() {
  const [selectedBomNode, setSelectedBomNode] = useState('assy-01')
  const [oeeState, setOeeState] = useState({
    availability: '96.4%',
    performance: '98.1%',
    quality: '99.8%',
    overall: '94.5%'
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const BOM_TREE = [
    { id: 'assy-01', name: 'Hydraulic Actuator Unit (Finished Product)', qty: '1 Unit', cost: 'Raw Steel & Hydro Valves', depth: 0 },
    { id: 'sub-01', name: 'Station 01: Precision CNC Piston Shaft', qty: '1 Assembly', cost: 'Grade 316 Stainless Steel', depth: 1 },
    { id: 'sub-02', name: 'Station 02: Pressure Seal Ring Assembly', qty: '4 Units', cost: 'Viton O-Rings & Brass Bushings', depth: 1 },
    { id: 'raw-01', name: 'Raw Material Lot #RM-901', qty: '12.5 KG', cost: 'High-Tensile Alloy Ingot', depth: 2 }
  ]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#EA580C] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#EA580C] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#EA580C] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#EA580C] font-bold">DASA FactorySync ERP</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#EA580C] bg-white hover:bg-[#FFF7ED] border border-[#E9E2F5] hover:border-[#FDBA74] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: SHOP FLOOR TELEMETRY STATION ─────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#FFF7ED] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-[#EA580C] text-xs font-mono font-bold uppercase tracking-wider">
                <Factory className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>MANUFACTURING &amp; SHOP-FLOOR SCADA ERP</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                DASA FactorySync <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA580C] via-[#C2410C] to-[#EAB308]">SCADA ERP.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Manufacturing ERP software connecting multi-level Bill of Materials (BOM) explosion, live machine OEE uptime telemetry, station job cards, and raw material inventory tracking.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Multi-Level BOM Explosion', 'Live Machine OEE Telemetry', 'Work-In-Progress Job Cards', 'Raw Material Reorder', 'Modbus / PLC Gateway'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#9A3412] bg-[#FFEDD5] border border-[#FDBA74] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#bom-tree"
                  className="px-6 py-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#EA580C]/25 transition-all flex items-center gap-2"
                >
                  <span>Inspect BOM Hierarchy</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#oee-gauges"
                  className="px-5 py-3.5 rounded-full bg-[#FFEDD5] hover:bg-[#FDBA74] text-[#9A3412] font-display font-bold text-xs sm:text-sm border border-[#FDBA74] transition-colors"
                >
                  <span>Machine OEE Dials</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Machine OEE Gauge Preview */}
            <div className="lg:col-span-7">
              <div id="oee-gauges" className="rounded-3xl p-6 sm:p-7 bg-[#140F0A] border-2 border-white/15 text-white shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#EA580C] text-white flex items-center justify-center font-bold">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Overall Equipment Effectiveness (OEE)</div>
                      <div className="text-[10px] font-mono text-slate-400">Live PLC Telemetry Stream &bull; CNC Milling Line 04</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#EA580C]/30 text-[#FDBA74] px-3 py-1 rounded-full border border-[#FDBA74]/30">
                    OEE 94.5% EXCELLENT
                  </span>
                </div>

                {/* 4 OEE Gauge Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400">Availability</div>
                    <div className="text-lg font-bold text-emerald-400 mt-1">{oeeState.availability}</div>
                    <div className="text-[9px] text-slate-500">Scheduled Uptime</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400">Performance</div>
                    <div className="text-lg font-bold text-emerald-400 mt-1">{oeeState.performance}</div>
                    <div className="text-[9px] text-slate-500">Rated Speed</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[10px] text-slate-400">Quality Pass</div>
                    <div className="text-lg font-bold text-emerald-400 mt-1">{oeeState.quality}</div>
                    <div className="text-[9px] text-slate-500">Zero Scrap Defect</div>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#EA580C]/30 border border-[#FDBA74]/40">
                    <div className="text-[10px] text-orange-200">Overall OEE</div>
                    <div className="text-lg font-bold text-[#FDBA74] mt-1">{oeeState.overall}</div>
                    <div className="text-[9px] text-orange-300">World Class</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTERACTIVE BILL OF MATERIALS (BOM) TREE ──────── */}
      <section id="bom-tree" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFEDD5] px-3.5 py-1.5 rounded-full border border-[#FDBA74]">
              <Layers className="w-3.5 h-3.5" />
              <span>MULTI-LEVEL BOM EXPLOSION</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Bill of Materials <span className="text-color-shift">Tree Inspector</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how DASA FactorySync automatically explodes finished goods into sub-assemblies and raw material requirements.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto font-mono text-xs">
            {BOM_TREE.map((node) => {
              const isSelected = selectedBomNode === node.id
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedBomNode(node.id)}
                  style={{ marginLeft: `${node.depth * 28}px` }}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#FFEDD5] border-[#EA580C] text-[#17121F] shadow-md scale-102'
                      : 'bg-[#FAF8FF] border-[#E9E2F5] hover:border-[#FDBA74]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                    <span className="font-display font-bold text-sm">{node.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-[#EA580C]">{node.qty}</span>
                    <div className="text-[10px] text-slate-500">{node.cost}</div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 3. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="factory-erp"
        productName="DASA FactorySync ERP"
        directScreens={FACTORY_ERP_SCREEN_ASSETS}
      />

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#140F0A] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#FDBA74] uppercase tracking-wider bg-orange-950/60 border border-orange-800/60 px-4 py-1.5 rounded-full">
            READY TO AUTOMATE YOUR SHOP FLOOR?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a DASA FactorySync <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDBA74] to-[#EA580C]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss multi-level BOM explosion rules, machine PLC SCADA gateways, and station job cards directly with Founder &amp; CEO Jeyawin D and our manufacturing engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-display font-bold text-sm shadow-xl shadow-[#EA580C]/30 transition-all"
            >
              <span>Start FactorySync Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
