'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    dog: 'Max, Golden Retriever',
    text: 'Ruffs has been a game-changer for us! Max used to have terrible separation anxiety, but now he gets SO excited when we pull into the parking lot. The staff truly loves what they do.',
    rating: 5,
  },
  {
    name: 'James & Emily Chen',
    dog: 'Luna, French Bulldog',
    text: 'We were nervous leaving Luna for the first time, but the daily photo updates put our minds at ease. She came home happy, tired, and smelling amazing from her spa day!',
    rating: 5,
  },
  {
    name: 'Michael Torres',
    dog: 'Rocky & Bella, Pit Bulls',
    text: 'Finding a place that would take both my dogs was hard until we found Ruffs. They accommodate Rocky\'s special diet and give Bella extra playtime. Absolutely wonderful!',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mt-2 mb-4">
            Loved by Pups & Parents
          </h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the families who trust us
            with their beloved fur babies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-orange-200 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-zinc-700 mb-6 leading-relaxed relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <div className="font-semibold text-zinc-900">{testimonial.name}</div>
                <div className="text-sm text-zinc-500">{testimonial.dog}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
