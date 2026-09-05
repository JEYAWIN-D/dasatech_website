import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check, ArrowRight, CheckCircle2, Sparkles, Layers,
  Pill, School, Camera, Factory, Warehouse, DollarSign,
  ShoppingCart, Radio, Home, Sprout
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────
// CLEAN, MINIMALIST & BEAUTIFUL PROJECT SELECTOR
// Zero text clutter, rich visual image cards, instant multi-select
// ─────────────────────────────────────────────────────────────

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
    title: 'FactorySync ERP',
    category: 'Factory & SCADA',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=85'
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

  // Toggle selection
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
        scale: 'Standard Deployment',
        timeline: 'Direct Discussion',
        estimatedCost: 'Custom Consultation',
        estimatedWeeks: 'Milestone Execution',
        notes: ''
      })
    }
    setTimeout(() => setIsApplied(false), 2500)
  }

  return (
    <div className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/90 shadow-xl space-y-6 text-slate-900 select-none">
      
      {/* Clean, Minimalist Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div className="space-y-1">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            Select Solutions for Your Inquiry
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            Which software solutions are you interested in?
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm">
            Click the project cards below to easily attach them to your message.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-bold self-start sm:self-auto border border-slate-200">
          {selectedIds.length} Selected
        </div>
      </div>

      {/* ── 10 CLEAN VISUAL IMAGE CARDS ───────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
        {PROJECTS.map((proj) => {
          const isSelected = selectedIds.includes(proj.id)
          return (
            <button
              key={proj.id}
              type="button"
              onClick={() => toggleProject(proj.id)}
              className={`rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between overflow-hidden cursor-pointer group relative ${
                isSelected
                  ? 'bg-blue-50/60 border-blue-600 ring-2 ring-blue-500/20 shadow-md scale-[1.02]'
                  : 'bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              {/* Image Preview */}
              <div className="relative h-24 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Checkbox indicator */}
                <div className={`absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm scale-110'
                    : 'bg-black/40 text-transparent border border-white/40'
                }`}>
                  <Check className="w-3 h-3" />
                </div>
              </div>

              {/* Title & Category */}
              <div className="p-3 space-y-0.5">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold truncate">
                  {proj.category}
                </div>
                <h4 className={`font-display font-bold text-xs sm:text-sm truncate ${
                  isSelected ? 'text-blue-700' : 'text-slate-900'
                }`}>
                  {proj.title}
                </h4>
              </div>
            </button>
          )
        })}
      </div>

      {/* ── CLEAN ACTION BAR ──────────────────────────────────── */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
        <div className="text-xs text-slate-500 font-mono truncate max-w-lg">
          {selectedIds.length > 0 ? (
            <span>Selected: <strong className="text-slate-900">{selectedNames}</strong></span>
          ) : (
            <span>No project selected yet. Click cards above to select.</span>
          )}
        </div>

        <button
          type="button"
          onClick={handleApply}
          disabled={selectedIds.length === 0}
          className={`w-full sm:w-auto px-6 py-3 rounded-full font-display font-bold text-xs transition-all flex items-center justify-center gap-2 ${
            selectedIds.length > 0
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 cursor-pointer hover:-translate-y-0.5'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
          }`}
        >
          {isApplied ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Applied to Message Form!</span>
            </>
          ) : (
            <>
              <span>Apply to Inquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

    </div>
  )
}
