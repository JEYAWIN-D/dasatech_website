import React, { useState, useEffect } from 'react'
import { Cpu, Radio, ShieldCheck, Play, Pause } from 'lucide-react'

export default function IotMeshSimulator() {
  const [isRunning, setIsRunning] = useState(true)
  const [activeFrequency, setActiveFrequency] = useState('lora')
  const [msgRate, setMsgRate] = useState(45200)
  const [activeNodes, setActiveNodes] = useState(10480)
  const [selectedNode, setSelectedNode] = useState(1)

  const nodes = [
    { id: 1, name: 'Silo Temp/Moisture #01', rssi: '-68 dBm', batt: '98%', status: 'STREAMING', packet: '24 bytes / 2s' },
    { id: 2, name: 'Water Flow Turbine #04', rssi: '-74 dBm', batt: '94%', status: 'STREAMING', packet: '32 bytes / 1s' },
    { id: 3, name: 'Cold-Chain Pharma Sensor #09', rssi: '-62 dBm', batt: '99%', status: 'STREAMING', packet: '16 bytes / 5s' },
    { id: 4, name: 'Industrial Vibration Node #12', rssi: '-79 dBm', batt: '91%', status: 'STREAMING', packet: '64 bytes / 500ms' }
  ]

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setMsgRate((prev) => Math.floor(45000 + Math.random() * 800))
    }, 700)
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-md space-y-8 relative overflow-hidden text-slate-900">
      
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-emerald-600 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Radio className="w-4 h-4 text-emerald-600" />
            <span>INTERACTIVE IOT MESH &amp; TELEMETRY STREAM SIMULATOR</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 font-display">
            LoRaWAN Wireless Gateway &bull; Real-Time Ingress Console
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Mesh Online &bull; Latency 8ms</span>
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
            <span>{isRunning ? 'STREAMING' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Protocol Selectors */}
      <div className="flex flex-wrap gap-2.5">
        {[
          { id: 'lora', name: 'LoRaWAN 868/915 MHz (15 km Long Range)' },
          { id: 'nbiot', name: 'NB-IoT & LTE-M Cellular Telemetry' },
          { id: 'ble', name: 'BLE 5.3 & Thread Mesh (Indoor Beaconing)' }
        ].map((freq) => (
          <button
            key={freq.id}
            onClick={() => setActiveFrequency(freq.id)}
            className={`px-4 py-2 rounded-2xl font-mono text-xs font-bold transition-all duration-200 border cursor-pointer ${
              activeFrequency === freq.id
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            {freq.name}
          </button>
        ))}
      </div>

      {/* Grid: 4 Node Cards & Live Data Pipeline Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Connected Nodes Roster */}
        <div className="lg:col-span-7 space-y-3">
          <div className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider flex justify-between">
            <span>Connected Wireless Sensors</span>
            <span>{nodes.length} Active Nodes</span>
          </div>

          <div className="space-y-2.5">
            {nodes.map((node) => {
              const isSelected = selectedNode === node.id
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-400 text-slate-900 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-slate-900 font-mono flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{node.name}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      Signal: <span className="text-emerald-700 font-bold">{node.rssi}</span> &bull; Payload: {node.packet}
                    </div>
                  </div>

                  <div className="text-right font-mono text-xs">
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      {node.batt} BATT
                    </span>
                    <div className="text-[10px] text-emerald-600 font-bold mt-1">
                      &bull; {node.status}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Gateway Telemetry & MQTT Pipeline Stream */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5 font-mono text-xs shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-emerald-700 font-bold">
              <span>GATEWAY INGESTION ENGINE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>

            <div className="space-y-2 text-slate-700">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Ingestion Rate</span>
                <span className="text-emerald-700 font-bold">{msgRate.toLocaleString()} msg/sec</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Total Sensor Fleet</span>
                <span className="text-slate-900 font-semibold">{activeNodes.toLocaleString()}+ Online</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>Time-Series Storage</span>
                <span className="text-blue-700 font-semibold">TimescaleDB + InfluxDB</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex justify-between">
                <span>OTA Encryption</span>
                <span className="text-emerald-700 font-semibold">AES-256 HSM Hardened</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-xs font-mono text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Industrial Ingress Protected Hardware &bull; 5+ Year Battery Lifespan in Deep Sleep</span>
          </div>
        </div>

      </div>
    </div>
  )
}

