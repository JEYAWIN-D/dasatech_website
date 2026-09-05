import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Briefcase, Users, Clock, Zap, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, Sliders, Laptop, Building2,
  TrendingDown, FileText, ChevronDown, Award, Sparkles, Monitor
} from 'lucide-react'
import { Link } from '../../Router'

export default function OfficeAutomationView() {
  const [meetingMode, setMeetingMode] = useState(false)
  const [occupancyActive, setOccupancyActive] = useState(true)
  const [activeWorkspaceZone, setActiveWorkspaceZone] = useState('boardroom')
  const [openFaq, setOpenFaq] = useState(null)

  const ZONES = {
    boardroom: {
      name: 'Executive Boardrooms & Conference Suites',
      tagline: 'Frictionless collaboration with automated AV & lighting presets',
      stats: '1-Touch Start • 0 Cable Chaos',
      features: [
        'Single-button "Start Meeting" mode lowers motorized projection screen, drops blackout blinds, and dims lights to 20%',
        'Integrated wireless conference microphone array with acoustic glass wall sound-masking',
        'Automatic Zoom / Microsoft Teams display launch eliminates the first 10 minutes of meeting setup delays',
        'Air Quality CO2 sensor automatically ramps fresh air ventilation when room occupancy exceeds 10 persons'
      ]
    },
    openDesk: {
      name: 'Open Workstation Bays & Hot-Desking',
      tagline: 'Daylight harvesting and zone-controlled task lighting',
      stats: '42% Lighting Savings • DALI-2 Bus',
      features: [
        'Daylight harvesting ambient light sensors dim perimeter LED troffers as outdoor sunlight increases',
        'Micro-zone PIR occupancy sensors extinguish overhead lighting in empty aisle clusters after 8 minutes',
        'Floor-level thermal mapping balances centralized VRF air-conditioning to eliminate localized hot/cold spots',
        'Smart hot-desking booking QR codes link directly to Google Workspace & Microsoft 365 calendars'
      ]
    },
    cabins: {
      name: 'Private Executive Cabins & Meeting Pods',
      tagline: 'Individual personalized climate and privacy on demand',
      stats: 'Zero Energy Waste when Vacant',
      features: [
        'Occupancy setback logic: When executives leave for lunch or travel, AC automatically setbacks to 27°C eco mode',
        'Switchable smart PDLC privacy glass instantly frosts from clear to opaque during private interviews',
        'Personalized RFID desk recognition remembers preferred desk height and task lighting color temperature',
        'Do Not Disturb (DND) status indicator outside cabin informs team members when meetings are in progress'
      ]
    },
    serverRoom: {
      name: 'Server Rooms & Network IDF Closets',
      tagline: '24/7 mission-critical thermal and moisture surveillance',
      stats: 'ASHRAE Compliant • Dual Precision AC',
      features: [
        'Precision temperature & humidity monitoring alerts IT administrators before rack temperatures exceed 24°C',
        'Water leak detection cable encircling CRAC / PAC air conditioner units triggers instant SMS sirens',
        'Automatic lead/lag dual AC changeover prevents compressor burnout in non-stop 24/7 server environments',
        'Biometric access control logs every server rack door opening with timestamped security camera snapshots'
      ]
    }
  }

  const zoneData = ZONES[activeWorkspaceZone]

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & CORPORATE BENTO GRID
          Theme: Executive Royal Violet (#7C3AED), Plum (#6D28D9), Crisp Lavender Slate
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-purple-50/80 via-[#FAF7FF] to-violet-50/40 border border-purple-200/90 shadow-xl">
        
        {/* Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-purple-100">
          <div className="max-w-3xl space-y-4">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Intelligent Workplace &amp; <span className="text-purple-700">Commercial Energy</span> Management
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Cut commercial electricity bills by up to 35% with multi-zone occupancy HVAC setback, 1-touch boardroom conference scenes, and biometric RFID turnstiles synced in real-time with your company HRMS payroll.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-purple-950/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Enterprise Energy Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917639930148"
              className="px-6 py-3.5 rounded-2xl bg-white border border-purple-300 text-purple-950 text-xs font-semibold hover:bg-purple-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-purple-700" />
              <span>Call Workplace Architect</span>
            </a>
          </div>
        </div>

        {/* 4-Tile Corporate Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8">
          
          {/* Tile 1: Boardroom Alpha Interactive Console (Spanning 7 Cols) */}
          <div className="md:col-span-7 rounded-3xl p-8 bg-white border-2 border-purple-300 shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-purple-100 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-purple-900 uppercase">Boardroom Alpha Automation Hub</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 font-bold">
                  Floor 4 Executive
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-slate-900">One-Touch Presentation &amp; AV Sync</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Stop losing the first 10 minutes of important client pitches fixing projector cables and lighting switches. One tap choreographs the entire room instantly.
                </p>
              </div>
            </div>

            {/* Interactive Switcher */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-950">CONFERENCE ROOM PRESET:</span>
                <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-bold ${
                  meetingMode ? 'bg-purple-700 text-white shadow-sm' : 'bg-slate-200 text-slate-700'
                }`}>
                  {meetingMode ? 'PRESENTATION MODE ACTIVE' : 'STANDBY MODE'}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <span className="text-slate-600">Projector screen, blinds &amp; lights:</span>
                <button
                  onClick={() => setMeetingMode(!meetingMode)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    meetingMode
                      ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                      : 'bg-purple-700 hover:bg-purple-800 text-white'
                  }`}
                >
                  {meetingMode ? 'End Meeting Mode' : 'Start Presentation Mode'}
                </button>
              </div>
            </div>

            <div className="text-[11px] font-mono text-purple-800 font-medium">
              {meetingMode
                ? 'Motorized screen lowered • Curtains closed • Downlights dimmed to 20% • Video conference ready'
                : '• Standard workspace illumination • Multi-zone high-efficiency AC standby'}
            </div>
          </div>

          {/* Tile 2: 8-Minute PIR Occupancy Energy Auto-Cutoff (Spanning 5 Cols) */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-white border border-purple-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-display font-black text-xl text-slate-900">8-Minute Inactivity Energy Auto-Cutoff</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                40% of commercial power is wasted air-conditioning empty meeting rooms and private cabins. Multi-element ceiling PIR sensors detect departure and drop HVAC into eco setback.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-2 font-mono text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Cabin 03 Occupancy Sensor:</span>
                <button
                  onClick={() => setOccupancyActive(!occupancyActive)}
                  className="px-2.5 py-1 rounded-lg bg-white text-purple-800 font-bold border border-purple-300 hover:bg-purple-50 cursor-pointer transition-colors"
                >
                  {occupancyActive ? 'Simulate Vacating' : 'Simulate Entering'}
                </button>
              </div>
              <div className={`p-2.5 rounded-xl text-center font-bold ${
                occupancyActive ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
              }`}>
                {occupancyActive
                  ? 'Active • 22.5°C Comfort Airflow Engaged'
                  : 'Vacant 8+ Mins • HVAC Setback to 27°C Eco Mode'}
              </div>
            </div>
          </div>

          {/* Tile 3: Biometric Turnstile Sync (Spanning 6 Cols) */}
          <div className="md:col-span-6 rounded-3xl p-6 bg-white border border-purple-200 shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h5 className="font-display font-black text-base text-slate-900">RFID Turnstiles &amp; HRMS Cloud Sync</h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Employee RFID badge taps at entry turnstiles automatically route power to designated floor bays and log attendance directly in company HRMS.
              </p>
            </div>
          </div>

          {/* Tile 4: Peak Demand Penalty Surcharge Limiter (Spanning 6 Cols) */}
          <div className="md:col-span-6 rounded-3xl p-6 bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-sm flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-amber-300 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h5 className="font-display font-black text-base text-white">Commercial Peak kVA Surcharge Defense</h5>
              <p className="text-xs text-purple-200 leading-relaxed">
                Smart staggered compressor starts eliminate concurrent central chiller startup surges, preventing costly commercial maximum demand penalties.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: MULTI-ZONE COMMERCIAL WORKSPACE ARCHITECTURE
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">Zone-Specific Engineering</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Engineered Across Every Commercial Department
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            From high-visibility executive boardrooms to mission-critical server IDF rooms, explore our tailored office automation modules.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Object.entries(ZONES).map(([k, z]) => (
            <button
              key={k}
              onClick={() => setActiveWorkspaceZone(k)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeWorkspaceZone === k
                  ? 'bg-purple-700 text-white border-purple-700 shadow-md shadow-purple-900/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
              }`}
            >
              {z.name.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Zone Detail Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-purple-700 uppercase">{zoneData.tagline}</span>
            <h3 className="font-display font-black text-2xl text-slate-900">{zoneData.name}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {zoneData.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100 text-xs font-medium text-slate-800 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
              <span>Standard Field Bus Protocol:</span>
              <strong className="text-slate-900">BACnet / IP • DALI-2 Lighting • Modbus RTU</strong>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-purple-700 to-indigo-800 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-purple-200 font-bold">Measured Impact</span>
            <h4 className="font-display font-black text-xl text-white">{zoneData.stats}</h4>
            <p className="text-xs text-purple-100 leading-relaxed font-normal">
              Eliminate redundant manual facilities management. Real-time sensor telemetry provides immediate energy visibility on floor-by-floor web dashboards.
            </p>
            <div className="space-y-2 text-xs font-mono text-purple-100 pt-2 border-t border-purple-600/60">
              <div>Seamless VRF / VRV Air-Conditioner integration</div>
              <div>Open API sync with Microsoft 365 &amp; Google</div>
              <div>Zero disruption weekend deployment options</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: ENTERPRISE COMMERCIAL ROI & FINANCIAL AUDIT TABLE
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">Enterprise Efficiency ROI</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Traditional Office vs DASA Connected Smart Campus
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            See how smart connected office automation cuts operating expenses, streamlines facilities, and pays for itself within 9 to 14 months.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-purple-200 bg-white shadow-sm">
          <table className="w-full text-xs font-mono text-left border-collapse">
            <thead>
              <tr className="bg-purple-50/80 border-b border-purple-200 text-purple-950 uppercase">
                <th className="py-4 px-5">Commercial Metric</th>
                <th className="py-4 px-5 text-rose-600">Traditional Unmanaged Office</th>
                <th className="py-4 px-5 text-purple-800">DASA Connected Smart Workplace</th>
                <th className="py-4 px-5 text-emerald-700">Financial Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  metric: 'Vacant Meeting Rooms',
                  trad: 'ACs and lights run 8–10 hours non-stop even when empty',
                  dasa: 'Ceiling PIR sensors drop cooling to 27°C eco setback after 8 mins',
                  roi: '35% Power Saved'
                },
                {
                  metric: 'Meeting Prep Overhead',
                  trad: '5–10 minutes wasted per meeting hunting remotes & projector cords',
                  dasa: '1-touch "Start Meeting" dims lights, drops screen & boots Zoom',
                  roi: '+15% Billable Hours'
                },
                {
                  metric: 'Maximum kVA Demand',
                  trad: 'Unstaggered compressor restarts trigger commercial utility penalties',
                  dasa: 'Intelligent load sequencer staggers chiller starts during peak hours',
                  roi: 'Zero Penalty Tariffs'
                },
                {
                  metric: 'Access & Attendance Logs',
                  trad: 'Legacy standalone biometric readers require manual USB exports',
                  dasa: 'Real-time wireless turnstiles auto-synced with company HRMS cloud',
                  roi: '100% Payroll Accuracy'
                }
              ].map((r, i) => (
                <tr key={i} className="hover:bg-purple-50/30 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">{r.metric}</td>
                  <td className="py-4 px-5 text-slate-500">{r.trad}</td>
                  <td className="py-4 px-5 text-purple-950 font-semibold bg-purple-50/40">{r.dasa}</td>
                  <td className="py-4 px-5 text-emerald-800 font-bold">{r.roi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: SCALABILITY TIERS, 4-PHASE ROADMAP & FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Enterprise Turnkey Deployment Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Modular corporate packages designed for fast-growing startup offices, commercial co-working spaces, and multi-floor IT parks.
          </p>
        </div>

        {/* 3 Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Startup & Boutique Office (5,000 sq.ft)',
              tag: 'TECH HUBS & CREATIVE STUDIOS',
              scope: [
                'Main boardroom 1-touch conference automation',
                'PIR occupancy setback for private cabins',
                'Smart entry biometric lock with mobile access',
                'Dedicated web energy management dashboard',
                '1-Day weekend installation with zero downtime'
              ],
              support: 'Ideal for 20 to 50 employees'
            },
            {
              name: 'Commercial Co-Working Space (20,000 sq.ft)',
              tag: 'MULTI-TENANT CO-WORKING OPERATORS',
              scope: [
                'Per-tenant sub-metering and billing automation',
                'RFID turnstile integration with hot-desking CRM',
                'Multi-room conference scheduler with digital door tablets',
                'Daylight harvesting perimeter lighting dimmers',
                'Automated common-area lighting & HVAC schedules'
              ],
              support: 'Payback period under 10 months'
            },
            {
              name: 'Enterprise Corporate Tower (50,000+ sq.ft)',
              tag: 'CORPORATE HEADQUARTERS & IT PARKS',
              scope: [
                'Full central BACnet / Modbus BMS chiller plant sync',
                'Automated peak kVA demand management',
                'Server room dual-AC failover & water leak protection',
                'ESG sustainability carbon reporting export',
                'Dedicated 24/7 facilities engineering SLA'
              ],
              support: 'Custom Building Management System (BMS)'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-purple-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-purple-100 text-purple-900 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-purple-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Corporate Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-purple-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider">Facilities Management FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Facilities Directors</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'Can DASA office automation integrate with our existing VRF/VRV air conditioning system?',
                a: 'Yes. We provide native hardware gateways compatible with major commercial VRF/VRV manufacturers including Daikin, Blue Star, Voltas, Carrier, Mitsubishi Electric, and Toshiba via Modbus RTU or BACnet/IP protocols.'
              },
              {
                q: 'Can our installation be performed over a weekend without disrupting business operations?',
                a: 'Absolutely. Over 90% of our commercial retrofits are carried out on Friday night through Sunday evening. On Monday morning, employees return to a fully commissioned, intelligent office with zero workday downtime.'
              },
              {
                q: 'How does the system prevent unauthorized access to server rooms and sensitive executive areas?',
                a: 'Access control is governed by cryptographic RFID, biometric fingerprints, or mobile BLE credentials. Every door opening is logged with real-time timestamps, and door-propped alarms trigger instant alerts if doors are left ajar.'
              },
              {
                q: 'Can we generate automated ESG carbon footprint reports for our corporate sustainability filings?',
                a: 'Yes. Our cloud facilities dashboard logs real-time kWh power savings and translates them directly into avoided metric tons of CO2 equivalent, allowing one-click export for corporate ESG sustainability disclosures.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-purple-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-purple-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-[13px] pt-1 pl-1">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  )
}
