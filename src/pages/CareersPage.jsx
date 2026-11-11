import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Code, 
  Layers, 
  Rocket, 
  Users, 
  HeartHandshake, 
  ExternalLink,
  ChevronDown,
  X
} from 'lucide-react'
import { Link } from '../components/Router'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import SignalBrandIcon from '../components/SignalBrandIcon'

const OPEN_POSITIONS = [
  {
    id: 'fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Software Engineering',
    location: 'Erode, Tamil Nadu (Hybrid / On-site)',
    type: 'Full-time',
    experience: '2 - 5 Years',
    summary: 'Lead development of modular enterprise ERP architectures, real-time sync engines, and customer-facing web platforms with React and Node.js.',
    responsibilities: [
      'Architect robust, multi-tenant database schemas in PostgreSQL with offline-first caching.',
      'Build responsive, animation-rich dashboards using React 18, Tailwind CSS, and Framer Motion.',
      'Develop high-throughput REST and WebSocket APIs powering pharmacy, school, and factory ERPs.',
      'Conduct code reviews, mentor junior developers, and ensure 99.99% uptime deployment pipelines.'
    ],
    requirements: [
      'Proficiency in React.js, Node.js, Express, and modern JavaScript (ES6+).',
      'Solid experience with relational databases (PostgreSQL, SQLite) and ORMs/query builders.',
      'Familiarity with containerization (Docker) and cloud deployments.',
      'Strong problem-solving ability and passion for clean, maintainable architecture.'
    ]
  },
  {
    id: 'ai-computer-vision-engineer',
    title: 'AI & Computer Vision Engineer',
    department: 'AI & Research Lab',
    location: 'Erode, Tamil Nadu (Hybrid / On-site)',
    type: 'Full-time',
    experience: '1 - 4 Years',
    summary: 'Design and deploy real-time optical inspection models, object detection pipelines, and neural edge inference for industrial factory automation.',
    responsibilities: [
      'Train, fine-tune, and quantize YOLOv8 and custom CNN/ViT architectures for optical defect detection.',
      'Optimize neural networks for sub-50ms inference on NVIDIA Jetson and edge microcontrollers using TensorRT.',
      'Integrate camera RTSP streams into live browser telemetry HUDs with bounding box overlays.',
      'Collaborate with hardware engineers to calibrate lighting, lenses, and camera trigger timings.'
    ],
    requirements: [
      'Strong proficiency in Python, PyTorch, and OpenCV.',
      'Experience with model quantization, ONNX export, and TensorRT optimization.',
      'Understanding of industrial camera protocols (GigE Vision, USB3 Vision, RTSP).',
      'Background in Computer Science, Robotics, or Electrical Engineering.'
    ]
  },
  {
    id: 'embedded-iot-engineer',
    title: 'Embedded Systems & IoT Firmware Engineer',
    department: 'Hardware & IoT',
    location: 'Erode, Tamil Nadu (On-site Lab)',
    type: 'Full-time',
    experience: '1 - 3 Years',
    summary: 'Develop robust embedded C/C++ firmware, NFC smart station controllers, and wireless sensor telemetry gateways for factory automation.',
    responsibilities: [
      'Write modular, low-power firmware for ESP32, STM32, and Nordic microcontrollers in C/C++.',
      'Interface hardware with RS485 Modbus, CAN-bus, SPI, I2C, and NFC reader modules.',
      'Implement encrypted MQTT and mutual TLS (mTLS) over Wi-Fi and Cellular/NB-IoT.',
      'Prototype PCB breakout boards, validate sensor calibration, and perform thermal testing.'
    ],
    requirements: [
      'Solid proficiency in C/C++ for embedded microcontrollers (FreeRTOS or bare-metal).',
      'Hands-on experience with hardware debugging tools (oscilloscopes, logic analyzers).',
      'Familiarity with industrial fieldbus protocols (Modbus RTU/TCP).',
      'Passionate about building tangible hardware that interacts with physical machines.'
    ]
  },
  {
    id: 'product-designer-uiux',
    title: 'UI/UX Product Designer & Visual Lead',
    department: 'Product & Design',
    location: 'Remote / Hybrid (India)',
    type: 'Full-time',
    experience: '1 - 4 Years',
    summary: 'Craft world-class enterprise software interfaces, high-density data tables, mobile applications, and interactive brand experiences.',
    responsibilities: [
      'Design intuitive, ergonomic workflows for high-stress cashier POS screens, clinic dashboards, and factory control HUDs.',
      'Maintain and expand the DASA Tech design token system in Figma with dark and light themes.',
      'Prototype dynamic micro-interactions, spring transitions, and data visualizations.',
      'Collaborate directly with frontend engineers to ensure pixel-perfect CSS and layout parity.'
    ],
    requirements: [
      'Outstanding portfolio showcasing complex web application or SaaS design work.',
      'Mastery of Figma, auto-layout, design tokens, and interactive components.',
      'Understanding of frontend CSS flexbox/grid mechanics and developer handoff.',
      'Eye for modern aesthetic typography, contrast hierarchy, and micro-animations.'
    ]
  }
]

const PERKS = [
  {
    icon: Rocket,
    title: 'Mission-Critical Impact',
    desc: 'Your code runs actual pharmacies, schools, and factory floors. You see the tangible real-world outcome of what you build.'
  },
  {
    icon: Cpu,
    title: 'Hardware & AI Lab Access',
    desc: 'Direct access to industrial sensors, microcontrollers, high-speed vision cameras, and GPU compute clusters for rapid experimentation.'
  },
  {
    icon: Users,
    title: 'Flat & Autonomous Culture',
    desc: 'Work directly alongside company founders. No bureaucratic layers or endless meetings—just builders building great products.'
  },
  {
    icon: Sparkles,
    title: 'Modern Technology Stacks',
    desc: 'Never get stuck maintaining legacy stacks. We build with React 18, Vite, Framer Motion, Node.js, Python, and modern edge infrastructure.'
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null)
  const [copiedSignal, setCopiedSignal] = useState(false)

  const handleCopySignal = () => {
    navigator.clipboard.writeText('dasatech.99')
    setCopiedSignal(true)
    setTimeout(() => setCopiedSignal(false), 2500)
  }

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-slate-900 select-none">
      
      {/* Top Hero Section */}
      <section className="relative pt-36 sm:pt-40 pb-16 overflow-hidden border-b border-[#EFE6D8] bg-gradient-to-b from-white via-[#FAF7F2] to-white">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-rose-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-amber-600" />
              <span>CAREERS AT DASA TECH</span>
            </div>
          </Reveal>

          <TextLineReveal
            as="h1"
            lines={['Build Real Systems.', 'Solve Difficult Industrial Problems.']}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 mb-6"
          />

          <Reveal delay={0.2}>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal mb-8">
              We are assembling a passionate team of full-stack engineers, AI specialists, and embedded systems architects dedicated to building high-concurrency enterprise software and factory automation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#open-positions"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-display text-sm font-bold shadow-md shadow-amber-500/20 hover:opacity-95 transition-all"
              >
                View Open Positions ({OPEN_POSITIONS.length})
              </a>
              <button
                type="button"
                onClick={handleCopySignal}
                className="px-6 py-3 rounded-full bg-white border border-[#EFE6D8] text-slate-700 font-display text-sm font-bold shadow-xs hover:border-amber-400 hover:text-amber-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <SignalBrandIcon className="w-4 h-4 text-amber-600" />
                <span>{copiedSignal ? 'Signal @dasatech.99 Copied!' : 'Signal: @dasatech.99'}</span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why DASA TECH Section */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-3">
              Why Engineers Choose DASA TECH
            </h2>
            <p className="text-sm text-slate-600">
              We believe great engineering comes from high autonomy, rigorous standards, and working on products that directly affect operational businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk, idx) => {
              const IconComp = perk.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#EFE6D8] rounded-3xl p-6 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-3"
                >
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {perk.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Reveal>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
              Current Opportunities
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900">
              Open Engineering Roles
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-slate-500">
            {OPEN_POSITIONS.length} active roles across engineering &amp; design
          </p>
        </div>

        <div className="space-y-4">
          {OPEN_POSITIONS.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#EFE6D8] rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-amber-400 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {job.experience}
                  </span>
                </div>

                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 group-hover:text-amber-700 transition-colors">
                  {job.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.summary}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedJob(job)
                  }}
                  className="w-full lg:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-display text-xs sm:text-sm font-bold shadow-xs hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Role Details &amp; Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Role Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#EFE6D8] relative space-y-6"
            >
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
                  <span>{selectedJob.department}</span>
                  <span>•</span>
                  <span>{selectedJob.type}</span>
                </div>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                  {selectedJob.title}
                </h2>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedJob.location}</span>
                  <span>•</span>
                  <span>Exp: {selectedJob.experience}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#EFE6D8] text-sm text-slate-700 leading-relaxed">
                {selectedJob.summary}
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-slate-900">Key Responsibilities:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {selectedJob.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-slate-900">Requirements &amp; Technical Skills:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Send CV with portfolio / GitHub link directly to our founders via Signal or our Consultation Portal.
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <a
                    href="https://signal.me/#u/dasatech.99"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#3A76F0] hover:bg-[#2F65D6] text-white font-display text-sm font-bold shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
                  >
                    <SignalBrandIcon className="w-4 h-4" />
                    <span>Signal: @dasatech.99</span>
                  </a>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-600 text-white font-display text-sm font-bold shadow-lg shadow-amber-500/20 hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>Apply via Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* General Application Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="bg-gradient-to-br from-[#120D16] via-[#1A1220] to-[#0E0A12] text-white rounded-3xl p-8 sm:p-12 border border-amber-500/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Open Applications
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Send an Open Application
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              If you are an exceptional engineer, researcher, or systems designer passionate about building industrial tech, we want to hear from you regardless of listed openings.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://signal.me/#u/dasatech.99"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-full bg-[#3A76F0] text-white font-display text-sm font-bold shadow-xl hover:bg-[#2F65D6] transition-all flex items-center gap-2"
            >
              <SignalBrandIcon className="w-4 h-4" />
              <span>Connect on Signal</span>
            </a>
            <Link
              to="/contact"
              className="px-6 py-4 rounded-full bg-white text-amber-700 font-display text-sm font-bold shadow-xl hover:bg-amber-50 transition-all flex items-center gap-2"
            >
              <span>Submit Career Brief</span>
              <ArrowRight className="w-4 h-4 text-amber-700" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
