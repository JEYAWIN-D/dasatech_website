import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, ArrowLeft, Database, Globe, KeyRound, Server, UserCheck, AlertCircle } from 'lucide-react'
import { Link } from '../components/Router'

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-white text-[#17131F] selection:bg-[#6D28D9] selection:text-white pt-24 pb-20 select-none">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#6D28D9] font-bold">Privacy &amp; Data Protection</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17131F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF8FF] via-[#F4EFFE]/40 to-white border-b border-[#E9E2F5]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F7F3FF] border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>GLOBAL DATA GOVERNANCE & PRIVACY FRAMEWORK</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#17131F] tracking-tight">
            Privacy &amp; Data <span className="text-color-shift">Protection Policy</span>
          </h1>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            DASA TECH Corporation's global commitment to data privacy, client information security, proprietary source code confidentiality, and international compliance standards.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-3">
            <span>Doc ID: DASA-POL-PRIV-2025</span>
            <span>&bull;</span>
            <span>Version: 3.2 (Enterprise Standard)</span>
            <span>&bull;</span>
            <span>Effective Date: January 1, 2025</span>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-12 leading-relaxed text-slate-700">
        
        {/* Executive Summary */}
        <div className="p-8 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Lock className="w-6 h-6 text-[#6D28D9]" />
            <span>1. Executive Statement & Scope of Governance</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DASA TECH Corporation ("DASA TECH", "Company", "we", "us", or "our") operates as an enterprise software engineering, artificial intelligence systems, custom ERP architecture, and industrial automation provider. This Global Privacy Policy governs all commercial interactions, deployed client software instances, cloud architectures, APIs, IoT telemetry channels, and web platforms operated under the DASA TECH umbrella.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate under a strict <strong>Zero-Trust and Zero-Monetization</strong> data mandate. We do not sell, rent, commercialize, or share client operational datasets, transactional histories, algorithmic pipelines, or proprietary codebases with any third-party advertising networks or commercial brokers.
          </p>
        </div>

        {/* Section 2: Core Privacy Principles */}
        <div className="space-y-6">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <UserCheck className="w-6 h-6 text-[#6D28D9]" />
            <span>2. Fundamental Principles of Data Stewardship</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F]">Purpose Limitation</div>
              <p className="text-xs text-slate-600 leading-relaxed">Data is collected solely for explicit, legitimate enterprise engineering, cloud deployment, and system maintenance objectives.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F]">Data Minimization</div>
              <p className="text-xs text-slate-600 leading-relaxed">We restrict data ingestion strictly to the minimal parameters necessary to perform system engineering and uptime verification.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F]">Storage Integrity</div>
              <p className="text-xs text-slate-600 leading-relaxed">Enterprise client records are stored in cryptographically sealed vaults with automated retention purge cycles upon contract conclusion.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F]">Absolute Confidentiality</div>
              <p className="text-xs text-slate-600 leading-relaxed">All staff, engineers, and infrastructure architects are bound by perpetual, legally enforceable Non-Disclosure Agreements (NDAs).</p>
            </div>
          </div>
        </div>

        {/* Section 3: Information Ingestion Categories */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F]">3. Categories of Information Ingested</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            In our role as an enterprise software developer and cloud systems integrator, information processed is categorized into:
          </p>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-1.5">
              <h3 className="font-display font-bold text-sm text-[#17131F]">A. Client Business & System Specifications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Technical workflows, database structures, business logic rules, API endpoints, schema diagrams, and integration tokens provided during system architecture design.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-1.5">
              <h3 className="font-display font-bold text-sm text-[#17131F]">B. Administrative & Authorized Stakeholder Identity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Corporate email addresses, names, organizational job designations, authorized phone numbers, and cryptographic public keys utilized for Role-Based Access Control (RBAC).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-1.5">
              <h3 className="font-display font-bold text-sm text-[#17131F]">C. Telemetry, IoT & Infrastructure Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Non-identifying system health logs, CPU/Memory telemetry from deployed IoT mesh nodes, database query execution latency, and error tracing stacks used exclusively to guarantee 99.99% uptime SLAs.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Data Processing & Legal Grounds */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F]">4. Legal Grounds for Processing</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DASA TECH processes data under established international regulatory frameworks including the <strong>General Data Protection Regulation (GDPR Article 6)</strong>, the <strong>Digital Personal Data Protection Act (DPDP Act 2023, India)</strong>, and standard international Master Services Agreements (MSAs):
          </p>
          <ul className="space-y-2.5 text-sm text-slate-600 pl-2">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Contractual Execution:</strong> Processing essential for the delivery, deployment, testing, and lifecycle maintenance of contracted enterprise software.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Legitimate Technical Interests:</strong> Hardening cloud infrastructure, conducting threat modeling, mitigating DDoS vectors, and ensuring cryptographic key rotation.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Statutory & Regulatory Mandates:</strong> Retaining financial transaction audit trails and GST tax compliance records as prescribed by applicable law.</span>
            </li>
          </ul>
        </div>

        {/* Section 5: Encryption & Multi-Tenant Isolation */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5]">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Database className="w-6 h-6 text-[#6D28D9]" />
            <span>5. Multi-Tenant Architectural Isolation</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            For all SaaS and managed cloud ERP platforms, DASA TECH enforces strict <strong>logical and cryptographic tenant isolation</strong>. Client database schemas are segregated with dedicated row-level security (RLS) policies, preventing any possibility of cross-tenant data leakage or inadvertent indexing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-[#E9E2F5]">
              <div className="font-mono font-bold text-xs text-[#6D28D9] uppercase">Data at Rest</div>
              <p className="text-xs text-slate-600 mt-1">FIPS 140-2 validated AES-256 military-grade encryption across all production clusters and block storage volumes.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E9E2F5]">
              <div className="font-mono font-bold text-xs text-[#6D28D9] uppercase">Data in Transit</div>
              <p className="text-xs text-slate-600 mt-1">Enforced TLS 1.3 / HTTPS cipher suites with Perfect Forward Secrecy (PFS) and strict HSTS policy enforcement.</p>
            </div>
          </div>
        </div>

        {/* Section 6: Client Data Rights & Exportability */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F]">6. Enterprise Client Rights & Data Portability</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Enterprise clients retain unencumbered sovereignty over their data at all times. Upon written request or upon contract termination, clients possess the right to:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
            <li className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Atomic Data Export:</strong> Full PostgreSQL dumps, JSON/CSV exports, and media storage archives delivered via encrypted SFTP within 5 business days.</span>
            </li>
            <li className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Cryptographic Purge:</strong> Certified zero-trace shredding of all staging, caching, and transient backups according to DoD 5220.22-M standards.</span>
            </li>
            <li className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Audit Rights:</strong> Right to request annual third-party SOC2 Type II or ISO 27001 compliance summary attestations.</span>
            </li>
            <li className="p-4 rounded-2xl bg-white border border-[#E9E2F5] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#6D28D9] shrink-0 mt-0.5" />
              <span><strong>Correction & Rectification:</strong> Real-time self-service administrative access or DPO-assisted modifications to enterprise profile registries.</span>
            </li>
          </ul>
        </div>

        {/* Section 7: Data Protection Office Contact */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#F7F3FF] border border-[#DDD0FF] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold uppercase">
            <span>DPO CONTACT & LEGAL INQUIRIES</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-[#17131F]">Data Protection & Regulatory Governance Office</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            For formal Data Processing Addendum (DPA) execution, custom NDA processing, or GDPR/DPDP regulatory inquiries, contact our Data Protection Officer and Corporate Legal Counsel directly:
          </p>
          <div className="pt-3 font-mono text-xs text-[#6D28D9] space-y-1">
            <div className="font-bold">Email: dasatechmu@gmail.com</div>
            <div>Direct Line: +91 76399 30148</div>
            <div className="text-slate-500 pt-1">Corporate Headquarters: Erode, Tamil Nadu, India</div>
          </div>
        </div>

      </main>

    </div>
  )
}

