import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Server, Database, Code2, ShieldCheck, Zap, Activity,
  ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Layers,
  Lock, RefreshCw, Check, Clock, Cpu, GitBranch,
  Terminal, Globe, Boxes, Sliders, PlayCircle, Eye,
  Radio, HardDrive, KeyRound, Workflow, Share2, Network,
  ChevronRight, FileCode
} from 'lucide-react'
import { Link } from '../Router'
import { BACKEND_ASSETS } from '../../data/backendAssets'

// ─────────────────────────────────────────────────────────────
// BACKEND DEVELOPMENT SERVICE COMPONENT
// Unique Theme: Dark Cyber IDE Terminal & 5-Tier Architecture Node Inspector
// Color Accents: Neon Emerald (#10B981), Electric Cyan (#06B6D4), Cyber Dark (#0A0E1A)
// Unique Visual Features:
// 1. Live IDE Code Terminal Hero (REST API, GraphQL, PostgreSQL Schema tabs)
// 2. Interactive 5-Tier System Architecture Diagram (Clickable Nodes -> Tier Spec Cards)
// 3. Security & Compliance Cryptographic Vault Grid
// 4. Server Reliability & Database Optimization Showcase
// ─────────────────────────────────────────────────────────────

export default function BackendDevelopmentServiceView() {
  const [selectedArchTier, setSelectedArchTier] = useState(1) // Default: API Gateway
  const [activeCodeTab, setActiveCodeTab] = useState('api')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const ARCH_TIERS = [
    {
      id: 0,
      name: 'Client Application Layer',
      badge: 'ENTRY POINT',
      icon: Globe,
      image: BACKEND_ASSETS.architectureTiers[0].image,
      desc: 'High-speed requests originating from modern React web apps, Flutter/React Native mobile applications, and connected IoT field sensors.',
      protocols: ['HTTPS / TLS 1.3', 'WebSockets', 'REST & GraphQL'],
      components: ['Web Browsers', 'iOS & Android Mobile Apps', 'IoT Telemetry Sensors']
    },
    {
      id: 1,
      name: 'API Gateway & Security Tier',
      badge: 'INGESTION & DEFENSE',
      icon: ShieldCheck,
      image: BACKEND_ASSETS.architectureTiers[1].image,
      desc: 'High-throughput reverse proxy handling SSL termination, rate limiting, traffic management, CORS enforcement, and cryptographic JWT validation.',
      protocols: ['RESTful OpenAPI', 'GraphQL Schema Federation', 'JWT Token Bearer'],
      components: ['Reverse Proxy Firewall', 'Token Verifier', 'Rate Limiter', 'Header Sanitizer']
    },
    {
      id: 2,
      name: 'Backend Microservices Tier',
      badge: 'BUSINESS LOGIC',
      icon: Server,
      image: BACKEND_ASSETS.architectureTiers[2].image,
      desc: 'Deterministic microservices and transactional business engines executing operational rules, state transitions, and background job queuing.',
      protocols: ['Node.js Event Loop', 'Python FastAPI', 'Background Job Workers'],
      components: ['Transactional Handlers', 'Microservice Endpoints', 'Background Task Workers']
    },
    {
      id: 3,
      name: 'Database & In-Memory Cache Tier',
      badge: 'PERSISTENCE',
      icon: Database,
      image: BACKEND_ASSETS.architectureTiers[3].image,
      desc: 'ACID-compliant PostgreSQL relational schemas paired with Redis in-memory key-value caching layers for instant database access.',
      protocols: ['PostgreSQL Relational DB', 'Redis Key-Value Cache', 'Connection Poolers'],
      components: ['PostgreSQL Database Cluster', 'Redis In-Memory Cache', 'Database Connection Pool']
    },
    {
      id: 4,
      name: 'External Integrations Tier',
      badge: 'CONNECTED ECOSYSTEM',
      icon: Share2,
      image: BACKEND_ASSETS.architectureTiers[4].image,
      desc: 'Asynchronous webhook relays connecting payment gateways, messaging services, and statutory tax APIs.',
      protocols: ['Webhook Relays', 'OAuth2 Integrations', 'Encrypted TLS Sockets'],
      components: ['Payment Channels', 'WhatsApp Messaging Gateway', 'Statutory Tax APIs']
    }
  ]

  const CODE_SNIPPETS = {
    api: {
      filename: 'server/api/gateway.js',
      lang: 'JavaScript',
      code: `// Secure API Gateway Endpoint Handler
import { authenticateToken, checkRateLimit } from '../middleware/auth.js';

export async function handleOrderCreation(req, res) {
  try {
    const user = await authenticateToken(req.headers.authorization);
    await checkRateLimit(user.id);

    const order = await orderService.createOrder({
      userId: user.id,
      items: req.body.items,
      paymentMethod: req.body.paymentMethod
    });

    return res.status(201).json({ success: true, data: order });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}`
    },
    db: {
      filename: 'server/db/schema.sql',
      lang: 'PostgreSQL SQL',
      code: `-- Relational Database Schema & Indexing
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  total_amount NUMERIC(12, 2) NOT NULL,
  status VARCHAR(32) NOT NULL DEFAULT 'PENDING',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_orders_user_status ON orders(user_id, status);`
    },
    auth: {
      filename: 'server/security/auth.js',
      lang: 'JavaScript',
      code: `// Cryptographic JWT Token Verification
import jwt from 'jsonwebtoken';

export function verifyJWTSession(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, { algorithms: ['HS256'] }, (err, decoded) => {
      if (err) return reject(new Error('Invalid token signature'));
      resolve(decoded);
    });
  });
}`
    }
  }

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-100 selection:bg-[#10B981] selection:text-[#070A12] pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-[#0A0E1A]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Link to="/" className="hover:text-[#10B981] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#10B981] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#10B981] font-bold">Backend Development</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-white hover:text-[#10B981] bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-1.5 rounded-full transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: DARK CYBER TERMINAL & CODE IDE ────────────── */}
      <section className="relative py-14 lg:py-22 bg-[#0A0E1A] overflow-hidden border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] text-xs font-mono font-bold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5 text-[#10B981]" />
                <span>SERVER ARCHITECTURE &amp; DATABASE ENGINEERING</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                High-Performance <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#3B82F6]">Server Backbones.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                We engineer resilient backend servers, secure API gateways, scalable PostgreSQL database schemas, and background job processing pipelines designed for reliable 24/7 business execution.
              </p>

              {/* Server Features Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'REST & GraphQL APIs', 'PostgreSQL Relational DB', 'Redis Caching', 'Secure Authentication', 'Background Workers'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#architecture-tiers"
                  className="px-6 py-3.5 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#070A12] font-display font-black text-xs sm:text-sm shadow-md shadow-[#10B981]/25 transition-all flex items-center gap-2"
                >
                  <span>Inspect System Tiers</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#security-vault"
                  className="px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-display font-bold text-xs sm:text-sm border border-white/15 transition-colors"
                >
                  <span>Security &amp; Encryption</span>
                </a>
              </div>
            </div>

            {/* Right: Live Dark IDE Code Terminal */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border-2 border-white/15 bg-[#03060E] shadow-2xl space-y-0">
                
                {/* IDE Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0A0F1D] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="font-mono text-xs text-slate-400 pl-2">dasa-backend-server</span>
                  </div>

                  {/* Code Tabs Switcher */}
                  <div className="flex items-center gap-1">
                    {[
                      { key: 'api', label: 'Gateway API' },
                      { key: 'db', label: 'DB Schema' },
                      { key: 'auth', label: 'JWT Auth' }
                    ].map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setActiveCodeTab(tab.key)}
                        className={`px-3 py-1 rounded-md font-mono text-[10px] font-bold transition-colors ${
                          activeCodeTab === tab.key
                            ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Code Editor Content View */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 overflow-x-auto min-h-[280px]">
                  <div className="text-[10px] text-slate-500 pb-2 flex items-center justify-between border-b border-white/5 mb-3">
                    <span>File: {CODE_SNIPPETS[activeCodeTab].filename}</span>
                    <span>Lang: {CODE_SNIPPETS[activeCodeTab].lang}</span>
                  </div>
                  <pre className="text-emerald-400">
                    <code>{CODE_SNIPPETS[activeCodeTab].code}</code>
                  </pre>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-[#0A0F1D] border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SERVER READY &bull; COMPATIBLE WITH ALL APPS
                  </span>
                  <span>UTF-8 &bull; JSON API</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. INTERACTIVE 5-TIER SYSTEM ARCHITECTURE ─────────── */}
      <section id="architecture-tiers" className="py-16 lg:py-24 bg-[#0A0E1A] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider bg-[#10B981]/15 px-3.5 py-1.5 rounded-full border border-[#10B981]/30">
              <Network className="w-3.5 h-3.5" />
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              5-Tier Backend <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">System Flow</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Click any tier in the backend pipeline below to inspect its protocols, components, and responsibilities.
            </p>
          </div>

          {/* Interactive Tier Node Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {ARCH_TIERS.map((tier, tIdx) => {
              const IconComp = tier.icon
              const isSelected = selectedArchTier === tIdx
              return (
                <button
                  key={tier.id}
                  onClick={() => setSelectedArchTier(tIdx)}
                  className={`p-4 rounded-2xl text-left border transition-all duration-300 space-y-2 ${
                    isSelected
                      ? 'bg-[#10B981]/20 border-[#10B981] text-white shadow-lg shadow-[#10B981]/15 scale-105'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-[#10B981]">TIER 0{tIdx + 1}</span>
                    <IconComp className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div className="font-display font-bold text-xs sm:text-sm line-clamp-1">{tier.name}</div>
                </button>
              )
            })}
          </div>

          {/* Selected Tier Spec Inspection Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArchTier}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/20 border border-[#10B981]/40 px-3 py-1 rounded-md">
                  {ARCH_TIERS[selectedArchTier].badge}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {ARCH_TIERS[selectedArchTier].name}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {ARCH_TIERS[selectedArchTier].desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs font-bold text-[#10B981] uppercase tracking-wider">Supported Protocols &amp; Standards:</div>
                  <div className="flex flex-wrap gap-2">
                    {ARCH_TIERS[selectedArchTier].protocols.map((proto, pIdx) => (
                      <span key={pIdx} className="text-xs font-mono text-white bg-white/10 px-3 py-1 rounded-lg border border-white/15">
                        {proto}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">Core Modules Included:</div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    {ARCH_TIERS[selectedArchTier].components.map((comp, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Tier Illustration */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/15 bg-black/60 p-2">
                <img
                  src={ARCH_TIERS[selectedArchTier].image}
                  alt={ARCH_TIERS[selectedArchTier].name}
                  className="w-full h-[240px] object-cover rounded-xl opacity-90"
                />
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ── 3. SECURITY & CRYPTOGRAPHIC VAULT GRID ─────────────── */}
      <section id="security-vault" className="py-16 lg:py-24 bg-[#070A12] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>DATA PROTECTION &amp; ENCRYPTION</span>
              </div>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                Backend Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">Standards</span>
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              Every backend system built by DASA TECH features enterprise encryption and strict access controls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10B981] transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
                <KeyRound className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">256-Bit Data Encryption</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All production databases and stored assets feature 256-bit AES encryption at rest and SSL/TLS 1.3 in transit.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10B981] transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Role-Based Access Control</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Granular user role permissions (RBAC) preventing unauthorized access to administrative database records.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:border-[#10B981] transition-all duration-300 space-y-4">
              <div className="w-11 h-11 rounded-2xl bg-[#10B981]/20 text-[#10B981] flex items-center justify-center border border-[#10B981]/30">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Automated System Backups</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Continuous automated snapshot backups with zero data loss atomic transaction guarantees.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0A0E1A] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider bg-[#10B981]/15 border border-[#10B981]/30 px-4 py-1.5 rounded-full">
            READY TO BUILD YOUR BACKEND?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a Backend Architecture <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#06B6D4]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss database modeling, API endpoints, server security, and cloud deployment directly with Founder &amp; CEO Jeyawin D and our backend engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#10B981] hover:bg-[#059669] text-[#070A12] font-display font-bold text-sm shadow-xl shadow-[#10B981]/25 transition-all"
            >
              <span>Start Backend Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
