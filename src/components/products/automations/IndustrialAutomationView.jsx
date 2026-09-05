import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Factory, Cpu, Activity, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, Zap, Sliders, AlertTriangle,
  FileText, ChevronDown, Award, TrendingUp, Gauge, Radio
} from 'lucide-react'
import { Link } from '../../Router'

export default function IndustrialAutomationView() {
  const [motorRpm, setMotorRpm] = useState(1450)
  const [conveyorRun, setConveyorRun] = useState(true)
  const [eStopTriggered, setEStopTriggered] = useState(false)
  const [activeWorkflowStage, setActiveWorkflowStage] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)

  const WORKFLOW_STAGES = [
    {
      stage: '01',
      title: 'Digital Work-Order Encoding',
      subtitle: 'ERP Production Scheduling',
      desc: 'Work-orders generated in your ERP are encoded within 1 second onto industrial IP68 NFC tags mounted on production bins and material trolleys, completely eliminating lost paper route sheets.'
    },
    {
      stage: '02',
      title: 'Machine Operator Interlock',
      subtitle: 'Safety & Skill Authorization',
      desc: 'The operator taps the bin tag at the CNC lathe or textile loom. The machine controller unlocks ONLY if the operator is certified for this specific toolpath and recipe, guaranteeing zero scrap from operator error.'
    },
    {
      stage: '03',
      title: 'High-Frequency Real-Time Telemetry',
      subtitle: 'Vibration, Thermal & Current Ingest',
      desc: 'During the manufacturing cycle, current draw, power factor (PF 0.98), and spindle bearing vibration are monitored at 100 Hz. If micro-vibrations indicate tool wear, the system flags proactive maintenance.'
    },
    {
      stage: '04',
      title: 'Automated QC & ERP Dispatch',
      subtitle: 'Instant Ledger Update',
      desc: 'Upon cycle completion, machine telemetry automatically stamps the batch complete, updates raw material inventory in your ERP, and routes the bin to the designated packaging station.'
    }
  ]

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & SCADA SHOP-FLOOR CONTROL DECK
          Theme: Industrial Copper (#C2410C), Safety Amber (#EA580C), Pearlescent Steel
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-orange-50/80 via-[#FFFDF9] to-amber-50/40 border border-orange-200/90 shadow-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Industrial Automation &amp; <span className="text-orange-700">Plant Telemetry</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Per-machine energy metering, comprehensive motor and pump protection, safety interlocks, and touchless NFC shop-floor order tracking that routes production batches from cutting to packing with zero human error.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-orange-950/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Plant Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917639930148"
                className="px-6 py-3.5 rounded-2xl bg-white border border-orange-300 text-orange-950 text-xs font-semibold hover:bg-orange-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-orange-700" />
                <span>Call Factory Systems Engineer</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { val: '< 3s', lbl: 'Motor Dry-Run Auto Trip' },
                { val: '99.8%', lbl: 'Plant Machine Availability' },
                { val: 'Modbus', lbl: 'Universal PLC/SCADA Protocol' },
                { val: 'NFC', lbl: 'Touchless Work Order Routing' }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-orange-200 shadow-2xs">
                  <div className="font-display font-black text-lg text-orange-950">{m.val}</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live SCADA Machine Deck */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-orange-300 shadow-xl space-y-4">
              
              {/* Spindle Throttle */}
              <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-700 font-bold">CNC SPINDLE THROTTLE</span>
                  <span className="text-orange-800 font-bold">
                    {eStopTriggered ? '0 RPM (TRIPPED)' : `${motorRpm} RPM`}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="3000"
                  step="50"
                  disabled={eStopTriggered}
                  value={motorRpm}
                  onChange={(e) => setMotorRpm(Number(e.target.value))}
                  className="w-full accent-orange-700 cursor-pointer h-1.5 bg-orange-200 rounded-lg"
                />
              </div>

              {/* Conveyor Speed & NFC Routing */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] text-slate-500 block">PLC CONVEYOR</span>
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-900 font-bold">
                      {conveyorRun && !eStopTriggered ? '14 M/MIN' : 'STOPPED'}
                    </strong>
                    <button
                      onClick={() => setConveyorRun(!conveyorRun)}
                      disabled={eStopTriggered}
                      className="px-2 py-0.5 rounded bg-white border border-slate-300 text-[10px] text-slate-700 cursor-pointer"
                    >
                      Toggle
                    </button>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block">TOUCHLESS NFC</span>
                  <strong className="text-orange-800 font-bold block">Order #9240</strong>
                  <span className="text-[10px] text-slate-500">Routed to Station 4</span>
                </div>
              </div>

              {/* Emergency Stop Trip Button */}
              <div className="pt-1">
                <button
                  onClick={() => setEStopTriggered(!eStopTriggered)}
                  className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer shadow-md ${
                    eStopTriggered
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-rose-600 hover:bg-rose-700 text-white'
                  }`}
                >
                  {eStopTriggered ? 'Reset Emergency Interlock' : 'Simulate Safety E-Stop Trip'}
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: THE 4-STAGE TOUCHLESS NFC SHOP-FLOOR WORKFLOW
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">Zero-Paper Manufacturing</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Touchless NFC Manufacturing Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Eliminate misplaced paper job-cards, inaccurate shift handovers, and operator errors by integrating physical work orders with machine interlocks.
          </p>
        </div>

        {/* 4 Stepped Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STAGES.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-orange-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-orange-100 text-orange-950">
                    Stage {s.stage}
                  </span>
                  <span className="text-[10px] font-mono text-orange-700 font-bold uppercase">{s.subtitle}</span>
                </div>
                <h3 className="font-display font-black text-lg text-slate-900 mt-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{s.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-orange-800 font-bold pt-2 border-t border-slate-100">
                Automated Verification
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: MOTOR PROTECTION, ENERGY SUB-METERING & OEE METRICS
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">Equipment Reliability Science</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Sub-Second Motor Protection &amp; Per-Machine Energy Accounting
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Industrial motors represent 70% of factory electricity consumption and 80% of unexpected maintenance downtime. Protect your core assets.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-orange-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase">Motor Dry-Run &amp; Phase Failure Defense</span>
            <h3 className="font-display font-black text-2xl text-slate-900">
              Trip Within 2.8 Seconds to Preserve Heavy Stator Windings
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              When industrial supply voltages drop or dry-run conditions occur on water pumps and slurry motors, DASA industrial relays calculate current distortion and trip before thermal degradation destroys windings.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Single-phasing & phase reversal automatic interlock',
                'Per-machine true RMS kWh energy metering (Class 0.5 accuracy)',
                'Power factor (PF) continuous logging to eliminate utility penalties',
                'MODBUS RTU connection directly to central plant SCADA screen'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/50 border border-orange-100 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-orange-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-orange-800 to-amber-900 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-orange-200 font-bold">OEE Telemetry Standard</span>
            <h4 className="font-display font-black text-2xl text-white">96.5% Overall Equipment Effectiveness</h4>
            <p className="text-xs text-orange-100 leading-relaxed font-normal">
              Automate the gold-standard factory metric across your machinery without relying on manual operator clipboard logs.
            </p>
            <div className="space-y-2 text-xs font-mono text-orange-100 pt-2 border-t border-orange-700">
              <div>Availability (99.2% runtime vs planned shifts)</div>
              <div>Performance (97.8% cycle speed vs design max)</div>
              <div>Quality (99.5% good output passing automated QC)</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: INDUSTRIAL HARDWARE RUGGEDNESS & FACTORY FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">Industrial Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Tailored Industry 4.0 Solutions for Indian Mills &amp; Plants
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tested and certified for high-EMI factory environments, spinning mills, injection molding, CNC machine shops, and food packaging.
          </p>
        </div>

        {/* 3 Industrial Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Machine Telemetry Starter (10 Machines)',
              tag: 'CNC & PRECISION JOB SHOPS',
              scope: [
                'Per-machine digital energy meter (kWh + Power Factor)',
                'Spindle RPM throttle & current overload sensor',
                'Local RS-485 Modbus hub with web dashboard',
                'Automated shift production report export to PDF',
                'Dry-run and phase reversal trip relays'
              ],
              support: '2-Day Commissioning with Zero Line Stoppage'
            },
            {
              name: 'Connected Factory Suite (50 Machines)',
              tag: 'TEXTILE, MILLS & FABRICATION',
              scope: [
                'Touchless NFC job order bin tracking system',
                'Machine safety interlock authorization reader',
                'Central plant SCADA monitor for plant superintendent',
                'Bearing vibration FFT predictive maintenance alerts',
                'Automated ERP inventory sync via REST API'
              ],
              support: 'Dedicated Industrial Systems Engineer'
            },
            {
              name: 'Enterprise Smart Plant Suite (100+ Machines)',
              tag: 'MULTI-PLANT INDUSTRIAL ENTERPRISES',
              scope: [
                'Complete plant-wide Modbus / OPC-UA / MQTT integration',
                'Automated peak kVA load shedding with DG sync',
                'Dual-redundant on-premise SCADA server rack',
                'Computer vision automated part dimensional QC',
                '24/7 on-site factory breakdown response SLA'
              ],
              support: 'Full Plant SCADA & PLC Engineering'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-orange-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-orange-100 text-orange-950 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-orange-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Factory Site Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-orange-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-orange-700 uppercase tracking-wider">Plant Engineer FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Factory Managers</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'How does the telemetry node handle severe electrical noise and voltage spikes in our factory?',
                a: 'All DASA industrial I/O channels are opto-isolated up to 2.5 kV. Nodes feature built-in metal-oxide varistors (MOVs) and transient voltage suppression (TVS) diodes designed to withstand induction motor switching spikes and nearby welding arc noise.'
              },
              {
                q: 'Can this system connect with our existing Siemens or Delta PLCs?',
                a: 'Yes. Our edge gateways communicate natively over Modbus RTU (RS-485), Modbus TCP/IP, and OPC-UA. We interface directly with Siemens S7-1200/1500, Delta DVP, Schneider Modicon, and Mitsubishi FX-series PLCs.'
              },
              {
                q: 'What happens to production logging if the internet connection is disrupted?',
                a: 'All work-order records, machine OEE timestamps, and energy logs are stored locally on industrial-grade SLC flash memory inside the on-premise gateway. Data automatically synchronizes with your cloud ERP once broadband restores, with zero lost records.'
              },
              {
                q: 'How durable are the NFC tags attached to production bins and metal containers?',
                a: 'Our tags are encased in IP68 injection-molded PPS engineering plastic with anti-metal ferrite shielding. They withstand chemical washes, high-pressure hose-downs, oil exposure, and operating temperatures from -20°C up to +120°C.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-orange-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-orange-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
