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
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FAF8FF] via-white to-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F3FF] border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>OUR STORY &bull; FOUNDED IN 2025</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight leading-[1.12]">
                Building software that makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#06B6D4]">business simple and efficient.</span>
              </h2>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
                Founded in 2025 by <strong>Jeyawin D (Founder &amp; CEO)</strong>, DASA TECH was built on a straightforward mission: to help organizations replace complex, disconnected manual work with clean, dependable, and easy-to-use digital solutions.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Based in Erode, Tamil Nadu, India, our team combines deep software engineering expertise with practical business understanding. Whether it is an all-in-one ERP suite, digital marketing automation, or smart IoT systems, we craft solutions that feel natural, intuitive, and built for growth.
              </p>

              {/* Quick Info Badges */}
              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <Link
                  to="/products"
                  className="px-6 py-3.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#6D28D9]/25 transition-all flex items-center gap-2"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-full bg-[#F5F0FF] hover:bg-[#EDE9FE] text-[#6D28D9] font-display font-bold text-xs sm:text-sm border border-[#DDD0FF] transition-colors"
                >
                  <span>Talk with Founder &amp; CEO</span>
                </Link>
              </div>
            </div>

            {/* Right Card: Company Overview Snapshot */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-7 sm:p-8 bg-[#0F0B18] border-2 border-white/15 text-white shadow-2xl space-y-6 relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-[#C084FC] uppercase tracking-wider">
                      DASA TECH AT A GLANCE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                    Erode, India
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 font-mono text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Founder &amp; CEO</span>
                    <span className="font-display font-bold text-sm text-[#C084FC]">Jeyawin D</span>
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

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs">
                  <span className="text-[10px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block">
                    Our Core Pillars
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['Business Tech Solutions', 'Smart Automation Solutions', 'Web & Mobile Apps', 'Dedicated R&D'].map((pillar, pIdx) => (
                      <span key={pIdx} className="text-[10px] font-mono text-slate-200 bg-white/10 px-2.5 py-1 rounded-lg">
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
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
              <Layers className="w-3.5 h-3.5" />
              <span>WHAT WE BUILD</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight">
              Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#06B6D4]">Capabilities &amp; Solutions</span>
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
                  className="p-8 rounded-3xl bg-[#FAF8FF] border-2 border-[#E9E2F5] hover:border-[#6D28D9] transition-all duration-300 space-y-5 shadow-sm hover:shadow-xl hover:shadow-[#6D28D9]/10 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-[#6D28D9] bg-[#F7F3FF] px-3 py-1 rounded-full border border-[#DDD0FF]">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-black text-xl text-[#17121F]">
                      {cap.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E9E2F5] space-y-2 font-mono text-xs">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Key Offerings:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cap.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[10px] text-[#5B21B6] bg-white border border-[#E9E2F5] px-2.5 py-1 rounded-md font-semibold">
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
      <section className="py-20 lg:py-28 bg-[#0F0B18] text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6D28D9]/40 text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider border border-[#8B5CF6]/40">
              <Workflow className="w-3.5 h-3.5" />
              <span>HOW WE WORK</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Our Practical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#6D28D9]">4-Step Delivery Approach</span>
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
                      ? 'bg-[#6D28D9] border-[#C084FC] text-white shadow-xl scale-102'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-[#C084FC] bg-black/40 px-3 py-1 rounded-full">
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
      <section className="py-20 lg:py-28 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE DASA TECH DIFFERENCE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Why Clients Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6]">DASA TECH</span>
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
                  className="p-7 rounded-3xl bg-white border-2 border-[#E9E2F5] hover:border-[#6D28D9] transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl hover:shadow-[#6D28D9]/10"
                >
                  <div className="w-11 h-11 rounded-2xl bg-[#F7F3FF] border border-[#DDD0FF] flex items-center justify-center text-[#6D28D9]">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#17121F]">
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

      {/* ── 7. CONSULTATION CALL TO ACTION ────────────────────── */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-10 sm:p-14 rounded-[36px] border-2 border-[#E9E2F5] bg-gradient-to-b from-[#FAF8FF] via-white to-[#F5F0FF] shadow-lg space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT CONVERSATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#17121F] font-display tracking-tight leading-tight">
            Ready to Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6]">Next Technology Solution?</span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed">
            Schedule a direct technical discovery discussion with Founder &amp; CEO Jeyawin D and our engineering leads to explore your business goals and get started.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-sm shadow-xl shadow-[#6D28D9]/30 transition-all"
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
