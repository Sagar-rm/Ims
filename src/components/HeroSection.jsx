'use client'

import { useRef } from 'react'
import { useState, useEffect } from 'react'

import { motion, useInView ,useScroll , useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FiArrowRight, FiUsers, FiBarChart, FiZap, FiCheck, FiStar ,FiClipboard } from 'react-icons/fi'

export default function HomeSection() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }


  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
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

  const heroAnimationVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <>
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      >
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={heroAnimationVariants}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-8"
              variants={fadeUpVariants}
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                Internship Management
              </span>
              {' '}Experience
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
              variants={fadeUpVariants}
            >
              Streamline your internship program with AI-powered tools, real-time analytics,
              and seamless collaboration features.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeUpVariants}
            >
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-lg h-12 px-8"
              >
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-lg h-12 px-8"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating Cards */}
          <div className="mt-20 relative">
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
              animate={floatingAnimation}
            >
              <Card className="absolute top-0 left-0 w-64 h-48 bg-gray-800/50 backdrop-blur-xl border-gray-700 transform -rotate-12 translate-x-20">
                <div className="p-6">
                  <FiZap className="text-violet-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-sm text-gray-400">Intelligent recommendations for better decision making</p>
                </div>
              </Card>
              
              <Card className="absolute top-20 right-0 w-64 h-48 bg-gray-800/50 backdrop-blur-xl border-gray-700 transform rotate-12 translate-x-10">
                <div className="p-6">
                  <FiUsers className="text-fuchsia-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Team Collaboration</h3>
                  <p className="text-sm text-gray-400">Work together seamlessly across departments</p>
                </div>
              </Card>
              
              <Card className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-48 bg-gray-800/50 backdrop-blur-xl border-gray-700">
                <div className="p-6">
                  <FiBarChart className="text-emerald-500 w-8 h-8 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-sm text-gray-400">Track performance metrics at a glance</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/30 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Features Preview Section */}
      {/* Features Preview */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
            {[
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
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-lg"
              onClick={() => setCurrentSection('features')}
            >
              Explore All Features
              <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>


      {/* How It Works Preview Section */}{/* How It Works Preview */}
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
            whileInView="visible"
            viewport={{ once: true }}
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

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              { step: 1, title: "Sign Up", description: "Create your account and set up your organization profile" },
              { step: 2, title: "Add Interns", description: "Easily onboard and manage your interns in one place" },
              { step: 3, title: "Track Progress", description: "Monitor performance and provide feedback in real-time" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-lg"
              onClick={() => setCurrentSection('how-it-works')}
            >
              Learn More
              <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>


      {/* Stats Section */}
<section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
    >
      {[
        { value: "10k+", label: "Active Users" },
        { value: "500+", label: "Companies" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "24/7", label: "Support" },
      ].map((stat, index) => (
        <div key={index} className="p-6 bg-gray-800/50 rounded-lg backdrop-blur-xl">
          <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  </div>
</section>

      {/* CTA Section */}
<section className="py-20 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeUpVariants}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Transform Your Internship Program?
      </h2>
      <p className="text-gray-400 text-xl mb-8">
        Join thousands of companies already using IMS to streamline their internship management.
      </p>
      <Button
        size="lg"
        className="bg-violet-600 hover:bg-violet-700 text-lg h-12 px-8"
      >
        Get Started Now
        <FiArrowRight className="ml-2" />
      </Button>
    </motion.div>
  </div>
</section>
    </>
  )
}