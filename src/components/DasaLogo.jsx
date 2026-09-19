import React from 'react'

/**
 * Official DASA Brand Logo Component
 * Horizontal Inline Layout: DASA ribbon wordmark + vertical divider + taglines on right.
 */
export default function DasaLogo({ size = 'md', showTaglines = true, className = '' }) {
  const heights = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-9',
    lg: 'h-10 sm:h-12',
    xl: 'h-14 sm:h-16'
  }

  const dividerHeights = {
    sm: 'h-5 sm:h-6',
    md: 'h-6 sm:h-7',
    lg: 'h-8 sm:h-9',
    xl: 'h-10 sm:h-12'
  }

  const tagSizes = {
    sm: 'text-[6px] sm:text-[7px]',
    md: 'text-[6.5px] sm:text-[8.5px]',
    lg: 'text-[9px] sm:text-[10.5px]',
    xl: 'text-[11px] sm:text-[13px]'
  }

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Left: DASA Ribbon Wordmark */}
      <img
        src={import.meta.env.BASE_URL + 'dasa-wordmark.png'}
        alt="DASA"
        className={`${heights[size] || heights.md} w-auto object-contain shrink-0`}
      />

      {showTaglines && (
        <>
          {/* Vertical Divider Line */}
          <div className={`${dividerHeights[size] || dividerHeights.md} w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent shrink-0`} />

          {/* Right: Taglines */}
          <div className="flex flex-col text-left justify-center leading-tight shrink-0">
            <div className={`flex items-center gap-1 font-mono tracking-[0.14em] sm:tracking-[0.2em] text-slate-200 uppercase font-semibold whitespace-nowrap ${tagSizes[size] || tagSizes.md}`}>
              <span>TECHNOLOGY</span>
              <span className="text-[#0066FF] font-bold">•</span>
              <span>INNOVATION</span>
              <span className="text-[#00C5B5] font-bold">•</span>
              <span>FUTURE</span>
            </div>
            <span className="text-[5.5px] sm:text-[7.5px] font-mono tracking-[0.18em] sm:tracking-[0.24em] text-indigo-300/80 uppercase font-medium mt-0.5 whitespace-nowrap">
              DASA IS THE SOLUTION
            </span>
          </div>
        </>
      )}
    </div>
  )
}
