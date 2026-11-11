import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2, Cpu, ShieldCheck, Target, Award, CheckCircle2,
  Sparkles, Zap, Activity, Layers, ArrowRight, Database,
  Brain, Users, HeartHandshake, Lightbulb, Smartphone, ArrowUpRight
} from 'lucide-react'
import FoundersAndTeamShowcase from '../components/FoundersAndTeamShowcase'
import { Link } from '../components/Router'
import { useSEO } from '../hooks/useSEO'
import EyebrowPill from '../components/EyebrowPill'
import BentoCard from '../components/BentoCard'
import CtaBand from '../components/CtaBand'

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Direct Founder Partnership',
    desc: 'You work directly with Founder & CEO Jeyawin D and our senior engineering leads, ensuring zero communication loss, architectural integrity, and fast decision-making.',
    color: '#00D4FF',
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Custom Engineering',
    desc: 'We never force off-the-shelf templates or generic packages. Every software system and automation solution is custom-crafted around your actual operational workflow.',
    color: '#22FF9A',
  },
  {
    icon: Lightbulb,
    title: 'Simple & Understandable',
    desc: 'We communicate complex technology in simple, transparent business terms so your executive stakeholders always know what is being built, why, and how it performs.',
    color: '#00D4FF',
  },
  {
    icon: Award,
    title: 'Reliability & High Quality',
    desc: 'From data security and schema normalization to microsecond response latencies, we adhere to strict quality standards to build software that simply works.',
    color: '#22FF9A',
  },
]

export default function AboutPage() {
  useSEO({
    title: 'About Us | DASA TECH — Technology • Innovation • Future',
    description:
      'DASA TECH engineers scalable enterprise software, custom ERP platforms, and smart automation systems designed to replace complex manual processes with dependable digital tools.',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About DASA TECH',
      url: 'https://dasatech.in/about',
    },
  })

  return (
    <main className="w-full bg-[#07080C] text-slate-100 overflow-hidden">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#00D4FF]/10 via-[#22FF9A]/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-3xl">
          <EyebrowPill dotColor="bg-[#00D4FF]">LEADERSHIP &amp; ARCHITECTURAL CULTURE</EyebrowPill>
          <h1 className="mt-4 font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
            Engineering software that makes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-white to-[#22FF9A]">
              business simple &amp; efficient.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#9AA3B2] leading-relaxed">
            DASA TECH engineers scalable enterprise software platforms and smart industrial automation systems designed to replace complex manual processes with dependable, unified digital tools.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STORY, MISSION, VISION & STATS IN A BENTO GRID
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Our Story (Span 7) */}
          <BentoCard
            className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between"
            glowColor="rgba(0, 212, 255, 0.15)"
          >
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold mb-4">
                <Building2 className="w-4 h-4" />
                <span>Our Story &bull; Founded in 2025</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                From Operational Frustration to Precision Engineering.
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#9AA3B2] leading-relaxed">
                Founded in 2025 by <strong>Jeyawin D (Founder &amp; CEO)</strong> in Erode, Tamil Nadu, DASA TECH emerged from a singular conviction: growing enterprises deserve mission-critical software built specifically around their actual operational bottlenecks, rather than rigid off-the-shelf software with high recurring licenses.
              </p>
              <p className="mt-3 text-sm sm:text-base text-[#9AA3B2] leading-relaxed">
                Today, our engineering hub connects physical IoT telemetry with high-concurrency cloud databases and edge AI computer vision, serving factories, schools, pharmacies, and commercial enterprises.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 text-xs font-mono text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-[#151821] border border-white/10">HQ: Erode, Tamil Nadu</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#151821] border border-white/10">European Node: London, UK</span>
              <span className="px-3 py-1.5 rounded-lg bg-[#151821] border border-white/10">100% In-House Code</span>
            </div>
          </BentoCard>

          {/* Bento Card 2: Company At A Glance / Stats (Span 5) */}
          <BentoCard
            className="md:col-span-5 p-8 flex flex-col justify-between"
            glowColor="rgba(34, 255, 154, 0.15)"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-mono text-xs font-bold text-[#22FF9A] uppercase tracking-wider">
                  DASA TECH AT A GLANCE
                </span>
                <span className="w-2 h-2 rounded-full bg-[#22FF9A] animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#151821] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Leadership</div>
                  <div className="font-display font-bold text-base text-white mt-1">Jeyawin D</div>
                  <div className="text-[10px] text-[#00D4FF] font-mono">Founder &amp; CEO</div>
                </div>

                <div className="p-4 rounded-xl bg-[#151821] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Established</div>
                  <div className="font-display font-bold text-base text-white mt-1">2025</div>
                  <div className="text-[10px] text-slate-400 font-mono">Erode Hub</div>
                </div>

                <div className="p-4 rounded-xl bg-[#151821] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Architecture</div>
                  <div className="font-display font-bold text-base text-white mt-1">99.9%</div>
                  <div className="text-[10px] text-[#22FF9A] font-mono">Uptime SLA</div>
                </div>

                <div className="p-4 rounded-xl bg-[#151821] border border-white/5">
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Code Ownership</div>
                  <div className="font-display font-bold text-base text-white mt-1">100%</div>
                  <div className="text-[10px] text-[#22FF9A] font-mono">Client Owned</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#151821] border border-white/5">
              <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Technology Domains
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['Custom ERP', 'Industrial IoT', 'Edge AI Vision', 'Web & Mobile'].map((d) => (
                  <span key={d} className="px-2.5 py-1 rounded-md bg-[#0F1117] text-[#00D4FF] border border-[#00D4FF]/20">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Bento Card 3: Mission & Vision (Span 12) */}
          <BentoCard
            className="md:col-span-12 p-8 sm:p-10"
            glowColor="rgba(0, 212, 255, 0.12)"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00D4FF] uppercase tracking-wider font-semibold mb-3">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Modernizing enterprise operations through clean, reliable, and intuitive digital tools.
                </h3>
                <p className="mt-3 text-sm text-[#9AA3B2] leading-relaxed">
                  We empower business owners, factory directors, and educators to eliminate clerical waste, track physical inventory in real time, and gain absolute certainty over their operations.
                </p>
              </div>

              <div className="border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-[#22FF9A] uppercase tracking-wider font-semibold mb-3">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  Connecting physical shop floors to intelligent software intelligence seamlessly.
                </h3>
                <p className="mt-3 text-sm text-[#9AA3B2] leading-relaxed">
                  By merging edge hardware sensors, SCADA telemetry, and custom ERP workflows, we bridge the gap between physical production and executive decision-making.
                </p>
              </div>
            </div>
          </BentoCard>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. OUR CORE VALUES & PRINCIPLES
      ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <EyebrowPill dotColor="bg-[#22FF9A]">FOUNDATIONAL PRINCIPLES</EyebrowPill>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Why Clients Trust DASA TECH.
          </h2>
          <p className="mt-4 text-base text-[#9AA3B2]">
            The engineering tenets behind our long-term client relationships and technical integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon
            return (
              <BentoCard
                key={idx}
                className="p-7 flex flex-col justify-between"
                glowColor={`${val.color}20`}
                borderColor={`hover:border-[${val.color}]/40`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{
                      backgroundColor: `${val.color}15`,
                      color: val.color,
                      border: `1px solid ${val.color}30`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9AA3B2] mt-3 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </BentoCard>
            )
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. OUR TEAM & FOUNDER
          Strict constraint: KEEP THE EXISTING DESIGN EXACTLY AS IS
          (same cards, layout, photos, names, roles, text, styling)
      ─────────────────────────────────────────────────────────────── */}
      <div className="relative py-12 border-t border-white/5">
        <FoundersAndTeamShowcase />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          5. CTA BAND
      ─────────────────────────────────────────────────────────────── */}
      <CtaBand
        eyebrow="READY TO COLLABORATE"
        title="Ready to Build Your Next Technology Solution?"
        description="Schedule a direct technical discovery discussion with Founder & CEO Jeyawin D and our engineering leads to explore your business goals and get started."
      />

    </main>
  )
}
