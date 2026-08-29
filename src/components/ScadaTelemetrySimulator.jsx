import React, { useState, useEffect } from 'react'
import { Factory, Play, Pause, CheckCircle2 } from 'lucide-react'

export default function ScadaTelemetrySimulator() {
  const [isRunning, setIsRunning] = useState(true)
  const [motorRpm, setMotorRpm] = useState(1480)
  const [linePressure, setLinePressure] = useState(6.4)
  const [vibrationIndex, setVibrationIndex] = useState(0.024)
  const [oilTemp, setOilTemp] = useState(54.2)
  const [activePlc, setActivePlc] = useState('siemens')
  const [emergencyValveOpen, setEmergencyValveOpen] = useState(false)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setMotorRpm(Math.floor(1475 + Math.random() * 15))
      setLinePressure(parseFloat((6.35 + Math.random() * 0.15).toFixed(2)))
      setVibrationIndex(parseFloat((0.022 + Math.random() * 0.005).toFixed(3)))
      setOilTemp(parseFloat((54.0 + Math.random() * 0.6).toFixed(1)))
    }, 900)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-md space-y-8 relative overflow-hidden text-slate-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-cyan-700 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Factory className="w-4 h-4 text-cyan-600" />
            <span>INTERACTIVE INDUSTRIAL SCADA &amp; PLC PROCESS CONTROLLER</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            Plant Telemetry &amp; Supervisory Control Loop
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            <span>OPC UA Synchronized (100Hz)</span>
          </div>
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer ${
              isRunning
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-amber-50 border-amber-200 text-amber-700'
            }`}
          >
            {isRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
            <span>{isRunning ? 'POLLING ACTIVE' : 'HOLD'}</span>
          </button>
        </div>
      </div>

      {/* PLC Controller Selector */}
      <div className="flex flex-wrap gap-2.5">
        {[
          { id: 'siemens', name: 'Siemens S7-1500 Controller (PROFINET)' },
          { id: 'ab', name: 'Allen-Bradley ControlLogix (EtherNet/IP)' },
          { id: 'schneider', name: 'Schneider Modicon M580 (Modbus TCP)' }
        ].map((plc) => (
          <button
            key={plc.id}
            onClick={() => setActivePlc(plc.id)}
            className={`px-4 py-2 rounded-2xl font-mono text-xs font-bold transition-all duration-200 border cursor-pointer ${
              activePlc === plc.id
                ? 'bg-cyan-700 text-white border-cyan-700 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {plc.name}
          </button>
        ))}
      </div>

      {/* Process Pipeline Metrics Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Process Instruments Visualizer */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-800 font-bold uppercase tracking-wider">
              <span>LIVE INDUSTRIAL LINE TELEMETRY</span>
              <span className="text-emerald-600">OEE Rate: 99.4%</span>
            </div>

            {/* 4 Process Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-center shadow-2xs">
                <div className="text-[11px] font-mono text-slate-500">Drive Motor RPM</div>
                <div className="text-2xl font-bold font-mono text-cyan-700">{motorRpm}</div>
                <div className="text-[10px] font-mono text-emerald-600">Target: 1480 RPM</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-center shadow-2xs">
                <div className="text-[11px] font-mono text-slate-500">Pneumatic Line</div>
                <div className="text-2xl font-bold font-mono text-slate-900">{linePressure} Bar</div>
                <div className="text-[10px] font-mono text-emerald-600">Optimal (6-8 Bar)</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-center shadow-2xs">
                <div className="text-[11px] font-mono text-slate-500">Vibration Index</div>
                <div className="text-2xl font-bold font-mono text-emerald-600">{vibrationIndex}</div>
                <div className="text-[10px] font-mono text-slate-500">mm/s (ISO 10816)</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-center shadow-2xs">
                <div className="text-[11px] font-mono text-slate-500">Lube Oil Temp</div>
                <div className="text-2xl font-bold font-mono text-amber-600">{oilTemp}°C</div>
                <div className="text-[10px] font-mono text-emerald-600">Normal Range</div>
              </div>
            </div>

            {/* Industrial SCADA Mimic Bar */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 font-mono text-xs space-y-2.5 shadow-2xs">
              <div className="flex justify-between text-slate-700">
                <span>SCADA Supervisory Process Status:</span>
                <span className="text-emerald-700 font-bold">AUTOMATIC CLOSED-LOOP RUNNING</span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden flex">
                <div className="h-full bg-cyan-600 w-3/4 animate-pulse" />
                <div className="h-full bg-emerald-500 w-1/4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Safety Interlock & Alarm History */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 font-mono text-xs shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-cyan-800 font-bold">
              <span>SAFETY INTERLOCKS</span>
              <span className="text-emerald-600">ALL CLEAR</span>
            </div>

            <div className="space-y-2 text-slate-700">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                <span>Emergency Stop (E-Stop)</span>
                <span className="text-emerald-700 font-bold">ARMED / HEALTHY</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                <span>Relief Valve Override</span>
                <button
                  onClick={() => setEmergencyValveOpen(!emergencyValveOpen)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold border transition cursor-pointer ${
                    emergencyValveOpen
                      ? 'bg-rose-500 text-white border-rose-500'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {emergencyValveOpen ? 'VALVE VENTING' : 'CLOSED (AUTO)'}
                </button>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between items-center">
                <span>Telemetry Ingress Sync</span>
                <span className="text-blue-600 font-bold">5ms Cloud Mirror</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 flex items-center gap-3 text-xs font-mono text-cyan-900">
            <CheckCircle2 className="w-5 h-5 text-cyan-700 shrink-0" />
            <span>Industrial High-Reliability SCADA &bull; Continuous Deterministic Real-Time Loop</span>
          </div>
        </div>

      </div>
    </div>
  )
}

