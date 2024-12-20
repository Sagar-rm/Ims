'use client'

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HomeSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorks'
import PricingSection from '@/components/PricingSection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'
import Login from './components/auth/login'
import SignUp from './components/auth/signup'
import AdminDashboard from './components/Admin/admin-dashboard'
import Demo from './demo'


const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-violet-600 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

const MainContent = () => {
  const [currentSection, setCurrentSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.slice(1)
    setCurrentSection(path || 'home')
  }, [location])

  const renderSection = () => {
    switch (currentSection) {
      case 'features':
        return <FeaturesSection />
      case 'how-it-works':
        return <HowItWorksSection />
      case 'pricing':
        return <PricingSection />
      case 'team':
        return <TeamSection />
      default:
        return <HomeSection />
    }
  }

  return (
    <>
      <Navbar setCurrentSection={setCurrentSection} />
      <main className="pt-16">
        {renderSection()}
      </main>
    </>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <ScrollProgressBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/features" element={<MainContent />} />
          <Route path="/how-it-works" element={<MainContent />} />
          <Route path="/pricing" element={<MainContent />} />
          <Route path="/team" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/demo" element={<Demo />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}