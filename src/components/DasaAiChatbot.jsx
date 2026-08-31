import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  X,
  Send,
  Sparkles,
  ChevronUp,
  MessageSquare,
  ArrowRight,
  Phone,
  Mail,
  Zap,
  CheckCircle2,
  FolderGit2,
  Database,
  Camera,
  ShoppingBag,
  Cpu,
  HelpCircle
} from 'lucide-react'
import { Link } from './Router'

// ─────────────────────────────────────────────────────────────
// DASA TECH COMPREHENSIVE AI KNOWLEDGE BASE & INTENT CLASSIFIER
// Trained on all products, projects, services, tech stack & company info
// ─────────────────────────────────────────────────────────────
const KNOWLEDGE_BASE = [
  // 1. PROJECTS & CASE STUDIES (Fixes user question: "what are the projects are there here")
  {
    id: 'projects',
    keywords: [
      'project', 'projects', 'case study', 'case studies', 'portfolio',
      'works', 'what have you built', 'what projects', 'client projects',
      'deployments', 'work', 'what are the projects', 'show me projects',
      'previous work', 'past projects', 'recent work', 'built', 'show projects'
    ],
    response: `🚀 **Featured DASA TECH Deployments & Case Studies**:

1. 🏥 **Hospital & Multi-Branch Pharmacy ERP**
   • *Client*: Apex Healthcare Network (50+ Clinical Branches)
   • *Impact*: 50,000+ daily prescriptions • Sub-12ms billing latency • 99.98% uptime.

2. 🏭 **Industrial SCADA & Machine Telemetry**
   • *Client*: Precision Heavy Machinery Plant
   • *Impact*: 120+ CNC machines monitored • 99.4% OEE • Predictive vibration anomaly alerts.

3. 👁️ **High-Speed AI Optical Inspection Vision**
   • *Client*: Automotive Component Foundry
   • *Impact*: 12 castings/sec inspected • 99.7% accuracy • 60+ FPS edge inference on NVIDIA Jetson.

4. ⚡ **Campus IoT Energy Management (EMS)**
   • *Client*: Commercial Tech Park (2.4M Sq. Ft.)
   • *Impact*: 850 smart Modbus meters • 22% peak tariff savings • Auto power factor control.

5. 🏠 **Architectural Smart Living & Home Hub**
   • *Client*: Private Residential Estate
   • *Impact*: 16 living zones • 100% offline Matter/Zigbee local edge gateway.

6. 🛒 **High-Throughput Multi-Vendor E-Commerce**
   • *Client*: B2B Wholesale Electronics Network
   • *Impact*: 300+ sub-vendors • Sub-600ms page loads • Direct 2-way ERP sync.`,
    cta: { text: 'View All Project Case Studies', to: '/projects' }
  },

  // 2. PRODUCTS & PLATFORMS
  {
    id: 'products_all',
    keywords: [
      'product', 'products', 'platforms', 'software products', 'solutions',
      'what products', 'list of products', 'apps', 'all products'
    ],
    response: `📦 **DASA TECH Flagship Product Suites**:

• 📸 **SnapShare**: AI-powered Photography Studio & client proofing platform with face recognition.
• 🛒 **CommerceEngine**: Enterprise headless e-commerce for high-volume transactions.
• 🏫 **School ERP**: Complete school management, fee collections, student grading & parent app.
• 🏭 **FactorySync ERP**: Shop-floor MES, batch traceability, and machine maintenance.
• 🏥 **Hospital ERP**: Electronic Health Records (EHR), pharmacy inventory & doctor appointments.
• 📦 **Warehouse ERP**: Multi-warehouse barcode/NFC inventory & logistics tracking.`,
    cta: { text: 'Explore All Platforms & Products', to: '/products' }
  },

  // 3. SNAPSHARE PHOTOGRAPHY STUDIO
  {
    id: 'snapshare',
    keywords: [
      'snapshare', 'photography', 'photo', 'camera', 'ai photo', 'photographer',
      'album', 'face recognition', 'photo sorting', 'photo gallery', 'wedding photo'
    ],
    response: `📸 **SnapShare — AI Photography Management Platform**:

Designed specifically for professional photographers and studios:
• **AI Facial Recognition**: Automatically detects and tags guests for instant 1-click photo lookup.
• **High-Speed Cloud Proofing**: Clients can favorite and select album photos in real time.
• **Batch Watermarking**: Instant protection with custom studio watermarks.
• **Ultra-Fast CDN Delivery**: Seamless multi-gigabyte wedding and event album downloads.`,
    cta: { text: 'View SnapShare Platform', to: '/products' }
  },

  // 4. E-COMMERCE & COMMERCEENGINE
  {
    id: 'ecommerce',
    keywords: [
      'ecommerce', 'e-commerce', 'commerce', 'online store', 'shopping',
      'commerceengine', 'marketplace', 'b2b store', 'cart', 'checkout'
    ],
    response: `🛒 **CommerceEngine — Headless E-Commerce Platform**:

Built for fast, scalable enterprise online selling:
• **Sub-Second Global Search**: Instant product indexing with fuzzy auto-complete.
• **Multi-Currency & Tax Engine**: Automated international checkout with Stripe & Razorpay.
• **Real-Time ERP Inventory Sync**: Direct 2-way sync with warehouse stocks.
• **High-Concurrency Ready**: Handles 20,000+ simultaneous checkouts without latency.`,
    cta: { text: 'View CommerceEngine Details', to: '/products' }
  },

  // 5. CUSTOM ERP SUITES
  {
    id: 'erp',
    keywords: [
      'erp', 'school erp', 'hospital erp', 'factorysync', 'warehouse erp',
      'custom erp', 'enterprise resource', 'management software', 'billing', 'inventory'
    ],
    response: `💼 **Custom Enterprise ERP Solutions**:

We build tailor-made, modular ERP suites with zero bloated licensing fees:
• 🏫 **School ERP**: Student profiles, automated fee collection, exams & parent mobile app.
• 🏥 **Hospital & Pharmacy ERP**: OPD/IPD flows, doctor rosters & barcode pharmacy POS.
• 🏭 **FactorySync ERP**: Raw material batching, production stages & worker shift tracking.
• 📦 **Warehouse ERP**: Real-time bin mapping, dispatch tracking & stock alerts.`,
    cta: { text: 'View Custom ERP Platforms', to: '/products' }
  },

  // 6. IOT & INDUSTRIAL AUTOMATION
  {
    id: 'iot',
    keywords: [
      'iot', 'automation', 'hardware', 'sensor', 'smart home', 'irrigation',
      'lorawan', 'telemetry', 'scada', 'plc', 'esp32', 'zigbee', 'modbus', 'embedded'
    ],
    response: `⚡ **Intelligent IoT & Automation Telemetry**:

We design custom hardware, embedded firmware, and supervisory cloud dashboards:
• **Industrial SCADA**: Modbus TCP/RTU & Siemens PLC telemetry for factory machinery.
• **Smart Home Living**: 100% offline local edge gateways (Matter / Zigbee 3.0).
• **Agricultural Solenoid Control**: Long-range LoRaWAN 915MHz precision irrigation.
• **Touchless NFC Systems**: Fast shop-floor attendance & asset tracking.`,
    cta: { text: 'Explore Smart Automation', to: '/products' }
  },

  // 7. ARTIFICIAL INTELLIGENCE & COMPUTER VISION
  {
    id: 'ai',
    keywords: [
      'ai', 'vision', 'defect detection', 'computer vision', 'opencv',
      'yolo', 'yolov8', 'machine learning', 'deep learning', 'optical', 'neural'
    ],
    response: `🧠 **Enterprise AI & Computer Vision Solutions**:

• **Optical Defect Detection**: 120 FPS high-speed defect screening for manufacturing lines.
• **Face & Object Recognition**: Biometric identification and automated asset categorizer.
• **Edge AI Acceleration**: Optimized quantized models for NVIDIA Jetson & Raspberry Pi.
• **Predictive Failure Analytics**: Time-series neural networks predicting machine breakdowns.`,
    cta: { text: 'Learn About AI Solutions', to: '/services' }
  },

  // 8. PRICING, ESTIMATES & BUDGET
  {
    id: 'pricing',
    keywords: [
      'price', 'pricing', 'cost', 'how much', 'budget', 'estimate',
      'quote', 'rates', 'hire', 'charge', 'expensive', 'cheap', 'consultation'
    ],
    response: `💰 **Project Pricing & Cost Estimation**:

Our pricing is transparent and modular based on system scope:
• **Custom Web/Mobile Apps**: Designed with milestone-based transparent pricing.
• **Enterprise ERP Deployments**: Fixed-scope implementation with zero recurring per-user seat penalties.
• **IoT & Hardware Automation**: Turnkey hardware design + cloud dashboard.

💡 *Tip*: Use our interactive **Project Estimator** on the Contact page for an immediate budget summary!`,
    cta: { text: 'Calculate Cost in Project Estimator', to: '/contact' }
  },

  // 9. CONTACT DETAILS & OFFICE LOCATION
  {
    id: 'contact',
    keywords: [
      'contact', 'email', 'phone', 'call', 'reach', 'location',
      'address', 'whatsapp', 'office', 'talk', 'number', 'speak', 'support'
    ],
    response: `📞 **Contact DASA TECH Direct**:

• 📧 **Email**: dasatechmu@gmail.com
• 📱 **Phone**: +91 76399 30148
• 🏢 **HQ**: Enterprise Tech Center, India
• ⏰ **Business Hours**: Mon – Sat, 9:00 AM – 7:00 PM IST

You can also send a project inquiry directly through our Contact form!`,
    cta: { text: 'Open Contact Form', to: '/contact' }
  },

  // 10. FOUNDERS & TEAM LEADERSHIP
  {
    id: 'team',
    keywords: [
      'team', 'who is jeyawin', 'founder', 'ceo', 'arun', 'priya',
      'ramesh', 'divya', 'kiran', 'nithin', 'naveen', 'vikram', 'anand',
      'who made this', 'leadership', 'engineers', 'family', 'about'
    ],
    response: `👥 **DASA TECH Team Leadership**:

• **Jeyawin D** — Founder & CEO (System Architecture & Enterprise ERP)
• **Arun** — Full Stack Systems Engineer (React & Distributed Node.js)
• **Priya** — Front-End Developer & UI Specialist
• **Ramesh** — Back-End Developer & PostgreSQL Specialist
• **Divya** — AI & Computer Vision Lead
• **Kiran** — Quality Assurance & End-to-End Testing Lead
• **Naveen Prasanth S** — Cloud Infrastructure & DevOps Lead
• **Vikram** — Mobile App Lead (React Native / iOS / Android)
• **Nithin** — Product Experience Designer (UI/UX)
• **Anand** — Industrial Automation & IoT Telemetry Lead`,
    cta: { text: 'Inspect Interactive 3D Team Profiles', to: '/about' }
  },

  // 11. TECH STACK & ARCHITECTURE
  {
    id: 'tech_stack',
    keywords: [
      'tech stack', 'technologies', 'languages', 'react', 'python',
      'node', 'postgresql', 'docker', 'kubernetes', 'what tech', 'framework', 'database'
    ],
    response: `🛠️ **DASA TECH Enterprise Technology Stack**:

• **Front-End**: React 18, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js / WebGL.
• **Back-End**: Node.js microservices, Python FastAPI, GraphQL & REST APIs.
• **Databases**: PostgreSQL, Redis Distributed Cache, TimescaleDB.
• **DevOps & Cloud**: Docker, Kubernetes, AWS, Cloudflare, CI/CD automated pipelines.
• **AI & IoT**: PyTorch, OpenCV, TensorRT, ESP32, Siemens S7-1500 PLC, Modbus & LoRaWAN.`,
    cta: { text: 'View Engineering Capabilities', to: '/about' }
  },

  // 12. SERVICES OVERVIEW
  {
    id: 'services',
    keywords: [
      'services', 'what do you do', 'what services', 'capabilities',
      'what does dasa do', 'how can you help', 'offerings'
    ],
    response: `⚡ **DASA TECH Core Engineering Services**:

1. **Business Technology Solutions**: Custom ERP systems, CRM suites, billing engines & automated workflows.
2. **Smart Automation & IoT**: Machine telemetry SCADA, agricultural LoRaWAN irrigation & smart home hubs.
3. **Custom Web & Mobile Platforms**: Fast Next.js web applications, e-commerce marketplaces & native apps.
4. **AI & Vision Systems**: Industrial optical defect inspection & automated sorting.`,
    cta: { text: 'Explore All Services', to: '/services' }
  },

  // 13. GREETINGS & INTRODUCTIONS
  {
    id: 'greeting',
    keywords: [
      'hello', 'hi', 'hey', 'greetings', 'good morning', 'good evening',
      'good afternoon', 'hola', 'sup', 'yo', 'help'
    ],
    response: `👋 Hello! Welcome to **DASA TECH**. I'm your AI Solutions Assistant.

I can help you explore:
• 🚀 **Our Projects & Case Studies** (Healthcare ERP, SCADA, AI Vision)
• 📸 **SnapShare Photography Platform**
• 💼 **Custom Enterprise ERP Systems**
• 💰 **Project Cost Estimates & Inquiries**

What would you like to know more about?`,
    cta: { text: 'View Featured Projects', to: '/projects' }
  }
]

// Quick Action Prompt Chips
const QUICK_PROMPTS = [
  '🚀 What projects are there?',
  '💼 Custom ERP Systems',
  '📸 SnapShare AI Studio',
  '⚡ IoT & Automation',
  '💰 Project Cost Estimate',
  '📞 Contact Details'
]

export default function DasaAiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi! I'm the **DASA AI Assistant**.\nAsk me about our **projects & deployments**, **custom ERP suites**, **SnapShare AI Studio**, or **project pricing**!",
      time: 'Just now'
    }
  ])

  const messagesEndRef = useRef(null)

  // Track scroll position to show scroll-to-top shortcut
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto scroll chat to bottom when messages update
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isTyping])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ── ADVANCED INTENT & SEMANTIC MATCHING ENGINE ──
  const findBestResponse = (query) => {
    const cleanQuery = query.toLowerCase().replace(/[^\w\s]/gi, ' ').trim()
    const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 1)

    let bestMatch = null
    let highestScore = 0

    for (const entry of KNOWLEDGE_BASE) {
      let score = 0

      for (const kw of entry.keywords) {
        const cleanKw = kw.toLowerCase()

        // 1. Exact phrase match (Highest Priority)
        if (cleanQuery.includes(cleanKw)) {
          score += 10 + cleanKw.length
        }

        // 2. Token overlap match
        const kwWords = cleanKw.split(/\s+/)
        const overlapCount = kwWords.filter(w => queryWords.includes(w)).length

        if (overlapCount > 0) {
          score += overlapCount * 4
        }
      }

      if (score > highestScore) {
        highestScore = score
        bestMatch = entry
      }
    }

    // If score is reasonable, return matched response
    if (bestMatch && highestScore >= 3) {
      return {
        response: bestMatch.response,
        cta: bestMatch.cta
      }
    }

    // Intelligent Fallback with Helpful Quick Links
    return {
      response: `I'd love to help with that! At DASA TECH, we engineer **custom ERP software, AI computer vision, IoT telemetry, and web/mobile platforms** tailored to your business needs.\n\nWould you like to explore our projects, calculate an estimate, or speak directly with our team?`,
      cta: { text: 'Schedule Free Consultation', to: '/contact' }
    }
  }

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputMessage).trim()
    if (!text) return

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prev) => [...prev, userMsg])
    setInputMessage('')
    setIsTyping(true)

    // Natural typing delay
    setTimeout(() => {
      const match = findBestResponse(text)

      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: match.response,
        cta: match.cta,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 500)
  }

  return (
    <>
      {/* ── CHATBOT INTERACTIVE WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 350, damping: 28 }}
            className="fixed bottom-24 right-4 sm:right-6 z-[120] w-[calc(100vw-2rem)] sm:w-[430px] max-h-[620px] h-[85vh] bg-[#070A18]/95 backdrop-blur-2xl border border-purple-500/30 rounded-3xl shadow-[0_20px_70px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden text-white select-none"
          >
            {/* Header */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0F172A] border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg border border-purple-400/40">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#070A18] animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      DASA AI Assistant
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-[9px] font-mono font-semibold text-purple-300">
                      ONLINE
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                    Enterprise Solutions &amp; System Advisor
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Thread Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-900/40">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none shadow-md'
                        : 'bg-white/10 border border-white/10 text-slate-200 rounded-bl-none shadow-md backdrop-blur-md'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    {/* Interactive Direct CTA Link inside Bot Message */}
                    {msg.cta && (
                      <div className="mt-3 pt-2.5 border-t border-white/15">
                        <Link
                          to={msg.cta.to}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-mono text-xs font-bold transition shadow-md cursor-pointer"
                        >
                          <span>{msg.cta.text}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 px-1">
                    {msg.time}
                  </span>
                </motion.div>
              ))}

              {/* Typing Animation Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit"
                >
                  <Bot className="w-4 h-4 text-purple-400 animate-spin" />
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="px-3 py-2 border-t border-white/5 bg-black/30 overflow-x-auto no-scrollbar flex items-center gap-2 shrink-0">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt.replace(/^[^\w]+/, ''))}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-400 text-slate-300 hover:text-white font-mono text-[11px] font-medium transition cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="p-3 bg-[#0A0E24] border-t border-white/10 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about projects, ERP, SnapShare, IoT, pricing..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-purple-400 transition"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-lg cursor-pointer shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FLOATING TRIGGER BADGE (BOT CHAT LAUNCHER + SCROLL TO TOP) ── */}
      <div className="fixed bottom-6 right-6 z-[110] flex flex-col items-end gap-3 select-none">
        
        {/* Scroll To Top Shortcut Pill (Appears when scrolled) */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.7, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-white/20 text-white shadow-xl backdrop-blur-md cursor-pointer hover:scale-110 active:scale-95 transition"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4 text-blue-400" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mascot Chatbot Launcher Button */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Notification Ping Badge */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 z-20 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500 border-2 border-white text-[9px] font-bold text-white items-center justify-center">
                1
              </span>
            </span>
          )}

          {/* Main Round Mascot Floating Button */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-slate-200 shadow-2xl shadow-purple-900/40 flex items-center justify-center group overflow-visible">
            
            {/* Rotating Circular DASA Typography Ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_12s_linear_infinite] pointer-events-none"
              viewBox="0 0 100 100"
            >
              <path
                id="dasaChatCirclePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="none"
              />
              <text className="text-[9px] font-mono font-bold tracking-[0.24em] fill-slate-500 uppercase">
                <textPath href="#dasaChatCirclePath" startOffset="0%">
                  DASA • DASA • DASA • DASA •
                </textPath>
              </text>
            </svg>

            {/* Center Robot / Chat Mascot Icon */}
            <div className="relative z-10 flex flex-col items-center justify-center text-slate-800 group-hover:text-purple-600 transition-colors">
              {isOpen ? (
                <X className="w-6 h-6 text-purple-600" />
              ) : (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-blue-600 -mb-1 animate-bounce" />
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
