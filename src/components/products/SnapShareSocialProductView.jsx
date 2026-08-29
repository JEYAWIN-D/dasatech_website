import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Camera, Sparkles, QrCode, Users, FileText, Calendar, ShieldCheck,
  Layers, Cpu, Database, HardDrive, Lock, CheckCircle2, ArrowRight,
  ArrowLeft, Search, UploadCloud, Share2, Key, FolderLock, Grid,
  Clock, Briefcase, Building2, Eye, Zap, Smartphone,
  FileCheck, UserCheck, Check, ChevronRight, Activity, Server, Layers3,
  Terminal, Network, Sliders, Workflow, LayoutGrid, CheckSquare, Image as ImageIcon,
  DollarSign, BarChart3, Radio, HelpCircle, Scan, AlertTriangle, AlertCircle,
  Truck, Box, Play, RefreshCw, Star, Maximize2, Shield
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'
import image1 from '../../assets/snapshare/img1.png'
import image2 from '../../assets/snapshare/img2.jpeg'
import image3 from '../../assets/snapshare/img3.jpeg'
import image4 from '../../assets/snapshare/img4.jpeg'
import image5 from '../../assets/snapshare/img5.jpeg'
import image6 from '../../assets/snapshare/img6.jpeg'
import image7 from '../../assets/snapshare/img7.jpeg'
import image8 from '../../assets/snapshare/img8.jpeg'
import image9 from '../../assets/snapshare/img9.jpeg'
import image10 from '../../assets/snapshare/img10.jpeg'

// ─────────────────────────────────────────────────────────────
// DASA SNAPFLOW STUDIO AI — CREATIVE STUDIO OPERATING SYSTEM
// Unique Vibe: Cinematic Darkroom Neon, Live AI Vector Mesh Simulator,
// 4-Stage Photographer Event Pipeline, and Studio CRM Deal Kanban.
// ─────────────────────────────────────────────────────────────

const SNAPSHARE_SCREEN_ASSETS = [
  {
    id: 'auth-login',
    module: 'Security & Auth',
    title: 'Studio Authentication & Multi-Tenant Access',
    subtitle: 'Multi-tenant studio authentication interface with JWT session tokens, SSO, and granular role RBAC.',
    tag: '01. Auth & Login',
    img: image1,
    route: 'app.snapflow.io/auth/login',
    specs: ['JWT + Bcryptjs', 'Multi-Tenant Auth', 'Role RBAC']
  },
  {
    id: 'executive-dashboard',
    module: 'Studio Operations',
    title: 'Executive Studio Intelligence Command Center',
    subtitle: 'Centralized operations hub monitoring live event uploads, AI vector index health, inquiry pipelines, and revenue.',
    tag: '02. Executive Dashboard',
    img: image2,
    route: 'app.snapflow.io/dashboard/executive',
    specs: ['Live Event Metrics', 'Revenue Telemetry', 'Storage Tracking']
  },
  {
    id: 'crm-pipeline',
    module: 'Client CRM',
    title: 'Visual Lead Kanban Pipeline & Deal Stages',
    subtitle: 'Track photography leads, wedding bookings, corporate inquiries, proposal stages, and deal conversions.',
    tag: '03. CRM Pipeline',
    img: image3,
    route: 'app.snapflow.io/crm/pipeline',
    specs: ['Kanban Pipeline', 'Lead Scoring', 'Proposal Tracker']
  },
  {
    id: 'client-inquiry',
    module: 'Client CRM',
    title: 'Automated Inbound Inquiry & Lead Capture',
    subtitle: 'Automated client intake queues with smart auto-responders, booking date conflict checks, and package builders.',
    tag: '04. Client Inquiry',
    img: image4,
    route: 'app.snapflow.io/crm/inquiries',
    specs: ['Inquiry Forms', 'Auto-Responder', 'Lead Capture']
  },
  {
    id: 'client-portal',
    module: 'Client Portal',
    title: 'Client Proofing & Digital E-Signature Vault',
    subtitle: 'Interactive portal for clients to review proposals, sign legally binding contracts, and settle online invoices.',
    tag: '05. Client Portal',
    img: image5,
    route: 'portal.snapflow.io/client/view',
    specs: ['E-Sign Contracts', 'Invoice Settlement', 'Proposal Review']
  },
  {
    id: 'event-qr-management',
    module: 'Event Management',
    title: 'Dynamic QR Code Generation & Guest Passcodes',
    subtitle: 'Instant dynamic QR passcodes per event allowing guests to scan and access their personal photos via selfie.',
    tag: '06. Event & QR',
    img: image6,
    route: 'app.snapflow.io/events/qr-hub',
    specs: ['QR Code Engine', 'Schedule Manager', 'Access Control']
  },
  {
    id: 'photo-gallery',
    module: 'Media Management',
    title: 'High-Resolution Event Gallery & Folder Taxonomy',
    subtitle: 'Hierarchical folder organizer featuring instant WebP rendering, EXIF metadata parsing, and watermark layers.',
    tag: '07. Photo Gallery',
    img: image7,
    route: 'app.snapflow.io/galleries/event-01',
    specs: ['Folder Taxonomy', 'Access Control', 'Hi-Res Previews']
  },
  {
    id: 'ai-face-matching',
    module: 'AI Engine',
    title: 'InsightFace 512D AI Facial Embedding Matcher',
    subtitle: 'Sub-second facial vector comparison matching guest selfies against thousands of high-res event photos.',
    tag: '08. AI Face Matching',
    img: image8,
    route: 'app.snapflow.io/ai/face-match',
    specs: ['InsightFace 512D', 'Cosine Similarity', 'Instant Selfie Match']
  },
  {
    id: 'photo-upload',
    module: 'Storage Engine',
    title: 'High-Speed Multi-Part Photo Upload Engine',
    subtitle: 'Direct-to-S3 batch photographer upload engine with automated background thumbnail generation.',
    tag: '09. Photo Upload',
    img: image9,
    route: 'app.snapflow.io/upload/batch',
    specs: ['MinIO S3 Bucket', 'Batch Processing', 'EXIF Metadata']
  },
  {
    id: 'calendar-team-management',
    module: 'Resource Planning',
    title: 'Photographer Shift Roster & Camera Gear Tracker',
    subtitle: 'Schedule photographer shoot timelines, assign crew, and prevent double-booking of expensive camera lenses.',
    tag: '10. Team & Calendar',
    img: image10,
    route: 'app.snapflow.io/resource/calendar',
    specs: ['Resource Scheduler', 'Shift Timelines', 'Equipment Lock']
  }
]

export default function SnapShareSocialProductView() {
  const [isMatching, setIsMatching] = useState(false)
  const [matchScore, setMatchScore] = useState(99.4)
  const [activePipelineStep, setActivePipelineStep] = useState(1)
  const [activeKanbanTab, setActiveKanbanTab] = useState('pipeline')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const triggerFaceMatchDemo = () => {
    setIsMatching(true)
    setTimeout(() => {
      setMatchScore(99.7)
      setIsMatching(false)
    }, 1400)
  }

  // 4-Stage Photographer Event Lifecycle Pipeline
  const EVENT_PIPELINE = [
    {
      step: 1,
      title: 'Shoot & Parallel S3 Ingestion',
      tag: '50GB BATCH INGEST',
      icon: UploadCloud,
      desc: 'Photographers dump high-res RAW/JPEG cards directly to private MinIO S3 object storage with multi-part parallel chunking and automatic WebP thumbnailing.',
      metrics: ['50GB Upload in < 4 Mins', 'Lossless EXIF Preserved', 'Auto-Watermark Layer']
    },
    {
      step: 2,
      title: '512D AI Face Vector Indexing',
      tag: '42ms EMBEDDING SPEED',
      icon: Cpu,
      desc: 'InsightFace deep neural models scan all event photos in the background, generating 512-dimensional floating-point embeddings stored in an ultra-fast vector index.',
      metrics: ['99.4% Face Accuracy', 'Multi-Angle Alignment', 'Sub-second Vector Search']
    },
    {
      step: 3,
      title: 'Dynamic QR Table Portals',
      tag: 'ZERO APP DOWNLOAD',
      icon: QrCode,
      desc: 'Wedding and event guests scan table QR codes using standard mobile browsers, snap a quick selfie, and immediately receive their curated personal photo album.',
      metrics: ['100% Mobile Browser Native', 'Instant SMS/WhatsApp Link', 'Private Album Isolation']
    },
    {
      step: 4,
      title: 'Studio CRM, Contracts & Payouts',
      tag: 'AUTO INVOICING & E-SIGN',
      icon: FileCheck,
      desc: 'Automates client photo proofing selections, generates cryptographically signed contracts, and dispatches UPI milestone invoices with instant receipt generation.',
      metrics: ['Digital E-Sign Hash', 'UPI Payment Webhooks', 'Automated Lead Followups']
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A0713] text-white selection:bg-[#8B5CF6] selection:text-white pt-24 select-none font-sans">
      
      {/* ── BREADCRUMB HEADER ─────────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#0E091C]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-300">
            <Link to="/" className="hover:text-[#A855F7] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#A855F7] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#A855F7] font-bold">DASA SnapFlow Studio AI</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-white hover:text-[#A855F7] bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-1.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. CINEMATIC DARKROOM HERO WITH LIVE AI FACE MATCH SIMULATOR ── */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E1138] via-[#0A0713] to-[#0A0713]">
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy & Quick Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 text-[#C4B5FD] text-xs font-mono font-bold uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5 text-[#A855F7]" />
                <span>AI PHOTO DISTRIBUTION &amp; STUDIO CRM</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                The AI Operating System for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#06B6D4]">
                  High-Growth Photo Studios.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Replace Dropbox links, slow WhatsApp deliveries, and manual invoices. Deliver event photos to thousands of guests instantly via 512D AI Face Recognition and dynamic QR codes.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#implementation-screens"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] text-white font-display font-bold text-xs shadow-lg shadow-[#8B5CF6]/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Inspect 10 Studio Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-bold text-xs transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
                  <span>Start Studio Pilot</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Live Interactive Face Match Widget */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl p-6 sm:p-7 bg-[#130E24] border border-[#8B5CF6]/40 shadow-2xl space-y-5 text-white font-sans relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#A855F7] animate-ping" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300">
                      LIVE AI FACE VECTOR ENGINE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    42ms LATENCY
                  </span>
                </div>

                {/* Simulated Face Scan Mesh */}
                <div className="relative h-44 rounded-2xl bg-[#090611] border border-[#8B5CF6]/30 flex flex-col items-center justify-center p-4 overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                  
                  {isMatching ? (
                    <div className="flex flex-col items-center space-y-3 z-10">
                      <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#EC4899] animate-spin flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-[#06B6D4]" />
                      </div>
                      <span className="text-xs font-mono text-[#C4B5FD] animate-pulse">
                        Extracting 512D Cosine Embeddings...
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center space-y-2.5 z-10 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 flex items-center justify-center text-[#C4B5FD]">
                        <Scan className="w-6 h-6" />
                      </div>
                      <div className="font-display font-bold text-sm text-white">
                        Selfie Matched in 2,450 Event Photos
                      </div>
                      <div className="text-[11px] font-mono text-emerald-400 font-bold">
                        ✓ {matchScore}% Cosine Confidence Score
                      </div>
                    </div>
                  )}

                  {/* Scan Laser */}
                  {isMatching && (
                    <motion.div
                      animate={{ y: [-70, 70, -70] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-[#EC4899] to-transparent shadow-lg shadow-[#EC4899]"
                    />
                  )}
                </div>

                {/* Interactive Trigger Button */}
                <button
                  onClick={triggerFaceMatchDemo}
                  disabled={isMatching}
                  className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-purple-200 hover:text-white border border-white/15 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isMatching ? 'animate-spin' : ''}`} />
                  <span>{isMatching ? 'Calculating Vector Match...' : 'Simulate Guest Face Search'}</span>
                </button>

                {/* Live Stats */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-mono text-slate-400">UNLOCKED PHOTOS</div>
                    <div className="text-lg font-display font-black text-white">48 Photos</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[10px] font-mono text-slate-400">GUEST APP DOWNLOAD</div>
                    <div className="text-lg font-display font-black text-emerald-400">0 MB (Web QR)</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 4 Bottom KPI Strip */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="font-display font-black text-3xl text-[#A855F7]">42ms</div>
              <div className="text-xs font-mono text-slate-400">Average AI Face Query</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-black text-3xl text-[#EC4899]">100%</div>
              <div className="text-xs font-mono text-slate-400">Zero App Download Required</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-black text-3xl text-[#06B6D4]">50GB+</div>
              <div className="text-xs font-mono text-slate-400">Rapid S3 Batch Ingestion</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-black text-3xl text-emerald-400">99.99%</div>
              <div className="text-xs font-mono text-slate-400">Multi-Tenant Cloud Uptime</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. PRODUCT IMPLEMENTATION SHOWCASE ─────────────────── */}
      <ProductImplementationShowcase
        productId="snapshare-social"
        productName="DASA SnapFlow Studio AI"
        screens={SNAPSHARE_SCREEN_ASSETS}
        brandColor="#8B5CF6"
      />

      {/* ── 3. FOUR-STAGE EVENT LIFECYCLE PIPELINE ──────────────── */}
      <section className="py-16 sm:py-24 bg-[#0D081B] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-mono font-bold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>EVENT LIFECYCLE PIPELINE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              From Shoot to Guest Delivery in 4 Intelligent Steps
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              How DASA SnapFlow streamlines event photography, gallery distribution, and client invoicing into one automated flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {EVENT_PIPELINE.map((pipe) => {
              const Icon = pipe.icon
              const isSelected = activePipelineStep === pipe.step
              return (
                <div
                  key={pipe.step}
                  onClick={() => setActivePipelineStep(pipe.step)}
                  className={`p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 border flex flex-col justify-between space-y-5 ${
                    isSelected
                      ? 'bg-[#180E30] border-[#8B5CF6] shadow-xl shadow-[#8B5CF6]/20 scale-105'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
                        isSelected ? 'bg-[#8B5CF6] text-white' : 'bg-white/10 text-purple-300'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-purple-200">
                        {pipe.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white">
                      {pipe.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pipe.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-1 text-[11px] font-mono text-purple-300">
                    {pipe.metrics.map((m, i) => (
                      <div key={i}>✓ {m}</div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 4. PHOTOGRAPHER CRM & STUDIO REVENUE SUITE ──────────── */}
      <section className="py-16 sm:py-24 bg-[#0A0713] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-purple-300 text-xs font-mono font-bold uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-[#EC4899]" />
              <span>STUDIO REVENUE &amp; CRM</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Turn Inquiries Into Bookings with Built-in E-Sign &amp; Invoicing
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Track wedding leads, send digital quotes, collect cryptographically signed agreements, and accept UPI milestone payments in one unified dashboard.
            </p>
          </div>

          {/* CRM Kanban Showcase */}
          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-[#140E26] border border-[#8B5CF6]/30 shadow-2xl space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#A855F7]">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-white">Studio Lead &amp; Deal Flow Kanban</h3>
                  <div className="text-[11px] font-mono text-purple-300">Live Client Booking Funnel</div>
                </div>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                ₹18.4L Active Pipeline
              </span>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stage: 'New Inquiries', count: '8 Leads', val: '₹4.2L', tag: 'AUTO-RESPONDED' },
                { stage: 'Proposals Sent', count: '5 Clients', val: '₹6.5L', tag: 'PRICE QUOTED' },
                { stage: 'E-Sign Review', count: '3 Couples', val: '₹4.8L', tag: 'AGREEMENT PENDING' },
                { stage: 'Booked & Paid', count: '12 Shoots', val: '₹18.4L', tag: 'UPI RECEIVED' }
              ].map((col, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="font-bold">{col.stage}</span>
                    <span className="text-purple-400 font-bold">{col.count}</span>
                  </div>
                  <div className="text-xl font-display font-black text-white">{col.val}</div>
                  <div className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 inline-block">
                    {col.tag}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. FINAL CONSULTATION CTA ──────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0A0713]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-[#1E1138] to-[#120A24] border border-[#8B5CF6]/40 text-white shadow-2xl space-y-6">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              Ready to Upgrade Your Photography Studio to AI?
            </h2>
            <p className="text-purple-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-normal">
              Schedule a live demonstration with Founder &amp; CEO Jeyawin D to see how DASA SnapFlow can automate your event photo distribution and client booking pipelines.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] hover:from-[#7C3AED] hover:to-[#4F46E5] text-white font-display font-bold text-xs shadow-lg shadow-[#8B5CF6]/30 transition-all hover:-translate-y-0.5"
              >
                <span>Schedule Studio Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
