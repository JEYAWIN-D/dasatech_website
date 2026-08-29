/**
 * Centralized Product Implementation Screen Assets Registry
 * 
 * Each product has 8 to 10 modular screenshot slots representing key modules:
 * Dashboard, Billing, Reports, Inventory, Stock, Orders, Users, Analytics, Settings.
 * 
 * Easily replace any image URL below with real production screenshots in the future.
 */

export const PRODUCT_SCREEN_ASSETS = {
  'pharmacy-erp': [
    {
      id: 'dashboard',
      module: 'Executive Dashboard',
      title: 'Executive Sales & Pharmacy Telemetry Dashboard',
      subtitle: 'Real-time daily revenue, prescription velocity, stock alerts, and branch performance metrics.',
      tag: 'Executive HUD',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/dashboard',
      specs: ['React 18 Dashboard', 'WebSockets Telemetry', 'Real-Time KPIs']
    },
    {
      id: 'billing',
      module: 'Billing & POS',
      title: 'Keyboard-First POS Billing Terminal & Thermal Printer',
      subtitle: 'Sub-second checkout interface with barcode lookup, batch selection, and thermal print sync.',
      tag: 'POS Cashier Client',
      img: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/pos-cashier',
      specs: ['ESC/POS Printer SDK', 'IndexedDB Offline Cache', 'Sub-12ms Latency']
    },
    {
      id: 'inventory',
      module: 'Inventory & Stock',
      title: 'FIFO Batch Expiry & Shelf Location Matrix',
      subtitle: 'Visual shelf-to-bin locator with automated color-coded expiry countdowns preventing medicine waste.',
      tag: 'Inventory Ledger',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/inventory/batch-matrix',
      specs: ['FIFO Auto-Allocation', 'PostgreSQL Table Partitioning', 'Expiry Guard']
    },
    {
      id: 'stock',
      module: 'Stock Reorder',
      title: 'Predictive Supplier Reorder & Stock Thresholds',
      subtitle: 'Automated purchase order drafts generated when medicine stock dips below safety thresholds.',
      tag: 'Procurement Engine',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/inventory/reorder-rules',
      specs: ['Predictive Auto-PO', 'Supplier Quotation Match', 'Reorder Velocity']
    },
    {
      id: 'orders',
      module: 'Orders & Purchasing',
      title: 'Purchase Order Approval & Goods Receipt (GRN)',
      subtitle: '3-way invoice matching connecting purchase orders, gate receiving challans, and supplier bills.',
      tag: 'Procurement Workflow',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/purchasing/3-way-match',
      specs: ['3-Way PO Matching', 'Gate Receiving Challan', 'Vendor Ledger']
    },
    {
      id: 'reports',
      module: 'Reports & Tax',
      title: 'Automated GST Return & Financial Accounting Reports',
      subtitle: 'One-click GSTR-1, GSTR-2B, and GSTR-3B tax return generator with E-Way bill API sync.',
      tag: 'Tax Accounting',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/reports/gst-exporter',
      specs: ['Gov GST Sandbox API', 'Tally XML Bridge', 'Automated GSTR-3B']
    },
    {
      id: 'users',
      module: 'Users & Roles',
      title: 'Role-Based Access Control & Pharmacist Permissions',
      subtitle: 'Granular permissions matrix restricting narcotic register edits to licensed chief pharmacists.',
      tag: 'Security & Access',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/users/permission-matrix',
      specs: ['Cryptographic RBAC', 'Pharmacist License Guard', 'Session Vault']
    },
    {
      id: 'analytics',
      module: 'Analytics & Heatmaps',
      title: 'Multi-Branch Inventory Telemetry & Profit Margins',
      subtitle: 'Central administrative dashboard tracking profit margins, dead stock heatmaps, and inter-branch transfers.',
      tag: 'Branch Analytics',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/analytics/branch-telemetry',
      specs: ['Distributed Redis', 'Multi-Site Sync', 'Profit Margin Heatmap']
    },
    {
      id: 'compliance',
      module: 'Schedule H1 Audit',
      title: 'Schedule H1 Narcotics Register & Audit Trail',
      subtitle: 'Government-compliant digital registers logging prescribing doctor, patient Aadhaar, and batch numbers.',
      tag: 'Regulatory Compliance',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/medflow/compliance/schedule-h1',
      specs: ['FDA / CDSCO Compliance', 'SHA-256 Audit Hash', 'Prescription Vault']
    }
  ],

  'finance-accounting': [
    {
      id: 'dashboard',
      module: 'Executive Dashboard',
      title: 'CFO Financial Telemetry & Cash Flow Overview',
      subtitle: 'Real-time company-wide cash balance, net profit margins, accounts receivable aging, and burn rates.',
      tag: 'CFO Telemetry',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/dashboard',
      specs: ['Real-Time P&L', 'Cash Flow Forecast', 'EBITDA Telemetry']
    },
    {
      id: 'ledger',
      module: 'General Ledger',
      title: 'Atomic Double-Entry General Ledger Inspector',
      subtitle: 'Strict debit and credit balancing validation ensuring 100% mathematical integrity across all vouchers.',
      tag: 'Double-Entry Core',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/general-ledger',
      specs: ['Atomic Hash Ledger', 'Debit/Credit Balance Guard', 'Immutable Log']
    },
    {
      id: 'bank-ocr',
      module: 'Bank OCR Parser',
      title: 'Automated Bank Statement OCR Reconciliation',
      subtitle: 'Upload PDF bank statements to automatically parse transactions and match supplier invoice vouchers.',
      tag: 'Bank Reconciliation',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/bank-reconciliation',
      specs: ['Python PDF Parser', 'Auto-Voucher Match', '99.8% OCR Precision']
    },
    {
      id: 'gst-returns',
      module: 'Reports & Tax',
      title: 'Statutory GST Return Filing & Tax E-Invoicing',
      subtitle: 'Automated generation of GSTR-1 sales returns, GSTR-2B ITC matching, and GSTR-3B monthly tax filings.',
      tag: 'GST E-Filing',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/gst-returns',
      specs: ['Gov Tax Sandbox API', 'E-Way Bill Integration', 'GSTR-3B Exporter']
    },
    {
      id: 'ar-aging',
      module: 'Accounts Receivable',
      title: 'Accounts Receivable Aging Ledger & WhatsApp Dunning',
      subtitle: '30/60/90-day invoice aging ledger with automated WhatsApp payment reminder link dispatches.',
      tag: 'Receivables Dunning',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/receivables-aging',
      specs: ['Automated Reminders', 'Payment Gateway Links', 'Aging Breakdown']
    },
    {
      id: 'ap-bills',
      module: 'Accounts Payable',
      title: 'Vendor Bill Approvals & Payment Batch Scheduler',
      subtitle: 'Schedule automated NEFT/RTGS bank payouts for approved supplier invoices upon payment due dates.',
      tag: 'Vendor Payments',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/vendor-payouts',
      specs: ['HDFC / ICICI Bank API', 'Batch Payout Schedule', 'Vendor Ledger']
    },
    {
      id: 'audit-trail',
      module: 'Compliance & Audit',
      title: 'Immutable Compliance Audit Trail & Activity Log',
      subtitle: 'Complete SHA-256 timestamped audit trail logging every financial entry edit, deletion, and sign-off.',
      tag: 'Audit Integrity',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/audit-trail',
      specs: ['SHA-256 Hash Chain', 'User Stamp Logging', 'Statutory Compliance']
    },
    {
      id: 'analytics',
      module: 'Analytics',
      title: 'Department Cost Center Profitability Analytics',
      subtitle: 'Granular breakdown of departmental revenue, operational expenses, and gross profit contribution ratios.',
      tag: 'Cost Center Analytics',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/ledgerflow/cost-center-analytics',
      specs: ['Department P&L', 'Expense Allocation', 'Margin Ratios']
    }
  ],

  'factory-erp': [
    {
      id: 'dashboard',
      module: 'Executive Dashboard',
      title: 'Factory SCADA Operations & Live OEE Telemetry',
      subtitle: 'Real-time Overview Equipment Effectiveness (OEE), active production lines, and workstation alerts.',
      tag: 'SCADA Telemetry',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/scada-telemetry',
      specs: ['Modbus / OPC-UA', 'Live OEE Dials', 'Workstation Status']
    },
    {
      id: 'bom-explosion',
      module: 'Bill of Materials',
      title: 'Multi-Level Bill of Materials (BOM) Tree Inspector',
      subtitle: 'Explode complex manufactured products into sub-assemblies, raw metal stock, and hardware components.',
      tag: 'BOM Engineering',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/bom-tree',
      specs: ['Multi-Tier BOM', 'Raw Material Costing', 'Sub-Assembly Routing']
    },
    {
      id: 'job-cards',
      module: 'Shop Floor Job Cards',
      title: 'Touch-Screen Workstation Job Cards & Operator Terminal',
      subtitle: 'Touchscreen terminals mounted at CNC stations allowing operators to log setup time and completed units.',
      tag: 'Operator Console',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/job-cards',
      specs: ['Touch Keypad SDK', 'Station Time Tracker', 'Scrap Logging']
    },
    {
      id: 'raw-stock',
      module: 'Raw Materials Stock',
      title: 'Raw Material Lot Reservation & Automated Supplier POs',
      subtitle: 'Automatic allocation of raw steel ingots and components for approved production work orders.',
      tag: 'Raw Stock Ledger',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/raw-materials',
      specs: ['Lot Number Allocation', 'Auto Supplier PO', 'Reorder Triggers']
    },
    {
      id: 'qc-inspection',
      module: 'Quality Inspection',
      title: 'Work-In-Progress Quality Control & Defect Logging',
      subtitle: 'Digital QC checklists verifying tolerances, surface finish, and dimension specs before final assembly.',
      tag: 'QC Pass Inspection',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/qc-inspection',
      specs: ['ISO Quality Audit', 'Defect Pareto Analytics', 'QC Sign-Off']
    },
    {
      id: 'machine-health',
      module: 'Machine Health Telemetry',
      title: 'Machine Temperature & Motor Vibration Sensor Telemetry',
      subtitle: 'Continuous machine vibration FFT analysis and bearing heat sensing with automated technician alerts.',
      tag: 'Predictive Maintenance',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/machine-telemetry',
      specs: ['Vibration FFT Spectrum', 'Temperature Alarms', 'Sub-10ms Alerts']
    },
    {
      id: 'dispatch',
      module: 'Finished Goods Dispatch',
      title: 'Finished Goods Batch Packaging & Carrier Manifest',
      subtitle: 'Final barcode tagging of completed manufactured goods and carrier manifest generation.',
      tag: 'Goods Dispatch',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/goods-dispatch',
      specs: ['Barcode Label Print', 'E-Way Bill Export', 'Warehouse Handover']
    },
    {
      id: 'reports',
      module: 'Production Reports',
      title: 'Plant Capacity Utilization & OEE Performance Reports',
      subtitle: 'Executive shift summary reports analyzing machine downtime reasons, labor efficiency, and scrap rates.',
      tag: 'Plant Analytics',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/factorysync/plant-analytics',
      specs: ['Shift Utilization', 'Downtime Pareto', 'Cost Per Unit']
    }
  ],

  'warehouse-erp': [
    {
      id: 'dashboard',
      module: 'Executive Dashboard',
      title: 'Warehouse Operations & Live Bin Capacity Overview',
      subtitle: 'Real-time occupancy metrics across all aisles, active wave picking runs, and dock loading statuses.',
      tag: 'Warehouse HUD',
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/dashboard',
      specs: ['Bin Capacity HUD', 'Wave Pick Tracker', 'Dock Management']
    },
    {
      id: 'bin-locator',
      module: '3D Bin Matrix',
      title: '3D Multi-Aisle Bin Location Matrix & Rack Navigator',
      subtitle: 'Visual shelf-to-bin locator mapping rack numbers, shelf levels, and bin addresses (e.g., A04-R02-B12).',
      tag: '3D Bin Matrix',
      img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/bin-matrix',
      specs: ['3D Aisle Mapping', 'Rack Location Codes', 'Capacity Heatmap']
    },
    {
      id: 'wave-picking',
      module: 'Wave Picking Route',
      title: 'Shortest-Path Wave Picking Route Optimization',
      subtitle: 'Algorithmic route planning guiding warehouse pickers along the shortest walking path through aisles.',
      tag: 'Path Optimization',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/wave-picking',
      specs: ['Dijkstra Path Routing', '40% Distance Saved', 'Batch Order Pick']
    },
    {
      id: 'pda-scanners',
      module: 'Handheld PDA SDK',
      title: 'Android PDA Barcode Scanner Client Terminal',
      subtitle: 'Sub-second laser barcode scanning client for Android PDAs (Zebra/Honeywell) during receiving & picking.',
      tag: 'PDA Scanner App',
      img: 'https://images.unsplash.com/photo-1556742049-0a67daf40955?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/pda-client',
      specs: ['Zebra Scanner SDK', 'Offline IndexedDB', 'Sub-10ms Lookup']
    },
    {
      id: 'receiving-dock',
      module: 'Inbound Dock',
      title: 'Inbound Gate Receiving & Delivery Challan Audit',
      subtitle: 'Verify inward supplier pallets against purchase orders and automatically assign putaway bin locations.',
      tag: 'Putaway Ingestion',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/receiving-dock',
      specs: ['Putaway Auto-Assign', 'Challan Verification', 'Pallet Barcode']
    },
    {
      id: 'cycle-counting',
      module: 'Stock Counting',
      title: 'Continuous Blind Cycle Counting & Inventory Audit',
      subtitle: 'Schedule perpetual blind stock counts by aisle without interrupting daily shipping operations.',
      tag: 'Cycle Count Audit',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/cycle-counting',
      specs: ['Blind Stock Audit', 'Discrepancy Ledger', 'Zero-Downtime Count']
    },
    {
      id: 'carrier-dispatch',
      module: 'Carrier Manifest',
      title: 'Carrier Shipping Manifest & Logistics Dispatch',
      subtitle: 'Generate carrier manifests, print shipping labels, and auto-dispatch tracking links to customers.',
      tag: 'Logistics Manifest',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/carrier-dispatch',
      specs: ['Shiprocket / Bluedart API', 'Label Print Driver', 'Tracking Dispatch']
    },
    {
      id: 'analytics',
      module: 'Analytics',
      title: 'Warehouse Picking Velocity & Dead Stock Heatmaps',
      subtitle: 'Analytics dashboard measuring picker items/hour, order fulfillment speed, and slow-moving SKU heatmaps.',
      tag: 'WMS Analytics',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/wmshub/wms-analytics',
      specs: ['Picker Speed Metric', 'Dead Stock Heatmap', 'Order Cycle Time']
    }
  ],

  'ecommerce-engine': [
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
  ],

  'snapshare-social': [
    {
      id: 'auth-login',
      module: 'Security & Auth',
      title: 'Authentication & Login',
      subtitle: 'Multi-tenant studio authentication interface with JWT session tokens and secure OAuth login.',
      tag: '01. Auth & Login',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/auth/login',
      specs: ['JWT + Bcryptjs', 'Multi-Tenant Auth', 'Role RBAC']
    },
    {
      id: 'executive-dashboard',
      module: 'Studio Operations',
      title: 'Executive Dashboard',
      subtitle: 'Centralized studio operations hub for monitoring active events, storage usage, inquiries, and revenue.',
      tag: '02. Executive Dashboard',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/dashboard/executive',
      specs: ['Live Event Metrics', 'Revenue Telemetry', 'Storage Tracking']
    },
    {
      id: 'crm-pipeline',
      module: 'Client CRM',
      title: 'CRM Pipeline',
      subtitle: 'Visual lead pipeline tracking photography inquiries, lead statuses, proposals, and deal conversions.',
      tag: '03. CRM Pipeline',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/crm/pipeline',
      specs: ['Kanban Pipeline', 'Lead Scoring', 'Proposal Tracker']
    },
    {
      id: 'client-inquiry',
      module: 'Client CRM',
      title: 'Client Inquiry Management',
      subtitle: 'Inbound booking inquiry queue with automated lead response forms and booking communications.',
      tag: '04. Client Inquiry',
      img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/crm/inquiries',
      specs: ['Inquiry Forms', 'Auto-Responder', 'Lead Capture']
    },
    {
      id: 'client-portal',
      module: 'Client Portal',
      title: 'Client Portal Interface',
      subtitle: 'Dedicated portal for clients to review proposals, execute digital contracts, and settle invoices.',
      tag: '05. Client Portal',
      img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90',
      route: 'portal.snapshare.io/client/view',
      specs: ['E-Sign Contracts', 'Invoice Settlement', 'Proposal Review']
    },
    {
      id: 'event-qr-management',
      module: 'Event Management',
      title: 'Event & QR Management',
      subtitle: 'Event scheduling dashboard with team assignments and dynamic QR code generation for guest access.',
      tag: '06. Event & QR',
      img: 'https://images.unsplash.com/photo-1595079672139-cee2568b9817?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/events/qr-hub',
      specs: ['QR Code Engine', 'Schedule Manager', 'Access Control']
    },
    {
      id: 'photo-gallery',
      module: 'Media Management',
      title: 'Secure Photo Gallery',
      subtitle: 'Folder-based event gallery organizer featuring high-resolution previews and access rights controls.',
      tag: '07. Photo Gallery',
      img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/galleries/event-01',
      specs: ['Folder Taxonomy', 'Access Control', 'Hi-Res Previews']
    },
    {
      id: 'ai-face-matching',
      module: 'AI Engine',
      title: 'AI Face Matching Engine',
      subtitle: 'InsightFace 512D facial embedding matcher comparing guest selfies with event photo vector indexes.',
      tag: '08. AI Face Matching',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/ai/face-match',
      specs: ['InsightFace 512D', 'Cosine Similarity', 'Instant Selfie Match']
    },
    {
      id: 'photo-upload',
      module: 'Storage Engine',
      title: 'High-Speed Photo Upload',
      subtitle: 'Batch photographer upload engine with automated MinIO S3 object storage upload pipelines.',
      tag: '09. Photo Upload',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/upload/batch',
      specs: ['MinIO S3 Bucket', 'Batch Processing', 'EXIF Metadata']
    },
    {
      id: 'calendar-team-management',
      module: 'Resource Planning',
      title: 'Calendar & Team Management',
      subtitle: 'Studio team assignment calendar tracking photographer schedules, shoot locations, and equipment allocation.',
      tag: '10. Team & Calendar',
      img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=90',
      route: 'app.snapshare.io/resources/calendar',
      specs: ['Team Rosters', 'Equipment Allocation', 'Conflict Detection']
    }
  ],

  'school-erp': [
    {
      id: 'sis-dashboard',
      module: 'Campus Control Hub',
      title: 'Unified Student Information System (SIS) Control Hub',
      subtitle: 'Central administrator dashboard tracking total student headcount, daily gate arrivals, and fee collections.',
      tag: 'Campus SIS HUD',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/educore/sis-dashboard',
      specs: ['Student Lifecycle', 'Daily Attendance KPI', 'Fee Telemetry']
    },
    {
      id: 'rfid-gate',
      module: 'RFID Gate Telemetry',
      title: 'Biometric & RFID Gate Turnstile Log Simulator',
      subtitle: 'Real-time RFID student turnstile log triggering instant automated WhatsApp arrival alerts to parents.',
      tag: 'RFID Turnstile Sync',
      img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/educore/rfid-gate-log',
      specs: ['Biometric Hardware Gateway', 'WhatsApp Parent Alert', 'Sub-Second Turnstile']
    }
  ],

  'iot-telemetry': [
    {
      id: 'mesh-topography',
      module: 'Wireless Mesh',
      title: '5 KM Sub-GHz Wireless Sensor Mesh Topography',
      subtitle: 'Multi-kilometer RF mesh map visualizing gateway nodes, repeaters, and field sensor endpoints.',
      tag: 'Sub-GHz Mesh',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/edgemesh/rf-topography',
      specs: ['SX1262 LoRa Radio', '5 KM Range', 'Multi-Hop Routing']
    },
    {
      id: 'mqtt-broker',
      module: 'MQTT Cloud Broker',
      title: 'High-Throughput EMQX Cloud MQTT Message Ingestion Radar',
      subtitle: 'High-speed MQTT message broker parsing 100,000+ sensor telemetry packets per second.',
      tag: 'EMQX Broker',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/edgemesh/mqtt-radar',
      specs: ['100k Packets/Sec', 'Sub-8ms Ingestion', 'TimescaleDB Sink']
    }
  ],

  'home-automation': [
    {
      id: 'scene-controller',
      module: 'Mesh Scene Gateway',
      title: 'Smart Home Mesh Lighting & Scene Controller',
      subtitle: 'Central touch panel for configuring ambient lighting scenes, circadian rhythm, and security modes.',
      tag: 'Smart Mesh Gateway',
      img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/smarthome/mesh-gateway',
      specs: ['Matter / Zigbee 3.0', 'Offline Edge Gateway', 'Circadian Lighting']
    },
    {
      id: 'climate-zones',
      module: 'Multi-Zone HVAC',
      title: 'Precision Multi-Zone HVAC Climate Control Panel',
      subtitle: 'Individual room temperature orchestration with occupancy sensors and energy-saving schedules.',
      tag: 'Climate Orchestrator',
      img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/smarthome/hvac-zones',
      specs: ['Occupancy Sensing', '35% Energy Reduction', 'Touch Keypad']
    }
  ],

  'agri-automation': [
    {
      id: 'solenoid-irrigation',
      module: 'Solenoid Controller',
      title: 'Wireless Solenoid Valve Drip Irrigation Controller',
      subtitle: 'Automated irrigation valve scheduling linked with live field soil moisture telemetry.',
      tag: 'Wireless Irrigation',
      img: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/agrismart/irrigation-valves',
      specs: ['Solar Solenoid Valve', 'Soil Moisture Feedback', 'Weather Sync']
    },
    {
      id: 'soil-telemetry',
      module: 'Soil Telemetry',
      title: 'Multi-Zone Soil Moisture & NPK Nutrient Telemetry Hub',
      subtitle: 'Sub-surface wireless probes transmitting soil moisture, temperature, and nitrogen levels.',
      tag: 'Agri Telemetry',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=90',
      route: 'app.dasatech.com/agrismart/soil-telemetry',
      specs: ['Sub-Surface Probes', 'NPK Sensor Sync', 'Fertigation Alerts']
    }
  ]
}
