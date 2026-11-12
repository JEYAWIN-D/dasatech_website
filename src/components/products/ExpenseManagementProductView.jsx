import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign, Receipt, Calculator, ShieldCheck, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Database, Check, Clock, Server, Layers,
  FileText, Search, Activity, RefreshCw, Cpu, Zap, Lock, BarChart3,
  AlertCircle, Network, HardDrive, Smartphone, Eye, ExternalLink,
  Split, Landmark, Coins, FileCheck, Award, Wallet, ArrowUpRight,
  FolderKanban, Scale, AlertTriangle, ChevronRight, Download
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// DASA EXPENCES PRODUCT VIEW (dasa-expenses)
// Title: DASA EXPENCES — From Quotation to Project Handover
// Live URL: https://expense.dasatech.in
// Theme: Solar Gold (#F59E0B), Warm Terracotta/Copper (#EA580C), Deep Ruby (#BE123C), Obsidian (#0E0A12)
// ─────────────────────────────────────────────────────────────

// 6 Core FinOps Capability Modules with Real Live Specs from expense.dasatech.in
const EXPENSE_CORE_MODULES = [
  {
    id: 'quotations',
    num: '01',
    module: 'Quotation Engine',
    title: 'Quotation Management & Version Auditing',
    tagline: 'Itemized Pricing, Revisions, GST, and 1-Click Conversion',
    description: 'Build detailed professional quotations with granular line items, custom taxes, discount limits, and payment terms. Maintain complete revision histories (Rev 0, Rev 1, Rev 2) so client negotiations are completely transparent.',
    features: [
      'Itemized line items with description, quantity, rates, and individual discounts',
      'Built-in GST & TDS compliance with automatic CGST, SGST, IGST calculations',
      'Revision audit snapshots preserving every client negotiation proposal',
      'Digital signature and official company seal stamping with secure PIN authorization',
      'One-click conversion into an active project upon client approval',
      'Change order handling to track approved additional scope without overwriting base quote'
    ],
    kpi: 'Rev 2 (Final Locked)',
    badge: 'Sales Acceleration',
    icon: FileText,
    accent: '#EA580C'
  },
  {
    id: 'split-payments',
    num: '02',
    module: 'Split Payments',
    title: 'Advance Split Payment Reconciliation',
    tagline: 'Multi-Method Receipts: Cash ₹9k + GPay ₹1k + Bank ₹1.2k = ₹11.2k',
    description: 'The fintech engine built for the way Indian and global businesses actually get paid. When a client pays through multiple channels in one transaction, DASA EXPENCES records the split seamlessly with zero double counting.',
    features: [
      'Dynamic multi-method payment rows within a single verified receipt',
      'Independent cash, UPI, and bank account selection with transaction reference IDs',
      'Elimination of double-counted GPay / bank settlements',
      'Automatic calculation of client outstanding receivable balances',
      'Separation of reported payment from cleared bank funds',
      'Instant generation of signed split payment receipt acknowledgements'
    ],
    kpi: '₹11,200 Balanced',
    badge: 'Zero Discrepancy',
    icon: Split,
    accent: '#D97706'
  },
  {
    id: 'milestones',
    num: '03',
    module: 'Milestone Billing',
    title: 'Custom Payment Milestones',
    tagline: 'Flexible % or Fixed Schedules (e.g. 50% Advance, 30% Dev, 20% Handover)',
    description: 'Create unlimited project phases tailored to your billing agreements. Automatic mathematical validation ensures all percentage milestones total exactly 100%, preventing revenue leakage.',
    features: [
      'Percentage-based or fixed-amount milestone billing schedules',
      'Automated payment due date tracking and reminder generation',
      'Partial payment collection and reconciliation against each milestone phase',
      'Automatic triggering of milestone invoices upon phase completion',
      'Visual milestone timeline indicators across the project lifecycle',
      'Dispute prevention with clear milestone deliverables criteria'
    ],
    kpi: '100% Phase Validated',
    badge: 'Predictable Cashflow',
    icon: Award,
    accent: '#BE123C'
  },
  {
    id: 'project-ledger',
    num: '04',
    module: 'Expense P&L Ledger',
    title: 'Project Expense Ledger & Deductions',
    tagline: 'Tag Cloud Costs, Subcontractors & Travel Directly to Project P&L',
    description: 'Stop losing money to untracked miscellaneous costs. Every expense incurred during project delivery is logged against the project code and deducted from net profitability in real time.',
    features: [
      'Project-tagged expense logging with bill attachments and vendor names',
      'Categorization by Cloud Hosting, Hardware, Freelancers, Licenses, and Travel',
      'Real-time remaining project budget calculations',
      'Multi-currency and statutory tax tracking on internal expenses',
      'Direct connection to bank account or cash vault deductions',
      'Live gross and net project profit margin tracking'
    ],
    kpi: '76.5% Net Margin Protected',
    badge: 'Profit Guard',
    icon: Wallet,
    accent: '#EA580C'
  },
  {
    id: 'cash-bank',
    num: '05',
    module: 'Cash & Bank Management',
    title: 'Multi-Account Cash & Bank Balancing',
    tagline: 'Total Clarity on Cash Vaults, Current Accounts & UPI Settlements',
    description: 'Indian project firms juggle physical cash drawers, current bank accounts, and UPI Merchant accounts. DASA EXPENCES keeps balances synchronized with zero double counting.',
    features: [
      'Real-time cash in hand vs bank balance visibility across all branches',
      'Audit-grade double-entry journal logs behind every transaction',
      'Inter-account transfers (e.g. Cash withdrawal to petty cash drawer)',
      'Monthly bank reconciliation with balance discrepancy detection',
      'No confusion between unearned advance receipts and earned company profit',
      'Comprehensive financial statement generation on demand'
    ],
    kpi: 'Audit-Grade Double Entry',
    badge: 'Treasury Control',
    icon: Landmark,
    accent: '#D97706'
  },
  {
    id: 'handover-gate',
    num: '06',
    module: 'Handover Verification',
    title: 'Final Handover Verification Gate',
    tagline: 'Block Premature Deliverable Release until Every Rupee Clears',
    description: 'Eliminate the common problem of clients receiving final deliverables while leaving final invoices or expenses unsettled. The Handover Gate enforces systematic 6-point reconciliation before release.',
    features: [
      'Systematic 6-point completion and payment reconciliation checklist',
      'Automatic flags for unsettled cheques, pending change orders, or open invoices',
      'Blocks final handover release until full customer payment clears',
      'Documented management override logs for approved exceptions',
      'Issues authorized Handover Certificate upon full verification',
      'Protects business cash flow and guarantees zero unpaid receivables'
    ],
    kpi: 'Zero Unpaid Receivables',
    badge: 'Revenue Protection',
    icon: ShieldCheck,
    accent: '#BE123C'
  }
]

export default function ExpenseManagementProductView() {
  const [activeTab, setActiveTab] = useState('split-payments')
  const [activeGateStep, setActiveGateStep] = useState(0)

  // Interactive Split Payment Calculator State
  const [invoiceAmount, setInvoiceAmount] = useState(50000)
  const [cashPart, setCashPart] = useState(15000)
  const [upiPart, setUpiPart] = useState(20000)
  const [bankPart, setBankPart] = useState(15000)

  // Interactive 6-Point Gate Checklist State
  const [gateChecks, setGateChecks] = useState({
    scope: true,
    advance: true,
    milestone2: true,
    milestone3: true,
    expenses: true,
    zeroBalance: true
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const currentTotal = cashPart + upiPart + bankPart
  const isBalanced = currentTotal === invoiceAmount
  const diff = invoiceAmount - currentTotal

  const allGateChecked = Object.values(gateChecks).every(Boolean)

  const toggleGate = (key) => {
    setGateChecks(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141017] selection:bg-amber-200 select-none">
      
      {/* ── 1. TOP BREADCRUMB & LIVE APP BAR ─────────────────────── */}
      <section className="border-b border-[#EFE6D8] bg-white sticky top-16 sm:top-20 z-40 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-2 sm:gap-3 text-xs font-mono">
            <Link
              to="/products"
              className="text-[#64748B] hover:text-amber-700 transition flex items-center gap-1 font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Products</span>
            </Link>
            <span className="text-[#CBD5E1]">/</span>
            <span className="text-amber-800 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
              DASA EXPENCES SaaS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Official Live Production SaaS</span>
            </span>

            <a
              href="https://expense.dasatech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-bold text-xs shadow-md shadow-orange-500/20 transition-all hover:scale-105"
            >
              <span>Launch Live DASA Expenses</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* ── 2. CINEMATIC HERO SECTION ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0A12] via-[#17121F] to-[#120D16] text-white pt-16 sm:pt-24 pb-20 sm:pb-28">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-gradient-to-br from-amber-500/15 via-orange-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-tl from-rose-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-8">
          
          {/* Eyebrow Pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>PROJECT FINANCIAL INTEGRITY • SAAS PLATFORM</span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Developed &amp; Owned by DASA TECH
            </span>
          </div>

          {/* Main Headline & Punchy Subtitle */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]">
              From Quotation to Project Handover.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">
                Every Rupee Accounted For.
              </span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-3xl">
              Manage quotations, collect advances, track multi-method split payments, control project expenses, monitor cash and bank balances, and verify final settlements before deliverable release — all from one powerful SaaS platform.
            </p>
          </div>

          {/* Live Action Row */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="https://expense.dasatech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-black text-sm sm:text-base shadow-2xl shadow-orange-500/30 transition-all hover:scale-105 flex items-center gap-2.5 group"
            >
              <span>Launch Live DASA Expenses</span>
              <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="#interactive-demo"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 font-display font-bold text-sm transition-all"
            >
              Explore FinOps Modules
            </a>

            <div className="flex items-center gap-2 pl-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-slate-300 font-semibold">
                Live at <strong className="text-white">expense.dasatech.in</strong>
              </span>
            </div>
          </div>

          {/* 4 Proof Metric Pillars */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
            {[
              { val: '₹0.00', label: 'Unaccounted Leakage', desc: 'Every rupee tagged to project codes' },
              { val: '100%', label: 'Advance Split Precision', desc: 'Cash + UPI + Bank settled cleanly' },
              { val: '6-Point', label: 'Handover Release Gate', desc: 'Blocks deliverable release on open dues' },
              { val: 'Zero', label: 'Double Counted Receipts', desc: 'Atomic double-entry journal logs' }
            ].map((kpi, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1">
                <div className="font-display font-black text-2xl sm:text-3xl text-amber-300">
                  {kpi.val}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {kpi.label}
                </div>
                <div className="text-[11px] text-slate-400 leading-tight">
                  {kpi.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. INTERACTIVE FINOPS WORKFLOW RAIL ───────────────────── */}
      <section id="interactive-demo" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-24 space-y-12">
        
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold tracking-wider text-amber-800 uppercase block font-mono">
            Full Project Financial Lifecycle
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#141017] tracking-tight">
            Six Connected Pillars of <span className="text-amber-700">Project Financial Integrity</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
            Unlike generic accounting software or simplistic spreadsheets, DASA EXPENCES governs the complete timeline from the first client quote to verified final handover.
          </p>
        </div>

        {/* Tab Navigation Pill Rail */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 scrollbar-none">
          {EXPENSE_CORE_MODULES.map((m) => {
            const isActive = activeTab === m.id
            const Icon = m.icon
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer border ${
                  isActive
                    ? 'bg-[#120D16] text-amber-300 border-amber-500/50 shadow-md shadow-amber-900/10'
                    : 'bg-white text-[#475569] border-[#EFE6D8] hover:border-amber-300 hover:text-black hover:bg-amber-50/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-[#94A3B8]'}`} />
                <span>{m.num}. {m.module}</span>
              </button>
            )
          })}
        </div>

        {/* Active Module Detailed View */}
        {(() => {
          const m = EXPENSE_CORE_MODULES.find(mod => mod.id === activeTab) || EXPENSE_CORE_MODULES[0]
          const Icon = m.icon
          return (
            <div className="rounded-3xl border border-[#EFE6D8] bg-white p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Deep Explanations */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300">
                    {m.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold">
                    Module {m.num} of 06
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#141017] tracking-tight">
                    {m.title}
                  </h3>
                  <div className="text-sm font-semibold text-amber-800 font-mono">
                    {m.tagline}
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-1">
                    {m.description}
                  </p>
                </div>

                {/* Granular Bullet Points */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Capabilities &amp; Business Benefits:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {m.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-[#FAF7F2] p-2.5 rounded-xl border border-[#EFE6D8]">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://expense.dasatech.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-display font-bold text-xs shadow-md transition-all hover:scale-105"
                  >
                    <span>Open {m.module} in Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Right Column: Visual Simulated Interface Card */}
              <div className="lg:col-span-5 bg-[#0E0A12] rounded-2xl p-6 text-white border border-amber-500/30 shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-amber-300 font-bold ml-1.5 truncate">
                      expense.dasatech.in / {m.id}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 font-bold">
                    VERIFIED
                  </span>
                </div>

                {/* Realistic Simulated Dashboard Content */}
                <div className="p-4 rounded-xl bg-[#17121F] border border-white/10 space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase">Selected Project</div>
                      <div className="text-sm font-display font-bold text-white">PRJ-2026-0101 • Apex Tower FinOps</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                      {m.kpi}
                    </span>
                  </div>

                  {m.id === 'split-payments' ? (
                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                        <span className="text-slate-300">1. Physical Cash Safe:</span>
                        <span className="text-amber-400 font-bold">₹9,000.00</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                        <span className="text-slate-300">2. Merchant GPay / UPI:</span>
                        <span className="text-amber-400 font-bold">₹1,000.00</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 flex justify-between">
                        <span className="text-slate-300">3. HDFC Current Account:</span>
                        <span className="text-amber-400 font-bold">₹1,200.00</span>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex justify-between text-emerald-400 font-bold">
                        <span>Verified Single Receipt:</span>
                        <span>₹11,200.00 Cleared</span>
                      </div>
                    </div>
                  ) : m.id === 'milestones' ? (
                    <div className="space-y-2 text-xs font-mono">
                      <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex justify-between text-emerald-300">
                        <span>Milestone 1: 50% Advance</span>
                        <span className="font-bold">₹2,25,000 (Paid)</span>
                      </div>
                      <div className="p-2 rounded-lg bg-amber-950/40 border border-amber-500/30 flex justify-between text-amber-300">
                        <span>Milestone 2: 30% Mid-Dev</span>
                        <span className="font-bold">₹1,35,000 (Active)</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900 border border-white/10 flex justify-between text-slate-400">
                        <span>Milestone 3: 20% Handover</span>
                        <span className="font-bold">₹90,000 (Pending)</span>
                      </div>
                      <div className="text-[10px] text-amber-400 text-right font-bold pt-1">
                        Σ Percentages = Exactly 100.00%
                      </div>
                    </div>
                  ) : m.id === 'handover-gate' ? (
                    <div className="space-y-1.5 text-xs font-mono">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <Check className="w-4 h-4" /> <span>Contract Scope 100% Delivered</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <Check className="w-4 h-4" /> <span>Invoices Paid: ₹4,50,000 / ₹4,50,000</span>
                      </div>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <Check className="w-4 h-4" /> <span>Outstanding Balance: ₹0.00</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-400/50 text-emerald-300 text-center font-bold mt-2">
                        GATE UNLOCKED — OK TO HAND OVER
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs font-mono text-slate-300">
                      <div className="flex justify-between">
                        <span>Contract Value:</span>
                        <span className="text-white font-bold">₹4,50,000.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Direct Expenses Tagged:</span>
                        <span className="text-rose-400 font-bold">- ₹1,05,750.00</span>
                      </div>
                      <div className="flex justify-between border-t border-white/10 pt-2 text-emerald-400 font-bold">
                        <span>Net Profit Realized:</span>
                        <span>₹3,44,250.00 (76.5%)</span>
                      </div>
                    </div>
                  )}

                </div>

                <div className="text-[11px] font-mono text-slate-400 text-center">
                  Live Postgres Double-Entry Architecture • Real-Time Synchronized
                </div>

              </div>

            </div>
          )
        })()}

      </section>

      {/* ── 4. TWO LIVE INTERACTIVE PLAYGROUNDS ───────────────────── */}
      <section className="bg-gradient-to-b from-[#120D16] to-[#0A070D] text-white py-20 px-6 sm:px-10 lg:px-16 border-y border-amber-500/20">
        <div className="max-w-[1440px] mx-auto space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              Interactive Live Simulators
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Test DASA EXPENCES <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">FinTech Logic</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Experience the core engines directly in your browser. Adjust split channels or verify the 6-point project release gate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SIMULATOR 1: ADVANCE SPLIT PAYMENT CALCULATOR */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#17121F] border border-amber-500/30 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                    <Split className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Split Payment Engine</h3>
                    <div className="text-[11px] font-mono text-slate-400">Multi-Channel Receipt Balancer</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  isBalanced
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                    : 'bg-rose-950/60 text-rose-400 border-rose-500/40'
                }`}>
                  {isBalanced ? 'BALANCED' : `DIFF: ₹${diff}`}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1 text-slate-300">
                    <span>Client Invoice Total:</span>
                    <span className="text-white font-bold font-mono">₹{invoiceAmount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={10000}
                    max={200000}
                    step={5000}
                    value={invoiceAmount}
                    onChange={(e) => {
                      const newTot = Number(e.target.value)
                      setInvoiceAmount(newTot)
                      // Auto distribute proportionally
                      setCashPart(Math.round(newTot * 0.3))
                      setUpiPart(Math.round(newTot * 0.4))
                      setBankPart(newTot - Math.round(newTot * 0.3) - Math.round(newTot * 0.4))
                    }}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span>Physical Cash Drawer:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCashPart(Math.max(0, cashPart - 1000))}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >-</button>
                      <span className="font-mono font-bold text-amber-300 w-24 text-right">₹{cashPart.toLocaleString()}</span>
                      <button
                        onClick={() => setCashPart(cashPart + 1000)}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >+</button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Smartphone className="w-4 h-4 text-orange-400" />
                      <span>Merchant UPI / GPay:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setUpiPart(Math.max(0, upiPart - 1000))}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >-</button>
                      <span className="font-mono font-bold text-orange-300 w-24 text-right">₹{upiPart.toLocaleString()}</span>
                      <button
                        onClick={() => setUpiPart(upiPart + 1000)}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >+</button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <Landmark className="w-4 h-4 text-rose-400" />
                      <span>Current Bank Account:</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setBankPart(Math.max(0, bankPart - 1000))}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >-</button>
                      <span className="font-mono font-bold text-rose-300 w-24 text-right">₹{bankPart.toLocaleString()}</span>
                      <button
                        onClick={() => setBankPart(bankPart + 1000)}
                        className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs"
                      >+</button>
                    </div>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border text-center font-mono text-xs transition-all ${
                  isBalanced
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                }`}>
                  <div className="font-bold text-sm">
                    {isBalanced
                      ? '✓ Single Clean Receipt Issued (No Double Counting)'
                      : `⚠ Mismatch: Split totals ₹${currentTotal.toLocaleString()} vs ₹${invoiceAmount.toLocaleString()}`}
                  </div>
                  <div className="text-[11px] opacity-80 mt-1">
                    Each ledger account receives atomic journal entries simultaneously.
                  </div>
                </div>

              </div>

            </div>

            {/* SIMULATOR 2: 6-POINT HANDOVER VERIFICATION GATE */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#17121F] border border-amber-500/30 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Handover Verification Gate</h3>
                    <div className="text-[11px] font-mono text-slate-400">Pre-Release Deliverable Shield</div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
                  allGateChecked
                    ? 'bg-emerald-950/60 text-emerald-400 border-emerald-500/40'
                    : 'bg-amber-950/60 text-amber-400 border-amber-500/40'
                }`}>
                  {allGateChecked ? 'GATE OPEN' : 'RELEASE BLOCKED'}
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                {[
                  { key: 'scope', label: '1. Contract Scope & Deliverables Confirmed', sub: 'Client sign-off on scope deliverables' },
                  { key: 'advance', label: '2. Milestone 1 (50% Advance): 100% Cleared', sub: 'Bank credit verified with UTR' },
                  { key: 'milestone2', label: '3. Milestone 2 (30% Dev Progress): Cleared', sub: 'Phase demo approval recorded' },
                  { key: 'milestone3', label: '4. Milestone 3 (20% Final Settlement): Cleared', sub: 'Final invoice paid in full' },
                  { key: 'expenses', label: '5. All Vendor & Subcontractor Invoices Logged', sub: 'Zero unrecorded project liabilities' },
                  { key: 'zeroBalance', label: '6. Outstanding Customer Balance: Exactly ₹0.00', sub: 'No pending cheques or disputed claims' }
                ].map((item) => {
                  const checked = gateChecks[item.key]
                  return (
                    <button
                      key={item.key}
                      onClick={() => toggleGate(item.key)}
                      className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                        checked
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                          : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/30'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold flex items-center gap-2">
                          <span>{item.label}</span>
                        </div>
                        <div className="text-[10px] opacity-75">{item.sub}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 ${
                        checked ? 'bg-emerald-500 border-emerald-400 text-black' : 'border-white/20'
                      }`}>
                        {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  )
                })}
              </div>

              <div className={`p-4 rounded-2xl border text-center font-mono text-xs transition-all ${
                allGateChecked
                  ? 'bg-emerald-950/60 border-emerald-400 text-emerald-300'
                  : 'bg-amber-950/40 border-amber-500/40 text-amber-300'
              }`}>
                <div className="font-bold text-sm">
                  {allGateChecked
                    ? '🎉 GATE UNLOCKED: Authorized to Release Deliverables & Handover Certificate'
                    : '⛔ GATE LOCKED: Deliverable release blocked until all 6 criteria clear'}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. ENTERPRISE TECHNICAL ARCHITECTURE ──────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-wider text-amber-800 uppercase block font-mono">
            Engineering Rigor
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#141017] tracking-tight">
            Built for High-Trust <span className="text-amber-700">Enterprise Financial Systems</span>
          </h2>
          <p className="text-[#64748B] text-sm sm:text-base">
            DASA EXPENCES combines modern edge architectures with strict double-entry ledger mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: 'Atomic Double-Entry Core',
              icon: Database,
              desc: 'Every financial mutation executes within ACID transactions in PostgreSQL. Debit and credit legs balance instantaneously with zero floating entries.',
              tags: ['ACID Transactions', 'Zero Drift', 'Immutable Audit Log']
            },
            {
              title: 'Sub-150ms Global Edge',
              icon: Zap,
              desc: 'Deployed on edge global nodes ensuring instant quotation lookups, real-time dashboard updates, and rapid PDF generation from any location.',
              tags: ['React 19 SPA', 'Cloudflare Edge', 'Sub-second UX']
            },
            {
              title: 'Granular Role-Based Access',
              icon: Lock,
              desc: 'Strict separation of privileges. Project managers cannot override payment verification gates, and accountants cannot modify approved technical scopes.',
              tags: ['Role Matrix', 'PIN Seal Signoff', 'Tamper Evident']
            }
          ].map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#EFE6D8] shadow-lg hover:shadow-xl hover:border-amber-400 transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-xl text-[#141017]">
                  {item.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed font-normal">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

      </section>

      {/* ── 6. FINAL HIGH-IMPACT LAUNCH CTA ───────────────────────── */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-24 text-center">
        <div className="relative p-10 sm:p-16 rounded-[36px] bg-gradient-to-r from-[#0E0A12] via-[#1A1222] to-[#0E0A12] text-white border border-amber-500/30 shadow-2xl overflow-hidden space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>START PROTECTING YOUR PROJECT CASHFLOW TODAY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Ready to Account for Every Rupee Across All Your Projects?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Experience DASA EXPENCES live today. Test real quotations, split payments, milestone billing, and the 6-point handover gate.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://expense.dasatech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-black text-sm sm:text-base shadow-2xl shadow-orange-500/40 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Launch Live DASA Expenses</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-display font-bold text-sm sm:text-base transition-all"
            >
              Request Custom Enterprise Onboarding
            </Link>
          </div>

          <div className="pt-2 text-xs font-mono text-slate-400">
            Live URL: <a href="https://expense.dasatech.in" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline underline-offset-2">https://expense.dasatech.in</a> • Official SaaS Product by DASA TECH
          </div>

        </div>
      </section>

    </div>
  )
}
