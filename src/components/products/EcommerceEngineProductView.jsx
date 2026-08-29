import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ShoppingCart, Smartphone, CreditCard, Sparkles, ArrowRight, ArrowLeft,
  CheckCircle2, Database, Check, Clock, Server, Layers,
  FileText, Search, Activity, RefreshCw, DollarSign, Store
} from 'lucide-react'
import { Link } from '../Router'
import ProductImplementationShowcase from './ProductImplementationShowcase'

// ─────────────────────────────────────────────────────────────
// DASA COMMERCEENGINE PRODUCT VIEW (ecommerce-engine)
// Unique Theme: Headless Commerce & Multi-Vendor Marketplace Studio
// Color Accents: Vivid Violet (#7C3AED), Sunset Rose (#F43F5E), Pure White
// Unique Interactive Features:
// 1. Dual Storefront & Vendor Studio Hero
// 2. Interactive 1-Click Frictionless Checkout Simulator
// 3. Multi-Vendor Commission Split Calculator
// ─────────────────────────────────────────────────────────────

// Product Screen Image Assets defined directly inside EcommerceEngineProductView component file
const ECOMMERCE_ENGINE_SCREEN_ASSETS = [
  {
    id: 'storefront',
    module: 'Storefront Studio',
    title: 'Headless Next.js Storefront & Edge Catalog',
    subtitle: 'Edge-rendered Next.js digital storefront delivering sub-600ms page loads and real-time inventory.',
    tag: 'Next.js Storefront',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1400&q=90',
    route: 'store.dasatech.com/catalog',
    specs: ['Next.js Edge SSR', 'Sub-600ms Speed', 'GraphQL Catalog']
  },
  {
    id: 'checkout',
    module: 'Checkout Engine',
    title: 'Frictionless 1-Click Checkout & Payment Gateway',
    subtitle: 'Unified payment modal supporting Razorpay, Apple Pay, UPI, and instant WhatsApp order notifications.',
    tag: '1-Click Checkout',
    img: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1400&q=90',
    route: 'checkout.dasatech.com/pay',
    specs: ['1-Click Checkout', 'WhatsApp Receipt', 'Razorpay Integration']
  },
  {
    id: 'vendor-portal',
    module: 'Vendor Portal',
    title: 'Multi-Vendor Seller Hub & Automated Commission Splits',
    subtitle: 'Dedicated portal for marketplace sellers to manage products, view sales, and trace commission payouts.',
    tag: 'Vendor Marketplace',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    route: 'vendor.dasatech.com/dashboard',
    specs: ['Automated Payout Split', 'Seller Inventory', 'Order Fulfillment']
  },
  {
    id: 'pos-sync',
    module: 'Retail POS Sync',
    title: 'Omnichannel Physical Store POS Stock Synchronizer',
    subtitle: 'Bi-directional WebSockets protocol syncing online storefront stock with physical brick-and-mortar stores.',
    tag: 'Omnichannel Sync',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    route: 'pos.dasatech.com/sync-hub',
    specs: ['WebSockets Sync', 'Zero Overselling', 'Retail Cashier Barcode']
  }
]

export default function EcommerceEngineProductView() {
  const [commissionRate, setCommissionRate] = useState(12)
  const [orderTotal, setOrderTotal] = useState(2500)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const marketplaceCut = Math.round((orderTotal * commissionRate) / 100)
  const vendorPayout = orderTotal - marketplaceCut

  const handleCheckout = () => {
    setCheckoutComplete(true)
    setTimeout(() => setCheckoutComplete(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#7C3AED] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#7C3AED] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#7C3AED] transition-colors">Products</Link>
            <span>/</span>
            <span className="text-[#7C3AED] font-bold">DASA CommerceEngine</span>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#7C3AED] bg-white hover:bg-[#F5F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Products</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO: HEADLESS COMMERCE STUDIO ─────────────────── */}
      <section className="relative py-14 lg:py-22 bg-gradient-to-b from-[#F5F3FF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE9FE] border border-[#DDD0FF] text-[#7C3AED] text-xs font-mono font-bold uppercase tracking-wider">
                <ShoppingCart className="w-3.5 h-3.5 text-[#7C3AED]" />
                <span>HEADLESS E-COMMERCE &amp; MARKETPLACE ENGINE</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#17121F] tracking-tight leading-[1.08]">
                DASA CommerceEngine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#6D28D9] to-[#F43F5E]">Headless Commerce.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Next-generation headless e-commerce platform powering high-speed Next.js storefronts, 1-click checkout, automated vendor commission splits, and physical retail POS stock sync.
              </p>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {[
                  'Headless Next.js Storefront', '1-Click Checkout Flow', 'Vendor Commission Splits', 'Retail POS Stock Sync', 'WhatsApp Order Updates'
                ].map((tag) => (
                  <span key={tag} className="text-xs font-mono font-bold text-[#5B21B6] bg-[#EDE9FE] border border-[#DDD0FF] px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#checkout-sim"
                  className="px-6 py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-xs sm:text-sm shadow-md shadow-[#7C3AED]/25 transition-all flex items-center gap-2"
                >
                  <span>Test 1-Click Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#vendor-calculator"
                  className="px-5 py-3.5 rounded-full bg-[#EDE9FE] hover:bg-[#DDD0FF] text-[#5B21B6] font-display font-bold text-xs sm:text-sm border border-[#DDD0FF] transition-colors"
                >
                  <span>Vendor Payout Calculator</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive 1-Click Checkout Simulator */}
            <div className="lg:col-span-7">
              <div id="checkout-sim" className="rounded-3xl p-6 sm:p-7 bg-[#0F0B18] border-2 border-white/15 text-white shadow-2xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center font-bold">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm">Frictionless 1-Click Checkout Simulator</div>
                      <div className="text-[10px] font-mono text-slate-400">Sub-second order placement with automated WhatsApp notification</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#7C3AED]/30 text-[#C084FC] px-3 py-1 rounded-full border border-[#C084FC]/30">
                    HEADLESS CHECKOUT
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Sample Order: Premium Mechanical Keyboard</span>
                    <strong className="text-white">₹{orderTotal}</strong>
                  </div>
                  <div className="text-[10px] text-slate-400">Payment: Apple Pay / UPI / Razorpay Direct</div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-sm transition-all shadow-lg shadow-[#7C3AED]/30 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Pay ₹{orderTotal} via 1-Click Checkout</span>
                </button>

                {checkoutComplete && (
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono text-center font-bold">
                    ORDER CONFIRMED &bull; WHATSAPP RECEIPT DISPATCHED TO CLIENT
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. MULTI-VENDOR COMMISSION CALCULATOR ─────────────── */}
      <section id="vendor-calculator" className="py-16 lg:py-24 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#7C3AED] uppercase tracking-wider bg-[#EDE9FE] px-3.5 py-1.5 rounded-full border border-[#DDD0FF]">
              <DollarSign className="w-3.5 h-3.5" />
              <span>MARKETPLACE PAYOUT ENGINE</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#17121F] tracking-tight">
              Multi-Vendor <span className="text-color-shift">Commission Splits</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Adjust marketplace commission rate below to inspect automatic vendor payout calculations.
            </p>
          </div>

          <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-[#FAF8FF] border border-[#E9E2F5] space-y-6 font-mono text-xs">
            <div className="flex items-center justify-between text-slate-700 font-bold">
              <span>Marketplace Commission Rate: {commissionRate}%</span>
              <span className="text-[#7C3AED]">Automatic Split</span>
            </div>

            <input
              type="range"
              min="5"
              max="25"
              step="1"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
            />

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="text-slate-400 text-[10px]">Marketplace Platform Cut ({commissionRate}%):</div>
                <div className="text-xl font-bold text-[#7C3AED] mt-1">₹{marketplaceCut}</div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E9E2F5]">
                <div className="text-slate-400 text-[10px]">Net Vendor Payout (88%):</div>
                <div className="text-xl font-bold text-emerald-600 mt-1">₹{vendorPayout}</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. PRODUCT IMPLEMENTATION SCREENS (8-10 MODULE SCREENS) ── */}
      <ProductImplementationShowcase
        productId="ecommerce-engine"
        productName="DASA CommerceEngine"
        directScreens={ECOMMERCE_ENGINE_SCREEN_ASSETS}
      />

      {/* ── 4. DISCOVERY SESSION CTA ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#0F0B18] text-white">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider bg-purple-950/60 border border-purple-800/60 px-4 py-1.5 rounded-full">
            READY TO SCALE YOUR STORE?
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Schedule a DASA CommerceEngine <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] to-[#7C3AED]">Discovery Session</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discuss Next.js headless storefronts, multi-vendor marketplace commission rules, and retail POS stock sync directly with Founder &amp; CEO Jeyawin D and our e-commerce engineering leads.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-display font-bold text-sm shadow-xl shadow-[#7C3AED]/30 transition-all"
            >
              <span>Start CommerceEngine Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
