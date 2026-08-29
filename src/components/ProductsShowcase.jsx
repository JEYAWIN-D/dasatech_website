import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Sparkles, Layers, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Link } from './Router.jsx'

export const PRODUCTS_ITEMS = [
  {
    id: 'pharmacy-erp',
    title: 'Pharmacy ERP',
    category: 'HEALTHCARE & PHARMA',
    headline: 'Complete pharmacy operations in one connected platform.',
    desc: 'Automated batch & expiry management, medicine compliance tracking, quick customer billing, and smart stock alerts.',
    tags: ['Batch Inventory', 'Regulated Drug Logs', 'Fast Billing'],
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=90',
    link: '/products/erp',
    flow: 'left'
  },
  {
    id: 'school-erp',
    title: 'School & Campus ERP',
    category: 'EDUCATION & CAMPUS',
    headline: 'Unified institutional management for modern academia.',
    desc: 'Complete school management system connecting student records, attendance, fee collection, and parent communication.',
    tags: ['Student Records', 'Fee Management', 'Smart Attendance'],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=90',
    link: '/products/ems',
    flow: 'right'
  },
  {
    id: 'nfc-erp',
    title: 'NFC Access & Asset ERP',
    category: 'SMART CONTACTLESS',
    headline: 'Contactless identification and touchless operations.',
    desc: 'Tap-and-go staff attendance, digital security access passes, equipment tracking, and instant verification.',
    tags: ['Contactless Tap', 'Asset Tracking', 'Secure Access'],
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=1200&q=90',
    link: '/products',
    flow: 'left'
  },
  {
    id: 'warehouse-wms',
    title: 'Warehouse WMS Hub',
    category: 'LOGISTICS & SUPPLY CHAIN',
    headline: 'End-to-end inventory and depot control.',
    desc: 'Real-time warehouse layout tracking, smart stock dispatching, barcode scanning, and multi-location inventory control.',
    tags: ['Bin Layout', 'Smart Dispatch', 'Barcode Tracking'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=90',
    link: '/products/erp',
    flow: 'right'
  },
  {
    id: 'snapshare',
    title: 'SnapShare Platform',
    category: 'MEDIA & COLLABORATION',
    headline: 'Ultra-fast media sharing and collaborative proofing.',
    desc: 'Instant high-resolution photo and media sharing for events, client approval, and fast cloud galleries.',
    tags: ['Fast Uploads', 'Client Approval', 'Cloud Gallery'],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90',
    link: '/products',
    flow: 'left'
  },
  {
    id: 'ecommerce',
    title: 'Commerce Engine',
    category: 'DIGITAL COMMERCE',
    headline: 'High-concurrency storefronts engineered for scale.',
    desc: 'Custom online stores, smooth checkout experience, payment processing, and automatic inventory sync.',
    tags: ['Custom Store', 'Online Payments', 'Inventory Sync'],
    img: 'https://images.unsplash.com/photo-1556742049-0a6756570679?auto=format&fit=crop&w=1200&q=90',
    link: '/services/ecommerce',
    flow: 'center'
  },
  {
    id: 'custom-apps',
    title: 'Custom App Engineering',
    category: 'APPLICATION ENGINEERING',
    headline: 'Bespoke mobile and web architectures.',
    desc: 'Custom mobile apps for iOS & Android, modern web apps, fast backend integrations, and secure cloud setups.',
    tags: ['Mobile Apps', 'Web Applications', 'Fast APIs'],
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=90',
    link: '/services/web-mobile',
    flow: 'right'
  }
]

export default function ProductsShowcase() {
  const [hoveredId, setHoveredId] = useState(null)

  return (
    <section className="py-14 lg:py-20 bg-white text-[#17131F] relative overflow-hidden border-t border-[#E9E2F5] select-none">
      
      {/* Subtle Background Radial Lighting */}
      <div className="absolute top-0 right-1/4 w-[750px] h-[750px] bg-gradient-to-br from-[#EDE9FE]/50 via-[#F3E8FF]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#FAF5FF] via-transparent to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-10 lg:space-y-12">
        
        {/* Section Header with Inside -> Outside Scale Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] text-[#6D28D9] uppercase bg-[#F7F3FF] px-4 py-1.5 rounded-full border border-[#DDD0FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PRODUCTS &amp; SOLUTIONS SHOWCASE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#17131F] tracking-tight leading-[1.18] pb-1">
            Enterprise Platform Systems{' '}
            <span className="text-color-shift">Engineered for Growth.</span>
          </h2>
          <p className="text-[#64748B] text-base leading-relaxed font-normal">
            Explore our smart business software, management platforms, and custom digital applications.
          </p>
        </motion.div>

        {/* ── ASYMMETRIC SERPENTINE IMAGE MESH SHOWCASE (LEFT → RIGHT → LEFT FLOW) ── */}
        <div className="space-y-6 lg:space-y-8">
          
          {/* ========================================================= */}
          {/* BAND 1: Left → Right Serpentine Flow (Pharmacy ERP + School ERP) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* Tile 1: Pharmacy ERP (Dominant Left Anchor) */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-7"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[0]} heightClass="h-[280px] sm:h-[320px]" />
            </motion.div>

            {/* Tile 2: School & Campus ERP (Right Offset Elevation) */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-5"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[1]} heightClass="h-[250px] sm:h-[290px]" />
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* BAND 2: Right → Left Serpentine Flow (NFC ERP + Warehouse WMS) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-12 gap-5 lg:gap-6 items-center">
            
            {/* Tile 3: NFC Access & Asset ERP (Compact Left Feature) */}
            <motion.div
              initial={{ opacity: 0, x: -35, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-5"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[2]} heightClass="h-[250px] sm:h-[290px]" />
            </motion.div>

            {/* Tile 4: Warehouse WMS Hub (Dominant Right Anchor) */}
            <motion.div
              initial={{ opacity: 0, x: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 lg:col-span-7"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[3]} heightClass="h-[280px] sm:h-[320px]" />
            </motion.div>

          </div>


          {/* ========================================================= */}
          {/* BAND 3: 3-Column Triad Flow (SnapShare + Commerce + Custom Apps) */}
          {/* ========================================================= */}
          <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
            
            {/* Tile 5: SnapShare Platform */}
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[4]} heightClass="h-[250px] sm:h-[290px]" />
            </motion.div>

            {/* Tile 6: Commerce Engine */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[5]} heightClass="h-[250px] sm:h-[290px]" />
            </motion.div>

            {/* Tile 7: Custom App Engineering */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4"
            >
              <ProductVisualTile item={PRODUCTS_ITEMS[6]} heightClass="h-[250px] sm:h-[290px]" />
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// REUSABLE INTERACTIVE PRODUCT VISUAL TILE (SMOOTH BOTTOM-TO-TOP REVEAL)
// ─────────────────────────────────────────────────────────────
function ProductVisualTile({ item, heightClass }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative w-full ${heightClass} rounded-[24px] overflow-hidden border-2 border-[#E9E2F5] hover:border-[#6D28D9] bg-[#0F0B18] shadow-lg hover:shadow-2xl hover:shadow-[#6D28D9]/25 transition-all duration-500 cursor-pointer group`}
    >
      {/* High-Resolution Product Image with Fluid Easing Scale */}
      <img
        src={item.img}
        alt={item.title}
        className={`w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] ${
          isHovered ? 'scale-106 opacity-85' : 'scale-100 opacity-95'
        }`}
      />

      {/* Ambient Gradient Underlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18]/90 via-[#0F0B18]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/20 via-transparent to-transparent pointer-events-none" />

      {/* Top Header Badge (Default State) */}
      <div
        className={`absolute top-4 left-4 right-4 z-10 flex items-center justify-between transition-opacity duration-300 ${
          isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <span className="text-[10px] font-mono font-bold text-white bg-[#0F0B18]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 uppercase tracking-wider shadow-md">
          {item.category}
        </span>
      </div>

      {/* Default Unhovered State: Crisp Title Card at Image Base */}
      <div
        className={`absolute bottom-4 left-4 right-4 z-10 transition-all duration-400 ease-[0.16,1,0.3,1] ${
          isHovered ? 'opacity-0 translate-y-3 pointer-events-none' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="p-4 rounded-2xl bg-[#0F0B18]/85 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block">
              {item.category}
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-tight">
              {item.title}
            </h3>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shadow-lg shrink-0 border border-[#A855F7]/40">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Bottom-to-Top Smooth Content Reveal Panel (Fluid Motion on Hover) */}
      <div
        className={`absolute inset-x-0 bottom-0 top-auto z-20 transition-all duration-500 ease-[0.16,1,0.3,1] transform ${
          isHovered
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 sm:p-6 rounded-t-[24px] bg-white border-t-2 border-[#6D28D9] shadow-2xl space-y-3">
          
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-[9px] font-mono font-bold text-[#6D28D9] uppercase tracking-wider block">
                {item.category}
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#0F172A]">
                {item.title}
              </h3>
            </div>
            <span className="text-[10px] font-mono font-bold text-[#6D28D9] bg-[#F7F3FF] px-2.5 py-1 rounded-full border border-[#DDD0FF] shrink-0">
              SOLUTION
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-semibold">
            {item.headline}
          </p>

          {/* Capability Tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-bold text-[#5B21B6] bg-[#F7F3FF] px-2.5 py-1 rounded-md border border-[#C4B5FD]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Link CTA */}
          <div className="pt-1">
            <Link
              to={item.link}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-black text-xs shadow-md transition-all group/btn"
            >
              <span>Explore {item.title}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}
