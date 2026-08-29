import { motion } from 'framer-motion'
import {
  BrainCircuit, Building2, Boxes, Radio, Factory, Cloud,
  Layers, ShieldCheck, Users, Zap, Activity, Globe2
} from 'lucide-react'
import Reveal from './Reveal.jsx'

const ITEMS = [
  { icon: BrainCircuit, title: 'AI-Driven Innovation', desc: 'Generative AI and machine learning embedded into every solution we ship.', color: '#00E5FF' },
  { icon: Building2, title: 'Enterprise Architecture', desc: 'Systems designed to scale across departments, sites, and global subsidiaries.', color: '#8B3CFF' },
  { icon: Boxes, title: 'Custom ERP Development', desc: 'Built around how your business actually runs, not a rigid generic template.', color: '#10B981' },
  { icon: Radio, title: 'IoT Integrated Telemetry', desc: 'Live operational sensor data flowing directly into enterprise dashboards.', color: '#F59E0B' },
  { icon: Factory, title: 'Industry 4.0 SCADA', desc: 'Smart factories with connected SCADA PLCs and real-time production insight.', color: '#3B82F6' },
  { icon: Cloud, title: 'Cloud Native Infrastructure', desc: 'Architected for AWS, Azure, and Google Cloud Kubernetes from day one.', color: '#EC4899' },
  { icon: Layers, title: 'Scalable Microservices', desc: 'Architecture that grows with high transaction volume and global user load.', color: '#6366F1' },
  { icon: ShieldCheck, title: 'Cyber Security Standard', desc: 'Zero-trust security reviewed at every layer, from hardware edge to cloud.', color: '#10B981' },
  { icon: Users, title: 'Dedicated R&D Engineers', desc: 'A named senior engineering team assigned directly to your project sprints.', color: '#00E5FF' },
  { icon: Zap, title: 'Agile Rapid Sprints', desc: 'Short 2-week sprints, visible telemetry progress, and working code early.', color: '#F59E0B' },
  { icon: Activity, title: 'Real-Time Monitoring', desc: 'Live industrial telemetry dashboards monitoring operational uptime 24/7.', color: '#3B82F6' },
  { icon: Globe2, title: 'Global Multi-Site Sync', desc: 'Distributed database synchronization working seamlessly across time zones.', color: '#8B3CFF' }
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#05070F] text-white overflow-hidden border-t border-purple-900/30">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-grid-bg opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <Reveal>
          <span className="text-purple-400 font-mono text-xs tracking-widest uppercase font-bold">Why Choose DASA TECH</span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-white max-w-3xl">
            Engineering Excellence, Built to <span className="text-gradient">Enterprise Standards</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                whileHover={{ scale: 1.04, y: -8 }}
                className="group glass rounded-3xl p-7 border border-purple-500/30 hover:border-purple-400 bg-[#090D1A]/90 hover:bg-[#090D1A] transition-all duration-300 relative overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl"
              >
                {/* Glow backdrop on hover */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full opacity-0 group-hover:opacity-20 transition duration-500 blur-2xl pointer-events-none"
                  style={{ backgroundColor: '#8B3CFF' }}
                ></div>

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-purple-500/30 bg-purple-950/50"
                >
                  <Icon className="w-6 h-6 transition duration-300 text-purple-300" />
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-purple-300 transition duration-300">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
