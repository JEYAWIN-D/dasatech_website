import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import EyebrowPill from './EyebrowPill'

const FAQS = [
  {
    q: 'How does DASA TECH approach custom ERP development versus off-the-shelf software?',
    a: 'Off-the-shelf software forces businesses to change their workflows to fit rigid software constraints. DASA TECH engineers custom ERP solutions around your exact operational processes, supply chain stages, and role hierarchies. Our platforms run on modern high-concurrency databases (PostgreSQL/Node.js) with 99.9% uptime guarantees, zero recurring per-user license fees, and complete client ownership of data.',
  },
  {
    q: 'Can your AI computer vision models run directly on-premise at our factory floor or warehouse?',
    a: 'Yes. For industrial manufacturing, textile quality inspection, and warehouse logistics, we deploy edge-optimized computer vision inference engines on dedicated on-prem hardware (e.g., NVIDIA Jetson / industrial IPCs). This ensures microsecond latency, zero cloud dependency, and total security for proprietary production processes.',
  },
  {
    q: 'What is the typical timeline and delivery roadmap for an enterprise project?',
    a: 'Timelines vary by architectural scope: a focused business management module or specialized IoT telemetry portal typically deploys in 4 to 8 weeks, while an end-to-end multi-facility ERP platform with AI vision takes 10 to 16 weeks. We work with iterative milestone deliveries, ensuring functional modules are tested and validated in live environments every 2 weeks.',
  },
  {
    q: 'How does hardware IoT telemetry integrate with our existing machinery and PLCs?',
    a: 'Our IoT engineering team interfaces directly with standard industrial protocols including Siemens S7, Modbus TCP/RTU, OPC UA, and custom RS485/LoRaWAN sensors. Data from legacy equipment is converted in real time into clean telemetry packets that feed directly into your ERP analytics dashboards.',
  },
  {
    q: 'What post-launch SLA, training, and maintenance support do you provide?',
    a: 'Every deployment includes comprehensive on-site and remote training for operators and administrators, complete technical documentation, and SLA-backed engineering support. We provide 24/7 telemetry monitoring, scheduled security patches, automated backups, and guaranteed response times.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx)
  }

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <EyebrowPill dotColor="bg-[#00D4FF]">FREQUENTLY ASKED QUESTIONS</EyebrowPill>
        <h2 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Clear Answers to Engineering Questions.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#9AA3B2]">
          Everything you need to know about our technology architecture, deployments, and partnership model.
        </p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-colors duration-200 overflow-hidden ${
                isOpen
                  ? 'bg-[#0F1117] border-[#00D4FF]/40 shadow-[0_0_20px_rgba(0,212,255,0.08)]'
                  : 'bg-[#0F1117]/60 border-white/5 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-display font-semibold text-base sm:text-lg text-white">
                  {faq.q}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'rotate-180 bg-[#00D4FF]/15 text-[#00D4FF]'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#9AA3B2] leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
