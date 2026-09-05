import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Building2, Briefcase, Hotel, Factory, Sprout, Snowflake,
  ArrowLeft
} from 'lucide-react'
import { Link, usePath } from '../Router'
import CTA from '../CTA'

// Modular, Deep, 4-Page Dedicated Sector Views
import HomeAutomationView from './automations/HomeAutomationView'
import HospitalAutomationView from './automations/HospitalAutomationView'
import OfficeAutomationView from './automations/OfficeAutomationView'
import HotelAutomationView from './automations/HotelAutomationView'
import IndustrialAutomationView from './automations/IndustrialAutomationView'
import AgriAutomationView from './automations/AgriAutomationView'
import ColdStorageAutomationView from './automations/ColdStorageAutomationView'

export const SECTORS = [
  {
    id: 'home',
    label: 'Home Automation',
    icon: Home,
    color: '#EA580C',
    lightBg: '#FFF7ED',
    badge: 'Residential & Luxury Living Architecture'
  },
  {
    id: 'hospital',
    label: 'Hospital Automation',
    icon: Building2,
    color: '#059669',
    lightBg: '#ECFDF5',
    badge: 'NABH & Critical Care Patient Life-Safety'
  },
  {
    id: 'office',
    label: 'Office Automation',
    icon: Briefcase,
    color: '#7C3AED',
    lightBg: '#FAF5FF',
    badge: 'Commercial Campus & Enterprise Energy BMS'
  },
  {
    id: 'hotel',
    label: 'Hotel Automation (GRMS)',
    icon: Hotel,
    color: '#D97706',
    lightBg: '#FFFBEB',
    badge: '5-Star Luxury Hospitality & Guest Experience'
  },
  {
    id: 'industrial',
    label: 'Industrial Automation',
    icon: Factory,
    color: '#C2410C',
    lightBg: '#FFF7ED',
    badge: 'Industry 4.0 SCADA & Touchless NFC Shop Floor'
  },
  {
    id: 'agri',
    label: 'Agri Automation',
    icon: Sprout,
    color: '#65A30D',
    lightBg: '#F7FEE7',
    badge: 'Precision Smart Agriculture & Solar Pump Telemetry'
  },
  {
    id: 'cold-storage',
    label: 'Cold Storage Automation',
    icon: Snowflake,
    color: '#0284C7',
    lightBg: '#F0F9FF',
    badge: 'Sub-Zero Cryogenic & Zero-Spoilage Cold Chain'
  }
]

export default function AutomationDetailProductView({ automationId: propId }) {
  const { path, navigate } = usePath()
  
  const currentPathId = path.replace('/products/', '').replace('/products', '').replace(/\/$/, '')
  const initialId = propId || currentPathId || 'home'
  const cleanId = initialId.replace('-automation', '')
  const [activeSectorId, setActiveSectorId] = useState(cleanId || 'home')

  useEffect(() => {
    if (cleanId && SECTORS.some(s => s.id === cleanId)) {
      setActiveSectorId(cleanId)
    }
  }, [cleanId])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [activeSectorId])

  const currentSector = SECTORS.find(s => s.id === activeSectorId) || SECTORS[0]

  const handleSelectSector = (id) => {
    setActiveSectorId(id)
    navigate(`/products/${id}-automation`)
  }

  return (
    <div className="pt-24 min-h-screen bg-[#FCFBFF] text-[#0F172A] relative overflow-hidden select-none">
      
      {/* Universal Top Switcher Bar */}
      <section className="border-b border-slate-200/90 bg-white/95 backdrop-blur-md sticky top-16 z-30 shadow-2xs">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-3 space-y-3">
          
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to All Products &amp; Automations</span>
            </Link>

            <div
              className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1 rounded-full border shadow-2xs transition-colors"
              style={{
                backgroundColor: currentSector.lightBg,
                color: currentSector.color,
                borderColor: `${currentSector.color}30`
              }}
            >
              <currentSector.icon className="w-3.5 h-3.5" />
              <span>Sector: {currentSector.label}</span>
            </div>
          </div>

          {/* 7 Distinct Color Switcher Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SECTORS.map((sec) => {
              const isSelected = sec.id === activeSectorId
              const SecIcon = sec.icon

              return (
                <button
                  key={sec.id}
                  onClick={() => handleSelectSector(sec.id)}
                  style={{
                    backgroundColor: isSelected ? sec.color : 'white',
                    color: isSelected ? 'white' : '#334155',
                    borderColor: isSelected ? sec.color : '#E2E8F0',
                    boxShadow: isSelected ? `0 4px 14px 0 ${sec.color}30` : undefined
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 border"
                >
                  <SecIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>{sec.label}</span>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* Main Dynamic View Content — Entirely Unique Layout & Light Theme per Vertical */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {activeSectorId === 'home' && <HomeAutomationView />}
        {activeSectorId === 'hospital' && <HospitalAutomationView />}
        {activeSectorId === 'office' && <OfficeAutomationView />}
        {activeSectorId === 'hotel' && <HotelAutomationView />}
        {activeSectorId === 'industrial' && <IndustrialAutomationView />}
        {activeSectorId === 'agri' && <AgriAutomationView />}
        {activeSectorId === 'cold-storage' && <ColdStorageAutomationView />}
      </div>

      <CTA />

    </div>
  )
}
