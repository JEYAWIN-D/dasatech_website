import React, { useState } from 'react'
import {
  Lightbulb,
  Thermometer,
  Lock,
  Unlock,
  Sun,
  Power,
  Wind,
  Cpu
} from 'lucide-react'

export default function SmartHomeControlPanel() {
  const [activeRoom, setActiveRoom] = useState('living-room')
  const [activeMood, setActiveMood] = useState('cyber')
  const [brightness, setBrightness] = useState(85)
  const [hvacTemp, setHvacTemp] = useState(21.5)
  const [isLocked, setIsLocked] = useState(true)
  const [curtainsOpen, setCurtainsOpen] = useState(70)
  const [ecoMode, setEcoMode] = useState(true)
  const [switches, setSwitches] = useState({
    chandelier: true,
    accentStrips: true,
    soundSystem: false,
    smartPlugs: true,
    airPurifier: true
  })

  const rooms = [
    { id: 'living-room', name: 'Living Suite', temp: 21.5, devices: 14 },
    { id: 'master-bedroom', name: 'Master Suite', temp: 20.0, devices: 10 },
    { id: 'home-theater', name: 'Cinema Theater', temp: 19.5, devices: 8 },
    { id: 'architect-patio', name: 'Outdoor Patio', temp: 23.0, devices: 6 }
  ]

  const moods = [
    { id: 'cyber', name: 'Intelligent Daylight', color: '#2563EB', temp: 21.0 },
    { id: 'warm', name: 'Warm Sunset', color: '#D97706', temp: 23.0 },
    { id: 'cinema', name: 'Cinema Ambiance', color: '#7C3AED', temp: 20.0 },
    { id: 'daylight', name: 'Natural Focus', color: '#0284C7', temp: 22.5 }
  ]

  const toggleSwitch = (key) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const currentMoodObj = moods.find((m) => m.id === activeMood) || moods[0]
  const activeDeviceCount = Object.values(switches).filter(Boolean).length

  return (
    <div className="rounded-3xl p-6 sm:p-10 border border-slate-200 bg-white shadow-md space-y-8 relative overflow-hidden text-slate-900">
      
      {/* Control Panel Top Navigation Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="flex items-center gap-2 text-blue-600 font-mono text-xs uppercase tracking-wider mb-1 font-bold">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>ARCHITECTURAL SMART HOME CONTROL CONSOLE</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
            DASA Touch Smart Living Hub
          </h3>
        </div>

        {/* Real-Time Protocol Mesh Telemetry Chip */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Zigbee 3.0 &bull; Matter Ready</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
            <span>Offline Edge Gateway: Active</span>
          </div>
        </div>
      </div>

      {/* Room Tabs */}
      <div className="relative z-10 flex flex-wrap gap-2.5">
        {rooms.map((r) => {
          const isActive = activeRoom === r.id
          return (
            <button
              key={r.id}
              onClick={() => setActiveRoom(r.id)}
              className={`px-4 py-2 rounded-2xl font-mono text-xs font-bold transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span>{r.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/20 text-white">
                {r.devices} dev
              </span>
            </button>
          )
        })}
      </div>

      {/* Main 3-Column Interactive Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Column 1: Smart Lighting & Mood Presets */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-amber-500" />
                <span>1. Lighting Mood Presets</span>
              </span>
              <span style={{ color: currentMoodObj.color }}>{brightness}% Lux</span>
            </div>

            {/* Mood Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              {moods.map((m) => {
                const isSelected = activeMood === m.id
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveMood(m.id)
                      setHvacTemp(m.temp)
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-20 ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-sm text-slate-900 ring-1 ring-blue-600'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold">{m.name}</span>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: m.color }} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">Circadian Synced</span>
                  </button>
                )
              })}
            </div>

            {/* Brightness Dimmer Slider */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>Master Dimmer:</span>
                <span className="text-blue-600 font-bold">{brightness}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
            </div>
          </div>

          {/* Motorized Curtains / Shades */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-500" />
                <span>Motorized Window Shades</span>
              </span>
              <span className="text-emerald-600 font-bold">{curtainsOpen}% Open</span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={curtainsOpen}
              onChange={(e) => setCurtainsOpen(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <button onClick={() => setCurtainsOpen(0)} className="hover:text-blue-600 transition cursor-pointer">Closed</button>
              <button onClick={() => setCurtainsOpen(50)} className="hover:text-blue-600 transition cursor-pointer">50% Privacy</button>
              <button onClick={() => setCurtainsOpen(100)} className="hover:text-blue-600 transition cursor-pointer">100% Day</button>
            </div>
          </div>
        </div>

        {/* Column 2: Smart Switches & Relays */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Power className="w-4 h-4 text-blue-600" />
                <span>2. Smart Relays &amp; Switches</span>
              </span>
              <span className="text-emerald-600 font-bold">{activeDeviceCount} / 5 ON</span>
            </div>

            <div className="space-y-2.5">
              {[
                { key: 'chandelier', label: 'Living Architectural Chandelier', watts: '45W' },
                { key: 'accentStrips', label: 'RGB Perimeter Cove Light Strips', watts: '28W' },
                { key: 'soundSystem', label: 'Lossless Hi-Fi Audio Zone', watts: '65W' },
                { key: 'smartPlugs', label: 'Master Media Console Outlet', watts: '120W' },
                { key: 'airPurifier', label: 'HEPA Smart Air Purification', watts: '30W' }
              ].map((sw) => {
                const isOn = switches[sw.key]
                return (
                  <div
                    key={sw.key}
                    onClick={() => toggleSwitch(sw.key)}
                    className={`p-3 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                      isOn
                        ? 'bg-white border-blue-400 text-slate-900 shadow-2xs'
                        : 'bg-white border-slate-200 text-slate-500'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold">{sw.label}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        Load: <span className={isOn ? 'text-blue-600 font-bold' : 'text-slate-400'}>{isOn ? sw.watts : '0W (Standby)'}</span>
                      </div>
                    </div>
                    <div
                      className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-200 flex items-center ${
                        isOn ? 'bg-blue-600 justify-end' : 'bg-slate-200 justify-start'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-full bg-white shadow-xs" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Column 3: Climate HVAC & Biometric Security */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Climate HVAC Thermostat */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-blue-600" />
                <span>3. Multi-Zone Climate HVAC</span>
              </span>
              <span className="text-blue-600 font-bold">{hvacTemp}°C</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => setHvacTemp((t) => Math.max(16, parseFloat((t - 0.5).toFixed(1))))}
                className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 font-mono font-bold text-xl transition flex items-center justify-center cursor-pointer shadow-2xs"
              >
                -
              </button>

              <div className="text-center font-mono">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{hvacTemp}°C</div>
                <div className="text-[11px] text-slate-500 mt-1 font-medium">Auto Inverter Modulation</div>
              </div>

              <button
                onClick={() => setHvacTemp((t) => Math.min(28, parseFloat((t + 0.5).toFixed(1))))}
                className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 font-mono font-bold text-xl transition flex items-center justify-center cursor-pointer shadow-2xs"
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <Wind className="w-3.5 h-3.5 text-blue-600" />
                <span>Eco Schedule Mode</span>
              </span>
              <button
                onClick={() => setEcoMode(!ecoMode)}
                className={`text-[11px] font-bold px-2 py-0.5 rounded-md border cursor-pointer ${
                  ecoMode ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}
              >
                {ecoMode ? 'ACTIVE (32% SAVED)' : 'MANUAL'}
              </button>
            </div>
          </div>

          {/* Biometric Security Door Lock */}
          <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 space-y-3.5 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${isLocked ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-rose-50 border-rose-200 text-rose-700'}`}>
                  {isLocked ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-900 font-bold">Biometric Entrance Lock</div>
                  <div className="text-[11px] font-mono text-slate-500">
                    State: <span className={isLocked ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>{isLocked ? 'ARMED & LOCKED' : 'UNLOCKED (OPEN)'}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsLocked(!isLocked)}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition border cursor-pointer ${
                  isLocked
                    ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-2xs'
                    : 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {isLocked ? 'Unlock' : 'Lock Main'}
              </button>
            </div>

            {/* Telemetry Metrics Strip */}
            <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-600">
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <div className="text-slate-500">Indoor AQI:</div>
                <div className="text-emerald-700 font-bold">28 (Pure Air)</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-slate-200">
                <div className="text-slate-500">Security Feed:</div>
                <div className="text-blue-700 font-bold">4K Zero-Latency</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

