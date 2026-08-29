import React, { useRef, useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown, CheckCircle2, ShieldCheck, Zap, Activity } from 'lucide-react'
import { Link } from './Router.jsx'

export const EDITORIAL_ITEMS = [
  // ─── PRODUCTS (01 - 07) ───
  {
    id: 'pharmacy-erp',
    num: '01',
    type: 'PRODUCT SYSTEM',
    category: 'HEALTHCARE & PHARMA',
    title: 'PHARMACY\nERP',
    headline: 'Complete pharmacy operations in one connected platform.',
    desc: 'Automated batch-expiry tracking, Schedule H1 drug compliance, integrated POS thermal billing, and predictive procurement.',
    capabilities: ['INVENTORY ENGINE', 'PRESCRIPTION AUDIT', 'SCHEDULE H1 LOGS', 'GST POS BILLING'],
    techMeta: 'Sub-2.5s Latency • Multi-Branch Sync • Barcode I/O',
    assemblyNodes: [
      { label: 'BATCH EXPIRY SYNC', icon: Activity, pos: 'top-4 left-4' },
      { label: 'SCHEDULE H1 LOGS', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'GST POS BILLING', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'STOCK AUTO-SYNC', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=90',
    link: '/products/erp',
    accent: '#6D28D9'
  },
  {
    id: 'school-erp',
    num: '02',
    type: 'PRODUCT SYSTEM',
    category: 'EDUCATION & CAMPUS',
    title: 'SCHOOL &\nCAMPUS ERP',
    headline: 'Unified institutional management for modern academia.',
    desc: 'End-to-end administration connecting admissions, academics, fee reconciliation, RFID attendance, and synchronized parent portals.',
    capabilities: ['STUDENT ACADEMICS', 'FEE RECONCILIATION', 'RFID ATTENDANCE', 'EXAM & GRADING'],
    techMeta: 'Role-Based RBAC • Automated SMS/Email • Cloud Portal',
    assemblyNodes: [
      { label: 'RFID ATTENDANCE', icon: Activity, pos: 'top-4 left-4' },
      { label: 'FEE RECONCILE', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'PARENT SYNC APP', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'EXAM & GRADING', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=90',
    link: '/products/ems',
    accent: '#7C3AED'
  },
  {
    id: 'nfc-erp',
    num: '03',
    type: 'PRODUCT SYSTEM',
    category: 'SMART CONTACTLESS',
    title: 'NFC ACCESS\n& ASSET ERP',
    headline: 'Contactless identification and touchless operations.',
    desc: 'NFC-enabled workforce attendance, digital security access cards, equipment asset tagging, and instant tap-and-verify pipelines.',
    capabilities: ['CONTACTLESS TAP', 'ASSET TRACKING', 'SECURE ACCESS', 'INSTANT VERIFY'],
    techMeta: '13.56MHz ISO 14443A • AES-128 Cryptography • Real-Time Handshake',
    assemblyNodes: [
      { label: '13.56MHz NFC ISO', icon: Activity, pos: 'top-4 left-4' },
      { label: 'AES-128 CRYPTO', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'TAP-TO-VERIFY', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'ASSET RFID MESH', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1600&q=90',
    link: '/products',
    accent: '#8B5CF6'
  },
  {
    id: 'warehouse-wms',
    num: '04',
    type: 'PRODUCT SYSTEM',
    category: 'LOGISTICS & SUPPLY CHAIN',
    title: 'WAREHOUSE\nWMS HUB',
    headline: 'End-to-end inventory and depot control.',
    desc: 'Real-time 3D bin/rack allocation matrix, FIFO picking optimizations, barcode pallet tracking, and multi-depot inventory routing.',
    capabilities: ['RACK / BIN MATRIX', 'FIFO DISPATCH', 'BARCODE PALLETS', 'DEPOT ROUTING'],
    techMeta: 'Dynamic Heatmaps • High-Volume SKU Tracking • Real-Time Audit',
    assemblyNodes: [
      { label: '3D RACK MATRIX', icon: Activity, pos: 'top-4 left-4' },
      { label: 'FIFO PICK ENGINE', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'PALLET BARCODE', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'DEPOT ROUTING', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90',
    link: '/products',
    accent: '#6D28D9'
  },
  {
    id: 'snapshare',
    num: '05',
    type: 'PRODUCT SYSTEM',
    category: 'MEDIA & COLLABORATION',
    title: 'SNAPSHARE\nPLATFORM',
    headline: 'Ultra-fast media sharing and collaborative proofing.',
    desc: 'High-speed cloud uploads, synchronized event photo galleries, client review workflows, and instant edge CDN media streaming.',
    capabilities: ['INSTANT UPLOAD', 'CLOUD SYNC', 'MEDIA STREAMING', 'CLIENT PROOFING'],
    techMeta: 'Edge CDN Delivery • Zero Loss Compression • Tokenized Share Links',
    assemblyNodes: [
      { label: 'EDGE CDN STREAM', icon: Activity, pos: 'top-4 left-4' },
      { label: 'ZERO-LOSS SYNC', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'CLIENT PROOFING', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'TOKEN SHARE LINK', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=90',
    link: '/products',
    accent: '#7C3AED'
  },
  {
    id: 'ecommerce',
    num: '06',
    type: 'PRODUCT SYSTEM',
    category: 'DIGITAL COMMERCE',
    title: 'COMMERCE\nENGINE',
    headline: 'High-concurrency storefronts engineered for scale.',
    desc: 'Custom headless online stores, dynamic checkout funnels, multi-currency payment gateways, and automated inventory sync.',
    capabilities: ['HEADLESS STORE', 'GATEWAY INTEGRATION', 'INVENTORY SYNC', 'DYNAMIC CHECKOUT'],
    techMeta: 'Sub-100ms TTFB • Multi-Vendor Routing • Automated GST/Tax',
    assemblyNodes: [
      { label: 'SUB-100MS TTFB', icon: Activity, pos: 'top-4 left-4' },
      { label: 'PAYMENT GATEWAY', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'DYNAMIC CHECKOUT', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'STOCK AUTO-LOCK', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1556742049-0a6756570679?auto=format&fit=crop&w=1600&q=90',
    link: '/services/ecommerce',
    accent: '#8B5CF6'
  },
  {
    id: 'custom-apps',
    num: '07',
    type: 'PRODUCT SYSTEM',
    category: 'APPLICATION ENGINEERING',
    title: 'CUSTOM APP\nENGINEERING',
    headline: 'Bespoke mobile and web architectures.',
    desc: 'Enterprise Progressive Web Apps, native iOS & Android applications, high-throughput backend APIs, and microservice cloud infrastructure.',
    capabilities: ['CROSS-PLATFORM', 'PROGRESSIVE WEB APPS', 'GRAPHQL & REST', 'OFFLINE-FIRST'],
    techMeta: 'TypeScript • React Native • Tailwind • Cloud Native Engine',
    assemblyNodes: [
      { label: 'REACT NATIVE / PWA', icon: Activity, pos: 'top-4 left-4' },
      { label: 'REST & GRAPHQL', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'OFFLINE-FIRST SYNC', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'MICROSERVICE CLOUD', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=90',
    link: '/services/software-development',
    accent: '#6D28D9'
  },

  // ─── SERVICES (08 - 12) ───
  {
    id: 'digital-marketing',
    num: '08',
    type: 'ENGINEERING SERVICE',
    category: 'PERFORMANCE & GROWTH',
    title: 'DIGITAL\nMARKETING',
    headline: 'Performance marketing built on verifiable data.',
    desc: 'Search engine visibility architectures, conversion funnel optimization, programmatic advertising, and real-time attribution analytics.',
    capabilities: ['SEO ARCHITECTURE', 'PERFORMANCE ADS', 'CONVERSION FUNNELS', 'ATTRIBUTION DATA'],
    techMeta: 'Data-Driven ROI • Dynamic Ad Remarketing • Live Analytics Dashboard',
    assemblyNodes: [
      { label: 'SEO ARCHITECTURE', icon: Activity, pos: 'top-4 left-4' },
      { label: 'CONVERSION FUNNELS', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'PROGRAMMATIC ADS', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'REAL-TIME ROI', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=90',
    link: '/services',
    accent: '#7C3AED'
  },
  {
    id: 'iot-solutions',
    num: '09',
    type: 'ENGINEERING SERVICE',
    category: 'CONNECTED HARDWARE',
    title: 'IOT SENSORS\n& HARDWARE',
    headline: 'Connecting physical operations with cloud intelligence.',
    desc: 'Sub-GHz sensor meshes, low-latency telemetry pipelines, MQTT cloud brokers, and continuous environmental telemetry monitoring.',
    capabilities: ['SENSOR MESH', 'MQTT BROKER', 'REAL-TIME TELEMETRY', 'EDGE COMPUTE'],
    techMeta: 'LoRa / Zigbee / Wi-Fi • 99.999% Packet Reliability • Low-Power Sleep',
    assemblyNodes: [
      { label: 'MQTT BROKER', icon: Activity, pos: 'top-4 left-4' },
      { label: 'SUB-GHZ MESH', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'EDGE COMPUTE', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'LIVE TELEMETRY', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90',
    link: '/services/industrial-automation',
    accent: '#8B5CF6'
  },
  {
    id: 'custom-erp-dev',
    num: '10',
    type: 'ENGINEERING SERVICE',
    category: 'ENTERPRISE PLATFORMS',
    title: 'CUSTOM ERP\nDEVELOPMENT',
    headline: 'Enterprise systems modeled around your exact logic.',
    desc: 'Tailored ERP platforms engineered from scratch to mirror your precise business rules, warehouse logistics, and multi-branch operations.',
    capabilities: ['WORKFLOW MAPPING', 'CUSTOM MODULES', 'LEGACY MIGRATION', 'SCADA HOOKS'],
    techMeta: 'Microservice Backends • Modular Architecture • PostgreSQL / Redis',
    assemblyNodes: [
      { label: 'WORKFLOW ENGINE', icon: Activity, pos: 'top-4 left-4' },
      { label: 'POSTGRES / REDIS', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'SCADA HOOKS', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'MODULAR RBAC', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=90',
    link: '/products/erp',
    accent: '#6D28D9'
  },
  {
    id: 'crm-solutions',
    num: '11',
    type: 'ENGINEERING SERVICE',
    category: 'CUSTOMER INTELLIGENCE',
    title: 'INTELLIGENT\nCRM SYSTEMS',
    headline: 'Unified customer relationships and pipeline automation.',
    desc: 'Manage customer engagements, sales pipelines, automated follow-ups, omnichannel support desks, and client relationship intelligence.',
    capabilities: ['PIPELINE AUTOMATION', 'COMMUNICATION DESK', 'CLIENT PORTAL', 'DEAL ANALYTICS'],
    techMeta: 'WhatsApp / Email Sync • SLA Tracking • Automated Event Triggers',
    assemblyNodes: [
      { label: 'LEAD PIPELINE AUTO', icon: Activity, pos: 'top-4 left-4' },
      { label: 'OMNICHANNEL DESK', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'WHATSAPP SYNC', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'DEAL SLA TRACKING', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=90',
    link: '/services',
    accent: '#7C3AED'
  },
  {
    id: 'business-automation',
    num: '12',
    type: 'ENGINEERING SERVICE',
    category: 'PROCESS & WORKFLOWS',
    title: 'PROCESS\nAUTOMATION',
    headline: 'Eliminating manual bottlenecks through automated workflows.',
    desc: 'Event-driven webhook orchestrations, automated document processing, legacy system bridges, and autonomous task engines.',
    capabilities: ['EVENT WEBHOOKS', 'DOCUMENT OCR', 'TASK SCHEDULERS', 'SYSTEM INTERLOCKS'],
    techMeta: 'Zero-Touch Processing • 24/7 Background Workers • Real-Time Audit Logs',
    assemblyNodes: [
      { label: 'EVENT WEBHOOKS', icon: Activity, pos: 'top-4 left-4' },
      { label: 'DOCUMENT OCR', icon: ShieldCheck, pos: 'top-14 left-4' },
      { label: 'TASK WORKER BUS', icon: Zap, pos: 'bottom-24 left-4' },
      { label: 'ZERO-TOUCH AUTO', icon: CheckCircle2, pos: 'bottom-24 right-4' }
    ],
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1600&q=90',
    link: '/services/industrial-automation',
    accent: '#8B5CF6'
  }
]

const TOTAL_SCENES = EDITORIAL_ITEMS.length

export default function EditorialProductsServices() {
  const containerRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0) // 0.0 to 1.0 continuously
  const [isMobile, setIsMobile] = useState(false)

  // 3D Tilt states for main visual
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHoveringImg, setIsHoveringImg] = useState(false)

  // Screen size check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Precise continuous scroll tracking
  useEffect(() => {
    if (isMobile) return
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const scrolled = -rect.top
      const scrollableDistance = rect.height - viewportHeight

      if (scrollableDistance <= 0) return

      const rawProgress = scrolled / scrollableDistance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))

      setScrollProgress(clampedProgress)

      const sceneIndex = Math.min(
        Math.floor(clampedProgress * TOTAL_SCENES),
        TOTAL_SCENES - 1
      )
      setActiveIdx(sceneIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  const activeItem = EDITORIAL_ITEMS[activeIdx] || EDITORIAL_ITEMS[0]

  // Calculate local scene progress (0 to 1 within the current active item)
  const localSceneProgress = useMemo(() => {
    const normalized = (scrollProgress * TOTAL_SCENES) - activeIdx
    return Math.max(0, Math.min(1, normalized))
  }, [scrollProgress, activeIdx])

  // Parallax calculations for the main image
  const parallaxScale = 1.0 + (localSceneProgress * 0.06) // 1.00 -> 1.06
  const parallaxTranslateY = (localSceneProgress - 0.5) * 16 // -8px to +8px
  const parallaxTranslateX = (localSceneProgress - 0.5) * 10 // -5px to +5px

  // Interactive 3D tilt handler
  const handleVisualMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotX = (y / (rect.height / 2)) * -5
    const rotY = (x / (rect.width / 2)) * 5
    setTilt({ x: rotX, y: rotY })
  }

  const handleVisualMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setIsHoveringImg(false)
  }

  // ─────────────────────────────────────────────────────────────
  // MOBILE / TABLET VERTICAL EDITORIAL VIEW (<1024px)
  // ─────────────────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section className="bg-white text-[#17131F] py-20 px-6 sm:px-10 border-t border-[#E9E2F5] select-none">
        
        {/* Editorial Section Intro Header */}
        <div className="max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DASA TECH PRODUCT SYSTEMS &amp; SERVICES</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-[#17131F] tracking-tight leading-[1.18] pb-1">
            Technology Built Around the Way{' '}
            <span className="text-[#6D28D9]">Your Business Operates.</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal">
            An editorial showcase of enterprise platforms and core engineering capabilities.
          </p>
        </div>

        {/* 12 Mobile Storytelling Sections */}
        <div className="space-y-24 max-w-4xl mx-auto">
          {EDITORIAL_ITEMS.map((item) => (
            <div key={item.id} className="space-y-8 pb-16 border-b border-[#E9E2F5] last:border-b-0">
              
              {/* Category */}
              <div className="flex items-center justify-between border-b border-[#E9E2F5] pb-3 text-xs font-mono">
                <span className="font-bold text-[#6D28D9] tracking-widest">{item.type}</span>
                <span className="text-[#64748B] uppercase tracking-wider">{item.category}</span>
              </div>

              {/* Title */}
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#17131F] tracking-tight leading-none whitespace-pre-line">
                {item.title}
              </h3>

              {/* Headline & Description */}
              <p className="font-display font-bold text-xl text-[#6D28D9] leading-snug">
                {item.headline}
              </p>
              <p className="text-[#475569] text-base leading-relaxed">
                {item.desc}
              </p>

              {/* Oversized Visual with Micro Assembly Badges */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E9E2F5] bg-[#F7F3FF]">
                <img
                  src={item.img}
                  alt={item.title.replace('\n', ' ')}
                  className="w-full h-72 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17131F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E9E2F5] flex items-center justify-between font-mono text-xs text-[#17131F]">
                  <span className="font-bold">{item.type}</span>
                  <span className="text-[#6D28D9] font-bold">{item.category}</span>
                </div>
              </div>

              {/* Capabilities */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-mono font-bold text-[#17131F] bg-[#F7F3FF] px-3.5 py-1.5 rounded-lg border border-[#DDD0FF]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Metadata & Link */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-[#64748B]">{item.techMeta}</span>
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#6D28D9] hover:text-[#24113F] transition-colors"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Final Conclusion Block */}
        <div className="mt-20 text-center space-y-6 max-w-2xl mx-auto py-16 px-6 rounded-3xl bg-gradient-to-b from-[#F7F3FF] to-white border border-[#E9E2F5] shadow-xl">
          <span className="text-xs font-mono font-bold text-[#6D28D9] tracking-[0.25em] uppercase">
            DASA TECH ENGINEERING
          </span>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#17131F] leading-tight">
            DIGITAL SOLUTIONS.<br />
            <span className="text-[#6D28D9]">BUILT FOR REAL BUSINESS.</span>
          </h3>
          <p className="text-[#475569] text-base leading-relaxed">
            Scalable, zero-downtime platforms engineered around how modern enterprises work and grow.
          </p>
          <div className="pt-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full bg-[#6D28D9] hover:bg-[#7C3AED] px-8 py-4 font-display font-bold text-sm text-white shadow-xl shadow-[#6D28D9]/30 transition-all duration-300"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </section>
    )
  }

  // ─────────────────────────────────────────────────────────────
  // DESKTOP FULL-SCREEN DYNAMIC EDITORIAL SPLIT-SCREEN UI
  // ─────────────────────────────────────────────────────────────
  return (
    <>
      <div
        ref={containerRef}
        className="relative select-none bg-white"
        style={{ height: `${TOTAL_SCENES * 115}vh` }}
      >
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-white flex flex-col justify-between border-t border-[#E9E2F5]">
          
          {/* Subtle Technical Dot Matrix & Soft Ambient Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(#6D28D9_0.75px,transparent_0.75px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none -z-0" />
          <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-[#EDE9FE]/50 via-[#F3E8FF]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#FAF5FF] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

          {/* ── TOP EDITORIAL HEADER BAR (Generous pt-24 to clear fixed navbar) ── */}
          <header className="w-full max-w-[1720px] mx-auto px-8 lg:px-16 pt-24 lg:pt-28 pb-3.5 flex items-center justify-between border-b border-[#E9E2F5]/80 shrink-0 z-20">
            
            {/* Left: Prominent Section Heading with Distinctive Display Font */}
            <div className="flex items-center gap-3">
              <h2 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-[#17131F] tracking-tight flex items-center gap-2">
                <span className="text-[#6D28D9]">Product Systems</span>
                <span className="text-[#94A3B8] font-normal">&amp;</span>
                <span>Services</span>
              </h2>
            </div>

            {/* Center: Live Category Badge with Smooth Morph Transition */}
            <div className="hidden md:flex items-center gap-3 font-mono text-xs">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeItem.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.3 }}
                  className="font-bold text-[#6D28D9] bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF] uppercase tracking-wider shadow-2xs"
                >
                  {activeItem.type} &bull; {activeItem.category}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Right: Interaction Cue */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
              <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#6D28D9] animate-bounce" />
            </div>

          </header>


          {/* ── MAIN EDITORIAL SPLIT-SCREEN STAGE ── */}
          <main className="flex-1 w-full max-w-[1720px] mx-auto px-8 lg:px-16 grid grid-cols-12 gap-8 lg:gap-14 items-center min-h-0 relative z-10 py-3.5">
            
            {/* ========================================================= */}
            {/* LEFT SIDE: EDITORIAL TYPOGRAPHY & METADATA               */}
            {/* ========================================================= */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center space-y-4 lg:space-y-5 pr-0 lg:pr-6 relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  className="space-y-4 lg:space-y-5"
                >
                  
                  {/* 1. Category Tag */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3"
                  >
                    <span className="font-mono font-bold text-xs tracking-[0.2em] text-[#6D28D9] bg-[#F7F3FF] px-3.5 py-1.5 rounded-full border border-[#DDD0FF] uppercase shadow-2xs">
                      {activeItem.type}
                    </span>
                    <span className="text-[11px] font-mono font-semibold tracking-wider text-[#64748B] uppercase">
                      {activeItem.category}
                    </span>
                  </motion.div>

                  {/* 2. Extremely Large Editorial Product Title with Mask/Reveal Transition */}
                  <div className="overflow-hidden py-1">
                    <motion.h1
                      initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
                      animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                      exit={{ y: '-100%', opacity: 0, filter: 'blur(6px)' }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="font-display font-black text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] text-[#17131F] tracking-tight leading-[0.98] whitespace-pre-line"
                    >
                      {activeItem.title}
                    </motion.h1>
                  </div>

                  {/* 3. Editorial Quote / Headline */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display font-bold text-lg sm:text-xl text-[#6D28D9] leading-snug max-w-xl"
                  >
                    {activeItem.headline}
                  </motion.p>

                  {/* 4. Short Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#475569] text-sm sm:text-base leading-relaxed max-w-xl font-normal"
                  >
                    {activeItem.desc}
                  </motion.p>

                  {/* 5. Staggered Uppercase Technical Capabilities */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-mono font-bold text-[#94A3B8] tracking-[0.2em] uppercase">
                      KEY CAPABILITIES
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeItem.capabilities.map((cap, cIdx) => (
                        <motion.div
                          key={`${activeItem.id}-${cap}`}
                          initial={{ opacity: 0, y: 12, scale: 0.94 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.94 }}
                          transition={{
                            duration: 0.35,
                            delay: 0.14 + (cIdx * 0.08),
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className="group/cap relative text-[11px] font-mono font-bold text-[#17131F] bg-white px-3.5 py-1.5 rounded-xl border border-[#E9E2F5] shadow-xs hover:border-[#6D28D9] hover:bg-[#F7F3FF] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                        >
                          <span>{cap}</span>
                          <div className="h-0.5 w-0 bg-[#6D28D9] transition-all duration-300 group-hover/cap:w-full mt-0.5 rounded-full" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 6. Technical Metadata & Direct Explore Link */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="pt-3 flex items-center justify-between border-t border-[#E9E2F5] text-xs font-mono"
                  >
                    <div className="flex items-center gap-2 text-[#64748B]">
                      <span className="w-2 h-2 rounded-full bg-[#6D28D9] animate-pulse" />
                      <span className="text-[11px]">{activeItem.techMeta}</span>
                    </div>

                    <Link
                      to={activeItem.link}
                      className="inline-flex items-center gap-2 font-display font-bold text-xs sm:text-sm text-[#6D28D9] hover:text-[#17131F] transition-colors group/link py-1"
                    >
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </motion.div>

                </motion.div>
              </AnimatePresence>

            </div>


            {/* ========================================================= */}
            {/* RIGHT SIDE: OVERSIZED EDITORIAL VISUAL + ASSEMBLY NODES   */}
            {/* ========================================================= */}
            <div
              className="col-span-12 lg:col-span-6 relative h-[380px] sm:h-[440px] lg:h-[480px] xl:h-[520px] w-full flex items-center justify-center"
              onMouseMove={handleVisualMouseMove}
              onMouseEnter={() => setIsHoveringImg(true)}
              onMouseLeave={handleVisualMouseLeave}
            >
              
              {/* Soft Glowing Back-Drop */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#6D28D9]/18 via-[#A855F7]/12 to-transparent rounded-[36px] blur-2xl pointer-events-none transition-opacity duration-500" style={{ opacity: isHoveringImg ? 1 : 0.7 }} />

              {/* Main Visual Container with Interactive 3D Tilt & Scroll Parallax */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, scale: 0.92, x: 45, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.08, x: -35, filter: 'blur(8px)' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${parallaxTranslateY}px) translateX(${parallaxTranslateX}px)`,
                    transition: isHoveringImg ? 'transform 120ms ease-out' : 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="relative w-full h-full rounded-[28px] overflow-visible group"
                >
                  
                  {/* Actual Cropped Image Shell */}
                  <div className="relative w-full h-full rounded-[28px] overflow-hidden border border-[#E9E2F5] bg-white shadow-2xl">
                    <motion.img
                      src={activeItem.img}
                      alt={activeItem.title.replace('\n', ' ')}
                      style={{
                        scale: parallaxScale
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlays for Contrast & Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17131F]/80 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/15 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Status Badge */}
                    <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#E9E2F5] shadow-lg flex items-center gap-2 font-mono text-[11px] text-[#17131F]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-bold font-display uppercase tracking-wider">{activeItem.type}</span>
                    </div>

                    {/* Bottom Editorial Tag Over Visual */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9E2F5] shadow-xl flex items-center justify-between transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="space-y-0.5">
                        <div className="text-[10px] font-mono text-[#6D28D9] font-bold uppercase tracking-widest">
                          {activeItem.category}
                        </div>
                        <div className="font-display font-black text-base sm:text-lg text-[#17131F]">
                          {activeItem.title.replace('\n', ' ')}
                        </div>
                      </div>

                      <Link
                        to={activeItem.link}
                        className="w-9 h-9 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* ── 5. PRODUCT ASSEMBLY EFFECT: Floating Ecosystem Micro-Chips ── */}
                  {activeItem.assemblyNodes?.map((node, nIdx) => {
                    const NodeIcon = node.icon || Activity
                    return (
                      <motion.div
                        key={`${activeItem.id}-node-${node.label}`}
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                          y: nIdx < 2 ? -25 : 25,
                          x: nIdx % 2 === 0 ? -25 : 25
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          x: 0
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.7,
                          y: nIdx < 2 ? -15 : 15,
                          x: nIdx % 2 === 0 ? -15 : 15
                        }}
                        transition={{
                          duration: 0.45,
                          delay: 0.18 + (nIdx * 0.08),
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className={`absolute ${node.pos} z-20 pointer-events-none hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DDD0FF] shadow-lg text-[10px] font-mono font-bold text-[#6D28D9]`}
                      >
                        <NodeIcon className="w-3 h-3 text-[#7C3AED]" />
                        <span>{node.label}</span>
                      </motion.div>
                    )
                  })}

                </motion.div>
              </AnimatePresence>

            </div>

          </main>


          {/* ── 7. MINIMAL VERTICAL SCROLL PROGRESS INDICATOR (RIGHT EDGE - NO NUMBERS) ── */}
          <aside className="absolute right-6 top-1/2 -translate-y-1/2 hidden 2xl:flex flex-col items-center gap-2.5 z-30 font-mono text-[11px]">
            {EDITORIAL_ITEMS.map((item, idx) => {
              const isActive = activeIdx === idx
              return (
                <div key={item.id} className="relative flex items-center justify-end">
                  <button
                    onClick={() => {
                      const container = containerRef.current
                      if (!container) return
                      const totalHeight = container.offsetHeight - window.innerHeight
                      const targetScroll = container.offsetTop + (idx / TOTAL_SCENES) * totalHeight
                      window.scrollTo({ top: targetScroll, behavior: 'smooth' })
                    }}
                    className="p-1 group cursor-pointer focus:outline-none"
                    aria-label={`Go to ${item.title}`}
                  >
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-2.5 h-2.5 bg-[#6D28D9] scale-125 ring-4 ring-[#6D28D9]/20 shadow-sm'
                          : 'w-1.5 h-1.5 bg-[#DDD0FF] group-hover:bg-[#6D28D9] group-hover:scale-110'
                      }`}
                    />
                  </button>
                </div>
              )
            })}
          </aside>


          {/* ── 8. BOTTOM PROGRESS LINE & METRIC FOOTER (NO NUMBERS, NO LOADING %) ── */}
          <footer className="w-full max-w-[1720px] mx-auto px-8 lg:px-16 py-3.5 flex items-center justify-between border-t border-[#E9E2F5]/80 shrink-0 z-20 font-mono text-xs text-[#64748B]">
            
            <div className="flex items-center gap-3">
              <span className="font-display font-bold text-[#17131F] text-sm">
                {activeItem.title.replace('\n', ' ')}
              </span>
              <span className="text-[#94A3B8]">&bull;</span>
              <span className="text-[#6D28D9] font-semibold text-xs tracking-wider uppercase">
                {activeItem.category}
              </span>
            </div>

            {/* Scroll-Linked Continuous Linear Progress Indicator */}
            <div className="w-48 sm:w-80 h-1.5 bg-[#E9E2F5] rounded-full overflow-hidden relative">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#6D28D9] via-[#8B5CF6] to-[#A855F7] rounded-full transition-all duration-150"
                style={{ width: `${Math.max(4, Math.round(scrollProgress * 100))}%` }}
              />
            </div>

            <div className="text-right text-[11px] text-[#94A3B8] tracking-widest uppercase">
              <span>EXPLORING SYSTEM</span>
            </div>
          </footer>

        </div>
      </div>

      {/* ── FINAL SECTION TRANSITION BLOCK (FOLLOWS SMOOTHLY AFTER 12 SCENES) ── */}
      <section className="relative bg-gradient-to-b from-white via-[#FAF8FF] to-white py-32 px-8 lg:px-16 border-t border-[#E9E2F5] z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DASA TECH PRODUCT SUITE &amp; ENGINEERING</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#17131F] tracking-tight leading-[1.16] pb-2">
            DIGITAL SOLUTIONS.<br />
            <span className="text-[#6D28D9]">BUILT FOR REAL BUSINESS.</span>
          </h2>

          <p className="text-[#475569] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            From intelligent healthcare ERPs and IoT hardware mesh to high-scale e-commerce and automated industrial workflows, we engineer technology around how modern companies work and win.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] hover:from-[#8B5CF6] hover:to-[#6D28D9] px-10 py-5 font-display font-bold text-base text-white shadow-xl shadow-[#6D28D9]/30 hover:shadow-2xl hover:shadow-[#6D28D9]/40 transition-all duration-300 group cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-[#F7F3FF] border border-[#DDD0FF] hover:border-[#6D28D9] px-8 py-5 font-display font-bold text-base text-[#17131F] hover:text-[#6D28D9] transition-all duration-300"
            >
              <span>Consult Our Architects</span>
            </Link>
          </div>

        </div>
      </section>

    </>
  )
}
