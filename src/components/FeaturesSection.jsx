'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FiUsers, FiClipboard, FiBarChart, FiCheck, FiStar, FiZap, FiLayers, FiCpu, FiShield, FiArrowRight } from 'react-icons/fi'

export default function FeaturesSection() {
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const features = [
    {
      icon: FiUsers,
      title: "Smart Intern Tracking",
      description: "Monitor progress and performance with intelligent tracking systems"
    },
    {
      icon: FiClipboard,
      title: "Automated Workflows",
      description: "Streamline processes with customizable automation tools"
    },
    {
      icon: FiBarChart,
      title: "Advanced Analytics",
      description: "Get detailed insights with comprehensive reporting"
    },
    {
      icon: FiCheck,
      title: "Task Management",
      description: "Organize and prioritize work efficiently"
    },
    {
      icon: FiStar,
      title: "Performance Evaluation",
      description: "Assess and provide feedback systematically"
    },
    {
      icon: FiZap,
      title: "AI Recommendations",
      description: "Get smart suggestions for better outcomes"
    },
    {
      icon: FiLayers,
      title: "Custom Dashboards",
      description: "Create personalized views for different roles"
    },
    {
      icon: FiCpu,
      title: "Integration Ecosystem",
      description: "Connect with your favorite tools seamlessly"
    },
    {
      icon: FiShield,
      title: "Data Security",
      description: "Enterprise-grade security to protect sensitive information"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Powerful Features for Modern Teams
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Everything you need to manage your internship program effectively
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden group bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <feature.icon className="w-12 h-12 text-violet-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}