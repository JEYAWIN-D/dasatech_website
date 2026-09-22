import React, { useState } from 'react'
import { Database, Package, ShieldCheck, DollarSign, Stethoscope, ArrowRight, CheckCircle2 } from 'lucide-react'
import ErpBillingSimulator from '../components/ErpBillingSimulator'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import { Link } from '../components/Router'
import { useSEO } from '../hooks/useSEO'

export default function ErpPage() {
  useSEO({
    title: 'ERP Software Development Company | DASA TECH',
    description: 'Custom ERP software development company offering Pharmacy ERP, School ERP, Textile ERP, and Garment Manufacturing ERP solutions with IoT integration.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ERP Software Development",
      "provider": {
        "@type": "Organization",
        "name": "DASA TECH"
      },
      "serviceType": "Enterprise Resource Planning",
      "description": "Custom enterprise resource planning software including inventory, billing, textile manufacturing, and pharmacy management."
    }
  });

  const [activeTab, setActiveTab] = useState('pharmacy')

  const modules = [
    {
      id: 'pharmacy',
      name: 'Pharmacy ERP',
      icon: Stethoscope,
      badge: 'Healthcare & Retail',
      desc: 'Complete drug inventory batch management, expiry alerts, rack tracking, GST billing, supplier purchase orders, and prescription history.',
      metrics: ['100% Expiry Protection', 'Sub-second Billing', 'Rack-level Stock Mapping']
    },
    {
      id: 'hospital',
      name: 'Hospital ERP',
      icon: ShieldCheck,
      badge: 'Enterprise Healthcare',
      desc: 'Inpatient (IPD) and Outpatient (OPD) management, doctor scheduling, electronic medical records (EMR), lab test tracking, and insurance claims.',
      metrics: ['Integrated EMR', 'OPD/IPD Queue Sync', 'Lab Automation']
    },
    {
      id: 'inventory',
      name: 'Manufacturing & Inventory ERP',
      icon: Package,
      badge: 'Supply Chain & Plant',
      desc: 'Multi-warehouse stock tracking, Bill of Materials (BOM), automated reorder triggers, purchase requisitions, and barcode scanning.',
      metrics: ['Multi-Warehouse Sync', 'Automated Reordering', 'BOM Calculation']
    },
    {
      id: 'finance',
      name: 'Finance & GST Accounting',
      icon: DollarSign,
      badge: 'Financial Intelligence',
      desc: 'Double-entry general ledger, automated GST return generation, accounts receivable/payable, bank reconciliation, and profit/loss reports.',
      metrics: ['Automated GST Tax Filing', 'Real-Time P&L', 'Multi-Currency Ledger']
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Database className="w-4 h-4 text-blue-600" />
              <span>FLAGSHIP MODULAR ENTERPRISE PLATFORM</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Custom ERP Software', 'Development Company']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              A modern, high-speed Enterprise Resource Planning suite designed for healthcare, manufacturing, retail, and pharmaceutical industries. Unify billing, inventory, and financial accounting into a zero-latency cloud environment.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Request ERP Demo
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    PostgreSQL Distributed Ledger
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  Sync: 100% Online
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Database Latency</div>
                  <div className="text-xl font-bold text-slate-900">&lt; 11.4ms</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">GST Tax Engine</div>
                  <div className="text-xl font-bold text-blue-600">Automated 100%</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Branch Sync Nodes:</span>
                  <span className="text-emerald-600 font-bold">Multi-Site Active</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Inventory Expiry Guard:</span>
                  <span className="text-emerald-600 font-bold">Batch Mapped (Zero Loss)</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Live Working ERP Billing & Inventory Simulator */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Reveal>
          <ErpBillingSimulator />
        </Reveal>
      </section>

      {/* Interactive ERP Module Showcase */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Tailored Industry ERP Modules</h2>
            <p className="text-slate-600">
              Select an ERP module to explore how DASA TECH optimizes operational workflows.
            </p>
          </div>
        </Reveal>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((m) => {
            const Icon = m.icon
            const isActive = activeTab === m.id
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`px-5 py-3 rounded-2xl font-mono font-bold text-xs flex items-center gap-2.5 transition duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs border-blue-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{m.name}</span>
              </button>
            )
          })}
        </div>

        {/* Active Tab Panel with Inside-to-Outside Hover Reveal */}
        {modules.map((m) => {
          if (m.id !== activeTab) return null
          return (
            <Reveal key={m.id}>
              <div className="rounded-3xl p-8 lg:p-12 border-2 border-slate-200 hover:border-[#6D28D9]/40 bg-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-slate-900 shadow-md hover:shadow-2xl hover:shadow-[#6D28D9]/15 transition-all duration-500 relative overflow-hidden group select-none">
                
                {/* Center Radiant Bloom */}
                <div className="absolute inset-0 bg-radial-gradient from-[#6D28D9]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold">
                    {m.badge}
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 font-display">{m.name}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{m.desc}</p>
                  <div className="space-y-3 pt-2">
                    {m.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-slate-700 font-medium p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#6D28D9]/30 hover:bg-[#FAF8FF] hover:scale-102 transition-all duration-300 shadow-2xs"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#6D28D9] shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-[#6D28D9] font-bold hover:text-[#5B21B6] transition font-mono text-sm group/link"
                    >
                      <span>Schedule specialized {m.name} walkthrough</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="relative z-10 rounded-2xl p-6 border border-slate-200 bg-slate-50 font-mono text-xs text-slate-700 shadow-2xs hover:shadow-lg hover:border-[#6D28D9]/40 transition-all duration-400">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4 text-[#6D28D9] font-bold">
                    <span>LIVE DASHBOARD STREAM</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between shadow-2xs hover:scale-102 transition-transform duration-300">
                      <span>Module Status</span>
                      <span className="text-emerald-600 font-bold">OPERATIONAL</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between shadow-2xs hover:scale-102 transition-transform duration-300">
                      <span>Real-Time Sync Latency</span>
                      <span className="text-blue-600 font-bold">12ms</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white border border-slate-200 flex justify-between shadow-2xs hover:scale-102 transition-transform duration-300">
                      <span>Database Engine</span>
                      <span className="text-slate-900 font-bold">PostgreSQL + Redis</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Transform Enterprise Operations Today</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Get a tailored ERP deployment plan customized to your exact inventory, hospital, or billing workflows.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Request Custom ERP Quote
          </PillButton>
        </div>
      </section>
    </div>
  )
}
