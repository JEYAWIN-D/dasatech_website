import React from 'react'
import { Handshake } from 'lucide-react'

export default function Collaborators() {
  const COLLABORATORS = [
    {
      id: 'dc-innovision',
      name: 'DC Innovision',
      logo: import.meta.env.BASE_URL + 'images/dc-innovision-logo.png',
      logoAlt: 'DC Innovision Logo',
      accentBorder: 'hover:border-sky-300',
      accentGlow: 'hover:shadow-[0_16px_36px_rgba(2,132,199,0.1)]',
      logoScale: 'max-h-11 max-w-[135px]'
    },
    {
      id: 'nexomatic',
      name: 'Nexomatic',
      logo: import.meta.env.BASE_URL + 'images/nexomatic-logo.svg',
      logoAlt: 'Nexomatic Logo',
      accentBorder: 'hover:border-emerald-300',
      accentGlow: 'hover:shadow-[0_16px_36px_rgba(16,185,129,0.1)]',
      logoScale: 'max-h-12 max-w-[110px]'
    }
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-[#FAF7F2] overflow-hidden border-t border-b border-[#EFE6D8] select-none">
      
      {/* Soft Ambient Light Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(225,29,72,0.06) 60%, transparent 80%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 space-y-12">
        
        {/* Clean, Premium Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 shadow-2xs text-xs font-mono font-bold text-amber-800 tracking-wider uppercase">
            <Handshake className="w-3.5 h-3.5 text-amber-600" />
            <span>OUR COLLABORATORS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#141017] tracking-tight">
            Our Strategic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">
              Collaborators
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Partnering with visionary technology, software, and automation partners to deliver complete, future-ready solutions.
          </p>
        </div>

        {/* Clean Collaborator Cards: Just Company Logo and Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-2xl mx-auto items-stretch">
          {COLLABORATORS.map((collab) => (
            <div
              key={collab.id}
              className={`group relative p-7 sm:p-8 rounded-3xl bg-white border border-[#EFE6D8] hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-5`}
            >
              {/* Official Logo Stage */}
              <div className="w-full h-24 rounded-2xl bg-gradient-to-b from-[#FAF7F2] to-white border border-[#EFE6D8] flex items-center justify-center p-4 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={collab.logo}
                  alt={collab.logoAlt}
                  className={`${collab.logoScale} object-contain`}
                />
              </div>

              {/* Company Name */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#141017] group-hover:text-amber-700 transition-colors">
                {collab.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


