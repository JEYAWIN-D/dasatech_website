import React from 'react'
import { Cpu, Wifi, Radio, Server, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import IotMeshSimulator from '../components/IotMeshSimulator'
import { useSEO } from '../hooks/useSEO'

export default function IotPage() {
  useSEO({
    title: 'Industrial IoT Development Services | DASA TECH',
    description: 'Custom IoT development company. We build Industrial IoT (IIoT) solutions, factory machine monitoring, real-time dashboards, and smart automation systems.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Industrial IoT Development",
      "provider": {
        "@type": "Organization",
        "name": "DASA TECH"
      },
      "serviceType": "Internet of Things",
      "description": "Industrial IoT solutions for factory machine monitoring, sensor integration, and real-time production analytics."
    }
  })

  const iotCapabilities = [
    {
      icon: Cpu,
      title: 'Embedded Hardware & Custom PCB Design',
      desc: 'Schematic capture, PCB layout, component selection, and prototype manufacturing for ESP32, STM32, and Nordic microcontrollers.'
    },
    {
      icon: Radio,
      title: 'LoRaWAN, NB-IoT & Cellular Telemetry',
      desc: 'Long-range low-power wireless sensor networks designed for smart agriculture, remote water management, and asset tracking.'
    },
    {
      icon: Server,
      title: 'Edge Gateway & Compute Nodes',
      desc: 'On-premise edge processors performing local telemetry buffering, protocol conversion, and offline failover storage.'
    },
    {
      icon: Activity,
      title: 'Real-Time MQTT & WebSockets Pipeline',
      desc: 'High-throughput time-series data streaming capable of ingesting millions of telemetry payloads into TimescaleDB and PostgreSQL.'
    },
    {
      icon: ShieldCheck,
      title: 'Secure OTA Firmware Management',
      desc: 'Encrypted Over-The-Air (OTA) firmware update orchestration with rollback protection and remote device provisioning.'
    },
    {
      icon: Wifi,
      title: 'Custom IoT Cloud Dashboards',
      desc: 'Interactive dashboards featuring real-time gauge widgets, historical charts, geofencing maps, and automated alert rules.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>FULL-STACK INTERNET OF THINGS (IOT)</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Industrial IoT', 'Development Services']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Bridge the physical and digital worlds. DASA TECH designs custom IoT hardware, embedded microcontrollers, wireless sensor networks, and cloud telemetry platforms to monitor and control assets reliably.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Build an IoT Solution
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    LoRaWAN Wireless Gateway Mesh
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  Mesh Ping: 8ms
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Connected Sensors</div>
                  <div className="text-xl font-bold text-slate-900">Multi-Node Mesh</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">MQTT Data Rate</div>
                  <div className="text-xl font-bold text-blue-600">Real-Time Streams</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>OTA Firmware Encryption:</span>
                  <span className="text-emerald-600 font-bold">AES-256 HSM Active</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Battery Lifespan:</span>
                  <span className="text-emerald-600 font-bold">5+ Years (Deep Sleep)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive IoT Sensor Mesh Telemetry Simulator */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Reveal>
          <IotMeshSimulator />
        </Reveal>
      </section>

      {/* Capabilities Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">IoT Hardware &amp; Firmware Stack</h2>
            <p className="text-slate-600">
              We design custom embedded electronics and scalable cloud infrastructure for industrial telemetry.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {iotCapabilities.map((item, idx) => {
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
                    <span>Hardware Ready</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Connect Your Physical Hardware Today</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Discuss your sensor, microcontroller, and cloud dashboard telemetry specs with our embedded engineers.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start IoT Project
          </PillButton>
        </div>
      </section>
    </div>
  )
}
