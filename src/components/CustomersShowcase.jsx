import React, { useState } from 'react'
import { Link } from './Router'
import {
  Building2,
  GraduationCap,
  Wheat,
  Droplets,
  PackageCheck,
  Briefcase,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react'

import erodeSchoolLogo from '../assets/customers/erode-public-school.jpg'
import nandhiFeedsLogo from '../assets/customers/nandhi-cattle-feeds.jpg'
import ltcOilLogo from '../assets/customers/ltc-gingelly-oil.jpg'
import apcFoodsLogo from '../assets/customers/apc-agro-foods.jpg'
import msmGroupLogo from '../assets/customers/msm-group.png'
import kitcoLogo from '../assets/customers/kitco.jpg'

export const CUSTOMERS_DATA = [
  {
    id: 'erode-public-school',
    name: 'Erode Public School',
    tagline: "Tomorrow's Inside",
    industry: 'Education & Campus Administration',
    icon: GraduationCap,
    accentColor: 'from-rose-500 to-red-600',
    accentBorder: 'border-rose-200/80 hover:border-rose-400',
    accentBg: 'bg-rose-50',
    accentText: 'text-rose-700',
    badge: 'K-12 CAMPUS ERP',
    logo: erodeSchoolLogo,
    logoBg: 'bg-white',
    logoBorder: 'border-rose-100',
    logoScale: 'max-h-24 max-w-[150px]',
    solutionTitle: 'DASA Comprehensive Campus ERP & SIS',
    description: 'A unified campus management ecosystem engineered by DASA TECH that digitizes admissions, fee collection, student report cards, and parent-teacher communication across grades.',
    modules: [
      'Automated Tuition & Transport Fee Billing with Instant Receipts',
      'Student Information System (SIS) & Digital Academic Records',
      'Staff Biometric Attendance & Payroll Synchronization',
      'Parent Communication Web Portal & SMS Notifications'
    ],
    livePlatform: 'https://eps.dasatech.in'
  },
  {
    id: 'nandhi-cattle-feeds',
    name: 'Nandhi Cattle Feeds',
    tagline: 'High-Yield Precision Feeds',
    industry: 'Agro-Industrial & Animal Nutrition Manufacturing',
    icon: Wheat,
    accentColor: 'from-emerald-600 to-teal-700',
    accentBorder: 'border-emerald-200/80 hover:border-emerald-400',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-700',
    badge: 'AGRO MANUFACTURING ERP',
    logo: nandhiFeedsLogo,
    logoBg: 'bg-white',
    logoBorder: 'border-emerald-100',
    logoScale: 'max-h-24 max-w-[150px]',
    solutionTitle: 'Batch Production & Dealer Supply Chain ERP',
    description: 'Mission-critical manufacturing execution system handling raw grain intake, nutritional formulation recipes, silo inventory, and multi-district dealer dispatch logistics.',
    modules: [
      'Raw Grain Weighbridge & Moisture Intake Logging',
      'Nutritional Batch Formulation Recipe Automation',
      'Dealer Credit Management & Automated GST Invoicing',
      'Warehouse Silo Inventory & Reorder Level Triggers'
    ]
  },
  {
    id: 'ltc-gingelly-oil',
    name: 'LTC Gingelly Oil',
    tagline: 'Tradition • Purity • Trust — Pure Cold Pressed',
    industry: 'Edible Oils & FMCG Food Processing',
    icon: Droplets,
    accentColor: 'from-amber-600 to-yellow-600',
    accentBorder: 'border-amber-200/80 hover:border-amber-400',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-700',
    badge: 'FMCG PRODUCTION ERP',
    logo: ltcOilLogo,
    logoBg: 'bg-white',
    logoBorder: 'border-amber-100',
    logoScale: 'max-h-24 max-w-[150px]',
    solutionTitle: 'Cold-Pressed Extraction & Distribution ERP',
    description: 'End-to-end edible oil manufacturing and distribution architecture tracking sesame seed crushing yields, cold-press filtration batches, bottle packaging, and retail distribution.',
    modules: [
      'Sesame Seed Lot Procurement & Crushing Yield Analytics',
      'Quality Lab Filtration & Batch Purity Verification',
      'Multi-Tier Wholesale & Retail Distributor Dispatch',
      'Packaging Inventory & Barcode Lot Traceability'
    ]
  },
  {
    id: 'apc-agro-foods',
    name: 'APC Agro Food Products',
    tagline: 'Quality • Trust • Purity',
    industry: 'Agro Food Processing & Grain Export',
    icon: PackageCheck,
    accentColor: 'from-amber-500 to-orange-600',
    accentBorder: 'border-amber-200/80 hover:border-amber-400',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-700',
    badge: 'FOOD PROCESSING ERP',
    logo: apcFoodsLogo,
    logoBg: 'bg-white',
    logoBorder: 'border-amber-100',
    logoScale: 'max-h-20 max-w-[210px]',
    solutionTitle: 'Grain Milling & Multi-Branch Distribution Engine',
    description: 'High-throughput agro-processing management system orchestrating commercial grain intake, milling yield optimization, packaged food inventory, and B2B supermarket supply chains.',
    modules: [
      'Commercial Grain Inflow & Moisture Grade Tracking',
      'Milling Yield Loss Calculation & Real-Time Variance',
      'Finished Goods Packaging Line Serial Tracking',
      'Automated GST E-Way Bill & E-Invoice Generation'
    ]
  },
  {
    id: 'msm-ghee',
    name: 'MSM Ghee (MSM Group)',
    tagline: 'Flavour of Trust — Since 1973',
    industry: 'Pure Cow Ghee, Dairy Processing & FMCG (Est. 1973)',
    icon: Briefcase,
    accentColor: 'from-amber-600 via-yellow-600 to-amber-700',
    accentBorder: 'border-amber-300 hover:border-amber-500',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-800',
    badge: 'PURE GHEE & DAIRY ERP (EST. 1973)',
    logo: msmGroupLogo,
    logoBg: 'bg-[#151518]',
    logoBorder: 'border-slate-700/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)]',
    logoScale: 'max-h-22 max-w-[160px]',
    solutionTitle: 'Pure Ghee Clarification, Batch Traceability & FMCG Distribution ERP',
    description: 'Comprehensive dairy manufacturing and multi-tier FMCG supply chain architecture managing milk & butter procurement fat testing, automated ghee clarification temperature logging, packaging lines, and supermarket distributor logistics.',
    modules: [
      'Milk & Butter Procurement Batch Fat / Purity Testing',
      'Automated Ghee Clarification Temperature & Yield Logging',
      'Multi-State Supermarket & Wholesale Distributor Fulfillment',
      'Consolidated Group Ledgers & Automated GST E-Invoicing'
    ]
  },
  {
    id: 'kitco',
    name: 'KITCO',
    tagline: 'Kongu International Trade & Cultural Organization',
    industry: 'Global Trade Summits, Cultural Expo & Business Network',
    icon: Globe,
    accentColor: 'from-emerald-600 via-amber-600 to-red-600',
    accentBorder: 'border-amber-200/80 hover:border-amber-400',
    accentBg: 'bg-amber-50',
    accentText: 'text-amber-800',
    badge: 'GLOBAL TRADE & EXPO PORTAL',
    logo: kitcoLogo,
    logoBg: 'bg-white',
    logoBorder: 'border-amber-200',
    logoScale: 'max-h-24 max-w-[150px]',
    solutionTitle: 'Global Trade Summit Portal & Member Business Directory',
    description: 'An integrated enterprise web ecosystem powering global trade delegation registrations, international B2B buyer-seller networking, membership directory management, and multi-venue cultural expo coordination.',
    modules: [
      'International Business Delegation & Expo Registration',
      'Searchable B2B Member Trade Directory & Profiles',
      'Real-Time Event Ticketing & Delegate Badge Generation',
      'Cross-Border Trade Collaboration & Inquiry Dispatch'
    ]
  }
]

export default function CustomersShowcase({ showHeroHeader = true, compact = false }) {
  const [selectedCustomer, setSelectedCustomer] = useState(CUSTOMERS_DATA[0])

  return (
    <section className="relative py-20 lg:py-28 bg-[#FAF8FF] overflow-hidden border-t border-b border-[#EAE2F7] select-none">
      
      {/* Background Soft Ambient Lights */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(244,63,94,0.08) 50%, transparent 80%)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[400px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10 space-y-16">
        
        {/* Section Header */}
        {showHeroHeader && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-2xs text-xs font-mono font-bold text-purple-700 tracking-wider uppercase">
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span>TRUSTED ENTERPRISE CLIENTS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#18132A] tracking-tight leading-tight">
              Powering Operations for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-rose-600">
                Industry Leaders
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              From historic multi-generational FMCG conglomerates and agro-industrial manufacturing plants to educational institutions, visionary enterprises rely on DASA TECH to build their core operational software.
            </p>
          </div>
        )}

        {/* ── LOGO RIBBON / SELECTOR STRIP ──────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5">
          {CUSTOMERS_DATA.map((cust) => {
            const isSelected = selectedCustomer.id === cust.id
            return (
              <button
                key={cust.id}
                onClick={() => setSelectedCustomer(cust)}
                className={`group relative p-5 rounded-2xl sm:rounded-3xl border transition-all duration-300 text-left flex flex-col items-center justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? 'bg-white border-purple-500 shadow-xl shadow-purple-500/10 -translate-y-1 ring-2 ring-purple-500/20'
                    : 'bg-white/80 hover:bg-white border-[#E9E1F5] hover:border-purple-300 hover:shadow-md'
                }`}
              >
                {/* Active Indicator Pill */}
                {isSelected && (
                  <span className="absolute -top-2.5 px-2.5 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs">
                    Selected
                  </span>
                )}

                {/* Logo Frame */}
                <div className={`w-full h-24 sm:h-28 rounded-xl ${cust.logoBg} ${cust.logoBorder} border flex items-center justify-center p-3 transition-transform duration-300 group-hover:scale-105 overflow-hidden`}>
                  <img
                    src={cust.logo}
                    alt={`${cust.name} Logo`}
                    className={`${cust.logoScale} object-contain`}
                    loading="lazy"
                  />
                </div>

                {/* Client Label */}
                <div className="w-full text-center space-y-1">
                  <h4 className={`font-display font-bold text-sm sm:text-base leading-tight transition-colors line-clamp-1 ${
                    isSelected ? 'text-purple-700' : 'text-[#18132A] group-hover:text-purple-600'
                  }`}>
                    {cust.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 line-clamp-1">
                    {cust.badge}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* ── DETAILED CLIENT SHOWCASE CARD ─────────────────────────────────── */}
        {!compact && (
          <div className="relative rounded-3xl bg-white border border-[#E9E1F5] shadow-xl p-8 sm:p-12 overflow-hidden">
            {/* Subtle Gradient Backdrop */}
            <div 
              className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Client Identity & Brand Card */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Visual Stage */}
                <div className={`w-full h-48 sm:h-56 rounded-2xl ${selectedCustomer.logoBg} ${selectedCustomer.logoBorder} border flex flex-col items-center justify-center p-6 shadow-inner relative group`}>
                  <img
                    src={selectedCustomer.logo}
                    alt={selectedCustomer.name}
                    className="max-h-36 max-w-[80%] object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Name & Industry Info */}
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                    <selectedCustomer.icon className="w-3.5 h-3.5 text-purple-600" />
                    <span>{selectedCustomer.industry}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#18132A]">
                    {selectedCustomer.name}
                  </h3>

                  {selectedCustomer.tagline && (
                    <p className="text-sm font-semibold italic text-purple-600">
                      "{selectedCustomer.tagline}"
                    </p>
                  )}
                </div>

                {/* Live Platform deep link if exists */}
                {selectedCustomer.livePlatform && (
                  <div className="pt-2">
                    <a
                      href={selectedCustomer.livePlatform}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-mono font-bold transition-colors border border-purple-200"
                    >
                      <span>Live Campus Portal: {selectedCustomer.livePlatform.replace('https://', '')}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Deployed Architecture & Modules */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ENGINEERED BY DASA TECH</span>
                  </div>
                  <h4 className="font-display font-black text-xl sm:text-2xl text-[#18132A]">
                    {selectedCustomer.solutionTitle}
                  </h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {selectedCustomer.description}
                  </p>
                </div>

                {/* Key Capability Modules */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                    Key Deployed Modules & Workflows
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCustomer.modules.map((mod, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#FAF8FF] border border-[#EDE5F8] flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>Proprietary Architecture & Dedicated SLA Support</span>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18132A] hover:bg-purple-700 text-white text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-xs"
                  >
                    <span>Discuss Similar Solution</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ── ENTERPRISE TRUST METRICS BAR ──────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-[#E9E1F5] shadow-2xs text-center space-y-1">
            <div className="font-display font-black text-2xl sm:text-3xl text-purple-600">100%</div>
            <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Custom Tailored Code</div>
            <div className="text-[11px] text-slate-400">No generic off-the-shelf locks</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E9E1F5] shadow-2xs text-center space-y-1">
            <div className="font-display font-black text-2xl sm:text-3xl text-emerald-600">99.98%</div>
            <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Cloud Uptime SLA</div>
            <div className="text-[11px] text-slate-400">High availability infrastructure</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E9E1F5] shadow-2xs text-center space-y-1">
            <div className="font-display font-black text-2xl sm:text-3xl text-sky-600">6+</div>
            <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Major Industry Sectors</div>
            <div className="text-[11px] text-slate-400">Education, Ghee & FMCG, Agro, Feeds, Trade Conglomerates</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#E9E1F5] shadow-2xs text-center space-y-1">
            <div className="font-display font-black text-2xl sm:text-3xl text-rose-600">Direct</div>
            <div className="text-xs font-mono font-bold uppercase text-slate-500 tracking-wider">Founder-Led Engineering</div>
            <div className="text-[11px] text-slate-400">Dedicated architectural leadership</div>
          </div>
        </div>

      </div>
    </section>
  )
}
