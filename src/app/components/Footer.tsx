'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'DIRECTIONS', path: '/directions' },
    { name: 'CART', path: '/cart' },
  ]

  const customerLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'SHIPPING', path: '/shipping' },
    { name: 'RETURNS', path: '/returns' },
    { name: 'SIZE GUIDE', path: '/size-guide' },
    { name: 'PRIVACY POLICY', path: '/privacy' },
    { name: 'TERMS & CONDITIONS', path: '/terms' },
  ]

  const socialIcons = [
    { icon: '📘', name: 'Facebook', color: 'from-blue-600 to-blue-400' },
    { icon: '📷', name: 'Instagram', color: 'from-pink-500 to-yellow-500' },
    { icon: '🐦', name: 'Twitter', color: 'from-sky-400 to-blue-500' },
    { icon: '📱', name: 'TikTok', color: 'from-black to-gray-600' },
    { icon: '💼', name: 'LinkedIn', color: 'from-blue-700 to-blue-500' },
    { icon: '▶️', name: 'YouTube', color: 'from-red-600 to-red-400' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-black/90 to-gray-900/90 backdrop-blur-xl border-t border-white/10 pt-16 pb-8 overflow-hidden">
      
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info with Urdu Text */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-2">
                EcomRace
              </h3>
              <p className="text-sm text-gray-400 urdu-text text-right mt-2">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </p>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Premium cotton and lawn suits for every occasion. Quality and comfort guaranteed with modern designs and traditional elegance.
            </p>
            
            {/* Admin Info in Urdu */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-4 border border-white/10">
              <h4 className="text-yellow-400 font-bold mb-2 urdu-text text-right text-lg">
                ایڈمنسٹریٹر
              </h4>
              <div className="urdu-text text-right space-y-1">
                <p className="text-white">حافظ ساجد سید</p>
                <p className="text-pink-400 text-sm">sajid.syed@gmail.com</p>
              </div>
            </div>
            
            {/* Social Icons with Glow Effect */}
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative group"
                  aria-label={social.name}
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${social.color} rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500 animate-pulse`} />
                  <div className="relative w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-2xl border border-white/10 group-hover:border-white/30 group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with Animation */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 relative inline-block">
              CUSTOMER SERVICE
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500" />
            </h4>
            <ul className="space-y-3">
              {customerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-bold text-xl mb-6 relative inline-block">
                CONTACT US
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-500 to-yellow-500" />
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-gray-300 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📍</span>
                  <span>123 Fashion Street, Style City, SC 12345</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                  <span>sajid.syed@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3 text-gray-300 group">
                  <span className="text-2xl group-hover:scale-110 transition-transform">⏰</span>
                  <span>Mon-Sat: 10:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-5 border border-white/10">
              <h5 className="text-white font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">📧</span>
                Subscribe to Newsletter
              </h5>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors pr-24"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-lg text-sm font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 text-sm animate-pulse">
                    ✓ Successfully subscribed!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods and Trust Badges */}
        <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">We Accept:</span>
              {['💳', '💰', '📱', '💵', '🏦'].map((method, index) => (
                <span key={index} className="text-2xl hover:scale-110 transition-transform cursor-default">
                  {method}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">Secure:</span>
              {['🔒', '🔐', '🛡️'].map((secure, index) => (
                <span key={index} className="text-2xl hover:scale-110 transition-transform cursor-default">
                  {secure}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Urdu Text */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} EcomRace. All rights reserved. | 
              <Link href="/privacy" className="hover:text-pink-400 ml-1">Privacy</Link> | 
              <Link href="/terms" className="hover:text-pink-400 ml-1">Terms</Link>
            </p>

            {/* Urdu Text */}
            <div className="text-center">
              <p className="text-gray-400 text-sm urdu-text">
                تمام حقوق محفوظ ہیں
              </p>
              <p className="text-yellow-500 text-xs urdu-text mt-1">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </p>
            </div>

            {/* Admin Credit */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">Admin:</span>
              <span className="text-pink-400 text-sm font-semibold">Hafiz Sajid Syed</span>
              <span className="text-gray-500 text-xs">sajid.syed@gmail.com</span>
            </div>
          </div>

          {/* Additional Urdu Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-500 urdu-text text-right">
            <p>حافظ ساجد سید - پرنسپل ایڈمنسٹریٹر</p>
            <p>بہترین کوالٹی کی ضمانت</p>
            <p>مکمل اطمینان تک رقم واپسی کی گارنٹی</p>
          </div>
        </div>
      </div>
    </footer>
  )
}