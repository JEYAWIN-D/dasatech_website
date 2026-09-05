// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE AUTOMATIONS DATASET (REFERENCED FROM NEXOMATIC.IN)
// 7 Specialized Industry Automation Verticals with Authentic Engineering Details
// ─────────────────────────────────────────────────────────────

export const AUTOMATIONS_CATALOG = [
  // 1. HOME AUTOMATION
  {
    id: 'home',
    slug: 'home-automation',
    navLabel: 'Home Automation',
    title: 'Smart Home Automation',
    sector: 'Residential & Luxury Living',
    tagline: 'Slab-Aware Bill Prediction, SmartHome Pro8 Touch Panels & FASTag Gate Automation',
    summary:
      'Engineered specifically for Indian residences, voltage conditions, and electricity tariffs. Controls lights, fans, ACs, curtains, gates, and security from a single centralized app with 100% offline-first reliability.',
    heroSubtitle:
      'Retrofit installation that fits behind existing switchboards without wall damage or civil work. Works seamlessly during power cuts and internet outages.',
    color: '#7C3AED',
    accentBg: 'bg-purple-50 text-purple-700 border-purple-200',
    statHighlights: [
      { value: 'Slab-Aware', label: 'Electricity Bill Prediction' },
      { value: '100% Offline', label: 'Local Edge Gateway Control' },
      { value: 'Retrofit', label: 'No Rewiring or Wall Hacking' },
      { value: '7 Languages', label: 'Voice & App Local Support' }
    ],
    spotlightFeature: {
      title: 'SmartHome Pro Touch Keypads & Gate Automation',
      description:
        'Our flagship 8-channel tempered glass capacitive touch controller fits standard modular switchboards (Roma, Crabtree, Legrand). Integrated smart gate automation supports vehicle FASTag RFID scanning, Video Door Phone (VDP), and anti-crush safety infrared beams.',
      badge: 'Flagship Hardware Ecosystem'
    },
    packages: [
      {
        name: 'Starter Pack (1BHK / Studio)',
        scope: 'Living room lighting + Master bedroom AC control + Smart water level controller + Voice assistant sync.'
      },
      {
        name: 'Comfort Pack (2BHK)',
        scope: 'Complete lighting automation + 2 AC controls + Motorized living room curtains + Smart geyser timer + VDP doorbell.'
      },
      {
        name: 'Premium Pack (3BHK)',
        scope: 'Full-home SmartHome Pro8 glass panels + 3 ACs + Motorized curtains in all rooms + FASTag gate automation + Water controller.'
      },
      {
        name: 'Luxury Villa Suite',
        scope: 'Complete architectural lighting + FASTag gate + Multi-zone climate + Smart pool/garden pumps + Solar sync + Slab-aware alerts.'
      }
    ],
    modules: [
      {
        id: 'smart-switches',
        title: 'SmartHome Pro8 Glass Touch Keypads',
        desc: '8-channel capacitive glass touch panels with LED backlighting. Direct retrofit behind existing modular switchboards without cutting walls.'
      },
      {
        id: 'gate-automation',
        title: 'Smart Gate Automation with FASTag & VDP',
        desc: 'Sliding and swing gate controllers with FASTag RFID scanning for instant vehicle recognition, Video Door Phone (VDP), and safety IR beams.'
      },
      {
        id: 'slab-aware-billing',
        title: 'Slab-Aware Electricity Bill Prediction',
        desc: 'AI-driven tariff calculator calibrated to Indian state electricity board (TNEB, BESCOM, MSEDCL) slabs, alerting before you cross into higher rate tiers.'
      },
      {
        id: 'climate-ir',
        title: '360° Smart Climate & Universal IR Blaster',
        desc: 'Centralized control for all split/central ACs, TVs, and entertainment systems with room occupancy auto-cutoff to eliminate wasted power.'
      },
      {
        id: 'water-level',
        title: 'Automated Water Level Controller',
        desc: 'Automatic overhead tank and underground sump water management with dry-run motor protection and scheduled municipal supply filling.'
      },
      {
        id: 'curtains-voice',
        title: 'Motorized Curtains & 7 Regional Languages',
        desc: 'Ultra-quiet curtain tracks synchronized with sunrise/sunset, supporting voice commands in English, Hindi, Tamil, Telugu, Kannada, Malayalam, and Marathi.'
      }
    ],
    hardwareSpecs: [
      'Offline-First Local Edge Gateway (zero internet dependency)',
      'Bank-grade 256-bit encrypted wireless mesh communication',
      'Engineered for Indian voltage swings (160V - 290V surge protection)',
      'Retrofit micro-relays rated for inductive loads (fans, pumps, heavy ACs)'
    ],
    useCases: ['Apartments & Flats', 'Independent Houses & Villas', 'Smart Penthouses', 'Gated Villa Communities']
  },

  // 2. HOSPITAL AUTOMATION
  {
    id: 'hospital',
    slug: 'hospital-automation',
    navLabel: 'Hospital Automation',
    title: 'Hospital & Healthcare Automation',
    sector: 'Healthcare & Critical Care',
    tagline: 'Wireless & IP Nurse Call Systems, OT Cleanroom Climate & Medical Gas Telemetry',
    summary:
      'Healthcare-grade automation engineered for patient safety, sterile Operation Theater (OT) environmental control, medical gas line monitoring, and floor-level hospital energy accounting.',
    heroSubtitle:
      'Designed to meet NABH accreditation requirements with 100% offline-first controllers that maintain life-critical operations during network outages.',
    color: '#0284C7',
    accentBg: 'bg-sky-50 text-sky-700 border-sky-200',
    statHighlights: [
      { value: '< 2s', label: 'Nurse Call Alert Dispatch' },
      { value: '±0.2°C', label: 'OT Temperature Precision' },
      { value: 'MGPS', label: 'Medical Gas Pressure Telemetry' },
      { value: 'NABH', label: 'Compliance Standard Ready' }
    ],
    spotlightFeature: {
      title: 'NABH-Compliant Nurse Call & OT Cleanroom Suite',
      description:
        'Features bedside silicone waterproof call buttons, bathroom emergency pull cords, corridor tri-color dome lamps, and central nursing station audio intercom. Operation Theaters feature precision laminar airflow, positive pressure monitoring, and HEPA filter differential pressure sensing.',
      badge: 'Critical Care Infrastructure'
    },
    packages: [
      {
        name: 'General Ward & Private Room Package',
        scope: 'Wireless bedside nurse call cords + Bathroom emergency pull cords + Corridor dome lamps + Nursing station master console.'
      },
      {
        name: 'Operation Theater (OT) Suite Package',
        scope: 'Hermetic glass OT display console + Temperature (18-21°C) & RH (45-55%) logging + Positive pressure differential + HEPA differential telemetry.'
      },
      {
        name: 'Medical Gas & ICU Telemetry Package',
        scope: 'Continuous pressure monitoring for O2, N2O, Medical Air (4/7 bar), Vacuum + Audible nursing station alarms + ICU isolation room pressure control.'
      },
      {
        name: 'Comprehensive Hospital Campus System',
        scope: 'Full campus nurse call + OT cleanroom suite + MGPS telemetry + Floor-level energy accounting + Biometric airlock sterile access.'
      }
    ],
    modules: [
      {
        id: 'nurse-call-sys',
        title: 'Wireless & IP Nurse Call System',
        desc: 'Bedside waterproof call cords, toilet emergency pull cords, corridor tri-color dome lights, and duty station master touch consoles with two-way audio intercom.'
      },
      {
        id: 'ot-precision-climate',
        title: 'Operation Theater (OT) Cleanroom Climate',
        desc: 'Real-time temperature (18°C-21°C) & humidity (45-55% RH) logging, laminar airflow monitoring, and positive room pressure regulation to prevent airborne infections.'
      },
      {
        id: 'mgps-telemetry',
        title: 'Medical Gas Pipeline System (MGPS) Alarms',
        desc: 'Continuous digital telemetry for Oxygen (O2), Nitrous Oxide (N2O), Medical Air (4 bar / 7 bar), and Vacuum lines with instant audible siren consoles.'
      },
      {
        id: 'patient-circadian',
        title: 'Patient Room Circadian & Night Path Lighting',
        desc: 'Dimmable patient reading lights, soft automated night-path floor lighting, and motorized acoustic blinds for peaceful patient recovery.'
      },
      {
        id: 'sterile-access',
        title: 'Sterile Zone Airlock & Pharmacy Access',
        desc: 'Interlocking automatic hermetic doors for ICUs, OTs, and Schedule H/X pharmacy storage with complete electronic audit trails.'
      },
      {
        id: 'hospital-energy',
        title: 'Floor-Level Energy Accounting & Metering',
        desc: 'Sub-metering for CT/MRI suites, central chillers, autoclave sterilization units, and hospital bed towers to track clinical power overhead.'
      }
    ],
    hardwareSpecs: [
      'Isolated medical power network compliant controllers',
      'Hermetically sealed IP65 touch glass OT master panels',
      'Dry-contact fail-safe medical gas line pressure transducers',
      'Encrypted wireless mesh with zero EMI interference to patient monitors'
    ],
    useCases: ['Multi-Specialty Hospitals', 'Surgical Centers', 'Critical Care ICUs', 'Diagnostic & Dialysis Clinics']
  },

  // 3. OFFICE AUTOMATION
  {
    id: 'office',
    slug: 'office-automation',
    navLabel: 'Office Automation',
    title: 'Smart Office & Workplace Automation',
    sector: 'Commercial & Corporate Workspaces',
    tagline: '1-Touch Conference Rooms, Centralized VRF/VRV AC Scheduling & IAQ Fresh Air Automation',
    summary:
      'Elevate corporate workplace productivity and eliminate commercial electricity waste with smart conference room scenes, centralized AC scheduling, daylight harvesting, and indoor air quality sensors.',
    heroSubtitle:
      'Local offline-first building controllers ensure seamless meeting room presentation and climate management without cloud lag.',
    color: '#4F46E5',
    accentBg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    statHighlights: [
      { value: '40%', label: 'Commercial HVAC Savings' },
      { value: '1-Touch', label: 'Meeting Room Launch' },
      { value: 'CO₂ & VOC', label: 'Air Quality Optimization' },
      { value: 'Zero Peak', label: 'Demand Penalty Avoidance' }
    ],
    spotlightFeature: {
      title: 'Smart Conference Room & Centralized VRF AC',
      description:
        'Single-button meeting room launch lowers motorized projector screens, draws blackout blinds, switches to presentation lighting, and initializes audio/video codecs. Centralized VRF/VRV air conditioning management enforces setback schedules and automatically cuts cooling in vacant bays.',
      badge: 'Commercial Enterprise Standard'
    },
    packages: [
      {
        name: 'Conference & Board Room Suite',
        scope: '1-Touch meeting room launch + Motorized blinds + Dimmable presentation lighting + Video conference codec power automation.'
      },
      {
        name: 'Smart Energy & AC Management',
        scope: 'Centralized VRF/VRV AC scheduling + Occupancy-based cooling cut + Peak demand penalty monitoring + Lighting daylight harvesting.'
      },
      {
        name: 'Indoor Air Quality & Health Suite',
        scope: 'CO2, PM2.5, VOC, and humidity telemetry linked to motorized fresh air dampers to eliminate afternoon meeting fatigue.'
      },
      {
        name: 'Turnkey Corporate IT Campus',
        scope: 'Multi-floor lighting & AC automation + Face recognition access + Boardroom suite + Floor-wise energy accounting dashboards.'
      }
    ],
    modules: [
      {
        id: 'conf-room',
        title: '1-Touch Smart Conference Room Automation',
        desc: 'Single button press drops motorized projector screens, engages blackout blinds, dims lights to presentation mode, and activates AV codecs.'
      },
      {
        id: 'vrf-ac-sched',
        title: 'Centralized VRF/VRV AC Scheduling',
        desc: 'Automated cooling schedules tied to office working shifts, automatically shutting down AC in empty meeting rooms, bays, and executive cabins.'
      },
      {
        id: 'daylight-harvesting',
        title: 'Dual PIR Occupancy & Daylight Harvesting',
        desc: 'Smart ceiling sensors modulate LED light output dynamically based on incoming ambient daylight, shutting off completely when rooms empty.'
      },
      {
        id: 'iaq-monitoring',
        title: 'Indoor Air Quality (IAQ) & Fresh Air Control',
        desc: 'Continuously monitors CO2, PM2.5, VOC, and humidity, automatically opening motorized fresh air dampers to keep employees alert.'
      },
      {
        id: 'touchless-access',
        title: 'Touchless Biometric Attendance & Visitor Passes',
        desc: 'Face recognition biometric turnstiles, temporary QR visitor passes, and magnetic door locks with automatic fire alarm emergency release.'
      },
      {
        id: 'floor-metering',
        title: 'Floor-Wise Energy Accounting & Peak Demand',
        desc: 'Department-wise electrical sub-metering and live alerts before crossing contract maximum demand limits to avoid utility penalties.'
      }
    ],
    hardwareSpecs: [
      'BACnet IP and Modbus TCP BMS building gateway integration',
      'Dual-technology passive infrared & microwave occupancy sensors',
      'DALI-2 certified digital addressable lighting controllers',
      'Offline-first building controller with cloud reporting dashboard'
    ],
    useCases: ['Corporate Headquarters', 'IT & Software Parks', 'Co-Working Hubs', 'Financial Institutions']
  },

  // 4. HOTEL AUTOMATION (GRMS)
  {
    id: 'hotel',
    slug: 'hotel-automation',
    navLabel: 'Hotel Automation (GRMS)',
    title: 'Hotel & Hospitality Automation (GRMS)',
    sector: 'Hospitality & Luxury Resorts',
    tagline: 'Guest Room Management Systems (GRMS), Keyless RFID Entry & Bedside Touch Consoles',
    summary:
      'Deliver luxurious guest experiences while optimizing room power consumption with intelligent Guest Room Management Systems (GRMS), automated welcome scenes, bedside glass panels, and corridor DND/MUR indicators.',
    heroSubtitle:
      'Seamlessly connects with hotel Property Management Systems (Opera, IDS Next, Fidelio) to cut unoccupied room energy waste by up to 30%.',
    color: '#D97706',
    accentBg: 'bg-amber-50 text-amber-700 border-amber-200',
    statHighlights: [
      { value: '30%', label: 'Unoccupied Room Power Cut' },
      { value: 'Instant', label: 'Welcome Scene Execution' },
      { value: 'PMS', label: 'Opera & Fidelio Integration' },
      { value: '5-Star', label: 'Luxury Experience Rating' }
    ],
    spotlightFeature: {
      title: 'GRMS Room Controller & Bedside Master Glass',
      description:
        'When the front desk checks in a guest, the room pre-cools to a welcoming 22°C. On door unlock, curtains glide open and accent lights illuminate. The bedside capacitive touch glass panel allows complete control over master off, reading lights, night path, and DND/MUR.',
      badge: 'Luxury Hospitality Standard'
    },
    packages: [
      {
        name: 'Standard Guest Room GRMS',
        scope: 'Core room controller + Keycard energy saver + Corridor DND/MUR plate + Master bedside touch panel.'
      },
      {
        name: 'Executive & Business Suite GRMS',
        scope: 'Automated check-in welcome scene + Motorized sheer/blackout curtains + Keyless BLE lock + Multi-zone AC.'
      },
      {
        name: 'Presidential & Luxury Villa Suite',
        scope: 'Dual bedside glass consoles + Living room architectural scenes + Balcony lighting + Jacuzzi automation + PMS sync.'
      },
      {
        name: 'Full Hotel Property Automation',
        scope: 'All guest room GRMS + Banquet & restaurant mood lighting + Lobby facade architectural control + Centralized plant telemetry.'
      }
    ],
    modules: [
      {
        id: 'grms-core-sys',
        title: 'Guest Room Management System (GRMS)',
        desc: 'Central intelligent room controller regulating climate, lighting, curtains, and sockets tailored to Check-In, Occupied, and Vacant states.'
      },
      {
        id: 'hotel-welcome-scene',
        title: 'Automated Check-In Welcome Scene',
        desc: 'Room pre-cools upon check-in; on first door unlock, warm accent lighting turns on, sheer curtains glide open, and soft music welcomes the guest.'
      },
      {
        id: 'bedside-master-glass',
        title: 'Bedside Capacitive Glass Master Console',
        desc: 'Luxurious glass touch console with illuminated icons for Master Off, Reading Lights, DND, MUR, Curtain Open/Close, and AC temperature.'
      },
      {
        id: 'corridor-dnd-mur',
        title: 'Corridor Doorplate with DND & MUR Indicators',
        desc: 'Backlit room number plate with touch doorbell and high-visibility electronic Do Not Disturb (DND) / Make Up Room (MUR) status for housekeeping.'
      },
      {
        id: 'keyless-rfid-ble',
        title: 'RFID & Bluetooth Mobile Smart Door Locks',
        desc: 'High-security mortise door locks supporting contactless hotel RFID cards and encrypted smartphone digital guest keys.'
      },
      {
        id: 'vacancy-saver',
        title: 'Intelligent Vacancy Energy Cutoff',
        desc: 'PIR occupancy sensors determine when the room is vacant, smoothly setting the AC to eco-mode and cutting non-essential power.'
      }
    ],
    hardwareSpecs: [
      'Ultra-thin architectural tempered glass touch panels',
      'Heavy-duty silent micro-relays with zero cross-talk noise for quiet sleep',
      'Direct RS485 / IP connection to hotel server backend',
      'UL94-V0 fire-retardant enclosures for all in-wall room controllers'
    ],
    useCases: ['5-Star Luxury Hotels', 'Heritage Boutique Resorts', 'Executive Serviced Apartments', 'Business Travel Hotels']
  },

  // 5. INDUSTRIAL AUTOMATION
  {
    id: 'industrial',
    slug: 'industrial-automation',
    navLabel: 'Industrial Automation',
    title: 'Industrial Automation & Plant Telemetry',
    sector: 'Manufacturing & Industrial Processing',
    tagline: 'Per-Machine Energy Metering, Motor & Pump Protection, Safety Interlocks & PLC/SCADA',
    summary:
      'Industrial automation tailored for Indian manufacturing plants, mills, and processing facilities. Features per-machine energy metering, comprehensive motor protection, PLC/SCADA integration, and operator safety interlocks.',
    heroSubtitle:
      'Offline-first industrial controllers execute critical safety and energy rules locally without cloud dependencies.',
    color: '#DC2626',
    accentBg: 'bg-red-50 text-red-700 border-red-200',
    statHighlights: [
      { value: 'Per-Machine', label: 'Energy Metering per Batch' },
      { value: '< 3s', label: 'Motor Dry-Run Auto Trip' },
      { value: '99.8%', label: 'Factory Machine Uptime' },
      { value: 'Modbus', label: 'Universal PLC/SCADA Sync' }
    ],
    spotlightFeature: {
      title: 'Per-Machine Energy Metering & Motor Protection',
      description:
        'Modbus RS485 digital meters log exact kWh consumption per production batch or machine cycle. Comprehensive motor protection guards against overload, single-phasing, phase reversal, voltage fluctuation, and bearing thermal runaway.',
      badge: 'Heavy Industrial Grade'
    },
    packages: [
      {
        name: 'Motor & Pump Management Package',
        scope: 'Star-delta / VFD automation + Overload protection + Single-phasing prevention + Bearing temperature monitoring.'
      },
      {
        name: 'Per-Machine Energy Accounting (EMS)',
        scope: 'Modbus RS485 digital meters on every machine + kWh per batch logging + Peak tariff load management + Real-time PF tracking.'
      },
      {
        name: 'Machine Safety & Interlock Suite',
        scope: 'Category 4 safety light curtains + Emergency stop loops + Conveyor zero-speed switches + Visual audio tower lamps.'
      },
      {
        name: 'Turnkey Smart Plant Telemetry',
        scope: 'Complete PLC/SCADA integration + Per-machine EMS + Cloud OEE downtime tracking + Predictive vibration telemetry.'
      }
    ],
    modules: [
      {
        id: 'per-machine-metering',
        title: 'Per-Machine Energy Metering (kWh/Batch)',
        desc: 'Modbus RS485 digital power meters on individual machines recording precise electricity consumption per production run, shift, or batch.'
      },
      {
        id: 'motor-pump-mgmt',
        title: 'Comprehensive Motor & Pump Protection',
        desc: 'Advanced protection against motor overload, dry-run, single-phasing, phase reversal, voltage spikes, and bearing overheating.'
      },
      {
        id: 'plc-scada-sync',
        title: 'PLC & SCADA Hardware Integration',
        desc: 'Direct communication with Siemens, Schneider, and Delta PLCs via Modbus RTU/TCP, OPC-UA, and 4-20mA / 0-10V analog signals.'
      },
      {
        id: 'safety-light-curtains',
        title: 'Safety Light Curtains & Emergency Interlocks',
        desc: 'Category 4 optical light curtains, rope-pull switches, and emergency E-stop loops that instantly trip hazardous presses to protect operators.'
      },
      {
        id: 'mill-machinery',
        title: 'Mill & Agri-Processing Machinery Automation',
        desc: 'Conveyor belt speed synchronization, hopper ultrasonic level sensors, automated pneumatic gate valves, and dust extraction interlocks.'
      },
      {
        id: 'live-oee-uptime',
        title: 'Live OEE Telemetry & Downtime Analytics',
        desc: 'Real-time tracking of machine states (Running, Idle, Breakdown), cycle count tracking, and instant alerts dispatched to plant managers.'
      }
    ],
    hardwareSpecs: [
      'DIN-rail mounted industrial IoT gateways with 4G/Ethernet fallback',
      'Galvanically isolated RS485 Modbus RTU serial communication',
      'Operating temperature tolerance: -20°C to +70°C in dusty plant floors',
      'IP67 shock and vibration rated industrial sensor housings'
    ],
    useCases: ['Textile & Spinning Mills', 'Automotive Component Manufacturing', 'Agri-Processing & Rice Mills', 'Chemical & Pharma Plants']
  },

  // 6. AGRI AUTOMATION
  {
    id: 'agri',
    slug: 'agri-automation',
    navLabel: 'Agri Automation',
    title: 'Smart Agri & Farm Automation',
    sector: 'Farming, Plantations & Polyhouses',
    tagline: 'Automatic Pump Control with Dry-Run Protection, Soil Moisture Telemetry & Long-Range LoRaWAN',
    summary:
      'Engineered for Indian farmers and commercial growers. Automates drip and sprinkler irrigation based on real-time soil moisture, protects borewell pumps against dry-run burnout, and controls solar pumps remotely.',
    heroSubtitle:
      'Long-range LoRaWAN telemetry operates across 5 to 10 kilometers of farmland without laying costly cables or relying on cellular towers.',
    color: '#16A34A',
    accentBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    statHighlights: [
      { value: '3 Seconds', label: 'Dry-Run Pump Cutoff Speed' },
      { value: '50%', label: 'Water Conservation' },
      { value: '10 km', label: 'LoRaWAN Wireless Range' },
      { value: '+25%', label: 'Crop Yield Improvement' }
    ],
    spotlightFeature: {
      title: 'Automatic Pump Control with Dry-Run Protection',
      description:
        'Continuously monitors motor current, voltage, and water flow rate. If a borewell or canal runs dry, the controller automatically trips the pump within 3 seconds, preventing costly motor coil burnout. Supports remote start/stop via smartphone app, GSM SMS, and scheduled timers.',
      badge: 'Farmer-Centric Innovation'
    },
    packages: [
      {
        name: 'Pump Guard & Remote Starter',
        scope: 'Automatic dry-run pump protection + Remote GSM/App start-stop + Single-phase/three-phase voltage monitor + Timer scheduling.'
      },
      {
        name: 'Precision Drip Automation Package',
        scope: 'Soil moisture probes + Wireless solenoid valve controllers + Scheduled zone watering + Weather forecast integration.'
      },
      {
        name: 'Polyhouse Climate & Fertigation Suite',
        scope: 'Automated shade nets + Foggers + Vent actuators + Multi-channel fertilizer dosing pumps + Greenhouse temperature/RH control.'
      },
      {
        name: 'Commercial Plantation LoRaWAN Network',
        scope: 'Central LoRaWAN gateway + Multi-depth soil NPK/EC/pH probes + 10km wireless valve nodes + Solar pump integration.'
      }
    ],
    modules: [
      {
        id: 'dry-run-pump-ctrl',
        title: 'Automatic Pump Control with Dry-Run Cutoff',
        desc: 'Monitors current, voltage, and water flow; automatically trips the pump within 3 seconds if water depletes, preventing motor coil burnout.'
      },
      {
        id: 'drip-automation',
        title: 'Soil Moisture Based Drip Irrigation',
        desc: 'Wireless latching solenoid valves actuate automatically when volumetric soil moisture drops below crop threshold, cutting water use by 50%.'
      },
      {
        id: 'multi-depth-soil',
        title: 'Multi-Depth Soil Moisture, EC & NPK Probes',
        desc: 'Stainless steel probes measure volumetric water content, soil temperature, electrical conductivity, and nutrient status at root depths (15cm, 30cm, 60cm).'
      },
      {
        id: 'lorawan-long-range',
        title: 'Long-Range LoRaWAN Wireless Valve Control',
        desc: 'Battery-operated wireless valve nodes operating across 5 to 10 kilometers of farmland without laying costly cables.'
      },
      {
        id: 'solar-pump-remote',
        title: 'Solar & Electric Pump Remote Control',
        desc: 'Start, stop, and schedule agricultural pumps via smartphone app or GSM SMS from anywhere, with automatic phase-fail restart.'
      },
      {
        id: 'polyhouse-climate',
        title: 'Automated Polyhouse & Greenhouse Climate',
        desc: 'Automated high-pressure foggers, motorized shade screens, exhaust fans, and side vents maintaining optimal greenhouse micro-climate.'
      }
    ],
    hardwareSpecs: [
      'Solar-powered LoRaWAN outdoor sensor nodes with 5-year battery life',
      'Corrosion-resistant 316 stainless steel soil measurement probes',
      'IP66 weather-sealed UV-stabilized polycarbonate field enclosures',
      'Heavy-duty 12V/24V latching solenoid valve driver circuits'
    ],
    useCases: ['Open Field Commercial Farms', 'Polyhouses & Greenhouses', 'Fruit Orchards & Vineyards', 'Tea & Coffee Plantations']
  },

  // 7. COLD STORAGE AUTOMATION
  {
    id: 'cold-storage',
    slug: 'cold-storage-automation',
    navLabel: 'Cold Storage Automation',
    title: 'Cold Storage & Refrigeration Automation',
    sector: 'Cold Chain, Pack Houses & Perishables',
    tagline: 'Per-Freezer Circuit Metering, Peak-Hour Load Shedding, Anti-Short-Cycle & Ammonia Gas Alarms',
    summary:
      'Refrigeration energy management tailored for commercial cold storage warehouses, pack houses, and produce cold rooms. Delivers multi-point sub-zero temperature logging, peak-tariff load shedding within safe limits, and automated ammonia leak alerts.',
    heroSubtitle:
      'Offline-first refrigeration controllers run safety rules locally to prevent perishable spoilage even during internet or power failures.',
    color: '#0891B2',
    accentBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    statHighlights: [
      { value: 'Safe Limits', label: 'Peak-Hour Load Shedding' },
      { value: 'Anti-Short', label: 'Compressor Cycle Protection' },
      { value: '-40°C', label: 'Deep Freeze Logging' },
      { value: 'NH₃ Siren', label: 'Instant Gas Leak Alarms' }
    ],
    spotlightFeature: {
      title: 'Peak-Hour Load Shedding & Compressor Protection',
      description:
        'Per-freezer circuit metering enables automated load shedding during expensive peak-tariff electricity hours while strictly holding internal temperatures within safe pre-set thresholds. Anti-short-cycle logic protects compressor motors from rapid cycling after sudden power trips.',
      badge: 'Refrigeration Integrity Standard'
    },
    packages: [
      {
        name: 'Pack House & Fresh Produce Package',
        scope: 'Precision temperature (0°C to +15°C) & 85-95% RH monitoring + Ethylene gas telemetry + Door ajar alarms + Mobile alerts.'
      },
      {
        name: 'Deep Freeze & Cold Room Package',
        scope: 'Multi-zone PT100 logging (-40°C to 0°C) + Anti-short-cycle protection + Demand defrost optimization + Standby generator auto-transfer.'
      },
      {
        name: 'Energy Optimization & Load Shedding Suite',
        scope: 'Per-freezer circuit metering + Peak-hour load shedding within safe thresholds + Compressor lead-lag balancing + Power factor monitoring.'
      },
      {
        name: 'Complete Industrial Cold Storage Plant',
        scope: 'All room telemetry + Ammonia (NH3) / Freon gas leak detection with emergency blowers + HACCP/FDA compliance audit PDF generator.'
      }
    ],
    modules: [
      {
        id: 'per-freezer-metering',
        title: 'Per-Freezer Circuit Metering & Load Shedding',
        desc: 'Dedicated digital energy meters on each freezer compressor, automatically shedding load during peak-tariff hours within strict safe product thermal limits.'
      },
      {
        id: 'anti-short-cycle',
        title: 'Anti-Short-Cycle & Compressor Protection',
        desc: 'Guards compressors against immediate re-engagement after power trips, enforcing mandatory refrigerant equalization delays to avoid burnout.'
      },
      {
        id: 'sub-zero-logging',
        title: 'Multi-Zone Sub-Zero Temperature Logging (-40°C)',
        desc: 'Calibrated Class A PT100 sensors logging multi-level temperatures with cryptographic audit reports meeting HACCP, FDA, and FSSAI standards.'
      },
      {
        id: 'door-ajar-strip',
        title: 'Door Ajar & Thermal Infiltration Sirens',
        desc: 'Magnetic door sensors and ultrasonic detectors alerting plant operators with strobe sirens if cold room doors remain open past 90 seconds.'
      },
      {
        id: 'ammonia-gas-leak',
        title: 'Ammonia (NH3) & Refrigerant Gas Leak Alarms',
        desc: 'Electrochemical gas sensors triggering automatic exhaust blowers and facility-wide evacuation sirens immediately upon detecting hazardous refrigerant leaks.'
      },
      {
        id: 'packhouse-produce',
        title: 'Pack House Ethylene & Humidity Telemetry',
        desc: 'Monitors ethylene buildup and maintains 85%-95% relative humidity to maximize the shelf life of fresh fruits, vegetables, and perishables.'
      }
    ],
    hardwareSpecs: [
      'Class A PT100 RTD temperature sensors with ±0.1°C accuracy',
      'Sub-zero rated sensor cabling resistant to cracking down to -50°C',
      'Offline-first refrigeration controller with local flash data logging',
      'Dual-SIM 4G LTE gateway with 8-hour battery backup during complete grid blackout'
    ],
    useCases: ['Cold Storage Warehouses', 'Fruit & Vegetable Pack Houses', 'Pharma & Vaccine Freezers', 'Meat & Seafood Processing Plants']
  }
]
