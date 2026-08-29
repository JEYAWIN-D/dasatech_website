import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const CASES = [
  {
    problem: 'A textile manufacturer had no visibility into machine downtime or production output until the next morning.',
    solution: 'IoT sensors on every loom feeding a live dashboard inside their ERP, with automated alerts on stoppage.',
    tech: ['ESP32', 'MQTT', 'Custom ERP', 'React Dashboard'],
    result: '31% reduction in unplanned downtime'
  },
  {
    problem: 'A hospital group managed patient records, billing, and inventory across three disconnected systems.',
    solution: 'A unified Hospital ERP covering admissions, billing, pharmacy, and inventory in one platform.',
    tech: ['Custom ERP', 'Cloud Hosting', 'Role-Based Access'],
    result: '40% faster patient discharge processing'
  },
  {
    problem: 'A logistics company tracked vehicles and cold storage manually across spreadsheets.',
    solution: 'GPS and temperature-sensor fleet tracking integrated with dispatch and inventory management.',
    tech: ['GPS', 'IoT Sensors', 'Mobile App', 'Cloud IoT'],
    result: '99.2% cold-chain compliance'
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <span className="text-cyan font-mono text-xs tracking-widest uppercase">Case Studies</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold max-w-2xl">
            Real problems, engineered solutions
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {CASES.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 flex flex-col gap-5 hover:border-electric/40 transition-colors"
            >
              <div>
                <div className="text-xs uppercase tracking-widest text-mist font-mono mb-2">Problem</div>
                <p className="text-sm text-frost leading-relaxed">{c.problem}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-mist font-mono mb-2">Solution</div>
                <p className="text-sm text-frost leading-relaxed">{c.solution}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/5 border border-white/10 px-3 py-1 text-mist">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-4 border-t border-white/10">
                <span className="text-gradient font-display font-semibold">{c.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
