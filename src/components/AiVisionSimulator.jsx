import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eye, Brain, Play, Pause, Scan, ShieldCheck } from 'lucide-react'

export default function AiVisionSimulator() {
  const [isRunning, setIsRunning] = useState(true)
  const [fps, setFps] = useState(59.8)
  const [processedCount, setProcessedCount] = useState(14820)
  const [selectedPipeline, setSelectedPipeline] = useState('inspection')

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setFps(parseFloat((59.2 + Math.random() * 1.6).toFixed(1)))
      setProcessedCount((p) => p + Math.floor(Math.random() * 3 + 1))
    }, 800)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-md space-y-8 relative overflow-hidden text-slate-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Brain className="w-4 h-4 text-blue-600" />
            <span>NEURAL VISION &amp; INFERENCE ENGINE SIMULATOR</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            DASA Vision AI Defect &amp; Inference Console
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs font-bold transition flex items-center gap-1.5 border cursor-pointer ${
              isRunning
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-amber-50 border-amber-200 text-amber-700'
            }`}
          >
            {isRunning ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3" />}
            <span>{isRunning ? 'INFERENCE STREAMING' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Mode Selectors */}
      <div className="flex flex-wrap gap-2.5">
        {[
          { id: 'inspection', name: 'Optical Defect Inspection (60 FPS)' },
          { id: 'rag', name: 'Private Enterprise LLM RAG Pipeline' },
          { id: 'timeseries', name: 'Predictive Component Wear Forecast' }
        ].map((pipe) => (
          <button
            key={pipe.id}
            onClick={() => setSelectedPipeline(pipe.id)}
            className={`px-4 py-2 rounded-2xl font-mono text-xs font-bold transition-all duration-200 border cursor-pointer ${
              selectedPipeline === pipe.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {pipe.name}
          </button>
        ))}
      </div>

      {/* Main Vision Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Simulated Camera Vision Frame */}
        <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[360px] rounded-3xl bg-slate-950 border border-slate-800 p-4 overflow-hidden flex flex-col justify-between text-white">
          
          {/* Scanning Line Animation */}
          {isRunning && (
            <motion.div
              animate={{ y: ['0%', '800%', '0%'] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
              className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent pointer-events-none z-10 shadow-[0_0_12px_#3B82F6]"
            />
          )}

          {/* Camera Telemetry HUD overlay */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-300 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
            <span className="text-blue-400 font-bold flex items-center gap-1.5">
              <Scan className="w-3.5 h-3.5" />
              <span>SENSOR 4K CAM #01 &bull; TENSOR-RT FP16</span>
            </span>
            <span className="text-emerald-400 font-bold">{fps} FPS &bull; LATENCY 2.4ms</span>
          </div>

          {/* Simulated Bounding Boxes */}
          <div className="relative z-10 my-auto flex items-center justify-center p-6">
            <div className="relative w-full max-w-sm h-48 border border-dashed border-blue-400/60 rounded-2xl bg-blue-950/30 p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold">
                  PASS &bull; 99.82%
                </span>
                <span className="text-blue-300 font-mono text-[11px]">Object: CNC_HOUSING_A4</span>
              </div>

              <div className="text-center font-mono text-xs text-slate-200">
                <div className="w-14 h-14 mx-auto rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 mb-2">
                  <Eye className="w-7 h-7" />
                </div>
                <span>Zero Surface Micro-Cracks Detected</span>
              </div>

              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>X: 420.4 Y: 812.1</span>
                <span>Area: 1,480 mm²</span>
              </div>
            </div>
          </div>

          {/* HUD Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-slate-300 bg-black/60 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
            <span>Total Inspected: <strong className="text-white">{processedCount.toLocaleString()} units</strong></span>
            <span className="text-emerald-400 font-bold">Defect Rate: 0.004%</span>
          </div>
        </div>

        {/* Right Column: Model Specs & Neural Telemetry */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5 font-mono text-xs shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-blue-600 font-bold">
              <span>NEURAL PIPELINE METRICS</span>
              <span className="text-emerald-600">99.82% FP16</span>
            </div>

            <div className="space-y-2 text-slate-700">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Inference Model</span>
                <span className="text-slate-900 font-semibold">YOLOv9 + TensorRT</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Hardware Acceleration</span>
                <span className="text-blue-700 font-semibold">NVIDIA Jetson AGX</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Quantization</span>
                <span className="text-emerald-600 font-semibold">INT8 / FP16 Mixed</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Processing Latency</span>
                <span className="text-blue-600 font-semibold">2.4ms per frame</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs font-mono text-blue-900">
            <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Industrial High-Speed Computer Vision &bull; Real-Time On-Premise Inference</span>
          </div>
        </div>

      </div>
    </div>
  )
}

