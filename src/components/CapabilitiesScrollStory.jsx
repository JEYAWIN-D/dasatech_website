import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Brain,
  Database,
  Users,
  Radio,
  Globe,
  Cloud,
  Zap,
  TrendingUp
} from 'lucide-react'
import { Link } from './Router.jsx'

export const CORE_CAPABILITIES = [
  {
    id: 'ai-vision',
    icon: Brain,
    title: 'AI & Computer Vision',
    category: 'ARTIFICIAL INTELLIGENCE',
    desc: 'Smart AI tools, automated quality inspection, intelligent search, and decision support for your business.',
    tags: ['Computer Vision', 'Smart Search', 'AI Inspection', 'Automated Quality'],
    img: '/images/ai-computer-vision.jpg',
    link: '/services/ai-solutions',
    accent: '#6D28D9'
  },
  {
    id: 'erp-solutions',
    icon: Database,
    title: 'ERP Solutions',
    category: 'ENTERPRISE PLATFORMS',
    desc: 'Custom all-in-one business software for managing inventory, billing, multi-branch stores, and daily operations.',
    tags: ['Pharmacy ERP', 'School ERP', 'Warehouse WMS', 'Multi-Branch Sync'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
    link: '/services/custom-erp',
    accent: '#7C3AED'
  },
  {
    id: 'crm-solutions',
    icon: Users,
    title: 'CRM Solutions',
    category: 'CUSTOMER RELATIONSHIP',
    desc: 'Intelligent lead tracking, multi-channel customer communications, automated WhatsApp inquiries, and visual sales pipelines.',
    tags: ['Lead Pipeline', 'WhatsApp Ingestion', 'Customer Radar', 'Sales Tracking'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
    link: '/services/crm-solutions',
    accent: '#D97706'
  },
  {
    id: 'industrial-workflow-automation',
    icon: Radio,
    title: 'Industrial Workflow Automation',
    category: 'FACTORY AUTOMATION',
    desc: 'Smart factory system that receives and manages orders using touchless NFC systems to automate production workflows from order handling to work execution.',
    tags: ['Order Handling', 'NFC Smart Tags', 'Workflow Tracking', 'Automated Execution'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90',
    link: '/services/iot-solutions',
    accent: '#8B5CF6'
  },
  {
    id: 'web-mobile',
    icon: Globe,
    title: 'Web & Mobile Development',
    category: 'APPLICATION ARCHITECTURE',
    desc: 'Fast, modern websites and mobile applications tailored for your customers and internal teams.',
    tags: ['Mobile Apps', 'Web Applications', 'Custom Interfaces', 'Fast APIs'],
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=90',
    link: '/services/web-mobile',
    accent: '#6D28D9'
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud & DevOps',
    category: 'INFRASTRUCTURE & SCALE',
    desc: 'Secure, reliable cloud hosting and setup to keep your applications fast, secure, and always online.',
    tags: ['Cloud Hosting', '24/7 Availability', 'Secure Backups', 'Auto-Scaling'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=90',
    link: '/services/software-development',
    accent: '#7C3AED'
  },
  {
    id: 'business-automation',
    icon: Zap,
    title: 'Business Automation',
    category: 'WORKFLOW & PROCESS',
    desc: 'Automated daily workflows, document scanning, digital forms, and instant system integrations.',
    tags: ['Workflow Automation', 'Document Scanning', 'Task Schedulers', 'System Sync'],
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=90',
    link: '/services/business-automation',
    accent: '#8B5CF6'
  },
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    category: 'GROWTH & MEDIA',
    desc: 'Professional video making, poster designing, SEO, social media marketing, and targeted advertising tailored to your business goals.',
    tags: ['Video Production', 'Poster Design', 'SEO & Search', 'Targeted Ads'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
    link: '/services/digital-marketing',
    accent: '#6D28D9'
  }
]

// Staggered Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export default function CapabilitiesScrollStory() {
  const [activeIdx, setActiveIdx] = useState(0)

  const activeCapability = CORE_CAPABILITIES[activeIdx] || CORE_CAPABILITIES[0]

  return (
    <section className="py-24 lg:py-32 bg-white text-[#17131F] relative overflow-hidden border-t border-[#E9E2F5] select-none">
      
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gradient-to-br from-[#EDE9FE]/40 via-[#F3E8FF]/20 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#FAF5FF] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12 lg:space-y-16">
        
        {/* Section Header with Inside -> Outside Scale & Fade Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-xs font-bold tracking-wider text-[#6D28D9] uppercase">
            Core Engineering Capabilities
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17131F] tracking-tight leading-[1.18] pb-1">
            Engineering Technology Built for{' '}
            <span className="text-color-shift">Real-World Impact.</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal">
            Explore our core services to see how we help businesses streamline operations and build modern digital products.
          </p>
        </motion.div>

        {/* Interactive Capability Showcase Stage */}
        <div className="grid grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: STAGGERED REVEAL CAPABILITY LIST               */}
          {/* ========================================================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-3"
          >
            {CORE_CAPABILITIES.map((cap, idx) => {
              const isActive = activeIdx === idx
              const IconComp = cap.icon || Sparkles

              return (
                <motion.div
                  key={cap.id}
                  variants={itemVariants}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`group relative p-5 lg:p-6 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-[#F7F3FF] border-[#DDD0FF] shadow-sm'
                      : 'bg-white border-transparent hover:border-[#E9E2F5] hover:bg-[#FAF8FF]'
                  }`}
                >
                  {/* Left Purple Accent Indicator for Active Item */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCapabilityIndicator"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#6D28D9] rounded-r-full"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Symbol Icon Badge (Replaces Numbers) */}
                      <span
                        className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
                          isActive
                            ? 'text-[#6D28D9] bg-white border-[#DDD0FF] shadow-2xs scale-105'
                            : 'text-[#94A3B8] bg-[#FAF8FF] border-[#E9E2F5] group-hover:text-[#6D28D9] group-hover:bg-white'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </span>

                      {/* Capability Name */}
                      <h3
                        className={`font-display font-bold text-lg sm:text-xl lg:text-2xl transition-colors ${
                          isActive
                            ? 'text-[#6D28D9] font-black'
                            : 'text-[#1E293B] group-hover:text-[#6D28D9]'
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    {/* Subtle Right Arrow Indicator */}
                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? 'text-[#6D28D9] translate-x-1'
                          : 'text-[#CBD5E1] group-hover:text-[#64748B] group-hover:translate-x-0.5'
                      }`}
                    />
                  </div>

                  {/* Mobile Accordion Inline Preview (<768px) */}
                  <div className="lg:hidden">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pt-4 mt-4 border-t border-[#DDD0FF]/60 space-y-4"
                      >
                        <p className="text-sm text-[#475569] leading-relaxed">
                          {cap.desc}
                        </p>

                        <div className="rounded-xl overflow-hidden border border-[#E9E2F5]">
                          <img
                            src={cap.img}
                            alt={cap.title}
                            className="w-full h-48 object-cover"
                          />
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {cap.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono font-bold text-[#17131F] bg-white px-2.5 py-1 rounded-md border border-[#E9E2F5]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={cap.link}
                          className="inline-flex items-center gap-2 font-display font-bold text-xs text-[#6D28D9]"
                        >
                          <span>Explore Capability</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </motion.div>
                    )}
                  </div>

                </motion.div>
              )
            })}
          </motion.div>


          {/* ========================================================= */}
          {/* RIGHT SIDE: HOVER REVEAL PREVIEW STAGE (DESKTOP)          */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 35 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block col-span-12 lg:col-span-6 relative"
          >
            <div className="sticky top-28 h-[480px] w-full rounded-[28px] overflow-hidden border border-[#E9E2F5] bg-white shadow-xl flex flex-col justify-between p-2 group">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, scale: 0.96, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.03, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full rounded-[24px] overflow-hidden flex flex-col justify-between"
                >
                  {/* High Resolution Image with Soft Zoom */}
                  <img
                    src={activeCapability.img}
                    alt={activeCapability.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradient Overlays for Depth & Maximum Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/95 via-[#0F0B18]/60 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/20 via-transparent to-transparent pointer-events-none" />

                  {/* Top Category Tag & Symbol Badge (No Numbers) */}
                  <div className="relative z-10 p-6 flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 uppercase tracking-wider">
                      {activeCapability.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#E9D5FF] bg-[#6D28D9]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#A855F7]/40 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>CORE ARCHITECTURE</span>
                    </span>
                  </div>

                  {/* Bottom Content Card */}
                  <div className="relative z-10 p-6 sm:p-8 space-y-4 text-white">
                    <h4 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                      {activeCapability.title}
                    </h4>

                    <p className="text-[#E2E8F0] text-sm sm:text-base leading-relaxed font-normal max-w-lg">
                      {activeCapability.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {activeCapability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono font-bold text-white bg-white/15 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <div className="pt-2">
                      <Link
                        to={activeCapability.link}
                        className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#C084FC] hover:text-white transition-colors group/link"
                      >
                        <span>Explore {activeCapability.title}</span>
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>

    </section>
  )
}
