import React from 'react'
import { Factory, Cpu, Gauge, Activity, ShieldAlert, Wrench, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import ScadaTelemetrySimulator from '../components/ScadaTelemetrySimulator'
import { useSEO } from '../hooks/useSEO'

export default function IndustrialAutomationPage() {
  useSEO({
    title: 'Industrial Automation Solutions | DASA TECH',
    description: 'Transform your manufacturing with Industry 4.0 smart factory solutions. We provide industrial automation software, machine monitoring, and production automation.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Industrial Automation Solutions",
      "provider": {
        "@type": "Organization",
        "name": "DASA TECH"
      },
      "serviceType": "Industrial Automation",
      "description": "Smart factory software and industrial automation systems for manufacturing plants."
    }
  })

  const capabilities = [
    {
      icon: Factory,
      title: 'PLC Programming & Control Systems',
      desc: 'Custom ladder logic, structured text, and function block programming for Siemens, Allen-Bradley, and Schneider PLCs.'
    },
    {
      icon: Gauge,
      title: 'SCADA & HMI Development',
      desc: 'High-performance real-time supervisory software with interactive process control graphics, alarm management, and historical logging.'
    },
    {
      icon: Activity,
      title: 'Industrial IoT Telemetry',
      desc: 'Deploy ruggedized edge gateways to capture sensor data across machine networks (Modbus, OPC UA, MQTT, PROFINET).'
    },
    {
      icon: ShieldAlert,
      title: 'Predictive Machine Maintenance',
      desc: 'Machine learning vibration and thermal analysis to detect component wear before catastrophic equipment failure occurs.'
    },
    {
      icon: Wrench,
      title: 'Robotics & Assembly Cell Integration',
      desc: 'Pick-and-place industrial robot kinematics programming, computer vision quality inspection, and automated sorting conveyors.'
    },
    {
      icon: Cpu,
      title: 'Smart Factory MES Dashboards',
      desc: 'Connect plant floor telemetry directly to ERP and cloud reporting dashboards for real-time Overall Equipment Effectiveness (OEE).'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Factory className="w-4 h-4 text-blue-600" />
              <span>INDUSTRY 4.0 ENGINEERING</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Industrial Automation', 'Solutions']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Empower manufacturing plants, energy facilities, and industrial operations with end-to-end automation, real-time telemetry, robotics integration, and predictive maintenance infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Consult Automation Engineers
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    Plant Telemetry Loop: Active
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  OEE Rate: 99.4%
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">PLC Protocol</div>
                  <div className="text-xl font-bold text-slate-900">Siemens OPC UA</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Sampling Rate</div>
                  <div className="text-xl font-bold text-blue-600">100Hz Sync</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Conveyor Vibration Index:</span>
                  <span className="text-emerald-600 font-bold">0.02 mm/s (Normal)</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>SCADA Cloud Mirror:</span>
                  <span className="text-emerald-600 font-bold">Synchronized (5ms Latency)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive SCADA & PLC Process Simulator */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Reveal>
          <ScadaTelemetrySimulator />
        </Reveal>
      </section>

      {/* Capabilities Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Industrial Automation Capabilities</h2>
            <p className="text-slate-600">
              From discrete machine cells to enterprise SCADA architectures, we engineer dependable automation.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl p-8 border border-slate-200 hover:border-blue-300 bg-white transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{cap.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{cap.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
                    <span>Industrial Grade</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Upgrade Your Factory Automation</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Contact our automation specialists for a comprehensive evaluation of your plant's SCADA, PLC, and telemetry workflows.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start Industrial Consultation
          </PillButton>
        </div>
      </section>
    </div>
  )
}
