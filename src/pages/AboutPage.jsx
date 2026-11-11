import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2, Cpu, ShieldCheck, Target, Award, CheckCircle2,
  Sparkles, Zap, Activity, Layers, ArrowRight, Database, Factory,
  Brain, Radio, Workflow, Code2, Lock, Server, Users, Compass,
  Check, HeartHandshake, Lightbulb, Smartphone, Shield, ArrowUpRight
} from 'lucide-react'
import PageHeaderHero from '../components/PageHeaderHero'
import FoundersAndTeamShowcase from '../components/FoundersAndTeamShowcase'
import CustomersShowcase from '../components/CustomersShowcase'
import { PAGE_HERO_IMAGES } from '../constants/images.js'
import { Link } from '../components/Router'

// ─────────────────────────────────────────────────────────────
// DASA TECH ABOUT PAGE (REDESIGNED)
// Purpose: Human-designed, clear storytelling, high visual hierarchy
// Brand Identity: Crisp typography, royal violet accents, glassmorphism
// ─────────────────────────────────────────────────────────────

const CORE_CAPABILITIES = [
  {
    id: 'biz-tech',
    icon: Database,
    title: 'Business Technology Solutions',
    badge: 'Enterprise Software',
    summary: 'Custom ERP systems, CRM platforms, digital marketing, and automated workflow solutions tailored to streamline operations and drive business growth.',
    features: ['Custom ERP Suites', 'CRM & Sales Boards', 'Digital Marketing', 'Workflow Automation']
  },
  {
    id: 'smart-automation',
    icon: Cpu,
    title: 'Smart Automation Solutions',
    badge: 'Intelligent Systems',
    summary: 'Hardware and IoT automation spanning smart home living, precision agricultural solenoid irrigation, and industrial machine telemetry.',
    features: ['Home Automation', 'Agricultural Irrigation', 'Sub-GHz IoT Mesh', 'SCADA Machine Control']
  },
  {
    id: 'web-mobile',
    icon: Smartphone,
    title: 'Custom Web & Mobile Platforms',
    badge: 'Digital Products',
    summary: 'Modern, high-performance web applications, e-commerce marketplaces, and native mobile apps built with Next.js and responsive UI frameworks.',
    features: ['Headless E-Commerce', 'Next.js Web Apps', 'iOS & Android Apps', 'Real-Time WebSockets']
  }
]

const OUR_APPROACH = [
  {
    step: '01',
    phase: 'Discovery & Goal Alignment',
    title: 'Understanding Your Business Goals',
    desc: 'We start by sitting down with your team to understand operational bottlenecks, existing workflows, and long-term business objectives.'
  },
  {
    step: '02',
    phase: 'Custom Solution Architecture',
    title: 'Designing Tailored Systems',
    desc: 'Our engineering leads design clean database structures, intuitive user interfaces, and modular software architectures built specifically for your needs.'
  },
  {
    step: '03',
    phase: 'Agile Build & Validation',
    title: 'Quality Implementation & Testing',
    desc: 'We build iteratively with regular updates, conduct thorough security and performance testing, and ensure everything runs smoothly before launch.'
  },
  {
    step: '04',
    phase: 'Deployment & Ongoing Growth',
    title: 'Seamless Launch & Ongoing Support',
    desc: 'We deploy your platform with zero downtime, train your team, and provide continuous technical support to ensure your long-term success.'
  }
]

const WHY_CHOOSE_US = [
  {
    icon: HeartHandshake,
    title: 'Direct Founder Partnership',
    desc: 'You work directly with Founder & CEO Jeyawin D and our senior team, ensuring clear communication, accountability, and fast decision-making.'
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Custom Engineering',
    desc: 'We never force off-the-shelf templates. Every software system and automation solution is custom-crafted around your actual workflow.'
  },
  {
    icon: Lightbulb,
    title: 'Simple & Understandable',
    desc: 'We communicate complex technology in simple, clear business terms so you always know what is being built and why.'
  },
  {
    icon: Award,
    title: 'Reliability & High Quality',
    desc: 'From data security to smooth user interfaces, we adhere to strict quality standards to build software that simply works.'
  }
]

export default function AboutPage() {
  const [activeApproach, setActiveApproach] = useState(0)

  return (
    <div className="min-h-screen bg-white text-[#17121F] relative overflow-hidden select-none">

      {/* ── 1. CINEMATIC HERO ─────────────────────────────────── */}
      <PageHeaderHero
        tagline="HUMAN-CENTERED ENGINEERING &amp; SOFTWARE LEADERSHIP"
        title="About DASA TECH"
        description="We are a modern technology company dedicated to building intuitive business software, custom ERP platforms, and smart automation solutions that empower growing enterprises."
        image={PAGE_HERO_IMAGES?.about?.path || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=90'}
        tools={['Business ERP', 'Smart Automation', 'Web & Mobile', 'Custom Software', 'Direct Founder Leadership']}
      />

      {/* ── 2. OUR STORY & PURPOSE (HUMAN-DESIGNED NARRATIVE) ──── */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FAF7F2] via-white to-white border-b border-[#EFE6D8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Our Story &bull; Founded in 2025
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#141017] tracking-tight leading-[1.12]">
                Building software that makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">business simple and efficient.</span>
              </h2>

              {/* Concise Intro Lead */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                DASA TECH engineers scalable software platforms and smart automation systems designed to replace complex manual processes with dependable, unified digital tools.
              </p>

              {/* Clean Structured Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-white border border-[#EFE6D8] shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Origin &amp; Leadership</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    Founded in 2025 by <strong>Jeyawin D (Founder &amp; CEO)</strong> in Erode, Tamil Nadu.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EFE6D8] shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <Target className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Core Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    Modernizing enterprise operations through clean, reliable, and intuitive digital tools.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EFE6D8] shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Engineering Focus</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    Custom ERP suites, industrial IoT telemetry, and smart workflow automation.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#EFE6D8] shadow-2xs space-y-1.5 hover:border-amber-300 transition-colors">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Client Commitment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                    100% tailored development aligned with exact industry workflows and compliance.
                  </p>
                </div>
              </div>

              {/* Quick Info Badges */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-amber-500/25 transition-all flex items-center gap-2"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full bg-amber-50 hover:bg-amber-100/80 text-amber-900 font-display font-bold text-xs sm:text-sm border border-amber-200 transition-colors"
                >
                  <span>Talk with Founder &amp; CEO</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Company Overview Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-7 sm:p-8 bg-[#120D16] border-2 border-amber-500/20 text-white shadow-2xl space-y-6 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                      DASA TECH AT A GLANCE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                    Erode, India
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 font-mono text-xs relative z-10">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Founder &amp; CEO</span>
                    <span className="font-display font-bold text-sm text-amber-300">Jeyawin D</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Established</span>
                    <span className="font-display font-bold text-sm text-white">2025</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Core Focus</span>
                    <span className="font-display font-bold text-sm text-white">Software &amp; Automation</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Client Commitment</span>
                    <span className="font-display font-bold text-sm text-emerald-400">100% Tailored</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs relative z-10">
                  <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
                    Our Core Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Business Tech Solutions', 'Smart Automation Solutions', 'Web & Mobile Apps', 'Dedicated R&D'].map((pillar, pIdx) => (
                      <span key={pIdx} className="text-[10px] font-mono text-amber-100 bg-white/10 px-2.5 py-1 rounded-lg border border-white/5">
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. OUR CAPABILITIES & SOLUTIONS ───────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE6D8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              What We Build
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#141017] tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">Capabilities &amp; Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              We design and deliver clean, scalable technology across three primary solution areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_CAPABILITIES.map((cap) => {
              const Icon = cap.icon
              return (
                <div
                  key={cap.id}
                  className="p-8 rounded-3xl bg-white border-2 border-[#EFE6D8] hover:border-amber-400 transition-all duration-300 space-y-5 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-amber-500 to-rose-600 text-white flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl text-[#141017]">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFE6D8] space-y-2 font-mono text-xs">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Key Offerings:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] text-amber-900 bg-amber-50/70 border border-amber-200/80 px-2.5 py-1 rounded-md font-semibold">
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 4. OUR PRACTICAL APPROACH ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#120D16] text-white border-b border-white/10 relative overflow-hidden">
        {/* Ambient Warm Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12 relative z-10">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              How We Work
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Our Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400">4-Step Delivery Approach</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Clear milestone steps ensuring smooth execution, high quality, and no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUR_APPROACH.map((st, idx) => {
              const isActive = activeApproach === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveApproach(idx)}
                  className={`p-7 rounded-3xl border cursor-pointer transition-all duration-300 space-y-4 ${
                    isActive
                      ? 'bg-gradient-to-b from-amber-500/30 to-rose-600/30 border-amber-400 text-white shadow-xl scale-102 shadow-amber-500/20'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-amber-500/30'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-amber-300 bg-black/40 px-3 py-1 rounded-full border border-amber-400/30">
                      STEP {st.step}
                    </span>
                    <span className="text-slate-400">{st.phase}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 5. OUR FAMILY & LEADERSHIP (TEAM SHOWCASE) ────────── */}
      <FoundersAndTeamShowcase />

      {/* ── 6. WHY CLIENTS TRUST DASA TECH ────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EFE6D8]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-amber-800 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>THE DASA TECH DIFFERENCE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#141017] tracking-tight">
              Why Clients Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">DASA TECH</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              The core principles behind our relationships and long-term client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border-2 border-[#EFE6D8] hover:border-amber-400 transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl hover:shadow-amber-500/10"
                >
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#141017]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 7. OUR VALUED CUSTOMERS & PARTNERSHIPS ─────────────── */}
      <CustomersShowcase />

      {/* ── 8. CONSULTATION CALL TO ACTION ────────────────────── */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-10 sm:p-14 rounded-[36px] border-2 border-[#EFE6D8] bg-gradient-to-b from-[#FAF7F2] via-white to-[#FDF8EE] shadow-lg space-y-6">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
            Start a Conversation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141017] font-display tracking-tight leading-tight">
            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600">Next Technology Solution?</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Schedule a direct technical discovery discussion with Founder &amp; CEO Jeyawin D and our engineering leads to explore your business goals and get started.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 hover:from-amber-400 hover:to-rose-500 text-white font-display font-bold text-sm shadow-xl shadow-amber-500/25 transition-all"
            >
              <span>Schedule Discovery Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
