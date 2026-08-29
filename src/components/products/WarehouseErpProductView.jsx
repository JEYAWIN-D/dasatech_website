import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Boxes, Scan, Navigation, Smartphone, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Layers,
  FileText, Search, Activity, RefreshCw, MapPin
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA WMS HUB PRODUCT VIEW (warehouse-erp)
// Unique Theme: 3D Smart Warehouse & Logistics Routing Terminal
// Color Accents: Deep Cyan (#06B6D4), Cobalt Blue (#2563EB), Dark Navy
// Unique Interactive Features:
// 1. Interactive 3D Multi-Aisle Bin Matrix Locator
// 2. Shortest-Path Wave Picking Route Navigator
// 3. Handheld Android PDA Barcode Scanner Simulator
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside WarehouseErpProductView component file
const WAREHOUSE_ERP_SCREEN_ASSETS = [
  {
    id: 'dashboard',
    module: 'Executive Dashboard',
    title: 'Warehouse Operations & Live Bin Capacity Overview',
    subtitle: 'Real-time occupancy metrics across all aisles, active wave picking runs, and dock loading statuses.',
    tag: 'Warehouse HUD',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/dashboard',
    specs: ['Bin Capacity HUD', 'Wave Pick Tracker', 'Dock Management']
  },
  {
    id: 'bin-locator',
    module: '3D Bin Matrix',
    title: '3D Multi-Aisle Bin Location Matrix & Rack Navigator',
    subtitle: 'Visual shelf-to-bin locator mapping rack numbers, shelf levels, and bin addresses (e.g., A04-R02-B12).',
    tag: '3D Bin Matrix',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/bin-matrix',
    specs: ['3D Aisle Mapping', 'Rack Location Codes', 'Capacity Heatmap']
  },
  {
    id: 'wave-picking',
    module: 'Wave Picking Route',
    title: 'Shortest-Path Wave Picking Route Optimization',
    subtitle: 'Algorithmic route planning guiding warehouse pickers along the shortest walking path through aisles.',
    tag: 'Path Optimization',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/wave-picking',
    specs: ['Dijkstra Path Routing', '40% Distance Saved', 'Batch Order Pick']
  },
  {
    id: 'pda-scanners',
    module: 'Handheld PDA SDK',
    title: 'Android PDA Barcode Scanner Client Terminal',
    subtitle: 'Sub-second laser barcode scanning client for Android PDAs (Zebra/Honeywell) during receiving & picking.',
    tag: 'PDA Scanner App',
    img: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/pda-client',
    specs: ['Zebra Scanner SDK', 'Offline IndexedDB', 'Sub-10ms Lookup']
  },
  {
    id: 'receiving-dock',
    module: 'Inbound Dock',
    title: 'Inbound Gate Receiving & Delivery Challan Audit',
    subtitle: 'Verify inward supplier pallets against purchase orders and automatically assign putaway bin locations.',
    tag: 'Putaway Ingestion',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/receiving-dock',
    specs: ['Putaway Auto-Assign', 'Challan Verification', 'Pallet Barcode']
  },
  {
    id: 'cycle-counting',
    module: 'Stock Counting',
    title: 'Continuous Blind Cycle Counting & Inventory Audit',
    subtitle: 'Schedule perpetual blind stock counts by aisle without interrupting daily shipping operations.',
    tag: 'Cycle Count Audit',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/cycle-counting',
    specs: ['Blind Stock Audit', 'Discrepancy Ledger', 'Zero-Downtime Count']
  },
  {
    id: 'carrier-dispatch',
    module: 'Carrier Manifest',
    title: 'Carrier Shipping Manifest & Logistics Dispatch',
    subtitle: 'Generate carrier manifests, print shipping labels, and auto-dispatch tracking links to customers.',
    tag: 'Logistics Manifest',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/carrier-dispatch',
    specs: ['Shiprocket / Bluedart API', 'Label Print Driver', 'Tracking Dispatch']
  },
  {
    id: 'analytics',
    module: 'Analytics',
    title: 'Warehouse Picking Velocity & Dead Stock Heatmaps',
    subtitle: 'Analytics dashboard measuring picker items/hour, order fulfillment speed, and slow-moving SKU heatmaps.',
    tag: 'WMS Analytics',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/wmshub/wms-analytics',
    specs: ['Picker Speed Metric', 'Dead Stock Heatmap', 'Order Cycle Time']
  }
]

export default function WarehouseErpProductView() {
  const [selectedAisle, setSelectedAisle] = useState('aisle-04')
  const [isScanning, setIsScanning] = useState(false)
  const [scanResult, setScanResult] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const triggerPdaScan = () => {
    setIsScanning(true)
    setScanResult(false)
    setTimeout(() => {
      setIsScanning(false)
      setScanResult(true)
    }, 1000)
  }

  const AISLES = [
    { id: 'aisle-01', name: 'Aisle 01 &bull; Fast-Moving Goods', bin: 'A01-R01-B04', capacity: '88% Occupied', items: 'High-Demand Electronics' },
    { id: 'aisle-04', name: 'Aisle 04 &bull; Heavy Pallet Racks', bin: 'A04-R02-B12', capacity: '65% Occupied', items: 'Industrial Motors & Cables' },
    { id: 'aisle-07', name: 'Aisle 07 &bull; Cold Storage Bin', bin: 'A07-R03-B01', capacity: '42% Occupied', items: 'Temperature Sensitive Supplies' }
  ]

  const activeAisle = AISLES.find(a => a.id === selectedAisle) || AISLES[1]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#06B6D4] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#06B6D4] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#06B6D4] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#06B6D4] font-bold">DASA WMS Hub</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#06B6D4] bg-white hover:bg-[#ECFEFF] border border-[#E9E2F5] hover:border-[#A5F3FC] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: SMART WAREHOUSE TERMINAL ────────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#ECFEFF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFFAFE] border border-[#A5F3FC] text-[#0891B2] text-xs font-mono font-bold uppercase tracking-wider">
                <Boxes className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>WAREHOUSE MANAGEMENT &amp; BIN MATRIX</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                DASA WMS Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#0284C7] to-[#2563EB]">Smart Inventory.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Smart warehouse management software providing 3D multi-aisle bin location routing, shortest-path wave picking optimization, and handheld Android PDA barcode scanner synchronization.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  '3D Bin Location Matrix', 'Shortest Wave Picking', 'Android PDA Scanner SDK', 'Cycle Counting', 'Carrier Dispatch Manifest'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#0E7490] bg-[#CFFAFE] border border-[#A5F3FC] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#bin-matrix"
                  className="px-6 py-3.5 rounded-full bg-[#06B6D4] hover:bg-[#0891B2] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#06B6D4]/25 transition-all flex items-center gap-2"
                >
                  <span>Explore Bin Matrix</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#pda-simulator"
                  className="px-5 py-3.5 rounded-full bg-[#CFFAFE] hover:bg-[#A5F3FC] text-[#0E7490] font-display font-bold text-xs sm:text-sm border border-[#A5F3FC] transition-colors"
                >
                  <span>PDA Scanner Simulator</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Android PDA Scanner Simulator */}
            <div className="lg:col-span-7 flex justify-center">
              <div id="pda-simulator" className="w-full max-w-[340px] rounded-[36px] p-6 bg-[#041017] border-4 border-slate-700 text-white shadow-2xl space-y-4 font-mono text-xs text-center">
                <div className="w-12 h-3 rounded-full bg-slate-800 mx-auto" />
                <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-2">
                  <span>Android PDA Client v3.4</span>
                  <span className="text-[#67E8F9] font-bold">Zebra Scanner Connected</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-[10px] text-slate-400">Current Picking Target:</div>
                  <div className="font-display font-bold text-sm text-[#67E8F9]">{activeAisle.bin}</div>
                  <div className="text-[10px] text-slate-300">{activeAisle.items}</div>
                </div>

                <button
                  onClick={triggerPdaScan}
                  disabled={isScanning}
                  className="w-full py-3 rounded-xl bg-[#06B6D4] hover:bg-[#0891B2] text-white font-display font-bold text-xs transition-colors shadow-md disabled:opacity-50"
                >
                  {isScanning ? 'Scanning Barcode...' : 'Trigger Laser Scanner'}
                </button>

                {scanResult && (
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                    ITEM SCANNED &bull; BIN VERIFIED ACCURATE
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTERACTIVE 3D BIN LOCATION MATRIX ──────────────── */}
      <section id="bin-matrix" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#06B6D4] uppercase tracking-wider bg-[#CFFAFE] px-3.5 py-1.5 rounded-full border border-[#A5F3FC]">
              <MapPin className="w-3.5 h-3.5" />
              <span>3D WAREHOUSE LOCATOR</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Aisle &amp; Bin Matrix <span className="text-color-shift">Navigator</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Select an aisle below to inspect rack location codes, capacity limits, and inventory stored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AISLES.map((a) => {
              const isSelected = selectedAisle === a.id
              return (
                <div
                  key={a.id}
                  onClick={() => setSelectedAisle(a.id)}
                  className={`p-7 rounded-3xl border cursor-pointer transition-all duration-300 space-y-4 ${
                    isSelected
                      ? 'bg-[#CFFAFE]/40 border-[#06B6D4] shadow-xl scale-105'
                      : 'bg-[#FAF8FF] border-[#E9E2F5] hover:border-[#A5F3FC]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#06B6D4]">{a.bin}</span>
                    <span className="text-[10px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-[#E9E2F5]">{a.capacity}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#17121F]">{a.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{a.items}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 3. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="warehouse-erp"
        productName="DASA WMS Hub"
        directScreens={WAREHOUSE_ERP_SCREEN_ASSETS}
      />

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#041017] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#67E8F9] uppercase tracking-wider bg-cyan-950/60 border border-cyan-800/60 px-4 py-1.5 rounded-full">
            READY TO OPTIMIZE YOUR LOGISTICS?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a DASA WMS Hub <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#67E8F9] to-[#06B6D4]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss 3D bin location mapping, wave picking route algorithms, and Zebra Android PDA scanner setups directly with Founder &amp; CEO Jeyawin D and our WMS engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#06B6D4] hover:bg-[#0891B2] text-white font-display font-bold text-sm shadow-xl shadow-[#06B6D4]/30 transition-all"
            >
              <span>Start WMS Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
