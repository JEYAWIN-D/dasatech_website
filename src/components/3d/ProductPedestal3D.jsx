import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Pill,
  GraduationCap,
  Factory,
  Boxes,
  Camera,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Activity,
  Layers
} from 'lucide-react'
import Reveal from '../Reveal'
import TextLineReveal from '../TextLineReveal'
import PillButton from '../PillButton'
import { Link } from '../Router'

export default function ProductPedestal3D() {
  const [activeIdx, setActiveIdx] = useState(0)

  const products = [
    {
      id: 'pharmacy-erp',
      name: 'Pharmacy ERP (MedFlow)',
      category: 'Healthcare & Pharma',
      tagline: 'Multi-Branch Pharmacy ERP & Prescription Inventory',
      desc: 'High-throughput pharmaceutical management platform with automated batch-expiry tracking, Schedule H1 drug compliance, GST POS thermal billing, and predictive purchase order generation.',
      features: [
        'Real-time multi-branch stock sync with barcode scanning',
        'FIFO batch dispatch with proactive expiry notifications',
        'Schedule H & H1 drug register & prescription logging',
        'Automated GST reporting and thermal receipt printing'
      ],
      metrics: [
        { label: 'POS Latency', val: '< 2.5s' },
        { label: 'Batch Expiry Sync', val: '100%' },
        { label: 'Compliance', val: 'Schedule H1 / GST' }
      ],
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=85',
      color: '#6C2BD9',
      icon: Pill,
      badge: 'HEALTHCARE ERP'
    },
    {
      id: 'school-erp',
      name: 'School & Campus ERP',
      category: 'Education & Academics',
      tagline: 'Unified Student Information & Biometric Campus Cloud',
      desc: 'Complete student lifecycle platform with biometric attendance integration, automated multi-term fee collection gateways, digital gradebook, and parent-teacher communication mobile apps.',
      features: [
        'Biometric student attendance with instant notification alerts',
        'Automated fee invoice generation with UPI & Net Banking',
        'Comprehensive exam grading and report card generation',
        'Dynamic timetable scheduling and substitution engine'
      ],
      metrics: [
        { label: 'Attendance Sync', val: 'Biometric' },
        { label: 'Fee Collection', val: 'Automated' },
        { label: 'Mobile App', val: 'iOS & Android' }
      ],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85',
      color: '#8B5CF6',
      icon: GraduationCap,
      badge: 'CAMPUS CLOUD'
    },
    {
      id: 'factory-erp',
      name: 'Factory Manufacturing ERP',
      category: 'Manufacturing & Industry 4.0',
      tagline: 'Shop-Floor WIP Tracking & Machine Telemetry ERP',
      desc: 'End-to-end manufacturing management system with multi-level Bill of Materials (BOM), real-time work-in-progress (WIP) tracking, live PLC machine downtime telemetry, and unit cost calculation.',
      features: [
        'Multi-level BOM with automatic raw material reservation',
        'Real-time job card tracking and workstation stage progression',
        'Live machine cycle time & downtime telemetry via PLC',
        'Quality checkpoints with automated non-conformance quarantine'
      ],
      metrics: [
        { label: 'OEE Telemetry', val: 'Live PLC Sync' },
        { label: 'WIP Tracking', val: 'Step-by-Step' },
        { label: 'BOM Nesting', val: 'Multi-Level' }
      ],
      image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=85',
      color: '#6C2BD9',
      icon: Factory,
      badge: 'INDUSTRY 4.0'
    },
    {
      id: 'warehouse-erp',
      name: 'Warehouse WMS Hub',
      category: 'Supply Chain & Logistics',
      tagline: 'Smart Multi-Aisle Bin Inventory & Barcode Routing',
      desc: 'Intelligent warehouse management system featuring 2D/3D bin location routing, automated pallet receiving with RFID/barcode generation, cross-docking dispatch, and cycle count audits.',
      features: [
        'Dynamic bin location routing for optimized picker paths',
        'Inbound receiving with automated barcode/RFID labels',
        'FIFO & FEFO dispatch to eliminate inventory dead-stock',
        'Mobile handheld scanner app for real-time inventory audit'
      ],
      metrics: [
        { label: 'Picking Accuracy', val: '99.9%' },
        { label: 'Receiving Flow', val: 'Optimized' },
        { label: 'Barcode Support', val: '2D & RFID' }
      ],
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=85',
      color: '#8B5CF6',
      icon: Boxes,
      badge: 'SUPPLY CHAIN'
    },
    {
      id: 'snapshare-social',
      name: 'SnapShare Photography Studio',
      category: 'Photography & Creative Studio',
      tagline: 'AI Event Photo Distribution & Studio CRM Platform',
      desc: 'Enterprise photography studio platform combining 512D facial recognition photo distribution, dynamic QR guest access, photography CRM deal pipelines, digital contracts, and secure client proofing galleries.',
      features: [
        '512D facial recognition photo matching & instant guest gallery',
        'Dynamic event QR codes for instant contactless photo discovery',
        'Studio CRM with lead booking pipelines and contract signing',
        'Secure client proofing galleries with automated watermark protection'
      ],
      metrics: [
        { label: 'AI Face Search', val: '< 150ms' },
        { label: 'Event Galleries', val: 'Dynamic QR' },
        { label: 'Studio CRM', val: 'End-to-End' }
      ],
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=85',
      color: '#6C2BD9',
      icon: Camera,
      badge: 'AI PHOTOGRAPHY'
    },
    {
      id: 'ecommerce-engine',
      name: 'CommerceEngine Platform',
      category: 'E-Commerce & Retail',
      tagline: 'High-Speed Multi-Vendor & Headless Commerce Store',
      desc: 'Sub-second headless e-commerce store with multi-vendor merchant payouts, frictionless one-click checkout with Razorpay/UPI/Stripe, automated cart recovery, and inventory ERP sync.',
      features: [
        'Blazing-fast headless React/Next.js storefront (<600ms load)',
        'Multi-vendor merchant portal with automated commission split',
        'Frictionless checkout with Razorpay, Stripe, and UPI',
        'Automated abandoned cart WhatsApp recovery notifications'
      ],
      metrics: [
        { label: 'Page Load Speed', val: '< 600ms' },
        { label: 'Payment Gateway', val: 'UPI / Stripe' },
        { label: 'Cart Checkout', val: 'Frictionless' }
      ],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=85',
      color: '#8B5CF6',
      icon: ShoppingCart,
      badge: 'HEADLESS COMMERCE'
    }
  ]

  const current = products[activeIdx]
  const Icon = current.icon

  return (
    <section className="relative py-24 lg:py-32 bg-[#24113F] text-white overflow-hidden border-t border-[#A855F7]/30">
      
      {/* Ambient Deep Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#6D28D9]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#A855F7]/40 bg-[#6D28D9]/30 text-[#E9D5FF] text-xs font-mono w-fit mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>PROPRIETARY SOFTWARE ARCHITECTURE</span>
            </div>

            <TextLineReveal
              as="h2"
              lines={['Featured Enterprise Products,', 'Engineered for Performance']}
              className="font-display text-3xl sm:text-5xl font-black text-white leading-tight"
            />
          </div>

          <PillButton
            to="/products"
            variant="primary"
            arrow="right"
            size="md"
          >
            Explore Product Showroom
          </PillButton>
        </div>

        {/* Interactive Pedestal Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Product Selection Grid Chips */}
          <div className="lg:col-span-5 space-y-2.5">
            {products.map((p, idx) => {
              const isActive = activeIdx === idx
              const PIcon = p.icon

              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#6D28D9] to-[#A855F7] border-[#A855F7] text-white shadow-lg shadow-[#6D28D9]/40 translate-x-1'
                      : 'bg-[#170E2B] border-[#A855F7]/25 text-[#E9D5FF] hover:border-[#A855F7]/60 hover:bg-[#1E1138] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-200 ${
                        isActive ? 'bg-white text-[#6C2BD9]' : 'bg-[#24113F] text-[#A855F7]'
                      }`}
                    >
                      <PIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className={`font-display font-bold text-sm sm:text-base ${isActive ? 'text-white' : 'text-white/90'}`}>
                        {p.name}
                      </div>
                      <div className="text-xs font-mono text-[#E9D5FF]">
                        {p.category}
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded-lg border font-bold ${
                      isActive
                        ? 'border-[#A855F7]/40 text-white bg-[#6D28D9]/40'
                        : 'border-transparent text-[#E9D5FF]'
                    }`}
                  >
                    SPEC
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Column: Holographic / Stage Card featuring BIG SHOWCASE IMAGE & HOVER ZOOM */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative rounded-3xl border border-[#E9E2F5] bg-white shadow-sm overflow-hidden group text-[#17121F] flex flex-col justify-between"
              >
                {/* BIG SHOWCASE IMAGE BANNER WITH HOVER ZOOM ANIMATION */}
                <div className="relative w-full h-60 sm:h-72 overflow-hidden bg-slate-900">
                  <motion.img
                    src={current.image}
                    alt={current.name}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17121F] via-[#17121F]/40 to-transparent" />

                  {/* Top Floating Badge & Status */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 text-[#6C2BD9] font-mono text-xs font-bold uppercase tracking-wider shadow-xs">
                      {current.badge}
                    </span>

                    <span className="text-xs font-mono text-white font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C2BD9]/90 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Production Ready Platform
                    </span>
                  </div>

                  {/* Title Floating over Image */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight drop-shadow-md">
                      {current.name}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-mono mt-1 font-semibold drop-shadow-xs">
                      {current.tagline}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-10 space-y-6">
                  {/* Description */}
                  <p className="text-[#6F6878] text-sm sm:text-base leading-relaxed font-normal">
                    {current.desc}
                  </p>



                  {/* Core Features */}
                  <div className="space-y-2 pt-1">
                    <div className="text-xs uppercase font-mono tracking-widest text-[#6F6878] font-bold">
                      Enterprise Core Modules:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {current.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#17121F] font-normal p-2 rounded-xl bg-[#F5F0FF]/40 border border-[#E9E2F5]">
                          <CheckCircle2 className="w-4 h-4 text-[#6C2BD9] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-[#E9E2F5] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#6F6878]">
                      Multi-Tenant &amp; On-Premise Deployments
                    </span>

                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6C2BD9] hover:text-[#8B5CF6] transition"
                    >
                      <span>Explore Platform In Showroom</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>


        </div>

      </div>
    </section>
  )
}


