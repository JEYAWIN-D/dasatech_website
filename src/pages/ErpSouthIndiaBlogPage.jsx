import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar, Clock, ArrowLeft, ArrowRight, Share2, Check,
  Building, Factory, Pill, GraduationCap, Cpu, Layers,
  ShieldCheck, AlertTriangle, CheckCircle2, TrendingUp,
  MapPin, User, ChevronRight, Bookmark, Sparkles
} from 'lucide-react'
import { Link } from '../components/Router'
import { useSEO } from '../hooks/useSEO'
import SignalBrandIcon from '../components/SignalBrandIcon'

export default function ErpSouthIndiaBlogPage() {
  const [copied, setCopied] = useState(false)

  useSEO({
    title: 'The Current ERP Situation in South India: Challenges & Next-Gen Cloud/IoT Shift | DASA TECH',
    description: 'An authoritative analysis of South India\'s ERP landscape across Tamil Nadu, Karnataka, and Andhra Pradesh: why legacy software is failing textile, manufacturing, healthcare, and school enterprises, and the shift to custom distributed cloud ERP.',
    canonical: 'https://dasatech.in/blog/current-erp-situation-south-india',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      'headline': 'The Current State of ERP in South India: Why Traditional Systems are Failing and the Shift Toward Custom Cloud-IoT Architectures',
      'description': 'An in-depth analysis of how manufacturing, textile, school, and retail hubs across Tamil Nadu, Karnataka, and Andhra Pradesh are replacing fragmented desktop software with modern distributed ERPs.',
      'image': 'https://dasatech.in/dasa-wordmark.png',
      'datePublished': '2026-11-10T09:00:00+05:30',
      'dateModified': '2026-11-11T12:00:00+05:30',
      'author': {
        '@type': 'Person',
        'name': 'Jeyawin D',
        'jobTitle': 'Founder & CEO',
        'worksFor': {
          '@type': 'Organization',
          'name': 'DASA TECH',
          'url': 'https://dasatech.in'
        }
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'DASA TECH',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://dasatech.in/dasa-logo.png'
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://dasatech.in/blog/current-erp-situation-south-india'
      }
    }
  })

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <article className="min-h-screen bg-[#07080C] text-slate-200 select-none pt-28 pb-24">
      
      {/* ─────────────────────────────────────────────────────────────
          1) HERO BREADCRUMB & HEADER
      ─────────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-semibold truncate">ERP Situation in South India</span>
        </div>

        {/* Category Pill & Reading Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/30 text-amber-300">
            Enterprise ERP Strategy
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 bg-white/5 border border-white/10">
            South India Industrial Report
          </span>
          <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5 ml-auto">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            10 min read
          </span>
        </div>

        {/* Main Blog Title */}
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.18] mb-6">
          The Current State of ERP in South India: Why Traditional Systems Are Failing and the Shift Toward Custom Cloud-IoT Architectures
        </h1>

        {/* Lead Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          An in-depth analysis of how manufacturing, textile, school, and healthcare hubs across Tamil Nadu, Karnataka, and Andhra Pradesh are replacing fragmented desktop tools with scalable, custom-built enterprise platforms.
        </p>

        {/* Author & Publication Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 via-orange-600 to-rose-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-display font-black text-amber-400 text-sm">
                JD
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-sm text-white flex items-center gap-2">
                <span>Jeyawin D</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Founder &amp; CEO
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-2">
                <span>DASA TECH • Erode, Tamil Nadu</span>
                <span>•</span>
                <span>Nov 2026</span>
              </div>
            </div>
          </div>

          {/* Share Action */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-mono text-slate-200 flex items-center gap-2 transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Link Copied!' : 'Share Article'}</span>
            </button>
            <a
              href="https://signal.me/#u/dasatech.99"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-[#3A76F0]/20 hover:bg-[#3A76F0] text-[#70A1FF] hover:text-white border border-[#3A76F0]/30 transition"
              title="Discuss via Signal"
            >
              <SignalBrandIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Executive Takeaway Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900/60 to-purple-950/30 border border-amber-500/30 mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Executive Takeaways</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-200 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Over 70% of South Indian MSMEs</strong> still rely on isolated desktop accounting packages (e.g., Tally, legacy FoxPro/VB6 software) and disconnected Excel sheets, creating critical data blind spots in supply chains.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>Global Tier-1 ERPs (SAP, Oracle)</strong> fail for mid-market regional players due to multi-crore implementation overheads, 12+ month rollouts, and lack of ground-level GST e-invoicing and machine telemetry adaptability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 font-bold">•</span>
              <span><strong>The Winning Paradigm:</strong> Purpose-built, lightweight cloud-native ERPs that natively integrate shopfloor IoT telemetry, regional language workflows, and offline-first edge cashiering.</span>
            </li>
          </ul>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            2) ARTICLE BODY CONTENT
        ─────────────────────────────────────────────────────────────── */}
        <div className="prose prose-invert max-w-none space-y-10 text-slate-300 font-normal leading-relaxed text-base sm:text-lg">
          
          {/* SECTION 1 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-4 border-t border-white/10">
              1. The South Indian Industrial Landscape &amp; The Legacy Dilemma
            </h2>
            <p>
              South India represents India’s most diversified manufacturing and industrial corridor. From the high-velocity textile capital of <strong>Tirupur, Erode, and Karur</strong> to the precision automotive engineering clusters of <strong>Chennai, Hosur, and Coimbatore</strong>, through to the technology, logistics, and retail nerve centers of <strong>Bengaluru and Hyderabad</strong>, the operational complexity of these enterprises is extraordinary.
            </p>
            <p>
              Yet, beneath this massive production capability lies a deep technological paradox: <strong>most enterprises are powered by software built over fifteen years ago</strong>.
            </p>
            <p>
              A typical mid-sized manufacturing unit in Tamil Nadu with ₹30–100 Crores annual turnover often runs:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-rose-400 font-bold uppercase">Silo 1: Financial Accounting</div>
                <div className="text-sm text-slate-300 mt-1">Single-user or LAN desktop Tally managed by a finance clerk, completely disconnected from inventory realities.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-rose-400 font-bold uppercase">Silo 2: Production Tracking</div>
                <div className="text-sm text-slate-300 mt-1">Paper job sheets, printed traveler cards, and manual entries scribbled on whiteboards at the end of every 8-hour shift.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-rose-400 font-bold uppercase">Silo 3: Inventory &amp; Raw Material</div>
                <div className="text-sm text-slate-300 mt-1">Fragmented Excel sheets with no batch FIFO tracking, leading to frequent stock-outs or expired inventory write-offs.</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="font-mono text-xs text-rose-400 font-bold uppercase">Silo 4: Multi-Branch Dispatch</div>
                <div className="text-sm text-slate-300 mt-1">Phone calls, SMS messages, and manual E-Way bill generation done hours after shipments leave the dock.</div>
              </div>
            </div>
            <p>
              The result? Executive decision-makers receive financial reports 15 to 25 days after the month ends. By the time leadership spots a production bottleneck or margin erosion, hundreds of lakhs have already leaked.
            </p>
          </section>

          {/* SECTION 2 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-6 border-t border-white/10">
              2. Why Global Monolithic ERPs (SAP &amp; Oracle) Fail Regional MSMEs
            </h2>
            <p>
              When ambitious South Indian promoters decide to modernize, their first instinct is often to look at global enterprise names like SAP S/4HANA or Oracle NetSuite. In our consulting experience across dozens of regional enterprises, <strong>more than 65% of these implementations either fail or operate at less than 30% of their intended capability</strong>.
            </p>
            <p>
              Here is why:
            </p>
            <ul className="space-y-3 list-none pl-0">
              <li className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Prohibitive Total Cost of Ownership (TCO):</strong>
                  A mid-sized SAP implementation requires ₹40 Lakhs to ₹1.5 Crores upfront, plus ongoing annual maintenance contracts (AMCs), expensive certified consultant hourly rates, and per-user monthly SaaS fees that bleed operational margins.
                </div>
              </li>
              <li className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Rigid Global Processes vs. Indian Business Agility:</strong>
                  Global ERPs expect rigid, pre-defined procurement and dispatch workflows. In South India, businesses thrive on rapid supplier adjustments, partial deliveries, spot credit notes, and localized subcontracting (job-work) that rigid global software refuses to accommodate.
                </div>
              </li>
              <li className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-display">Shopfloor Adoption Barrier:</strong>
                  Frontline machine operators, warehouse supervisors, and cashier staff are overwhelmed by complex, multi-layered SAP/Oracle screens. Because the software is too painful to use, workers revert to paper, defeating the entire purpose of the ERP.
                </div>
              </li>
            </ul>
          </section>

          {/* SECTION 3 */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-6 border-t border-white/10">
              3. Sector-by-Sector Breakdown Across South India
            </h2>
            <p>
              Every industrial vertical in South India has distinct technological bottlenecks. Generic off-the-shelf software cannot solve these sector-specific realities.
            </p>

            {/* Sector 1: Textile */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/30 to-slate-900 border border-purple-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Textile &amp; Garments (Tirupur, Coimbatore, Erode, Karur)</h3>
                  <div className="text-xs font-mono text-purple-300">Yarn • Spinning • Dyeing • Knitting • Export Packaging</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Textile manufacturing is plagued by <strong>batch-wise shade variances and shrinkage losses</strong>. When grey fabric goes to dyeing units, standard software treats it as a simple quantity reduction. A specialized ERP must track shrinkage percentage, GSM tolerances, dye-lot color matching, and external job-work outward/inward challans with automated GST TDS deductions.
              </p>
            </div>

            {/* Sector 2: Healthcare & Pharmacy */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/30 to-slate-900 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Healthcare, Pharma Chains &amp; Hospital Stores</h3>
                  <div className="text-xs font-mono text-emerald-300">Batch FIFO • Cold Chain IoT • Schedule H1 • Multi-Branch POS</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Pharmacies face stringent regulatory scrutiny. They require sub-second barcode cashiering with automated <strong>FIFO batch expiry enforcement</strong> to prevent expired drugs from ever being dispensed. Multi-branch chains need centralized warehouse reordering algorithms and real-time cold-chain IoT temperature logging for vaccine storage.
              </p>
            </div>

            {/* Sector 3: Education */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 to-slate-900 border border-blue-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white">Educational Campuses &amp; Private Institutions</h3>
                  <div className="text-xs font-mono text-blue-300">Fee Ledgers • Biometric Attendance • Student Portals • Bus Telemetry</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                With hundreds of multi-campus educational trusts across Tamil Nadu and Karnataka, manual fee collection queues are an operational nightmare. Modern campus ERPs require direct UPI and NetBanking payment gateways with instant digital tax receipts, sibling discount formulas, automated attendance dispatches, and bus GPS tracking.
              </p>
            </div>
          </section>

          {/* SECTION 4 */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-6 border-t border-white/10">
              4. The 4 Technological Forces Driving the 2025–2026 ERP Modernization Wave
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="font-display font-bold text-base text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>1. Real-Time GST E-Invoicing &amp; E-Way Bill Generation</span>
                </div>
                <p className="text-sm text-slate-300">
                  With the Indian Government lowering B2B e-invoicing turnover thresholds, manual upload of JSON files to the IRP portal is no longer sustainable. Modern ERPs must communicate directly with the government NIC API to generate Invoice Reference Numbers (IRN) and QR codes in under 800 milliseconds upon invoice submission.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="font-display font-bold text-base text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>2. Shopfloor IoT Telemetry (Replacing Paper Slips)</span>
                </div>
                <p className="text-sm text-slate-300">
                  Instead of relying on workers to write down machine runtimes or output counts, modern factories install sub-GHz wireless LoRaWAN nodes and opto-isolated PLC tap gateways directly onto production machines. The ERP ingests live output pulses and downtime alarms automatically.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="font-display font-bold text-base text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>3. Offline-First Resilience for Tier-2/3 Industrial Corridors</span>
                </div>
                <p className="text-sm text-slate-300">
                  Industrial estates outside major metros frequently experience fiber broadband cuts or power interruptions. Cloud-only SaaS applications freeze immediately. Modern architectures utilize SQLite / IndexedDB edge caching with background delta sync, ensuring cashier terminals and dispatch gates continue functioning 100% offline.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="font-display font-bold text-base text-amber-300 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>4. Zero Per-User Licensing Tax</span>
                </div>
                <p className="text-sm text-slate-300">
                  Traditional software vendors penalize business growth by charging $50 to $150 per user per month. In an enterprise with 80 staff members across inventory, sales, procurement, and billing, licensing alone consumes ₹40–60 Lakhs every year. Custom-built proprietary ERP systems eliminate recurring user seat taxes entirely.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 5: COMPARISON TABLE */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-6 border-t border-white/10">
              5. Strategic Comparison: Legacy vs. Off-The-Shelf SaaS vs. Custom ERP
            </h2>
            <div className="overflow-x-auto pb-4">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/15 text-slate-400 font-mono">
                    <th className="py-3 px-4">Evaluation Criterion</th>
                    <th className="py-3 px-4 text-rose-300">Legacy Desktop (Tally/FoxPro)</th>
                    <th className="py-3 px-4 text-amber-300">Global SaaS (SAP/Oracle)</th>
                    <th className="py-3 px-4 text-emerald-300 bg-emerald-950/20">DASA TECH Custom ERP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-normal text-slate-300">
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Multi-Branch Real-Time Sync</td>
                    <td className="py-3.5 px-4 text-rose-400">Manual export/import</td>
                    <td className="py-3.5 px-4 text-emerald-400">Yes (Requires high bandwidth)</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">Yes (Sub-second delta sync)</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Shopfloor IoT &amp; PLC Telemetry</td>
                    <td className="py-3.5 px-4 text-rose-400">Not supported</td>
                    <td className="py-3.5 px-4 text-amber-400">Requires expensive middleware</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">Native hardware integration</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">GST E-Invoicing &amp; E-Way Sync</td>
                    <td className="py-3.5 px-4 text-amber-400">Semi-manual portal upload</td>
                    <td className="py-3.5 px-4 text-emerald-400">Yes (Requires custom connector)</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">Instant sub-800ms IRP API</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Offline Terminal Resilience</td>
                    <td className="py-3.5 px-4 text-emerald-400">Offline only (no sync)</td>
                    <td className="py-3.5 px-4 text-rose-400">Freezes without broadband</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">100% Offline-first edge engine</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Per-User Monthly Recurring Tax</td>
                    <td className="py-3.5 px-4 text-emerald-400">One-time / low</td>
                    <td className="py-3.5 px-4 text-rose-400">₹3,000 – ₹10,000 / user / mo</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">Zero user licensing fees</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-semibold text-white">Implementation Timeframe</td>
                    <td className="py-3.5 px-4 text-slate-400">Instant (barebones)</td>
                    <td className="py-3.5 px-4 text-rose-400">9 to 18 months</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-bold bg-emerald-950/20">4 to 8 weeks staged rollout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 6: CONCLUSION & CTA */}
          <section className="space-y-4">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight pt-6 border-t border-white/10">
              6. The DASA TECH Engineering Approach
            </h2>
            <p>
              Headquartered in <strong>Erode, Tamil Nadu</strong>, right in the industrial heartland of South India, DASA TECH engineers proprietary software and custom ERP architectures designed specifically for the operational realities of Indian businesses.
            </p>
            <p>
              We do not resell third-party templates. We build bespoke high-availability software with distributed PostgreSQL architectures, sub-second keyboard-first billing consoles, real-time GST engines, and integrated IoT telemetry that give business leaders 100% command over their operations.
            </p>
          </section>

        </div>

        {/* ─────────────────────────────────────────────────────────────
            3) CALL TO ACTION & CONSULTATION
        ─────────────────────────────────────────────────────────────── */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-600/15 to-purple-600/10 border border-amber-500/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Transform Your Business Architecture
            </span>
            <h3 className="font-display font-black text-2xl text-white">
              Planning to Modernize Your ERP System?
            </h3>
            <p className="text-sm text-slate-300 max-w-lg leading-relaxed">
              Schedule a confidential discovery discussion with Founder &amp; CEO Jeyawin D and our systems engineering team to scope a custom solution tailored to your operational bottlenecks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 text-white font-display font-bold text-sm shadow-lg shadow-orange-900/30 hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://signal.me/#u/dasatech.99"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-[#3A76F0] text-white font-mono text-xs font-bold transition flex items-center justify-center gap-2 border border-white/15"
            >
              <SignalBrandIcon className="w-4 h-4" />
              <span>Signal: @dasatech.99</span>
            </a>
          </div>
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
          <span className="text-slate-500">DASA TECH Engineering Journal</span>
        </div>

      </div>

    </article>
  )
}
