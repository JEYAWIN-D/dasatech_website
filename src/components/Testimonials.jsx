import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Reveal from './Reveal.jsx'

const TESTIMONIALS = [
  {
    quote: 'DASA TECH connected our production line sensors straight into our ERP. We can now see machine health and stock levels on one screen, in real time.',
    name: 'Operations Director',
    company: 'Textile Manufacturing Group'
  },
  {
    quote: 'The team scoped our hospital ERP around how our staff actually work, not a generic template. Onboarding took days, not months.',
    name: 'IT Head',
    company: 'Multi-Specialty Hospital'
  },
  {
    quote: 'Our warehouse automation project paid for itself within a quarter through fewer stock discrepancies and faster dispatch.',
    name: 'Supply Chain Manager',
    company: 'Retail Distribution Company'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const t = TESTIMONIALS[index]

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length)
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="relative py-28 bg-void">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal className="text-center">
          <span className="text-cyan font-mono text-xs tracking-widest uppercase">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">What our clients say</h2>
        </Reveal>

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-3xl p-10 sm:p-14 text-center"
            >
              <Quote className="mx-auto text-electric" size={32} />
              <p className="mt-6 text-lg sm:text-xl text-frost leading-relaxed">{t.quote}</p>
              <div className="mt-6 text-sm text-mist">
                <span className="text-frost font-medium">{t.name}</span> — {t.company}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:border-electric/40"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute -right-4 sm:-right-14 top-1/2 -translate-y-1/2 glass rounded-full p-3 hover:border-electric/40"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-grad-primary' : 'w-1.5 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
