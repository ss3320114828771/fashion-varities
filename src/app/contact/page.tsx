'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Address</p>
                    <p className="text-white font-semibold">123 Fashion Street, Style City</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Phone</p>
                    <p className="text-white font-semibold">+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white font-semibold">sajid.syed@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urdu Contact Info */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 urdu-text text-right">
                رابطہ کی معلومات
              </h3>
              <div className="urdu-text text-right text-white space-y-3">
                <p>ایڈمنسٹریٹر: حافظ ساجد سید</p>
                <p>ای میل: sajid.syed@gmail.com</p>
                <p>فون: +1 234 567 890</p>
                <p>پتہ: 123 فیشن اسٹریٹ، اسٹائل سٹی</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-4 border border-white/20 h-[200px] flex items-center justify-center">
              <p className="text-gray-400">Google Maps Integration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}