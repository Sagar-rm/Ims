import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "John Doe",
    role: "HR Manager",
    company: "Tech Corp",
    content: "IMS has revolutionized our internship program. It's now easier than ever to manage and track our interns' progress."
  },
  {
    name: "Jane Smith",
    role: "Internship Coordinator",
    company: "InnovateNow",
    content: "The analytics and reporting features have given us valuable insights into our internship program's effectiveness."
  },
  {
    name: "Mike Johnson",
    role: "CEO",
    company: "StartUp Inc",
    content: "IMS has helped us scale our internship program effortlessly. It's a game-changer for growing companies."
  }
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 p-6">
            <p className="text-lg mb-4">{testimonials[currentIndex].content}</p>
            <div>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-400">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-violet-600 rounded-full p-2"
        onClick={prevTestimonial}
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-violet-600 rounded-full p-2"
        onClick={nextTestimonial}
      >
        <FiChevronRight size={24} />
      </button>
    </div>
  )
}

