import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Tag, 
  Sparkles, 
  Cpu, 
  Database, 
  Radio, 
  ShieldCheck,
  TrendingUp,
  Share2
} from 'lucide-react'
import { Link } from '../components/Router'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'

const BLOG_POSTS = [
  {
    id: 'ai-vision-defect-detection-pipeline',
    title: 'Architecting Real-Time AI Computer Vision for Factory Optical Defect Inspection',
    excerpt: 'How we engineered sub-40ms defect classification pipelines on assembly lines using edge TensorRT inference and high-speed industrial cameras.',
    category: 'AI & Vision',
    icon: Cpu,
    readTime: '6 min read',
    date: 'Aug 28, 2026',
    author: {
      name: 'Mithul PR',
      role: 'Founding Engineer & Architecture Lead'
    },
    image: import.meta.env.BASE_URL + 'images/ai-computer-vision.jpg',
    tags: ['Computer Vision', 'PyTorch', 'TensorRT', 'Edge Inference', 'Industrial AI'],
    featured: true
  },
  {
    id: 'offline-first-enterprise-erp-sync',
    title: 'Offline-First Database Synchronization in Multi-Branch Pharmacy & School ERPs',
    excerpt: 'Solving intermittent network challenges in tier-2 and tier-3 hospital and school deployments using event-driven delta replication and SQLite caching.',
    category: 'Enterprise ERP',
    icon: Database,
    readTime: '8 min read',
    date: 'Aug 14, 2026',
    author: {
      name: 'DASA Engineering Team',
      role: 'Distributed Systems Group'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
    tags: ['PostgreSQL', 'Delta Sync', 'Offline-First', 'Healthcare ERP', 'EduCore']
  },
  {
    id: 'industrial-nfc-smart-factory-workflows',
    title: 'Eliminating Paper Job Slips: Touchless NFC Workstation Workflows in Manufacturing',
    excerpt: 'Replacing printed batch slips with ruggedized NFC tags and live shop-floor tablets for instant machine routing and stage verification.',
    category: 'Industrial IoT',
    icon: Radio,
    readTime: '5 min read',
    date: 'Jul 30, 2026',
    author: {
      name: 'Hardware & IoT Lab',
      role: 'Embedded Systems Unit'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90',
    tags: ['NFC Tags', 'Smart Factory', 'Job Cards', 'SCADA', 'Shop Floor']
  },
  {
    id: 'securing-iot-telemetry-at-the-edge',
    title: 'Hardware-Rooted Telemetry: Securing Industrial Edge Gateways with Cryptographic Elements',
    excerpt: 'Implementing mutual TLS (mTLS), tamper-resistant key storage with ATECC608 chips, and encrypted MQTT transport across distributed telemetry meshes.',
    category: 'Security & IoT',
    icon: ShieldCheck,
    readTime: '7 min read',
    date: 'Jul 12, 2026',
    author: {
      name: 'Security Operations',
      role: 'Cyber-Physical Defense'
    },
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=90',
    tags: ['mTLS', 'Hardware Security', 'MQTT', 'EdgeMesh', 'Cryptography']
  },
  {
    id: 'high-concurrency-pos-checkout-architecture',
    title: 'Engineering Sub-30-Second POS Cashier Workflows in Multi-Counter Supermarkets',
    excerpt: 'Optimizing barcode scanner ingestion, real-time GST tax computation, and thermal printer rasterization for high-rush retail counter performance.',
    category: 'Application Architecture',
    icon: TrendingUp,
    readTime: '4 min read',
    date: 'Jun 25, 2026',
    author: {
      name: 'DASA Engineering Team',
      role: 'Retail Systems Group'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1200&q=90',
    tags: ['POS Systems', 'Retail Tech', 'Performance', 'GST Billing', 'React']
  },
  {
    id: 'time-series-predictive-maintenance',
    title: 'Predictive Machine Downtime with High-Frequency Vibration Telemetry & TimescaleDB',
    excerpt: 'Streaming 1kHz vibration and thermographic sensor telemetry from factory CNC machines into real-time FFT anomaly detectors to prevent line shutdowns.',
    category: 'Industrial IoT',
    icon: Radio,
    readTime: '9 min read',
    date: 'Jun 05, 2026',
    author: {
      name: 'Mithul PR',
      role: 'Founding Engineer'
    },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=90',
    tags: ['TimescaleDB', 'Predictive Maintenance', 'Vibration Analysis', 'IoT Mesh']
  }
]

const CATEGORIES = ['All Topics', 'AI & Vision', 'Enterprise ERP', 'Industrial IoT', 'Security & IoT', 'Application Architecture']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Topics' || post.category === selectedCategory
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesQuery
  })

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0]

  return (
    <main className="min-h-screen bg-[#FAF8FF] text-slate-900 select-none">
      
      {/* Top Hero Section */}
      <section className="relative pt-36 sm:pt-40 pb-16 overflow-hidden border-b border-[#E9E2F5] bg-gradient-to-b from-white via-[#FAF8FF] to-white">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold tracking-wider uppercase mb-6 shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#6D28D9]" />
              <span>ENGINEERING &amp; ARCHITECTURE JOURNAL</span>
            </div>
          </Reveal>

          <TextLineReveal
            as="h1"
            lines={['Insights, Technical Deep-Dives', '& Engineering Case Notes']}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 mb-6"
          />

          <Reveal delay={0.2}>
            <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal mb-8">
              Explore how DASA TECH designs resilient ERPs, high-precision computer vision systems, edge IoT telemetry networks, and mission-critical cloud infrastructure.
            </p>
          </Reveal>

          {/* Search & Category Filter Bar */}
          <Reveal delay={0.3}>
            <div className="max-w-2xl mx-auto flex items-center gap-3 bg-white p-2 rounded-2xl border border-[#DDD0FF] shadow-sm mb-8">
              <div className="flex items-center gap-2 flex-grow px-3">
                <Search className="w-4 h-4 text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder="Search articles by keyword, architecture, or tag..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 px-2 py-1"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-[#6D28D9] text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-[#E9E2F5] hover:border-[#6D28D9] hover:text-[#6D28D9]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Lead Story */}
      {selectedCategory === 'All Topics' && !searchQuery && (
        <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <Reveal>
            <div className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] mb-4">
              Featured Deep Dive
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-[#E9E2F5] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-[#E9E2F5]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-bold text-white bg-[#6D28D9]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#6D28D9]" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#6D28D9]" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 leading-tight group-hover:text-[#6D28D9] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono font-bold text-[#6D28D9] bg-[#F7F3FF] px-2.5 py-1 rounded-md border border-[#DDD0FF]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm text-slate-900">{featuredPost.author.name}</div>
                    <div className="text-xs text-slate-500 font-mono">{featuredPost.author.role}</div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#6D28D9] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Note</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              {selectedCategory === 'All Topics' ? 'All Engineering Articles' : selectedCategory}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1">
              Showing {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
            </p>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E9E2F5] p-8">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="font-display font-bold text-lg text-slate-700 mb-2">No articles found</h3>
            <p className="text-sm text-slate-500 mb-6">
              Try modifying your search query or selecting a different technical category.
            </p>
            <button
              onClick={() => { setSelectedCategory('All Topics'); setSearchQuery('') }}
              className="px-5 py-2 rounded-full bg-[#6D28D9] text-white text-xs font-mono font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const IconComp = post.icon || BookOpen
              return (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="bg-white border border-[#E9E2F5] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#6D28D9] transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Article Thumbnail */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#6D28D9]" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#6D28D9]" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 group-hover:text-[#6D28D9] transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono font-semibold text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-200"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="text-xs font-medium text-slate-700">
                          {post.author.name}
                        </div>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1 font-display font-bold text-xs text-[#6D28D9] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        )}
      </section>

      {/* Newsletter / Contact Banner */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 pb-20">
        <div className="bg-gradient-to-br from-[#120B24] via-[#1E113A] to-[#0D0B1C] text-white rounded-3xl p-8 sm:p-12 border border-[#6D28D9]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="text-[#C084FC] text-xs font-bold uppercase tracking-wider">
              Technical Consultation
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              Have a technical inquiry or architecture question?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Connect directly with our engineering team to discuss custom system designs, SCADA integrations, or enterprise ERP roadmaps.
            </p>
          </div>

          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Contact Engineering Lead
          </PillButton>
        </div>
      </section>

    </main>
  )
}
