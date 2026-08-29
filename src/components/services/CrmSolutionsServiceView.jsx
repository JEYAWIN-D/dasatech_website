import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users, MessageSquare, PhoneCall, Mail, CheckCircle2, ArrowRight,
  ArrowLeft, Sparkles, Compass, UserCheck, Calendar, FileText,
  Clock, ShieldCheck, Award, Zap, ChevronRight, Layout, Sliders,
  Send, Phone, Search, Building
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// CRM SOLUTIONS SERVICE COMPONENT
// Unique Theme: Interactive Kanban Sales Pipeline Board & 360° Customer Radar
// Color Accents: Warm Amber (#D97706), Deep Indigo (#4F46E5), Soft Amber Light
// Unique Visual Features:
// 1. Live Interactive Kanban Board Hero (Click/Move sample lead cards across sales stages)
// 2. 360° Customer Profile Radar (Call history, WhatsApp chat logs, proposals)
// 3. Automated WhatsApp Lead Ingestion Simulator
// 4. Sales Pipeline Workflow & Features Grid
// ─────────────────────────────────────────────────────────────

export default function CrmSolutionsServiceView() {
  const [activeTab, setActiveTab] = useState('kanban')
  const [sampleLeads, setSampleLeads] = useState([
    { id: '1', name: 'Apex Logistics', contact: 'Ramesh Kumar', stage: 'new', deal: 'Enterprise Freight ERP', phone: '+91 98422 10293' },
    { id: '2', name: 'HealthCare Pharma', contact: 'Dr. Kavitha', stage: 'contacted', deal: 'Multi-Branch Pharmacy CRM', phone: '+91 97890 44120' },
    { id: '3', name: 'EduLearn Academy', contact: 'Principal Anand', stage: 'proposal', deal: 'Campus Management CRM', phone: '+91 94431 80921' },
    { id: '4', name: 'Metro Retail Mart', contact: 'Siddharth M', stage: 'closed', deal: 'POS & Loyalty Suite', phone: '+91 91500 22391' }
  ])
  const [selectedLead, setSelectedLead] = useState(sampleLeads[0])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const moveLead = (id, newStage) => {
    setSampleLeads(prev => prev.map(ld => ld.id === id ? { ...ld, stage: newStage } : ld))
  }

  const STAGES = [
    { key: 'new', title: 'New Inquiries', badgeColor: 'bg-amber-100 text-amber-800 border-amber-300' },
    { key: 'contacted', title: 'Contacted', badgeColor: 'bg-blue-100 text-blue-800 border-blue-300' },
    { key: 'proposal', title: 'Proposal Sent', badgeColor: 'bg-purple-100 text-purple-800 border-purple-300' },
    { key: 'closed', title: 'Closed Won', badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
  ]

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#D97706] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#D97706] font-bold">CRM Solutions</span>
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

      {/* ── 1. HERO: INTERACTIVE KANBAN BOARD & PIPELINE ──────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#FFFBEB] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                <span>CUSTOMER RELATIONSHIP MANAGEMENT</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Centralize Customer Leads &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#4F46E5]">Close Deals Faster.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Organize every lead, track sales pipelines, automate WhatsApp and email communications, and view 360-degree customer activity history in one intuitive platform.
              </p>

              {/* CRM Feature Tags */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Lead Ingestion', 'WhatsApp Automation', 'Kanban Pipelines', '360° Customer Profile', 'Sales Analytics'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#92400E] bg-[#FEF3C7] border border-[#FDE68A] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#kanban-board"
                  className="px-6 py-3.5 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#D97706]/25 transition-all flex items-center gap-2"
                >
                  <span>Try Interactive Kanban Board</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#customer-360"
                  className="px-5 py-3.5 rounded-full bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#92400E] font-display font-bold text-xs sm:text-sm border border-[#FDE68A] transition-colors"
                >
                  <span>Customer 360 View</span>
                </a>
              </div>
            </div>

            {/* Right: Live Interactive Mini Kanban Preview */}
            <div className="lg:col-span-7">
              <div id="kanban-board" className="rounded-3xl p-6 sm:p-7 bg-[#0F0A14] border-2 border-white/10 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#D97706] text-white flex items-center justify-center font-bold">
                      <Layout className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Interactive Sales Pipeline Board</div>
                      <div className="text-[10px] font-mono text-slate-400">Click a lead to advance its pipeline stage</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#D97706]/30 text-[#FBBF24] px-3 py-1 rounded-full border border-[#FBBF24]/30">
                    LIVE DEMO BOARD
                  </span>
                </div>

                {/* 4 Pipeline Stage Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {STAGES.map((stg) => {
                    const stageLeads = sampleLeads.filter(l => l.stage === stg.key)
                    return (
                      <div key={stg.key} className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2 min-h-[160px]">
                        <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                          <span>{stg.title}</span>
                          <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px]">{stageLeads.length}</span>
                        </div>

                        {stageLeads.map((ld) => (
                          <div
                            key={ld.id}
                            onClick={() => setSelectedLead(ld)}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                              selectedLead.id === ld.id
                                ? 'bg-[#D97706]/30 border-[#FBBF24] text-white shadow-md'
                                : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                            }`}
                          >
                            <div className="font-display font-bold text-xs text-white">{ld.name}</div>
                            <div className="text-[10px] text-slate-400 font-mono mt-0.5">{ld.contact}</div>
                            <div className="text-[9px] text-[#FBBF24] font-mono mt-1 font-bold">{ld.deal}</div>
                            
                            {/* Advance stage button */}
                            {stg.key !== 'closed' && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  const nextIdx = STAGES.findIndex(s => s.key === stg.key) + 1
                                  moveLead(ld.id, STAGES[nextIdx].key)
                                }}
                                className="mt-2 text-[9px] font-mono font-bold text-[#FBBF24] hover:underline flex items-center gap-1"
                              >
                                <span>Advance &rarr;</span>
                              </button>
                            )}
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>

                <div className="text-[10px] font-mono text-slate-400 pt-1 flex items-center justify-between">
                  <span>Automatic Lead Ingestion: Website Forms &bull; Meta Ads &bull; WhatsApp</span>
                  <span className="text-[#FBBF24] font-bold">100% Real-Time Sync</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. 360° CUSTOMER RADAR & ACTIVITY HISTORY ─────────── */}
      <section id="customer-360" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider bg-[#FEF3C7] px-3.5 py-1.5 rounded-full border border-[#FDE68A]">
              <Users className="w-3.5 h-3.5" />
              <span>360-DEGREE CUSTOMER RADAR</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Complete Customer <span className="text-color-shift">Interaction History</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Inspect all communications, WhatsApp chat notes, phone call logs, and price quotation files for selected accounts.
            </p>
          </div>

          {/* Active Lead Inspection Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 space-y-4 p-6 rounded-2xl bg-white border border-[#E9E2F5] shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold text-lg border border-[#FDE68A]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[#17121F]">{selectedLead.name}</h3>
                  <div className="text-xs text-slate-500 font-mono">{selectedLead.contact} &bull; {selectedLead.phone}</div>
                </div>
              </div>

              <div className="border-t border-[#E9E2F5] pt-3 space-y-2 text-xs text-slate-600">
                <div className="flex justify-between font-mono">
                  <span>Interested Solution:</span>
                  <span className="font-bold text-[#D97706]">{selectedLead.deal}</span>
                </div>
                <div className="flex justify-between font-mono">
                  <span>Pipeline Stage:</span>
                  <span className="font-bold uppercase text-emerald-700">{selectedLead.stage}</span>
                </div>
              </div>
            </div>

            {/* Timeline Radar */}
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs font-bold text-[#D97706] uppercase tracking-wider">360° Communication Activity Timeline:</div>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#17121F]">Automated WhatsApp Quote Sent</div>
                    <div className="text-xs text-slate-600">Sent price quotation PDF and product specification breakdown directly via WhatsApp.</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#17121F]">Executive Phone Call Logged</div>
                    <div className="text-xs text-slate-600">Discussed multi-branch deployment requirements and confirmed technical demo timeline.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. CRM FEATURES GRID ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#D97706] uppercase tracking-wider bg-[#FEF3C7] px-3.5 py-1.5 rounded-full border border-[#FDE68A]">
              PLATFORM CAPABILITIES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Essential CRM <span className="text-color-shift">Features</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#D97706] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center border border-[#FDE68A]">
                <Send className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Automated WhatsApp Follow-Ups</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Send instant automated quotation PDFs, booking reminders, and follow-up messages directly to customer WhatsApp numbers.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#D97706] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center border border-[#FDE68A]">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Kanban Sales Pipelines</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Visual drag-and-drop deal stages allowing sales reps to track inquiries from first contact to deal sign-off seamlessly.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#D97706] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center border border-[#FDE68A]">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Multi-Channel Lead Ingestion</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Automatically capture and assign leads incoming from website contact forms, Meta Facebook/Instagram ads, and phone calls.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0F0A14] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#FBBF24] uppercase tracking-wider bg-amber-950/60 border border-amber-800/60 px-4 py-1.5 rounded-full">
            READY TO ORGANIZE YOUR SALES?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a CRM Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBF24] to-[#F59E0B]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss pipeline stages, WhatsApp automation sequences, and CRM integrations directly with Founder &amp; CEO Jeyawin D and our CRM engineering team.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#D97706] hover:bg-[#B45309] text-white font-display font-bold text-sm shadow-xl shadow-[#D97706]/30 transition-all"
            >
              <span>Start CRM Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
