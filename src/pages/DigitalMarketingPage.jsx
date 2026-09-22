import React from 'react'
import { Link } from '../components/Router'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import { Search, TrendingUp, Target, BarChart, ArrowRight, MousePointerClick } from 'lucide-react'
import { useSEO } from '../hooks/useSEO'

export default function DigitalMarketingPage() {
  useSEO({
    title: 'Digital Marketing & SEO Services in Erode | DASA TECH',
    description: 'Grow your business with data-driven Digital Marketing and Technical SEO services. We specialize in AI search optimization, local SEO, and content strategy in Erode, Tamil Nadu.',
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Digital Marketing & SEO",
      "provider": {
        "@type": "Organization",
        "name": "DASA TECH"
      },
      "serviceType": "Digital Marketing",
      "areaServed": "Erode, Tamil Nadu, India",
      "description": "Comprehensive digital marketing company offering Technical SEO, Local SEO, Social Media Marketing, and AI Search Optimization."
    }
  });

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-mono mb-6 font-bold">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span>DATA-DRIVEN GROWTH</span>
            </div>
            
            <TextLineReveal
              as="h1"
              lines={['Digital Marketing &', 'SEO Services']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />
            
            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              We are a leading digital marketing company in Erode, Tamil Nadu. We don't just run ads; we architect highly technical SEO campaigns, AI search optimization strategies, and robust digital branding to maximize your ROI.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <PillButton to="/contact" variant="primary" arrow="right" size="lg">
                Talk to DASA TECH
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-orange-700 font-bold uppercase tracking-wider">
                    Performance Metrics
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Organic Traffic</div>
                  <div className="text-xl font-bold text-emerald-600">+350% Avg</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Search Visibility</div>
                  <div className="text-xl font-bold text-orange-600">Page #1</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Our Digital Marketing Services</h2>
            <p className="text-slate-600">
              Engineered for measurable results. We blend technical web development expertise with deep marketing analytics.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal delay={100}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full hover:border-orange-500/30 hover:shadow-md transition-all">
              <Search className="w-10 h-10 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">Technical SEO</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Core Web Vitals optimization, schema.org structured data, canonical mapping, and indexability fixes to ensure search engines crawl your site perfectly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full hover:border-blue-500/30 hover:shadow-md transition-all">
              <Target className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">Local SEO & GMB</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Dominate local searches in Erode, Tiruppur, Coimbatore, and across Tamil Nadu. We optimize your Google My Business for maximum footfall and local queries.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm h-full hover:border-indigo-500/30 hover:shadow-md transition-all">
              <BarChart className="w-10 h-10 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 font-display">AI Search Optimization</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Prepare your brand for ChatGPT, Perplexity, and Google Gemini. We structure your content so AI engines understand and recommend your business.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-orange-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Ready to Dominate Search Rankings?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Contact us for a comprehensive technical SEO audit and digital strategy session.
          </p>
          <PillButton to="/contact" variant="primary" arrow="up-right" size="lg">
            Discuss Your Digital Strategy
          </PillButton>
        </div>
      </section>
    </div>
  )
}
