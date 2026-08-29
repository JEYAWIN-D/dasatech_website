import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, CheckCircle2, ShieldCheck, ArrowLeft, Code2, Scale, Clock, Award, FileCode, CheckSquare } from 'lucide-react'
import { Link } from '../components/Router'

export default function TermsPage() {
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
            <span className="text-[#6D28D9] font-bold">Master Services Agreement</span>
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
            <FileText className="w-4 h-4" />
            <span>ENTERPRISE MASTER SERVICES AGREEMENT (MSA)</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-[#17131F] tracking-tight">
            Master Services <span className="text-color-shift">Agreement &amp; Terms</span>
          </h1>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed font-normal max-w-3xl mx-auto">
            Comprehensive legal, commercial, and technical terms governing enterprise software engineering, proprietary ERP deployment, cloud infrastructure SLAs, and full IP ownership transfer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-500 pt-3">
            <span>Standard MSA ID: DASA-MSA-2025</span>
            <span>&bull;</span>
            <span>Applicable to Global Enterprise Clients</span>
            <span>&bull;</span>
            <span>Revised: January 2025</span>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto px-6 py-12 sm:py-16 space-y-12 leading-relaxed text-slate-700">
        
        {/* Section 1: Agreement Structure */}
        <div className="p-8 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Scale className="w-6 h-6 text-[#6D28D9]" />
            <span>1. Contractual Framework & Statement of Work (SOW)</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            These Terms of Service, in conjunction with individual executed Statements of Work (SOW), Project Proposal Addenda, and Service Level Agreements (SLAs), constitute the legally binding Master Services Agreement (MSA) between <strong>DASA TECH Corporation</strong> and the client entity ("Client").
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Each project is governed by mutually signed technical specifications detailing architecture diagrams, API schemas, delivery sprint phases, User Acceptance Testing (UAT) criteria, and production go-live timelines.
          </p>
        </div>

        {/* Section 2: Complete IP Ownership Assignment */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Code2 className="w-6 h-6 text-[#6D28D9]" />
            <span>2. Intellectual Property (IP) & Source Code Transfer</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            DASA TECH upholds an industry-leading <strong>100% Client IP Ownership Standard</strong> for custom software engineering engagements:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#6D28D9]" />
                <span>Full Source Code Ownership</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">Upon milestone settlement, 100% unencumbered title, copyright, and ownership of all custom frontend/backend repositories, SQL schemas, and design assets transfer perpetually to the Client.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E9E2F5] space-y-2">
              <div className="font-display font-bold text-sm text-[#17131F] flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#6D28D9]" />
                <span>Zero Hidden Code Lock-ins</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">We deliver thoroughly documented, clean codebases with zero proprietary compiler obfuscation or restrictive licensing traps.</p>
            </div>
          </div>
        </div>

        {/* Section 3: SLA Uptime & Severity Response Matrix */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5]">
          <h2 className="font-display font-bold text-2xl text-[#17131F] flex items-center gap-3">
            <Clock className="w-6 h-6 text-[#6D28D9]" />
            <span>3. Enterprise SLA & Incident Severity Matrix</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Production cloud hosting and enterprise ERP deployments maintained by DASA TECH are governed by a <strong>99.99% Annual System Availability SLA</strong>, backed by our 24/7/365 engineering incident response matrix:
          </p>
          <div className="overflow-x-auto pt-2">
            <table className="w-full text-xs text-left border-collapse bg-white rounded-2xl overflow-hidden border border-[#E9E2F5]">
              <thead>
                <tr className="bg-[#F7F3FF] border-b border-[#E9E2F5] text-[#6D28D9] font-mono font-bold">
                  <th className="p-3">Severity Level</th>
                  <th className="p-3">Definition</th>
                  <th className="p-3">Target Response Time</th>
                  <th className="p-3">Resolution Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E2F5] text-slate-600">
                <tr>
                  <td className="p-3 font-mono font-bold text-rose-600">P1 (Critical)</td>
                  <td className="p-3">Core production ERP down or critical business interruption</td>
                  <td className="p-3 font-mono font-semibold">&lt; 15 Minutes</td>
                  <td className="p-3 font-mono font-semibold">&lt; 4 Hours</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-amber-600">P2 (Major)</td>
                  <td className="p-3">Significant feature impairment with functional workaround available</td>
                  <td className="p-3 font-mono font-semibold">&lt; 1 Hour</td>
                  <td className="p-3 font-mono font-semibold">&lt; 12 Hours</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-blue-600">P3 (Moderate)</td>
                  <td className="p-3">Non-critical functional defects or performance optimization tuning</td>
                  <td className="p-3 font-mono font-semibold">&lt; 4 Hours</td>
                  <td className="p-3 font-mono font-semibold">&lt; 48 Hours</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono font-bold text-slate-600">P4 (Minor)</td>
                  <td className="p-3">Cosmetic adjustments, minor UI tweaks, or routine inquiries</td>
                  <td className="p-3 font-mono font-semibold">&lt; 8 Hours</td>
                  <td className="p-3 font-mono font-semibold">Next Sprint Cycle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Warranty & Security Hardening */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F]">4. Engineering Warranty & Defect Remediation</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All production software builds engineered by DASA TECH include a standard <strong>90-Day Post-Go-Live Comprehensive Warranty</strong>. During this window, any defects or performance deviations from the mutually approved technical specifications are remediated at zero additional cost to the client.
          </p>
        </div>

        {/* Section 5: Limitation of Liability & Commercial Safeguards */}
        <div className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-[#17131F]">5. Liability & Mutual Indemnification</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Both parties agree to standard mutual indemnification covering intellectual property infringement warranties. Neither party shall be liable for indirect, punitive, or consequential damages resulting from third-party upstream cloud infrastructure outages beyond reasonable commercially standard mitigations.
          </p>
        </div>

        {/* Section 6: Corporate Governance & Legal Contacts */}
        <div className="space-y-4 p-8 rounded-3xl bg-[#F7F3FF] border border-[#DDD0FF] text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold uppercase">
            <span>LEGAL COUNSEL & CONTRACTS</span>
          </div>
          <h2 className="font-display font-bold text-2xl text-[#17131F]">Contract Inquiries & Master Service Agreements</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            For custom MSA negotiations, enterprise procurement onboarding, or SLA modifications, reach out directly to our corporate legal desk:
          </p>
          <div className="pt-3 font-mono text-xs text-[#6D28D9] space-y-1">
            <div className="font-bold">Email: dasatechmu@gmail.com</div>
            <div>Direct Line: +91 76399 30148</div>
            <div className="text-slate-500 pt-1">DASA TECH Corporation &bull; Erode, Tamil Nadu, India</div>
          </div>
        </div>

      </main>

    </div>
  )
}

