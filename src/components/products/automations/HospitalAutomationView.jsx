import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Building2, Bell, BellRing, Activity, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, AlertTriangle, FileText, Download,
  Layers, Thermometer, Wind, ChevronDown, Award, Sparkles, HeartPulse
} from 'lucide-react'
import { Link } from '../../Router'

export default function HospitalAutomationView() {
  const [nurseAlertActive, setNurseAlertActive] = useState(false)
  const [activeZone, setActiveZone] = useState('ot')
  const [openFaq, setOpenFaq] = useState(null)

  const ZONES = {
    ot: {
      name: 'Operation Theatres (OT)',
      badge: 'STERILE CLASS 1000',
      dp: '+28.4 Pa',
      dpStatus: 'Sterile Positive Cascade OK',
      temp: '19.8°C',
      rh: '48% RH',
      gas: '4.3 Bar (O2 High Delivery)',
      hepa: '115 Pa (Filter Integrity 100%)',
      features: [
        'Hermetic cleanroom digital touch console with surgeon time clocks',
        'Continuous differential pressure monitoring with audio-visual alarms upon pressure loss',
        'Laminar airflow velocity sensor ensuring sterile air sweeping over operating table',
        'Touchless foot kick-sensors and wave-to-open automated hermetic sliding doors'
      ]
    },
    icu: {
      name: 'ICU & Isolation Wards',
      badge: 'CRITICAL INFECTION CONTROL',
      dp: '-12.5 Pa',
      dpStatus: 'Negative Pressure Isolation Active',
      temp: '22.0°C',
      rh: '50% RH',
      gas: '4.2 Bar (Medical Air & O2 Normal)',
      hepa: '120 Pa (Exhaust HEPA Clean)',
      features: [
        'Wireless Bedside IP Nurse Call cord with waterproof medical silicone seal',
        'Multi-parameter patient monitor alert relay pushes critical dysrhythmias to nursing console',
        'Medical Gas Pipeline System (MGPS) line pressure drop klaxon warning',
        'Switchable positive/negative pressure isolation chamber controls for infectious disease defense'
      ]
    },
    ward: {
      name: 'General Inpatient Wards',
      badge: 'PATIENT FALL PREVENTION',
      dp: 'Neutral',
      dpStatus: 'Natural Ward Air Circulation',
      temp: '24.0°C',
      rh: '52% RH',
      gas: '4.1 Bar (Pipeline Normal)',
      hepa: 'HVAC Dust Filtration Clean',
      features: [
        'Bedside silicone pull cords with sub-1.5 second alert dispatch to duty station',
        'Bathroom emergency pull cords located next to commodes for rapid patient fall assistance',
        'Tri-color corridor dome lamps (Green: Attending, Amber: Routine, Flashing Red: Emergency)',
        'Full-duplex master nursing station intercom with crystal-clear two-way voice'
      ]
    },
    gasPlant: {
      name: 'MGPS Medical Gas Manifold',
      badge: 'LIFE-CRITICAL CYLINDER BANK',
      dp: 'N/A',
      dpStatus: 'Ventilated Gas Store',
      temp: '26.0°C',
      rh: '45% RH',
      gas: '4.4 Bar (Primary Manifold)',
      hepa: 'Exhaust Louvers Clean',
      features: [
        'Automatic dual-manifold auto-changeover when primary cylinder bank depletes',
        'Digital telemetry of oxygen, nitrous oxide, and vacuum pressure levels to cloud dashboard',
        'Low-pressure klaxon siren alerts biomedical engineering before line pressure drops reach wards',
        'Emergency solenoid shutoff valves isolatable per floor wing during fire emergencies'
      ]
    }
  }

  const activeData = ZONES[activeZone]

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & CLINICAL LIFE-SAFETY COMMAND TOWER
          Theme: Fresh Mint (#059669), Sage (#10B981), Pure Clean White
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-emerald-50/80 via-[#F7FCF9] to-teal-50/40 border border-emerald-200/90 shadow-xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clinical Heading & Benefits */}
          <div className="lg:col-span-7 space-y-6">

            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Hospital Automation &amp; <span className="text-emerald-700">Patient Life-Safety</span> Systems
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Equip your hospital with IP-based Nurse Call Systems, Operation Theatre cleanroom differential pressure telemetry, and Medical Gas Pipeline (MGPS) failure alarms designed to eliminate medical response delays and guarantee 100% audit compliance.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-emerald-950/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Hospital NABH Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917639930148"
                className="px-6 py-3.5 rounded-2xl bg-white border border-emerald-300 text-emerald-950 text-xs font-semibold hover:bg-emerald-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-emerald-700" />
                <span>Call Medical Systems Engineer</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { val: '< 1.5s', lbl: 'Nurse Call Dispatch Guarantee' },
                { val: '±0.1 Pa', lbl: 'OT Cleanroom Pressure Precision' },
                { val: '24/7 MGPS', lbl: 'Medical Gas Line Alarms' },
                { val: '100% NABH', lbl: 'Encrypted Digital Audit Trail' }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-2xs">
                  <div className="font-display font-black text-lg text-emerald-950">{m.val}</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Nursing Duty Station Console */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-emerald-300 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-emerald-100 pb-3">
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs font-mono font-bold text-emerald-900 uppercase">Nursing Master Duty Desk</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  Floor 2 ICU Hub
                </span>
              </div>

              {/* Nurse Call Dispatch Simulator */}
              <div className={`p-4 rounded-2xl border transition-all space-y-3 ${
                nurseAlertActive
                  ? 'bg-rose-50 border-rose-300 shadow-sm'
                  : 'bg-emerald-50/50 border-emerald-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BellRing className={`w-4 h-4 ${nurseAlertActive ? 'text-rose-600 animate-bounce' : 'text-emerald-700'}`} />
                    <span className="text-xs font-mono font-bold text-slate-900">BEDSIDE NURSE CALL DISPATCH</span>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                    nurseAlertActive ? 'bg-rose-600 text-white animate-pulse' : 'bg-emerald-200 text-emerald-900'
                  }`}>
                    {nurseAlertActive ? 'EMERGENCY: BED 12' : 'ALL CLEAR (0)'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-slate-600">Simulate Bed 12 Call Cord:</span>
                  <button
                    onClick={() => setNurseAlertActive(!nurseAlertActive)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      nurseAlertActive
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                        : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                    }`}
                  >
                    {nurseAlertActive ? 'Acknowledge & Clear' : 'Pull Nurse Cord'}
                  </button>
                </div>
              </div>

              {/* OT Cleanroom & Gas Line Telemetry */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block">OT-1 CLEANROOM DP</span>
                  <span className="text-base font-bold text-slate-900">+28.4 Pa</span>
                  <span className="text-[10px] text-emerald-700 block font-semibold">Positive Cascade OK</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block">O2 GAS PIPELINE</span>
                  <span className="text-base font-bold text-slate-900">4.3 Bar</span>
                  <span className="text-[10px] text-emerald-700 block font-semibold">Zero Pressure Drop</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 text-center">
                NABH Digital Compliance: 100% incident logs auto-saved locally on secure hospital server
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: CLINICAL SUBSYSTEMS & STERILE ZONE ARCHITECTURE
          (Interactive Tabbed Hospital Topology: OT, ICU, Ward, Gas Plant)
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Sterile Environment Architecture</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Engineered for Zero-Tolerance Clinical Wings
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Each hospital department demands rigorous environmental controls. Select a clinical zone to inspect live parameters and life-safety modules.
          </p>
        </div>

        {/* Zone Selector */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Object.entries(ZONES).map(([k, z]) => (
            <button
              key={k}
              onClick={() => setActiveZone(k)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeZone === k
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-900/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300'
              }`}
            >
              {z.name}
            </button>
          ))}
        </div>

        {/* Active Zone Detail Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-1 rounded bg-emerald-200 text-emerald-900 font-bold text-[10px]">
                {activeData.badge}
              </span>
              <span className="text-emerald-700 font-bold">Zone Verified</span>
            </div>

            <h3 className="text-lg font-bold font-display text-slate-900">{activeData.name}</h3>

            <div className="space-y-2.5 pt-2 text-slate-700">
              <div className="flex justify-between border-b border-emerald-100 pb-1">
                <span>Differential Pressure:</span>
                <strong className="text-emerald-950 font-bold">{activeData.dp}</strong>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-1">
                <span>Cascade Status:</span>
                <strong className="text-emerald-700">{activeData.dpStatus}</strong>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-1">
                <span>Temperature Range:</span>
                <strong className="text-slate-900">{activeData.temp}</strong>
              </div>
              <div className="flex justify-between border-b border-emerald-100 pb-1">
                <span>Relative Humidity:</span>
                <strong className="text-slate-900">{activeData.rh}</strong>
              </div>
              <div className="flex justify-between">
                <span>Gas Pipeline Pressure:</span>
                <strong className="text-emerald-800">{activeData.gas}</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Life-Safety Modules Installed</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeData.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-emerald-900 text-white text-xs font-mono flex items-center justify-between shadow-sm">
              <span>Biomedical Maintenance Cycle:</span>
              <strong className="text-emerald-300 font-bold">Quarterly NABL-Traceable Sensor Calibration</strong>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: NABH & JCI ACCREDITATION COMPLIANCE MATRIX
          (Side-by-side standards checklist proving zero citations)
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Accreditation Preparedness</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            How DASA Clinical Automation Guarantees NABH Compliance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Eliminate non-compliance citations by digitizing all patient response timestamps, OT climate sterilization logs, and medical gas pipeline alarms.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-emerald-200 bg-white shadow-sm">
          <table className="w-full text-xs font-mono text-left border-collapse">
            <thead>
              <tr className="bg-emerald-50/80 border-b border-emerald-200 text-emerald-900 uppercase">
                <th className="py-4 px-5">Standard Code</th>
                <th className="py-4 px-5">NABH / JCI Requirement</th>
                <th className="py-4 px-5 text-rose-600">Manual / Legacy Hospital Risk</th>
                <th className="py-4 px-5 text-emerald-800">DASA Digital Automation System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                {
                  code: 'NABH PS.3',
                  req: 'Nurse Call Audible & Visual Alarm with Sub-3s Response',
                  risk: 'Manual paper registries prone to missed calls and unrecorded response times during shifts',
                  dasa: 'IP network push with sub-1.5s latency, automated duty nurse timestamp, and corridor dome LED flash'
                },
                {
                  code: 'NABH FMS.4',
                  req: 'Continuous Medical Gas Pipeline (MGPS) Pressure Monitoring',
                  risk: 'Manual pressure gauge inspections every 4 hours leave O2 drops undetected during peak OT surgeries',
                  dasa: '24/7 digital transducers trigger instant audible klaxons if O2/N2O drops below 4.0 Bar'
                },
                {
                  code: 'NABH HIC.2',
                  req: 'Operation Theatre Positive Differential Pressure Regulation',
                  risk: 'Unmonitored door openings cause airborne infection ingress and hospital-acquired infections (HAI)',
                  dasa: 'Continuous DP transducer regulates HVAC dampers to guarantee sterile positive cascade (+28 Pa)'
                },
                {
                  code: 'NABH COP.6',
                  req: 'Waterproof Bathroom Emergency Fall Response Pull Cords',
                  risk: 'Standard electrical switches short-circuit in wet shower environments or fail to alert staff',
                  dasa: 'IP67 sealed waterproof silicone pull cords trigger high-priority red strobe lights at nurse station'
                }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-emerald-50/30 transition-colors">
                  <td className="py-4 px-5 font-bold text-slate-900">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">{row.code}</span>
                  </td>
                  <td className="py-4 px-5 font-semibold text-slate-800">{row.req}</td>
                  <td className="py-4 px-5 text-slate-500">{row.risk}</td>
                  <td className="py-4 px-5 text-emerald-900 font-semibold bg-emerald-50/40">{row.dasa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: HOSPITAL ADMINISTRATOR ROI, DEPLOYMENT TIERS & FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Hospital Administrator ROI</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Turnkey Hospital Deployment Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Scalable hospital automation packages tailored to healthcare institutions from community clinics to 500-bed multispecialty hospitals.
          </p>
        </div>

        {/* 3 Hospital Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Community Hospital Pack (50 Beds)',
              tag: 'CLINICS & NURSING HOMES',
              scope: [
                'Wireless Nurse Call with bedside silicone cords',
                '2x Inpatient ward duty station master consoles',
                'Bathroom emergency pull cords for all toilets',
                'Tri-color corridor dome lamps for each room',
                'Local encrypted server with 1-yr log storage'
              ],
              support: '3-Day Non-Disruptive Ward Rollout'
            },
            {
              name: 'Multispecialty Hospital Suite (150-300 Beds)',
              tag: 'NABH ACCREDITED HOSPITALS',
              scope: [
                'Complete IP Nurse Call across all ICU & General wards',
                'Operation Theatre (OT) digital climate & pressure display',
                'Medical Gas Pipeline (MGPS) 24/7 manifold telemetry',
                'Automated NABH audit PDF export module',
                'Biomedical engineer central dashboard with SMS alerts'
              ],
              support: 'Full NABH Certification Documentation Support'
            },
            {
              name: 'Super-Specialty Medical City (500+ Beds)',
              tag: 'ENTERPRISE HEALTHCARE TOWERS',
              scope: [
                'Multi-building campus fiber optic nurse call ring',
                'Pneumatic chute station interlocks & security sync',
                'Dual-redundant server failover with automated PACS sync',
                'Laminar flow cleanroom OT suites with surgeon consoles',
                'Dedicated 24/7 biomedical on-site SLA maintenance'
              ],
              support: 'Custom Biomedical Engineering SLA'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-emerald-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-900 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Biomedical Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Hospital FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-emerald-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">Hospital Administrator FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Medical Directors</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'Can DASA Nurse Call Systems be installed in an active hospital without disturbing patients?',
                a: 'Yes. Our systems use medical-grade wireless telemetry (sub-GHz industrial frequency) alongside IP backbone cables. Inpatient beds can be retrofitted room-by-room in under 30 minutes without shutting down entire hospital wards.'
              },
              {
                q: 'How does the system ensure compliance during NABH and JCI inspections?',
                a: 'The system automatically logs every single bedside button press, nurse response timestamp, OT differential pressure reading, and gas line alert with tamper-proof cryptographic hashing. During an audit, you can generate 1-click compliant PDF reports for inspectors.'
              },
              {
                q: 'What failsafe protections exist if the hospital experiences a complete power failure?',
                a: 'Every nursing station console and critical bedside repeater incorporates internal lithium-iron-phosphate (LiFePO4) battery backup providing 8+ hours of uninterrupted life-safety communication until hospital diesel backup generators synchronize.'
              },
              {
                q: 'Are the bedside pull cords and buttons safe for chemical disinfection and sterilization?',
                a: 'Yes. All patient-facing call units are molded from antimicrobial, medical-grade silicone sealed to IP67 waterproof standards. They withstand daily wipe-downs with high-level disinfectants like isopropyl alcohol and quaternary ammonium compounds.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-emerald-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
