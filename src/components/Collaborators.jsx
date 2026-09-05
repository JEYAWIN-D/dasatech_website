import React from 'react'
import { Handshake } from 'lucide-react'

export default function Collaborators() {
  const COLLABORATORS = [
    {
      id: 'dc-innovision',
      name: 'DC Innovision',
      logo: '/images/dc-innovision-logo.png',
      logoAlt: 'DC Innovision Logo',
      accentBorder: 'hover:border-sky-300',
      accentGlow: 'hover:shadow-[0_16px_36px_rgba(2,132,199,0.1)]',
      logoScale: 'max-h-11 max-w-[135px]'
    },
    {
      id: 'nexomatic',
      name: 'Nexomatic',
      logo: '/images/nexomatic-logo.svg',
      logoAlt: 'Nexomatic Logo',
      accentBorder: 'hover:border-emerald-300',
      accentGlow: 'hover:shadow-[0_16px_36px_rgba(16,185,129,0.1)]',
      logoScale: 'max-h-12 max-w-[110px]'
    }
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-[#FAF8FF] overflow-hidden border-t border-b border-[#EAE2F7] select-none">
      
      {/* Soft Ambient Light Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(2,132,199,0.1) 60%, transparent 80%)' }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 relative z-10 space-y-12">
        
        {/* Clean, Premium Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200/80 shadow-2xs text-xs font-mono font-bold text-purple-700 tracking-wider uppercase">
            <Handshake className="w-3.5 h-3.5 text-purple-600" />
            <span>OUR COLLABORATORS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#18132A] tracking-tight">
            Our Strategic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600">
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
              className={`group relative p-7 sm:p-8 rounded-3xl bg-white border border-[#E9E1F5] ${collab.accentBorder} ${collab.accentGlow} shadow-xs hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-5`}
            >
              {/* Official Logo Stage */}
              <div className="w-full h-24 rounded-2xl bg-gradient-to-b from-[#FAF8FF] to-white border border-[#EDE5F8] flex items-center justify-center p-4 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={collab.logo}
                  alt={collab.logoAlt}
                  className={`${collab.logoScale} object-contain`}
                />
              </div>

              {/* Company Name */}
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#18132A] group-hover:text-purple-700 transition-colors">
                {collab.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}


