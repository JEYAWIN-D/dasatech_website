import React from 'react'
import Hero from '../components/Hero'
import TechMarquee from '../components/TechMarquee'
import About from '../components/About'
import CapabilitiesScrollStory from '../components/CapabilitiesScrollStory'
import TechnologiesMarquee from '../components/TechnologiesMarquee'
import ProductsShowcase from '../components/ProductsShowcase'
import Collaborators from '../components/Collaborators'
import CTA from '../components/CTA'
import { useSEO } from '../hooks/useSEO'

export default function HomePage() {
  useSEO({
    title: 'DASA TECH | Software Development, ERP, IoT & AI Solutions',
    description: 'DASA TECH engineers mission-critical enterprise software, custom ERP platforms, AI solutions, and IoT telemetry architectures that solve real business problems in Erode, Tamil Nadu.',
    schema: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "DASA TECH",
      "url": "https://dasatech.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://dasatech.in/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  });

  return (
    <main className="flex-grow w-full overflow-hidden bg-[#FAF8FF] text-slate-900">
      <Hero />
      <TechMarquee />
      <About />
      <CapabilitiesScrollStory />
      <TechnologiesMarquee />
      <ProductsShowcase />
      <Collaborators />
      <CTA />
    </main>
  )
}

