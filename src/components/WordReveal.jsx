import React from 'react'
import { motion } from 'framer-motion'

export default function WordReveal({
  text = '',
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.025,
  as: Component = 'p',
  once = true,
}) {
  const words = typeof text === 'string' ? text.split(' ') : []

  return (
    <Component className={`flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden pt-1 pb-2 -mb-1.5">
          <motion.span
            className={`inline-block ${wordClassName} pb-0.5`}
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: delay + idx * stagger,
              ease: [0.165, 0.84, 0.44, 1], // easeOutQuart
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  )
}
