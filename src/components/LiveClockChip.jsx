import React, { useState, useEffect } from 'react'

export default function LiveClockChip({ className = '' }) {
  const [timeStr, setTimeStr] = useState('')
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'pm' : 'am'
      hours = hours % 12 || 12
      setTimeStr(`${hours}:${minutes}${ampm}`)

      const day = now.getDate()
      const month = now.toLocaleString('en-US', { month: 'short' })
      const year = now.getFullYear()
      setDateStr(`${day} ${month} ${year}`)
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-mono border border-slate-200 bg-white/90 shadow-sm text-slate-600 ${className}`}
    >
      <span className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider hidden sm:inline">IST</span>
      </span>

      <span className="w-[1px] h-3 bg-slate-200 hidden sm:inline"></span>

      <span className="font-bold text-slate-900 tabular-nums tracking-wide">
        {timeStr || '11:15am'}
      </span>

      <span className="text-slate-300 hidden lg:inline">•</span>

      <span className="text-slate-500 font-medium hidden lg:inline">
        {dateStr}
      </span>
    </div>
  )
}

