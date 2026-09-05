import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Video,
  Palette,
  Search,
  Share2,
  Megaphone,
  PenTool,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  BarChart3,
  Lightbulb,
  Rocket,
  Check,
  Target,
  Layers,
  Award
} from 'lucide-react'
import { Link } from '../Router'

export default function DigitalMarketingServiceView() {
  const [selectedServiceId, setSelectedServiceId] = useState('video-making')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  // The 6 Core Digital Marketing Services (Clean, spacious, uncrowded)
  const SERVICES = [
    {
      id: 'video-making',
      tabLabel: 'Video Making',
      category: 'VIDEO PRODUCTION',
      icon: Video,
      headline: 'Create engaging and professional videos that capture attention and communicate your brand effectively.',
      description: 'We create high-quality video content designed for websites, social media, advertising campaigns, and business promotions.',
      deliverables: [
        'Promotional Videos',
        'Corporate Videos',
        'Product Videos',
        'Social Media Reels',
        'Brand Introduction Videos',
        'Explainer Videos',
        'Event & Business Videos',
        'AI-Powered Creative Videos'
      ],
      img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=90',
      badgeText: '4K CINEMATIC REELS'
    },
    {
      id: 'poster-design',
      tabLabel: 'Poster & Creative Designing',
      category: 'VISUAL CREATIVES',
      icon: Palette,
      headline: 'Make your brand stand out with professional and creative visual content.',
      description: 'Every design is created to communicate your message clearly while maintaining your brand identity.',
      deliverables: [
        'Social Media Posters',
        'Promotional Creatives',
        'Festival & Seasonal Designs',
        'Product Advertisements',
        'Offer & Campaign Posters',
        'Corporate Creatives',
        'Event Posters',
        'Branding Materials'
      ],
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=90',
      badgeText: 'BESPOKE BRAND CREATIVES'
    },
    {
      id: 'seo',
      tabLabel: 'SEO Optimization',
      category: 'ORGANIC GROWTH',
      icon: Search,
      headline: 'Improve your website’s visibility and help potential customers discover your business through search engines.',
      description: 'We focus on strategic and sustainable SEO practices to improve your online visibility and organic traffic.',
      deliverables: [
        'Keyword Research',
        'On-Page SEO',
        'Technical SEO',
        'Local SEO',
        'Website Optimization',
        'Content Optimization',
        'SEO Audits',
        'Search Ranking Improvement',
        'Performance Monitoring'
      ],
      img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=90',
      badgeText: 'ORGANIC GOOGLE SEARCH'
    },
    {
      id: 'social-media',
      tabLabel: 'Social Media Marketing',
      category: 'COMMUNITY & CHANNELS',
      icon: Share2,
      headline: 'Build a strong and consistent presence across today’s most important social platforms.',
      description: 'We plan, create, publish, and manage content that keeps your audience engaged and your brand visible.',
      deliverables: [
        'Instagram (Growth, Stories & Reels)',
        'Facebook (Pages & Community Ads)',
        'LinkedIn (B2B Executive Branding)',
        'YouTube (Brand Content & Shorts)',
        'Google Business Profile (Local Maps & Reviews)'
      ],
      img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=90',
      badgeText: 'ACTIVE SOCIAL AUDIENCE'
    },
    {
      id: 'digital-advertising',
      tabLabel: 'Digital Advertising',
      category: 'PERFORMANCE MARKETING',
      icon: Megaphone,
      headline: 'Reach your potential customers with targeted and performance-driven online advertising.',
      description: 'We monitor and optimize campaigns to improve reach, engagement, leads, and overall marketing performance.',
      deliverables: [
        'Google Search & Display Ads',
        'Meta Ads (Facebook & Instagram)',
        'Lead Generation Campaigns',
        'Brand Awareness Campaigns',
        'Product Promotion Campaigns',
        'Remarketing Campaigns',
        'Campaign Performance Analysis'
      ],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
      badgeText: 'TARGETED LEAD CAMPAIGNS'
    },
    {
      id: 'content-creation',
      tabLabel: 'Content Creation',
      category: 'STORYTELLING & COPY',
      icon: PenTool,
      headline: 'Powerful content helps businesses communicate their value and connect with their audience.',
      description: 'We create high-converting copy and storytelling that turns casual visitors into committed customers.',
      deliverables: [
        'Social Media Content',
        'Website Content',
        'Advertisement Copy',
        'Promotional Content',
        'Product Descriptions',
        'Video Scripts',
        'Campaign Content'
      ],
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=90',
      badgeText: 'HIGH-CONVERTING COPY'
    }
  ]

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0]
  const ActiveIcon = activeService.icon

  // 5-Step Process Data
  const PROCESS_STEPS = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We understand your business, brand, target audience, competitors, and goals.'
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'We create a customized digital marketing strategy based on your business objectives.'
    },
    {
      num: '03',
      title: 'Create',
      desc: 'Our creative team develops professional videos, posters, content, and campaigns.'
    },
    {
      num: '04',
      title: 'Promote',
      desc: 'We publish and promote your content through the right digital platforms.'
    },
    {
      num: '05',
      title: 'Analyze & Optimize',
      desc: 'We monitor performance, analyze results, and continuously improve your campaigns.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#17121F] selection:bg-[#6D28D9] selection:text-white pt-24 select-none">
      
      {/* ── TOP BREADCRUMB BAR ────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-white/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#6D28D9] font-bold">Digital Marketing</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-[#FAF8FF] hover:bg-[#F3EEFF] border border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: CLEAN, SPACIOUS & ZERO RUSH ──────────────── */}
      <section className="relative py-20 lg:py-28 bg-white border-b border-[#E9E2F5] overflow-hidden">
        
        {/* Soft Ambient Radial Light */}
        <div 
          className="absolute top-0 right-1/4 w-[700px] h-[500px] pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(109, 40, 217, 0.25), transparent 70%)'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content (Uncrowded, calm spacing) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9]">
                Digital Marketing &amp; Growth
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.12]">
                Grow Your Brand.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#EC4899]">
                  Reach the Right Audience.
                </span>{' '}
                Drive Real Results.
              </h1>

              {/* Single Clear, Human Lead Sentence (No Text Dump) */}
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-normal max-w-2xl pt-1">
                At <strong>DASA TECH</strong>, we help businesses build a powerful digital presence and turn online visibility into meaningful business growth.
              </p>

              {/* Simple Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-sm shadow-xl shadow-[#6D28D9]/25 hover:scale-105 transition-all flex items-center gap-2.5"
                >
                  <span>Start Your Digital Growth Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#services-interactive"
                  className="px-6 py-4 rounded-full bg-[#FAF8FF] hover:bg-[#F3EEFF] text-[#6D28D9] font-display font-bold text-sm border border-[#DDD0FF] transition-colors"
                >
                  Explore Services
                </a>
              </div>

            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#E9E2F5] shadow-2xl bg-[#0F0B18] group">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90"
                  alt="DASA TECH Digital Marketing"
                  className="w-full h-[400px] sm:h-[460px] object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0614]/90 via-[#0A0614]/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl bg-[#140C24]/90 backdrop-blur-md border border-white/15 text-white space-y-1.5">
                  <div className="font-display font-bold text-base text-white">
                    Creative &bull; Strategic &bull; Measurable
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Complete digital marketing solutions tailored to your unique business goals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. SPACIOUS OVERVIEW BANNER (INTRODUCES THE APPROACH CALMLY) ── */}
      <section className="py-16 lg:py-20 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-8">
          
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#17121F] tracking-tight">
              Combining Creative Media, Strategy &amp; Technology
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              Our digital marketing services combine creative content, strategic marketing, and technology to help your brand reach the right audience, increase engagement, and generate business opportunities.
            </p>
          </div>

          {/* 3 Calm Overview Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="p-6 rounded-2xl bg-white border border-[#E9E2F5] space-y-2.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold">
                <Video className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#17121F]">Creative Content</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Professional video making and poster designing that capture attention and communicate your message clearly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E2F5] space-y-2.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#17121F]">Search &amp; Social</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Sustainable SEO and social media marketing to build online visibility, authority, and consistent audience reach.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E9E2F5] space-y-2.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5FF] border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center font-bold">
                <Megaphone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#17121F]">Digital Advertising</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Targeted and performance-driven ad campaigns on Google and Meta that turn interest into real customers.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. OUR SERVICES: UNRUSHED INTERACTIVE EXPLORER ────── */}
      <section id="services-interactive" className="py-20 lg:py-28 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6D28D9] uppercase bg-[#FAF5FF] px-4 py-1.5 rounded-full border border-[#E9D5FF]">
              OUR SERVICES
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight">
              Our Digital Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#EC4899]">Services</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Select a service below to explore what we offer in detail.
            </p>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SERVICES.map((svc) => {
              const Icon = svc.icon
              const isSelected = selectedServiceId === svc.id
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedServiceId(svc.id)}
                  className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-display font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/25 scale-105'
                      : 'bg-[#FAF8FF] text-slate-700 border border-[#E9E2F5] hover:border-[#6D28D9] hover:text-[#6D28D9]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{svc.tabLabel}</span>
                </button>
              )
            })}
          </div>

          {/* Active Service Showcase (Spacious & Generously Padded) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] p-8 sm:p-12 lg:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              
              {/* Left Column: Clear Text & Spacious Grid */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9D5FF] text-[#6D28D9] flex items-center justify-center shadow-xs">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#6D28D9] uppercase block">
                      {activeService.category}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-[#17121F]">
                      {activeService.tabLabel}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#6D28D9] font-bold leading-relaxed">
                  {activeService.headline}
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {activeService.description}
                </p>

                {/* Deliverables List (Clean 2-Column with Comfortable Spacing) */}
                <div className="pt-3 border-t border-slate-200 space-y-3">
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    What We Provide:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E9E2F5] text-sm text-slate-800 font-medium"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
                  >
                    <span>Discuss {activeService.tabLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Column: High-Res Feature Visual Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 group">
                  <img
                    src={activeService.img}
                    alt={activeService.tabLabel}
                    className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/90 via-[#0F0B18]/25 to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono z-10">
                    <span className="bg-black/60 text-white backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 font-bold">
                      {activeService.badgeText}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                    <div className="font-display font-black text-xl text-white">
                      {activeService.tabLabel}
                    </div>
                    <div className="text-xs text-purple-200 mt-0.5">
                      Tailored specifically to your business goals.
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ── 4. WHY CHOOSE DASA TECH? (SPACIOUS 3 PILLARS) ─────── */}
      <section className="py-20 lg:py-28 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6D28D9] uppercase bg-white px-4 py-1.5 rounded-full border border-[#DDD0FF]">
              WHY CHOOSE DASA TECH?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight">
              Creative Thinking.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#EC4899]">
                Digital Strategy.
              </span>{' '}
              Technology.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              At DASA TECH, we don’t simply create posts or run advertisements. We understand your business, identify your target audience, develop the right strategy, and create digital experiences that support your business objectives.
            </p>
          </div>

          {/* 3 Spacious Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#6D28D9] transition-all duration-300 space-y-5 shadow-xs hover:shadow-xl hover:shadow-[#6D28D9]/10">
              <div className="w-14 h-14 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-md">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                01 &bull; CREATIVE
              </div>
              <h3 className="font-display font-bold text-2xl text-[#17121F]">
                Creative Thinking
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Visuals, videos, and posters crafted to stand out in crowded feeds and communicate your brand identity clearly.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#6D28D9] transition-all duration-300 space-y-5 shadow-xs hover:shadow-xl hover:shadow-[#6D28D9]/10">
              <div className="w-14 h-14 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-md">
                <BarChart3 className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                02 &bull; STRATEGY
              </div>
              <h3 className="font-display font-bold text-2xl text-[#17121F]">
                Digital Strategy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Targeted ad campaigns and organic SEO designed to reach high-intent customers who are actively looking for your solutions.
              </p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E9E2F5] hover:border-[#6D28D9] transition-all duration-300 space-y-5 shadow-xs hover:shadow-xl hover:shadow-[#6D28D9]/10">
              <div className="w-14 h-14 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-md">
                <Rocket className="w-7 h-7" />
              </div>
              <div className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider">
                03 &bull; TECHNOLOGY
              </div>
              <h3 className="font-display font-bold text-2xl text-[#17121F]">
                Technology
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Performance tracking, automated lead delivery, and continuous campaign optimization to ensure every marketing dollar counts.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. OUR PROCESS (01 TO 05) ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6D28D9] uppercase bg-[#FAF5FF] px-4 py-1.5 rounded-full border border-[#E9D5FF]">
              HOW WE WORK
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17121F] tracking-tight">
              Our <span className="text-color-shift">Process</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A clear, structured 5-step roadmap delivering consistent quality and real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#6D28D9] shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="font-mono font-black text-2xl text-[#6D28D9] bg-white w-12 h-12 rounded-2xl flex items-center justify-center border border-[#E9D5FF]">
                    {step.num}
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#17121F]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 text-[10px] font-mono font-bold text-slate-400 uppercase">
                  Phase {step.num}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. FINAL WARM CLOSING CTA ─────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#090C16] text-white relative overflow-hidden select-none">
        
        {/* Soft Ambient Radial Light */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-25"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(109, 40, 217, 0.45), transparent 70%)'
          }}
        />

        <div className="max-w-[1000px] mx-auto px-6 sm:px-10 text-center relative z-10 space-y-8">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
            <Rocket className="w-3.5 h-3.5 text-[#C084FC]" />
            <span>START YOUR DIGITAL GROWTH</span>
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Digital Marketing That Moves{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#F43F5E] to-[#38BDF8]">
              Your Business Forward
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are a startup, small business, established company, or growing enterprise, DASA TECH provides the creative and digital marketing expertise you need to build a stronger online presence.
          </p>

          <div className="p-8 rounded-3xl bg-white/[0.04] border border-white/10 max-w-xl mx-auto space-y-3">
            <h3 className="font-display font-bold text-2xl text-white">
              Let’s Grow Your Brand Together
            </h3>
            <p className="text-purple-200 text-sm font-medium">
              Your business deserves to be seen. Your brand deserves to be remembered.
            </p>
            <p className="text-xs text-slate-400 font-mono">
              Start Your Digital Growth Journey With DASA TECH.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#6D28D9] via-[#7C3AED] to-[#E11D48] hover:from-[#5B21B6] hover:to-[#BE123C] text-white font-display font-bold text-sm shadow-xl shadow-[#6D28D9]/40 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Get in Touch With Us Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-display font-bold text-sm border border-white/20 transition-all"
            >
              <span>Explore All Services</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  )
}
