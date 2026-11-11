import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Globe, Sparkles } from 'lucide-react'

// Pinned Global Nodes Spec
const NODES = [
  {
    id: 'erode',
    name: 'Erode, Tamil Nadu',
    country: 'India',
    coords: [77.72, 11.34],
    svgX: 716,
    svgY: 218,
    role: 'Global HQ & Core Engineering Hub',
    badge: 'PRIMARY HUB',
    color: '#00D4FF',
    isPrimary: true,
    desc: 'Systems architecture, distributed PostgreSQL ERP, and IoT edge hardware laboratories.',
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    coords: [-0.12, 51.5],
    svgX: 500,
    svgY: 107,
    role: 'International Technology Node',
    badge: 'KEY NODE',
    color: '#22FF9A',
    isKey: true,
    desc: 'European enterprise client coordination and technical solutions advisory.',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    coords: [55.3, 25.2],
    svgX: 654,
    svgY: 180,
    role: 'Middle East Regional Node',
    badge: 'PLANNED',
    color: '#9AA3B2',
    isPlaceholder: true,
    desc: 'Gulf region ERP integration and smart infrastructure monitoring.',
  },
  {
    id: 'newyork',
    name: 'New York',
    country: 'United States',
    coords: [-74.0, 40.7],
    svgX: 294,
    svgY: 137,
    role: 'North American Relay',
    badge: 'PLANNED',
    color: '#9AA3B2',
    isPlaceholder: true,
    desc: 'Cloud microservices synchronization and partner network relay.',
  },
  {
    id: 'nairobi',
    name: 'Nairobi',
    country: 'Kenya',
    coords: [36.8, -1.3],
    svgX: 602,
    svgY: 254,
    role: 'East Africa Emerging Node',
    badge: 'PLANNED',
    color: '#9AA3B2',
    isPlaceholder: true,
    desc: 'Agricultural telemetry and remote IoT station testing.',
  },
]

// Curved Bezier Arcs Originating from Erode (716, 218)
const ARCS = [
  { id: 'erode-london', d: 'M 716 218 Q 590 100 500 107', target: 'london' },
  { id: 'erode-dubai', d: 'M 716 218 Q 680 185 654 180', target: 'dubai' },
  { id: 'erode-newyork', d: 'M 716 218 Q 480 60 294 137', target: 'newyork' },
  { id: 'erode-nairobi', d: 'M 716 218 Q 665 255 602 254', target: 'nairobi' },
]

export default function GlobalPresenceMap({ compact = false }) {
  const [activeNode, setActiveNode] = useState(null)
  const [hoveredArc, setHoveredArc] = useState(null)

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#07080C] border border-white/10 p-4 sm:p-8 backdrop-blur-2xl shadow-2xl">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-[100px] pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#22FF9A]/10 rounded-full blur-[90px] pointer-events-none -z-0" />

      {/* Header Info if not compact */}
      {!compact && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] uppercase tracking-widest font-semibold">
              <Globe className="w-3.5 h-3.5" />
              <span>International Architecture</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1">
              Global Deployment Infrastructure
            </h3>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF]" />
              <span>HQ (Erode)</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22FF9A] shadow-[0_0_8px_#22FF9A]" />
              <span>Key Node (London)</span>
            </span>
          </div>
        </div>
      )}

      {/* Interactive SVG World Map Canvas */}
      <div className="relative w-full mt-4 select-none">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto max-h-[520px] drop-shadow-xl"
          style={{ background: 'transparent' }}
        >
          <defs>
            {/* Linear Gradient for Arcs */}
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#22FF9A" />
            </linearGradient>

            <linearGradient id="arcGradientDim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22FF9A" stopOpacity="0.4" />
            </linearGradient>

            {/* Glowing Drop Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Continents Silhouette Outline (Hairline #1A1D24 with subtle border) */}
          <g fill="#1A1D24" stroke="rgba(255,255,255,0.06)" strokeWidth="0.75">
            {/* North America */}
            <path d="M 120 70 Q 200 40 280 80 Q 340 120 300 210 Q 240 260 210 240 Q 150 200 130 140 Z" />
            <path d="M 210 240 Q 230 280 250 310 Q 220 300 210 270 Z" />
            {/* South America */}
            <path d="M 260 300 Q 350 320 370 380 Q 350 480 300 490 Q 250 440 260 360 Z" />
            {/* Europe */}
            <path d="M 460 70 Q 540 60 570 120 Q 520 160 480 150 Q 450 120 460 70 Z" />
            {/* British Isles */}
            <path d="M 480 95 Q 505 90 500 115 Q 480 120 480 95 Z" />
            {/* Africa */}
            <path d="M 480 170 Q 600 180 620 270 Q 570 390 520 380 Q 450 300 470 210 Z" />
            {/* Asia */}
            <path d="M 580 80 Q 750 40 880 90 Q 920 180 840 260 Q 750 240 680 180 Q 620 140 580 80 Z" />
            {/* Indian Subcontinent */}
            <path d="M 680 180 Q 740 190 735 250 Q 710 275 680 220 Z" />
            {/* Australia */}
            <path d="M 800 330 Q 910 320 920 390 Q 850 440 800 400 Z" />
            {/* Japan & East Islands */}
            <path d="M 880 140 Q 900 135 895 170 Q 875 165 880 140 Z" />
          </g>

          {/* Curved Bezier Network Arcs with Marching Ants Animation */}
          <g>
            {ARCS.map((arc) => {
              const isHighlighted = activeNode === arc.target || hoveredArc === arc.target
              return (
                <path
                  key={arc.id}
                  d={arc.d}
                  fill="none"
                  stroke={isHighlighted ? 'url(#arcGradient)' : 'url(#arcGradientDim)'}
                  strokeWidth={isHighlighted ? 2.5 : 1.5}
                  strokeDasharray="6 8"
                  className="animate-dash transition-all duration-300"
                  filter={isHighlighted ? 'url(#glow)' : undefined}
                />
              )
            })}
          </g>

          {/* Staggered Radial Pulse Rings for Primary Hubs */}
          {/* Erode Pulse (Neon Blue) */}
          <circle cx="716" cy="218" r="14" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.4">
            <animate attributeName="r" values="6;26" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
          </circle>

          {/* London Pulse (Tech Green) */}
          <circle cx="500" cy="107" r="12" fill="none" stroke="#22FF9A" strokeWidth="1" opacity="0.4">
            <animate attributeName="r" values="5;22" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
          </circle>

          {/* Pins Layer */}
          {NODES.map((node) => {
            const isHovered = activeNode === node.id

            return (
              <g
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => {
                  setActiveNode(node.id)
                  setHoveredArc(node.id)
                }}
                onMouseLeave={() => {
                  setActiveNode(null)
                  setHoveredArc(null)
                }}
                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
              >
                {/* 44px Hit Target for Mobile Accessibility */}
                <circle cx={node.svgX} cy={node.svgY} r="22" fill="transparent" />

                {/* Outer Pin Halo */}
                <circle
                  cx={node.svgX}
                  cy={node.svgY}
                  r={node.isPrimary ? 8 : node.isKey ? 6.5 : 4.5}
                  fill={node.color}
                  fillOpacity={node.isPlaceholder ? 0.4 : 0.85}
                  filter={node.isPrimary || node.isKey ? 'url(#glow)' : undefined}
                />

                {/* Solid Core Pin Dot */}
                <circle
                  cx={node.svgX}
                  cy={node.svgY}
                  r={node.isPrimary ? 3.5 : 2.5}
                  fill="#FFFFFF"
                />

                {/* City Label if Primary or Key Node */}
                {(node.isPrimary || node.isKey) && (
                  <text
                    x={node.svgX}
                    y={node.svgY - 12}
                    textAnchor="middle"
                    fill={node.color}
                    fontSize="10"
                    fontFamily="monospace"
                    fontWeight="bold"
                    className="select-none tracking-wider pointer-events-none drop-shadow"
                  >
                    {node.name.split(',')[0].toUpperCase()}
                  </text>
                )}
              </g>
            )
          })}
        </svg>

        {/* Hover / Tap Interactive Tooltip Card Overlay */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 p-4 rounded-xl bg-[#0F1117]/95 border border-white/20 backdrop-blur-2xl shadow-2xl z-30 pointer-events-none"
            >
              {(() => {
                const node = NODES.find((n) => n.id === activeNode)
                if (!node) return null
                return (
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-white">
                        {node.badge}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {node.country}
                      </span>
                    </div>
                    <div className="font-display font-bold text-white text-base mt-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#00D4FF]" />
                      <span>{node.name}</span>
                    </div>
                    <div className="text-xs text-[#22FF9A] font-mono mt-0.5">{node.role}</div>
                    <div className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                      {node.desc}
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Legend Below */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-4 border-t border-white/5 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF]" />
          <span>Erode (HQ Core)</span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#22FF9A]" />
          <span>London (Node)</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span className="w-2 h-2 rounded-full bg-slate-500" />
          <span>Dubai / NYC (Relay)</span>
        </div>
        <div className="flex items-center gap-2 text-[#00D4FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Global Mesh Sync</span>
        </div>
      </div>
    </div>
  )
}
