import React, { useState } from 'react'
import { Check, ArrowRight, CheckCircle2, Sparkles, X, Layers } from 'lucide-react'

// ============================================================================
// CLEAN, HIGHLIGHTED & ATTRACTIVE INTERACTIVE SOLUTION SELECTOR
// Redesigned with premium typography, luminous accents, and high-impact aesthetics.
// ============================================================================

const PROJECTS = [
  {
    id: 'pharmacy-erp',
    title: 'PharmaPulse ERP',
    category: 'Pharmacy & Healthcare',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'school-erp',
    title: 'EduCore Campus ERP',
    category: 'School & Academics',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'snapflow-ai',
    title: 'SnapFlow Studio AI',
    category: 'AI Face & Studio CRM',
    img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'factory-erp',
    title: 'IoT Textile ERP',
    category: 'Textile & Garment IoT',
    img: '/textile-iot-erp.jpg'
  },
  {
    id: 'warehouse-erp',
    title: 'WMS Warehouse Hub',
    category: 'Warehouse & Logistics',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'finance-accounting',
    title: 'LedgerFlow Finance',
    category: 'Finance & GST Accounts',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'ecommerce-engine',
    title: 'CommerceEngine Store',
    category: 'Headless E-Commerce',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'iot-telemetry',
    title: 'EdgeMesh IoT Mesh',
    category: 'IoT Sensor Mesh',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'home-automation',
    title: 'SmartHome Systems',
    category: 'Home & Building IoT',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=85'
  },
  {
    id: 'agri-automation',
    title: 'AgriSmart Precision',
    category: 'Smart Agriculture',
    img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=85'
  }
]

export default function ContactProjectEstimator({ onSelectEstimate }) {
  const [selectedIds, setSelectedIds] = useState([])
  const [isApplied, setIsApplied] = useState(false)

  // Toggle single project selection
  const toggleProject = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const selectedProjects = PROJECTS.filter((p) => selectedIds.includes(p.id))
  const selectedNames = selectedProjects.map((p) => p.title).join(', ')

  const handleApply = () => {
    if (!selectedProjects.length) return
    setIsApplied(true)
    if (onSelectEstimate) {
      onSelectEstimate({
        modules: selectedNames,
        scale: 'Tailored Enterprise Deployment',
        timeline: 'Direct Founder Discussion',
        estimatedCost: 'Custom Scope Quotation',
        estimatedWeeks: 'Agile Milestone Delivery',
        notes: ''
      })
    }

    // Smoothly scroll to consultation form so the user sees their selection filled in
    setTimeout(() => {
      const formEl = document.getElementById('consultation-form') || document.querySelector('form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 200)

    setTimeout(() => setIsApplied(false), 3000)
  }

  return (
    <div className="relative group">

      {/* Radiant Ambient Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-cyan-500/25 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-700 pointer-events-none" />

      {/* Main Glassmorphic Container */}
      <div className="relative rounded-[28px] p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0F1424]/95 via-[#0A0E1A]/95 to-[#070A14]/98 border border-violet-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_40px_rgba(108,43,217,0.15)] space-y-7 sm:space-y-9 text-white select-none backdrop-blur-xl overflow-hidden">
        
        {/* Subtle top luminous edge */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-violet-400/70 to-transparent pointer-events-none" />
        
        {/* Ambient Corner Orbs */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />

        {/* ── HEADER: Elevated, High-Tech & Ultra-Attractive ── */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-5 border-b border-white/[0.08] pb-6">
          <div className="space-y-2.5 max-w-2xl">
            
            {/* Sleek Glowing Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/15 border border-violet-400/30 text-violet-300 text-xs font-display font-semibold tracking-wide uppercase shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-violet-300 animate-pulse" />
              <span>Select Solutions For Your Inquiry</span>
            </div>

            {/* Main Headline with Radiant High-Contrast Gradient Accent */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white font-display tracking-tight leading-tight">
              Which <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(167,123,255,0.4)]">software solutions</span> are you interested in?
            </h3>

            {/* Clear, Readable Subtitle */}
            <p className="text-slate-300/85 text-sm sm:text-[15px] leading-relaxed font-body">
              Click the project cards below to easily attach them to your message and receive a custom solution roadmap.
            </p>
          </div>

          {/* Interactive Counter & Clear Action */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0">
            <div className={`px-4 py-2 rounded-full font-mono text-xs font-bold border flex items-center gap-2 transition-all duration-300 ${
              selectedIds.length > 0
                ? 'bg-violet-500/20 border-violet-400/60 text-violet-200 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                : 'bg-white/[0.04] border-white/10 text-slate-400'
            }`}>
              <span className={`w-2 h-2 rounded-full transition-all ${
                selectedIds.length > 0 ? 'bg-violet-400 animate-pulse' : 'bg-slate-600'
              }`} />
              <span>{selectedIds.length} Selected</span>
            </div>

            {selectedIds.length > 0 && (
              <button
                type="button"
                onClick={() => setSelectedIds([])}
                className="px-3 py-2 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                <span>Clear</span>
              </button>
            )}
          </div>
        </div>

        {/* ── 10 SOLUTION IMAGE CARDS (5x2 Grid) ── */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {PROJECTS.map((proj) => {
            const isSelected = selectedIds.includes(proj.id)
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => toggleProject(proj.id)}
                className={`rounded-2xl text-left border flex flex-col justify-between overflow-hidden cursor-pointer relative transition-all duration-300 group/card ${
                  isSelected
                    ? 'bg-gradient-to-b from-violet-950/60 to-slate-900/90 border-violet-400 shadow-[0_12px_28px_rgba(108,43,217,0.35)] ring-2 ring-violet-500/40 -translate-y-1 scale-[1.02]'
                    : 'bg-slate-900/40 hover:bg-slate-800/60 border-white/[0.08] hover:border-violet-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-950/20'
                }`}
              >
                {/* Image Container with Smooth Zoom & Gradient */}
                <div className="relative h-28 sm:h-32 w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isSelected ? 'scale-105 opacity-100' : 'opacity-85 group-hover/card:opacity-100 group-hover/card:scale-105'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top-Right Checkmark Badge */}
                  <div
                    className={`absolute top-2.5 right-2.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.6)] scale-110'
                        : 'bg-black/60 backdrop-blur-sm text-transparent border border-white/20 group-hover/card:border-white/50'
                    }`}
                  >
                    <Check className={`w-3.5 h-3.5 stroke-[3] transition-opacity duration-200 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>

                {/* Card Title & Category Details */}
                <div className="p-3 sm:p-3.5 space-y-1.5 flex-1 flex flex-col justify-between bg-gradient-to-b from-transparent to-black/20">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-violet-300/90 uppercase tracking-wider font-semibold truncate">
                      {proj.category}
                    </div>
                    <h4 className={`font-display font-bold text-xs sm:text-[13px] leading-snug transition-colors line-clamp-2 ${
                      isSelected ? 'text-white' : 'text-slate-200 group-hover/card:text-white'
                    }`}>
                      {proj.title}
                    </h4>
                  </div>

                  <div className="pt-1.5 flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isSelected ? 'bg-violet-400' : 'bg-emerald-400/80'}`} />
                    <span className={isSelected ? 'text-violet-300 font-medium' : 'text-slate-400'}>
                      {isSelected ? 'Attached to inquiry' : 'Click to select'}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* ── CLEAN ACTION BAR ── */}
        <div className="relative z-10 pt-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.08]">
          <div className="text-xs sm:text-sm font-body text-slate-300 max-w-xl">
            {selectedIds.length > 0 ? (
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-400 text-xs font-mono mr-1">Selected:</span>
                {selectedProjects.map((p) => (
                  <span
                    key={p.id}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-violet-500/15 border border-violet-400/30 text-violet-200 text-xs font-medium"
                  >
                    {p.title}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleProject(p.id)
                      }}
                      className="text-violet-300 hover:text-white cursor-pointer ml-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-slate-400 flex items-center gap-2 text-xs sm:text-sm">
                <Layers className="w-4 h-4 text-violet-400" />
                Select one or more software solutions above to include them with your inquiry.
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleApply}
            disabled={selectedIds.length === 0}
            className={`w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2.5 ${
              selectedIds.length > 0
                ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_4px_25px_rgba(108,43,217,0.45)] cursor-pointer hover:-translate-y-0.5'
                : 'bg-white/5 text-slate-500 border border-white/10 cursor-not-allowed'
            }`}
          >
            {isApplied ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-bounce" />
                <span>Attached to Inquiry Form!</span>
              </>
            ) : (
              <>
                <span>Apply to Inquiry Form</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  )
}
