'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"

export default function TeamSection() {
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

  const teamMembers = [
    { name: "Alice Johnson", role: "CEO & Founder", image: "/placeholder.svg" },
    { name: "Bob Smith", role: "CTO", image: "/placeholder.svg" },
    { name: "Carol Williams", role: "Head of Product", image: "/placeholder.svg" },
    { name: "David Brown", role: "Lead Developer", image: "/placeholder.svg" },
    { name: "Eva Martinez", role: "UX Designer", image: "/placeholder.svg" },
    { name: "Frank Lee", role: "Customer Success Manager", image: "/placeholder.svg" }
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
          {teamMembers.map((member, index) => (
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
}