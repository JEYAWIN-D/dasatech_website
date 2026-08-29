import React from 'react'
import { Code2, Server, Smartphone, Cloud, Database, ShieldCheck } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'

export default function SoftwareDevelopmentPage() {
  const devServices = [
    {
      icon: Code2,
      title: 'Custom Web Application Development',
      desc: 'Bespoke, enterprise-grade React / Next.js web applications engineered for scalability, sub-second latency, and clean UI.'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      desc: 'Flutter and React Native iOS & Android apps providing smooth performance, offline data sync, and sensor integration.'
    },
    {
      icon: Server,
      title: 'Microservices & API Infrastructure',
      desc: 'RESTful & GraphQL API gateway development, event-driven architectures, and high-throughput backend services.'
    },
    {
      icon: Cloud,
      title: 'Cloud Native & DevOps Engineering',
      desc: 'AWS and Google Cloud infrastructure setup, Docker containerization, Kubernetes orchestration, and CI/CD pipelines.'
    },
    {
      icon: Database,
      title: 'Database & Data Engineering',
      desc: 'High-availability relational (PostgreSQL) and NoSQL (Redis) databases with automated replication.'
    },
    {
      icon: ShieldCheck,
      title: 'Legacy System Modernization',
      desc: 'Refactor monoliths into modular cloud microservices without service interruption or data loss.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>FULL-CYCLE CUSTOM SOFTWARE ENGINEERING</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['Custom Software', 'Development & Engineering']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
              We engineer mission-critical software solutions tailored precisely to your business requirements. From scalable web and mobile applications to cloud microservices and legacy refactoring, our team delivers maintainable, secure code.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Discuss Your Project
              </PillButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devServices.map((item, idx) => {
            const Icon = item.icon
            return (
              <Reveal key={idx}>
                <div className="p-8 rounded-3xl border border-slate-200 bg-white hover:border-blue-300 transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 font-display">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 text-center">
        <div className="p-12 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Have a Custom Software Vision?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Partner with DASA TECH to build robust, scalable software engineered for long-term operational success.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Schedule Technical Scoping Call
          </PillButton>
        </div>
      </section>
    </div>
  )
}
