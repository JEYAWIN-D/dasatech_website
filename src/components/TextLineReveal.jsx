import React from 'react'
import { motion } from 'framer-motion'

export default function TextLineReveal({
  lines = [],
  children,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.12,
  duration = 0.85,
  as: Component = 'div',
  once = true,
}) {
  // If children is provided as a string with newlines or single string, parse lines
  const computedLines = lines.length > 0 
    ? lines 
    : typeof children === 'string' 
      ? children.split('\n').filter(Boolean)
      : [children]

  return (
    <Component className={className}>
      {computedLines.map((lineItem, idx) => {
        const isObj = typeof lineItem === 'object' && lineItem !== null && 'text' in lineItem
        const text = isObj ? lineItem.text : lineItem
        const customClass = isObj ? lineItem.className : ''

        return (
          <span key={idx} className="block overflow-hidden pt-1 pb-2.5 -mb-2">
            <motion.span
              className={`block ${lineClassName} ${customClass} pb-1`}
              initial={{ y: '115%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once, amount: 0.2 }}
              transition={{
                duration,
                delay: delay + idx * stagger,
                ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
              }}
            >
              {text}
            </motion.span>
          </span>
        )
      })}
    </Component>
  )
}
