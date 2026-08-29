import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const STEPS = [
  'Discovery', 'Planning', 'Architecture', 'Design',
  'Development', 'Testing', 'Deployment', 'Support', 'Continuous Improvement'
]

export default function Process() {
  return (
    <section id="process" className="relative py-28 bg-void">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <span className="text-cyan font-mono text-xs tracking-widest uppercase">Development Process</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            A disciplined path from idea to production
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-electric via-violet to-cyan sm:-translate-x-1/2" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 }}
              className={`relative flex sm:justify-center mb-8 last:mb-0 ${
                i % 2 === 0 ? 'sm:pr-[52%]' : 'sm:pl-[52%]'
              }`}
            >
              <div className="absolute left-0 sm:left-1/2 top-1 w-8 h-8 rounded-full bg-grad-primary shadow-glow flex items-center justify-center text-xs font-mono sm:-translate-x-1/2">
                {i + 1}
              </div>
              <div className="glass rounded-xl px-6 py-4 ml-12 sm:ml-0">
                <span className="font-display font-medium">{step}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
