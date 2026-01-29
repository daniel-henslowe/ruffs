'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const features = [
  '24/7 on-site staff and veterinary support',
  'Spacious indoor and outdoor play areas',
  'Individual attention and daily updates',
  'Climate-controlled, clean facilities',
  'Webcam access to check on your pup',
  'All staff certified in pet first aid',
]

export function About() {
  return (
    <section id="about" className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-400 to-amber-400 rounded-2xl aspect-square flex items-center justify-center text-8xl">
                  🐕‍🦺
                </div>
                <div className="bg-gradient-to-br from-amber-300 to-orange-300 rounded-2xl aspect-video flex items-center justify-center text-6xl">
                  🦮
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-orange-300 to-rose-300 rounded-2xl aspect-video flex items-center justify-center text-6xl">
                  🐶
                </div>
                <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl aspect-square flex items-center justify-center text-8xl">
                  🐾
                </div>
              </div>
            </div>
            {/* Stats badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">8+</div>
                <div className="text-sm text-zinc-500">Years</div>
              </div>
              <div className="text-center border-x border-zinc-200 px-8">
                <div className="text-3xl font-bold text-orange-600">10k+</div>
                <div className="text-sm text-zinc-500">Happy Dogs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">50+</div>
                <div className="text-sm text-zinc-500">Staff</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">About Ruffs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-2 mb-6">
              A Home Away From Home
            </h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              Founded in 2018 by lifelong dog lovers, Ruffs was born from a simple
              belief: every dog deserves exceptional care when their humans are away.
              What started as a small boarding facility has grown into a full-service
              pet resort.
            </p>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Our mission is to provide a safe, fun, and loving environment where
              dogs can play, rest, and thrive. We treat every pup like family — because
              to us, they are.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-zinc-700">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
