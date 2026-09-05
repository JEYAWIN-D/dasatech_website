import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Snowflake, Thermometer, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, Zap, AlertTriangle, FileText,
  Download, ChevronDown, Award, TrendingDown, Clock, Activity
} from 'lucide-react'
import { Link } from '../../Router'

export default function ColdStorageAutomationView() {
  const [compressorTripped, setCompressorTripped] = useState(false)
  const [chamber1Temp, setChamber1Temp] = useState(-19.4)
  const [activePillar, setActivePillar] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)

  const PILLARS = [
    {
      title: 'Dual-Sensor RTD PT100 Redundancy',
      stat: '±0.1°C Calibrated Precision',
      badge: 'ZERO BLIND SPOTS',
      desc: 'Every cold chamber incorporates dual industrial RTD PT100 probes mounted at high and low air stratification levels. If one probe suffers mechanical or line damage, the secondary sensor takes over instantly without blind spots.'
    },
    {
      title: '8-Second DG Genset Auto-Start Interlock',
      stat: '< 8s Switchover Speed',
      badge: 'THERMAL INERTIA DEFENSE',
      desc: 'Main power utility cuts automatically trigger the standby diesel generator starter within 8 seconds before thermal inertia can decay, preventing catastrophic temperature spikes in high-value vaccine and biological storage.'
    },
    {
      title: 'Door-Ajar Siren & Air Curtain Interlock',
      stat: '90-Second Strobe Warning',
      badge: 'HUMIDITY INGRESS SHIELD',
      desc: 'Insulated cold-room doors left cracked open during fork-truck loading trigger acoustic sirens and flashing strobe lights after 90 seconds. Magnetic switches automatically activate air curtains to prevent ambient warm air entry.'
    },
    {
      title: 'HACCP & FSSAI Digital Audit Export',
      stat: '100% Tamper-Proof Logs',
      badge: 'EXPORT CERTIFICATION READY',
      desc: 'Exporting perishables (grapes, seafood, frozen meats) requires continuous unbroken cold-chain documentation. Generate certified, verifiable PDF compliance certificates for international port customs and insurance underwriters.'
    }
  ]

  const handleTripTest = () => {
    setCompressorTripped(!compressorTripped)
    if (!compressorTripped) {
      setChamber1Temp(-17.6)
    } else {
      setChamber1Temp(-19.4)
    }
  }

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & CRYOGENIC MULTI-CHAMBER RADAR
          Theme: Polar Glacial Cyan (#0284C7), Frost Ice Blue (#38BDF8), Crisp Snow
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-sky-50/80 via-[#F7FBFE] to-cyan-50/40 border border-sky-200/90 shadow-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Cold Storage Automation &amp; <span className="text-sky-700">Zero-Spoilage</span> Telemetry
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Protect crores worth of perishable pharmaceuticals, fruits, and frozen foods with multi-chamber precision RTD PT100 temperature monitoring, automatic standby compressor failover, and ammonia (NH3) gas leak exhaust interlocks.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-sky-950/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Cold Storage Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917639930148"
                className="px-6 py-3.5 rounded-2xl bg-white border border-sky-300 text-sky-950 text-xs font-semibold hover:bg-sky-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-sky-700" />
                <span>Call Cryogenic Systems Engineer</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { val: '±0.1°C', lbl: 'Dual RTD PT100 Precision' },
                { val: '< 8s', lbl: 'DG Generator Auto-Start' },
                { val: '0.0 PPM', lbl: 'Ammonia Leak Safety Exhaust' },
                { val: 'HACCP', lbl: 'Cloud Export Audit Ledger' }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-sky-200 shadow-2xs">
                  <div className="font-display font-black text-lg text-sky-950">{m.val}</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Dual-Chamber Radar */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-sky-300 shadow-xl space-y-4">
              
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                {/* Chamber 1 Deep Freeze */}
                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block font-semibold">CHAMBER 1 (FREEZER)</span>
                  <strong className="text-2xl font-black text-sky-800 block">{chamber1Temp}°C</strong>
                  <span className="text-[10px] text-emerald-700 block font-bold">Sub-Zero Safe</span>
                </div>

                {/* Chamber 2 Chiller */}
                <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block font-semibold">CHAMBER 2 (CHILLER)</span>
                  <strong className="text-2xl font-black text-slate-900 block">+2.4°C</strong>
                  <span className="text-[10px] text-sky-700 block font-bold">Dairy / Fruit OK</span>
                </div>
              </div>

              {/* Compressor Failover Simulator */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">COMPRESSOR RACK:</span>
                  <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                    compressorTripped
                      ? 'bg-amber-100 text-amber-900'
                      : 'bg-emerald-100 text-emerald-900'
                  }`}>
                    {compressorTripped ? 'STANDBY 2 ACTIVE' : 'PRIMARY 1 ACTIVE'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-500">Test Primary Fault:</span>
                  <button
                    onClick={handleTripTest}
                    className="px-3 py-1 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    {compressorTripped ? 'Reset Primary' : 'Simulate Fault'}
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-sky-100/80 border border-sky-300 text-xs font-mono text-sky-950 text-center font-medium">
                {compressorTripped
                  ? 'Primary Compressor Tripped • Auto-switched to Standby Compressor in 1.4s'
                  : 'Dual Compressors Balanced • Continuous 24/7 lead/lag cycle active'}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: THE 4-PILLAR ZERO-SPOILAGE DEFENSE SHIELD
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">Multi-Layered Cargo Protection</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            The 4-Pillar Zero-Spoilage Defense Shield
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            A single refrigeration failure can spoil crores of rupees worth of inventory within hours. Explore our 4 independent defense layers.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-sky-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-sky-100 text-sky-950">
                    Pillar 0{i + 1}
                  </span>
                  <span className="text-[10px] font-mono text-sky-700 font-bold uppercase">{p.badge}</span>
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mt-2">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{p.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-sky-800 font-bold pt-2 border-t border-slate-100">
                {p.stat}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: ENERGY OPTIMIZATION & DEFROST MANAGEMENT
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">Refrigeration Power Efficiency</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Demand Defrost Scheduling &amp; Compressor Runtime Balancing
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Refrigeration accounts for up to 80% of a cold facility's electricity expenses. Save 22% power by eliminating blind timer defrost cycles.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-sky-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase">Demand-Driven Defrost Manager</span>
            <h3 className="font-display font-black text-2xl text-slate-900">
              Only Defrost When Evaporator Frost Actually Forms
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Conventional cold storage units fire electric defrost heaters every 6 hours on dumb timers, dumping heat into the cold room even when coils are clean. DASA monitors evaporator temperature differential to trigger defrost only when necessary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                '22% lower electric defrost heater power consumption',
                'Compressor lead/lag sequencer balances runtime hours',
                'Ammonia (NH3) gas leak detector auto-starts exhaust fans',
                'Instant SMS and phone call alerts to warehouse manager'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-sky-50/50 border border-sky-100 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-sky-800 to-blue-900 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-sky-200 font-bold">5,000 MT Cold Store Case Study</span>
            <h4 className="font-display font-black text-2xl text-white">₹3,20,000 Monthly Power Savings</h4>
            <p className="text-xs text-sky-100 leading-relaxed font-normal">
              By combining demand-defrost logic with automated staggered compressor startups, large multi-chamber facilities dramatically cut peak utility demand.
            </p>
            <div className="space-y-2 text-xs font-mono text-sky-100 pt-2 border-t border-sky-700">
              <div>Eliminates 4 redundant heater cycles daily</div>
              <div>Avoids maximum demand utility surcharge tariffs</div>
              <div>Full telemetry investment amortized in 8 months</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: REGULATORY EXPORT COMPLIANCE, PACKAGES & FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">Cold Chain Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Tailored Cold Storage Automation Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Turnkey telemetry installations for agricultural pack-houses, commercial cold storage units, seafood deep freezers, and pharmaceutical distribution centers.
          </p>
        </div>

        {/* 3 Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Agricultural Pack-House Pack',
              tag: 'FRUITS, VEGETABLES & POTATO WAREHOUSES',
              scope: [
                'Dual RTD PT100 temperature sensors per chamber',
                'Door-ajar acoustic warning strobe & air curtain link',
                'Local telemetry gateway with web facilities HUD',
                'DG genset auto-start sync relay (< 8s)',
                'Automated daily temperature PDF log generation'
              ],
              support: '2-Day Non-Disruptive Facility Retrofit'
            },
            {
              name: 'Commercial Multi-Chamber Suite',
              tag: 'MULTI-TEMPERATURE COMMERCIAL COLD STORES',
              scope: [
                'Up to 8 chambers: Freezer (-20°C) & Chiller (+2°C)',
                'Ammonia (NH3) gas leak detector with exhaust interlock',
                'Demand defrost optimizer saving 22% electricity',
                'Dual compressor lead/lag automated balancer',
                'SMS & voice call automated emergency broadcast'
              ],
              support: 'Full Ammonia Safety Interlock Commissioning'
            },
            {
              name: 'Pharma Cold Chain & Vaccine Hub',
              tag: '2°C TO 8°C CRITICAL BIOLOGICAL STORAGE',
              scope: [
                'FDA 21 CFR Part 11 & WHO compliant encrypted logs',
                'NABL-certified calibrated Class A PT100 sensors',
                'Dual-redundant temperature transmitters per chamber',
                'Audit log digital signature verification export',
                'Dedicated 24/7 cryogenic engineer breakdown SLA'
              ],
              support: 'Validated Regulatory Audit Certification'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-sky-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-sky-100 text-sky-950 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Cold Chain Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Cold Storage FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-sky-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">Cold Chain Operator FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Facility Directors</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'How does the ammonia (NH3) gas detection system protect our workers and neighboring areas?',
                a: 'Industrial electrochemical ammonia sensors trigger at 25 PPM (warning) and 50 PPM (danger). At 50 PPM, the system automatically shuts down refrigeration liquid solenoid valves, trips emergency exhaust ventilation fans, and broadcasts sirens to evacuate staff.'
              },
              {
                q: 'Are temperature logs accepted by insurance companies in the event of product spoilage claims?',
                a: 'Yes. All records are stored with cryptographic timestamps and cannot be edited or tampered with retroactively. Insurance underwriters and FSSAI/HACCP auditors accept DASA compliance certificates as legally admissible proof of temperature diligence.'
              },
              {
                q: 'What happens if our primary screw compressor trips during the night when no engineer is on site?',
                a: 'The system detects the compressor motor trip via auxiliary contacts, checks pressure conditions, and automatically commands the secondary standby compressor to start within 90 seconds, simultaneously dispatching urgent SMS alerts to the maintenance team.'
              },
              {
                q: 'Can we monitor chamber temperatures and door openings remotely from a smartphone?',
                a: 'Yes. Facility owners and operators have 24/7 real-time access via our secure mobile app and web dashboard, showing live chamber temperatures, door open/close logs, compressor load status, and generator power feed.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-sky-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-sky-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
