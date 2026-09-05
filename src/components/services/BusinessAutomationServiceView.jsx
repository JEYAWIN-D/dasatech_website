import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap, Workflow, FileText, CheckCircle2, ArrowRight, ArrowLeft,
  Sparkles, Compass, ShieldCheck, Award, FileCheck, Sliders,
  RefreshCw, Check, Clock, ChevronRight, Share2, Network,
  Layers, Search, Eye, SlidersHorizontal
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// BUSINESS AUTOMATION SERVICE COMPONENT
// Unique Theme: Workflow Orchestration Canvas & Intelligent Document OCR Scanner
// Color Accents: Teal (#0D9488), Cyber Emerald (#10B981), Soft Mint Background
// Unique Visual Features:
// 1. Visual Connected Node Canvas Hero (Trigger -> Document Scan -> Management Approval -> WhatsApp Alert)
// 2. Interactive Intelligent Document OCR Scanner Simulator (Drop invoice -> Bounding box highlight -> Extracted fields)
// 3. Multi-Tier Management Approval Chain Visualizer
// 4. Cross-System Integration Sync Grid
// ─────────────────────────────────────────────────────────────

export default function BusinessAutomationServiceView() {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(1)
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const triggerOcrScan = () => {
    setIsScanning(true)
    setScanComplete(false)
    setTimeout(() => {
      setIsScanning(false)
      setScanComplete(true)
    }, 1200)
  }

  const NODES = [
    { num: 1, label: 'Trigger Event', desc: 'New Invoice PDF Received in Email' },
    { num: 2, label: 'OCR Text Scan', desc: 'AI Document Parsing Extracts Supplier & Total' },
    { num: 3, label: 'Manager Sign-off', desc: 'Automated Approval Notification Sent' },
    { num: 4, label: 'ERP & Accounting Sync', desc: 'Automatic Entry Logged into ERP Ledger' }
  ]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#0D9488] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#0D9488] font-bold">Business Automation</span>
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

      {/* ── 1. HERO: WORKFLOW CANVAS NODE ORCHESTRATION ──────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#F0FDF4] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                Workflow Orchestration &amp; Automation
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Eliminate Manual Tasks &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D9488] via-[#10B981] to-[#6D28D9]">Automate Workflows.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Automate repetitive tasks such as invoice processing, approval routing, customer notification dispatches, and real-time data sync between your software tools.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Task Approvals', 'Document OCR Scanning', 'System Webhooks', 'Automated Triggers', 'Data Synchronization'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#115E59] bg-[#CCFBF1] border border-[#99F6E4] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#ocr-simulator"
                  className="px-6 py-3.5 rounded-full bg-[#0D9488] hover:bg-[#097066] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#0D9488]/25 transition-all flex items-center gap-2"
                >
                  <span>Try Interactive OCR Scanner</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#workflow-nodes"
                  className="px-5 py-3.5 rounded-full bg-[#CCFBF1] hover:bg-[#99F6E4] text-[#115E59] font-display font-bold text-xs sm:text-sm border border-[#99F6E4] transition-colors"
                >
                  <span>Node Canvas Flow</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Workflow Node Canvas */}
            <div className="lg:col-span-7">
              <div id="workflow-nodes" className="rounded-3xl p-6 sm:p-7 bg-[#061412] border-2 border-white/15 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#0D9488] text-white flex items-center justify-center font-bold">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Interactive Workflow Node Canvas</div>
                      <div className="text-[10px] font-mono text-slate-400">Click steps below to inspect automated execution nodes</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#0D9488]/30 text-[#5EEAD4] px-3 py-1 rounded-full border border-[#5EEAD4]/30">
                    AUTONOMOUS NODE FLOW
                  </span>
                </div>

                {/* Connected Node Sequence */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {NODES.map((nd) => {
                    const isActive = activeWorkflowNode === nd.num
                    return (
                      <div
                        key={nd.num}
                        onClick={() => setActiveWorkflowNode(nd.num)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isActive
                            ? 'bg-[#0D9488]/30 border-[#5EEAD4] text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] font-bold text-[#5EEAD4]">NODE 0{nd.num}</span>
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </div>
                        <div className="font-display font-bold text-sm text-white mt-1">{nd.label}</div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">{nd.desc}</div>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTELLIGENT DOCUMENT OCR SCANNER SIMULATOR ────── */}
      <section id="ocr-simulator" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0D9488] uppercase tracking-wider bg-[#CCFBF1] px-3.5 py-1.5 rounded-full border border-[#99F6E4]">
              <FileCheck className="w-3.5 h-3.5" />
              <span>AI DOCUMENT PARSING ENGINE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Intelligent Document <span className="text-color-shift">OCR Scanner</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Test how our document parsing engine automatically extracts key fields from incoming supplier invoices.
            </p>
          </div>

          {/* Interactive OCR Drop-zone Simulator Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border-2 border-dashed border-[#99F6E4] text-center space-y-3">
                <FileText className="w-10 h-10 text-[#0D9488] mx-auto" />
                <div className="font-display font-bold text-base text-[#17121F]">Sample Supplier Invoice PDF</div>
                <div className="text-xs text-slate-500 font-mono">Invoice #INV-2025-9012 &bull; Vendor: Logistics Global</div>
                <button
                  onClick={triggerOcrScan}
                  disabled={isScanning}
                  className="px-6 py-2.5 rounded-xl bg-[#0D9488] hover:bg-[#097066] text-white font-display font-bold text-xs transition-colors shadow-md disabled:opacity-50"
                >
                  {isScanning ? 'Scanning PDF Document...' : 'Run OCR Text Scan'}
                </button>
              </div>
            </div>

            {/* Extracted Structured JSON Result Card */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#061412] text-white font-mono text-xs space-y-3 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400">
                <span>Extracted JSON Data Fields</span>
                <span className="text-[#5EEAD4] font-bold">Status: {isScanning ? 'Processing...' : 'Parsed Successfully'}</span>
              </div>

              {scanComplete && (
                <div className="space-y-2 text-[#5EEAD4]">
                  <div>Vendor_Name: <span className="text-white">"Logistics Global Pvt Ltd"</span></div>
                  <div>Invoice_Number: <span className="text-white">"INV-2025-9012"</span></div>
                  <div>Invoice_Date: <span className="text-white">"2025-08-15"</span></div>
                  <div>Total_Amount: <span className="text-white font-bold">"₹2,45,000.00"</span></div>
                  <div>GSTIN_Verified: <span className="text-emerald-400 font-bold">true</span></div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#061412] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#5EEAD4] uppercase tracking-wider bg-teal-950/60 border border-teal-800/60 px-4 py-1.5 rounded-full">
            READY TO AUTOMATE REPETITIVE WORK?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Business Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEAD4] to-[#10B981]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Identify manual bottlenecks, approval delays, and API sync requirements directly with Founder &amp; CEO Jeyawin D and our automation engineering team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0D9488] hover:bg-[#097066] text-white font-display font-bold text-sm shadow-xl shadow-[#0D9488]/30 transition-all"
            >
              <span>Start Automation Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
