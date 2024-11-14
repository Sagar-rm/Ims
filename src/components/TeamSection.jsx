'use client'

import { motion } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { useState } from 'react'

export default function TeamSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const isometricVariants = {
    hidden: { rotateX: 45, rotateZ: -45, opacity: 0, scale: 0.8 },
    visible: {
      rotateX: 45,
      rotateZ: -45,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } }
  }

  const cardVariants = {
    hover: { y: -10, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", transition: { duration: 0.3 } }
  }

  const teamMembers = [
    { name: "Alice Johnson", role: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
    { name: "Bob Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" }
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-gray-300 text-xl max-w-2xl mx-auto"
          >
            The passionate individuals behind IMS
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-12"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={isometricVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div variants={cardVariants}>
                <Card className="overflow-hidden bg-gray-800/50 backdrop-blur-xl border-gray-700 w-64">
                  <div className="p-6">
                    <motion.div
                      className="mb-4 relative"
                      variants={imageVariants}
                    >
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto"
                      />
                      <motion.div
                        className="absolute inset-0 bg-blue-500 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={hoveredIndex === index ? { scale: 1.2, opacity: 0.3 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-semibold mb-1 text-white"
                      variants={fadeUpVariants}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-300"
                      variants={fadeUpVariants}
                    >
                      {member.role}
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}