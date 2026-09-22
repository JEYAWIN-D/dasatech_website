import React from 'react'
import { Link } from '../components/Router'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import { Server, Activity, ArrowRight, Zap, RefreshCw, BarChart2, CheckCircle2 } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function TextileErpPage() {
  useSEO({
    title: 'Textile ERP Software with IoT | DASA TECH',
    description: 'Custom textile ERP development integrated with Industrial IoT. Monitor garment production, track inventory, and sync machine data in real-time.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Textile ERP with IoT",
      "provider": {
        "@type": "Organization",
        "name": "DASA TECH"
      },
      "serviceType": "ERP Software Development",
      "description": "Custom ERP software designed for textile and garment manufacturing, featuring direct integration with Industrial IoT (IIoT) sensors for real-time machine and production monitoring."
    }
  });

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono mb-6 font-bold">
              <Server className="w-4 h-4 text-indigo-600" />
              <span>INDUSTRY 4.0 TEXTILE SOLUTIONS</span>
            </div>
            
            <TextLineReveal
              as="h1"
              lines={['Textile ERP Software', 'Powered by IoT']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />
            
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              Modernize your garment and textile manufacturing plant. Our custom Textile ERP integrates directly with factory floor machines via Industrial IoT (IIoT), providing real-time production metrics, automated inventory management, and zero-latency workflow tracking.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PillButton to="/contact" variant="primary" arrow="right" size="lg">
                Request Textile ERP Demo
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-indigo-700 font-bold uppercase tracking-wider">
                    Live Factory Floor Sync
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Machine Uptime</div>
                  <div className="text-xl font-bold text-emerald-600">99.9%</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Production Rate</div>
                  <div className="text-xl font-bold text-indigo-600">Live Tracked</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Architecture Flow */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">How Textile ERP Integrates with IoT</h2>
            <p className="text-slate-600">
              We eliminate manual data entry by connecting your spinning, weaving, and knitting machines directly to your central ERP system.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center font-mono text-xs font-bold">
            <div className="p-6 rounded-2xl border-2 border-slate-200 bg-slate-50">
              <Activity className="w-8 h-8 mx-auto mb-3 text-indigo-600" />
              1. TEXTILE MACHINES & SENSORS
            </div>
            <ArrowRight className="hidden md:block w-6 h-6 mx-auto text-slate-400" />
            <div className="p-6 rounded-2xl border-2 border-slate-200 bg-slate-50">
              <Zap className="w-8 h-8 mx-auto mb-3 text-emerald-600" />
              2. IoT GATEWAY & DATA PROCESSING
            </div>
            <ArrowRight className="hidden md:block w-6 h-6 mx-auto text-slate-400" />
            <div className="p-6 rounded-2xl border-2 border-indigo-600 bg-indigo-50 text-indigo-900 shadow-md">
              <Database className="w-8 h-8 mx-auto mb-3 text-indigo-700" />
              3. TEXTILE ERP & LIVE DASHBOARD
            </div>
          </div>
        </Reveal>
      </section>

      {/* Features */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 bg-slate-50 border-y border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal delay={100}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full">
              <RefreshCw className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">Real-Time Production Monitoring</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Track yarn, fabric, and garment production metrics instantly. Identify bottlenecks before they delay shipments.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full">
              <Activity className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">Machine Health & Alerts</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                IoT sensors detect vibrations, temperature, and power usage. Get predictive maintenance alerts to prevent costly downtime.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full">
              <BarChart2 className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">Automated Inventory Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Automatically deduct raw materials and log finished goods as soon as machines complete a batch. 100% accurate stock levels.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold mb-10 text-slate-900 font-display text-center">Frequently Asked Questions</h2>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-6">
          <Reveal delay={100}>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="font-bold text-lg mb-2">What is Textile ERP?</h3>
              <p className="text-slate-600 text-sm">Textile ERP (Enterprise Resource Planning) is specialized software designed for the garment and textile manufacturing industry to manage inventory, supply chains, billing, and production workflows in a unified system.</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="p-6 rounded-2xl border border-slate-200 bg-white">
              <h3 className="font-bold text-lg mb-2">How does IoT integrate with Garment ERP?</h3>
              <p className="text-slate-600 text-sm">We install IoT sensors and gateways on your factory machines (spinning, weaving, sewing). These devices send live performance and production data directly into the ERP, eliminating manual data logging and enabling real-time dashboards.</p>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-indigo-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Upgrade Your Factory Today</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Connect with our engineers to discuss integrating custom Textile ERP and IoT telemetry into your production line.
          </p>
          <PillButton to="/contact" variant="primary" arrow="up-right" size="lg">
            Discuss Your IoT Project
          </PillButton>
        </div>
      </section>
    </div>
  )
}

function Database(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  )
}
