import React, { useEffect } from 'react'
import { usePath } from '../components/Router'
import PharmacyErpProductView from '../components/products/PharmacyErpProductView'
import FinanceAccountingProductView from '../components/products/FinanceAccountingProductView'
import FactoryErpProductView from '../components/products/FactoryErpProductView'
import WarehouseErpProductView from '../components/products/WarehouseErpProductView'
import EcommerceEngineProductView from '../components/products/EcommerceEngineProductView'
import SnapShareSocialProductView from '../components/products/SnapShareSocialProductView'
import SchoolErpProductView from '../components/products/SchoolErpProductView'
import IotTelemetryProductView from '../components/products/IotTelemetryProductView'
import HomeAutomationProductView from '../components/products/HomeAutomationProductView'
import AgriAutomationProductView from '../components/products/AgriAutomationProductView'
import AutomationDetailProductView from '../components/products/AutomationDetailProductView'

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA CATALOG & DELEGATED PRODUCT VIEWS
// ─────────────────────────────────────────────────────────────
export const PRODUCT_DATA = {
  'pharmacy-erp': { name: 'DASA MedFlow ERP', category: 'Healthcare & Pharma' },
  'finance-accounting': { name: 'DASA LedgerFlow & GST Finance', category: 'Finance & Accounting' },
  'factory-erp': { name: 'IoT Textile ERP', category: 'Textile & Garment IoT' },
  'warehouse-erp': { name: 'DASA WMS Hub', category: 'Logistics & Supply Chain' },
  'ecommerce-engine': { name: 'DASA CommerceEngine', category: 'E-Commerce & Retail' },
  'snapshare-social': { name: 'DASA SnapFlow Studio AI', category: 'Creative Media & AI Studio' },
  'school-erp': { name: 'DASA EduCore Campus ERP', category: 'Education & Academics' },
  'iot-telemetry': { name: 'DASA EdgeMesh IoT', category: 'Smart Automation Solutions' },
  'home-automation': { name: 'DASA SmartHome Automation', category: 'Smart Automation Solutions' },
  'hospital-automation': { name: 'DASA Hospital & Clinical Automation', category: 'Smart Automation Solutions' },
  'office-automation': { name: 'DASA Office & Workplace Automation', category: 'Smart Automation Solutions' },
  'hotel-automation': { name: 'DASA Hotel Automation (GRMS)', category: 'Smart Automation Solutions' },
  'industrial-automation': { name: 'DASA Industrial Automation & Plant Telemetry', category: 'Smart Automation Solutions' },
  'agri-automation': { name: 'DASA AgriSmart Automation', category: 'Smart Automation Solutions' },
  'cold-storage-automation': { name: 'DASA Cold Storage & Refrigeration Automation', category: 'Smart Automation Solutions' }
}

export default function ProductDetailPage() {
  const { path } = usePath()

  // Extract raw ID from route e.g. /products/pharmacy-erp
  const productId = path.replace('/products/', '').replace('/products', '').replace(/\/$/, '')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [productId])

  // Route to the dedicated, non-repetitive product visual component
  switch (productId) {
    case 'pharmacy-erp':
      return <PharmacyErpProductView />
    case 'finance-accounting':
      return <FinanceAccountingProductView />
    case 'factory-erp':
      return <FactoryErpProductView />
    case 'warehouse-erp':
      return <WarehouseErpProductView />
    case 'ecommerce-engine':
      return <EcommerceEngineProductView />
    case 'snapshare-social':
      return <SnapShareSocialProductView />
    case 'school-erp':
      return <SchoolErpProductView />
    case 'iot-telemetry':
      return <IotTelemetryProductView />
    case 'home-automation':
      return <AutomationDetailProductView automationId="home" />
    case 'hospital-automation':
      return <AutomationDetailProductView automationId="hospital" />
    case 'office-automation':
      return <AutomationDetailProductView automationId="office" />
    case 'hotel-automation':
      return <AutomationDetailProductView automationId="hotel" />
    case 'industrial-automation':
      return <AutomationDetailProductView automationId="industrial" />
    case 'agri-automation':
      return <AutomationDetailProductView automationId="agri" />
    case 'cold-storage-automation':
      return <AutomationDetailProductView automationId="cold-storage" />
    default:
      return <PharmacyErpProductView />
  }
}
