import React from 'react'
import Hero from '../components/Hero'
import TechMarquee from '../components/TechMarquee'
import About from '../components/About'
import CapabilitiesScrollStory from '../components/CapabilitiesScrollStory'
import ProductsShowcase from '../components/ProductsShowcase'
import CustomersShowcase from '../components/CustomersShowcase'
import Collaborators from '../components/Collaborators'
import CTA from '../components/CTA'
import { useSEO } from '../hooks/useSEO'

export default function HomePage() {
  useSEO({
    title: 'DASA TECH — Custom Enterprise ERP, Industrial IoT & AI Software Development',
    description: 'DASA TECH engineers mission-critical custom ERP software, industrial IoT automation, AI computer vision, and cloud platforms for manufacturing, retail, and enterprises across South India.',
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
    <main className="flex-grow w-full overflow-hidden bg-[#FAF7F2] text-[#141017]">
      <Hero />
      <TechMarquee />
      <About />
      <CapabilitiesScrollStory />
      <ProductsShowcase />
      <CustomersShowcase />
      <Collaborators />
      <CTA />
    </main>
  )
}

