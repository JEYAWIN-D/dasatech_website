import React, { useState, useEffect } from 'react'
import {
  Smartphone,
  Globe,
  Zap,
  CheckCircle2,
  Server
} from 'lucide-react'

export default function AppEngineeringSimulator() {
  const [activePlatform, setActivePlatform] = useState('mobile')
  const [requestCount, setRequestCount] = useState(84120)
  const [apiLatency, setApiLatency] = useState(14)

  useEffect(() => {
    const interval = setInterval(() => {
      setRequestCount(prev => prev + Math.floor(Math.random() * 8) + 3)
      setApiLatency(Math.floor(11 + Math.random() * 6))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-md overflow-hidden select-none text-slate-900">
      
      {/* Simulator Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center shadow-xs">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <span>App Engineering Workspace</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono text-slate-500">Cross-Platform iOS &bull; Android &bull; Web</div>
          </div>
        </div>

        {/* Platform Selector */}
        <div className="flex gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 font-mono text-[11px]">
          {[
            { id: 'mobile', label: 'Flutter/RN' },
            { id: 'web', label: 'React / Next' },
            { id: 'api', label: 'API Microservices' }
          ].map(p => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                activePlatform === p.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Performance Strip */}
      <div className="grid grid-cols-3 gap-3 mb-6 font-mono">
        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div className="text-[10px] text-slate-500 uppercase">Frame Rate</div>
          <div className="text-sm sm:text-base font-bold text-emerald-600 mt-0.5 tabular-nums">
            60.0 FPS
          </div>
          <span className="text-[10px] text-slate-500">Zero Jitter UI</span>
        </div>

        <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 text-center">
          <div className="text-[10px] text-blue-600 uppercase">API Latency</div>
          <div className="text-sm sm:text-base font-bold text-blue-700 mt-0.5 tabular-nums">
            {apiLatency} ms
          </div>
          <span className="text-[10px] text-emerald-600 font-bold">&bull; Sub-20ms Edge</span>
        </div>

        <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <div className="text-[10px] text-slate-500 uppercase">Throughput</div>
          <div className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 tabular-nums">
            {requestCount.toLocaleString()}
          </div>
          <span className="text-[10px] text-slate-500">Processed Req</span>
        </div>
      </div>

      {/* Platform Screen Experience */}
      {activePlatform === 'mobile' && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-700 font-bold uppercase">
            <span>Mobile App Architecture (iOS &amp; Android)</span>
            <span className="text-[10px] text-emerald-600 font-semibold">Native Bridge Active</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="text-slate-900 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>State &amp; Offline Sync</span>
              </div>
              <div className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Redux Toolkit + SQLite local caching for zero-latency offline operation and background data sync.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="text-slate-900 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Biometric &amp; Push</span>
              </div>
              <div className="text-[11px] text-slate-600 leading-relaxed font-sans">
                FaceID / TouchID biometric auth, Firebase Cloud Messaging, and deep link routing integration.
              </div>
            </div>
          </div>
        </div>
      )}

      {activePlatform === 'web' && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono">
          <div className="flex items-center justify-between text-xs text-slate-700 font-bold uppercase">
            <span>Enterprise Web Portal (React / Next.js 14)</span>
            <span className="text-[10px] text-blue-600 font-semibold">Server Side Rendering</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="text-slate-900 font-bold flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>Sub-Second Page Loads</span>
              </div>
              <div className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Edge rendering with Incremental Static Regeneration (ISR) and optimized Tailwind CSS bundles.
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-2xs">
              <div className="text-slate-900 font-bold flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                <span>Real-Time WebSockets</span>
              </div>
              <div className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Bidirectional WebSocket state updates with automatic exponential backoff reconnection.
              </div>
            </div>
          </div>
        </div>
      )}

      {activePlatform === 'api' && (
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-700 font-bold uppercase">
            <span className="flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-blue-600" />
              <span>Microservice Endpoints</span>
            </span>
            <span className="text-[10px] text-emerald-600 font-semibold">All 200 OK</span>
          </div>

          <div className="space-y-1.5">
            {[
              { method: 'POST', ep: '/api/v1/auth/biometric-verify', status: '200 OK', time: '12ms' },
              { method: 'GET', ep: '/api/v1/erp/inventory/ledger-sync', status: '200 OK', time: '18ms' },
              { method: 'WS', ep: 'wss://telemetry.dasatech.com/stream', status: 'CONNECTED', time: '4ms' }
            ].map((route, i) => (
              <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                    {route.method}
                  </span>
                  <span className="text-slate-800 font-mono">{route.ep}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-600 font-bold">{route.status}</span>
                  <span className="text-slate-500">{route.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Status */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
        <span className="text-slate-700 font-semibold">Docker Containerized &bull; AWS / GCP Cloud</span>
        <span className="text-emerald-600 font-bold">&bull; Zero Downtime Deployments</span>
      </div>

    </div>
  )
}

