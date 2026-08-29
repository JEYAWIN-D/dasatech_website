import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  Radio,
  Zap
} from 'lucide-react'
import { Link } from './Router.jsx'

export const SERVICES_LIST = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    icon: TrendingUp,
    headline: 'Data-driven campaigns for global reach.',
    desc: 'Search engine optimization (SEO), targeted online ads, social media management, and lead generation.',
    tags: ['SEO Optimization', 'Targeted Ads', 'Lead Generation'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
    link: '/services/digital-marketing'
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    icon: Users,
    headline: 'Unified customer lifecycle management.',
    desc: 'Organized customer management, automated sales tracking, customer insights, and multi-channel support.',
    tags: ['Lead Tracking', 'Sales Analytics', 'Customer Support'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
    link: '/services/crm-solutions'
  },
  {
    id: 'custom-erp',
    title: 'Custom ERP',
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    icon: Building2,
    headline: 'Tailored core modules for complex business ops.',
    desc: 'All-in-one business software linking inventory across branches, staff payroll, billing, and core operations.',
    tags: ['Multi-Branch Sync', 'Inventory System', 'HR & Payroll'],
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
    link: '/services/custom-erp'
  },
  {
    id: 'industrial-workflow-automation',
    title: 'Industrial Workflow Automation',
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    icon: Radio,
    headline: 'Automated order handling and work execution.',
    desc: 'Connect factory operations to receive orders through smart NFC systems and automate the complete workflow from order handling to work execution.',
    tags: ['Order Handling', 'NFC Workflows', 'Automated Execution'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90',
    link: '/services/iot-solutions'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    icon: Zap,
    headline: 'Automated workflow engines and document processing.',
    desc: 'Automated business workflows, document scanning, instant notification triggers, and digital processing.',
    tags: ['Automated Workflows', 'Document Scanning', 'Task Schedulers'],
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=90',
    link: '/services/business-automation'
  }
]

export default function ServicesJourney() {
  return (
    <section className="py-14 lg:py-20 bg-white text-[#17131F] relative overflow-hidden border-t border-[#E9E2F5] select-none">
      
      {/* Soft Ambient Background Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#EDE9FE]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#FAF5FF] to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-10 lg:space-y-12">
        
        {/* Section Header with Inside -> Outside Scale Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS TECHNOLOGY SOLUTIONS</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17131F] tracking-tight leading-[1.18] pb-1">
            Business Technology{' '}
            <span className="text-color-shift">Solutions.</span>
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed font-normal">
            Explore our core solutions — Digital Marketing, CRM Solutions, Custom ERP, Industrial Workflow Automation, and Business Automation — engineered to transform operations and drive business growth.
          </p>
        </motion.div>

        {/* ── THE INTERACTIVE SERVICE JOURNEY SPINE (CONTINUOUS ALTERNATING LEFT → RIGHT LAYOUT) ── */}
        <div className="relative pt-4">
          
          {/* Vertical Connecting Spine Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-12 w-1 bg-gradient-to-b from-[#6D28D9] via-[#A855F7] to-[#6D28D9] rounded-full opacity-35 -translate-x-1/2 pointer-events-none" />

          {/* Vertical Connecting Spine Line (Mobile / Tablet) */}
          <div className="lg:hidden absolute left-6 top-8 bottom-12 w-1 bg-gradient-to-b from-[#6D28D9] via-[#A855F7] to-[#6D28D9] rounded-full opacity-35 -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8 lg:space-y-12">
            {SERVICES_LIST.map((service, idx) => {
              const IconComp = service.icon || Sparkles
              // Continuous alternating left -> right pattern for all items
              const isLeft = idx % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative grid grid-cols-12 gap-8 items-center"
                >
                  
                  {/* Central Node Pulse Marker on Spine Line */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-white border-4 border-[#6D28D9] shadow-lg shadow-[#6D28D9]/40 flex items-center justify-center" />
                  </div>

                  {/* Alternating Left or Right Column Placement */}
                  <div
                    className={`col-span-12 ${
                      isLeft
                        ? 'lg:col-span-6 lg:pr-10'
                        : 'lg:col-span-6 lg:col-start-7 lg:pl-10'
                    }`}
                  >
                    <ServiceJourneyNode service={service} IconComp={IconComp} />
                  </div>

                </motion.div>
              )
            })}
          </div>

        </div>

      </div>

    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// REUSABLE SERVICE JOURNEY NODE (COMPACT & BOTTOM → TOP SLIDE REVEAL)
// ─────────────────────────────────────────────────────────────
function ServiceJourneyNode({ service, IconComp }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full h-[260px] sm:h-[300px] rounded-[20px] overflow-hidden border-2 border-[#E9E2F5] hover:border-[#6D28D9] bg-[#0F0B18] shadow-lg hover:shadow-xl hover:shadow-[#6D28D9]/20 transition-all duration-500 cursor-pointer"
    >
      {/* High-Resolution Background Image with Parallax Scale */}
      <img
        src={service.img}
        alt={service.title}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
          isHovered ? 'scale-108 opacity-80' : 'scale-100 opacity-90'
        }`}
      />

      {/* Deep Dark Gradient Overlay for Maximum Heading Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/95 via-[#0F0B18]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/25 via-transparent to-transparent pointer-events-none" />

      {/* Top Header Row (Default Unhovered): Category Tag & Icon */}
      <div
        className={`absolute top-4 left-4 right-4 z-10 flex items-center justify-between transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] font-mono font-bold text-white bg-[#0F0B18]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider shadow-md">
          {service.category}
        </span>
        <div className="w-9 h-9 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center shadow-lg border border-[#A855F7]/40">
          <IconComp className="w-4 h-4" />
        </div>
      </div>

      {/* Default Bottom Heading (Unhovered State - Large, Clear & Readable) */}
      <div
        className={`absolute bottom-5 left-5 right-5 z-10 transition-all duration-300 ${
          isHovered ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="p-4 sm:p-4.5 rounded-2xl bg-[#0F0B18]/85 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block">
              {service.category}
            </span>
            <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight">
              {service.title}
            </h3>
          </div>
          <div className="w-9 h-9 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-lg shrink-0 border border-[#A855F7]/40">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom → Top Smooth Content Overlay Reveal (Triggered on Hover) */}
      <div
        className={`absolute inset-x-0 bottom-0 top-auto z-20 transition-all duration-500 ease-out transform ${
          isHovered
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 sm:p-6 rounded-t-[24px] bg-white border-t-2 border-[#6D28D9] shadow-2xl space-y-3">
          
          {/* Header Row in Hover Overlay */}
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
                {service.category}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F172A]">
                {service.title}
              </h3>
            </div>
            <div className="w-9 h-9 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center shadow-md shrink-0">
              <IconComp className="w-4 h-4" />
            </div>
          </div>

          <p className="text-xs font-bold text-[#6D28D9]">
            {service.headline}
          </p>

          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-semibold">
            {service.desc}
          </p>

          {/* Capability Tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-bold text-[#5B21B6] bg-[#F7F3FF] px-2.5 py-1 rounded-md border border-[#C4B5FD]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Explore Service Link */}
          <div className="pt-1">
            <Link
              to={service.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-xs shadow-md transition-all group/btn"
            >
              <span>Explore {service.title}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
