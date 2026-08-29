import React from 'react'
import { Microscope, Lightbulb, Cpu, Orbit, Sparkles, Layers, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'

export default function RndPage() {
  const rndPillars = [
    {
      icon: Microscope,
      title: 'Emerging Tech Prototyping',
      desc: 'Rapid Proof-of-Concept (POC) hardware and software prototypes to test breakthrough technical concepts before full capital commitment.'
    },
    {
      icon: Cpu,
      title: 'Hardware-Software Co-Design',
      desc: 'Custom PCB design, embedded firmware programming (C/C++, Rust), and seamless cloud/mobile API tethering.'
    },
    {
      icon: Lightbulb,
      title: 'Custom Algorithm Optimization',
      desc: 'Mathematical modeling, DSP algorithm acceleration, and custom data structures designed to solve non-trivial computing bottlenecks.'
    },
    {
      icon: Orbit,
      title: 'Edge AI & Neural Research',
      desc: 'Investigating next-generation edge neural architectures and low-power inference models for industrial optimization.'
    },
    {
      icon: Sparkles,
      title: 'Client-Driven Innovation Lab',
      desc: 'Dedicated engineering task forces assigned to solve unique client engineering challenges that off-the-shelf software cannot address.'
    },
    {
      icon: Layers,
      title: 'System Architecture & Modeling',
      desc: 'Technical documentation, architecture schematics, and prototype validation to ensure maintainable software design.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Microscope className="w-4 h-4 text-blue-600" />
              <span>ADVANCED ENGINEERING LAB</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Research & Development', '(R&D) Innovation Lab']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              At DASA TECH, innovation is built into our core DNA. Our specialized R&D unit collaborates directly with clients to solve unsolved technical challenges and pioneer custom hardware-software integrations.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Initiate R&D Collaboration
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    Advanced R&D Innovation Lab
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  POC Stage: Active
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Validation Speed</div>
                  <div className="text-xl font-bold text-slate-900">Rapid Iteration</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Prototyping Cycle</div>
                  <div className="text-xl font-bold text-blue-600">&lt; 14 Days</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Hardware-Software Co-Design:</span>
                  <span className="text-emerald-600 font-bold">Custom Embedded Firmware</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Edge Neural Benchmarks:</span>
                  <span className="text-emerald-600 font-bold">Active Experimentation</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Core R&D Research Pillars</h2>
            <p className="text-slate-600">
              We turn cutting-edge engineering paradigms into reliable commercial products.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rndPillars.map((item, idx) => {
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
                    <span>Active Research</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Have a Breakthrough Problem to Solve?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Collaborate with our senior research engineers and systems architects to validate your next idea.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Schedule R&D Discovery Session
          </PillButton>
        </div>
      </section>
    </div>
  )
}
