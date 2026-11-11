import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Compass, Code2, Rocket, Headphones, ArrowRight } from 'lucide-react'
import EyebrowPill from './EyebrowPill'

const STEPS = [
  {
    step: '01',
    title: 'Discover & Architecture Scoping',
    subtitle: 'Deep-dive audit of business bottlenecks',
    description:
      'We audit legacy databases, operational bottlenecks, sensor telemetry requirements, and user role matrices to architect zero-compromise system specifications.',
    icon: Search,
    color: '#00D4FF',
  },
  {
    step: '02',
    title: 'Domain & Database Design',
    subtitle: 'High-availability schema & UI wireframes',
    description:
      'Designing normalized PostgreSQL relational schemas, edge IoT telemetry protocols, and intuitive high-throughput desktop/mobile dashboard UI workflows.',
    icon: Compass,
    color: '#00D4FF',
  },
  {
    step: '03',
    title: 'Engineered Development',
    subtitle: 'High-concurrency code & edge models',
    description:
      'Full-stack engineering utilizing modular microservices, resilient event streaming, AI computer vision inference models, and industrial PLC adapters.',
    icon: Code2,
    color: '#22FF9A',
  },
  {
    step: '04',
    title: 'Industrial Deployment & Testing',
    subtitle: 'Zero-downtime deployment pipelines',
    description:
      'Automated load testing, hardware integration validation on factory floors/campuses, and seamless data migration under stringent 99.9% uptime SLAs.',
    icon: Rocket,
    color: '#22FF9A',
  },
  {
    step: '05',
    title: 'Continuous Support & Scaling',
    subtitle: 'Telemetry monitoring & SLA guarantees',
    description:
      'Dedicated engineering support, real-time node telemetry health monitoring, proactive security updates, and scalable cloud/on-prem expansion.',
    icon: Headphones,
    color: '#00D4FF',
  },
]

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <EyebrowPill dotColor="bg-[#00D4FF]">PROVEN DELIVERY PIPELINE</EyebrowPill>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
          How We Turn Complexity Into Precision.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#9AA3B2] leading-relaxed">
          From operational architecture discovery to on-premise industrial deployment and continuous SLA monitoring.
        </p>
      </div>

      {/* Interactive Step Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
        {STEPS.map((step, idx) => {
          const Icon = step.icon
          const isActive = activeStep === idx

          return (
            <motion.div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              onMouseEnter={() => setActiveStep(idx)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between ${
                isActive
                  ? 'bg-gradient-to-b from-[#151821] to-[#0F1117] border-[#00D4FF]/60 shadow-[0_0_25px_rgba(0,212,255,0.15)]'
                  : 'bg-[#0F1117]/80 border-white/5 hover:border-white/15'
              }`}
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded-md"
                    style={{
                      color: step.color,
                      backgroundColor: `${step.color}15`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    STEP {step.step}
                  </span>
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      color: step.color,
                      backgroundColor: `${step.color}15`,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-base text-white mt-1 leading-snug">
                  {step.title}
                </h3>
                <p className="font-mono text-[11px] text-[#9AA3B2] mt-1">
                  {step.subtitle}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed">
                {step.description}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

