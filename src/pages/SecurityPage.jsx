import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, Server, KeyRound, CheckCircle2, ArrowLeft, Cpu, RefreshCw, EyeOff, Activity, FileCheck, Layers } from 'lucide-react'
import { Link } from '../components/Router'
import { useSEO } from '../hooks/useSEO'

export default function SecurityPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  useSEO({
    title: 'Security & Trust Center | DASA TECH Software Solutions',
    description: 'Learn about enterprise data protection, end-to-end encryption, role-based access controls, and compliance standards at DASA TECH.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Security Center",
      "url": "https://dasatech.in/security"
    }
  })

  return (
    <div className="min-h-screen bg-white text-[#17131F] selection:bg-amber-500 selection:text-white pt-24 pb-20 select-none">
      
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-[#EFE6D8] bg-[#FAF7F2]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-amber-700 font-bold">Security &amp; Trust Center</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17131F] hover:text-amber-700 bg-white hover:bg-[#FDF8EE] border border-[#EFE6D8] hover:border-amber-300 px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F2] via-[#FDFBF7] to-white border-b border-[#EFE6D8]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200/70 text-amber-800 text-xs font-mono font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>GLOBAL CYBERSECURITY &amp; COMPLIANCE ARCHITECTURE</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#17131F] tracking-tight">
            Security &amp; Trust <span className="text-color-shift">Center</span>
          </h1>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Defense-in-depth security infrastructure, hardware-level cryptographic key management, automated vulnerability mitigation, and zero-trust enterprise deployment architecture.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-3">
            <span>Security Framework: ISO/IEC 27001 Aligned</span>
            <span>&bull;</span>
            <span>SOC2 Type II Cloud Hosting</span>
            <span>&bull;</span>
            <span>Uptime Benchmark: 99.99%</span>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-12 leading-relaxed text-slate-700">
        
        {/* Section 1: Security Architecture Overview */}
        <div className="p-8 rounded-3xl bg-[#FAF7F2] border border-[#EFE6D8] space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Layers className="w-6 h-6 text-amber-600" />
            <span>1. Enterprise Defense-in-Depth Architecture</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DASA TECH engineers mission-critical enterprise software, custom ERP platforms, and IoT edge networks utilizing a comprehensive <strong>Multi-Tier Defense-in-Depth Framework</strong>. Every layer of the software stack—from network perimeter to physical database storage—is isolated with redundant security boundaries and real-time anomaly detection.
          </p>
        </div>

        {/* Section 2: 4 Core Security Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <div className="p-7 rounded-3xl bg-white border border-[#EFE6D8] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#17131F]">Cryptographic Encryption Core</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              FIPS 140-2 validated <strong>AES-256 GCM</strong> encryption for all relational database tables, document file stores, and snapshot archives. Transit encryption enforced via <strong>TLS 1.3</strong> with ephemeral Elliptic Curve Diffie-Hellman key exchanges (ECDHE).
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#EFE6D8] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-600 flex items-center justify-center">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#17131F]">Zero-Trust Identity &amp; RBAC</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Granular Role-Based Access Control (RBAC) enforced with JSON Web Token (JWT) cryptographic signature validation, OAuth 2.0 / SAML 2.0 Single Sign-On (SSO), and adaptive Multi-Factor Authentication (MFA).
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#EFE6D8] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-600 flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#17131F]">Multi-Tenant Database Isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Atomic tenant schema segregation combined with PostgreSQL Row-Level Security (RLS). Every database query is cryptographically scoped to the authenticated tenant UUID at the connection-pool layer.
            </p>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#EFE6D8] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-600 flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#17131F]">Continuous BCDR &amp; Instant Rollback</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated multi-region geo-replicated backups with Point-In-Time Recovery (PITR). Recovery Point Objective (RPO) &lt; 15 minutes, Recovery Time Objective (RTO) &lt; 1 hour with atomic failover routing.
            </p>
          </div>

        </div>

        {/* Section 3: Secure SDLC */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <FileCheck className="w-6 h-6 text-amber-600" />
            <span>2. Secure Software Development Lifecycle (SSDLC)</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Security is integrated directly into every phase of our continuous integration and delivery pipelines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFE6D8] space-y-1.5">
              <span className="font-mono font-bold text-amber-700 uppercase">Automated SAST / DAST</span>
              <p className="text-slate-600 leading-relaxed">Static &amp; dynamic application vulnerability scanning integrated into Git pull request merge gates.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFE6D8] space-y-1.5">
              <span className="font-mono font-bold text-amber-700 uppercase">Dependency Hardening</span>
              <p className="text-slate-600 leading-relaxed">Automated Software Bill of Materials (SBOM) tracking to neutralize upstream supply-chain zero-day exploits.</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFE6D8] space-y-1.5">
              <span className="font-mono font-bold text-amber-700 uppercase">OWASP Top 10 Mitigation</span>
              <p className="text-slate-600 leading-relaxed">Native framework immunity against SQL injections, XSS, CSRF, broken access controls, and SSRF attack vectors.</p>
            </div>
          </div>
        </div>

        {/* Section 4: Edge IoT & Physical Hardening */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#FAF7F2] border border-[#EFE6D8]">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Cpu className="w-6 h-6 text-amber-600" />
            <span>3. Industrial IoT &amp; Hardware Edge Telemetry Security</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            For factory SCADA automation and IoT deployments (e.g., DASA EdgeMesh and FactorySync), microcontrollers utilize hardware-level secure elements (ATECC608A cryptographic chips) to generate unique device certificates, mutual TLS (mTLS) authentication, and encrypted MQTT transport.
          </p>
        </div>

        {/* Section 5: Responsible Security Reporting Desk */}
        <div className="space-y-4 p-8 rounded-3xl bg-gradient-to-br from-amber-50/60 to-orange-50/40 border border-amber-200/60 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-200 text-amber-800 text-xs font-mono font-bold uppercase">
            <span>CHIEF INFORMATION SECURITY OFFICE (CISO)</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-[#17131F]">Vulnerability Disclosure &amp; Security Audits</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Enterprise clients requiring custom SOC2 compliance attestation reports, third-party penetration test executive summaries, or security questionnaire onboarding:
          </p>
          <div className="pt-3 font-mono text-xs text-amber-800 space-y-1">
            <div className="font-bold">Official Channel: Signal @dasatech.99</div>
            <div>Consultation Portal: https://dasatech.in/contact</div>
            <div className="text-slate-500 pt-1">DASA TECH Corporation &bull; Erode, Tamil Nadu, India</div>
          </div>
        </div>

      </main>

    </div>
  )
}

