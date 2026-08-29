import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  TrendingUp, Users, Database, Radio, Zap, Globe,
  ArrowRight, ArrowLeft, CheckCircle2, Search, Layout,
  Layers, Code2, Settings, FlaskConical, Rocket,
  Headphones, ShieldCheck, Sparkles, Send, Loader2,
  Server, Cpu, Activity, Clock, Award, BarChart3,
  Terminal, Check, RefreshCw, GitBranch, GitMerge,
  Repeat, FileText, CheckCheck, PlayCircle, Eye,
  ChevronRight, Compass, Shield, Wrench, Smartphone,
  Brain, Lock, FileSpreadsheet, Workflow, Sliders
} from 'lucide-react'
import { usePath, Link } from '../components/Router'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import DigitalMarketingServiceView from '../components/services/DigitalMarketingServiceView'
import BackendDevelopmentServiceView from '../components/services/BackendDevelopmentServiceView'
import CrmSolutionsServiceView from '../components/services/CrmSolutionsServiceView'
import CustomErpServiceView from '../components/services/CustomErpServiceView'
import IotSolutionsServiceView from '../components/services/IotSolutionsServiceView'
import BusinessAutomationServiceView from '../components/services/BusinessAutomationServiceView'
import WebMobileDevelopmentServiceView from '../components/services/WebMobileDevelopmentServiceView'
import { BACKEND_ASSETS } from '../data/backendAssets'

// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE SERVICE DETAIL DATASET (ALL 7 RESEARCHED SERVICES)
// ─────────────────────────────────────────────────────────────
export const SERVICE_DETAILS = {
  'digital-marketing': {
    id: 'digital-marketing',
    icon: TrendingUp,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Digital Marketing',
    highlightWord: 'Brand Acceleration',
    headline: 'Targeted brand strategy, creative media, and performance ad campaigns.',
    overview: 'DASA TECH designs and executes multi-channel digital marketing campaigns that combine brand positioning, studio commercial video production, product photography shoots, social media management, and targeted online advertising.',
    problem: {
      title: 'The Challenge: Low Brand Visibility & Fragmented Marketing',
      desc: 'Many businesses struggle with uncoordinated online efforts: posting without clear strategy, unoptimized ads with high click costs, and poor creative production that fails to engage potential customers.'
    },
    solution: {
      title: 'Our Solution: Coordinated Multi-Channel Brand Growth',
      desc: 'We unify your entire digital marketing presence under one strategy: clear brand positioning, studio visual shoots, social audience management, and targeted Google/Meta ad funnels.'
    },
    heroImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Compass,
        title: 'Brand Identity & Visual Positioning',
        desc: 'Custom brand style guides, tone-of-voice definition, typography, and messaging frameworks that differentiate your brand.',
        items: ['Brand style guides', 'Voice & tone definition', 'Competitor gap analysis']
      },
      {
        icon: PlayCircle,
        title: 'Studio Product Photography & Video',
        desc: 'Professional product photography shoots, commercial video reels, motion graphics, and animated explainer videos.',
        items: ['Promotional video reels', 'Product photography shoots', 'Motion graphic animations']
      },
      {
        icon: TrendingUp,
        title: 'Targeted Performance Paid Ads',
        desc: 'Precision Google Search ads, Meta conversion campaigns, targeted audience modeling, and creative split testing.',
        items: ['Google Search campaigns', 'Meta Instagram/FB ads', 'Retargeting ad funnels']
      },
      {
        icon: Users,
        title: 'Social Media Management & Growth',
        desc: 'End-to-end content calendar creation, organic growth management, community engagement, and brand messaging.',
        items: ['Instagram & LinkedIn growth', 'Weekly content calendars', 'Community engagement']
      },
      {
        icon: Search,
        title: 'Search Engine Visibility & Local SEO',
        desc: 'High-intent commercial keyword ranking, technical page optimization, and local Google Maps business visibility.',
        items: ['Technical SEO audits', 'Commercial keyword ranking', 'Local Google Maps optimization']
      },
      {
        icon: BarChart3,
        title: 'Conversion Optimization & Analytics',
        desc: 'Landing page design enhancement, CTA layout optimization, user engagement heatmaps, and campaign performance reports.',
        items: ['Landing page optimization', 'User drop-off heatmaps', 'Campaign performance reporting']
      }
    ],
    workflow: [
      { step: '01', stage: 'Brand Audit', title: 'Positioning & Audience Research', desc: 'Audit existing market presence, target customer profiles, and competitor messaging.' },
      { step: '02', stage: 'Strategy', title: 'Multi-Channel Growth Roadmap', desc: 'Build a quarterly marketing strategy detailing channel budgets and campaign goals.' },
      { step: '03', stage: 'Content', title: 'Studio Production & Media Assets', desc: 'Script, shoot, design, and edit commercial videos and high-resolution product photos.' },
      { step: '04', stage: 'Campaign', title: 'Ad Targeting & Landing Page Setup', desc: 'Configure ad sets, build responsive landing pages, and launch targeted advertising.' },
      { step: '05', stage: 'Distribution', title: 'Multi-Channel Broadcast', desc: 'Publish synchronized creative assets across Instagram, Facebook, LinkedIn, and Google.' },
      { step: '06', stage: 'Measurement', title: 'Performance Review & Refinement', desc: 'Analyze click-through rates, refine ad copy, and scale top-performing creative campaigns.' }
    ],
    technologies: {
      DesignProduction: ['Adobe Photoshop', 'Premiere Pro', 'After Effects', 'Figma', 'DaVinci Resolve'],
      Advertising: ['Google Ads', 'Meta Business Suite', 'LinkedIn Campaign Manager', 'YouTube Studio'],
      AnalyticsSEO: ['Google Analytics 4', 'Google Tag Manager', 'SEMrush', 'Ahrefs', 'Hotjar'],
      SocialChannels: ['Instagram Business', 'LinkedIn Org', 'Meta Suite', 'WhatsApp Channel']
    },
    cases: [
      { title: 'E-Commerce Product Launch', desc: 'Sales acceleration using promotional reels, catalog ads, and Google Shopping funnels.' },
      { title: 'B2B Lead Generation Campaign', desc: 'LinkedIn thought-leadership content, whitepaper funnels, and corporate outreach.' },
      { title: 'Local Brand Dominance', desc: 'Google Maps local business optimization, localized video ads, and WhatsApp inquiry funnels.' }
    ],
    outcomes: [
      'Enhanced brand positioning and consistent visual identity across all digital marketing channels.',
      'Targeted ad distribution reaching high-intent commercial audiences.',
      'Increased customer engagement through professional studio video and product photography media.'
    ],
    whyItMatters: 'A great product needs strategic marketing to succeed. We ensure your brand commands attention and converts online interest into loyal paying customers.'
  },

  'backend-development': {
    id: 'backend-development',
    icon: Server,
    category: 'CLOUD & SERVER ENGINEERING',
    title: 'Backend Development',
    highlightWord: 'Server Infrastructure',
    headline: 'Secure, fast, and reliable server infrastructure for your applications.',
    overview: 'DASA TECH engineers scalable server backbones, microservice architectures, and relational PostgreSQL databases designed for fast query execution, secure data storage, and high uptime.',
    problem: {
      title: 'The Challenge: Slow Servers & Fragile Database Architectures',
      desc: 'Slow database queries, fragile server setups that crash under traffic surges, insecure API endpoints with data leak risks, and unmaintainable code bases that stall software growth.'
    },
    solution: {
      title: 'Our Solution: High-Performance Distributed Server Backbones',
      desc: 'We engineer deterministic RESTful and GraphQL APIs, asynchronous worker queues, double-entry transactional ledgers, and secure database schemas built for reliability.'
    },
    heroImg: BACKEND_ASSETS.hero.main,
    capabilities: [
      {
        icon: Code2,
        title: 'High-Performance REST & GraphQL APIs',
        desc: 'Secure, well-documented API endpoints for web, mobile, and third-party software integrations with fast response speeds.',
        items: ['OpenAPI / Swagger documentation', 'GraphQL schema setup', 'Rate limiting & CORS policies']
      },
      {
        icon: Database,
        title: 'Relational Database Engineering & Schema Design',
        desc: 'Relational PostgreSQL and in-memory Redis schema modeling maintaining data integrity and fast record retrieval.',
        items: ['PostgreSQL schema design', 'Connection pool optimization', 'Redis multi-tier caching']
      },
      {
        icon: ShieldCheck,
        title: 'Cryptographic Auth & Role-Based Access',
        desc: 'Cryptographically signed JWT sessions, OAuth2 login providers, multi-factor auth, and granular user role permissions.',
        items: ['JWT session security', 'OAuth2 / SSO integration', 'Granular permission matrices']
      },
      {
        icon: Layers,
        title: 'Background Task Processing & Queue Workers',
        desc: 'Asynchronous queue workers handling heavy background data processing, document generation, emails, and webhooks.',
        items: ['BullMQ Redis queues', 'Asynchronous document generation', 'Third-party webhook dispatches']
      },
      {
        icon: Activity,
        title: 'Real-Time WebSockets & Event Streaming',
        desc: 'Bi-directional socket servers delivering live notifications, chat, and high-frequency data streaming.',
        items: ['WebSockets event broadcast', 'Stream data ingestion', 'Fast packet delivery']
      },
      {
        icon: Server,
        title: 'Cloud Deployment & System Monitoring',
        desc: 'Containerized Docker server deployments, cloud hosting setup, automated rollback triggers, and 24/7 server monitoring.',
        items: ['Docker containerization', 'Automated CI/CD pipelines', 'Zero-downtime server updates']
      }
    ],
    workflow: [
      { step: '01', stage: 'API Gateway', title: 'Gateway & Traffic Security', desc: 'SSL termination, CORS policy validation, payload schema checks, and rate limiting.' },
      { step: '02', stage: 'Auth', title: 'User Authentication & Access Control', desc: 'Validates cryptographically signed JWT tokens and enforces user role permissions.' },
      { step: '03', stage: 'Logic', title: 'Business Logic Execution', desc: 'Executes core application logic, data calculations, and input validation checks.' },
      { step: '04', stage: 'Database', title: 'Database Query & Cache Access', desc: 'Reads from Redis memory cache or executes indexed PostgreSQL database queries.' },
      { step: '05', stage: 'Async Queue', title: 'Background Job Dispatch', desc: 'Offloads heavy document generation and webhook dispatches to worker queues.' },
      { step: '06', stage: 'Response', title: 'Encrypted Response Formatting', desc: 'Formats JSON API payload, encrypts response data, and returns result to client app.' }
    ],
    technologies: {
      Runtimes: ['Node.js Core', 'Python', 'Go (Golang)', 'Express.js', 'FastAPI'],
      Databases: ['PostgreSQL Distributed', 'Redis In-Memory', 'TimescaleDB', 'MongoDB'],
      Queues: ['BullMQ', 'Redis Streams', 'RabbitMQ'],
      DevOps: ['Docker', 'Kubernetes', 'AWS (EC2/S3/RDS)', 'GitHub Actions', 'NGINX']
    },
    cases: [
      { title: 'Payment Processing Engine', desc: 'Secure backend transaction processing with strict double-entry ledger balancing.' },
      { title: 'Multi-Tenant Business Portal Backend', desc: 'Scalable subscription software backend with isolated tenant databases.' },
      { title: 'Real-Time Data Ingestion System', desc: 'Processing continuous data streams with fast database persistence.' }
    ],
    outcomes: [
      'High server availability and sub-second API response handling for web and mobile apps.',
      'ACID-compliant PostgreSQL database transactions ensuring zero data corruption.',
      'Scalable backend microservices ready to support enterprise business growth.'
    ],
    whyItMatters: 'Your user interface is only as reliable as the backend server powering it. We build robust server backbones that run smoothly and securely.'
  },

  'crm-solutions': {
    id: 'crm-solutions',
    icon: Users,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'CRM Solutions',
    highlightWord: 'Sales Pipelines',
    headline: 'Unified customer relationship management & automated sales follow-up.',
    overview: 'DASA TECH builds custom CRM platforms that eliminate lost sales leads, automate WhatsApp quote follow-ups, and provide sales leaders with a 360-degree view of customer history and sales pipelines.',
    problem: {
      title: 'The Challenge: Disorganized Leads & Delayed Follow-Ups',
      desc: 'Scattered customer leads across personal phone chats, lost spreadsheet rows, delayed follow-ups that cause hot leads to go cold, and sales managers having zero visibility into rep activities.'
    },
    solution: {
      title: 'Our Solution: Centralized CRM & Automated Conversion',
      desc: 'We centralize multi-channel lead collection, automate instant WhatsApp quotation follow-ups, and provide visual drag-and-drop Kanban deal pipelines with complete customer activity histories.'
    },
    heroImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Users,
        title: 'Multi-Channel Lead Ingestion',
        desc: 'Automated lead capture streaming from Meta Ads, Google search forms, website contact pages, and incoming WhatsApp chats.',
        items: ['Meta ad form integration', 'Website form listeners', 'Duplicate contact deduplication']
      },
      {
        icon: Layout,
        title: 'Visual Drag-and-Drop Kanban Pipelines',
        desc: 'Customizable deal stages representing your exact sales cycle with automated probability and deal forecasting.',
        items: ['Kanban deal progression', 'Stage value calculation', 'Deal milestone tracking']
      },
      {
        icon: Zap,
        title: 'Integrated WhatsApp Business Automations',
        desc: 'Send instant price quotes, automated payment reminder links, and appointment confirmations directly inside the CRM.',
        items: ['WhatsApp Business API', 'Automated quote dispatches', 'Payment reminder links']
      },
      {
        icon: Clock,
        title: 'Customer 360° Activity Timeline',
        desc: 'Complete historical log of every phone call, WhatsApp conversation, sent quotation, invoice, and note in one view.',
        items: ['Unified interaction log', 'Document & invoice vault', 'Call note logging']
      },
      {
        icon: BarChart3,
        title: 'Sales Team Performance HUD',
        desc: 'Real-time sales metrics, daily call volume tracking, overdue task alerts, and projected quarterly pipeline revenue.',
        items: ['Sales conversion overview', 'Daily call volume tracking', 'Revenue forecast dashboard']
      },
      {
        icon: ShieldCheck,
        title: 'Automated Lead Routing & Assignment',
        desc: 'Rule-based lead distribution assigning new inquiries to available sales executives based on territory or workload.',
        items: ['Automated lead routing', 'Territory assignment', 'Idle lead escalations']
      }
    ],
    workflow: [
      { step: '01', stage: 'Capture', title: 'Multi-Channel Lead Collection', desc: 'Customer inquiries automatically enter CRM from website forms, social ads, and WhatsApp.' },
      { step: '02', stage: 'Verify', title: 'Deduplication & Verification', desc: 'CRM verifies contact details, eliminates duplicate records, and logs initial lead source.' },
      { step: '03', stage: 'Assign', title: 'Sales Executive Routing', desc: 'Assigns new lead to designated sales rep with instant push and WhatsApp notification alerts.' },
      { step: '04', stage: 'Pipeline', title: 'Kanban Stage Progression', desc: 'Sales rep contacts lead; CRM logs call notes, quotation PDFs, and timestamps.' },
      { step: '05', stage: 'Follow-Up', title: 'Automated WhatsApp Reminders', desc: 'If no response occurs within set timeframe, automated WhatsApp follow-up sequences trigger.' },
      { step: '06', stage: 'Closed', title: 'Closed-Won & ERP Handover', desc: 'When marked Won, deal data automatically transfers customer details to invoicing/ERP.' }
    ],
    technologies: {
      CorePlatform: ['React.js UI', 'Node.js API', 'PostgreSQL Data Store', 'Tailwind CSS'],
      Communication: ['WhatsApp Business API', 'Email Integration', 'Cloud Telephony'],
      Integrations: ['Meta Form Sync', 'Google Forms API', 'Payment Gateways']
    },
    cases: [
      { title: 'Real Estate Inquiry & Booking CRM', desc: 'Managing property site-visit inquiries, unit bookings, and payment follow-ups.' },
      { title: 'B2B Product Sales Proposals', desc: 'Tracking long-cycle machinery quotations, technical specifications, and purchase orders.' },
      { title: 'Educational Institution Admissions', desc: 'Managing student inquiries, campus visits, counselor follow-ups, and enrollment fees.' }
    ],
    outcomes: [
      'Centralized lead management eliminating lost inquiries across sales teams.',
      'Instant automated WhatsApp price quote dispatches and follow-up reminders.',
      'Complete leadership audit visibility into pipeline stages and sales rep activity.'
    ],
    whyItMatters: 'Winning a deal comes down to speed and organized follow-up. Our CRM solutions ensure no lead is forgotten and every customer interaction is clear.'
  },

  'custom-erp': {
    id: 'custom-erp',
    icon: Database,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Custom ERP Development',
    highlightWord: 'Enterprise Operations',
    headline: 'Custom business management software connecting inventory, sales, and finances.',
    overview: 'DASA TECH builds custom Enterprise Resource Planning platforms connecting multi-branch inventory, FIFO batch expiry tracking, double-entry financial accounting, automated GST filing, and sub-second POS cashier billing.',
    problem: {
      title: 'The Challenge: Operational Silos & Manual Paperwork',
      desc: 'Operational disconnects where inventory levels are inaccurate, accounting spends days manually cross-checking supplier bills, and business owners lack real-time visibility into overall profit margins.'
    },
    solution: {
      title: 'Our Solution: Centralized Operations & Real-Time Sync',
      desc: 'We unify sales orders, inventory lot deduction, financial accounting ledgers, purchase order matching, and tax filing into a single centralized system tailored to your exact workflow.'
    },
    heroImg: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Database,
        title: 'FIFO Batch Expiry & Inventory Tracking',
        desc: 'Automated inventory batch tracking, multi-branch stock transfers, batch expiry alerts, and automatic reorder triggers.',
        items: ['FIFO batch allocation', 'Multi-branch stock transfers', 'Barcode & QR tag generation']
      },
      {
        icon: ShieldCheck,
        title: 'Double-Entry Accounting & GST Tax Engine',
        desc: 'General ledger balancing, bank statement reconciliation, and one-click statutory GST tax invoice return exports.',
        items: ['Double-entry general ledger', 'Bank statement reconciliation', 'GSTR tax invoice export']
      },
      {
        icon: Activity,
        title: 'Procurement & Purchase Order Matching',
        desc: 'Automated purchase orders linked with gate receiving challans and vendor bills to prevent billing errors.',
        items: ['3-way invoice matching', 'Vendor quotation comparison', 'Purchase approval tracking']
      },
      {
        icon: Server,
        title: 'Keyboard POS Cashier Billing Counter',
        desc: 'Rapid barcode billing cashier interface with thermal receipt printing, WhatsApp digital receipts, and offline caching.',
        items: ['Fast POS cashier billing', 'Thermal printer driver sync', 'Offline local caching']
      },
      {
        icon: Users,
        title: 'Staff Management & Payroll',
        desc: 'Staff attendance tracking, automated monthly salary slip generation, shift scheduling, and statutory deductions.',
        items: ['Attendance tracking', 'Automated payroll processing', 'Salary slip PDF export']
      },
      {
        icon: BarChart3,
        title: 'Executive Dashboards & Financial Reports',
        desc: 'Real-time financial overview tracking profit margins, department cost centers, cash flow, and stock alerts.',
        items: ['Real-time P&L reporting', 'Cost center breakdown', 'Stock reorder alerts']
      }
    ],
    workflow: [
      { step: '01', stage: 'Order', title: 'Sales Order or POS Scanner Billing', desc: 'Cashier scans item barcode or sales rep creates customer order in system.' },
      { step: '02', stage: 'Stock', title: 'Real-Time Inventory Batch Deduction', desc: 'Inventory ledger decrements stock in real time and logs the specific batch barcode.' },
      { step: '03', stage: 'Finance', title: 'Double-Entry Tax Ledger Update', desc: 'General ledger records revenue and calculates exact GST tax liability automatically.' },
      { step: '04', stage: 'Reorder', title: 'Automated Supplier Reorder Draft', desc: 'If stock balance dips below reorder threshold, automated supplier PO draft is created.' },
      { step: '05', stage: 'Receipt', title: 'Thermal Receipt & Digital Invoice', desc: 'Generates thermal print receipt, customer WhatsApp digital invoice, and E-Way bill.' },
      { step: '06', stage: 'Executive', title: 'Real-Time Executive Summary', desc: 'Executive dashboard immediately updates company cash flow, profit margins, and branch stock.' }
    ],
    technologies: {
      Frontend: ['React Web App', 'Tailwind CSS', 'Offline Local Cache', 'Recharts'],
      Backend: ['Node.js Backend', 'Express API', 'Task Queue'],
      Database: ['PostgreSQL Relational DB', 'Redis Cache'],
      Integrations: ['Thermal Printer SDKs', 'Tax Sandbox API', 'Barcode Scanner Drivers']
    },
    cases: [
      { title: 'Multi-Chain Pharmacy (DASA MedFlow)', desc: 'Batch expiry tracking, scheduled drug compliance, and multi-branch inventory sync.' },
      { title: 'Manufacturing Inventory (DASA FactorySync)', desc: 'Bill of materials tracking, machine station allocation, and raw material inventory.' },
      { title: 'School & Campus ERP (DASA EduCore)', desc: 'Student admissions, fee billing, automated attendance, and parent communication.' }
    ],
    outcomes: [
      'Eliminated manual paperwork errors across multi-branch retail and inventory operations.',
      'Faster financial reconciliation with automated GST invoice generation.',
      'Real-time stock visibility and lot expiry tracking across all branch locations.'
    ],
    whyItMatters: 'Off-the-shelf software forces you to change how your business operates. We build custom ERP systems tailored to your exact operational workflow.'
  },

  'iot-solutions': {
    id: 'iot-solutions',
    icon: Radio,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Industrial Workflow Automation',
    headline: 'Automated order handling and work execution with smart NFC systems.',
    overview: 'DASA TECH provides industrial workflow automation connecting touchless NFC smart tags, station work execution trackers, machine telemetry sensors, and live production tracking dashboards.',
    problem: {
      title: 'The Challenge: Paper Work Orders & Unmonitored Machinery',
      desc: 'Factory operations relying on paper job slips that get misplaced, unmonitored machinery running blindly until breakdown, and lack of real-time visibility into shop-floor order progress.'
    },
    solution: {
      title: 'Our Solution: Touchless NFC Orders & Live Telemetry',
      desc: 'We connect factory workstations with touchless NFC smart tags, machine health sensors, and live browser production tracking dashboards.'
    },
    heroImg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Cpu,
        title: 'Industrial Microcontroller & NFC Hardware',
        desc: 'Custom embedded hardware modules and touchless NFC tag readers built for industrial station tracking.',
        items: ['NFC smart tag readers', 'Industrial microcontrollers', 'Enclosed station hardware']
      },
      {
        icon: Radio,
        title: 'Touchless NFC Order Handling',
        desc: 'Touchless NFC tag order identification allowing operators to scan work orders and log station progress instantly.',
        items: ['NFC job slip scanning', 'Station execution logs', 'Automated order status triggers']
      },
      {
        icon: Server,
        title: 'Server Message Ingestion & MQTT Brokers',
        desc: 'Reliable server brokers ingesting continuous sensor pulses and station logs with real-time database updates.',
        items: ['MQTT message broker', 'Fast telemetry database', 'Zero data loss persistence']
      },
      {
        icon: Activity,
        title: 'Live Factory Floor Telemetry Dashboards',
        desc: 'Interactive browser dashboard displaying machine status, motor vibration, temperature, and order progress.',
        items: ['Live browser dashboards', 'Machine status gauges', 'Production station heatmaps']
      },
      {
        icon: ShieldCheck,
        title: 'Automated Emergency Alerts & Threshold Alarms',
        desc: 'Instant alert dispatches via WhatsApp, SMS, and email when machine temperature or vibration exceeds safety limits.',
        items: ['WhatsApp emergency alarms', 'Rule-based threshold triggers', 'Maintenance team alerts']
      },
      {
        icon: Wrench,
        title: 'Remote Calibration & Device Updates',
        desc: 'Remotely deploy software updates and sensor calibration matrices wirelessly to station devices.',
        items: ['Remote software updates', 'Wireless threshold tuning', 'System health checks']
      }
    ],
    workflow: [
      { step: '01', stage: 'Order', title: 'Touchless NFC Order Tag Scan', desc: 'Operator scans NFC order tag on Station 01 reader to initiate production work.' },
      { step: '02', stage: 'Station 1', title: 'Work Order Station Log', desc: 'Station reader logs order arrival, operator ID, and raw material allocation.' },
      { step: '03', stage: 'Machining', title: 'Machine Telemetry Monitoring', desc: 'Machine sensors continuously log operational temperature and motor vibration.' },
      { step: '04', stage: 'Station 2', title: 'NFC Transfer to Assembly', desc: 'Order moves to Station 02; touchless NFC scan updates assembly execution status.' },
      { step: '05', stage: 'Inspection', title: 'Final QC Inspection Verification', desc: 'Quality inspector scans NFC tag to log QC pass status and packaging completion.' },
      { step: '06', stage: 'Complete', title: 'Live Dashboard & WhatsApp Alert', desc: 'Production dashboard updates to Completed; automated WhatsApp dispatch alerts client.' }
    ],
    technologies: {
      Hardware: ['NFC Smart Tags', 'NFC Station Readers', 'Embedded Microcontrollers'],
      Protocols: ['MQTT Protocol', 'WebSockets', 'Serial Communication'],
      CloudBackend: ['MQTT Server Broker', 'Telemetry Database', 'Node.js Workers'],
      Frontend: ['React Live Dashboard', 'WebSockets Stream', 'Status Gauges']
    },
    cases: [
      { title: 'Factory Order Handling & NFC Station Tracking', desc: 'Touchless NFC order handling tracking manufacturing work from Station 01 to final packaging.' },
      { title: 'Temperature & Cold-Chain Storage Logging', desc: 'Continuous environmental temperature logging for sensitive pharmaceutical and food storage.' },
      { title: 'Industrial Machine Health Monitoring', desc: 'Machine sensor telemetry monitoring motor vibration and heat to prevent unexpected breakdowns.' }
    ],
    outcomes: [
      'Eliminated paper job slip delays with touchless NFC order station tracking.',
      'Real-time machine temperature and vibration telemetry with instant emergency alerts.',
      'Clear executive visibility into shop-floor order execution progress.'
    ],
    whyItMatters: 'Physical factory operations need clear digital visibility. We provide touchless NFC tracking and sensor telemetry that lets you monitor shop-floor work in real time.'
  },

  'business-automation': {
    id: 'business-automation',
    icon: Zap,
    category: 'BUSINESS TECHNOLOGY SOLUTIONS',
    title: 'Business Automation',
    highlightWord: 'Process Automation',
    headline: 'Automated workflows that eliminate manual data entry & accelerate approvals.',
    overview: 'DASA TECH automates complex business processes with event-driven triggers, intelligent document OCR parsing, multi-tier approval chains, and real-time data sync between software tools.',
    problem: {
      title: 'The Challenge: Manual Data Entry & Approval Bottlenecks',
      desc: 'Employees spending hours re-typing data between systems, invoices stuck waiting for email sign-offs, and disjointed departmental handoffs that slow down business operations.'
    },
    solution: {
      title: 'Our Solution: Automated Event-Driven Workflows',
      desc: 'We transform manual bottlenecks into automated workflows: automatic OCR document parsing, multi-tier management sign-offs, cross-system data sync, and automated daily summary reports.'
    },
    heroImg: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Workflow,
        title: 'Multi-Tier Management Approval Workflows',
        desc: 'Automated routing of purchase requests, expense claims, and discounts based on company approval rules with 1-click sign-offs.',
        items: ['Hierarchical approval routing', '1-click email/WhatsApp sign-off', 'Automated escalation rules']
      },
      {
        icon: FileSpreadsheet,
        title: 'Intelligent PDF Document OCR Bots',
        desc: 'Automated extraction of line items, invoice totals, and supplier details from scanned documents directly into your ERP.',
        items: ['Document OCR parsing', 'Invoice table line item extraction', 'Automated field verification']
      },
      {
        icon: RefreshCw,
        title: 'Cross-Platform Data Synchronization',
        desc: 'Seamless real-time data flow connecting sales CRM, warehouse inventory, cloud storage, and accounting ledgers.',
        items: ['Bidirectional data sync', 'Webhook event listeners', 'Conflict resolution logic']
      },
      {
        icon: Send,
        title: 'Automated Customer Notification Relays',
        desc: 'Automated WhatsApp, SMS, and email notifications keeping customers and internal teams informed of order and booking updates.',
        items: ['WhatsApp notification dispatch', 'Automated email confirmations', 'Customer SMS alerts']
      },
      {
        icon: ShieldCheck,
        title: 'Business Rule Enforcement Engine',
        desc: 'Automated validation checks preventing compliance errors and unauthorized discounts before data is saved.',
        items: ['Pre-commit rule validation', 'Credit limit checking', 'Compliance verification']
      },
      {
        icon: BarChart3,
        title: 'Executive Daily Summary Briefing Generator',
        desc: 'Automated daily summary aggregating key business metrics, collections, and operational output for Directors.',
        items: ['Automated daily summary', 'WhatsApp executive delivery', 'Key metric aggregation']
      }
    ],
    workflow: [
      { step: '01', stage: 'Trigger', title: 'Event Detection', desc: 'Customer submits a form, an invoice PDF arrives in email, or a status changes.' },
      { step: '02', stage: 'Validate', title: 'Business Rule Evaluation', desc: 'System checks rules (e.g., "If invoice total exceeds threshold, route to Director").' },
      { step: '03', stage: 'Execute', title: 'Automated Workflow Execution', desc: 'Generates document PDF, reserves inventory, and creates accounting entry.' },
      { step: '04', stage: 'Sync', title: 'Cross-System Data Sync', desc: 'Pushes records simultaneously across CRM, ERP, and cloud storage.' },
      { step: '05', stage: 'Notify', title: 'Instant WhatsApp & Email Alert', desc: 'Sends instant WhatsApp confirmation to customer with payment link and alerts team.' },
      { step: '06', stage: 'Log', title: 'Compliance Audit Logging', desc: 'Logs timestamped execution record in compliance audit database.' }
    ],
    technologies: {
      AutomationEngines: ['Automation Task Workers', 'Python Document Parsing', 'Task Queues'],
      Protocols: ['REST Webhooks', 'API Integrations', 'SFTP Automation'],
      Communication: ['WhatsApp Business API', 'Slack Webhooks', 'Email Messaging']
    },
    cases: [
      { title: 'Vendor Invoice OCR & Management Approvals', desc: 'Parsing incoming supplier PDF bills, verifying PO details, and routing for management approval.' },
      { title: 'Customer Onboarding & Contract Generation', desc: 'Auto-creating customer accounts, generating customized welcome packs, and triggering setup tasks.' },
      { title: 'Automated Shift Reports & Maintenance Tickets', desc: 'Aggregating daily operational output and automatically creating maintenance tickets from system logs.' }
    ],
    outcomes: [
      'Saved administrative processing time across multi-department workflows.',
      'Eliminated manual data entry errors between CRM, ERP, and document storage.',
      'Accelerated multi-tier management sign-offs with 1-click digital approvals.'
    ],
    whyItMatters: 'Human talent should be spent on strategic decisions, not copying numbers between spreadsheets. We automate routine office tasks so your team can focus on growth.'
  },

  'web-mobile': {
    id: 'web-mobile',
    icon: Globe,
    category: 'WEB & MOBILE ENGINEERING',
    title: 'Web & Mobile Applications',
    highlightWord: 'Digital Applications',
    headline: 'Fast, modern web applications and mobile apps for iOS and Android.',
    overview: 'DASA TECH builds responsive React and Next.js web applications alongside native-feel Flutter and React Native mobile apps designed for fast page load speeds, offline usability, and enterprise security.',
    problem: {
      title: 'The Challenge: Slow Loading Pages & Clunky Mobile UX',
      desc: 'Clunky user interfaces with poor mobile responsiveness, slow-loading web pages that frustrate visitors, and poor offline caching that leads to data loss in low-connectivity areas.'
    },
    solution: {
      title: 'Our Solution: Fast, Responsive Web & Mobile Engineering',
      desc: 'We craft intuitive web applications, cross-platform Flutter/React Native mobile apps, offline-first local caching, and secure administrative control dashboards.'
    },
    heroImg: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=90',
    capabilities: [
      {
        icon: Globe,
        title: 'Custom Responsive Web Applications',
        desc: 'Fast, accessible web applications engineered for seamless operation across desktop, tablet, and mobile browsers.',
        items: ['React & Next.js frontend', 'Responsive layout design', 'CDN edge caching']
      },
      {
        icon: Smartphone,
        title: 'Cross-Platform iOS & Android Mobile Apps',
        desc: 'Native-feel performance on iOS and Android with smooth animations, touch gestures, and hardware integrations.',
        items: ['Flutter & React Native', 'Smooth touch UI animations', 'App Store / Play Store deployment']
      },
      {
        icon: Database,
        title: 'Offline-First Progressive Web Apps (PWA)',
        desc: 'Client-side offline caching and background sync enabling uninterrupted field usage in areas without internet.',
        items: ['Offline local caching', 'Background data sync', 'Installable web application']
      },
      {
        icon: Sliders,
        title: 'Secure Administrative Dashboards',
        desc: 'High-density administrative data tables, user management, analytics charts, and granular role permissions.',
        items: ['High-density data tables', 'Analytics charts', 'Role-based access control']
      },
      {
        icon: ShieldCheck,
        title: 'Hardware & Camera Integration',
        desc: 'Mobile camera barcode/QR scanning, GPS location tracking, thermal printer sync, and biometric login access.',
        items: ['Camera barcode scanning', 'GPS geolocation tracking', 'Biometric login authentication']
      },
      {
        icon: Lock,
        title: 'Enterprise Application Security',
        desc: 'Industry-standard application security defenses, encrypted local data storage, and secure token authentication cycles.',
        items: ['Application security defenses', 'Encrypted local storage', 'Secure token refresh']
      }
    ],
    workflow: [
      { step: '01', stage: 'Wireframe', title: 'Discovery & UX Journey Mapping', desc: 'Map user journeys, screen hierarchy, and information architecture.' },
      { step: '02', stage: 'Design', title: 'UI Design & Component System', desc: 'Create design tokens, typography scales, interactive components, and visual themes.' },
      { step: '03', stage: 'Develop', title: 'Modular Application Engineering', desc: 'Build modular, reusable frontend components with smooth transitions and micro-interactions.' },
      { step: '04', stage: 'Integrate', title: 'Secure API & Offline Sync Integration', desc: 'Connect backend endpoints, handle loading/error states, and set up local caching.' },
      { step: '05', stage: 'Test', title: 'Device Compatibility QA', desc: 'Test across iOS, Android, and desktop browsers for responsiveness, speed, and touch accuracy.' },
      { step: '06', stage: 'Launch', title: 'Cloud Deployment & App Store Release', desc: 'Deploy web app to cloud servers and publish mobile applications to Google Play & Apple App Store.' }
    ],
    technologies: {
      WebFrontend: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      Mobile: ['Flutter', 'React Native', 'Swift Native', 'Kotlin Native'],
      StateData: ['Zustand', 'React Query', 'Offline Cache', 'SQLite'],
      Deployment: ['Cloud Servers', 'Cloudflare CDN', 'App Store', 'Google Play']
    },
    cases: [
      { title: 'Customer Self-Service Billing Portals', desc: 'Enabling clients to track orders, download invoices, submit tickets, and make payments online.' },
      { title: 'Field Inspection & Handheld Scanner Apps', desc: 'Mobile apps for warehouse pickers, field service technicians, and site inspectors.' },
      { title: 'B2B Digital Marketplace Portals', desc: 'Digital storefronts with quick checkout and automated WhatsApp order updates.' }
    ],
    outcomes: [
      'Fast page loading speeds and fluid UI transitions across all screen sizes.',
      'Cross-platform iOS and Android mobile app deployment with native device performance.',
      'Offline PWA caching ensuring uninterrupted usage in low-connectivity environments.'
    ],
    whyItMatters: 'Your digital application is the primary face of your company. We craft applications that provide great user experiences and reliable performance every day.'
  }
}

// Map alias keys
SERVICE_DETAILS['web-mobile-engineering'] = SERVICE_DETAILS['web-mobile']
SERVICE_DETAILS['custom-erp-dev'] = SERVICE_DETAILS['custom-erp']

// ─────────────────────────────────────────────────────────────
// 1. INSIDE-TO-OUTSIDE INTERACTIVE CAPABILITY CARD
// ─────────────────────────────────────────────────────────────
function InsideOutCapabilityCard({ cap, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = cap.icon || CheckCircle2

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#6D28D9] shadow-2xs hover:shadow-xl hover:shadow-[#6D28D9]/15 transition-all duration-400 space-y-3 group overflow-hidden cursor-pointer select-none"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-[#6D28D9]/10 via-[#A855F7]/5 to-transparent pointer-events-none transition-all duration-500 ease-out ${
          isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-0'
        }`}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div
          className={`w-10 h-10 rounded-xl border flex items-center justify-center font-bold text-xs shadow-2xs shrink-0 transition-all duration-400 ease-[0.16,1,0.3,1] ${
            isHovered
              ? 'bg-[#6D28D9] text-white border-[#8B5CF6] scale-110 shadow-md shadow-[#6D28D9]/30'
              : 'bg-white text-[#6D28D9] border-[#DDD0FF] scale-100'
          }`}
        >
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono font-bold text-[#6D28D9] bg-white px-2 py-0.5 rounded-md border border-[#DDD0FF]">
          0{index + 1}
        </span>
      </div>

      <div className="relative z-10 space-y-1">
        <h3
          className={`font-display font-bold text-base transition-colors duration-300 ${
            isHovered ? 'text-[#6D28D9]' : 'text-[#17121F]'
          }`}
        >
          {cap.title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          {cap.desc}
        </p>
      </div>

      {cap.items && cap.items.length > 0 && (
        <div className="relative z-10 pt-2 border-t border-[#E9E2F5]/80 flex flex-wrap gap-1.5">
          {cap.items.map((item, iIdx) => (
            <span
              key={iIdx}
              className="text-[9px] font-mono font-medium text-slate-600 bg-white/80 border border-[#E9E2F5] px-2 py-0.5 rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div
        className={`absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#6D28D9] to-transparent transition-transform duration-500 ease-out ${
          isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
      />
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// 2. INSIDE-TO-OUTSIDE TECH BADGE
// ─────────────────────────────────────────────────────────────
function InsideOutTechBadge({ label }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold transition-all duration-300 cursor-pointer shadow-2xs inline-flex items-center gap-1.5 select-none ${
        isHovered
          ? 'bg-[#6D28D9] text-white border border-[#8B5CF6] scale-106 shadow-md shadow-[#6D28D9]/25 -translate-y-0.5'
          : 'bg-white text-[#5B21B6] border border-[#DDD0FF] scale-100 translate-y-0'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
          isHovered ? 'bg-white animate-ping' : 'bg-[#8B5CF6]'
        }`}
      />
      <span>{label}</span>
    </span>
  )
}

// ─────────────────────────────────────────────────────────────
// MAIN SERVICE DETAIL PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { path } = usePath()
  const [activeWorkflowIdx, setActiveWorkflowIdx] = useState(0)

  // Extract service ID from path e.g. /services/digital-marketing
  const rawId = path.replace('/services/', '').replace('/services', '').replace(/\/$/, '')
  const service = SERVICE_DETAILS[rawId] || SERVICE_DETAILS['custom-erp']

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [rawId])

  // Dedicated custom implementation for Digital Marketing (Stage 1)
  if (rawId === 'digital-marketing' || rawId === 'digital-growth-marketing') {
    return <DigitalMarketingServiceView />
  }

  // Dedicated custom implementation for Backend Development (Stage 2)
  if (rawId === 'backend-development' || rawId === 'cloud-backend-architecture') {
    return <BackendDevelopmentServiceView />
  }

  // Dedicated custom implementation for CRM Solutions (Stage 3)
  if (rawId === 'crm-solutions' || rawId === 'crm-pipeline-solutions') {
    return <CrmSolutionsServiceView />
  }

  // Dedicated custom implementation for Custom ERP Development (Stage 4)
  if (rawId === 'custom-erp' || rawId === 'custom-erp-development' || rawId === 'custom-erp-dev') {
    return <CustomErpServiceView />
  }

  // Dedicated custom implementation for IoT Solutions (Stage 5)
  if (rawId === 'iot-solutions' || rawId === 'iot-embedded-systems') {
    return <IotSolutionsServiceView />
  }

  // Dedicated custom implementation for Business Automation (Stage 6)
  if (rawId === 'business-automation' || rawId === 'business-process-automation') {
    return <BusinessAutomationServiceView />
  }

  // Dedicated custom implementation for Web & Mobile App Development (Stage 7)
  if (rawId === 'web-mobile-app' || rawId === 'web-mobile' || rawId === 'web-mobile-engineering') {
    return <WebMobileDevelopmentServiceView />
  }

  const Icon = service.icon || Database

  return (
    <div className="min-h-screen bg-white text-[#17121F] selection:bg-[#6D28D9] selection:text-white pt-24 select-none">

      {/* ── BREADCRUMB BAR ────────────────────────────────────── */}
      <div className="border-b border-[#E9E2F5] bg-[#FAF8FF]/90 backdrop-blur-md sticky top-[72px] sm:top-[80px] z-30 py-3.5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <Link to="/" className="hover:text-[#6D28D9] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#6D28D9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#6D28D9] font-bold">{service.title}</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#17121F] hover:text-[#6D28D9] bg-white hover:bg-[#F7F3FF] border border-[#E9E2F5] hover:border-[#DDD0FF] px-4 py-1.5 rounded-full transition-all shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <section className="relative py-14 lg:py-20 bg-gradient-to-b from-[#FAF8FF] via-white to-white overflow-hidden border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F3FF] border border-[#DDD0FF] text-[#6D28D9] text-xs font-mono font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>{service.category}</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl text-[#17121F] tracking-tight leading-[1.12]">
                {service.title.replace(service.highlightWord, '')}{' '}
                <span className="text-color-shift">
                  {service.highlightWord}
                </span>
              </h1>

              <p className="text-base sm:text-lg font-bold text-[#6D28D9] leading-snug">
                {service.headline}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {service.overview}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#capabilities"
                  className="px-6 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#workflow"
                  className="px-5 py-3 rounded-full bg-[#F5F0FF] hover:bg-[#EDE9FE] text-[#6D28D9] font-display font-bold text-xs sm:text-sm border border-[#DDD0FF] transition-colors"
                >
                  <span>Architecture &amp; Workflow</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E9E2F5] shadow-xl bg-[#0F0B18] h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex flex-col justify-end">
                <img
                  src={service.heroImg}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B18] via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 p-6 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#6D28D9] flex items-center justify-center text-white shadow-md shadow-[#6D28D9]/40">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-base">{service.title}</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full">
                    Production Verified
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. PROBLEM & SOLUTION COMPARISON ──────────────────── */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>THE OPERATIONAL PROBLEM &amp; OUR SOLUTION</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
              Solving Tangible <span className="text-color-shift">Business Friction</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Problem Card */}
            <div className="p-7 rounded-3xl bg-rose-50/50 border-2 border-rose-200/80 space-y-3 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-rose-700 uppercase bg-rose-100/80 px-3 py-1 rounded-full border border-rose-300">
                <span>The Friction Point</span>
              </div>
              <h3 className="font-display font-black text-xl text-rose-950">
                {service.problem?.title || 'The Operational Bottleneck'}
              </h3>
              <p className="text-sm text-rose-900/80 leading-relaxed">
                {service.problem?.desc}
              </p>
            </div>

            {/* Our Solution Card */}
            <div className="p-7 rounded-3xl bg-purple-50/50 border-2 border-[#DDD0FF] space-y-3 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#6D28D9] uppercase bg-[#F5F0FF] px-3 py-1 rounded-full border border-[#DDD0FF]">
                <span>DASA TECH Engineering</span>
              </div>
              <h3 className="font-display font-black text-xl text-[#17121F]">
                {service.solution?.title || 'Our Tailored Architecture'}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.solution?.desc}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. KEY CAPABILITIES (INSIDE-TO-OUTSIDE HOVER) ───────── */}
      <section id="capabilities" className="py-14 lg:py-20 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE SERVICE DELIVERABLES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
              Service <span className="text-color-shift">Capabilities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.capabilities?.map((cap, idx) => (
              <InsideOutCapabilityCard
                key={idx}
                cap={cap}
                index={idx}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ── 4. DOMAIN-SPECIFIC WORKFLOW / ARCHITECTURE ─────────── */}
      <section id="workflow" className="py-14 lg:py-20 bg-[#0B0F19] text-white border-b border-slate-800 relative overflow-hidden select-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-10">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D28D9]/40 text-[#C084FC] text-xs font-mono font-bold uppercase tracking-wider border border-[#8B5CF6]/50">
              <Workflow className="w-3.5 h-3.5 text-[#C084FC]" />
              <span>SERVICE ARCHITECTURE &amp; WORKFLOW</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              How the Solution Operates: <span className="text-color-shift">Domain Lifecycle</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              End-to-end technical execution pipeline tailored specifically for {service.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 relative">
            {service.workflow?.map((wf, idx) => {
              const isActive = activeWorkflowIdx === idx
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowIdx(idx)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-400 cursor-pointer flex flex-col justify-between gap-4 relative overflow-hidden group ${
                    isActive
                      ? 'bg-[#6D28D9] text-white border-[#A855F7] shadow-xl shadow-[#6D28D9]/40 scale-102 ring-2 ring-[#C084FC]/50'
                      : 'bg-slate-900/90 hover:bg-slate-800 hover:border-[#8B5CF6]/60 text-slate-300 border-slate-700/80 hover:scale-102'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-md transition-colors ${
                      isActive ? 'bg-white text-[#6D28D9]' : 'bg-slate-800 text-slate-400 group-hover:bg-[#6D28D9]/30 group-hover:text-purple-200'
                    }`}>
                      {wf.stage}
                    </span>
                    <span className="text-xs font-mono font-bold text-white/60">
                      {wf.step}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <h4 className="font-display font-black text-sm text-white group-hover:text-purple-200 transition-colors">
                      {wf.title}
                    </h4>
                    <p className={`text-xs leading-relaxed ${isActive ? 'text-purple-100' : 'text-slate-400 group-hover:text-slate-300'}`}>
                      {wf.desc}
                    </p>
                  </div>

                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#C084FC] animate-ping" />
                  )}
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 5. TECHNOLOGY & TOOLS STACK ───────────────────────── */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>PRODUCTION INFRASTRUCTURE</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
              Technology Stack &amp; <span className="text-color-shift">Frameworks</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(service.technologies || {}).map(([category, items], idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] hover:border-[#6D28D9]/40 space-y-3 transition-all duration-400 hover:shadow-md select-none group"
              >
                <div className="text-xs font-mono font-bold text-[#6D28D9] uppercase tracking-wider border-b border-[#E9E2F5] pb-2 flex items-center justify-between">
                  <span>{category.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <Server className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((it, iIdx) => (
                    <InsideOutTechBadge
                      key={iIdx}
                      label={it}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. TYPICAL USE CASES ──────────────────────────────── */}
      <section className="py-14 lg:py-20 bg-[#FAF8FF] border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>REAL-WORLD IMPLEMENTATION EXAMPLES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
              Typical Client <span className="text-color-shift">Use Cases</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.cases?.map((cs, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-2xl bg-white border border-[#E9E2F5] hover:border-[#6D28D9] shadow-2xs hover:shadow-xl hover:shadow-[#6D28D9]/15 transition-all duration-400 space-y-3 group cursor-pointer"
              >
                <span className="text-[10px] font-mono font-bold text-[#6D28D9] bg-[#F5F0FF] border border-[#DDD0FF] px-2.5 py-1 rounded-md uppercase">
                  Case Study 0{cIdx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-[#17121F] group-hover:text-[#6D28D9] transition-colors">
                  {cs.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {cs.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. EXPECTED OUTCOME & WHY IT MATTERS ───────────────── */}
      <section className="py-14 lg:py-20 bg-white border-b border-[#E9E2F5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Verified Outcomes */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-[#6D28D9] uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>EXPECTED BUSINESS OUTCOMES</span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#17121F] tracking-tight">
                Verified Business <span className="text-color-shift">Impact</span>
              </h2>
              
              <div className="space-y-3 pt-2">
                {service.outcomes?.map((oc, oIdx) => (
                  <div key={oIdx} className="p-4 rounded-2xl bg-[#FAF8FF] border border-[#E9E2F5] flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm font-medium text-[#17121F] leading-relaxed">
                      {oc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Strategic Value Statement */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0F0B18] text-white border border-white/15 shadow-xl space-y-4">
              <span className="text-[10px] font-mono font-bold text-[#C084FC] uppercase tracking-wider block">
                STRATEGIC VALUE
              </span>
              <h3 className="font-display font-black text-xl text-white">
                Why This Service Matters
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                "{service.whyItMatters}"
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-xs shadow-md transition-all"
                >
                  <span>Request Technical Scoping</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 8. FAST-TRACK DISCOVERY SESSION FORM ───────────────── */}
      <section className="py-14 lg:py-20 bg-[#FAF8FF]">
        <div className="max-w-[900px] mx-auto px-6 sm:px-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0F0B18] border border-white/15 text-white shadow-xl text-center space-y-5">
            <span className="text-xs font-mono font-bold text-[#C084FC] uppercase tracking-wider">
              TECHNICAL DISCOVERY &amp; SCOPING
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Schedule Scoping for {service.title}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
              Discuss architectural specifications, timelines, and custom deliverables with Founder &amp; CEO Jeyawin D and our engineering leadership.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-display font-bold text-sm shadow-md transition-all"
              >
                <span>Start Project Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
