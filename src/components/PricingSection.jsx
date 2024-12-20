'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FiCheck } from 'react-icons/fi'
import {useToast, toast } from "../components/ui/use-toast"

export default function PricingSection({ handleNavigation }) {
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

  const plans = [
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
          {plans.map((plan, index) => (
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
                  <Button 
                    className="w-full bg-violet-600 hover:bg-violet-700"
                    onClick={() => {
                      toast.success(`Selected ${plan.name} plan`)
                      handleNavigation('/signup')
                    }}
                  >
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
}

