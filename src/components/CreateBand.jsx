import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Cpu, Layers, Zap } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function CreateBand() {
  const pills = [
    {
      word: 'WE',
      bg: 'bg-gradient-to-br from-[#090D1A] to-[#12182D]',
      text: 'text-white border border-purple-500/30',
      icon: Sparkles,
    },
    {
      word: 'ENGINEER',
      bg: 'bg-gradient-to-r from-[#52058C] via-[#7B1FA2] to-[#8B3CFF]',
      text: 'text-white shadow-xl shadow-purple-900/40 border border-purple-400/50',
      icon: Cpu,
    },
    {
      word: 'INTELLIGENT',
      bg: 'bg-[#0A0A0A]',
      text: 'text-purple-300 border border-purple-500/20',
      icon: Layers,
    },
    {
      isArrow: true,
      bg: 'bg-gradient-to-r from-[#00E5FF] to-[#0088FF]',
      text: 'text-[#05070F]',
    },
    {
      word: 'FUTURE',
      bg: 'bg-purple-950/40',
      text: 'text-slate-200 border border-purple-500/30 hover:text-white',
      icon: Zap,
    },
  ]

  return (
    <section className="relative py-12 bg-[#05070F] overflow-hidden border-y border-purple-900/30 select-none">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
          {pills.map((pill, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 w-full"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -4 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className={`flex items-center justify-center gap-3 h-16 sm:h-24 rounded-full font-display font-black text-xl sm:text-2xl tracking-wider transition-all duration-300 cursor-pointer ${pill.bg} ${pill.text}`}
              >
                {pill.icon && <pill.icon className="w-5 h-5 opacity-80" />}
                {pill.isArrow ? (
                  <ArrowRight className="w-8 h-8 font-black" />
                ) : (
                  <span>{pill.word}</span>
                )}
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
