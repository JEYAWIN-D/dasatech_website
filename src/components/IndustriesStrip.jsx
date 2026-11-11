import React from 'react'

const INDUSTRIES_AND_TECH = [
  'Manufacturing & Foundries',
  'Textile & Garment Mills',
  'Multi-Branch Healthcare',
  'Campus & Education SIS',
  'Cold Storage & Logistics',
  'Omnichannel Retail',
  'Custom ERP Architectures',
  'Edge AI Computer Vision',
  'IoT LoRaWAN Mesh Telemetry',
  'Siemens S7-1500 PLC SCADA',
  'High-Concurrency Node.js',
  'Distributed PostgreSQL',
]

export default function IndustriesStrip() {
  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-white/5 bg-[#07080C]/80 select-none">
      {/* Edge Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07080C] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07080C] to-transparent z-10 pointer-events-none" />

      {/* Marquee Container with pause on hover */}
      <div className="flex w-max gap-8 animate-marquee hover:[animation-play-state:paused]">
        {[...INDUSTRIES_AND_TECH, ...INDUSTRIES_AND_TECH].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0F1117] border border-white/5 text-slate-300 font-mono text-xs whitespace-nowrap hover:border-[#00D4FF]/40 hover:text-white transition-colors duration-200 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_6px_#00D4FF]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

