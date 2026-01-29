'use client'

import { motion } from 'framer-motion'
import { Star, Shield, Heart } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-amber-50" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 font-medium text-sm mb-6">
              <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
              Rated 5 Stars by 500+ Happy Pet Parents
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 leading-tight mb-6">
              Where Every Pup Gets the{' '}
              <span className="text-orange-600">Royal Treatment</span>
            </h1>

            <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
              Premium dog boarding, daycare, and grooming services. Your furry
              friend deserves a vacation too — with 24/7 care, spacious play areas,
              and endless belly rubs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#booking"
                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full text-center transition-all hover:shadow-lg hover:shadow-orange-200"
              >
                Book Your Stay
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-orange-200 hover:border-orange-300 text-zinc-700 font-semibold rounded-full text-center transition-colors"
              >
                Explore Services
              </a>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-zinc-600">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Vet on Call 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-600">
                <Star className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium">Certified Staff</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="text-[180px] leading-none">🐕</div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <div className="font-bold text-zinc-900">10,000+</div>
                  <div className="text-sm text-zinc-500">Happy Stays</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <div className="text-sm text-zinc-600 font-medium">&quot;Best boarding ever!&quot;</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
