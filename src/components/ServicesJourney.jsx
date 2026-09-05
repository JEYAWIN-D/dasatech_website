import React from 'react'
import { motion } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  Radio,
  Zap,
  CheckCircle2
} from 'lucide-react'
import { Link } from './Router.jsx'

export const SERVICES_LIST = [
  {
    id: 'custom-erp',
    title: 'Custom ERP Development',
    category: 'ENTERPRISE PLATFORMS',
    icon: Building2,
    headline: 'Tailored core modules for complex operations.',
    desc: 'All-in-one business software linking inventory across branches, staff payroll, automated billing, and live management dashboards.',
    tags: ['Multi-Branch Sync', 'Inventory Control', 'POS Billing', 'Tax Invoicing'],
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
    link: '/services/custom-erp',
    featured: true
  },
  {
    id: 'industrial-workflow-automation',
    title: 'Industrial Workflow Automation',
    category: 'SMART FACTORY',
    icon: Radio,
    headline: 'Automated order handling and work execution.',
    desc: 'Connect factory operations to receive orders through smart NFC systems and automate the complete workflow from order handling to work execution.',
    tags: ['Order Handling', 'NFC Smart Tags', 'Shop-Floor Tracking', 'Automated Execution'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90',
    link: '/services/iot-solutions',
    featured: true
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    category: 'CUSTOMER LIFECYCLE',
    icon: Users,
    headline: 'Unified customer tracking & automated sales.',
    desc: 'Organized customer pipelines, automated WhatsApp and email communications, and complete customer activity history.',
    tags: ['Lead Tracking', 'WhatsApp Automation', 'Sales Pipelines'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
    link: '/services/crm-solutions',
    featured: false
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'GROWTH & MEDIA',
    icon: TrendingUp,
    headline: 'Grow Your Brand. Reach the Right Audience.',
    desc: 'Professional video making, poster designing, SEO, social media marketing, and targeted advertising tailored to your business goals.',
    tags: ['Video Making', 'Poster Design', 'SEO', 'Digital Ads'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
    link: '/services/digital-marketing',
    featured: false
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'WORKFLOW ENGINES',
    icon: Zap,
    headline: 'Automated document processing & system sync.',
    desc: 'Automate daily routine tasks, multi-step management approvals, document scanning, and real-time database sync.',
    tags: ['Task Approvals', 'Document Scanning', 'System Sync'],
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=90',
    link: '/services/business-automation',
    featured: false
  }
]

export default function ServicesJourney() {
  const featuredServices = SERVICES_LIST.filter((s) => s.featured)
  const regularServices = SERVICES_LIST.filter((s) => !s.featured)

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8FF] text-[#17131F] relative overflow-hidden border-t border-[#E9E2F5] select-none">
      
      {/* Soft Ambient Background Accents */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#EDE9FE]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#FAF5FF] to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
        
        {/* Section Header with Clean Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl space-y-3"
          >
            <div className="text-xs font-bold tracking-wider text-[#6D28D9] uppercase">
              Technology Solutions
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17131F] tracking-tight leading-[1.18]">
              Business Technology{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#A855F7]">
                Solutions.
              </span>
            </h2>
            <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal">
              Explore our core solutions — Custom ERP, Industrial Workflow Automation, CRM, Digital Marketing, and Business Automation — engineered to transform operations and drive sustainable growth.
            </p>
          </motion.div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#DDD0FF] text-[#6D28D9] font-display font-bold text-xs sm:text-sm hover:bg-[#6D28D9] hover:text-white transition-all shadow-xs hover:shadow-md self-start md:self-end shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── MODERN BENTO GRID (REPLACES THE AWKWARD ZIGZAG TIMELINE) ── */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* Row 1: Top 2 Featured Enterprise Solutions (Span 6 each) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {featuredServices.map((service, idx) => {
              const IconComp = service.icon || Sparkles
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-6 bg-white border border-[#E9E2F5] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image Banner */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18]/90 via-[#0A0D18]/40 to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono font-bold text-white bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#6D28D9] text-white flex items-center justify-center shadow-lg border border-white/20">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Image Overlay Title */}
                    <div className="absolute bottom-5 left-6 right-6 z-10">
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-5">
                    <div className="space-y-3">
                      <p className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                        {service.headline}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-mono font-bold text-slate-700 bg-[#F7F3FF] px-3 py-1 rounded-lg border border-[#DDD0FF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#6D28D9] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Explore Solution Architecture</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Row 2: 3 Specialized Growth Solutions (Span 4 each) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {regularServices.map((service, idx) => {
              const IconComp = service.icon || Sparkles
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-4 bg-white border border-[#E9E2F5] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Top Image Banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18]/85 via-[#0A0D18]/30 to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
                        {service.category}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#6D28D9] text-white flex items-center justify-center shadow-md border border-white/20">
                        <IconComp className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 z-10">
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2.5">
                      <p className="text-[11px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                        {service.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {service.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono font-bold text-slate-700 bg-[#F7F3FF] px-2.5 py-1 rounded-md border border-[#DDD0FF]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={service.link}
                          className="inline-flex items-center gap-1.5 font-display font-bold text-xs text-[#6D28D9] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
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
