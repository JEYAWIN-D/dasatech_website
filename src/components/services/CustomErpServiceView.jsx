import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Database, Building, ShoppingBag, GraduationCap, Factory, ArrowRight,
  ArrowLeft, CheckCircle2, Sparkles, Compass, ShieldCheck, Award,
  Zap, FileSpreadsheet, Printer, Calculator, BarChart2, Scan, Check,
  Layers, ChevronRight, Store, Box
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// CUSTOM ERP SERVICE COMPONENT
// Unique Theme: Enterprise Operations Control Center & Live Keyboard POS Cashier Counter
// Color Accents: Deep Royal Blue (#1E40AF), Soft Blue Background, Royal Purple
// Unique Visual Features:
// 1. Multi-Module Enterprise HUD Header (Switch between Pharmacy, School, Factory, Retail POS)
// 2. Interactive Keyboard POS Billing Cashier Simulator (Click product -> Add line item -> Calculate total -> Receipt preview)
// 3. Multi-Branch Stock & Batch Expiry Matrix
// 4. Financial Accounting & Tax Invoicing Workflow
// ─────────────────────────────────────────────────────────────

export default function CustomErpServiceView() {
  const [selectedModule, setSelectedModule] = useState('pos')
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Amoxicillin 500mg (Batch A-402)', price: 120, qty: 2 },
    { id: 2, name: 'Vitamin C Complex (Batch B-110)', price: 85, qty: 1 }
  ])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const addItemToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)
  const tax = Math.round(subtotal * 0.18)
  const total = subtotal + tax

  const MODULES = {
    pos: {
      title: 'Retail & Pharmacy POS Cashier',
      icon: Store,
      badge: 'SUB-SECOND BILLING',
      desc: 'Keyboard-optimized point of sale cashier billing system with thermal receipt printing and instant inventory deduction.'
    },
    pharmacy: {
      title: 'Pharmacy Management (MedFlow)',
      icon: ShoppingBag,
      badge: 'BATCH EXPIRY & GST',
      desc: 'FIFO batch tracking, scheduled drug compliance, multi-branch stock transfers, and automated GST invoice filing.'
    },
    school: {
      title: 'School & Campus ERP (EduCore)',
      icon: GraduationCap,
      badge: 'STUDENT LIFECYCLE',
      desc: 'Admissions management, student fee billing, automated attendance tracking, report cards, and parent communication.'
    },
    factory: {
      title: 'Factory Operations (FactorySync)',
      icon: Factory,
      badge: 'MANUFACTURING BOM',
      desc: 'Bill of materials (BOM) tracking, machine station allocation, raw material inventory, and finished goods dispatch.'
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#1E40AF] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#1E40AF] font-bold">Custom ERP Development</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: ENTERPRISE CONTROL CENTER ───────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#EFF6FF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1E40AF]">
                Enterprise Resource Planning (ERP)
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Custom ERP Systems Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E40AF] via-[#2563EB] to-[#7C3AED]">Your Exact Workflow.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Replace disconnected spreadsheets with a single custom ERP system tailored to your business — connecting multi-branch stock tracking, financial accounting, POS billing, and executive management reporting.
              </p>

              {/* ERP Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Multi-Branch Sync', 'FIFO Batch Matrix', 'GST Tax Invoicing', 'POS Billing Counter', 'Executive HUD'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#1E3A8A] bg-[#DBEAFE] border border-[#BFDBFE] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#pos-cashier"
                  className="px-6 py-3.5 rounded-full bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#1E40AF]/25 transition-all flex items-center gap-2"
                >
                  <span>Try Interactive POS Cashier</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#enterprise-modules"
                  className="px-5 py-3.5 rounded-full bg-[#DBEAFE] hover:bg-[#BFDBFE] text-[#1E3A8A] font-display font-bold text-xs sm:text-sm border border-[#BFDBFE] transition-colors"
                >
                  <span>Explore Modules</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Keyboard POS Billing Counter Simulator */}
            <div className="lg:col-span-7">
              <div id="pos-cashier" className="rounded-3xl p-6 sm:p-7 bg-[#0B132B] border-2 border-white/15 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#1E40AF] text-white flex items-center justify-center font-bold">
                      <Scan className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Interactive POS Cashier Counter</div>
                      <div className="text-[10px] font-mono text-slate-400">Click items below to test sub-second cashier checkout</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#1E40AF]/40 text-[#93C5FD] px-3 py-1 rounded-full border border-[#93C5FD]/30">
                    POS CASHIER HUD
                  </span>
                </div>

                {/* Quick Add Items Bar */}
                <div className="space-y-1.5 font-mono">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Quick Barcode Scanner (Click to Add):</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 3, name: 'Paracetamol 650mg (Batch C-091)', price: 45 },
                      { id: 4, name: 'Antiseptic Solution 250ml', price: 160 }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => addItemToCart(item)}
                        className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-[#1E40AF] text-white font-mono text-xs border border-white/15 transition-all flex items-center gap-1.5"
                      >
                        <span>+ {item.name} (₹{item.price})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cart Line Items Table */}
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {cartItems.map((it) => (
                    <div key={it.id} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between font-mono text-xs">
                      <div>
                        <div className="font-bold text-white">{it.name}</div>
                        <div className="text-[10px] text-slate-400">₹{it.price} &times; {it.qty} unit(s)</div>
                      </div>
                      <div className="font-bold text-[#93C5FD]">₹{it.price * it.qty}</div>
                    </div>
                  ))}
                </div>

                {/* Bill Summary */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <div className="space-y-0.5 text-slate-400 text-[11px]">
                    <div>Subtotal: ₹{subtotal}</div>
                    <div>GST Tax (18%): ₹{tax}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-400 uppercase">Total Bill Amount</div>
                    <div className="text-xl font-bold text-emerald-400">₹{total}</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. ENTERPRISE MODULES SHOWCASE ─────────────────────── */}
      <section id="enterprise-modules" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#1E40AF] uppercase tracking-wider bg-[#DBEAFE] px-3.5 py-1.5 rounded-full border border-[#BFDBFE]">
              <Layers className="w-3.5 h-3.5" />
              <span>INDUSTRY-SPECIFIC SOLUTIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Tailored ERP Modules for <span className="text-color-shift">Your Business</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              DASA TECH engineers specialized ERP modules customized for multi-chain healthcare, education, retail, and manufacturing.
            </p>
          </div>

          {/* Module Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.keys(MODULES).map((key) => {
              const mod = MODULES[key]
              const IconComp = mod.icon
              const isSelected = selectedModule === key
              return (
                <div
                  key={key}
                  onClick={() => setSelectedModule(key)}
                  className={`p-7 rounded-3xl border cursor-pointer transition-all duration-300 space-y-4 ${
                    isSelected
                      ? 'bg-[#DBEAFE]/40 border-[#1E40AF] shadow-xl scale-105'
                      : 'bg-[#FAF8FF] border-[#E9E2F5] hover:border-[#BFDBFE]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#1E40AF] text-white flex items-center justify-center font-bold">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#1E40AF] bg-[#DBEAFE] px-2.5 py-1 rounded-md border border-[#BFDBFE]">
                      {mod.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#17121F]">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{mod.desc}</p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0B132B] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#93C5FD] uppercase tracking-wider bg-blue-950/60 border border-blue-800/60 px-4 py-1.5 rounded-full">
            READY TO UNIFY YOUR OPERATIONS?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Custom ERP <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-[#3B82F6]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss multi-branch stock synchronization, GST invoice filing, and POS cashier workflows directly with Founder &amp; CEO Jeyawin D and our ERP engineering team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E40AF] hover:bg-[#1D4ED8] text-white font-display font-bold text-sm shadow-xl shadow-[#1E40AF]/30 transition-all"
            >
              <span>Start ERP Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
