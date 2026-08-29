import React from 'react'
import { Zap, Activity, BatteryCharging, LineChart, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'

export default function EmsPage() {
  const emsFeatures = [
    {
      icon: Zap,
      title: 'Real-Time Power Quality & Telemetry',
      desc: 'Monitor voltage, current, power factor, harmonic distortion, and frequency across commercial and industrial microgrids in real-time.'
    },
    {
      icon: LineChart,
      title: 'Peak Demand & Tariff Optimization',
      desc: 'Predictive algorithms detect peak demand spikes and automatically orchestrate load shedding to minimize penalty tariffs.'
    },
    {
      icon: BatteryCharging,
      title: 'Renewable & Microgrid Integration',
      desc: 'Integrate solar PV, diesel generators, battery energy storage systems (BESS), and EV chargers into a single energy management dashboard.'
    },
    {
      icon: Activity,
      title: 'Carbon Footprint & ESG Analytics',
      desc: 'Automated greenhouse gas (GHG) emission reporting, carbon footprint calculation, and ESG audit compliance logs.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Fault & Phase Alerts',
      desc: 'Instant notifications and alerts for phase imbalances, transformer over-temperature, and power outages.'
    },
    {
      icon: Cpu,
      title: 'Smart Meter & Modbus Gateway Integration',
      desc: 'Compatible with industry standard smart meters over RS485 Modbus TCP/RTU.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Zap className="w-4 h-4 text-blue-600" />
              <span>SMART POWER &amp; SUSTAINABILITY INFRASTRUCTURE</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Energy Management', 'System (EMS) Telemetry']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              DASA TECH EMS enables commercial buildings, factories, and campuses to audit, optimize, and reduce electricity consumption and peak demand charges through real-time IoT energy telemetry.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Request Energy Audit
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    Grid Power Loop: 50.0Hz
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  Power Factor: 0.99
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Active Load</div>
                  <div className="text-xl font-bold text-slate-900">420 kW</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Monthly Savings</div>
                  <div className="text-xl font-bold text-emerald-600">25.4% Saved</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Smart Meter Sync:</span>
                  <span className="text-blue-600 font-bold">Modbus RS485 Active</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Harmonic Distortion (THD):</span>
                  <span className="text-emerald-600 font-bold">&lt; 1.8% (Optimal)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">EMS Platform Capabilities</h2>
            <p className="text-slate-600">
              Hardware-grade accuracy combined with predictive machine learning power analytics.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emsFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="rounded-3xl p-8 border border-slate-200 hover:border-blue-300 bg-white transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 font-display">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
                    <span>Active Telemetry</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Reduce Your Facility Power Costs</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Contact our power systems engineers for a detailed audit and deployment estimate.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start Energy Audit
          </PillButton>
        </div>
      </section>
    </div>
  )
}
