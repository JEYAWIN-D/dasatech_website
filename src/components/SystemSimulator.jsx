import React, { useState } from 'react'
import { Terminal, Play, RotateCcw, CheckCircle2, Cpu, Factory, Database, Zap, Sparkles } from 'lucide-react'
import Reveal from './Reveal'
import TextLineReveal from './TextLineReveal'

export default function SystemSimulator() {
  const [activeTab, setActiveTab] = useState('smarthome')
  const [logs, setLogs] = useState([
    '[SYSTEM] Initializing DASA TECH Unified Simulator...',
    '[STATUS] Ready to execute simulated telemetry actions.'
  ])
  const [running, setRunning] = useState(false)

  const runSimulation = (actionName, newLogs) => {
    setRunning(true)
    setLogs(prev => [...prev, `[USER COMMAND] Triggering ${actionName}...`])
    
    setTimeout(() => {
      newLogs.forEach((log, index) => {
        setTimeout(() => {
          setLogs(prev => [...prev, log])
          if (index === newLogs.length - 1) setRunning(false)
        }, (index + 1) * 350)
      })
    }, 300)
  }

  const clearTerminal = () => {
    setLogs(['[SYSTEM] Logs cleared.', '[STATUS] Ready.'])
  }

  return (
    <section className="relative py-24 bg-[#05070F] text-white overflow-hidden border-t border-purple-900/30">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-purple-500/30 bg-purple-950/40 text-purple-300 text-xs font-mono mb-4 font-bold">
              <Terminal className="w-4 h-4 text-purple-400" />
              <span>Hands-On Live System Playground</span>
            </div>

            <TextLineReveal
              as="h2"
              lines={['Simulate DASA TECH', 'Engine Architecture']}
              className="text-3xl sm:text-5xl font-bold text-white font-display"
            />

            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-medium">
              Test live telemetry triggers, SCADA OEE calculations, and ERP batch lookups directly in the interactive simulator below.
            </p>
          </div>
        </Reveal>

        <div className="glass rounded-3xl p-6 lg:p-8 border border-purple-500/30 bg-[#090D1A]/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-white">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex rounded-2xl bg-[#05070F] p-1.5 border border-purple-500/30">
              <button
                onClick={() => setActiveTab('smarthome')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'smarthome' ? 'bg-gradient-to-r from-[#52058C] to-[#8B3CFF] text-white shadow-lg shadow-purple-900/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Smart Home</span>
              </button>

              <button
                onClick={() => setActiveTab('scada')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'scada' ? 'bg-gradient-to-r from-[#52058C] to-[#8B3CFF] text-white shadow-lg shadow-purple-900/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Factory className="w-3.5 h-3.5" />
                <span>SCADA PLC</span>
              </button>

              <button
                onClick={() => setActiveTab('erp')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition ${
                  activeTab === 'erp' ? 'bg-gradient-to-r from-[#52058C] to-[#8B3CFF] text-white shadow-lg shadow-purple-900/40' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>ERP Sync</span>
              </button>
            </div>

            {/* Actions Panel */}
            <div className="space-y-3 pt-2">
              {activeTab === 'smarthome' && (
                <>
                  <button
                    disabled={running}
                    onClick={() => runSimulation('Night Lighting Scene', [
                      '[BUS] Transmitting sub-GHz RF payload to lighting grid...',
                      '[LIGHTS] Dimmed Living Room & Hallway to 20% warm temperature.',
                      '[LOCKS] Biometric perimeter deadbolts locked.',
                      '[CONFIRM] Night Scene Activated (Latency: 4ms)'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Execute "Night Mode" Scene</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>

                  <button
                    disabled={running}
                    onClick={() => runSimulation('Climate Auto-Opt', [
                      '[SENSOR] Occupancy detected in Room 3 (Temp: 26.5°C).',
                      '[HVAC] Adjusting multi-zone damper to 22.0°C.',
                      '[CONFIRM] Target temperature reached (Power Factor: 0.98)'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Run Climate Auto-Opt</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>
                </>
              )}

              {activeTab === 'scada' && (
                <>
                  <button
                    disabled={running}
                    onClick={() => runSimulation('OEE Diagnostic', [
                      '[SCADA] Querying Siemens S7-1500 PLC via OPC UA...',
                      '[METRICS] Availability: 99.2% | Performance: 98.6% | Quality: 99.8%',
                      '[CALC] Overall Equipment Effectiveness (OEE) = 97.6%',
                      '[TELEMETRY] No mechanical vibration anomalies detected.'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Run PLC OEE Diagnostic</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>

                  <button
                    disabled={running}
                    onClick={() => runSimulation('Vibration Scan', [
                      '[SENSOR] Reading 3-axis accelerometer mesh on Motor #4...',
                      '[AI ML] Spectral analysis complete (FFT spectrum normal).',
                      '[HEALTH] Remaining Useful Life (RUL): 8,420 Hours.'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Trigger AI Predictive Maintenance Scan</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>
                </>
              )}

              {activeTab === 'erp' && (
                <>
                  <button
                    disabled={running}
                    onClick={() => runSimulation('Pharmacy Stock Audit', [
                      '[ERP DB] Querying PostgreSQL batch inventory table...',
                      '[QUERY] "Amoxicillin 500mg" -> Rack B4, Shelf 2.',
                      '[BATCH] Batch #AX-99201 | Expiry: 14 Months | Stock: 450 Units.',
                      '[GST BILLING] Auto-tax rates calculated (12% GST applied).'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Lookup Pharmacy Batch Stock</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>

                  <button
                    disabled={running}
                    onClick={() => runSimulation('EMS Load Shedding', [
                      '[EMS] High peak demand detected on Utility Meter #1 (185 kW).',
                      '[AUTOMATION] Triggering battery energy storage discharge (40 kW).',
                      '[RESULT] Peak load capped at 145 kW. Penalty tariff avoided.'
                    ])}
                    className="w-full p-3.5 rounded-2xl glass border border-purple-500/30 bg-purple-950/30 hover:border-purple-400 text-left font-mono text-xs text-slate-200 hover:text-white flex items-center justify-between group transition disabled:opacity-50 font-medium"
                  >
                    <span>Simulate EMS Peak Load Shedding</span>
                    <Play className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Terminal Console Column */}
          <div className="lg:col-span-7 rounded-2xl bg-[#03050B] border border-purple-500/30 p-5 font-mono text-xs h-[340px] flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between border-b border-purple-900/40 pb-3">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="ml-2 text-purple-300 font-bold text-[11px]">DASA_TECH_SYSTEM_CONSOLE</span>
              </div>
              <button
                onClick={clearTerminal}
                className="text-slate-400 hover:text-white transition flex items-center gap-1 text-[11px]"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>

            <div className="flex-grow my-3 overflow-y-auto space-y-2 text-slate-300 pr-2">
              {logs.map((log, i) => (
                <div
                  key={i}
                  className={`${
                    log.startsWith('[USER') ? 'text-purple-300 font-bold' : log.startsWith('[CONFIRM') || log.startsWith('[RESULT') ? 'text-emerald-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-purple-900/40 flex items-center gap-2 text-purple-400 font-bold">
              <span>root@dasatech:~#</span>
              <span className="w-2 h-4 bg-purple-400 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
