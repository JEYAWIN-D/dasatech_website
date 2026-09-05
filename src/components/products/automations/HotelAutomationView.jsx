import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Hotel, Key, Bed, Sun, Moon, ShieldCheck, CheckCircle2,
  ArrowRight, PhoneCall, Check, Sparkles, Sliders, Bell,
  BellOff, DoorClosed, FileText, ChevronDown, Award, TrendingDown
} from 'lucide-react'
import { Link } from '../../Router'

export default function HotelAutomationView() {
  const [keycardIn, setKeycardIn] = useState(true)
  const [dndActive, setDndActive] = useState(false)
  const [activeStep, setActiveStep] = useState(1)
  const [openFaq, setOpenFaq] = useState(null)

  const JOURNEY_STEPS = [
    {
      step: '01',
      title: 'Pre-Arrival PMS Pre-Cooling',
      time: '20 Mins Prior to Check-in',
      badge: 'GUEST COMFORT GUARANTEE',
      desc: 'Front desk PMS assigns Suite 504. System automatically pre-cools room from 28°C standby down to 22°C comfort so guest steps into a refreshing climate.'
    },
    {
      step: '02',
      title: 'Keycard Tap & Foyer Welcome Scene',
      time: 'Arrival Moment',
      badge: 'WOW FACTOR CHOREOGRAPHY',
      desc: 'Guest unlocks door with RFID keycard. Warm cove illumination fades in, motorized sheer curtains glide open to panoramic city view, and soft welcome music plays.'
    },
    {
      step: '03',
      title: 'Bedside Master Digital Touch Controls',
      time: 'During Evening Stay',
      badge: 'INTUITIVE BEDSIDE LUXURY',
      desc: 'Custom engraved glass keypad on nightstand provides independent reading lamp dimming, AC temperature fine-tuning, and a single "Master Off" sleep button.'
    },
    {
      step: '04',
      title: 'Privacy (DND) & Housekeeping Sync',
      time: 'Next Morning',
      badge: 'DISCRETE SERVICE ORCHESTRATION',
      desc: 'Activating "Do Not Disturb" illuminates the exterior corridor doorplate and automatically mutes the doorbell chime to ensure uninterrupted sleep.'
    },
    {
      step: '05',
      title: 'Express Checkout & Eco Power Preservation',
      time: 'Departure',
      badge: '40% ENERGY PRESERVATION',
      desc: 'Upon keycard removal, all non-essential lighting, TV displays, and bathroom geysers turn off immediately. AC shifts to 26°C eco setback, slashing utility costs.'
    }
  ]

  return (
    <div className="space-y-24 text-slate-800">

      {/* ═════════════════════════════════════════════════════════
          PAGE 1: HERO & 5-STAR LUXURY SUITE TERMINAL
          Theme: Champagne Gold (#D97706), Caramel Bronze (#B45309), Silk Ivory
      ═════════════════════════════════════════════════════════ */}
      <section className="relative rounded-[2.5rem] p-8 sm:p-14 lg:p-16 overflow-hidden bg-gradient-to-b from-amber-50/70 via-[#FFFDF5] to-orange-50/40 border border-amber-300/80 shadow-xl">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-gradient-to-b from-amber-300/30 to-transparent blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12]">
              Guest Room Management Systems <span className="text-amber-800">(GRMS)</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Deliver unforgettable guest luxury with choreographed keycard arrival scenes, bedside glass touchpads, and discrete privacy doorplates, while saving up to 40% on vacant room air-conditioning costs through native PMS integration.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-2xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs tracking-wide shadow-lg shadow-amber-950/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Request Hotel Demo Kit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+917639930148"
                className="px-6 py-3.5 rounded-2xl bg-white border border-amber-300 text-amber-950 text-xs font-semibold hover:bg-amber-50 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-800" />
                <span>Call Hospitality Consultant</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {[
                { val: 'Welcome Scene', lbl: 'Keycard Auto-Choreography' },
                { val: 'DND / MUR', lbl: 'Illuminated Glass Doorplate' },
                { val: 'Opera & IDS', lbl: 'Native PMS Connectivity' },
                { val: '40% Saved', lbl: 'Unsold Room HVAC Setback' }
              ].map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/90 border border-amber-200 shadow-2xs">
                  <div className="font-display font-black text-lg text-amber-950">{m.val}</div>
                  <div className="text-[11px] text-slate-600 font-medium leading-tight mt-0.5">{m.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Suite 504 Interactive Hospitality Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-amber-300 shadow-xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-amber-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-amber-950 uppercase">Suite 504 GRMS Hub</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-bold">
                  Opera PMS Linked
                </span>
              </div>

              {/* Virtual RFID Keycard Dock */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-slate-500 block text-[11px]">RFID KEYCARD STATUS:</span>
                  <strong className="text-base font-bold text-slate-900">
                    {keycardIn ? 'Keycard Inserted' : 'Room Vacant'}
                  </strong>
                </div>
                <button
                  onClick={() => setKeycardIn(!keycardIn)}
                  className={`px-3.5 py-1.5 rounded-xl font-bold cursor-pointer transition-all ${
                    keycardIn
                      ? 'bg-amber-800 hover:bg-amber-900 text-white shadow-sm'
                      : 'bg-emerald-700 hover:bg-emerald-800 text-white'
                  }`}
                >
                  {keycardIn ? 'Simulate Removal' : 'Insert RFID Card'}
                </button>
              </div>

              {/* Corridor Doorplate Switcher */}
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-medium">CORRIDOR DOORBELL PLATE</span>
                  <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${
                    dndActive ? 'bg-rose-600 text-white' : 'bg-emerald-700 text-white'
                  }`}>
                    {dndActive ? 'DO NOT DISTURB (DND)' : 'MAKE UP ROOM (MUR)'}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-600">Guest Privacy Toggle:</span>
                  <button
                    onClick={() => setDndActive(!dndActive)}
                    className="px-3 py-1 rounded-lg bg-white border border-amber-300 text-amber-950 font-bold hover:bg-amber-100/60 cursor-pointer transition-colors"
                  >
                    Toggle Switch
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-100/80 border border-amber-300/80 text-xs font-mono text-amber-950 text-center font-medium">
                {keycardIn
                  ? 'Welcome Scene Engaged • Ambient 22°C • Mood Lamps On'
                  : 'Eco Standby Engaged • AC shifted to 26°C setback'}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 2: THE 5-STAGE SEAMLESS GUEST STAY JOURNEY
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">The 5-Star Experience Journey</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            How GRMS Transforms the Entire Guest Stay
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            From the moment a room is allocated at front desk check-in to express morning checkout, see how automation elevates guest satisfaction.
          </p>
        </div>

        {/* 5 Stepped Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {JOURNEY_STEPS.map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-white border border-amber-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-amber-100 text-amber-900">
                    Step {step.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{step.time}</span>
                </div>
                <h3 className="font-display font-black text-base text-slate-900 mt-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
              </div>
              <div className="text-[10px] font-mono text-amber-900 font-bold pt-2 border-t border-slate-100">
                {step.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 3: HOTELIER FINANCIAL IMPACT & PMS INTEGRATION
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Hotel Operating Economics</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Save ₹18,00,000+ Annually on Unsold Room Cooling
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            In luxury hotels, HVAC air-conditioning represents up to 60% of total electrical utility bills. DASA GRMS automates setback without sacrificing guest comfort.
          </p>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-amber-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase">PMS Integration Hub</span>
            <h3 className="font-display font-black text-2xl text-slate-900">
              Direct Two-Way API Sync with Opera &amp; Major Hospitality Systems
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              DASA GRMS connects directly with Oracle Hospitality Opera, IDS Next, Prologic, and Infor PMS. When front desk checks a guest in, the room controller receives the booking signal instantly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Oracle Opera PMS certified interface',
                'IDS Next 2-way room status synchronization',
                'Real-time housekeeping notification on Make Up Room (MUR)',
                'Instant alert to security if guest door remains propped open'
              ].map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-amber-800 to-orange-900 text-white space-y-4 shadow-lg">
            <span className="text-xs font-mono uppercase text-amber-200 font-bold">150-Room Hotel Case Study</span>
            <h4 className="font-display font-black text-2xl text-white">₹1,50,000 Monthly Power Savings</h4>
            <p className="text-xs text-amber-100 leading-relaxed font-normal">
              Unoccupied rooms left cooling at 20°C run up massive electricity bills. DASA automated setback saves an average of 4.2 kWh per room per day.
            </p>
            <div className="space-y-2 text-xs font-mono text-amber-100 pt-2 border-t border-amber-700">
              <div>150 Rooms x 4.2 kWh saved daily</div>
              <div>Total Energy Saved: 18,900 kWh / month</div>
              <div>Full GRMS investment amortized in 11 months</div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════
          PAGE 4: HOSPITALITY HARDWARE TIERS & HOTELIER FAQ
      ═════════════════════════════════════════════════════════ */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Hospitality Deployment Packages</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900">
            Engineered for Boutique Resorts to 5-Star Hotel Chains
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Tailored hardware configurations featuring custom engraved tempered glass, backlighting colors matching your brand, and PMS integrations.
          </p>
        </div>

        {/* 3 Hospitality Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Boutique Heritage & Resort Pack',
              tag: 'RESORTS & HERITAGE PROPERTIES',
              scope: [
                'Corridor doorplate with DND / MUR / Bell button',
                'RFID keycard slot with welcome scene logic',
                'Dual-bedside glass touch keypads with master off',
                'Motorized curtain controller for balcony suites',
                'Stand-alone smart energy management gateway'
              ],
              support: 'Custom Brass / Wood Finish Keypads'
            },
            {
              name: 'Luxury City Business Hotel Suite',
              tag: 'BUSINESS HOTELS & CHAINS',
              scope: [
                'Complete two-way PMS integration (Opera / IDS Next)',
                'Digital smart thermostat with guest display screen',
                'Corridor doorplates with room number illumination',
                'Bathroom dimming & anti-fog mirror heater relay',
                'Central hotelier facilities management dashboard'
              ],
              support: 'Full PMS Commissioning & Certification'
            },
            {
              name: '5-Star Presidential & Villa Suite',
              tag: 'LUXURY VILLAS & PRESIDENTIAL SUITES',
              scope: [
                'Multi-room audio entertainment synchronization',
                'Private plunge pool & jacuzzi temperature controls',
                'Motorized blackout & sheer dual drapery tracks',
                'Touchless mobile BLE smartphone room entry key',
                'Dedicated 24/7 hospitality engineering SLA'
              ],
              support: 'Custom Architectural Interior Integration'
            }
          ].map((pkg, i) => (
            <div key={i} className="p-7 rounded-3xl bg-white border border-amber-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-950 block w-fit">
                  {pkg.tag}
                </span>
                <h4 className="font-display font-black text-xl text-slate-900">{pkg.name}</h4>
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {pkg.scope.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-mono text-slate-500">{pkg.support}</div>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                >
                  <span>Request Hospitality Demo Kit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Hotelier FAQ */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-amber-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider">Hotelier Decision FAQ</span>
            <h3 className="font-display font-black text-2xl text-slate-900">Frequently Asked Questions by General Managers</h3>
          </div>

          <div className="divide-y divide-slate-200 max-w-3xl mx-auto text-xs sm:text-sm">
            {[
              {
                q: 'Can DASA GRMS be installed during hotel renovations without rewiring the building?',
                a: 'Yes. Our room controllers utilize RS-485 Modbus or secure wireless sub-GHz mesh protocols, fitting inside standard electrical flush boxes behind headboards or wardrobes without needing whole-floor conduit rewiring.'
              },
              {
                q: 'How does the system interface with our existing electronic Vingcard / Salto door locks?',
                a: 'DASA GRMS integrates with all leading hospitality electronic door lock manufacturers (Vingcard, Salto, Dormakaba, Onity). When the guest taps their RFID card at the door, an dry-contact or wireless trigger immediately signals the room controller to fire the welcome scene.'
              },
              {
                q: 'What happens when a guest activates "Do Not Disturb" (DND)?',
                a: 'The corridor doorplate immediately illuminates a discrete red DND indicator, and the doorbell touch button is muted. Housekeeping staff can see room status in real-time on their floor dashboard, preventing awkward door knocking.'
              },
              {
                q: 'Can we customize the glass touchpad faceplates with our hotel brand logo and custom icons?',
                a: 'Yes. We offer complete custom laser-engraved branding, bespoke icons for curtains, reading lights, master off, and mood scenes, with backlit LEDs tailored to match your interior designer’s color scheme.'
              }
            ].map((faq, i) => (
              <div key={i} className="py-4 space-y-2">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left flex justify-between items-center font-bold text-slate-900 cursor-pointer hover:text-amber-800 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-amber-800 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
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
