import React from 'react'
import { ShieldCheck, Cpu, Lightbulb, Thermometer, Mic, Lock, Zap, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import SmartHomeControlPanel from '../components/SmartHomeControlPanel'

export default function HomeAutomationPage() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Adaptive Smart Lighting',
      desc: 'Mood scenes, circadian rhythm alignment, motion-triggered path lighting, and high-efficiency dimming controlled via app or voice.'
    },
    {
      icon: Thermometer,
      title: 'Precision Climate Control',
      desc: 'Multi-zone HVAC orchestration, intelligent occupancy sensing, and energy-saving schedule learning.'
    },
    {
      icon: Lock,
      title: 'Biometric & Smart Access',
      desc: 'Facial recognition door entry, remote keyless lock control, real-time access logs, and guest pin management.'
    },
    {
      icon: ShieldCheck,
      title: 'AI Security & Surveillance',
      desc: 'Perimeter threat detection, 4K camera streams with localized computer vision alerts, and instant mobile notifications.'
    },
    {
      icon: Mic,
      title: 'Unified Voice & AI Hub',
      desc: 'Hands-free voice control powered by local edge AI processing for absolute privacy and sub-second response times.'
    },
    {
      icon: Zap,
      title: 'Smart Energy Optimization',
      desc: 'Real-time solar panel, battery, and appliance load monitoring to cut electricity costs by up to 35%.'
    }
  ]

  const specs = [
    'Sub-gigahertz mesh networking for total house coverage',
    'Offline-first edge gateway—works even during internet outages',
    'Custom glass touch keypads tailored to interior architecture',
    'Full integration with Apple HomeKit, Google Home, & Matter'
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span>NEXT-GEN SMART LIVING SOLUTIONS</span>
            </div>
            
            <TextLineReveal
              as="h1"
              lines={['Intelligent Home', 'Automation Systems']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              Transform residential spaces into responsive, high-tech environments. We design, engineer, and deploy custom smart home solutions integrating lighting, climate, security, and AI voice control into a single intuitive touch system.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Book a Smart Home Demo
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    Smart Home Mesh Gateway
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  Nodes: 48 Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">HVAC Zone Temp</div>
                  <div className="text-xl font-bold text-slate-900">22.5°C Eco</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Energy Savings</div>
                  <div className="text-xl font-bold text-emerald-600">32% Saved</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Wireless Protocol:</span>
                  <span className="text-blue-600 font-bold">Zigbee 3.0 / Matter</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Biometric Security:</span>
                  <span className="text-emerald-600 font-bold">Armed (Zero Latency)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Interactive Smart Home Control Panel Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Reveal>
          <SmartHomeControlPanel />
        </Reveal>
      </section>

      {/* Feature Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Complete Living Space Intelligence</h2>
            <p className="text-slate-600">
              Engineered with enterprise-grade reliability for luxury residences and smart commercial properties.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl p-8 border border-slate-200 hover:border-blue-300 bg-white transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{feat.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{feat.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
                    <span>Feature Active</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Technical Specs & Architecture */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="rounded-3xl p-8 lg:p-12 border border-slate-200 bg-slate-50 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-slate-900 shadow-sm">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs mb-4 inline-block font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Designed for Privacy &amp; Zero Failures</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Unlike off-the-shelf smart gadgets, DASA TECH deploys local edge processors so your smart home functions continuously even if your internet connection goes down. All voice and security data stays strictly on your local network.
              </p>
              <div className="space-y-3">
                {specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 border border-slate-200 bg-white font-mono text-xs space-y-4 shadow-2xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-blue-700 font-bold">
                <span>GATEWAY HARDWARE SPECS</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="space-y-3 text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span>Processor</span>
                  <span className="text-slate-900 font-semibold">Quad-Core ARM Cortex-A72</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span>Wireless Protocols</span>
                  <span className="text-blue-600 font-semibold">Zigbee 3.0, Z-Wave, Wi-Fi 6</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span>Local Encryption</span>
                  <span className="text-emerald-600 font-semibold">AES-256 Hardware HSM</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between">
                  <span>Power Fail Backup</span>
                  <span className="text-amber-600 font-semibold">Integrated LiFePO4 Battery</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Ready to Automate Your Property?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Get in touch with our smart home engineers to design a custom architectural automation plan tailored to your lifestyle.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Consult Smart Home Engineers
          </PillButton>
        </div>
      </section>
    </div>
  )
}
