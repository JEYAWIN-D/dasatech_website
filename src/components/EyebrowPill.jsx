import React from 'react'

export default function EyebrowPill({ children, dotColor = 'bg-[#00D4FF]' }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151821]/80 border border-white/10 text-xs font-mono font-medium text-slate-300 uppercase tracking-widest shadow-inner backdrop-blur-md">
      <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse shadow-[0_0_8px_currentColor]`} />
      <span>{children}</span>
    </div>
  )
}

