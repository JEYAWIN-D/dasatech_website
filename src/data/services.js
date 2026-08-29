// Official DASA TECH Products & Services Architecture Catalog (Verified 2025)

export const OFFICIAL_PRODUCTS = [
  {
    id: 'pharmacy-erp',
    name: 'DASA MedFlow ERP',
    category: 'Healthcare & Pharma',
    headline: 'Multi-Branch Pharmacy ERP & Prescription Inventory',
    tagline: 'Batch expiry tracking, scheduled drug compliance, GST POS billing, and automated supplier reorder intelligence.',
    icon: 'Pill',
    gradient: 'from-blue-600 to-indigo-600',
    color: '#2563EB',
    badge: 'HEALTHCARE ERP',
    relatedService: 'Custom ERP Development',
    relatedProject: 'Smart Pharmacy & Multi-Branch Hospital ERP Suite',
    stats: [
      { label: 'Billing Speed', value: '< 2.5s / POS' },
      { label: 'Batch Accuracy', value: '100% Expiry Sync' },
      { label: 'Compliance', value: 'Schedule H1 / GST' }
    ],
    features: [
      'Multi-branch real-time stock sync with barcode & QR scanning',
      'Automated expiry alert system with FIFO batch dispatch',
      'Schedule H & H1 drug register reporting with doctor prescription logging',
      'Automated purchase order generation based on predictive minimum stock',
      'Instant GST filing report generation and thermal receipt printing'
    ],
    deliverables: [
      'Multi-branch real-time stock sync with barcode & QR scanning',
      'Automated expiry alert system with FIFO batch dispatch',
      'Schedule H & H1 drug register reporting with doctor prescription logging',
      'Automated purchase order generation based on predictive minimum stock',
      'Instant GST filing report generation and thermal receipt printing'
    ],
    techStack: ['Node.js Microservices', 'PostgreSQL Distributed', 'React POS', 'Offline IndexedDB Sync']
  },
  {
    id: 'school-erp',
    name: 'DASA EduCore ERP',
    category: 'Education & Academics',
    headline: 'Unified Campus Management & Biometric SIS Platform',
    tagline: 'End-to-end student lifecycle, biometric attendance telemetry, fee gateway automation, and parent communication portal.',
    icon: 'GraduationCap',
    gradient: 'from-sky-500 to-blue-600',
    color: '#0284C7',
    badge: 'CAMPUS CLOUD',
    relatedService: 'Custom ERP Development',
    relatedProject: 'Campus Management & Biometric Telemetry System',
    stats: [
      { label: 'Attendance Telemetry', value: 'Biometric / RFID' },
      { label: 'Fee Collection', value: 'Automated Gateway' },
      { label: 'Mobile Portals', value: 'iOS & Android' }
    ],
    features: [
      'Biometric / RFID student & staff attendance with instant parent SMS/WhatsApp alerts',
      'Multi-term automated fee invoice generation with UPI, credit card, and net banking gateways',
      'Comprehensive exam grading, automated report card generation (CBSE/ICSE/State boards)',
      'Dynamic timetable scheduling engine and classroom substitution assigner',
      'Dedicated iOS and Android portals for parents, teachers, and school administrators'
    ],
    deliverables: [
      'Biometric / RFID student & staff attendance with instant parent SMS/WhatsApp alerts',
      'Multi-term automated fee invoice generation with UPI, credit card, and net banking gateways',
      'Comprehensive exam grading, automated report card generation (CBSE/ICSE/State boards)',
      'Dynamic timetable scheduling engine and classroom substitution assigner',
      'Dedicated iOS and Android portals for parents, teachers, and school administrators'
    ],
    techStack: ['Flutter Mobile', 'React Web Portal', 'PostgreSQL', 'AWS Cloud Infrastructure']
  },
  {
    id: 'factory-erp',
    name: 'DASA FactorySync ERP',
    category: 'Manufacturing & Industry 4.0',
    headline: 'Shop Floor Manufacturing & Work-In-Progress ERP',
    tagline: 'Multi-level Bill of Materials (BOM), live machine uptime telemetry, overall equipment effectiveness (OEE), and procurement automation.',
    icon: 'Factory',
    gradient: 'from-amber-500 to-orange-600',
    color: '#D97706',
    badge: 'INDUSTRY 4.0',
    relatedService: 'Industrial & Business Automations',
    relatedProject: 'Industrial SCADA & Predictive Machine Maintenance',
    stats: [
      { label: 'OEE Telemetry', value: 'Live PLC Sync' },
      { label: 'WIP Tracking', value: 'Step-by-Step' },
      { label: 'BOM Nesting', value: 'Multi-Level' }
    ],
    features: [
      'Dynamic Multi-Level Bill of Materials (BOM) with automatic raw material reservations',
      'Real-time shop-floor job card tracking and workstation stage progression',
      'Live machine cycle time & downtime telemetry integrated with factory PLCs',
      'Quality inspection checkpoints with automated non-conformance quarantine',
      'Cost per unit calculation including material, machine runtime, and labor overhead'
    ],
    deliverables: [
      'Dynamic Multi-Level Bill of Materials (BOM) with automatic raw material reservations',
      'Real-time shop-floor job card tracking and workstation stage progression',
      'Live machine cycle time & downtime telemetry integrated with factory PLCs',
      'Quality inspection checkpoints with automated non-conformance quarantine',
      'Cost per unit calculation including material, machine runtime, and labor overhead'
    ],
    techStack: ['Modbus TCP / OPC UA', 'Node.js Core', 'TimescaleDB', 'React Manufacturing HMI']
  },
  {
    id: 'warehouse-erp',
    name: 'DASA WMS Hub',
    category: 'Logistics & Supply Chain',
    headline: 'Smart Warehouse Management & Bin Inventory ERP',
    tagline: 'Multi-aisle bin location mapping, RFID/barcode pallet tracking, cross-docking dispatch, and real-time inventory audit.',
    icon: 'Boxes',
    gradient: 'from-emerald-500 to-teal-600',
    color: '#059669',
    badge: 'SUPPLY CHAIN',
    relatedService: 'Custom ERP Development',
    relatedProject: 'High-Throughput Multi-Vendor Logistics Platform',
    stats: [
      { label: 'Picking Accuracy', value: '99.9%' },
      { label: 'Receiving Flow', value: 'Optimized Inbound' },
      { label: 'Scanning', value: 'RFID / 2D Barcode' }
    ],
    features: [
      'Dynamic warehouse 2D/3D bin location routing for optimized picker travel paths',
      'Inbound receiving with automated barcode/RFID pallet label generation',
      'FIFO & FEFO dispatch rules to eliminate inventory dead-stock and spoilage',
      'Cross-docking support for direct truck-to-truck transfer without intermediate storage',
      'Real-time discrepancy audit with cycle counting mobile handheld scanner app'
    ],
    deliverables: [
      'Dynamic warehouse 2D/3D bin location routing for optimized picker travel paths',
      'Inbound receiving with automated barcode/RFID pallet label generation',
      'FIFO & FEFO dispatch rules to eliminate inventory dead-stock and spoilage',
      'Cross-docking support for direct truck-to-truck transfer without intermediate storage',
      'Real-time discrepancy audit with cycle counting mobile handheld scanner app'
    ],
    techStack: ['Android Handheld POS', 'Go API', 'PostgreSQL', 'Redis Cache']
  },
  {
    id: 'snapshare-social',
    name: 'SnapShare',
    category: 'AI & Photography Platform',
    headline: 'AI-Powered Event Photo Sharing & Studio Management Platform',
    tagline: 'SnapShare helps photography studios manage events, clients, photos, and business operations from one centralized system.',
    icon: 'Camera',
    gradient: 'from-pink-500 via-purple-500 to-indigo-600',
    color: '#EC4899',
    badge: 'AI PHOTO & CRM',
    relatedService: 'Custom Web & Mobile App Engineering',
    relatedProject: 'AI Photo Sharing & Studio Platform',
    stats: [
      { label: 'AI Matching', value: '512D Vector' },
      { label: 'Photo Access', value: 'Instant QR' },
      { label: 'Storage', value: 'MinIO S3' }
    ],
    features: [
      'AI-powered face recognition and instant selfie-based photo matching',
      'Dynamic QR code generation for quick guest event photo access',
      'Comprehensive studio CRM for leads, proposals, contracts, and invoices',
      'Secure event photo galleries with folder-level access control',
      'Studio resource, photographer calendar, and equipment tracking'
    ],
    deliverables: [
      'AI-powered face recognition and instant selfie-based photo matching',
      'Dynamic QR code generation for quick guest event photo access',
      'Comprehensive studio CRM for leads, proposals, contracts, and invoices',
      'Secure event photo galleries with folder-level access control',
      'Studio resource, photographer calendar, and equipment tracking'
    ],
    techStack: ['React 19 + Vite 8', 'Node.js + Express', 'Python Flask + InsightFace', 'MongoDB + MinIO S3']
  },
  {
    id: 'ecommerce-engine',
    name: 'DASA CommerceEngine',
    category: 'E-Commerce & Retail',
    headline: 'Next-Gen Multi-Vendor & Headless Commerce Platform',
    tagline: 'High-speed headless storefronts, multi-vendor commission engines, instant checkout with UPI/Cards, and inventory ERP sync.',
    icon: 'ShoppingCart',
    gradient: 'from-indigo-600 to-cyan-600',
    color: '#4F46E5',
    badge: 'HEADLESS COMMERCE',
    relatedService: 'Custom Web & Mobile App Engineering',
    relatedProject: 'High-Throughput Multi-Vendor E-Commerce Network',
    stats: [
      { label: 'Page Load', value: '< 600ms' },
      { label: 'Payment Gateway', value: 'Stripe / Razorpay / UPI' },
      { label: 'Cart Checkout', value: 'Frictionless POS' }
    ],
    features: [
      'Blazing-fast headless React/Next.js store frontend with sub-second page transitions',
      'Multi-vendor merchant dashboard with automated commission split and payout schedules',
      'Frictionless one-click checkout with Razorpay, Stripe, Cash on Delivery, and UPI',
      'Automated abandoned cart WhatsApp recovery notifications with dynamic discount vouchers',
      'Real-time two-way synchronization with warehouse ERP inventory ledgers'
    ],
    deliverables: [
      'Blazing-fast headless React/Next.js store frontend with sub-second page transitions',
      'Multi-vendor merchant dashboard with automated commission split and payout schedules',
      'Frictionless one-click checkout with Razorpay, Stripe, Cash on Delivery, and UPI',
      'Automated abandoned cart WhatsApp recovery notifications with dynamic discount vouchers',
      'Real-time two-way synchronization with warehouse ERP inventory ledgers'
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe / Razorpay SDK', 'PostgreSQL', 'ElasticSearch']
  }
]

export const SERVICES_CATALOG = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Business Technology Solutions',
    tagline: 'Data-driven brand positioning, high-converting creative campaigns, and multi-channel performance marketing.',
    description: 'We orchestrate brand strategy, studio video production, product photography shoots, social media growth, and paid performance ad funnels that turn attention into measurable revenue.',
    fullDescription: 'We orchestrate brand strategy, studio video production, product photography shoots, social media growth, and paid performance ad funnels that turn attention into measurable revenue.',
    icon: 'TrendingUp',
    color: '#7C3AED',
    simulator: 'marketing',
    features: [
      'Brand Visual Positioning, Identity Guidelines & Creative Direction',
      'Studio Product Photography, 4K Commercial Video & Reels Production',
      'Multi-Platform Social Media Management (Meta, YouTube, LinkedIn)',
      'High-ROI Paid Advertising (Google Search, Meta Ads & Retargeting Funnels)'
    ],
    deliverables: [
      'Brand Visual Positioning, Identity Guidelines & Creative Direction',
      'Studio Product Photography, 4K Commercial Video & Reels Production',
      'Multi-Platform Social Media Management (Meta, YouTube, LinkedIn)',
      'High-ROI Paid Advertising (Google Search, Meta Ads & Retargeting Funnels)'
    ],
    techStack: ['Meta Business Suite', 'Google Ads', 'SEMrush', 'DaVinci Resolve', 'Google Analytics 4'],
    relatedProductSlug: 'ecommerce-engine',
    relatedProjectSlug: 'ecommerce-marketplace'
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    category: 'Server Architecture & Distributed Systems',
    tagline: 'High-concurrency API architectures, transactional logic, and resilient database engines.',
    description: 'We architect low-latency REST and GraphQL APIs, asynchronous BullMQ queues, double-entry transactional ledgers, and distributed PostgreSQL databases for mission-critical reliability.',
    fullDescription: 'We architect low-latency REST and GraphQL APIs, asynchronous BullMQ queues, double-entry transactional ledgers, and distributed PostgreSQL databases for mission-critical reliability.',
    icon: 'Server',
    color: '#2563EB',
    simulator: 'backend',
    features: [
      'High-Concurrency REST & GraphQL API Gateway Engineering',
      'ACID-Compliant PostgreSQL & Redis In-Memory Database Caching',
      'Cryptographic Authentication, JWT Sessions & Role-Based RBAC',
      'Asynchronous Background Job Queues & Third-Party Gateway Sync'
    ],
    deliverables: [
      'High-Concurrency REST & GraphQL API Gateway Engineering',
      'ACID-Compliant PostgreSQL & Redis In-Memory Database Caching',
      'Cryptographic Authentication, JWT Sessions & Role-Based RBAC',
      'Asynchronous Background Job Queues & Third-Party Gateway Sync'
    ],
    techStack: ['Node.js', 'Go (Golang)', 'Python FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'BullMQ'],
    relatedProductSlug: 'pharmacy-erp',
    relatedProjectSlug: 'erp-healthcare'
  },
  {
    id: 'crm-solutions',
    title: 'CRM Solutions',
    category: 'Business Technology Solutions',
    tagline: 'Centralize every customer touchpoint, automated follow-ups, and accelerate sales pipeline conversions.',
    description: 'We build custom CRM architectures featuring multi-channel lead ingestion, drag-and-drop sales pipelines, automated WhatsApp sequences, and 360° customer interaction timelines.',
    fullDescription: 'We build custom CRM architectures featuring multi-channel lead ingestion, drag-and-drop sales pipelines, automated WhatsApp sequences, and 360° customer interaction timelines.',
    icon: 'Users',
    color: '#059669',
    simulator: 'crm',
    features: [
      'Automated Multi-Channel Lead Ingestion & Intelligent Scoring',
      'Drag-and-Drop Visual Sales Pipeline with Revenue Forecasting',
      'Integrated WhatsApp Business API Quotation & Follow-Up Automation',
      'Customer 360° Activity Timeline & Sales Rep Performance KPI HUD'
    ],
    deliverables: [
      'Automated Multi-Channel Lead Ingestion & Intelligent Scoring',
      'Drag-and-Drop Visual Sales Pipeline with Revenue Forecasting',
      'Integrated WhatsApp Business API Quotation & Follow-Up Automation',
      'Customer 360° Activity Timeline & Sales Rep Performance KPI HUD'
    ],
    techStack: ['React.js', 'Node.js API', 'PostgreSQL', 'Twilio WhatsApp API', 'SendGrid'],
    relatedProductSlug: 'ecommerce-engine',
    relatedProjectSlug: 'ecommerce-marketplace'
  },
  {
    id: 'custom-erp',
    title: 'Custom ERP Development',
    category: 'Business Technology Solutions',
    tagline: 'Unify inventory, finance, procurement, production, HR, and multi-branch operations.',
    description: 'Bespoke Enterprise Resource Planning platforms connecting multi-branch inventory, batch FIFO expiry tracking, double-entry general ledgers, automated GST filing, and sub-second POS billing.',
    fullDescription: 'Bespoke Enterprise Resource Planning platforms connecting multi-branch inventory, batch FIFO expiry tracking, double-entry general ledgers, automated GST filing, and sub-second POS billing.',
    icon: 'Layers',
    color: '#1D4ED8',
    simulator: 'erp',
    features: [
      'Multi-Branch Real-Time Stock Sync & FIFO Batch Expiry Matrix',
      'Automated Double-Entry Accounting & Statutory GST Tax Engine',
      'Procurement 3-Way Purchase Order Matching & Supplier Portals',
      'Sub-Second Keyboard POS Retail Cashier & Thermal Print Sync'
    ],
    deliverables: [
      'Multi-Branch Real-Time Stock Sync & FIFO Batch Expiry Matrix',
      'Automated Double-Entry Accounting & Statutory GST Tax Engine',
      'Procurement 3-Way Purchase Order Matching & Supplier Portals',
      'Sub-Second Keyboard POS Retail Cashier & Thermal Print Sync'
    ],
    techStack: ['React 18 PWA', 'Node.js Microservices', 'PostgreSQL Distributed', 'Redis', 'Gov GST APIs'],
    relatedProductSlug: 'pharmacy-erp',
    relatedProjectSlug: 'erp-healthcare'
  },
  {
    id: 'iot-solutions',
    title: 'Industrial Workflow Automation',
    category: 'Business Technology Solutions',
    tagline: 'Automate factory workflow operations from order handling to work execution.',
    description: 'Connect factory operations to receive orders through smart NFC systems and automate production workflows from order handling to work execution.',
    fullDescription: 'Connect factory operations to receive orders through smart NFC systems and automate production workflows from order handling to work execution.',
    icon: 'Cpu',
    color: '#0D9488',
    simulator: 'iot',
    features: [
      'Order Handling & Automated Shop-Floor Work Execution Systems',
      'Touchless NFC Smart Tag Order Identification & Station Tracking',
      'Real-Time Machine Performance Monitoring & Emergency Alarms',
      'Live WebSockets Production Gauges HUD & Order Triggers'
    ],
    deliverables: [
      'Order Handling & Automated Shop-Floor Work Execution Systems',
      'Touchless NFC Smart Tag Order Identification & Station Tracking',
      'Real-Time Machine Performance Monitoring & Emergency Alarms',
      'Live WebSockets Production Gauges HUD & Order Triggers'
    ],
    techStack: ['ESP32-S3', 'NFC Smart Tags', 'SX1262 LoRa Radio', 'EMQX MQTT', 'TimescaleDB', 'React WebSockets'],
    relatedProductSlug: 'iot-telemetry',
    relatedProjectSlug: 'ems-energy-campus'
  },
  {
    id: 'business-automation',
    title: 'Business Automation',
    category: 'Business Technology Solutions',
    tagline: 'Eliminate repetitive manual data entry, accelerate multi-tier approvals, and connect software tools.',
    description: 'We orchestrate event-driven workflow automation, intelligent document OCR parsing, multi-tier approval chains, and cross-platform synchronization between CRM, ERP, and communication channels.',
    fullDescription: 'We orchestrate event-driven workflow automation, intelligent document OCR parsing, multi-tier approval chains, and cross-platform synchronization between CRM, ERP, and communication channels.',
    icon: 'Zap',
    color: '#D97706',
    simulator: 'automation',
    features: [
      'Multi-Step Automated Approval Workflows & Document Routing',
      'Intelligent PDF Document OCR Parsing & Data Extraction Bots',
      'Cross-Platform Real-Time Synchronization (ERP, CRM, WhatsApp)',
      'Automated Management Daily Briefing & Alert Dispatches'
    ],
    deliverables: [
      'Multi-Step Automated Approval Workflows & Document Routing',
      'Intelligent PDF Document OCR Parsing & Data Extraction Bots',
      'Cross-Platform Real-Time Synchronization (ERP, CRM, WhatsApp)',
      'Automated Management Daily Briefing & Alert Dispatches'
    ],
    techStack: ['Node.js Workers', 'Python OCR Scripts', 'BullMQ Queue', 'Twilio WhatsApp API', 'Webhooks'],
    relatedProductSlug: 'factory-erp',
    relatedProjectSlug: 'scada-manufacturing'
  },
  {
    id: 'web-mobile-engineering',
    title: 'Web & Mobile Applications',
    category: 'High-Performance Digital Products',
    tagline: 'Crafting responsive web applications and cross-platform mobile apps with sub-second performance.',
    description: 'Engineering high-converting React and Next.js web applications alongside native-feel Flutter and React Native mobile applications with offline PWA synchronization and enterprise security.',
    fullDescription: 'Engineering high-converting React and Next.js web applications alongside native-feel Flutter and React Native mobile applications with offline PWA synchronization and enterprise security.',
    icon: 'Smartphone',
    color: '#4F46E5',
    simulator: 'app',
    features: [
      'Responsive Next.js 14 Web Applications with Sub-600ms Loading',
      'Cross-Platform iOS & Android Mobile Apps with Flutter & React Native',
      'Offline-First PWA Local Caching & Background Synchronization',
      'Enterprise Role-Based Admin Consoles with Granular Access Matrices'
    ],
    deliverables: [
      'Responsive Next.js 14 Web Applications with Sub-600ms Loading',
      'Cross-Platform iOS & Android Mobile Apps with Flutter & React Native',
      'Offline-First PWA Local Caching & Background Synchronization',
      'Enterprise Role-Based Admin Consoles with Granular Access Matrices'
    ],
    techStack: ['React.js 18', 'Next.js 14', 'Flutter', 'React Native', 'Tailwind CSS', 'TypeScript'],
    relatedProductSlug: 'snapshare-social',
    relatedProjectSlug: 'ecommerce-marketplace'
  }
]

export const OFFICIAL_SERVICES = SERVICES_CATALOG
