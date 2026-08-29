import React from 'react'
import { ShoppingCart, ShoppingBag, CreditCard, Layers, ShieldCheck, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'

export default function EcommercePage() {
  const ecomFeatures = [
    {
      icon: ShoppingBag,
      title: 'Custom Multi-Vendor Platforms',
      desc: 'Scalable B2B & B2C marketplaces supporting sub-vendor stores, automated commission splits, and customized vendor dashboards.'
    },
    {
      icon: Layers,
      title: 'Headless Commerce Architecture',
      desc: 'Decoupled frontend powered by Next.js / React with high-speed Node.js backends for ultra-fast page speeds.'
    },
    {
      icon: CreditCard,
      title: 'Global Payment Gateways',
      desc: 'Seamless integration with Stripe, Razorpay, UPI, multi-currency checkout, and recurring subscription billing.'
    },
    {
      icon: Zap,
      title: 'AI Recommendation Engines',
      desc: 'Increase average order value (AOV) with personalized product recommendations, smart search autocomplete, and dynamic pricing.'
    },
    {
      icon: ShieldCheck,
      title: 'Real-Time Inventory & ERP Sync',
      desc: 'Automatic 2-way synchronization between online store orders, warehouse stock levels, and central ERP inventory.'
    },
    {
      icon: ShoppingCart,
      title: 'Optimized Checkout & Conversion',
      desc: 'Single-page frictionless checkout flows, cart recovery automation, dynamic shipping calculation, and tax compliance.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <ShoppingCart className="w-4 h-4 text-blue-600" />
              <span>DIGITAL COMMERCE ENGINEERING</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['High-Performance', 'E-Commerce Solutions']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              We design and build custom, high-converting e-commerce web applications, multi-vendor marketplaces, and mobile shopping apps equipped with automated inventory management, payment security, and sub-second page performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Build Your E-Commerce Store
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecomFeatures.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={idx}>
                <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-300 transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 font-display">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Ready to Scale Your Online Revenue?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Consult our e-commerce engineering specialists to design a tailor-made shopping experience for your brand.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Start Your E-Commerce Build
          </PillButton>
        </div>
      </section>
    </div>
  )
}
