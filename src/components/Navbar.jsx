'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ setCurrentSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Features', 'How It Works', 'Pricing', 'Team']

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setCurrentSection('home')}
          >
            IMS
          </motion.a>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentSection(item.toLowerCase().replace(' ', '-'))
                }}
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
              </motion.a>
            ))}
            <motion.button
              className="px-6 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
          <motion.button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-800 border-b border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-4 py-3 text-gray-300 hover:bg-gray-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  setCurrentSection(item.toLowerCase().replace(' ', '-'))
                  setIsMenuOpen(false)
                }}
              >
                {item}
              </a>
            ))}
            <div className="p-4">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}