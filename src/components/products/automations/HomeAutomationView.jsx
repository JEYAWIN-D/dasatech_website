import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Sparkles, Sliders, Power, Thermometer, Lock, ShieldCheck,
  CheckCircle2, ArrowRight, PhoneCall, Check, Zap, Clock,
  Sun, Moon, Shield, Tv, Droplets, Flame, HelpCircle, ChevronDown, Award
} from 'lucide-react'
import { Link } from '../../Router'

export default function HomeAutomationView() {
  const [activeMood, setActiveMood] = useState('evening')
  const [lightDim, setLightDim] = useState(75)
  const [acTemp, setAcTemp] = useState(23)
  const [curtainPos, setCurtainPos] = useState(65)
  const [gateLocked, setGateLocked] = useState(true)
  const [monthlyUnits, setMonthlyUnits] = useState(480)
  const [activeRoomTab, setActiveRoomTab] = useState('living')
  const [openFaq, setOpenFaq] = useState(null)

  const MOODS = {
    morning: { label: 'Sunrise Wake-Up', time: '06:30 AM', color: '#D97706', desc: 'Curtains glide open 100% to natural sunlight, water geyser warms to 42°C, soft morning ragas play at 15% volume.' },
    evening: { label: 'Relaxed Evening', time: '06:30 PM', color: '#EA580C', desc: 'Warm 2700K ambient cove glow engages, Daikin/Voltas inverter AC sets to 23°C comfort, outdoor floodlights illuminate.' },
    cinema: { label: 'Private Cinema', time: '09:00 PM', color: '#7C2D12', desc: 'Dual sheer curtains drop blackout, chandelier fades down to 10% accent glow, 5.1 Dolby audio amplifier powers on.' },
    away: { label: 'Vacation Guard', time: 'Anytime', color: '#B45309', desc: 'All non-essential circuits cut off, FASTag gate locked, perimeter motion alarms armed, deterrent random lights active.' }
  }

  const ROOM_DETAILS = {
    living: {
      title: 'Grand Living & Foyer Sanctuary',
      tagline: 'First impressions powered by seamless tactile glass control',
      features: [
        'Capacitive glass touch switchboards with custom engraved icons & gentle haptic feedback',
        'Motorized dual-track curtain rails with silent whisper-glide magnetic motors (< 30dB)',
        'Circadian cove illumination dynamically shifting from 4000K daylight to 2700K warm twilight',
        'Offline Local Edge Gateway: Control switches from your phone even during broadband internet cuts'
      ],
      hardware: 'Roma / Crabtree 8-Module Glass Keypad • Zigbee 3.0 Local Gateway • Motorized Rail'
    },
    master: {
      title: 'Master Bedroom & Circadian Sleep Suite',
      tagline: 'Engineered for restorative deep sleep and effortless midnight comfort',
      features: [
        'Single-tap Bedside Master-Off button extinguishes all home lights without leaving your bed',
        'Automated midnight AC temperature curve prevents 3:00 AM shivering and reduces power waste',
        'Low-glare footboard guide lights activate on gentle PIR motion for late-night bathroom trips',
        'Acoustic window open sensor automatically pauses the air conditioner to prevent wasted cooling'
      ],
      hardware: '4-Touch Bedside Keypad • Underbed Low-Lux LED Strip • Smart AC IR Blaster'
    },
    kitchen: {
      title: 'Smart Kitchen, Gas Safety & Water Pump Automation',
      tagline: 'Life-safety defense against LPG leaks, tank overflows, and pump burnouts',
      features: [
        'Industrial catalytic LPG gas leak sensor triggers motorized valve shutoff within 1.5 seconds',
        'Overhead sump tank ultrasonic sensor auto-starts pump and halts before overflow',
        'Dry-run pump protection saves motor windings from burnout when municipal water supply is dry',
        'Heavy-appliance smart sockets schedule dishwasher and laundry during off-peak power hours'
      ],
      hardware: 'Motorized LPG Ball Valve • Water Sump Ultrasonic Node • High-Amperage 16A Sockets'
    },
    outdoor: {
      title: 'Perimeter Security & Hands-Free FASTag Gate',
      tagline: 'Arrive home with zero remote hunting and zero security guard delays',
      features: [
        'Long-range 8-meter FASTag RFID reader opens main swing/sliding gate automatically for family cars',
        'High-definition Video Door Phone (VDP) forwards two-way video calls to your mobile anywhere in the world',
        'Perimeter infrared beam sensors sound deterrent chimes if intruders breach boundary walls',
        'Solar-synced dusk-to-dawn landscape pathway lighting saves 60% outdoor electricity'
      ],
      hardware: 'UHF FASTag Long-Range Reader • 2K Wi-Fi VDP • Motorized Gate Actuator'
    }
  }

  // Tariff calculation (TNEB / Indian residential slab rate baseline)
  const baseBill = Math.round(monthlyUnits * 7.8)
  const smartBill = Math.round(monthlyUnits * 5.2)
  const annualSavings = (baseBill - smartBill) * 12

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & INTERACTIVE AMBIENT ROOM CANVAS
          Theme: Warm Honey Amber (#F59E0B) & Terracotta (#EA580C)
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-amber-50/80 via-[#FFFDF9] to-orange-50/40 border border-amber-200/80 shadow-xl">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-gradient-to-b from-amber-200/30 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
            Smart Home Automation with <span className="text-amber-700">Zero Wall Rewiring</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Upgrade your villa or apartment to intelligent living. Control lights, climate, motorized curtains, water pumps, and security gates from elegant glass touchpads or voice assistants. 100% offline edge processing ensures your home works even during broadband outages.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-amber-900/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Free In-Home Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917639930148"
              className="px-6 py-3.5 rounded-2xl bg-white/90 border border-amber-300 text-amber-950 text-xs font-semibold hover:bg-amber-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-amber-700" />
              <span>Talk to Home Architect: +91 76399 30148</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 text-left">
            {[
              { val: 'Zero Rewiring', lbl: 'Fits standard modular boxes (Roma/Crabtree)' },
              { val: '100% Offline', lbl: 'Local Zigbee hub functions without internet' },
              { val: '35% Saved', lbl: 'Slab-aware tariff load shifting algorithm' },
              { val: '5-Year Guard', lbl: 'On-site replacement hardware warranty' }
            ].map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/80 border border-amber-200/70 shadow-2xs">
                <div className="font-display font-black text-lg text-amber-950">{m.val}</div>
                <div className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5">{m.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Living Room Canvas */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 bg-white border border-amber-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-100 pb-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">Interactive Residential Cockpit</span>
              <h2 className="text-xl font-display font-black text-slate-900 mt-0.5">Living Room Mood &amp; Appliance Simulator</h2>
            </div>

            {/* Mood selector pills */}
            <div className="flex items-center gap-2 flex-wrap">
              {Object.entries(MOODS).map(([k, m]) => (
                <button
                  key={k}
                  onClick={() => setActiveMood(k)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer border ${
                    activeMood === k
                      ? 'bg-amber-700 text-white border-amber-700 shadow-md shadow-amber-900/20'
                      : 'bg-amber-50/60 text-slate-700 border-amber-200/80 hover:bg-amber-100/60'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm font-mono text-amber-900/80 italic bg-amber-50/50 p-3 rounded-xl border border-amber-100">
            Current Scene [{MOODS[activeMood].time}]: "{MOODS[activeMood].desc}"
          </p>

          {/* Interactive controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Cove Lights */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900">WARM COVE LIGHT</span>
                <Sun className={`w-4 h-4 ${lightDim > 0 ? 'text-amber-600' : 'text-slate-400'}`} />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>Dimming Level</span>
                <strong className="text-amber-800">{lightDim}% (2700K)</strong>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={lightDim}
                onChange={(e) => setLightDim(Number(e.target.value))}
                className="w-full accent-amber-700 cursor-pointer h-1.5 bg-amber-100 rounded-lg"
              />
            </div>

            {/* 2. Daikin/Voltas AC */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900">INVERTER AC</span>
                <Thermometer className="w-4 h-4 text-orange-600" />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>Room Temperature</span>
                <strong className="text-orange-800">{acTemp}°C Comfort</strong>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setAcTemp(Math.max(18, acTemp - 1))}
                  className="flex-1 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-xs font-bold font-mono text-amber-900 cursor-pointer"
                >
                  - 1°C
                </button>
                <button
                  onClick={() => setAcTemp(Math.min(28, acTemp + 1))}
                  className="flex-1 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-xs font-bold font-mono text-amber-900 cursor-pointer"
                >
                  + 1°C
                </button>
              </div>
            </div>

            {/* 3. Motorized Curtains */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900">SHEER CURTAIN</span>
                <Sliders className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>Glide Position</span>
                <strong className="text-amber-800">{curtainPos}% Open</strong>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={curtainPos}
                onChange={(e) => setCurtainPos(Number(e.target.value))}
                className="w-full accent-amber-700 cursor-pointer h-1.5 bg-amber-100 rounded-lg"
              />
            </div>

            {/* 4. FASTag Gate */}
            <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-900">FASTAG BOOM GATE</span>
                <Lock className={`w-4 h-4 ${gateLocked ? 'text-emerald-600' : 'text-amber-600'}`} />
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-600">
                <span>Perimeter Status</span>
                <strong className={gateLocked ? 'text-emerald-700' : 'text-amber-700'}>
                  {gateLocked ? 'Armed & Locked' : 'Gate Unlocked'}
                </strong>
              </div>
              <button
                onClick={() => setGateLocked(!gateLocked)}
                className={`w-full py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  gateLocked
                    ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                    : 'bg-amber-700 hover:bg-amber-800 text-white'
                }`}
              >
                {gateLocked ? 'Simulate Car Arrival' : 'Lock Security Gate'}
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: ROOM-BY-ROOM ARCHITECTURAL BLUEPRINT
          (Interactive Tabbed Blueprint: Living, Master, Kitchen, Outdoor)
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Granular Residence Engineering</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Tailored Experiences Designed for Every Corner of Your Residence
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We do not sell generic off-the-shelf plastic boxes. Every room is customized with tailored circuits, wireless sensor thresholds, and elegant glass keypads.
          </p>
        </div>

        {/* Room Tab Selector */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Object.entries(ROOM_DETAILS).map(([k, rm]) => (
            <button
              key={k}
              onClick={() => setActiveRoomTab(k)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeRoomTab === k
                  ? 'bg-amber-700 text-white border-amber-700 shadow-md shadow-amber-900/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300'
              }`}
            >
              {rm.title.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Room Detail Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200/80 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase">{ROOM_DETAILS[activeRoomTab].tagline}</span>
            <h3 className="font-display font-black text-2xl text-slate-900">{ROOM_DETAILS[activeRoomTab].title}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ROOM_DETAILS[activeRoomTab].features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-50/40 border border-amber-100 text-xs font-medium text-slate-800 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
              <span>Installed Hardware Module:</span>
              <strong className="text-slate-900">{ROOM_DETAILS[activeRoomTab].hardware}</strong>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-amber-700 to-orange-800 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-amber-200 font-bold">Installation Guarantee</span>
            <h4 className="font-display font-black text-xl text-white">Retrofits in Less Than 4 Hours</h4>
            <p className="text-xs text-amber-100 leading-relaxed font-normal">
              Our micro-puck relays sit discreetly inside your existing electrical backboxes. No wall demolition, no plaster patching, and zero painter touch-ups required.
            </p>
            <div className="space-y-2 text-xs font-mono text-amber-100 pt-2 border-t border-amber-600/60">
              <div>Compatible with 2M, 4M, 6M, 8M &amp; 12M modular plates</div>
              <div>Inverter &amp; Generator switchover compliant</div>
              <div>Retains mechanical switch toggle fallback</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: A DAY IN THE LIFE & TARIFF SLAB CALCULATOR
          (Chronological 24h Timeline + Indian Power Bill Savings Dial)
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Effortless Daily Living</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            A Day in the Life of a DASA Smart Home
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            See how smart routines orchestrate your environment seamlessly from morning sunrise until midnight rest.
          </p>
        </div>

        {/* 4-Step Chronological Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              time: '07:00 AM',
              title: 'Morning Awakening',
              icon: Sun,
              desc: 'Bedroom sheer curtains glide open 100%. Water geyser warms bathroom to exactly 40°C. Background FM stream plays softly in the foyer.'
            },
            {
              time: '09:30 AM',
              title: 'Office Departure',
              icon: ArrowRight,
              desc: 'Single-tap on the foyer exit switchboard engages "Away Mode". All lights, geysers, and ACs turn off. FASTag gate opens as car approaches.'
            },
            {
              time: '06:00 PM',
              title: 'Evening Return',
              icon: Moon,
              desc: 'Car triggers gate reader. Driveway lights activate. Living room air conditioner pre-cools to 23°C and accent warm cove lamps welcome you.'
            },
            {
              time: '10:30 PM',
              title: 'Sleep Sanctum',
              icon: Shield,
              desc: 'Master bedside switch locks the front gate, arms perimeter infrared beams, shifts AC to quiet midnight sleep curve, and dims all downlights.'
            }
          ].map((step, i) => {
            const SIcon = step.icon
            return (
              <div key={i} className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-2xs hover:shadow-md transition-all space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-mono font-bold text-xs">
                      {step.time}
                    </span>
                    <SIcon className="w-4 h-4 text-amber-700" />
                  </div>
                  <h4 className="font-display font-black text-base text-slate-900 mt-2">{step.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-amber-800 font-semibold pt-2 border-t border-slate-100">
                  Fully Automated
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Slab Tariff Electricity Saver */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#FFFDF9] via-amber-50/60 to-orange-50/50 border border-amber-300 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Tariff Slab Intelligence</span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
              Eliminate Expensive Electricity Board Penalty Slabs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              State power distribution boards (TNEB, BESCOM, TSSPDCL) double your per-unit rate once consumption crosses slab thresholds (e.g. 500 units). DASA Smart Schedulers automatically cycle water geysers and heavy appliances right before you cross tier boundaries.
            </p>
            <div className="space-y-2 text-xs font-mono text-slate-700 pt-2">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Geyser auto-cuts off once water reaches preset target temp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Air conditioner compressor load modulation cuts consumption by 28%</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-5">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-slate-600">Monthly Usage Slider:</span>
              <strong className="text-amber-800 text-base">{monthlyUnits} Units (kWh)</strong>
            </div>

            <input
              type="range"
              min="200"
              max="1200"
              step="50"
              value={monthlyUnits}
              onChange={(e) => setMonthlyUnits(Number(e.target.value))}
              className="w-full accent-amber-700 cursor-pointer h-2 bg-amber-100 rounded-lg"
            />

            <div className="grid grid-cols-2 gap-3 text-center font-mono">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] text-slate-500 block mb-1">Standard Unmanaged Bill</span>
                <span className="text-lg font-bold text-rose-600">₹{baseBill.toLocaleString()}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300">
                <span className="text-[11px] text-amber-800 block mb-1">With DASA Smart Slab</span>
                <span className="text-lg font-bold text-emerald-700">₹{smartBill.toLocaleString()}</span>
              </div>
            </div>

            <div className="text-center p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 font-bold">
              Annual Family Energy Savings: ₹{annualSavings.toLocaleString()} / year
            </div>
          </div>
        </div>

      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: TURNKEY PACKAGES, COMPARISON & CLIENT FAQ
          (SEO Schema-Style Q&A, Package Tiers & Decision Guide)
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Turnkey Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Pre-Engineered Automation Packages for Indian Homes
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select an all-inclusive package tailored to your property size. Custom architectural configurations available upon site visit.
          </p>
        </div>

        {/* 3 Package Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Smart Essential Pack (2BHK)',
              tag: 'MOST POPULAR FOR APARTMENTS',
              scope: [
                'Living room & dining touch glass switchboards',
                'Master bedroom lighting & AC controller',
                'Motorized curtain rail for living balcony',
                'Local Zigbee 3.0 Edge Gateway with mobile app',
                'Overhead water tank auto-controller'
              ],
              support: '1-Day Non-Invasive Installation'
            },
            {
              name: 'Luxury Residence Pack (3BHK / 4BHK)',
              tag: 'COMPLETE HOME INTELLIGENCE',
              scope: [
                'Full house glass touch panels (all bedrooms + foyer)',
                '3x Inverter AC smart temperature schedulers',
                '2x Motorized curtains (Living + Master suite)',
                'Kitchen LPG gas leak auto-shutoff valve',
                'FASTag RFID boom barrier / swing gate sync',
                'Voice control bridge (Alexa / Google Home)'
              ],
              support: '2-Day Turnkey Deployment + 5-Yr Warranty'
            },
            {
              name: 'Grand Villa & Estate Suite',
              tag: 'ARCHITECTURAL RESIDENTIAL ESTATE',
              scope: [
                'Multi-zone landscape & swimming pool pump automation',
                'Complete architectural circadian lighting integration',
                'Long-range 8-meter FASTag vehicle access system',
                'Dual-gateway failover with local diesel genset link',
                'Surround sound home theatre scene trigger',
                'Dedicated 24/7 priority concierge tech support'
              ],
              support: 'Full Architectural Electrical Engineering'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-amber-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-900 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Client SEO Frequently Asked Questions */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">Client Decision FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Homeowners</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'Will automating my home require breaking walls or replacing electrical conduit pipes?',
                a: 'Not at all. DASA smart home modules are engineered specifically as micro-relays that fit directly behind your existing switchboards (Roma, Crabtree, Legrand, Panasonic, etc.) with zero wall chipping, zero rewiring, and zero paint damage.'
              },
              {
                q: 'What happens if the internet connection or broadband Wi-Fi router goes down?',
                a: 'Your home functions completely normally. Our architecture uses a Local Edge Gateway operating on Zigbee 3.0. Touch panels, mobile app local controls, schedules, and mood scenes execute 100% offline without requiring internet access.'
              },
              {
                q: 'Can elderly family members and guests still use regular physical switches?',
                a: 'Yes. Every switch retains dual-operation. Anyone can physically press the glass touch buttons or regular toggles just like traditional switches, while tech-savvy family members can use phone apps, voice controls, or automated timers.'
              },
              {
                q: 'How does the FASTag gate integration work for my family vehicles?',
                a: 'We mount a long-range UHF RFID scanner near your compound gate. It reads the existing bank FASTag sticker already affixed to your windshield from up to 8 meters away, automatically opening the gate and closing it safely behind you.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-amber-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-[13px] pt-1 pl-1">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </section>

    </div>
  )
}
