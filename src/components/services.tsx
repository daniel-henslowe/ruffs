'use client'

import { motion } from 'framer-motion'
import { Moon, Sun, Scissors, Bath, Utensils, Heart } from 'lucide-react'

const services = [
  {
    icon: Moon,
    title: 'Overnight Boarding',
    description: 'Comfortable private suites with cozy bedding, climate control, and bedtime snacks. Your pup will sleep like royalty.',
    price: 'From $55/night',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Sun,
    title: 'Doggy Daycare',
    description: 'Full days of supervised play, socialization, and exercise. Perfect for busy pet parents.',
    price: 'From $35/day',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Scissors,
    title: 'Grooming & Spa',
    description: 'Full-service grooming including baths, haircuts, nail trims, and teeth cleaning. Pamper your pooch!',
    price: 'From $45',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Bath,
    title: 'Bath & Brush',
    description: 'Quick refresh with a warm bath, blow dry, brush out, and ear cleaning. Fresh and fluffy!',
    price: 'From $30',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Utensils,
    title: 'Premium Meals',
    description: 'Gourmet, vet-approved meals with options for special diets and allergies. Yummy and healthy!',
    price: 'Included',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Heart,
    title: 'Special Care',
    description: 'Medication administration, senior dog care, and extra TLC for pups with special needs.',
    price: 'From $15/day',
    color: 'bg-red-100 text-red-600',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-2 mb-4">
            Everything Your Pup Needs
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            From overnight stays to spa days, we offer comprehensive care
            tailored to your dog&apos;s unique personality and needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-orange-50/50 hover:bg-white border border-orange-100 hover:border-orange-200 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-orange-100"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{service.title}</h3>
              <p className="text-zinc-600 mb-4 leading-relaxed">{service.description}</p>
              <div className="text-orange-600 font-semibold">{service.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
