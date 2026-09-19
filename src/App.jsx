import React from 'react'
import { Router, Route } from './components/Router'
import ScrollToTop from './components/ScrollToTop'
import DasaAiChatbot from './components/DasaAiChatbot'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { SmoothScrollProvider } from './components/SmoothScroll'

import HomePage from './pages/HomePage'
import HomeAutomationPage from './pages/HomeAutomationPage'
import IndustrialAutomationPage from './pages/IndustrialAutomationPage'
import AiSolutionsPage from './pages/AiSolutionsPage'
import EcommercePage from './pages/EcommercePage'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopmentPage'
import RndPage from './pages/RndPage'
import ErpPage from './pages/ErpPage'
import EmsPage from './pages/EmsPage'
import IotPage from './pages/IotPage'
import ServicesPage from './pages/ServicesPage'
import ProductsPage from './pages/ProductsPage'
import AutomationsPage from './pages/AutomationsPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import TeamMemberProfilePage from './pages/TeamMemberProfilePage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsPage from './pages/TermsPage'
import SecurityPage from './pages/SecurityPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'

export default function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollToTop />
        <div className="font-body min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-900 flex flex-col justify-between relative selection:bg-blue-600 selection:text-white">
          <Nav />

          <div className="flex-grow">
            <Route path="/" component={HomePage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/services/:serviceId" component={ServiceDetailPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/products/:productId" component={ProductDetailPage} />
            <Route path="/products/erp" component={ErpPage} />
            <Route path="/products/ems" component={EmsPage} />
            <Route path="/products/iot" component={IotPage} />
            <Route path="/automations" component={AutomationsPage} />
            <Route path="/automations/:automationId" component={AutomationsPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/projects/:projectId" component={ProjectDetailPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/careers" component={CareersPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/team" component={TeamMemberProfilePage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/security" component={SecurityPage} />
          </div>

          {/* Floating DASA AI Assistant Chatbot with integrated scroll-to-top */}
          <DasaAiChatbot />

          <Footer />
        </div>
      </SmoothScrollProvider>
    </Router>
  )
}
