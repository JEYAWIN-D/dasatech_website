/**
 * Backend Engineering & Server Infrastructure Assets Registry
 * 
 * Centralized, modular image configuration for all backend-related visuals.
 * Each image asset or visual part can be replaced independently below.
 */

export const BACKEND_ASSETS = {
  // Main Hero & Background Visuals
  hero: {
    main: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=90',
    card: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=90',
    alt: 'Backend Datacenter Server Infrastructure',
    accentColor: '#2563EB'
  },

  // 5-Tier System Architecture Visual Assets
  architectureTiers: [
    {
      id: 0,
      tierKey: 'clientLayer',
      name: 'Client Layer',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=85',
      alt: 'Web Browsers, Mobile Apps & IoT Devices Client Ingestion'
    },
    {
      id: 1,
      tierKey: 'apiGatewayTier',
      name: 'API Gateway Tier',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85',
      alt: 'API Gateway, SSL Termination & Rate Limiting'
    },
    {
      id: 2,
      tierKey: 'backendServicesTier',
      name: 'Backend Services Tier',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=85',
      alt: 'Node.js & Python Microservices Engine'
    },
    {
      id: 3,
      tierKey: 'databaseCacheTier',
      name: 'Database & Cache Tier',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=85',
      alt: 'ACID PostgreSQL & Redis In-Memory Caching'
    },
    {
      id: 4,
      tierKey: 'externalServicesTier',
      name: 'External Services Tier',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85',
      alt: 'Third-Party Webhooks & Payment Gateway Integrations'
    }
  ],

  // Runtimes & Framework Visual Assets
  toolchain: {
    nodejs: {
      name: 'Node.js',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=400&q=80',
      alt: 'Node.js Event Loop Runtime'
    },
    python: {
      name: 'Python (FastAPI)',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=400&q=80',
      alt: 'Python FastAPI Microservice'
    },
    postgresql: {
      name: 'PostgreSQL',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&q=80',
      alt: 'ACID PostgreSQL Relational Database'
    },
    redis: {
      name: 'Redis Cache',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80',
      alt: 'Redis In-Memory Key-Value Storage'
    }
  },

  // Case Studies & Modular Application Previews
  caseStudies: {
    fintechEngine: {
      title: 'High-Volume Transaction Engine',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=85',
      alt: 'Payment Processing Microservices'
    },
    saasBackend: {
      title: 'Multi-Tenant SaaS Backend',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85',
      alt: 'Isolated Tenant Databases & Subscriptions'
    },
    telemetryIngestion: {
      title: 'Real-Time Telemetry Pipeline',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85',
      alt: 'MQTT Sensor Telemetry Ingestion'
    }
  }
}

export default BACKEND_ASSETS
