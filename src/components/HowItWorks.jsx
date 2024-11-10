'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FiArrowRight } from 'react-icons/fi'

export default function HowItWorksSection() {
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

  const liquidVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const steps = [
    { step: 1, title: "Sign Up", description: "Create your account and set up your organization profile" },
    { step: 2, title: "Add Interns", description: "Easily onboard and manage your interns in one place" },
    { step: 3, title: "Define Projects", description: "Create and assign projects to your interns" },
    { step: 4, title: "Track Progress", description: "Monitor performance and provide feedback in real-time" },
    { step: 5, title: "Generate Reports", description: "Get insights and analytics on your internship program" }
  ]

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        variants={liquidVariants}
        initial="initial"
        animate="animate"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C30,20 70,20 100,0 L100,100 L0,100 Z"
            fill="url(#liquid-gradient)"
            vectorEffect="non-scaling-stroke"
          />
          <defs>
            <linearGradient id="liquid-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(124, 58, 237, 0.1)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="container mx-auto px-4 relative">
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
            How It Works
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Simplify your internship management process in just a few steps
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-24 h-24 rounded-full bg-violet-600 flex items-center justify-center text-3xl font-bold">
                {item.step}
              </div>
              <div className="md:flex-1">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-lg"
          >
            Learn More
            <FiArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}