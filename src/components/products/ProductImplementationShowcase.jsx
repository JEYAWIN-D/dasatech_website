import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Monitor, Maximize2, X, ChevronLeft, ChevronRight, Sparkles, Check, Server, Eye,
  Layers, CheckCircle2, ArrowRight, Activity, Cpu, Shield, Globe, ExternalLink,
  Lock, Copy, CheckCheck, ZoomIn
} from 'lucide-react'
import { PRODUCT_SCREEN_ASSETS } from '../../data/productScreenAssets'

// ─────────────────────────────────────────────────────────────
// CLIENT-FRIENDLY, NEAT & MODERN PRODUCT MODULE SHOWCASE
// A clean, intuitive, side-by-side presentation built for clients
// ─────────────────────────────────────────────────────────────

function SafeImage({ src, alt, className, title, brandColor }) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (hasError || !src) {
    return (
      <div className="w-full h-full min-h-[360px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white flex flex-col justify-between rounded-2xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-slate-300">Live Interface Preview</span>
        </div>
        <div className="my-auto space-y-2">
          <h4 className="font-display font-bold text-xl text-white">{title}</h4>
          <p className="text-xs text-slate-300">Operational interface screen ready for deployment.</p>
        </div>
        <div className="text-xs font-mono text-emerald-400">✓ System Active</div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] bg-slate-100 flex items-center justify-center overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs font-mono">
          <span>Loading screen...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  )
}

export default function ProductImplementationShowcase({
  productId,
  productName = 'Platform',
  screens: propScreens,
  directScreens,
  brandColor = '#2563EB'
}) {
  const screens = propScreens || directScreens || PRODUCT_SCREEN_ASSETS[productId] || PRODUCT_SCREEN_ASSETS['pharmacy-erp'] || []
  
  const [activeIdx, setActiveIdx] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  if (!screens.length) return null

  const activeScreen = screens[activeIdx] || screens[0]

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % screens.length)
  }

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + screens.length) % screens.length)
  }

  return (
    <section id="implementation-screens" className="py-12 lg:py-16 bg-[#FAFBFD] text-slate-900 border-y border-slate-200/80 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider border shadow-2xs"
            style={{ backgroundColor: `${brandColor}12`, borderColor: `${brandColor}30`, color: brandColor }}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>PRODUCT SCREEN TOUR</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Explore Production Modules
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Click through the modules below to inspect the live interface, features, and workflows built for {productName}.
          </p>
        </div>

        {/* ── 1. CLEAN HORIZONTAL MODULE SELECTOR TABS ─────────── */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin max-w-6xl mx-auto">
          {screens.map((shot, idx) => {
            const isSelected = activeIdx === idx
            return (
              <button
                key={shot.id}
                onClick={() => setActiveIdx(idx)}
                className={`px-4 py-2.5 rounded-2xl font-mono text-xs font-bold transition-all duration-200 shrink-0 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200'
                }`}
              >
                <span className={`w-5 h-5 rounded-lg flex items-center justify-center text-[10px] ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  0{idx + 1}
                </span>
                <span className="truncate max-w-[140px]">{shot.module || shot.title}</span>
              </button>
            )
          })}
        </div>

        {/* ── 2. NEAT SIDE-BY-SIDE INTERACTIVE SHOWCASE CARD ─────── */}
        <div className="max-w-6xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Module Description & Key Features (5 Cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-white border-b lg:border-b-0 lg:border-r border-slate-100">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-mono font-bold px-3 py-1 rounded-full border"
                    style={{ backgroundColor: `${brandColor}12`, borderColor: `${brandColor}30`, color: brandColor }}
                  >
                    MODULE 0{activeIdx + 1} OF 0{screens.length}
                  </span>

                  <span className="text-xs font-mono text-slate-400">
                    {activeScreen.tag || activeScreen.module}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight">
                  {activeScreen.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {activeScreen.subtitle}
                </p>

                {/* Key Capabilities List */}
                <div className="space-y-2.5 pt-3">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Features in this Screen:
                  </div>

                  {(activeScreen.specs || ['Real-Time Synchronization', 'Role-Based Permissions', 'Instant Search & Export']).map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Controls */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-all"
                    title="Previous Screen"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-all"
                    title="Next Screen"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 ml-1">
                    0{activeIdx + 1} / 0{screens.length}
                  </span>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-bold transition-all shadow-xs"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom Screen</span>
                </button>
              </div>

            </div>

            {/* Right Column: Clean Screenshot Preview (7 Cols) */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 flex items-center justify-center relative group">
              
              <div className="w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
                
                {/* Clean Browser Chrome Bar */}
                <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="text-[11px] font-mono text-slate-500 ml-2 font-medium truncate max-w-[200px] sm:max-w-xs">
                      https://{activeScreen.route || 'app.dasatech.com'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Active
                  </span>
                </div>

                {/* Actual Screenshot */}
                <div 
                  onClick={() => setIsLightboxOpen(true)}
                  className="cursor-pointer overflow-hidden max-h-[480px] flex items-center justify-center bg-slate-50 hover:opacity-95 transition-opacity"
                >
                  <SafeImage
                    src={activeScreen.img}
                    alt={activeScreen.title}
                    className="w-full h-auto object-contain max-h-[460px]"
                    title={activeScreen.title}
                    brandColor={brandColor}
                  />
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ── 3. CLEAN 10-MODULE BENTO GRID (NEAT THUMBNAILS) ──── */}
        <div className="max-w-6xl mx-auto space-y-4 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-500 px-1">
            <span className="font-bold uppercase tracking-wider">ALL MODULE SCREENS ({screens.length})</span>
            <span>Click any card to switch view</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {screens.map((shot, idx) => {
              const isSelected = activeIdx === idx
              return (
                <button
                  key={shot.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`font-bold ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className={`text-[10px] font-mono uppercase font-bold truncate ${
                      isSelected ? 'text-blue-300' : 'text-slate-400'
                    }`}>
                      {shot.module}
                    </div>
                    <div className={`font-display font-bold text-xs truncate ${
                      isSelected ? 'text-white' : 'text-slate-900'
                    }`}>
                      {shot.title}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

      </div>

      {/* ── 4. FULLSCREEN LIGHTBOX MODAL ──────────────────────── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 p-4 sm:p-8 flex flex-col justify-between select-none"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/10 text-emerald-400 border border-emerald-400/30">
                  {activeScreen?.module}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  {activeScreen?.title}
                </h3>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative my-auto flex items-center justify-center p-2 max-h-[78vh]">
              <SafeImage
                src={activeScreen?.img}
                alt={activeScreen?.title}
                className="max-w-full max-h-[74vh] object-contain rounded-2xl shadow-2xl border border-white/15"
                title={activeScreen?.title}
                brandColor={brandColor}
              />

              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 flex items-center justify-center shadow-2xl transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 border-t border-white/10 pt-4">
              <div>{activeScreen?.subtitle}</div>
              <div className="text-white font-bold">
                Screen 0{activeIdx + 1} of 0{screens.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
