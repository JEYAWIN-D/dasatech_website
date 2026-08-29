import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  TrendingUp,
  Search,
  Target,
  MousePointerClick
} from 'lucide-react'

export default function DigitalMarketingSimulator() {
  const [activeChannel, setActiveChannel] = useState('seo')
  const [trafficCount, setTrafficCount] = useState(148290)
  const [roas, setRoas] = useState(4.8)
  const [keywordRanks] = useState([
    { kw: 'Enterprise Pharmacy ERP', rank: '#1', volume: '18.4k', diff: '+3' },
    { kw: 'Industrial SCADA Automation', rank: '#2', volume: '12.1k', diff: '+5' },
    { kw: 'LoRaWAN IoT Sensor Mesh', rank: '#1', volume: '24.6k', diff: '+2' },
    { kw: 'Smart Home Automation India', rank: '#3', volume: '31.2k', diff: '+4' }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficCount(prev => prev + Math.floor(Math.random() * 5) + 1)
      setRoas(prev => +(4.6 + Math.random() * 0.5).toFixed(2))
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-md overflow-hidden select-none text-slate-900">
      
      {/* Simulator Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-xs">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>Growth Telemetry Console</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-slate-500">Live ROI &amp; Conversion Analytics</div>
          </div>
        </div>

        {/* Channel Selector */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 font-mono text-[11px]">
          {['seo', 'ppc', 'cro'].map(ch => (
            <button
              key={ch}
              onClick={() => setActiveChannel(ch)}
              className={`px-2.5 py-1 rounded-lg font-bold uppercase transition cursor-pointer ${
                activeChannel === ch
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Live Metrics Bar */}
      <div className="grid grid-cols-3 gap-3 mb-6 font-mono">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div className="text-[10px] text-slate-500 uppercase">Monthly Traffic</div>
          <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 tabular-nums">
            {trafficCount.toLocaleString()}
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">&uarr; +42.6% MoM</span>
        </div>

        <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-center">
          <div className="text-[10px] text-blue-600 uppercase">Average ROAS</div>
          <div className="text-sm sm:text-base font-bold text-blue-700 mt-0.5 tabular-nums">
            {roas}x
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">&uarr; High-ROI Verified</span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div className="text-[10px] text-slate-500 uppercase">Conv. Rate</div>
          <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 tabular-nums">
            5.84%
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">&uarr; +1.9% Uplift</span>
        </div>
      </div>

      {/* Interactive Channel Canvas */}
      {activeChannel === 'seo' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-700 font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>High-Intent Keyword Rankings</span>
            </span>
            <span className="text-[10px] text-emerald-600 font-semibold">Google SERP Top 3</span>
          </div>

          <div className="space-y-2">
            {keywordRanks.map((k, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 3 }}
                className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center font-bold text-[11px]">
                    {k.rank}
                  </span>
                  <span className="text-slate-900 font-medium">{k.kw}</span>
                </div>
                <div className="flex items-center gap-3 text-[11px]">
                  <span className="text-slate-500">{k.volume}/mo</span>
                  <span className="text-emerald-600 font-bold">{k.diff}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {activeChannel === 'ppc' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-700 font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-blue-600" />
              <span>Active PPC Campaigns</span>
            </span>
            <span className="text-[10px] text-emerald-600">Low CPA Optimization</span>
          </div>

          <div className="space-y-2">
            {[
              { name: 'Google Search - Enterprise ERP Ads', spend: '₹45,000', leads: '184', cpa: '₹244' },
              { name: 'Meta Performance - IoT Hardware B2B', spend: '₹32,000', leads: '210', cpa: '₹152' },
              { name: 'LinkedIn Ads - C-Level Decision Makers', spend: '₹60,000', leads: '96', cpa: '₹625' }
            ].map((c, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-slate-900 font-medium">{c.name}</div>
                  <div className="text-[10px] text-slate-500">Spend: {c.spend} &bull; Leads: <strong className="text-blue-600">{c.leads}</strong></div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  CPA {c.cpa}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeChannel === 'cro' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-700 font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <MousePointerClick className="w-3.5 h-3.5 text-blue-600" />
              <span>Conversion Funnel Analytics</span>
            </span>
            <span className="text-[10px] text-blue-600">Live Stage Tracking</span>
          </div>

          <div className="space-y-2">
            {[
              { stage: '1. Ad Impression to Landing Visit', val: '74.2%', color: 'from-blue-500 to-indigo-600' },
              { stage: '2. Product Architecture Engagement', val: '46.8%', color: 'from-indigo-600 to-blue-600' },
              { stage: '3. Technical Inquiry Submitted', val: '18.4%', color: 'from-blue-600 to-cyan-600' },
              { stage: '4. Executive Contract Closed', val: '8.2%', color: 'from-cyan-600 to-emerald-600' }
            ].map((f, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center justify-between text-[11px] text-slate-700">
                  <span>{f.stage}</span>
                  <span className="font-bold text-slate-900">{f.val}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${f.color}`} style={{ width: f.val }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Status Bar */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="text-slate-700 font-semibold">Google &bull; Meta &bull; LinkedIn &bull; GA4 Tracked</span>
        <span className="text-emerald-600 font-bold">&bull; 100% Attribution Accuracy</span>
      </div>

    </div>
  )
}

