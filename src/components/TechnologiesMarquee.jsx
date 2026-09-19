import React from 'react'
import { ExternalLink, Sparkles } from 'lucide-react'

// SafeScroll SVG Vector Logo matching official brand identity
export const SafeScrollVectorLogo = () => (
  <div className="flex items-center gap-3 select-none">
    {/* Squircle with purple-to-fuchsia gradient & glowing shadow */}
    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#C026D3] flex items-center justify-center text-white shadow-[0_0_18px_rgba(124,58,237,0.55)] shrink-0">
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    </div>
    <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
      SafeScroll
    </span>
  </div>
)

// TeenInbox SVG Vector Logo matching official brand identity
export const TeenInboxVectorLogo = () => (
  <div className="flex items-center gap-3 select-none">
    {/* Halved shield emblem with purple-to-fuchsia gradient */}
    <div className="w-9 h-9 flex items-center justify-center shrink-0">
      <svg viewBox="0 0 100 100" className="w-8 h-8 drop-shadow-[0_0_12px_rgba(139,92,246,0.65)]">
        <defs>
          <linearGradient id="tiShieldGradMarquee" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path fill="url(#tiShieldGradMarquee)" d="M50 5 L88 20 C88 20 88 55 50 90 L50 5 Z" />
        <path fill="url(#tiShieldGradMarquee)" opacity="0.75" d="M50 5 L12 20 C12 20 12 55 50 90 L50 5 Z" />
        <line x1="50" y1="5" x2="50" y2="90" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      </svg>
    </div>
    <span className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
      TeenInbox
    </span>
  </div>
)

export default function TechnologiesMarquee() {
  return (
    <section className="w-full py-10 sm:py-14 bg-white border-y border-[#E9E2F5] select-none overflow-hidden relative z-20">
      
      {/* Soft Ambient Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[180px] rounded-full blur-[90px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(217,70,239,0.08) 60%, transparent 80%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 space-y-6">
        {/* Top Section Eyebrow Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-purple-700 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>PRODUCTS FOR THE SOCIETY</span>
          </div>
        </div>

        {/* 2 Flagship Product Logo Cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 max-w-2xl mx-auto">
          
          {/* SafeScroll Card */}
          <a
            href="https://www.safescroll.app/"
            target="_blank"
            rel="noopener noreferrer"
            id="safescroll-logo-link"
            className="group relative w-full sm:w-auto min-w-[260px] sm:min-w-[290px] flex items-center justify-between gap-5 sm:gap-6 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#0B0716] border border-[#2D1B69]/80 hover:border-[#8B5CF6] transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:-translate-y-1 cursor-pointer"
          >
            <SafeScrollVectorLogo />

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-purple-300 group-hover:bg-purple-600/30 group-hover:border-purple-400/50 group-hover:text-white transition-all shrink-0">
              <span>Visit</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

          {/* TeenInbox Card */}
          <a
            href="https://teeninbox.com/"
            target="_blank"
            rel="noopener noreferrer"
            id="teeninbox-logo-link"
            className="group relative w-full sm:w-auto min-w-[260px] sm:min-w-[290px] flex items-center justify-between gap-5 sm:gap-6 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-[#070417] border border-[#381B6D]/80 hover:border-[#D946EF] transition-all duration-300 shadow-md hover:shadow-[0_0_30px_rgba(217,70,239,0.35)] hover:-translate-y-1 cursor-pointer"
          >
            <TeenInboxVectorLogo />

            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-fuchsia-300 group-hover:bg-fuchsia-600/30 group-hover:border-fuchsia-400/50 group-hover:text-white transition-all shrink-0">
              <span>Visit</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}


