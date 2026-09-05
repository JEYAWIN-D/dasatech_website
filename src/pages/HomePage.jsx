import React from 'react'
import Hero from '../components/Hero'
import TechMarquee from '../components/TechMarquee'
import About from '../components/About'
import CapabilitiesScrollStory from '../components/CapabilitiesScrollStory'
import TechnologiesMarquee from '../components/TechnologiesMarquee'
import ProductsShowcase from '../components/ProductsShowcase'
import Collaborators from '../components/Collaborators'
import CTA from '../components/CTA'

export default function HomePage() {
  return (
    <main className="bg-[#FAF8FF] text-slate-900">
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

