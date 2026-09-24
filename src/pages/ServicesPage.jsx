import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp, Users, Database, Radio, Zap, Globe, Server, Smartphone,
  ArrowRight, ArrowUpRight, X, CheckCircle2,
  Search, Layers, Code2, Settings, FlaskConical,
  Rocket, Headphones, Layout, ChevronRight, ChevronLeft, Check, Sparkles,
  Terminal, ShieldCheck, Activity, GitBranch, Cpu, FileText, Play, Pause
} from 'lucide-react'
import { Link, usePath } from '../components/Router'
import { PAGE_HERO_IMAGES } from '../constants/images.js'
import { BACKEND_ASSETS } from '../data/backendAssets.js'

// ─────────────────────────────────────────────────────────────
// SERVICES DATA — 7 services with clear, client-friendly descriptions
// ─────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: 'digital-marketing',
    icon: TrendingUp,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Digital Marketing',
    headline: 'Grow Your Brand. Reach the Right Audience. Drive Real Results.',
    desc: 'Turn online visibility into business growth with professional video making, poster designing, SEO, social media marketing, and targeted digital advertising.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
    tags: ['Video Making', 'Poster & Creatives', 'SEO Optimization', 'Social & Ads'],
    grid: 'col-span-12 lg:col-span-7',
    height: 'h-[340px] sm:h-[400px]',
    detail: {
      purpose: 'At DASA TECH, we help businesses build a powerful digital presence and turn online visibility into meaningful business growth through creative content, strategic marketing, and technology.',
      provides: [
        'Video Making: Promotional, corporate, product videos, social reels & AI-powered creative videos',
        'Poster & Creative Designing: Social media creatives, festival designs, product ads & branding materials',
        'SEO – Search Engine Optimization: Keyword research, on-page, technical, local SEO & ranking audits',
        'Social Media Marketing: Instagram, Facebook, LinkedIn, YouTube & Google Business Profile management',
        'Digital Advertising: Targeted Google Ads, Meta Ads, lead generation & remarketing campaigns',
        'Content Creation: Social media copy, website content, promotional copy, video scripts & ad descriptions'
      ],
      technologies: ['Video Production', 'Creative Poster Design', 'Google & Meta Ads', 'SEO Tools', 'Social Channels'],
      value: 'Reach the right audience, increase engagement, and generate consistent business opportunities.',
      cases: ['Brand growth & multi-platform social management', 'Targeted performance ad campaigns (Google & Meta)', 'Professional video production & corporate brand commercials']
    }
  },
  {
    id: 'backend-development',
    icon: Server,
    category: 'CLOUD & SERVER ENGINEERING',
    title: 'Backend Development',
    headline: 'Secure, fast, and reliable server infrastructure for your applications.',
    desc: 'Scalable database structures, secure server connections, fast API services, and cloud server setups that keep your software running smoothly at all times.',
    img: BACKEND_ASSETS.hero.card,
    tags: ['Fast Server APIs', 'Database Architecture', 'Secure Sessions', 'Cloud Systems'],
    grid: 'col-span-12 lg:col-span-5',
    height: 'h-[340px] sm:h-[400px]',
    detail: {
      purpose: 'Build robust, secure server backbones that power your web and mobile applications with fast load speeds and reliable data storage.',
      provides: [
        'Secure API connection gateways for web & mobile applications',
        'Relational database design & efficient data storage modeling',
        'Fast server caching & user session management',
        'Background job processing for heavy system tasks',
        'Secure user authentication & role-based access control'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker Cloud'],
      value: 'High system reliability, fast app performance, and a secure server framework ready to handle business growth.',
      cases: ['Payment processing & financial transaction engines', 'Multi-user business portal backends', 'Real-time data synchronization systems']
    }
  },
  {
    id: 'crm-solutions',
    icon: Users,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'CRM Solutions',
    headline: 'Unified customer relationship management & automated sales follow-up.',
    desc: 'Organize all customer leads, track sales pipelines, automate WhatsApp and email communications, and view complete customer history in one easy-to-use platform.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=90',
    tags: ['Lead Ingestion', 'WhatsApp Automation', 'Sales Pipelines', 'Customer View'],
    grid: 'col-span-12 lg:col-span-5',
    height: 'h-[340px] sm:h-[400px]',
    detail: {
      purpose: 'Centralize every customer interaction into a single intelligent platform that eliminates lost leads and helps your sales team close deals faster.',
      provides: [
        'Custom CRM platform design & sales pipeline setup',
        'Automatic lead collection from website forms, social ads & WhatsApp',
        'Automated WhatsApp price quote sequences & appointment reminders',
        'Complete customer activity history tracking all calls, notes & files',
        'Sales team performance tracking & revenue overview'
      ],
      technologies: ['Custom CRM', 'Node.js API', 'PostgreSQL', 'WhatsApp Integration', 'Email Messaging'],
      value: 'Faster customer response times, organized sales pipelines, and higher conversion rates from leads to paying clients.',
      cases: ['Real estate inquiry & site visit tracking', 'Business sales proposals & quotation follow-up', 'Educational admissions & student enrollment']
    }
  },
  {
    id: 'custom-erp',
    icon: Database,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Custom ERP Development',
    headline: 'Custom business management software connecting inventory, sales, and finances.',
    desc: 'All-in-one software that connects multi-branch inventory tracking, billing, invoice generation, financial reporting, and staff management.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
    tags: ['Multi-Branch Sync', 'Stock Management', 'Tax & Invoicing', 'POS Billing'],
    grid: 'col-span-12 lg:col-span-7',
    height: 'h-[340px] sm:h-[400px]',
    detail: {
      purpose: 'Replace disconnected spreadsheets and manual files with a single centralized system tailored to your exact operational workflow.',
      provides: [
        'Multi-branch inventory tracking & automatic batch expiry alerts',
        'Financial accounting, billing, and tax invoice generation',
        'Purchase order management & supplier approval tracking',
        'Fast POS retail cashier billing with receipt printing',
        'Executive dashboards for real-time business visibility'
      ],
      technologies: ['React Web App', 'Node.js Backend', 'PostgreSQL Database', 'Tax Integration'],
      value: 'Real-time stock visibility, accurate financial records, reduced manual paperwork, and smoother daily business operations.',
      cases: ['Multi-chain pharmacy management (DASA MedFlow)', 'School & campus management (DASA EduCore)', 'Factory inventory & manufacturing management (DASA FactorySync)']
    }
  },
  {
    id: 'iot-solutions',
    icon: Radio,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Industrial Workflow Automation',
    headline: 'Automated order handling and work execution with smart NFC systems.',
    desc: 'Connect factory operations to receive orders through smart NFC systems and automate production workflows from order handling to work execution.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90',
    tags: ['Order Handling', 'NFC Smart Tags', 'Workflow Tracking', 'Automated Execution'],
    grid: 'col-span-12 lg:col-span-7',
    height: 'h-[340px] sm:h-[400px]',
    detail: {
      purpose: 'Connect factory operations and shop-floor stations to automate production workflows from order handling to work execution.',
      provides: [
        'Order handling & automated shop-floor work execution systems',
        'Touchless NFC smart tag order identification & station tracking',
        'Real-time machine status monitoring & automated alerts',
        'Live factory production tracking dashboards',
        'Automated order status updates & instant notifications'
      ],
      technologies: ['NFC Smart Tags', 'Embedded Hardware', 'Node.js Server', 'Live Web Dashboards'],
      value: 'Faster order execution, elimination of paper job slips, and clear visibility into factory floor progress.',
      cases: ['Factory order handling & NFC work execution', 'Temperature & environmental condition logging', 'Smart manufacturing production tracking']
    }
  },
  {
    id: 'business-automation',
    icon: Zap,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Business Automation',
    headline: 'Automated workflows that eliminate repetitive task work and manual data entry.',
    desc: 'Automate repetitive tasks such as invoice processing, approval routing, customer notification dispatches, and data sync between different software systems.',
    img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=90',
    tags: ['Task Approvals', 'Document Scanning', 'System Sync', 'Automated Triggers'],
    grid: 'col-span-12 lg:col-span-5',
    height: 'h-[300px] sm:h-[360px]',
    detail: {
      purpose: 'Save staff time by automating routine office tasks, approval requests, and cross-system data updates.',
      provides: [
        'Multi-step management approval workflows & alert notifications',
        'Automatic document scanning & text data extraction',
        'Real-time data synchronization between CRM, ERP, and storage systems',
        'Automated WhatsApp booking confirmations & payment receipts',
        'Automated daily summary report generation for management'
      ],
      technologies: ['Automation Workers', 'Document Scanning', 'WhatsApp Messaging', 'System Webhooks'],
      value: 'Faster work completion, fewer manual entry errors, and lower operational overhead.',
      cases: ['Vendor invoice processing & management approvals', 'Customer onboarding & contract document generation', 'Automated shift reports & maintenance ticket creation']
    }
  },
  {
    id: 'web-mobile',
    icon: Globe,
    category: 'WEB & MOBILE ENGINEERING',
    title: 'Web & Mobile Applications',
    headline: 'Fast, modern web applications and mobile apps for iOS and Android.',
    desc: 'Custom web applications, responsive customer portals, and mobile apps built for smooth performance, high security, and easy navigation.',
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=90',
    tags: ['Responsive Web Apps', 'iOS & Android Apps', 'Admin Dashboards', 'Hardware Access'],
    grid: 'col-span-12 lg:col-span-12',
    height: 'h-[300px] sm:h-[360px]',
    detail: {
      purpose: 'Create intuitive web and mobile applications that provide great user experiences for your customers and staff.',
      provides: [
        'Custom responsive web applications designed for all screen sizes',
        'Cross-platform iOS and Android mobile applications',
        'Offline capability for work in low-connectivity environments',
        'Secure admin dashboards for managing users and business data',
        'Hardware features: camera scanning, GPS tracking, and notifications'
      ],
      technologies: ['React Web', 'Flutter', 'React Native', 'Tailwind CSS', 'Mobile APIs'],
      value: 'Fast page loading, smooth mobile experience across all devices, and scalable software built to support your growing user base.',
      cases: ['Customer self-service portals & online billing', 'Field inspection & handheld scanner apps', 'B2B ordering & business marketplace portals']
    }
  }
]

// ─────────────────────────────────────────────────────────────
// HOW WE WORK — 8 Process Phases (clean, client-oriented, rich engineering depth)
// ─────────────────────────────────────────────────────────────
const PROCESS_PHASES = [
  {
    step: '01',
    phase: 'DISCOVER',
    title: 'Discovery & Requirements',
    tagline: 'Stakeholder Alignment & Technical PRD',
    desc: 'Deep discovery sessions to map operational goals, user workflows, compliance needs, and project milestones before writing a single line of code.',
    deliverable: 'Technical PRD & Scope Matrix',
    metric: '100% Scope Feasibility',
    milestones: [
      'Stakeholder discovery interviews & operational workflow mapping',
      'User personas, end-to-end journey maps & edge cases',
      'Compliance verification (GDPR/HIPAA) & risk mitigation strategy'
    ],
    previewType: 'prd',
    stage: '01',
    icon: Search,
    color: '#7C3AED',
    lightBg: '#F5F3FF',
    badgeBorder: '#DDD6FE'
  },
  {
    step: '02',
    phase: 'ARCHITECT',
    title: 'Architecture & Tech Stack',
    tagline: 'Scalable PostgreSQL & Cloud Topology',
    desc: 'Designing scalable PostgreSQL/NoSQL schemas, microservice boundaries, security RBAC layers, and selecting high-concurrency frameworks.',
    deliverable: 'Database ERD & Architecture Blueprint',
    metric: 'Sub-millisecond Query Indexing',
    milestones: [
      'Normalized PostgreSQL schemas, indexing strategy & ACID isolation',
      'Stateless microservice boundaries & high-throughput API contracts',
      'Multi-zone cloud topology eliminating single-point-of-failures'
    ],
    previewType: 'architecture',
    stage: '02',
    icon: Layout,
    color: '#2563EB',
    lightBg: '#EFF6FF',
    badgeBorder: '#BFDBFE'
  },
  {
    step: '03',
    phase: 'DESIGN',
    title: 'Interactive UI/UX Prototyping',
    tagline: 'Atomic Design Tokens & 60fps Clickable Prototypes',
    desc: 'Crafting responsive, human-centered interfaces in Figma with atomic design tokens, fluid micro-animations, and high-fidelity clickable mockups.',
    deliverable: 'Interactive Figma 60fps Prototype',
    metric: '60fps Micro-Animations',
    milestones: [
      'Atomic component design system with dark/light design tokens',
      'High-fidelity responsive layouts across Mobile, Tablet & Desktop',
      'Full clickable user flow prototype for client testing & sign-off'
    ],
    previewType: 'design',
    stage: '03',
    icon: Layers,
    color: '#0D9488',
    lightBg: '#F0FDFA',
    badgeBorder: '#99F6E4'
  },
  {
    step: '04',
    phase: 'DEVELOP',
    title: 'Agile Full-Stack Engineering',
    tagline: '2-Week Sprints & Live Working Demos',
    desc: 'Modular, clean software engineering executed in 2-week agile sprints with bi-weekly client demo sessions and transparent progress tracking.',
    deliverable: 'Production-Grade Sprint Releases',
    metric: '100% Strict TypeScript',
    milestones: [
      'Clean modular architecture with 100% strict TypeScript types',
      'Test-driven development with unit and integration coverage',
      'Bi-weekly live staging demos with direct client feedback loops'
    ],
    previewType: 'code',
    stage: '04',
    icon: Code2,
    color: '#059669',
    lightBg: '#ECFDF5',
    badgeBorder: '#A7F3D0'
  },
  {
    step: '05',
    phase: 'INTEGRATE',
    title: 'APIs, Gateways & Ecosystem Sync',
    tagline: 'Payment, ERP, Hardware Telemetry & Webhooks',
    desc: 'Connecting payment gateways, ERP systems, IoT hardware telemetry, third-party webhooks, and database pipelines with atomic ACID transactions.',
    deliverable: 'Encrypted API Gateways & Connectors',
    metric: 'Sub-20ms Webhook Latency',
    milestones: [
      'Stripe & Razorpay payment gateway orchestration with webhooks',
      'Bidirectional ERP & CRM data synchronizers with conflict resolution',
      'Industrial IoT telemetry ingestion via MQTT and WebSockets'
    ],
    previewType: 'integration',
    stage: '05',
    icon: Settings,
    color: '#D97706',
    lightBg: '#FFFBEB',
    badgeBorder: '#FDE68A'
  },
  {
    step: '06',
    phase: 'TEST',
    title: 'Automated QA & Security Audits',
    tagline: 'Cypress Regression Suites & OWASP Verification',
    desc: 'Rigorous automated Cypress regression suites, stress tests, OWASP penetration checks, and cross-browser reliability verification.',
    deliverable: 'Zero-Defect Audit & Security Certificate',
    metric: 'Zero Critical Vulnerabilities',
    milestones: [
      'Automated end-to-end Cypress & Playwright regression suites',
      'Concurrency stress testing simulating 10,000+ simultaneous users',
      'OWASP Top 10 security audits, SQLi and XSS vulnerability defense'
    ],
    previewType: 'qa',
    stage: '06',
    icon: FlaskConical,
    color: '#EA580C',
    lightBg: '#FFF7ED',
    badgeBorder: '#FED7AA'
  },
  {
    step: '07',
    phase: 'DEPLOY',
    title: 'Zero-Downtime Cloud Launch',
    tagline: 'Automated CI/CD Blue-Green Infrastructure',
    desc: 'Automated CI/CD container pipelines (Docker, AWS, Vercel), SSL/TLS security hardening, automated backups, and real-time health telemetry.',
    deliverable: 'Live Production URL & Cloud Setup',
    metric: 'Zero-Downtime Blue-Green Cutover',
    milestones: [
      'Containerized Docker CI/CD deployment with automated testing gate',
      'Cloudflare Edge CDN caching & TLS/SSL A+ encryption grade',
      'Automated instant rollback safety rails and health probes'
    ],
    previewType: 'deploy',
    stage: '07',
    icon: Rocket,
    color: '#E11D48',
    lightBg: '#FFF1F2',
    badgeBorder: '#FECDD3'
  },
  {
    step: '08',
    phase: 'SUPPORT',
    title: '24/7 Monitoring & SLA Evolution',
    tagline: 'Continuous APM Telemetry & Instant Response',
    desc: 'Continuous APM performance tracking, database optimization, proactive security patches, and dedicated engineering SLA response.',
    deliverable: '24/7 SLA Dashboard & Maintenance',
    metric: '99.99% Production Uptime',
    milestones: [
      'Real-time APM telemetry with automated threshold error alerts',
      'Scheduled encrypted database backups every 6 hours',
      'Dedicated Slack/WhatsApp engineering channel with guaranteed response'
    ],
    previewType: 'support',
    stage: '08',
    icon: Headphones,
    color: '#4F46E5',
    lightBg: '#EEF2FF',
    badgeBorder: '#C7D2FE'
  }
]

// ─────────────────────────────────────────────────────────────
// SERVICE CAPABILITIES — 8 discipline items
// ─────────────────────────────────────────────────────────────
const CAPABILITIES = [
  {
    num: '01',
    title: 'Requirement Analysis',
    desc: 'Deep discovery sessions to map your operational needs, workflows, compliance goals, and project objectives before development begins.'
  },
  {
    num: '02',
    title: 'UI/UX & Solution Planning',
    desc: 'Human-centered design that turns complex business workflows into simple, intuitive digital experiences — from wireframes to complete visual designs.'
  },
  {
    num: '03',
    title: 'Custom Software Development',
    desc: 'High-performance web frontends, secure backend servers, AI capabilities, and smart hardware integration — engineered to high standards.'
  },
  {
    num: '04',
    title: 'System Integration & APIs',
    desc: 'Seamless API gateways, payment channel integrations, ERP data connectors, and legacy system bridges with reliable data handling.'
  },
  {
    num: '05',
    title: 'Intelligent Automation',
    desc: 'Automated task workflows, document data extraction, and rule-based software triggers that eliminate repetitive manual operations.'
  },
  {
    num: '06',
    title: 'Testing & Performance',
    desc: 'Comprehensive testing procedures, system load validation, security checks, and continuous performance tuning across all environments.'
  },
  {
    num: '07',
    title: 'Cloud Deployment & DevOps',
    desc: 'Cloud server setup, zero-downtime application deployment, security certificate provisioning, and automated system updates.'
  },
  {
    num: '08',
    title: 'Maintenance & Ongoing Support',
    desc: 'Proactive system monitoring, software update distribution, database optimization, and continuous feature enhancements.'
  }
]

// ─────────────────────────────────────────────────────────────
// MAIN PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  const { navigate } = usePath()
  const [selectedService, setSelectedService] = useState(null)

  const handleSelectService = (service) => {
    navigate(`/services/${service.id}`)
  }

  return (
    <div className="min-h-screen bg-white text-[#17131F] overflow-x-hidden">

      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <ServiceHero />

      {/* ── 2. WHAT WE PROVIDE ─────────────────────────────── */}
      <WhatWeProvide
        selectedService={selectedService}
        onSelectService={handleSelectService}
      />

      {/* ── 3. SERVICE DETAIL PANEL (inline, below grid) ───── */}
      <div id="svc-detail-panel">
        <AnimatePresence mode="wait">
          {selectedService && (
            <ServiceDetailPanel
              key={selectedService.id}
              service={selectedService}
              onClose={() => setSelectedService(null)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* ── 4. OUR SERVICE CAPABILITIES ────────────────────── */}
      <OurCapabilities />

      {/* ── 5. HOW WE WORK ─────────────────────────────────── */}
      <HowWeWork />

      {/* ── 6. CTA ─────────────────────────────────────────── */}
      <ServiceCTA />

    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// 1. SERVICE HERO
// ─────────────────────────────────────────────────────────────
function ServiceHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 14,
      y: (e.clientY / window.innerHeight - 0.5) * 14
    })
  }

  const titleLines = [
    { text: 'Technology That Turns', accent: null },
    { text: 'Ideas Into Impact.', accentWord: 'Ideas' }
  ]

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-end pb-16 sm:pb-24 overflow-hidden bg-[#0A0D18] select-none"
    >
      {/* Parallax Background */}
      <motion.div
        animate={{ x: mousePos.x, y: mousePos.y, scale: 1.08 }}
        transition={{ type: 'spring', stiffness: 38, damping: 18 }}
        className="absolute inset-0 z-0"
      >
        <img
          src={PAGE_HERO_IMAGES.services.path}
          alt="DASA TECH Engineering Services"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D18] via-[#0A0D18]/58 to-[#0A0D18]/12 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D18]/70 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Decorative dot grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 dot-pattern" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full">

        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-[#A855F7]" />
          <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#C084FC] uppercase">
            DASA TECH · ENGINEERING SERVICES
          </span>
        </motion.div>

        {/* Title — line-by-line reveal via overflow clip */}
        <div className="mb-9 space-y-1">
          {titleLines.map((line, lineIdx) => (
            <div key={lineIdx} className="overflow-hidden py-1 sm:py-2">
              <motion.div
                initial={{ y: '120%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.88,
                  delay: 0.38 + lineIdx * 0.14,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="font-display font-black text-[44px] sm:text-[68px] lg:text-[84px] xl:text-[96px] text-white leading-[1.12] sm:leading-[1.1] tracking-tight pb-2 sm:pb-3"
              >
                {line.accentWord
                  ? line.text.split(' ').map((word, wi) => (
                      <span key={wi}>
                        {wi > 0 && ' '}
                        {word === line.accentWord ? (
                          <span className="text-color-shift">
                            {word}
                          </span>
                        ) : word}
                      </span>
                    ))
                  : line.text}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.82, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10"
        >
          <p className="text-slate-300 text-sm sm:text-base lg:text-[17px] max-w-lg leading-relaxed font-normal">
            End-to-end engineering services that transform complex business challenges into scalable, intelligent digital solutions.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#svc-grid"
              className="px-6 py-3.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-sm transition-all flex items-center gap-2 group shadow-2xl shadow-[#6D28D9]/40"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full border border-white/25 hover:bg-white/10 text-white font-display font-bold text-sm transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-white/45 to-transparent origin-top"
        />
        <span className="text-[9px] font-mono text-white/35 uppercase tracking-[0.2em]">scroll</span>
      </motion.div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// 2. WHAT WE PROVIDE
// ─────────────────────────────────────────────────────────────
function WhatWeProvide({ selectedService, onSelectService }) {
  return (
    <section id="svc-grid" className="py-20 lg:py-28 bg-white border-t border-[#E9E2F5] select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[11px] font-mono font-bold tracking-[0.28em] text-[#6D28D9] uppercase mb-3 block">
              ENGINEERING SERVICES
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17131F] tracking-tight leading-[1.18] pb-1 sm:pb-2">
              What We <span className="text-color-shift">Provide</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#64748B] text-sm sm:text-base max-w-sm leading-relaxed lg:text-right"
          >
            Click any service to explore its full scope, capabilities, and business value.
          </motion.p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceTile
              key={service.id}
              service={service}
              idx={idx}
              isSelected={selectedService?.id === service.id}
              onSelect={onSelectService}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// SERVICE TILE — image tile with hover panel + click to detail
// ─────────────────────────────────────────────────────────────
function ServiceTile({ service, idx, isSelected, onSelect }) {
  const [hovered, setHovered] = useState(false)
  const IconComp = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.62, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={service.grid}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => onSelect(service)}
        className={`relative w-full ${service.height} rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 ${
          isSelected
            ? 'ring-2 ring-[#6D28D9] ring-offset-2 shadow-2xl shadow-[#6D28D9]/30'
            : 'ring-1 ring-[#E9E2F5] hover:ring-[#C4B5FD] hover:shadow-xl hover:shadow-[#6D28D9]/10'
        }`}
      >

        {/* Background Image */}
        <img
          src={service.img}
          alt={service.title}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            hovered ? 'scale-[1.05] opacity-80' : 'scale-100 opacity-90'
          }`}
        />

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/92 via-[#0F0B18]/45 to-[#0F0B18]/8 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#6D28D9]/14 via-transparent to-transparent pointer-events-none" />

        {/* Top category chip */}
        <div className={`absolute top-4 left-4 z-10 transition-all duration-300 ${
          hovered ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
        }`}>
          <span className="text-[10px] font-mono font-bold text-white bg-[#0F0B18]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 uppercase tracking-wider">
            {service.category}
          </span>
        </div>

        {/* Selected indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4 z-30">
            <div className="w-8 h-8 rounded-full bg-[#6D28D9] flex items-center justify-center shadow-lg shadow-[#6D28D9]/40">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          </div>
        )}

        {/* Default bottom info bar */}
        <div className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-500 ${
          hovered ? 'opacity-0 translate-y-2 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}>
          <div className="flex items-end justify-between gap-3 p-4 rounded-2xl bg-[#0F0B18]/82 backdrop-blur-md border border-white/12 shadow-xl">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block mb-0.5">
                {service.category}
              </span>
              <h3 className="font-display font-black text-xl text-white leading-tight">
                {service.title}
              </h3>
            </div>
            <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-colors ${
              isSelected ? 'bg-[#A855F7]' : 'bg-[#6D28D9]'
            }`}>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Hover content panel — slides up from bottom */}
        <div className={`absolute inset-x-0 bottom-0 z-20 transition-all duration-500 ease-out ${
          hovered ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="p-5 sm:p-6 rounded-t-[20px] bg-white border-t-2 border-[#6D28D9] shadow-2xl space-y-3.5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[9px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block mb-0.5">
                  {service.category}
                </span>
                <h3 className="font-display font-black text-xl text-[#0F172A] leading-tight">
                  {service.title}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#F7F3FF] text-[#6D28D9] flex items-center justify-center shrink-0 border border-[#DDD0FF]">
                <IconComp className="w-4 h-4" />
              </div>
            </div>

            <p className="text-xs font-bold text-[#6D28D9] leading-snug">{service.headline}</p>

            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-mono font-bold text-[#5B21B6] bg-[#F7F3FF] px-2 py-0.5 rounded-md border border-[#C4B5FD]">
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-0.5">
              <button
                onClick={(e) => { e.stopPropagation(); onSelect(service) }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-xs transition-colors shadow-md"
              >
                <span>{isSelected ? 'Close Details' : 'View Full Details'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// 3. SERVICE DETAIL PANEL
// ─────────────────────────────────────────────────────────────
function ServiceDetailPanel({ service, onClose }) {
  const IconComp = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div className="border-t-2 border-[#6D28D9] bg-[#FAF8FF] select-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-16">

          {/* Panel header */}
          <div className="flex items-start justify-between mb-10 lg:mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#6D28D9] text-white flex items-center justify-center shadow-lg shadow-[#6D28D9]/30 shrink-0">
                <IconComp className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase tracking-[0.25em] block">
                  {service.category}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#0F172A] leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] flex items-center justify-center transition-colors shrink-0 mt-1"
              aria-label="Close service details"
            >
              <X className="w-4 h-4 text-[#64748B]" />
            </button>
          </div>

          {/* Purpose statement */}
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-medium max-w-3xl mb-12 pl-5 border-l-4 border-[#6D28D9]/50">
            {service.detail.purpose}
          </p>

          {/* Two-column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left: What We Provide */}
            <div>
              <h4 className="font-mono font-bold text-xs text-[#6D28D9] uppercase tracking-[0.22em] mb-5">
                WHAT WE PROVIDE
              </h4>
              <ul className="space-y-3.5">
                {service.detail.provides.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#6D28D9] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#334155] font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Technologies + Value + Cases */}
            <div className="space-y-8">

              {/* Technologies */}
              <div>
                <h4 className="font-mono font-bold text-xs text-[#6D28D9] uppercase tracking-[0.22em] mb-4">
                  TECHNOLOGIES & TOOLS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.detail.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono font-bold text-[#5B21B6] bg-white px-3 py-1.5 rounded-lg border border-[#DDD0FF]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Value */}
              <div>
                <h4 className="font-mono font-bold text-xs text-[#6D28D9] uppercase tracking-[0.22em] mb-3">
                  BUSINESS VALUE
                </h4>
                <p className="text-sm text-[#334155] leading-relaxed font-medium bg-white rounded-xl p-4 border border-[#E9E2F5]">
                  {service.detail.value}
                </p>
              </div>

              {/* Typical Use Cases */}
              <div>
                <h4 className="font-mono font-bold text-xs text-[#6D28D9] uppercase tracking-[0.22em] mb-4">
                  TYPICAL USE CASES
                </h4>
                <ul className="space-y-2.5">
                  {service.detail.cases.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#475569] font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A855F7] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// 4. OUR SERVICE CAPABILITIES — interactive two-column layout
// ─────────────────────────────────────────────────────────────
function OurCapabilities() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section className="py-24 lg:py-32 bg-white border-t border-[#E9E2F5] select-none overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-3"
          >
            <span className="text-[11px] font-mono font-bold tracking-[0.28em] text-[#6D28D9] uppercase block">
              WHAT WE DELIVER
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-[#17131F] tracking-tight leading-[1.18] pb-1 sm:pb-2">
              Our Service<br /><span className="text-color-shift">Capabilities</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-[#64748B] text-sm sm:text-base leading-relaxed self-end"
          >
            Every engagement we undertake is backed by a comprehensive set of engineering disciplines — from initial discovery to long-term product support.
          </motion.p>
        </div>

        {/* Two-column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* Left: Clickable capabilities list */}
          <div className="space-y-1">
            {CAPABILITIES.map((cap, idx) => (
              <motion.div
                key={cap.num}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.44, delay: idx * 0.045, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`flex items-center gap-4 py-4 px-5 rounded-xl cursor-pointer transition-all duration-200 group ${
                  activeIdx === idx
                    ? 'bg-[#F7F3FF] border border-[#DDD0FF]'
                    : 'border border-transparent hover:bg-[#FAF8FF] hover:border-[#F0EBFF]'
                }`}
              >
                {/* Left accent bar */}
                <div className={`w-0.5 h-6 rounded-full transition-all duration-300 shrink-0 ${
                  activeIdx === idx ? 'bg-[#6D28D9]' : 'bg-[#E9E2F5] group-hover:bg-[#DDD0FF]'
                }`} />

                {/* Number */}
                <span className={`font-mono text-xs font-bold w-7 shrink-0 transition-colors duration-200 ${
                  activeIdx === idx ? 'text-[#6D28D9]' : 'text-[#CBD5E1] group-hover:text-[#A855F7]'
                }`}>
                  {cap.num}
                </span>

                {/* Title */}
                <h3 className={`font-display font-bold text-sm sm:text-base flex-1 transition-colors duration-200 ${
                  activeIdx === idx ? 'text-[#6D28D9] font-black' : 'text-[#334155] group-hover:text-[#17131F]'
                }`}>
                  {cap.title}
                </h3>

                {/* Chevron */}
                <ChevronRight className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                  activeIdx === idx ? 'text-[#6D28D9] translate-x-0.5' : 'text-[#E9E2F5] group-hover:text-[#C4B5FD]'
                }`} />
              </motion.div>
            ))}
          </div>

          {/* Right: Sticky detail panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 14, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[28px] bg-[#FAF8FF] border border-[#E9E2F5] p-8 lg:p-10 space-y-5"
              >
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] uppercase tracking-[0.25em] block">
                  CAPABILITY · {CAPABILITIES[activeIdx].num}
                </span>
                <h3 className="font-display font-black text-2xl lg:text-3xl text-[#0F172A] leading-tight">
                  {CAPABILITIES[activeIdx].title}
                </h3>
                <p className="text-[#475569] text-sm sm:text-[15px] leading-relaxed">
                  {CAPABILITIES[activeIdx].desc}
                </p>

                {/* Progress indicators */}
                <div className="pt-4 border-t border-[#E9E2F5] flex items-center gap-3">
                  <div className="flex gap-1">
                    {CAPABILITIES.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === activeIdx ? 'w-6 bg-[#6D28D9]' : 'w-1.5 bg-[#DDD0FF]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8]">{activeIdx + 1} / 8</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// 5. HOW WE WORK — Interactive Engineering Command Center & Roadmap
// ─────────────────────────────────────────────────────────────
function HowWeWork() {
  const [activeStepIdx, setActiveStepIdx] = useState(0)
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FAF8FF] via-[#F8F6FF] to-[#FAF8FF] border-t border-[#E9E2F5] select-none relative overflow-hidden">

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-32 w-[540px] h-[540px] bg-gradient-to-tr from-[#DDD6FE]/35 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[540px] h-[540px] bg-gradient-to-bl from-[#EDE9FE]/40 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <span className="text-[11px] font-mono font-bold tracking-[0.28em] text-[#6D28D9] uppercase block">
              OUR PROCESS
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17131F] tracking-tight leading-[1.18] pb-1 sm:pb-2">
              How We <span className="text-color-shift">Work</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#64748B] text-sm sm:text-base max-w-sm leading-relaxed lg:text-right"
          >
            A structured 8-phase engineering framework — from initial discovery to continuous operational support.
          </motion.p>
        </div>

        {/* Navigation Above: Connected Milestone Stepper Track (01 to 08) */}
        <div className="bg-white/90 rounded-2xl p-5 border border-[#E9E2F5] shadow-xs backdrop-blur-sm overflow-x-auto scrollbar-none">
          <div className="min-w-[760px] flex items-center justify-between relative">
            {/* Horizontal Track Line */}
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[3px] bg-[#E2E8F0] z-0 rounded-full" />
            <div
              className="absolute left-6 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#7C3AED] via-[#2563EB] to-[#0D9488] z-0 rounded-full transition-all duration-500"
              style={{
                width: `${(activeStepIdx / (PROCESS_PHASES.length - 1)) * 95}%`
              }}
            />

            {PROCESS_PHASES.map((p, idx) => {
              const isActive = idx === activeStepIdx
              const isPast = idx < activeStepIdx
              const PhaseIcon = p.icon

              return (
                <button
                  key={p.step}
                  onClick={() => setActiveStepIdx(idx)}
                  className="relative z-10 flex flex-col items-center gap-2 group cursor-pointer focus:outline-hidden"
                >
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 font-mono font-bold text-xs shadow-xs ${
                      isActive
                        ? 'scale-115 ring-4 text-white shadow-md'
                        : isPast
                        ? 'bg-white text-[#6D28D9] border-2 border-[#DDD6FE]'
                        : 'bg-white text-[#64748B] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                    }`}
                    style={{
                      backgroundColor: isActive ? p.color : '#FFFFFF',
                      ringColor: isActive ? `${p.color}35` : 'transparent',
                      color: isActive ? '#FFFFFF' : isPast ? p.color : '#64748B',
                      borderColor: isActive ? p.color : isPast ? p.badgeBorder : undefined
                    }}
                  >
                    <PhaseIcon className="w-4 h-4" />
                  </div>
                  <div className="text-center">
                    <span className="block font-mono text-[9px] font-bold text-[#94A3B8]">
                      {p.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider transition-colors ${
                        isActive ? 'text-[#17131F]' : 'text-[#64748B] group-hover:text-[#17131F]'
                      }`}
                      style={{ color: isActive ? p.color : undefined }}
                    >
                      {p.phase}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation Below: 8-Phase Interactive Horizontal Cards Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {PROCESS_PHASES.map((p, idx) => {
            const isSelected = idx === activeStepIdx
            const StepIcon = p.icon

            return (
              <button
                key={p.step}
                onClick={() => setActiveStepIdx(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between h-[155px] relative overflow-hidden ${
                  isSelected
                    ? 'bg-white shadow-lg border-2 -translate-y-1'
                    : 'bg-white/80 hover:bg-white border border-[#E9E2F5] hover:border-[#DDD6FE] shadow-xs'
                }`}
                style={{
                  borderColor: isSelected ? p.color : undefined
                }}
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs transition-colors"
                    style={{
                      backgroundColor: isSelected ? p.color : p.lightBg,
                      color: isSelected ? '#FFFFFF' : p.color
                    }}
                  >
                    <StepIcon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#94A3B8]">
                    {p.step}
                  </span>
                </div>

                {/* Title & Phase */}
                <div className="space-y-1">
                  <span
                    className="text-[9px] font-mono font-bold uppercase tracking-wider block"
                    style={{ color: p.color }}
                  >
                    {p.phase}
                  </span>
                  <h4 className="text-xs font-bold text-[#0F172A] leading-tight line-clamp-2">
                    {p.title}
                  </h4>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                    style={{ backgroundColor: p.color }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Enterprise Delivery Assurance Strip */}
        <div className="rounded-3xl bg-white/95 border border-[#E9E2F5] p-6 sm:p-8 shadow-sm backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E9E2F5]/80">
            {[
              {
                title: '100% IP & Code Ownership',
                desc: 'Full Git repository, cloud credentials & intellectual property transfer upon project sign-off.'
              },
              {
                title: 'Bi-Weekly Demo Cycles',
                desc: 'Clickable live staging previews every 14 days with direct feedback integration before proceeding.'
              },
              {
                title: 'Zero-Downtime Guarantee',
                desc: 'Containerized CI/CD automated blue-green rollouts ensuring uninterrupted live service uptime.'
              },
              {
                title: '24/7 SLA Engineering',
                desc: 'Proactive APM error tracking, database maintenance, and dedicated urgent response windows.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`space-y-1.5 ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0" />
                  <h4 className="text-sm font-bold text-[#0F172A]">{item.title}</h4>
                </div>
                <p className="text-xs text-[#64748B] leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// 6. SERVICE CTA
// ─────────────────────────────────────────────────────────────
function ServiceCTA() {
  return (
    <section className="py-24 lg:py-36 bg-[#0F0B18] text-white relative overflow-hidden select-none border-t border-[#A855F7]/20">

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.25)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6D28D9]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-60 h-60 bg-[#A855F7]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 text-center relative z-10 space-y-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 max-w-3xl mx-auto"
        >
          <span className="text-[11px] font-mono font-bold text-[#C084FC] uppercase tracking-[0.28em] block">
            START YOUR PROJECT
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight leading-[1.18] pb-1 sm:pb-2">
            Have a problem worth solving?
            <br />
            <span className="text-color-shift">
              Let's build it right.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed">
            Whether you need a custom ERP, factory workflow automation, business automation, or a mobile app — DASA TECH delivers the complete solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-sm shadow-2xl shadow-[#6D28D9]/50 transition-all flex items-center gap-2.5 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
          <Link
            to="/products"
            className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/18 text-white border border-white/25 font-display font-bold text-sm transition-all backdrop-blur-sm"
          >
            Explore Our Products
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
