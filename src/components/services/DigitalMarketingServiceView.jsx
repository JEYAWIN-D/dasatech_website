import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp, Search, Target, MousePointerClick, ArrowRight, ArrowLeft,
  CheckCircle2, Sparkles, Compass, PlayCircle, BarChart3, Users,
  ShieldCheck, Award, Zap, Video, Camera, Check, Clock, ChevronRight,
  Share2, Eye, Layout, Megaphone, Smartphone, MessageSquare
} from 'lucide-react'
import { Link } from '../Router'

// ─────────────────────────────────────────────────────────────
// DIGITAL MARKETING SERVICE COMPONENT
// Unique Theme: Vibrant Creative Studio & Performance Marketing Canvas
// Color Accents: Rose Coral (#F43F5E), Warm Violet (#6D28D9), Soft Purple (#F7F3FF)
// Unique Visual Features:
// 1. 4K Studio Viewfinder Hero & Creative Production Showcase
// 2. Interactive Multi-Channel Campaign Builder (Select Channels -> Live Strategy Preview)
// 3. Creative Production Masonry Gallery (Video Reels, Product Shoot, Copywriting)
// 4. Multi-Channel Media Matrix (Instagram, YouTube, LinkedIn, Meta, Google Search)
// 5. 6-Step Creative Campaign Lifecycle
// ─────────────────────────────────────────────────────────────

export default function DigitalMarketingServiceView() {
  const [selectedChannel, setSelectedChannel] = useState('meta')
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const CHANNELS = {
    meta: {
      title: 'Meta Ads & Instagram Reels',
      focus: 'Visual Product Awareness & Direct Consumer Orders',
      icon: Video,
      badge: 'VISUAL CREATIVE ENGINE',
      deliverables: [
        '4K promotional commercial videos & trend reels',
        'Catalog shopping ads & retargeting banners',
        'Direct WhatsApp lead collection integration'
      ]
    },
    google: {
      title: 'Google Search & Shopping Ads',
      focus: 'High-Intent Customer Acquisition & Search Dominance',
      icon: Search,
      badge: 'HIGH-INTENT SEARCH',
      deliverables: [
        'Commercial search keyword targeting & negative filtering',
        'Google Shopping merchant center product sync',
        'Local Google Maps business ranking optimization'
      ]
    },
    linkedin: {
      title: 'LinkedIn B2B Marketing',
      focus: 'Enterprise Client Generation & Executive Outreach',
      icon: Users,
      badge: 'B2B ENTERPRISE',
      deliverables: [
        'Executive thought-leadership content series',
        'Targeted B2B lead generation form campaigns',
        'Corporate brand authority & whitepaper distribution'
      ]
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#F43F5E] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#F43F5E] font-bold">Digital Marketing</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: CREATIVE STUDIO VIEWFINDER ───────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#FFF5F7] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE4E6] border border-[#FECDD3] text-[#F43F5E] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
                <span>CREATIVE STUDIO &amp; PERFORMANCE MARKETING</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                Turn Brand Visibility Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] via-[#E11D48] to-[#8B5CF6]">Qualified Customers.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                We design and execute multi-channel digital marketing strategies — combining 4K studio video production, product photography shoots, social media growth, and targeted online advertising.
              </p>

              {/* Pillars Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Brand Positioning', 'Studio Commercial Video', 'Product Photography', 'Paid Search & Meta Ads', 'Social Media Growth'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#9F1239] bg-[#FFF1F2] border border-[#FECDD3] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#campaign-builder"
                  className="px-6 py-3.5 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#F43F5E]/25 transition-all flex items-center gap-2"
                >
                  <span>Interactive Channel Builder</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#studio-production"
                  className="px-5 py-3.5 rounded-full bg-[#FFF1F2] hover:bg-[#FFE4E6] text-[#E11D48] font-display font-bold text-xs sm:text-sm border border-[#FECDD3] transition-colors"
                >
                  <span>Studio Production</span>
                </a>
              </div>
            </div>

            {/* Right: Studio Camera Viewfinder Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FECDD3] shadow-2xl bg-[#0F0A14] group">
                <img
                  src="https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&w=1200&q=90"
                  alt="DASA TECH Studio Production"
                  className="w-full h-[380px] sm:h-[440px] object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Camera Viewfinder Overlay Lines */}
                <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                    <span className="flex items-center gap-1.5 font-bold text-rose-400">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      REC 4K HDR
                    </span>
                    <span>STUDIO CREATIVE CAMPAIGN</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-white/70">
                    <span>50mm f/1.8</span>
                    <span>DASA TECH MEDIA STUDIO</span>
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-[#0F0A14]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#F43F5E] text-white flex items-center justify-center shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Professional Content Production</div>
                      <div className="text-[11px] font-mono text-slate-300">Commercial Reels &bull; Product Shoots &bull; Ad Banners</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-white/10 text-rose-300 px-3 py-1 rounded-full border border-white/20">
                    ACTIVE STUDIO
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTERACTIVE MULTI-CHANNEL CAMPAIGN BUILDER ─────── */}
      <section id="campaign-builder" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F43F5E] uppercase tracking-wider bg-[#FFF1F2] px-3.5 py-1.5 rounded-full border border-[#FECDD3]">
              <Target className="w-3.5 h-3.5" />
              <span>CAMPAIGN STRATEGY BUILDER</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Select Your Target <span className="text-color-shift">Growth Channel</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explore how DASA TECH customizes marketing deliverables based on your primary business acquisition strategy.
            </p>
          </div>

          {/* Interactive Channel Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {Object.keys(CHANNELS).map((key) => {
              const ch = CHANNELS[key]
              const IconComp = ch.icon
              const isActive = selectedChannel === key
              return (
                <button
                  key={key}
                  onClick={() => setSelectedChannel(key)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#F43F5E] text-white border-[#F43F5E] shadow-lg shadow-[#F43F5E]/25 scale-105'
                      : 'bg-[#FAF8FF] text-[#17121F] hover:bg-[#FFF1F2] border-[#E9E2F5]'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{ch.title}</span>
                </button>
              )
            })}
          </div>

          {/* Active Channel Details Preview Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChannel}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#F43F5E] uppercase tracking-wider bg-[#FFF1F2] px-3 py-1 rounded-md border border-[#FECDD3]">
                  {CHANNELS[selectedChannel].badge}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#17121F]">
                  {CHANNELS[selectedChannel].title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  Focus: {CHANNELS[selectedChannel].focus}
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">Key Deliverables:</div>
                  {CHANNELS[selectedChannel].deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 text-sm text-[#17121F] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#F43F5E] text-white flex items-center justify-center shrink-0 text-xs">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0F0A14] text-white space-y-4 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F43F5E] flex items-center justify-center text-white">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm">Targeted Strategy Execution</div>
                    <div className="text-[10px] font-mono text-slate-300">Continuous Optimization &bull; Clear Analytics</div>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Every campaign launched by DASA TECH is built on high-converting ad copy, studio visual media, and continuous channel refinement.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-xl bg-[#F43F5E] hover:bg-[#E11D48] text-white font-display font-bold text-xs transition-colors"
                >
                  <span>Request Strategy Scoping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ── 3. STUDIO PRODUCTION MASONRY GALLERY ──────────────── */}
      <section id="studio-production" className="py-16 lg:py-24 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F43F5E] uppercase tracking-wider">
                <Camera className="w-4 h-4" />
                <span>IN-HOUSE MEDIA PRODUCTION</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
                Studio Creative <span className="text-color-shift">Capabilities</span>
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md">
              From product photoshoot staging to 4K commercial editing, we produce all creative media assets in-house.
            </p>
          </div>

          {/* Masonry Studio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#F43F5E] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center border border-[#FECDD3]">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">4K Commercial Video Reels</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-resolution product video commercials, brand story reels, and promotional video ads scripted, shot, and color-graded by our creative team.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#F43F5E] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center border border-[#FECDD3]">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Studio Product Photography</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                High-definition product photography shoots for e-commerce catalogs, marketing brochures, and social media showcase banners.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#F43F5E] shadow-2xs hover:shadow-xl transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FFF1F2] text-[#F43F5E] flex items-center justify-center border border-[#FECDD3]">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#17121F]">Social Media Management</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                End-to-end social media growth schedules, visual post design, audience engagement, and strategic content calendar execution.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. CAMPAIGN LIFECYCLE WORKFLOW ────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold text-[#F43F5E] uppercase tracking-wider bg-[#FFF1F2] px-3.5 py-1.5 rounded-full border border-[#FECDD3]">
              STRUCTURED LIFECYCLE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Our 6-Stage Marketing <span className="text-color-shift">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Brand Audit & Positioning', desc: 'Review existing brand presence, competitor gaps, and target customer profiles.' },
              { step: '02', title: 'Strategy & Media Roadmap', desc: 'Create a quarterly growth strategy detailing channel budgets and campaign goals.' },
              { step: '03', title: 'Studio Production Shoot', desc: 'Script, stage, shoot, and edit commercial videos and high-res product photos.' },
              { step: '04', title: 'Campaign Setup & Launch', desc: 'Configure ad sets, build landing pages, set up tracking, and launch ad campaigns.' },
              { step: '05', title: 'Multi-Channel Distribution', desc: 'Broadcast synchronized creative assets across Instagram, Facebook, Google, and LinkedIn.' },
              { step: '06', title: 'Continuous Refinement', desc: 'Analyze performance data, refine ad creatives, and scale winning campaign channels.' }
            ].map((wf, wIdx) => (
              <div key={wIdx} className="p-6 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-3 relative overflow-hidden">
                <span className="font-mono font-bold text-xs text-[#F43F5E] bg-[#FFF1F2] px-2.5 py-1 rounded-md border border-[#FECDD3]">
                  Phase {wf.step}
                </span>
                <h3 className="font-display font-bold text-lg text-[#17121F] pt-1">{wf.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{wf.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. FAST DISCOVERY SESSION CTA ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0F0A14] text-white select-none">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wider bg-rose-950/60 border border-rose-800/60 px-4 py-1.5 rounded-full">
            READY TO GROW YOUR BRAND?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss target demographics, studio video shoots, ad budget modeling, and channel strategies directly with Founder &amp; CEO Jeyawin D and our creative leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#F43F5E] hover:bg-[#E11D48] text-white font-display font-bold text-sm shadow-xl shadow-[#F43F5E]/30 transition-all"
            >
              <span>Start Marketing Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
