import React from 'react'
import { Sparkles, Brain, Eye, Cpu, MessageSquare, LineChart, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import TextLineReveal from '../components/TextLineReveal'
import PillButton from '../components/PillButton'
import AiVisionSimulator from '../components/AiVisionSimulator'

export default function AiSolutionsPage() {
  const aiOfferings = [
    {
      icon: Brain,
      title: 'Custom Machine Learning Models',
      desc: 'Supervised, unsupervised, and deep learning neural architectures built and fine-tuned for enterprise classification and decision support.'
    },
    {
      icon: Eye,
      title: 'Computer Vision Systems',
      desc: 'Real-time object detection, optical character recognition (OCR), and automated quality control vision inspection.'
    },
    {
      icon: MessageSquare,
      title: 'Generative AI & LLM Integration',
      desc: 'Custom RAG (Retrieval-Augmented Generation) pipelines, private domain LLMs, intelligent document processing, and AI assistants.'
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics & Forecasting',
      desc: 'Time-series forecasting for supply chain demand, financial risk modeling, churn prediction, and predictive inventory optimization.'
    },
    {
      icon: Cpu,
      title: 'Intelligent Robotic Process Automation (RPA)',
      desc: 'Combine AI decision engines with automated software bots to streamline complex, repetitive enterprise workflows.'
    },
    {
      icon: Sparkles,
      title: 'Edge AI & Embedded Inference',
      desc: 'Deploy lightweight quantized neural networks directly on microcontrollers and edge hardware (NVIDIA Jetson, Raspberry Pi) for low-latency local processing.'
    }
  ]

  return (
    <div className="pt-24 min-h-screen bg-white text-slate-900 relative overflow-hidden">

      {/* Hero Section */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-6 font-bold">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>NEXT-GENERATION ARTIFICIAL INTELLIGENCE</span>
            </div>

            <TextLineReveal
              as="h1"
              lines={['AI-Powered', 'Applications & Systems']}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-slate-900 font-display"
            />

            <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
              We design, build, and integrate custom artificial intelligence solutions—from proprietary machine learning algorithms and computer vision pipelines to enterprise LLMs—to solve complex business challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <PillButton
                to="/contact"
                variant="primary"
                arrow="right"
                size="lg"
              >
                Consult AI Architects
              </PillButton>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative rounded-3xl p-8 border border-slate-200 shadow-md bg-slate-50 space-y-6 text-slate-900">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
                    Neural Inference Engine
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[11px] font-bold">
                  Latency: 2.4ms
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Model Precision</div>
                  <div className="text-xl font-bold text-slate-900">99.8% FP16</div>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-2xs">
                  <div className="text-slate-500">Active Pipeline</div>
                  <div className="text-xl font-bold text-blue-600">RAG + Vision</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 font-mono text-xs shadow-2xs">
                <div className="flex justify-between text-slate-600">
                  <span>Throughput Rate:</span>
                  <span className="text-emerald-600 font-bold">12,400 Tokens / Sec</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Inference Acceleration:</span>
                  <span className="text-emerald-600 font-bold">GPU Tensor Core Encrypted</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive AI Vision & Inference Simulator */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        <Reveal>
          <AiVisionSimulator />
        </Reveal>
      </section>

      {/* Offerings Grid */}
      <section className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Comprehensive AI Capabilities</h2>
            <p className="text-slate-600">
              From raw data engineering and model training to deployment and continuous MLOps monitoring.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiOfferings.map((off, i) => {
            const Icon = off.icon
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl p-8 border border-slate-200 hover:border-blue-300 bg-white transition duration-200 h-full flex flex-col justify-between group shadow-sm">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 text-blue-600 group-hover:scale-105 transition duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{off.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{off.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold">
                    <span>Neural Model Ready</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 font-display">Ready to Integrate AI Into Your Workflow?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 font-medium">
            Schedule an architectural discovery session with our machine learning engineers to build your custom AI roadmap.
          </p>
          <PillButton
            to="/contact"
            variant="primary"
            arrow="up-right"
            size="lg"
          >
            Schedule AI Architecture Call
          </PillButton>
        </div>
      </section>
    </div>
  )
}
