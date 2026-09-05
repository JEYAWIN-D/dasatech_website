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
  HelpCircle,
  Smile
} from 'lucide-react'
import { Link } from './Router'

// ─────────────────────────────────────────────────────────────
// CLEAN INLINE MARKDOWN & LIST FORMATTER COMPONENT
// ─────────────────────────────────────────────────────────────
function FormattedBotMessage({ text }) {
  if (!text) return null

  const lines = text.split('\n')

  return (
    <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed text-slate-200">
      {lines.map((line, idx) => {
        const trimmed = line.trim()
        if (!trimmed) {
          return <div key={idx} className="h-1.5" />
        }

        // Inline parser for **bold** and *italic*
        const formatInline = (str) => {
          const parts = []
          let key = 0
          const regex = /(\*\*.*?\*\*|\*.*?\*)/g
          let match
          let lastIndex = 0

          while ((match = regex.exec(str)) !== null) {
            if (match.index > lastIndex) {
              parts.push(str.substring(lastIndex, match.index))
            }
            const matchText = match[0]
            if (matchText.startsWith('**') && matchText.endsWith('**')) {
              parts.push(
                <strong key={key++} className="font-bold text-white tracking-wide">
                  {matchText.slice(2, -2)}
                </strong>
              )
            } else if (matchText.startsWith('*') && matchText.endsWith('*')) {
              parts.push(
                <span key={key++} className="text-purple-300 font-semibold">
                  {matchText.slice(1, -1)}
                </span>
              )
            }
            lastIndex = match.index + matchText.length
          }

          if (lastIndex < str.length) {
            parts.push(str.substring(lastIndex))
          }

          return parts.length > 0 ? parts : str
        }

        // 1. Numbered headers: "1. 🏥 Hospital ERP"
        if (/^\d+\.\s/.test(trimmed)) {
          return (
            <div key={idx} className="pt-2 pb-0.5 font-semibold text-white flex items-start gap-1.5 border-t border-white/5 first:border-t-0 first:pt-0">
              <span>{formatInline(trimmed)}</span>
            </div>
          )
        }

        // 2. Sub-bullets: "• *Client*: ..." or "• *Impact*: ..."
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
          return (
            <div key={idx} className="pl-3 py-0.5 text-slate-300 flex items-start gap-2">
              <span className="text-purple-400 font-bold text-xs leading-5 shrink-0">•</span>
              <span className="flex-1 leading-snug">{formatInline(trimmed.replace(/^[•\-]\s*/, ''))}</span>
            </div>
          )
        }

        // 3. Regular Paragraph text
        return (
          <p key={idx} className="text-slate-200">
            {formatInline(trimmed)}
          </p>
        )
      })}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// TOPICAL DOMAIN KNOWLEDGE BASE
// ─────────────────────────────────────────────────────────────
const DOMAIN_KNOWLEDGE = [
  // 1. PROJECTS & CASE STUDIES
  {
    id: 'projects',
    matchRegex: /(project|projects|case stud|portfolio|deployment|what.*(built|done)|previous work|past work)/i,
    keywords: ['project', 'projects', 'portfolio', 'deployments', 'case study', 'case studies', 'works'],
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

  // 2. SNAPSHARE AI PHOTOGRAPHY
  {
    id: 'snapshare',
    matchRegex: /(snapshare|photograph|photo|camera|album|face recognition)/i,
    keywords: ['snapshare', 'photography', 'photo', 'camera', 'album', 'proofing'],
    response: `📸 **SnapShare — AI Photography Management Platform**:

Designed specifically for professional photographers and studios:
• **AI Facial Recognition**: Automatically detects and tags guests for instant 1-click photo lookup.
• **High-Speed Cloud Proofing**: Clients can favorite and select album photos in real time.
• **Batch Watermarking**: Instant protection with custom studio watermarks.
• **Ultra-Fast CDN Delivery**: Seamless multi-gigabyte wedding and event album downloads.`,
    cta: { text: 'View SnapShare Platform', to: '/products' }
  },

  // 3. E-COMMERCE & COMMERCEENGINE
  {
    id: 'ecommerce',
    matchRegex: /(ecommerce|e-commerce|commerceengine|online store|shopping cart|marketplace)/i,
    keywords: ['ecommerce', 'commerce', 'commerceengine', 'store', 'shop'],
    response: `🛒 **CommerceEngine — Headless E-Commerce Platform**:

Built for fast, scalable enterprise online selling:
• **Sub-Second Global Search**: Instant product indexing with fuzzy auto-complete.
• **Multi-Currency & Tax Engine**: Automated international checkout with Stripe & Razorpay.
• **Real-Time ERP Inventory Sync**: Direct 2-way sync with warehouse stocks.
• **High-Concurrency Ready**: Handles 20,000+ simultaneous checkouts without latency.`,
    cta: { text: 'View CommerceEngine Details', to: '/products' }
  },

  // 4. CUSTOM ENTERPRISE ERP SUITES
  {
    id: 'erp',
    matchRegex: /(erp|school erp|hospital erp|factorysync|warehouse erp|custom erp|billing software|inventory system)/i,
    keywords: ['erp', 'school', 'hospital', 'factorysync', 'warehouse', 'billing', 'inventory'],
    response: `💼 **Custom Enterprise ERP Solutions**:

We build tailor-made, modular ERP suites with zero recurring per-seat fees:
• 🏫 **School ERP**: Student profiles, automated fee collection, exams & parent mobile app.
• 🏥 **Hospital & Pharmacy ERP**: OPD/IPD flows, doctor rosters & barcode pharmacy POS.
• 🏭 **FactorySync ERP**: Raw material batching, production stages & worker shift tracking.
• 📦 **Warehouse ERP**: Real-time bin mapping, dispatch tracking & stock alerts.`,
    cta: { text: 'View Custom ERP Platforms', to: '/products' }
  },

  // 5. IOT & INDUSTRIAL AUTOMATION
  {
    id: 'iot',
    matchRegex: /(iot|automation|hardware|scada|telemetry|smart home|irrigation|sensor|plc|esp32|modbus)/i,
    keywords: ['iot', 'automation', 'scada', 'telemetry', 'hardware', 'sensor', 'smart home'],
    response: `⚡ **Intelligent IoT & Automation Telemetry**:

We design custom hardware, embedded firmware, and supervisory cloud dashboards:
• **Industrial SCADA**: Modbus TCP/RTU & Siemens PLC telemetry for factory machinery.
• **Smart Home Living**: 100% offline local edge gateways (Matter / Zigbee 3.0).
• **Agricultural Solenoid Control**: Long-range LoRaWAN 915MHz precision irrigation.
• **Touchless NFC Systems**: Fast shop-floor attendance & asset tracking.`,
    cta: { text: 'Explore Smart Automation', to: '/products' }
  },

  // 6. AI & COMPUTER VISION
  {
    id: 'ai',
    matchRegex: /(ai|vision|defect detection|computer vision|opencv|yolo|yolov8|deep learning|machine learning)/i,
    keywords: ['ai', 'vision', 'opencv', 'yolov8', 'defect detection', 'computer vision'],
    response: `🧠 **Enterprise AI & Computer Vision Solutions**:

• **Optical Defect Detection**: 120 FPS high-speed defect screening for manufacturing lines.
• **Face & Object Recognition**: Biometric identification and automated asset categorizer.
• **Edge AI Acceleration**: Optimized quantized models for NVIDIA Jetson & Raspberry Pi.
• **Predictive Failure Analytics**: Time-series neural networks predicting machine breakdowns.`,
    cta: { text: 'Learn About AI Solutions', to: '/services' }
  },

  // 7. PRICING & ESTIMATES
  {
    id: 'pricing',
    matchRegex: /(price|pricing|cost|how much|budget|estimate|quote|rate|hire cost|charge)/i,
    keywords: ['price', 'pricing', 'cost', 'budget', 'estimate', 'quote', 'rate'],
    response: `💰 **Project Pricing & Cost Estimation**:

Our pricing is transparent and modular based on system scope:
• **Custom Web/Mobile Apps**: Transparent milestone-based structure.
• **Enterprise ERP Deployments**: Fixed-scope implementation with zero recurring seat penalties.
• **IoT & Hardware Automation**: Turnkey hardware design + cloud dashboard.

💡 *Tip*: Use our interactive **Project Estimator** on the Contact page for an immediate budget calculation!`,
    cta: { text: 'Calculate Cost in Project Estimator', to: '/contact' }
  },

  // 8. CONTACT DETAILS
  {
    id: 'contact',
    matchRegex: /(contact|email|phone|call|reach|location|address|whatsapp|office|support|where.*(located|office))/i,
    keywords: ['contact', 'email', 'phone', 'call', 'location', 'address', 'office'],
    response: `📞 **Contact DASA TECH Direct**:

• 📧 **Email**: dasatechmu@gmail.com
• 📱 **Phone**: +91 76399 30148
• 🏢 **HQ**: Enterprise Tech Center, India
• ⏰ **Business Hours**: Mon – Sat, 9:00 AM – 7:00 PM IST

You can also send a project inquiry directly through our Contact form!`,
    cta: { text: 'Open Contact Form', to: '/contact' }
  },

  // 9. FOUNDERS & TEAM
  {
    id: 'team',
    matchRegex: /(founder|ceo|jeyawin|mithul|akash|arun|priya|ramesh|divya|kiran|nithin|naveen|vikram|anand|who (built|made|runs|leads)|team|leadership)/i,
    keywords: ['founder', 'ceo', 'jeyawin', 'mithul', 'akash', 'team', 'leaders', 'engineers'],
    response: `👥 **DASA TECH Team Leadership**:

• **Jeyawin D** — Founder & CEO (System Architecture & Enterprise ERP)
• **Mithul Pranav K K** — Full Stack Developer (React & Cloud Microservices)
• **Akash AR** — Full Stack Developer (Web Engineering & Cloud APIs)
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

  // 10. TECH STACK
  {
    id: 'tech_stack',
    matchRegex: /(tech stack|technologies|what tech|languages|framework|react|node|python|postgresql|docker|kubernetes)/i,
    keywords: ['tech stack', 'technologies', 'react', 'python', 'node', 'postgresql'],
    response: `🛠️ **DASA TECH Enterprise Technology Stack**:

• **Front-End**: React 18, Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js / WebGL.
• **Back-End**: Node.js microservices, Python FastAPI, GraphQL & REST APIs.
• **Databases**: PostgreSQL, Redis Distributed Cache, TimescaleDB.
• **DevOps & Cloud**: Docker, Kubernetes, AWS, Cloudflare, CI/CD automated pipelines.
• **AI & IoT**: PyTorch, OpenCV, TensorRT, ESP32, Siemens S7-1500 PLC, Modbus & LoRaWAN.`,
    cta: { text: 'View Engineering Capabilities', to: '/about' }
  },

  // 11. SERVICES
  {
    id: 'services',
    matchRegex: /(service|services|what (do you|does dasa) (do|offer|provide)|offerings|capabilities)/i,
    keywords: ['services', 'offerings', 'capabilities', 'what you do'],
    response: `⚡ **DASA TECH Core Engineering Services**:

1. **Business Technology Solutions**: Custom ERP systems, CRM suites, billing engines & automated workflows.
2. **Smart Automation & IoT**: Machine telemetry SCADA, agricultural LoRaWAN irrigation & smart home hubs.
3. **Custom Web & Mobile Platforms**: Fast Next.js web applications, e-commerce marketplaces & native apps.
4. **AI & Vision Systems**: Industrial optical defect inspection & automated sorting.`,
    cta: { text: 'Explore All Services', to: '/services' }
  }
]

// ─────────────────────────────────────────────────────────────
// CONVERSATIONAL & CHIT-CHAT INTENTS (HIGHEST PRIORITY)
// ─────────────────────────────────────────────────────────────
const CHITCHAT_INTENTS = [
  // A. "how are you" / "how's it going"
  {
    pattern: /\b(how (are|r) (you|u)|how('s| is) it going|how are you doing|how do you do)\b/i,
    response: "I'm doing great, thank you for asking! 😊 I'm fully online and ready to assist you with DASA TECH's enterprise ERP solutions, SnapShare AI Studio, IoT automation, or project estimates.\n\nWhat can I help you with today?",
    cta: { text: 'View Featured Projects', to: '/projects' }
  },
  // B. "who are you" / "what are you"
  {
    pattern: /\b(who (are|r) (you|u)|what is your name|what (are|r) (you|u)|introduce yourself)\b/i,
    response: "I'm the **DASA AI Solutions Assistant**! 🤖\n\nI can answer any questions about DASA TECH's custom software products, client project case studies, IoT hardware, and project cost estimates.",
    cta: { text: 'Learn About DASA TECH', to: '/about' }
  },
  // C. "thank you" / "thanks"
  {
    pattern: /\b(thank(s| you)?|thx|appreciate it|great help|awesome)\b/i,
    response: "You're very welcome! 😊 Feel free to ask anytime if you need more details about our platforms or want to get a project estimate.",
    cta: { text: 'Schedule a Consultation', to: '/contact' }
  },
  // D. "goodbye" / "bye"
  {
    pattern: /\b(bye|goodbye|see you|cya|talk to you later|have a good day)\b/i,
    response: "Goodbye! 👋 Have a fantastic day ahead. Feel free to come back whenever you need assistance with enterprise software or tech solutions!",
    cta: null
  },
  // E. Greetings: "hi" / "hello" / "hey"
  {
    pattern: /^(hi|hello|hey|good morning|good afternoon|good evening|hola|sup|yo)\b/i,
    response: "Hello! 👋 Welcome to **DASA TECH**.\n\nI'm your AI Solutions Assistant. I can help you explore:\n• 🚀 **Our Projects & Case Studies** (Healthcare ERP, SCADA, AI Vision)\n• 📸 **SnapShare Photography Platform**\n• 💼 **Custom Enterprise ERP Systems**\n• 💰 **Project Cost Estimates & Quotes**\n\nHow can I help you today?",
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

  // ── INTELLIGENT INTENT & CONVERSATIONAL MATCHER ──
  const findBestResponse = (query) => {
    const cleanQuery = query.trim()

    // 1. Check Conversational & Chit-Chat Intents first (Prevents "how are you" false matches)
    for (const chitChat of CHITCHAT_INTENTS) {
      if (chitChat.pattern.test(cleanQuery)) {
        return {
          response: chitChat.response,
          cta: chitChat.cta
        }
      }
    }

    // 2. Check Domain Knowledge via Regex Pattern Match
    for (const domain of DOMAIN_KNOWLEDGE) {
      if (domain.matchRegex.test(cleanQuery)) {
        return {
          response: domain.response,
          cta: domain.cta
        }
      }
    }

    // 3. Fallback: Semantic Token Match with High-Signal Anchor Keywords
    const queryTokens = cleanQuery.toLowerCase().split(/\s+/).filter(w => w.length > 2)
    let bestDomain = null
    let highestScore = 0

    for (const domain of DOMAIN_KNOWLEDGE) {
      let score = 0
      for (const kw of domain.keywords) {
        if (queryTokens.includes(kw.toLowerCase())) {
          score += 5
        }
      }
      if (score > highestScore) {
        highestScore = score
        bestDomain = domain
      }
    }

    if (bestDomain && highestScore >= 5) {
      return {
        response: bestDomain.response,
        cta: bestDomain.cta
      }
    }

    // 4. Default Helpful AI Advisory Fallback
    return {
      response: `I'd be happy to assist with that! At DASA TECH, we engineer **custom ERP systems, AI computer vision, IoT telemetry, and web/mobile platforms** tailored to your business needs.\n\nWould you like to explore our project case studies, calculate an estimate, or speak directly with our engineering team?`,
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
    }, 450)
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
                    className={`max-w-[92%] rounded-2xl p-3.5 leading-relaxed shadow-md ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none text-xs sm:text-sm'
                        : 'bg-white/10 border border-white/10 text-slate-200 rounded-bl-none backdrop-blur-md'
                    }`}
                  >
                    {/* Render Formatted Markdown Content */}
                    {msg.sender === 'user' ? (
                      <div className="whitespace-pre-line">{msg.text}</div>
                    ) : (
                      <FormattedBotMessage text={msg.text} />
                    )}

                    {/* Interactive Direct CTA Link inside Bot Message */}
                    {msg.cta && (
                      <div className="mt-3.5 pt-2.5 border-t border-white/15">
                        <Link
                          to={msg.cta.to}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-mono text-xs font-bold transition shadow-md cursor-pointer"
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
