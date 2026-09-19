import React from 'react'
import { motion } from 'framer-motion'
import {
  Brain,
  Eye,
  Database,
  Radio,
  Factory,
  Globe,
  Cloud,
  Zap,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  Share2
} from 'lucide-react'
import { Link } from './Router.jsx'

// Interactive capabilities with dedicated icons and 1-line descriptions
const CAPABILITIES = [
  {
    title: 'Generative AI & LLMs',
    icon: Brain,
    desc: 'Custom RAG Pipelines, Neural Agents & Vector Search'
  },
  {
    title: 'Computer Vision AI',
    icon: Eye,
    desc: '60 FPS Real-Time Defect Detection & Optical Telemetry'
  },
  {
    title: 'Custom ERP Engines',
    icon: Database,
    desc: 'Pharmacy, Campus, Factory BOM & Logistics WMS'
  },
  {
    title: 'Industrial Workflow Automation',
    icon: Radio,
    desc: 'Order handling to work execution with smart NFC systems'
  },
  {
    title: 'Industrial Automation',
    icon: Factory,
    desc: 'Smart Factory Control & Machine Dashboards'
  },
  {
    title: 'Progressive Web Apps',
    icon: Globe,
    desc: 'Offline-First High-Concurrency Enterprise Web Apps'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    desc: 'Kubernetes Orchestration & Zero-Downtime Pipelines'
  },
  {
    title: 'Digital Automation',
    icon: Zap,
    desc: 'Automated Webhooks, Event Bus & Process Engines'
  }
]

// Architecture Flow Pipeline Nodes
const ARCHITECTURE_FLOW = [
  { step: '01', title: 'AI', desc: 'Neural Logic', icon: Brain },
  { step: '02', title: 'ERP', desc: 'Core Data Hub', icon: Database },
  { step: '03', title: 'WORKFLOW', desc: 'Order Execution', icon: Radio },
  { step: '04', title: 'CLOUD', desc: 'Mesh Network', icon: Cloud },
  { step: '05', title: 'AUTOMATION', desc: 'Live Execution', icon: Zap }
]

export default function About() {
  return (
    <section
      id="about"
      className="relative text-white select-none"
    >
      
      {/* ======================================================================== */}
      {/* 1. ABOUT / COMPANY SECTION - DEEP VIOLET-PURPLE BACKGROUND (#24113F)    */}
      {/* ======================================================================== */}
      <div className="bg-[#24113F] py-16 sm:py-24 lg:py-32 relative overflow-clip">
        
        {/* Glowing Ambient Violet Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6D28D9]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Distinctive Typography on Deep Violet */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Clean Section Lead */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-semibold text-[#C084FC] tracking-wide uppercase"
              >
                About DASA Tech
              </motion.div>

              {/* Typography Hierarchy: Pure White & Gradient Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display leading-[1.18] tracking-tight space-y-2 pb-1"
              >
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                  Building Smart
                </h2>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                  Digital Solutions for
                </h2>
                <div className="text-3xl sm:text-6xl lg:text-7xl font-black text-color-shift pb-1">
                  Growing Businesses
                </div>
              </motion.div>

              {/* Short Paragraph Content */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[#E9D5FF] text-base sm:text-xl font-normal leading-relaxed max-w-xl"
              >
                At DASA TECH, we combine deep technology experience with modern design to create easy-to-use software that connects your team, systems, and customers.
              </motion.p>

              {/* Premium CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#A855F7] hover:from-[#A855F7] hover:to-[#6D28D9] px-7 sm:px-8 py-3.5 sm:py-4 font-display font-bold text-sm text-white shadow-lg shadow-[#6D28D9]/40 hover:shadow-xl hover:shadow-[#A855F7]/50 transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <div className="w-8 h-8 rounded-full bg-white text-[#6D28D9] flex items-center justify-center group-hover:scale-110 group-hover:rotate-45 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>

            </div>

            {/* Right Column: Visual with Ambient Glow */}
            <div className="lg:col-span-6 relative">
              
              {/* Soft Violet Glow Aura */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#A855F7]/30 via-[#6D28D9]/20 to-transparent blur-2xl pointer-events-none" />

              {/* Revealing Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-3xl overflow-hidden border border-[#A855F7]/30 bg-[#170E2B] shadow-2xl group"
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=90"
                  alt="Digital Engineering Environment"
                  className="w-full h-[320px] sm:h-[460px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#24113F]/90 via-transparent to-transparent" />

                {/* Floating Live Telemetry Badge over Visual */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-2xl bg-[#24113F]/90 backdrop-blur-md border border-[#A855F7]/30 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 font-mono text-xs text-white">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <div>
                      <div className="font-bold font-display text-xs sm:text-sm text-white">System Performance</div>
                      <div className="text-[#E9D5FF] text-[10px] sm:text-xs">24/7 Monitoring &amp; High Reliability</div>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto font-bold text-[10px] sm:text-xs text-[#A855F7] bg-[#6D28D9]/30 px-2.5 py-1 rounded-full border border-[#A855F7]/40">
                    99.9% Uptime
                  </span>
                </div>

                {/* Floating Decorative Digital Node */}
                <div className="absolute top-6 right-6 p-3 rounded-2xl bg-[#6D28D9] text-white shadow-lg flex items-center gap-2 font-mono text-xs font-bold border border-[#A855F7]/40">
                  <Cpu className="w-4 h-4 animate-spin-slow text-[#A855F7]" />
                  <span>Connected Systems</span>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}





