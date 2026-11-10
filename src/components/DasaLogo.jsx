import React from 'react'
import dasaWordmark from '../assets/dasa-wordmark.png'

/**
 * Official DASA Brand Logo Component
 * Horizontal Inline Layout: DASA ribbon wordmark + vertical divider + taglines on right.
 */
export default function DasaLogo({ size = 'md', className = '' }) {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
    xl: 'h-20 sm:h-24'
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={dasaWordmark}
        alt="DASA TECH"
        className={`${heights[size] || heights.md} w-auto object-contain shrink-0 drop-shadow-[0_2px_14px_rgba(235,110,40,0.35)]`}
      />
    </div>
  )
}
