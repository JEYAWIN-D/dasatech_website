import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import TextLineReveal from './TextLineReveal.jsx'
import PillButton from './PillButton.jsx'
import { OFFICIAL_SERVICES } from '../data/services.js'
import { ArrowRight, Sparkles, CheckCircle2, Cpu, Layers, Activity, TrendingUp, Smartphone, ExternalLink } from 'lucide-react'

// High-resolution showcase images for each vertical
const SERVICE_IMAGES = {
  'ai-computer-vision': 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
  'iot-telemetry': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
  'custom-erp-wms': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85',
  'scada-automation': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85',
  'digital-growth': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  'web-mobile-engineering': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85'
}

export default function Services() {
  const [active, setActive] = useState(OFFICIAL_SERVICES[0]?.id || 'ai-computer-vision')
  const service = OFFICIAL_SERVICES.find((s) => s.id === active) || OFFICIAL_SERVICES[0] || {}
  const deliverables = service.deliverables || service.features || []
  const techStack = service.techStack || []
  const activeImage = SERVICE_IMAGES[service.id] || SERVICE_IMAGES['ai-computer-vision']

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-white text-[#17121F] overflow-hidden border-t border-[#E9E2F5] select-none">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(108,43,217,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header with Line Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#DDD0FF] bg-[#F5F0FF] text-[#6C2BD9] text-xs font-mono w-fit mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#6C2BD9]" />
              <span>CORE ENGINEERING CAPABILITIES</span>
            </div>

            <TextLineReveal
              as="h2"
              lines={['Comprehensive Technology &', 'Industrial Digital Solutions']}
              className="font-display text-3xl sm:text-5xl font-black text-[#17121F] leading-tight"
            />
          </div>

          <PillButton
            to="/services"
            variant="glass"
            arrow="up-right"
            size="md"
          >
            Explore All 6 Verticals
          </PillButton>
        </div>

        {/* Services Master-Detail Interactive System */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-8 items-start">
          
          {/* Left Vertical Service Navigation Buttons */}
          <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {OFFICIAL_SERVICES.map((s, idx) => {
              const isActive = active === s.id
              const indexStr = String(idx + 1).padStart(2, '0')

              return (
                <motion.button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                  className={`group relative text-left rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-200 border flex items-center justify-between overflow-hidden cursor-pointer ${
                    isActive
                      ? 'bg-[#6C2BD9] border-[#6C2BD9] text-white shadow-md shadow-[#6C2BD9]/20'
                      : 'bg-[#F5F0FF]/60 border-[#E9E2F5] text-[#6F6878] hover:text-[#17121F] hover:border-[#DDD0FF] hover:bg-[#F5F0FF]'
                  }`}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#EDE4FF]' : 'text-[#6F6878]'}`}>
                      {indexStr}
                    </span>
                    <span className="font-display font-bold">{s.title}</span>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center relative z-10 transition-transform duration-200 ${
                      isActive ? 'bg-white text-[#6C2BD9]' : 'bg-[#EDE4FF] text-[#6C2BD9] group-hover:bg-[#6C2BD9] group-hover:text-white'
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right Active Service Card featuring BIG IMAGE & HOVER ZOOM */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="bg-[#F5F0FF]/40 rounded-3xl border border-[#E9E2F5] shadow-xs overflow-hidden group text-[#17121F] flex flex-col justify-between"
              >
                
                {/* BIG SHOWCASE IMAGE WITH 3D HOVER ZOOM ANIMATION */}
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-900">
                  <motion.img
                    src={activeImage}
                    alt={service.title}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17121F] via-[#17121F]/40 to-transparent" />

                  {/* Floating Overlay Badge & Status */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                    <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 text-[#6C2BD9] font-mono text-xs font-bold uppercase tracking-wider shadow-sm">
                      {service.category}
                    </span>
                    <span className="text-xs font-mono text-white font-bold flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C2BD9]/90 backdrop-blur-md">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Production Architecture Ready
                    </span>
                  </div>

                  {/* Title Floating over Image */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight drop-shadow-md">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm font-mono mt-1 drop-shadow-xs">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Content & Deliverables */}
                <div className="p-6 sm:p-10 space-y-6">
                  
                  {/* Core Technical Deliverables Grid */}
                  <div>
                    <div className="text-xs uppercase tracking-widest text-[#6F6878] font-mono font-bold mb-3">
                      Key Technical Deliverables
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {deliverables.map((d, i) => (
                        <div
                          key={i}
                          className="px-3.5 py-2.5 rounded-xl bg-white border border-[#E9E2F5] text-[#17121F] text-xs font-display flex items-start gap-2.5 shadow-2xs group-hover:border-[#DDD0FF] transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#6C2BD9] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Components */}
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-[#6F6878] font-mono font-bold mb-2">
                      Verified Technology Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {techStack.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg text-xs font-mono font-bold text-[#6C2BD9] bg-white border border-[#DDD0FF] shadow-2xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-[#E9E2F5] flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs font-mono text-[#6F6878]">
                      DASA TECH Architecture &bull; 24/7 Production SLA
                    </div>

                    <PillButton
                      to="/services"
                      variant="primary"
                      arrow="right"
                      size="sm"
                    >
                      Explore Vertical Specs
                    </PillButton>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}


