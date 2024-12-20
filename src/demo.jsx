'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  FiUsers,
  FiClipboard,
  FiBarChart,
  FiMenu,
  FiX,
  FiArrowRight,
  FiCheck,
  FiStar,
  FiZap,
  FiLayers,
  FiCpu,
  FiShield
} from 'react-icons/fi'
// import Image from 'next/image'
import { TestimonialSlider } from './testimonial-slider'

export default function Component() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')
  
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const drawPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 }
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

  const isometricVariants = {
    hidden: { rotateX: 45, rotateZ: -45, opacity: 0 },
    visible: {
      rotateX: 45,
      rotateZ: -45,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const backgroundAnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2
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

  const renderSection = () => {
    switch (currentSection) {
      case 'features':
        return renderFeaturesSection()
      case 'how-it-works':
        return renderHowItWorksSection()
      case 'pricing':
        return renderPricingSection()
      case 'team':
        return renderTeamSection()
      default:
        return renderHomeSection()
    }
  }

  const renderHomeSection = () => (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-violet-600/20 to-transparent"
          variants={backgroundAnimationVariants}
          initial="hidden"
          animate="visible"
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

      {/* How It Works Preview */}
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
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500+", label: "Companies" },
              { number: "10,000+", label: "Interns Managed" },
              { number: "98%", label: "Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-gray-400 text-xl max-w-2xl mx-auto"
            >
              Hear from companies that have transformed their internship programs with IMS
            </motion.p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Internship Program?
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-gray-400 text-xl mb-8"
            >
              Join thousands of companies already using IMS to streamline their processes
            </motion.p>
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-lg h-12 px-8"
                >
                  Get Started Now
                  <FiArrowRight className="ml-2" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 hover:bg-gray-800 text-lg h-12 px-8"
                >
                  Schedule Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )

  const renderFeaturesSection = () => (
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
          ].map((feature, index) => (
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

  const renderHowItWorksSection = () => (
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
          {[
            { step: 1, title: "Sign Up", description: "Create your account and set up your organization profile" },
            { step: 2, title: "Add Interns", description: "Easily onboard and manage your interns in one place" },
            { step: 3, title: "Define Projects", description: "Create and assign projects to your interns" },
            { step: 4, title: "Track Progress", description: "Monitor performance and provide feedback in real-time" },
            { step: 5, title: "Generate Reports", description: "Get insights and analytics on your internship program" }
          ].map((item, index) => (
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
      </div>
    </section>
  )

  const renderPricingSection = () => (
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
            Flexible Pricing Plans
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Choose the perfect plan for your organization's needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "$49",
              description: "Perfect for small teams",
              features: [
                "Up to 10 interns",
                "Basic reporting",
                "Email support",
                "Task management",
                "Performance tracking"
              ]
            },
            {
              name: "Professional",
              price: "$99",
              description: "Ideal for growing organizations",
              features: [
                "Up to 50 interns",
                "Advanced analytics",
                "Priority support",
                "Custom branding",
                "API access",
                "Integrations"
              ]
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large-scale operations",
              features: [
                "Unlimited interns",
                "Full API access",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced security features",
                "Onboarding assistance"
              ]
            }
          ].map((plan, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="relative overflow-hidden bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 to-fuchsia-600/10 opacity-50" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl font-normal text-gray-400">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-violet-600 hover:bg-violet-700">
                    Get Started
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  const renderTeamSection = () => (
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
            Meet Our Team
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            The passionate individuals behind IMS
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", role: "CEO & Founder", image: "/placeholder.svg" },
            { name: "Bob Smith", role: "CTO", image: "/placeholder.svg" },
            { name: "Carol Williams", role: "Head of Product", image: "/placeholder.svg" },
            { name: "David Brown", role: "Lead Developer", image: "/placeholder.svg" },
            { name: "Eva Martinez", role: "UX Designer", image: "/placeholder.svg" },
            { name: "Frank Lee", role: "Customer Success Manager", image: "/placeholder.svg" }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={isometricVariants}
            >
              <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-xl border-gray-700">
                <div className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navbar */}
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
              {['Features', 'How It Works', 'Pricing', 'Team'].map((item, index) => (
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
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-gray-800 border-b border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {['Features', 'How It Works', 'Pricing', 'Team'].map((item) => (
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

      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">
                IMS
              </h3>
              <p className="text-gray-400">
                Revolutionizing internship management for modern businesses
              </p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Case Studies", "Reviews"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Blog", "Press"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Support", "API", "Community"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} IMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

