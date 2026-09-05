import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Pill,
  Factory,
  MessageCircle,
  ShoppingCart,
  Boxes,
  GraduationCap,
  Radio,
  DollarSign,
  Layers,
  Zap,
  ShieldCheck,
  Activity,
  Database
} from 'lucide-react'
import { Link, usePath } from '../components/Router'
import PillButton from '../components/PillButton'
import { PRODUCT_DATA } from './ProductDetailPage'

// ─────────────────────────────────────────────────────────────
// PRODUCT CATALOG ORGANIZED BY 3 CORE CATEGORIES
// ─────────────────────────────────────────────────────────────
export const PRODUCTS_CATALOG = [
  // 1. Smart Automation Solutions (Referenced from Nexomatic.in 7 Industry Sectors)
  {
    id: 'home-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'HOME AUTOMATION',
    name: 'DASA SmartHome Automation',
    headline: 'Intelligent Residential Lighting, Climate, Curtains & Offline Gateway',
    summary: 'Centralized app and voice control for lights, fans, ACs, curtains, and security. 100% offline-first edge architecture and retrofit installation without wall hacking.',
    tags: ['Offline Edge Gateway', 'Voice & Touch Keypads', 'Retrofit Ready'],
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'hospital-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'HOSPITAL AUTOMATION',
    name: 'DASA Hospital & Clinical Automation',
    headline: 'Operation Theater Precision Climate, Nurse Call & Cleanroom Controls',
    summary: 'Clinical-grade patient room environment, laminar OT precision temperature/humidity, medical gas line alarms, and wireless IP nurse call systems with instant audio intercom.',
    tags: ['Nurse Call Telemetry', 'OT Cleanroom Climate', 'NABH Compliant'],
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'office-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'OFFICE AUTOMATION',
    name: 'DASA Office & Workplace Automation',
    headline: 'Smart Conference Rooms, Centralized HVAC & Occupancy Lighting',
    summary: 'Commercial workplace intelligence: one-touch meeting room launch, occupancy and daylight harvesting, centralized AC scheduling, and IAQ indoor air quality monitoring.',
    tags: ['Smart Meeting Rooms', 'Occupancy Lighting', 'Centralized HVAC'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'hotel-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'HOTEL AUTOMATION',
    name: 'DASA Hotel Automation (GRMS)',
    headline: 'Guest Room Management System (GRMS), Keyless Entry & Master Consoles',
    summary: 'Luxury hospitality tech: automated welcome scenes, keyless mobile check-in, bedside capacitive touch master panels, DND/MUR indicators, and energy cut on vacancy.',
    tags: ['GRMS System', 'Welcome Scenes', 'Bedside Master Glass'],
    img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'industrial-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'INDUSTRIAL AUTOMATION',
    name: 'DASA Industrial Automation & Plant Telemetry',
    headline: 'Factory Floor Motor Management, Per-Machine Metering & Safety Interlocks',
    summary: 'Heavy-duty industrial controls: motor and pump telemetry, per-machine energy metering, safety monitoring, light curtains, and PLC/SCADA integration.',
    tags: ['Per-Machine Metering', 'PLC / SCADA', 'Safety Interlocks'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'agri-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'AGRI AUTOMATION',
    name: 'DASA AgriSmart Automation',
    headline: 'Precision Soil Moisture Telemetry, Dry-Run Protection & Drip Control',
    summary: 'Automated drip and micro-sprinkler irrigation, dry-run pump protection, multi-depth soil probes, and solar pump remote control via LoRaWAN.',
    tags: ['Dry-Run Pump Protection', 'LoRaWAN Long-Range', 'Automated Fertigation'],
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'cold-storage-automation',
    categoryGroup: 'Smart Automation Solutions',
    category: 'COLD STORAGE AUTOMATION',
    name: 'DASA Cold Storage & Refrigeration Automation',
    headline: 'Multi-Zone Temperature Logging (-40°C), Peak Load Shedding & Gas Detection',
    summary: 'Refrigeration energy management: multi-point data logging (-40°C to +15°C), per-freezer circuit metering, peak load shedding within safe limits, and ammonia leak alarms.',
    tags: ['Sub-Zero Telemetry', 'Peak Load Shedding', 'Ammonia Gas Alert'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'iot-telemetry',
    categoryGroup: 'Smart Automation Solutions',
    category: 'IOT AUTOMATION',
    name: 'DASA EdgeMesh IoT',
    headline: 'Sub-GHz Sensor Mesh, Machine Health & IoT Automation',
    summary: 'Long-range wireless environmental and machine telemetry mesh operating across multi-kilometer industrial sites with 5+ year battery life.',
    tags: ['Sub-GHz Mesh', 'Machine Telemetry', 'IoT Automation'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90'
  },

  // 2. Business Operations Suites
  {
    id: 'pharmacy-erp',
    categoryGroup: 'Business Operations Suites',
    category: 'HEALTHCARE & PHARMA',
    name: 'DASA MedFlow ERP',
    headline: 'Multi-Branch Pharmacy ERP & Prescription Inventory',
    summary: 'Sub-second POS thermal billing, automated FIFO batch expiry alerts, Schedule H1 drug registers, and automated supplier reordering.',
    tags: ['FIFO Expiry', 'Schedule H1', 'POS Thermal Billing'],
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'finance-accounting',
    categoryGroup: 'Business Operations Suites',
    category: 'FINANCE & ACCOUNTING',
    name: 'DASA LedgerFlow & GST Finance',
    headline: 'Double-Entry Accounting, Automated GST & Financial Ledger ERP',
    summary: 'Strict atomic general ledger balancing, bank statement OCR parser, automated accounts receivable aging reminders, and statutory GST returns.',
    tags: ['Double-Entry Core', 'Bank OCR Parser', 'GST E-Filing'],
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'factory-erp',
    categoryGroup: 'Business Operations Suites',
    category: 'MANUFACTURING & SCADA',
    name: 'DASA FactorySync ERP',
    headline: 'Shop Floor Manufacturing & Work-In-Progress SCADA ERP',
    summary: 'Multi-level Bill of Materials (BOM) explosion, live machine uptime telemetry, overall equipment effectiveness (OEE), and touch job cards.',
    tags: ['Modbus / OPC-UA', 'Multi-Level BOM', 'Live OEE Telemetry'],
    img: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'warehouse-erp',
    categoryGroup: 'Business Operations Suites',
    category: 'LOGISTICS & SUPPLY CHAIN',
    name: 'DASA WMS Hub',
    headline: 'Smart Warehouse Management & Bin Location Inventory ERP',
    summary: '3D multi-aisle bin location routing, shortest-path wave picking, handheld Android PDA barcode scanning, and continuous cycle counting.',
    tags: ['3D Bin Matrix', 'Shortest Wave Pick', 'Android PDA Scanners'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=90'
  },

  // 3. Standalone Platforms
  {
    id: 'ecommerce-engine',
    categoryGroup: 'Standalone Platforms',
    category: 'E-COMMERCE & RETAIL',
    name: 'DASA CommerceEngine',
    headline: 'Next-Gen Headless Commerce & Multi-Vendor Marketplace',
    summary: 'Sub-600ms edge-rendered Next.js storefront, frictionless one-click checkout, automated vendor commission splits, and retail store stock sync.',
    tags: ['Headless Next.js', '1-Click Checkout', 'Vendor Splits'],
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'snapshare-social',
    categoryGroup: 'Standalone Platforms',
    category: 'AI & PHOTOGRAPHY PLATFORM',
    name: 'DASA SnapFlow Studio AI',
    headline: 'AI-Powered Event Photo Distribution & Studio CRM Operating System',
    summary: 'DASA SnapFlow combines 512D facial vector AI, dynamic QR photo access, studio CRM, secure galleries, digital contracts, automated invoicing, and MinIO S3 storage into one centralized platform.',
    tags: ['InsightFace 512D', 'Dynamic QR Hubs', 'Studio CRM', 'MinIO S3 Vault'],
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=90'
  },
  {
    id: 'school-erp',
    categoryGroup: 'Standalone Platforms',
    category: 'EDUCATION & ACADEMICS',
    name: 'DASA EduCore Campus ERP',
    headline: 'Unified Campus Management, SIS & Academic Operating System',
    summary: 'Comprehensive School & College ERP bringing admissions, biometric attendance, student records, conflict-free timetables, online fee collections, gradebooks, HR, and bus GPS tracking into one platform.',
    tags: ['Biometric Gate Sync', 'CBSE / State Grades', 'Automated Fee Gateway', 'Fleet GPS'],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90'
  }
]

// ─────────────────────────────────────────────────────────────
// 1. FULL-WIDTH HERO SECTION (project-pg.png)
// ─────────────────────────────────────────────────────────────
function ProductHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [heroImgSrc, setHeroImgSrc] = useState('/project-pg.png')

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 12,
      y: (e.clientY / window.innerHeight - 0.5) * 12
    })
  }

  const titleLines = [
    { text: 'Enterprise Platform Systems', accent: null },
    { text: 'Engineered for Global Growth.', accentWord: 'Global' }
  ]

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] lg:min-h-screen flex items-end pb-16 sm:pb-24 overflow-hidden bg-[#0A0D18] select-none pt-28 sm:pt-32"
    >
      {/* Parallax Full-Width Hero Background (project-pg.png) */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 36, damping: 18 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroImgSrc}
          onError={() => setHeroImgSrc('/project-pg.png')}
          alt="DASA TECH Enterprise Software Platforms"
          className="w-full h-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-[#0A0D18]/65 to-[#0A0D18]/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D18]/80 via-[#0A0D18]/40 to-transparent pointer-events-none" />
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="w-8 h-px bg-[#A855F7]" />
          <span className="text-xs font-semibold tracking-wider text-purple-300 uppercase">
            Enterprise Software &amp; Automations
          </span>
        </motion.div>

        {/* Title Reveal */}
        <div className="mb-8 space-y-1">
          {titleLines.map((line, lineIdx) => (
            <div key={lineIdx} className="overflow-hidden py-1 sm:py-2">
              <motion.div
                initial={{ y: '120%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.88,
                  delay: 0.38 + lineIdx * 0.14,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display font-black text-[38px] sm:text-[62px] lg:text-[78px] xl:text-[88px] text-white leading-[1.12] sm:leading-[1.08] tracking-tight pb-2 sm:pb-3"
              >
                {line.accentWord
                  ? line.text.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && ' '}
                        {word === line.accentWord ? (
                          <span className="text-color-shift">
                            {word}
                          </span>
                        ) : word}
                      </span>
                    ))
                  : line.text}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtitle + Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
        >
          <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] max-w-xl leading-relaxed font-normal">
            Explore our production-ready ERP platforms, standalone cloud suites, and industry-specific software architectures.
          </p>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#catalog"
              className="px-6 py-3.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-sm transition-all flex items-center gap-2 group shadow-2xl shadow-[#6D28D9]/40"
            >
              <span>Explore Platform Portfolio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// 2. PRODUCT VISUAL TILE (EXACT HOMEPAGE HOVER CONCEPT)
// Product Image → Product Name → Interactive Bottom-to-Top Reveal
// ─────────────────────────────────────────────────────────────
function HomepageStyleProductTile({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { navigate } = usePath()

  const openProduct = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={openProduct}
      className="relative w-full h-[320px] sm:h-[350px] rounded-[24px] overflow-hidden border-2 border-[#E9E2F5] hover:border-[#6D28D9] bg-[#0F0B18] shadow-md hover:shadow-2xl hover:shadow-[#6D28D9]/25 transition-all duration-500 cursor-pointer group select-none"
    >
      {/* 1. High-Resolution Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className={`w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] ${
          isHovered ? 'scale-106 opacity-85' : 'scale-100 opacity-95'
        }`}
      />

      {/* Ambient Gradient Underlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/90 via-[#0F0B18]/30 to-transparent pointer-events-none" />

      {/* Top Header Badge (Default Unhovered State) */}
      <div
        className={`absolute top-4 left-4 right-4 z-10 flex items-center justify-between transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] font-mono font-bold text-white bg-[#0F0B18]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider shadow-md">
          {product.category}
        </span>
        <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Ready</span>
        </span>
      </div>

      {/* 2. Default Unhovered State: Crisp Title Card at Image Base */}
      <div
        className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-400 ease-[0.16,1,0.3,1] ${
          isHovered ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="p-4 rounded-2xl bg-[#0F0B18]/85 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block">
              {product.categoryGroup}
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-tight">
              {product.name}
            </h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-lg shrink-0 border border-[#A855F7]/40">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* 3. Interactive Hover: Subtle Bottom-to-Top Reveal Card */}
      <div
        className={`absolute inset-x-0 bottom-0 top-auto z-20 transition-all duration-500 ease-[0.16,1,0.3,1] transform ${
          isHovered
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 sm:p-6 rounded-t-[24px] bg-white border-t-2 border-[#6D28D9] shadow-2xl space-y-3">
          
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
                {product.category}
              </span>
              <h3 className="font-display font-black text-lg sm:text-xl text-[#0F172A]">
                {product.name}
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#6D28D9] bg-[#F7F3FF] px-2.5 py-1 rounded-full border border-[#DDD0FF] shrink-0">
              ARCHITECTURE
            </span>
          </div>

          <p className="text-xs text-[#334155] leading-relaxed font-semibold line-clamp-2">
            {product.summary}
          </p>

          {/* Configuration / Capability Tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-bold text-[#5B21B6] bg-[#F7F3FF] px-2.5 py-1 rounded-md border border-[#C4B5FD]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Link CTA */}
          <div className="pt-1">
            <Link
              to={`/products/${product.id}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-xs shadow-md transition-all group/btn"
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Architecture &amp; Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// 3. MAIN PRODUCTS PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ProductsPage() {
  const [selectedTab, setSelectedTab] = useState('all')

  const filterTabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'Smart Automation Solutions', label: 'Smart Automation Solutions' },
    { id: 'Business Operations Suites', label: 'Business Operations Suites' },
    { id: 'Standalone Platforms', label: 'Standalone Platforms' }
  ]

  const filteredProducts = selectedTab === 'all'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(p => p.categoryGroup === selectedTab)

  return (
    <div className="min-h-screen bg-white text-[#17121F] relative overflow-hidden select-none">

      {/* ── 1. CINEMATIC FULL-WIDTH OPENING HERO (project-pg.png) ── */}
      <ProductHero />

      {/* ── 2. CATALOG HEADER & CLEAR CATEGORY SELECTION ─────────── */}
      <section id="catalog" className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-8">
        
        <div className="space-y-6 pb-6 border-b border-[#E9E2F5]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-wider text-[#6D28D9] uppercase block">
                Software &amp; Automations Portfolio
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
                Production-Ready <span className="text-color-shift">Software Platforms</span>
              </h2>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-500">
              Showing {filteredProducts.length} Platforms
            </span>
          </div>

          {/* Fluid Sliding Pill Category Filters - Arranged Cleanly in Single Balanced Row */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-2xl text-xs font-mono font-bold tracking-wide transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? 'text-white'
                      : 'text-[#64748B] hover:text-[#17121F] bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#DDD0FF] hover:bg-[#F7F3FF]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                      className="absolute inset-0 rounded-2xl bg-[#6D28D9] shadow-md shadow-[#6D28D9]/30"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

      </section>

      {/* ── 3. PRODUCT GRID (HOMEPAGE IMAGE → NAME → HOVER STYLE) ─── */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-24">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <HomepageStyleProductTile product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ── 4. ELEVATED CONSULTATION CTA ──────────────────────────── */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
        <div className="relative p-10 sm:p-14 rounded-[32px] border border-[#E9E2F5] bg-gradient-to-b from-[#FAF8FF] via-white to-[#F5F0FF] shadow-lg overflow-hidden space-y-4">
          <div className="text-xs font-bold tracking-wider text-[#6D28D9] uppercase">
            Custom Development &amp; Deployment
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#17121F] font-display tracking-tight">
            Need a <span className="text-color-shift">Customized ERP</span> or Dedicated Software?
          </h2>

          <p className="text-[#64748B] max-w-xl mx-auto font-normal text-sm sm:text-base leading-relaxed">
            We customize and deploy our proprietary ERPs, mobile platforms, and e-commerce engines to match your exact business hierarchy, compliance laws, and workflows.
          </p>

          <div className="pt-2">
            <PillButton
              to="/contact"
              variant="primary"
              arrow="up-right"
              size="lg"
            >
              Request Custom Development Consultation
            </PillButton>
          </div>
        </div>
      </section>

    </div>
  )
}
