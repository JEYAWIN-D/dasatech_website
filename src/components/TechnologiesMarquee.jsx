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
  return null
}


