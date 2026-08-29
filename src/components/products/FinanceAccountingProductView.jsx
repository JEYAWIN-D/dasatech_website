import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  DollarSign, FileSpreadsheet, Calculator, ShieldCheck, ArrowRight,
  ArrowLeft, CheckCircle2, Sparkles, Database, Check, Clock, Server,
  Layers, FileText, Search, Activity, RefreshCw, Landmark
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA LEDGERFLOW & GST FINANCE PRODUCT VIEW (finance-accounting)
// Unique Theme: Financial Ledger Vault & Tax Accounting Center
// Color Accents: Golden Amber (#D97706), Royal Slate, Emerald Accents
// Unique Interactive Features:
// 1. Double-Entry General Ledger Inspector (Live balancing verification)
// 2. Interactive Bank Statement OCR Parser Simulator
// 3. GSTR Statutory Tax Return Generator (GSTR-1, GSTR-2B, GSTR-3B)
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside FinanceAccountingProductView component file
const FINANCE_ACCOUNTING_SCREEN_ASSETS = [
  {
    id: 'dashboard',
    module: 'Executive Dashboard',
    title: 'CFO Financial Telemetry & Cash Flow Overview',
    subtitle: 'Real-time company-wide cash balance, net profit margins, accounts receivable aging, and burn rates.',
    tag: 'CFO Telemetry',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/dashboard',
    specs: ['Real-Time P&L', 'Cash Flow Forecast', 'EBITDA Telemetry']
  },
  {
    id: 'ledger',
    module: 'General Ledger',
    title: 'Atomic Double-Entry General Ledger Inspector',
    subtitle: 'Strict debit and credit balancing validation ensuring 100% mathematical integrity across all vouchers.',
    tag: 'Double-Entry Core',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/general-ledger',
    specs: ['Atomic Hash Ledger', 'Debit/Credit Balance Guard', 'Immutable Log']
  },
  {
    id: 'bank-ocr',
    module: 'Bank OCR Parser',
    title: 'Automated Bank Statement OCR Reconciliation',
    subtitle: 'Upload PDF bank statements to automatically parse transactions and match supplier invoice vouchers.',
    tag: 'Bank Reconciliation',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/bank-reconciliation',
    specs: ['Python PDF Parser', 'Auto-Voucher Match', '99.8% OCR Precision']
  },
  {
    id: 'gst-returns',
    module: 'Reports & Tax',
    title: 'Statutory GST Return Filing & Tax E-Invoicing',
    subtitle: 'Automated generation of GSTR-1 sales returns, GSTR-2B ITC matching, and GSTR-3B monthly tax filings.',
    tag: 'GST E-Filing',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/gst-returns',
    specs: ['Gov Tax Sandbox API', 'E-Way Bill Integration', 'GSTR-3B Exporter']
  },
  {
    id: 'ar-aging',
    module: 'Accounts Receivable',
    title: 'Accounts Receivable Aging Ledger & WhatsApp Dunning',
    subtitle: '30/60/90-day invoice aging ledger with automated WhatsApp payment reminder link dispatches.',
    tag: 'Receivables Dunning',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/receivables-aging',
    specs: ['Automated Reminders', 'Payment Gateway Links', 'Aging Breakdown']
  },
  {
    id: 'ap-bills',
    module: 'Accounts Payable',
    title: 'Vendor Bill Approvals & Payment Batch Scheduler',
    subtitle: 'Schedule automated NEFT/RTGS bank payouts for approved supplier invoices upon payment due dates.',
    tag: 'Vendor Payments',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/vendor-payouts',
    specs: ['HDFC / ICICI Bank API', 'Batch Payout Schedule', 'Vendor Ledger']
  },
  {
    id: 'audit-trail',
    module: 'Compliance & Audit',
    title: 'Immutable Compliance Audit Trail & Activity Log',
    subtitle: 'Complete SHA-256 timestamped audit trail logging every financial entry edit, deletion, and sign-off.',
    tag: 'Audit Integrity',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/audit-trail',
    specs: ['SHA-256 Hash Chain', 'User Stamp Logging', 'Statutory Compliance']
  },
  {
    id: 'analytics',
    module: 'Analytics',
    title: 'Department Cost Center Profitability Analytics',
    subtitle: 'Granular breakdown of departmental revenue, operational expenses, and gross profit contribution ratios.',
    tag: 'Cost Center Analytics',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
    route: 'app.dasatech.com/ledgerflow/cost-center-analytics',
    specs: ['Department P&L', 'Expense Allocation', 'Margin Ratios']
  }
]

export default function FinanceAccountingProductView() {
  const [activeTaxTab, setActiveTaxTab] = useState('gstr1')
  const [isParsingBank, setIsParsingBank] = useState(false)
  const [bankParsed, setBankParsed] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const runBankOcr = () => {
    setIsParsingBank(true)
    setBankParsed(false)
    setTimeout(() => {
      setIsParsingBank(false)
      setBankParsed(true)
    }, 1100)
  }

  const TAX_FILES = {
    gstr1: { title: 'GSTR-1 Sales Return', status: 'Verified Compliant', fields: '1,420 Tax Invoices Exported', file: 'gstr1_sales_q2_2025.json' },
    gstr2b: { title: 'GSTR-2B Input Tax Credit', status: 'Auto-Matched', fields: '₹4,85,200 ITC Claimable', file: 'gstr2b_reconciled.json' },
    gstr3b: { title: 'GSTR-3B Monthly Return', status: 'Ready for Filing', fields: 'Net GST Liability: ₹1,20,400', file: 'gstr3b_summary.json' }
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#D97706] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#D97706] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#D97706] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#D97706] font-bold">DASA LedgerFlow</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#D97706] bg-white hover:bg-[#FFFBEB] border border-[#E9E2F5] hover:border-[#FDE68A] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: FINANCIAL LEDGER VAULT ────────────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#FFFBEB] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] text-xs font-mono font-bold uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5 text-[#D97706]" />
                <span>DOUBLE-ENTRY GENERAL LEDGER &amp; TAX ENGINE</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                DASA LedgerFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#D97706]">GST Finance.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Double-entry accounting and financial management software with atomic general ledger balancing, bank statement OCR auto-reconciliation, and one-click GST return filings.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Double-Entry Core', 'Bank Statement OCR Parser', 'GSTR-1 / 3B Auto Filing', 'Accounts Receivable Aging', 'Audit Log Trail'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#92400E] bg-[#FEF3C7] border border-[#FDE68A] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#gst-tax"
                  className="px-6 py-3.5 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#D97706]/25 transition-all flex items-center gap-2"
                >
                  <span>Tax Return Exporter</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#bank-ocr"
                  className="px-5 py-3.5 rounded-full bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#92400E] font-display font-bold text-xs sm:text-sm border border-[#FDE68A] transition-colors"
                >
                  <span>Bank Statement OCR</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Double-Entry Ledger Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl p-6 sm:p-7 bg-[#140F08] border-2 border-white/15 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D97706] text-white flex items-center justify-center font-bold">
                      <Calculator className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Atomic Double-Entry Ledger Viewer</div>
                      <div className="text-[10px] font-mono text-slate-400">Strict debit/credit mathematical integrity verification</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#D97706]/30 text-[#FBBF24] px-3 py-1 rounded-full border border-[#FBBF24]/30">
                    BALANCED LEDGER
                  </span>
                </div>

                {/* Ledger Entries Table */}
                <div className="space-y-2 font-mono text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">Sales Revenue Account (Credit)</div>
                      <div className="text-[10px] text-slate-400">Voucher #VCH-2025-8812 &bull; Client: Global Tech Ltd</div>
                    </div>
                    <div className="font-bold text-emerald-400">CR ₹2,45,000</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">HDFC Bank Operating Account (Debit)</div>
                      <div className="text-[10px] text-slate-400">Direct Wire Clearance &bull; Ref #TXN-9021</div>
                    </div>
                    <div className="font-bold text-emerald-400">DR ₹2,45,000</div>
                  </div>
                </div>

                {/* Verification Status */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Ledger Imbalance: <strong className="text-emerald-400">₹0.00 (Perfect Match)</strong></span>
                  <span className="text-[#FBBF24] font-bold">SHA-256 Verified</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. BANK STATEMENT OCR PARSER SIMULATOR ─────────────── */}
      <section id="bank-ocr" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider bg-[#FEF3C7] px-3.5 py-1.5 rounded-full border border-[#FDE68A]">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>BANK STATEMENT OCR PARSER</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Auto-Reconcile <span className="text-color-shift">Bank Statements</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Test how DASA LedgerFlow automatically parses PDF bank statements and matches transactions to supplier invoices.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#FDE68A] text-center space-y-3">
                <FileText className="w-10 h-10 text-[#D97706] mx-auto" />
                <div className="font-display font-bold text-base text-[#17121F]">HDFC Bank Statement PDF</div>
                <div className="text-xs text-slate-500 font-mono">Statement Period: August 2025 &bull; 42 Transactions</div>
                <button
                  onClick={runBankOcr}
                  disabled={isParsingBank}
                  className="px-6 py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-display font-bold text-xs transition-colors shadow-md disabled:opacity-50"
                >
                  {isParsingBank ? 'Parsing Bank PDF...' : 'Run Auto-Reconciliation Scan'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#140F08] text-white font-mono text-xs space-y-3 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400">
                <span>OCR Reconciliation Status</span>
                <span className="text-[#FBBF24] font-bold">{isParsingBank ? 'Analyzing Transactions...' : 'Reconciled 100%'}</span>
              </div>

              {bankParsed && (
                <div className="space-y-2 text-slate-200">
                  <div className="flex justify-between">
                    <span>Parsed Credit Entry:</span>
                    <strong className="text-emerald-400">₹1,85,000 (Supplier Invoice Match)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Parsed Debit Entry:</span>
                    <strong className="text-rose-400">₹42,100 (Vendor Payment Match)</strong>
                  </div>
                  <div className="flex justify-between text-[11px] text-amber-300 pt-1">
                    <span>Auto-Matched Ledger Vouchers:</span>
                    <strong>42 / 42 Matched</strong>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="finance-accounting"
        productName="DASA LedgerFlow & GST Finance"
        directScreens={FINANCE_ACCOUNTING_SCREEN_ASSETS}
      />

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#140F08] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider bg-amber-950/60 border border-amber-800/60 px-4 py-1.5 rounded-full">
            READY TO STREAMLINE YOUR FINANCIALS?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a DASA LedgerFlow <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#D97706]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss double-entry general ledgers, GST tax return filing workflows, and bank statement OCR reconciliation directly with Founder &amp; CEO Jeyawin D and our finance software leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white font-display font-bold text-sm shadow-xl shadow-[#D97706]/30 transition-all"
            >
              <span>Start LedgerFlow Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
