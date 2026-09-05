import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sprout, Droplets, Sun, Wind, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, Zap, Gauge, Radio, CloudRain,
  ChevronDown, Award, TrendingUp, Sparkles, AlertCircle
} from 'lucide-react'
import { Link } from '../../Router'

export default function AgriAutomationView() {
  const [moistureLevel, setMoistureLevel] = useState(24)
  const [dripActive, setDripActive] = useState(false)
  const [activeCrop, setActiveCrop] = useState('polyhouse')
  const [openFaq, setOpenFaq] = useState(null)

  const CROPS = {
    polyhouse: {
      name: 'Commercial Polyhouses & Greenhouses',
      tagline: 'High-value bell peppers, tomatoes & Dutch roses',
      savings: '48% Water Conserved • +34% Yield Increase',
      features: [
        'Automated high-pressure foggers maintain 65% RH to prevent blossom drop during midday heat spikes',
        'Pulse drip fertigation schedules NPK nutrients directly to roots based on real-time EC & pH readings',
        'Motorized roof vent & side curtain deployment synchronized with wind direction and rain sensors',
        'Circulation fan multi-zone speed control eliminates stagnant pockets and botrytis fungal outbreaks'
      ]
    },
    sugarcane: {
      name: 'Sugarcane & Commercial Cash Crops',
      tagline: 'Heavy biomass crops with deep root profiles',
      savings: '38% Water Conserved • +22% Sugar Recovery',
      features: [
        'Multi-depth volumetric soil moisture sensors (30cm, 60cm, 90cm) prevent over-irrigation leaching',
        'Automated valve sequencing cycles through 8 sub-plots to maintain optimal operating pressure',
        'Sub-surface drip irrigation minimizes weed growth and reduces tractor soil compaction',
        'Drought-stress mitigation algorithm schedules irrigation during evening off-peak power hours'
      ]
    },
    orchards: {
      name: 'High-Density Orchards & Horticulture',
      tagline: 'Pomegranate, mango, citrus & guava plantations',
      savings: '44% Water Conserved • Uniform Fruit Sizing',
      features: [
        'Solar VFD pump speed auto-modulates as borehole water table and solar irradiation fluctuate',
        'Canopy temperature infrared sensor detects water stress 48 hours before visible leaf wilting',
        'Automated pressure-compensating drippers ensure uniform water volume on undulating terrain',
        'Weather forecast sync halts planned irrigation if rain probability exceeds 70% within 6 hours'
      ]
    },
    cotton: {
      name: 'Cotton, Groundnut & Pulses',
      tagline: 'Precision watering for heavy black cotton soils',
      savings: '35% Water Conserved • Zero Waterlogging',
      features: [
        'Clay-soil swelling sensor prevents root asphyxiation and boll rotting caused by waterlogging',
        'Solar pump dry-run protection prevents motor burnouts when groundwater recharge is slow',
        'Mobile app push alerts in regional languages (Tamil, Telugu, Kannada, Hindi) via WhatsApp',
        '100% solar powered field nodes operate 24/7 with 3-day internal supercapacitor reserves'
      ]
    }
  }

  const handleActivateDrip = () => {
    setDripActive(!dripActive)
    if (!dripActive) {
      setMoistureLevel(48)
    } else {
      setMoistureLevel(24)
    }
  }

  const cropData = CROPS[activeCrop]

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & PRECISION SMART FARM COCKPIT
          Theme: Botanical Sunlit Lime (#65A30D), Meadow Green (#84CC16), Dew Cream
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-lime-50/80 via-[#FAFCF4] to-emerald-50/40 border border-lime-300/80 shadow-xl">
        
        {/* Top Sunlit Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-gradient-to-b from-lime-200/40 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Smart Agri Automation &amp; <span className="text-lime-700">Solar Pump VFD</span> Telemetry
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Conserve up to 45% irrigation water, eliminate motor burnouts with intelligent solar pump dry-run cutoff, and boost harvest yields using wireless root-zone soil moisture telemetry and automated multi-plot solenoid fertigation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl bg-lime-700 hover:bg-lime-800 text-white font-bold text-xs tracking-wide shadow-lg shadow-lime-950/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Farm Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917639930148"
                className="px-6 py-3.5 rounded-2xl bg-white border border-lime-300 text-lime-950 text-xs font-semibold hover:bg-lime-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-lime-700" />
                <span>Talk to Agri Automation Specialist</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { val: '45% Saved', lbl: 'Irrigation Water Conservation' },
                { val: '48.5 Hz', lbl: 'Solar VFD Sun Tracking Frequency' },
                { val: 'LoRa 5km', lbl: 'Long Range Mesh (Zero SIM fees)' },
                { val: '< 3s Trip', lbl: 'Automatic Dry-Run Motor Defense' }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white border border-lime-200 shadow-2xs">
                  <div className="font-display font-black text-lg text-lime-950">{m.val}</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Smart Farm Cockpit */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-lime-300 shadow-xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-lime-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-lime-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-lime-950 uppercase">Field Node 01 (Polyhouse)</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-lime-100 text-lime-900 font-bold">
                  Solar Battery 13.8V
                </span>
              </div>

              {/* Moisture Dial & Toggle */}
              <div className="p-4 rounded-2xl bg-lime-50/60 border border-lime-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-700 font-bold">ROOT-ZONE SOIL MOISTURE</span>
                  <span className={`font-bold ${moistureLevel > 35 ? 'text-lime-800' : 'text-amber-700'}`}>
                    {moistureLevel}% {moistureLevel > 35 ? '(Optimal Hydration)' : '(Watering Needed)'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-slate-600">Solenoid Drip Line:</span>
                  <button
                    onClick={handleActivateDrip}
                    className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                      dripActive
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-sm'
                        : 'bg-lime-700 hover:bg-lime-800 text-white'
                    }`}
                  >
                    {dripActive ? 'Drip Valve OPEN' : 'Open Drip Valve'}
                  </button>
                </div>
              </div>

              {/* Solar VFD Frequency & Rain Logic */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block">SOLAR VFD PUMP</span>
                  <strong className="text-base font-bold text-slate-900 block">48.5 Hz</strong>
                  <span className="text-[10px] text-emerald-700 block font-semibold">Dry-Run Shield Active</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[10px] text-slate-500 block">RAIN DELAY SENSOR</span>
                  <strong className="text-base font-bold text-slate-900 block">Clear Skies</strong>
                  <span className="text-[10px] text-lime-800 block font-semibold">Scheduled Fertigation OK</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-lime-100/80 border border-lime-300 text-xs font-mono text-lime-950 text-center font-medium">
                {dripActive
                  ? 'Drip Line Active • Calibrated root-zone water release engaged'
                  : 'Solar Standby • Tracking sunlight intensity across 4 panels'}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: CROP-SPECIFIC PRE-CALIBRATED PRESETS
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Agronomic Science</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Pre-Calibrated Soil &amp; Climate Presets by Crop
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Every crop possesses unique root architectures and transpiration curves. Select a crop profile to inspect tailored irrigation schedules.
          </p>
        </div>

        {/* Crop Selector Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {Object.entries(CROPS).map(([k, c]) => (
            <button
              key={k}
              onClick={() => setActiveCrop(k)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeCrop === k
                  ? 'bg-lime-700 text-white border-lime-700 shadow-md shadow-lime-900/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-lime-300'
              }`}
            >
              {c.name.split('&')[0].trim()}
            </button>
          ))}
        </div>

        {/* Active Crop Detail Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-lime-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-lime-700 uppercase">{cropData.tagline}</span>
            <h3 className="font-display font-black text-2xl text-slate-900">{cropData.name}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {cropData.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-lime-50/40 border border-lime-100 text-xs font-medium text-slate-800 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between">
              <span>Soil Sensor Protocol:</span>
              <strong className="text-slate-900">LoRaWAN 868/915 MHz • SDI-12 Volumetric Water Content (VWC)</strong>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-lime-700 to-emerald-800 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-lime-200 font-bold">Validated Impact</span>
            <h4 className="font-display font-black text-xl text-white">{cropData.savings}</h4>
            <p className="text-xs text-lime-100 leading-relaxed font-normal">
              Eliminate guesswork. Soil moisture telemetry prevents root asphyxiation during wet seasons and protects crops during heatwaves.
            </p>
            <div className="space-y-2 text-xs font-mono text-lime-100 pt-2 border-t border-lime-600">
              <div>Direct fertilizer injector solenoid support</div>
              <div>Multi-plot sub-surface valve sequencing</div>
              <div>Automatic solar DC battery health monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: SOLAR PUMP PROTECTION & 5KM LORA TOPOLOGY
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Borehole &amp; Pump Engineering</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Solar VFD Multi-Shield &amp; 5km Long-Range LoRa Mesh
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Protect costly solar submersible pumps from dry-run cavitation, voltage surges, and lightning while connecting multi-acre fields with zero SIM cards.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-lime-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-lime-700 uppercase">Hardware Reliability Protections</span>
            <h3 className="font-display font-black text-2xl text-slate-900">
              Complete Protection for Submersible Borehole Pumps
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              When water tables deplete in summer, standard pumps run dry and seize within 15 minutes. DASA smart VFD controllers monitor power factor and pump motor current to trigger an immediate auto-trip before mechanical damage occurs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Under-current dry-run auto trip (< 2.5 seconds)',
                'Over-voltage and lightning surge arrestor (Class II SPD)',
                'Automatic re-start timer allows borehole water to recharge',
                'Single-phasing & motor locked-rotor defense'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-lime-50/50 border border-lime-100 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-lime-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-lime-800 to-green-900 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-lime-200 font-bold">5km Long-Range LoRa Mesh</span>
            <h4 className="font-display font-black text-2xl text-white">Zero Monthly Telecom Fees</h4>
            <p className="text-xs text-lime-100 leading-relaxed font-normal">
              Traditional GSM modules require expensive monthly SIM subscriptions for every sensor node. DASA uses sub-GHz LoRa mesh to transmit data across 5km to a single solar base station.
            </p>
            <div className="space-y-2 text-xs font-mono text-lime-100 pt-2 border-t border-lime-700">
              <div>Up to 5 km line-of-sight range across farm hills</div>
              <div>Connects up to 64 wireless soil nodes per gateway</div>
              <div>Operates on free open industrial radio spectrum</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: FARMER ECONOMICS, AGRI TIERS & FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Farm Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Turnkey Agricultural Automation Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Designed for commercial farmers, polyhouse operators, and large multi-crop estate owners across India.
          </p>
        </div>

        {/* 3 Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Open Farm Starter Pack (5 Acres)',
              tag: 'OPEN-FIELD CROPS & SMALLHOLDINGS',
              scope: [
                'Solar pump VFD dry-run & surge protection controller',
                '2x Wireless root-zone soil moisture nodes (SDI-12)',
                'Motorized 2-inch solenoid valve for sub-plot control',
                'Mobile app in regional languages with WhatsApp alerts',
                'Rain-delay weather predictive irrigation logic'
              ],
              support: '1-Day Farm Setup & Local Training'
            },
            {
              name: 'Smart Orchard Suite (15–30 Acres)',
              tag: 'COMMERCIAL FRUIT & CASH CROPS',
              scope: [
                'LoRa base station with 5km line-of-sight range',
                '6x Wireless multi-depth soil moisture & EC nodes',
                'Multi-valve automatic 8-zone fertigation sequencer',
                'Borehole water level ultrasonic sensor node',
                'Solar VFD sun-tracking frequency optimization'
              ],
              support: 'Full Agronomic Soil Calibration Support'
            },
            {
              name: 'Commercial Polyhouse Suite (High-Tech)',
              tag: 'GREENHOUSES & EXOTIC HORTICULTURE',
              scope: [
                'Complete climate controller: Foggers, shade screens, vents',
                'Automated pulse drip fertigation with EC/pH sensors',
                'CO2 enrichment and circulation fan regulation',
                'High-definition canopy growth monitoring camera',
                '24/7 dedicated agronomy technical support SLA'
              ],
              support: 'Turnkey Polyhouse Climate Engineering'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-lime-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-lime-100 text-lime-950 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-lime-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-lime-700 hover:bg-lime-800 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Farm Assessment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Agri FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-lime-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-lime-700 uppercase tracking-wider">Farmer Decision FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by Farmers &amp; Growers</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'How does the solar pump protection operate during heavy cloudy or monsoon days?',
                a: 'The smart solar VFD tracks solar irradiation. When cloud cover reduces solar DC voltage below the minimum operating threshold, the controller smoothly down-shifts pump RPM or safely idles the motor, preventing dangerous stator stalling.'
              },
              {
                q: 'Do I need mobile internet or Wi-Fi coverage across my entire 25-acre farmland?',
                a: 'No. The soil sensors communicate with the central farm hub using long-range LoRa radio waves (up to 5 km). Only the single central hub requires a cellular 4G SIM or Wi-Fi connection, saving you massive monthly mobile recharge costs.'
              },
              {
                q: 'Can the mobile app send notifications in my local language like Tamil, Telugu, or Hindi?',
                a: 'Yes. Our smart agriculture mobile app supports English, Tamil, Telugu, Kannada, and Hindi. In addition, critical alerts (such as pump dry-run trips or valve status) can be broadcast directly as WhatsApp voice and text messages.'
              },
              {
                q: 'Are the outdoor field sensor nodes resistant to heavy monsoon rains and rodent damage?',
                a: 'All sensor nodes are housed in UV-stabilized IP67 weatherproof enclosures with armored, rodent-resistant cable sheathing. Soil probes use corrosion-proof 316 stainless steel electrodes designed to remain buried for 10+ years.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-lime-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-lime-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
