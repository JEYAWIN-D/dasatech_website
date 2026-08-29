import React, { useState } from 'react'
import {
  FolderGit2,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Database,
  Factory,
  Brain,
  Zap,
  Home,
  ShoppingBag
} from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import PageHeaderHero from '../components/PageHeaderHero'
import { PAGE_HERO_IMAGES } from '../constants/images.js'

const PROJECTS_STORY = [
  {
    id: 'erp-healthcare',
    number: '01',
    title: 'Smart Pharmacy & Multi-Branch Hospital ERP Suite',
    category: 'ERP & Cloud Architecture',
    client: 'Apex Healthcare Network (50+ Clinical Branches)',
    color: '#2563EB',
    icon: Database,
    heroStat: '50,000+ Daily Prescriptions',
    metric: '99.98% System Uptime',
    problem: 'Manual prescription entry and fragmented inventory across 50 branches caused stock-outs and medication expiry tracking challenges.',
    solution: 'Engineered a centralized PostgreSQL distributed ledger with real-time barcode POS cashier sync, rack-level mapping, automated drug expiry alerts, and integrated GST tax filing.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis Distributed Cache', 'Docker', 'REST API'],
    results: [
      'Sub-second billing latency (< 12ms per invoice)',
      '100% medication expiry loss prevention via batch mapping',
      'Automated single-click GST tax return generation'
    ]
  },
  {
    id: 'scada-manufacturing',
    number: '02',
    title: 'Industrial SCADA & Machine Telemetry Monitoring',
    category: 'Industrial Automation & SCADA',
    client: 'Precision Heavy Machinery Plant',
    color: '#0284C7',
    icon: Factory,
    heroStat: '120+ CNC Machines Telemetry',
    metric: '99.4% Machine Uptime',
    problem: 'Unscheduled spindle bearing failures on high-speed CNC milling cells caused factory downtime and delayed delivery schedules.',
    solution: 'Deployed ruggedized IoT edge gateways capturing high-frequency vibration and temperature telemetry directly into Siemens S7-1500 PLCs with automated anomaly alerts.',
    tech: ['Siemens S7-1500 PLC', 'OPC UA', 'Modbus TCP', 'Python Analytics', 'TimescaleDB', 'Grafana'],
    results: [
      'Bearing temperature anomalies detected ahead of failure',
      'Overall Equipment Effectiveness (OEE) improved to 99.4%',
      'Factory floor MES real-time supervisory cloud mirror'
    ]
  },
  {
    id: 'ai-vision-inspection',
    number: '03',
    title: 'High-Speed AI Optical Inspection Vision System',
    category: 'Artificial Intelligence & Vision',
    client: 'Automotive Component Foundry',
    color: '#7C3AED',
    icon: Brain,
    heroStat: '12 Castings / Sec Inspected',
    metric: '99.7% Accuracy',
    problem: 'Manual quality control struggled to detect hairline micro-fractures on rapid automotive foundry conveyor lines moving at 12 items/sec.',
    solution: 'Built custom optical computer vision pipelines running quantized neural networks on NVIDIA Jetson edge accelerators with instant pneumatic reject kickers.',
    tech: ['PyTorch', 'TensorRT', 'CUDA', 'OpenCV', 'NVIDIA Jetson AGX', 'FastAPI'],
    results: [
      '60+ FPS high-speed real-time optical inference',
      'Defect escape rate reduced to near zero',
      'Automated defect logging with optical bounding box archives'
    ]
  },
  {
    id: 'ems-energy-campus',
    number: '04',
    title: 'Campus-Wide IoT Energy Management System (EMS)',
    category: 'IoT Telemetry & Energy',
    client: 'Tech Park Campus (2.4M Sq. Ft.)',
    color: '#059669',
    icon: Zap,
    heroStat: '850 Smart Energy Meters',
    metric: '22% Peak Power Savings',
    problem: 'Surging peak utility tariff charges and lack of sub-meter visibility across commercial buildings caused heavy energy waste.',
    solution: 'Integrated RS485 Modbus telemetry gateways across 850 smart meters with automated chiller load shedding algorithms and solar microgrid orchestration.',
    tech: ['IoT Gateways', 'RS485 Modbus', 'TimescaleDB', 'Node.js', 'React Telemetry HUD'],
    results: [
      'Peak tariff penalty costs slashed by 22%',
      'Power Factor automatically stabilized to 0.99 PF',
      'Automated ESG carbon footprint compliance reporting'
    ]
  },
  {
    id: 'home-automation-villa',
    number: '05',
    title: 'Architectural Smart Living & Home Control',
    category: 'Smart Home & Automation',
    client: 'Modern Private Residential Estate',
    color: '#D97706',
    icon: Home,
    heroStat: '16 Integrated Living Zones',
    metric: '100% Offline Gateway Resilient',
    problem: 'Client required unified control of lighting, climate, motorized shades, and access control with absolute privacy and zero reliance on external cloud servers.',
    solution: 'Designed custom architectural glass touch keypads and deployed local edge gateways running Zigbee 3.0 and Matter protocols with local control.',
    tech: ['Matter', 'Zigbee 3.0', 'Local Edge Gateway', 'Custom Glass Keypads', 'ESP32'],
    results: [
      'Circadian lighting auto-synchronized across 16 zones',
      'Sub-20ms local response even during internet blackouts',
      'Biometric access control with tamper-proof event logs'
    ]
  },
  {
    id: 'ecommerce-marketplace',
    number: '06',
    title: 'High-Throughput Multi-Vendor E-Commerce Network',
    category: 'Web Applications & E-Commerce',
    client: 'B2B Wholesale Electronics Network',
    color: '#2563EB',
    icon: ShoppingBag,
    heroStat: '300+ Sub-Vendors',
    metric: '< 600ms Page Load',
    problem: 'Legacy monolithic e-commerce software crashed under high flash-sale concurrency and lacked automated multi-vendor reconciliation.',
    solution: 'Built a modern headless e-commerce architecture on React / Next.js with automated payout reconciliation and real-time 2-way ERP inventory sync.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'GraphQL', 'Stripe Connect', 'PostgreSQL'],
    results: [
      'Sub-second page loads with 99.99% availability',
      '300+ active vendor storefronts with automatic settlement',
      'Direct bidirectional synchronization with warehouse ERP inventory'
    ]
  }
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? PROJECTS_STORY
    : PROJECTS_STORY.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()))

  return (
    <div className="min-h-screen bg-white text-[#17121F] relative overflow-hidden">

      {/* 1. CINEMATIC PAGE HEADER HERO (Image 3D Zoom Back-To-Front + Delayed Text Reveal) */}
      <PageHeaderHero
        tagline="ENGINEERING CASE STUDIES & DEPLOYMENTS"
        title="Featured Projects & Case Studies"
        description="Production deployments across healthcare ERP, factory SCADA, AI optical defect vision, IoT telemetry mesh, and offline smart home living hubs."
        image={PAGE_HERO_IMAGES.projects.path}
        tools={['MedFlow ERP', 'Siemens SCADA', 'PyTorch AI', 'LoRaWAN IoT', 'Smart Home Hub']}
      />

      {/* Case Studies Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 border-b border-slate-100">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[#17121F] font-display">System Deployments</h2>
            <p className="text-sm text-[#6F6878]">Filter case studies by technology domain</p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2.5">
            {[
              { id: 'all', label: 'All Deployments' },
              { id: 'erp', label: 'ERP & Healthcare' },
              { id: 'scada', label: 'SCADA & Automation' },
              { id: 'ai', label: 'AI & Vision' },
              { id: 'iot', label: 'IoT & Telemetry' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-mono font-bold tracking-wide transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#6C2BD9] text-white shadow-xs'
                    : 'bg-[#F5F0FF] text-[#6F6878] hover:text-[#17121F] border border-[#DDD0FF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Progressive Case Studies Stream */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 space-y-16">
        {filtered.map((proj) => {
          const Icon = proj.icon
          return (
            <Reveal key={proj.id}>
              <div className="rounded-3xl p-8 lg:p-12 border border-slate-200 bg-white hover:border-blue-300 transition-all duration-200 shadow-md relative overflow-hidden group">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                  
                  {/* Left Column: Number, Title, Narrative Storytelling */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header Row */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-black text-slate-300">
                        {proj.number}
                      </span>
                      <div className="h-6 w-[1px] bg-slate-200" />
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-200 shadow-2xs"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700">
                        {proj.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-tight">
                      {proj.title}
                    </h2>

                    <div className="text-xs font-mono text-slate-500 font-medium">
                      Deployment Target: <span className="text-slate-900 font-semibold">{proj.client}</span>
                    </div>

                    {/* Problem & Solution Narrative */}
                    <div className="space-y-4 pt-2">
                      <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-1">
                        <div className="text-[11px] font-mono font-bold text-rose-700 uppercase tracking-wider">
                          Operational Challenge:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {proj.problem}
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 space-y-1">
                        <div className="text-[11px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                          Engineered DASA Solution:
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {proj.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results / Key Metrics */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider">
                        Validated Outcomes:
                      </div>
                      {proj.results.map((res, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Stack Pills */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {proj.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-3 py-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Key Impact Highlight Card */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xs text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>MEASURED IMPACT</span>
                      </div>

                      <div className="space-y-1">
                        <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-display">
                          {proj.metric}
                        </div>
                        <div className="text-xs font-mono text-slate-500 font-semibold uppercase tracking-wider">
                          Primary Engineering Result
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 text-left shadow-2xs">
                        <div className="text-[11px] font-mono text-slate-500">Scale of Operation:</div>
                        <div className="text-sm font-bold text-slate-900 font-mono">{proj.heroStat}</div>
                      </div>

                      <div className="space-y-2.5">
                        <PillButton
                          to={proj.id === 'erp-healthcare' ? '/projects/pharmapulse' : `/projects/${proj.id}`}
                          variant="primary"
                          arrow="up-right"
                          size="md"
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20"
                        >
                          View Full Case Study
                        </PillButton>

                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-display font-bold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-2xs"
                        >
                          <span>Request Architecture Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Reveal>
          )
        })}
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Have a Similar Engineering Goal?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Contact Jeyawin D and our systems engineering team to review technical specifications and project feasibility.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start Project Discussion
          </PillButton>
        </div>
      </section>
    </div>
  )
}
