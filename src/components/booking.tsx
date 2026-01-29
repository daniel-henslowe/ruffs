'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Dog, Clock, Send, CheckCircle } from 'lucide-react'

const services = [
  'Overnight Boarding',
  'Doggy Daycare',
  'Grooming & Spa',
  'Bath & Brush',
]

export function Booking() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    ownerName: '',
    email: '',
    phone: '',
    dogName: '',
    breed: '',
    service: '',
    startDate: '',
    endDate: '',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to a backend or booking service
    console.log('Booking submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-gradient-to-br from-orange-500 to-amber-500">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-12"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Booking Request Received!</h3>
            <p className="text-zinc-600 text-lg mb-6">
              Thanks for choosing Ruffs! We&apos;ll review your request and contact you within 24 hours to confirm your booking.
            </p>
            <p className="text-zinc-500">
              Check your email at <strong>{formData.email}</strong> for updates.
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-orange-500 to-amber-500">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-orange-100 font-semibold text-sm uppercase tracking-wider">Book Now</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Reserve Your Pup&apos;s Stay
          </h2>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll get back to you within 24 hours to confirm your booking.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Owner Info */}
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Your Name</label>
              <input
                type="text"
                name="ownerName"
                required
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* Dog Info */}
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">
                <Dog className="w-4 h-4 inline mr-1" />
                Dog&apos;s Name
              </label>
              <input
                type="text"
                name="dogName"
                required
                value={formData.dogName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Max"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Breed</label>
              <input
                type="text"
                name="breed"
                required
                value={formData.breed}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Golden Retriever"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                Service
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                required
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                required
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-zinc-700 mb-2">Special Requests or Notes</label>
            <textarea
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Any special dietary needs, medications, or preferences we should know about?"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 text-lg"
          >
            <Send className="w-5 h-5" />
            Submit Booking Request
          </button>
        </motion.form>
      </div>
    </section>
  )
}
