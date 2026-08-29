import React, { useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import {
  Sparkles,
  Mail,
  Phone,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react'
import Reveal from '../Reveal'

const FOUNDERS = [
  {
    id: 'jeyawin',
    name: 'JEYAWIN D',
    role: 'FOUNDER & CEO',
    specialty: 'Chief Systems Architect & Solutions Lead',
    badge: 'EXECUTIVE LEADERSHIP',
    color: '#2563EB',
    email: 'dasatechmu@gmail.com',
    phone: '+91 76399 30148',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
    bio: 'Oversees technical direction, high-availability PostgreSQL distributed ERP platforms, edge neural computer vision, and industrial automation infrastructures across all DASA TECH enterprise ecosystems.',
    stats: [
      { label: 'Platform Uptime', value: '99.9%' },
      { label: 'Engineering Focus', value: 'Full Stack' },
      { label: 'Established', value: '2025' }
    ],
    skills: ['Distributed ERP', 'Computer Vision AI', 'Industrial SCADA', 'Cloud DevOps', 'IoT Hardware Systems'],
    telemetry: 'Core Strategy & Systems: Active'
  }
]

function InteractiveFounderCard({ founder }) {
  const [activeTab, setActiveTab] = useState('bio')
  const [isHovered, setIsHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 20, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <div style={{ perspective: '1200px' }} className="w-full max-w-2xl mx-auto">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="relative rounded-3xl p-8 sm:p-10 border border-slate-200 bg-white shadow-md transition-all duration-200 group overflow-hidden"
      >
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-10 space-y-6">
          
          {/* Top Row: Executive Badge & Live Telemetry Indicator */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-blue-50 border border-blue-200 text-blue-700 shadow-2xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>{founder.badge}</span>
            </span>

            <div className="flex items-center gap-2 font-mono text-xs text-emerald-600 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Leadership</span>
            </div>
          </div>

          {/* Founder Hero Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold text-white bg-blue-600 shadow-xs">
                FOUNDER &amp; MD
              </div>
            </div>

            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
                {founder.name}
              </h3>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                {founder.role}
              </div>
              <div className="text-xs font-mono text-slate-500 font-medium">
                {founder.specialty}
              </div>


            </div>

          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 font-mono text-xs">
            {[
              { id: 'bio', label: 'Executive Vision' },
              { id: 'tech', label: 'Core Architecture' },
              { id: 'connect', label: 'Direct Channels' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 rounded-xl font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-900 shadow-2xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[100px] flex flex-col justify-center">
            {activeTab === 'bio' && (
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {founder.bio}
              </p>
            )}

            {activeTab === 'tech' && (
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">
                  Pillars of Architectural Ownership:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {founder.skills.map((sk, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-slate-700 bg-slate-50 border border-slate-200"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'connect' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                <a
                  href={`mailto:${founder.email}`}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 transition flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{founder.email}</span>
                </a>
                <a
                  href={`tel:${founder.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 transition flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">{founder.phone}</span>
                </a>
              </div>
            )}
          </div>

          {/* Footer Telemetry Strip */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{founder.telemetry}</span>
            </span>
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 transition"
            >
              <span>Consult Direct</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default function Founders3DShowcase() {
  return (
    <section className="relative py-16 bg-slate-50 text-slate-900 overflow-hidden border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>EXECUTIVE LEADERSHIP &amp; ARCHITECTURAL MASTERY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              Company Leadership
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 2025 by <strong>Jeyawin D</strong>, DASA TECH brings deep technical expertise in custom enterprise software, artificial intelligence, IoT telemetry, and industrial automation.
            </p>
          </div>
        </Reveal>

        {/* Founder Card */}
        <div className="flex justify-center">
          {FOUNDERS.map((founder) => (
            <Reveal key={founder.id} delay={0.1}>
              <InteractiveFounderCard founder={founder} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
