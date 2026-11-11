import React from 'react'
import { MapPin, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from './Router'
import SignalBrandIcon from './SignalBrandIcon'
import dasaWordmark from '../assets/dasa-wordmark.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#080D1A] text-slate-400 border-t border-white/10 pt-16 pb-10 select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* 4 Clean Columns matching reference design exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: DASA TECH Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center group select-none">
              <img
                src={dasaWordmark}
                alt="DASA TECH"
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_14px_rgba(235,110,40,0.3)] group-hover:scale-105 transition-transform"
              />
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Engineering proprietary enterprise software, real-time AI computer vision, industrial workflow automation, and tailored digital solutions.
            </p>

            {/* Social Pill Icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/jeyawin-d/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://signal.me/#u/dasatech.99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Signal"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#3A76F0] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                title="Connect on Signal: @dasatech.99"
              >
                <SignalBrandIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: SERVICES (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              SERVICES
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li>
                <Link to="/services/custom-erp" className="hover:text-white transition-colors duration-200">
                  Custom ERP Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-white transition-colors duration-200">
                  AI &amp; Computer Vision
                </Link>
              </li>
              <li>
                <Link to="/services/iot-solutions" className="hover:text-white transition-colors duration-200">
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link to="/services/web-mobile" className="hover:text-white transition-colors duration-200">
                  Web &amp; Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services/software-development" className="hover:text-white transition-colors duration-200">
                  Cloud &amp; DevOps
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-white transition-colors duration-200">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: COMPANY (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li>
                <Link to="/about" className="hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors duration-200">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              CONTACT
            </h4>
            <ul className="space-y-3.5 text-sm font-normal">
              <li>
                <a
                  href="https://signal.me/#u/dasatech.99"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <SignalBrandIcon className="w-4 h-4 text-[#3A76F0] shrink-0 group-hover:scale-110 transition-transform" />
                  <span>@dasatech.99 (Signal)</span>
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                >
                  <ArrowRight className="w-4 h-4 text-[#38BDF8] shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span>Consultation Portal</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>Erode, Tamil Nadu, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Centered Copyright Bar matching reference exactly */}
        <div className="border-t border-white/10 pt-8 text-center text-xs text-slate-400 font-normal">
          <p>
            &copy; {currentYear} DASA TECH. All rights reserved.{' '}
            <Link to="/privacy" className="hover:text-white underline underline-offset-4 transition-colors">
              Privacy Policy
            </Link>
            {' '}&amp;{' '}
            <Link to="/terms" className="hover:text-white underline underline-offset-4 transition-colors">
              Terms of Services
            </Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
