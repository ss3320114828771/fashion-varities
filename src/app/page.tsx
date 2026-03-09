'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const [randomValues, setRandomValues] = useState({
    bubbles: [] as { width: number; height: number; left: number; top: number; color: string; delay: number; duration: number }[],
    colors: [] as string[]
  })

  // Colors for gradients - FIXED array (no random on server)
  const colors = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-purple-500 via-pink-500 to-red-500',
    'from-blue-500 via-cyan-500 to-green-500',
    'from-orange-500 via-red-500 to-pink-500',
    'from-green-500 via-teal-500 to-blue-500',
    'from-yellow-500 via-orange-500 to-red-500',
    'from-indigo-500 via-purple-500 to-pink-500',
    'from-rose-500 via-pink-500 to-fuchsia-500',
  ]

  const images = [
    '/n1.jpeg',
    '/n2.jpeg',
    '/n3.jpeg',
    '/n4.jpeg',
    '/n5.jpeg',
    '/n6.jpeg',
  ]

  // ✅ FIX: Generate random values ONLY on client side after mount
  useEffect(() => {
    setIsMounted(true)
    
    // Generate bubbles only on client
    const newBubbles = []
    for (let i = 0; i < 20; i++) {
      newBubbles.push({
        width: Math.random() * 300 + 50,
        height: Math.random() * 300 + 50,
        left: Math.random() * 100,
        top: Math.random() * 100,
        color: ['rgba(255,0,128,0.2)', 'rgba(128,0,255,0.2)', 'rgba(0,255,255,0.2)', 'rgba(255,255,0,0.2)', 'rgba(0,255,0,0.2)'][i % 5],
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
      })
    }
    
    setRandomValues({
      bubbles: newBubbles,
      colors: colors
    })

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      clearInterval(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [images.length])

  // ✅ FIX: Show nothing on server, render only on client
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl animate-pulse">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      
      {/* 🌈 Dynamic Background with Mouse Follow - FIXED: No random values */}
      <div 
        className="fixed inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x || 500}px ${mousePosition.y || 500}px, 
            rgba(255, 0, 128, 0.15) 0%, 
            rgba(128, 0, 255, 0.15) 25%, 
            rgba(0, 255, 255, 0.15) 50%, 
            rgba(255, 255, 0, 0.15) 75%, 
            transparent 100%)`
        }}
      />

      {/* ✨ Floating Colorful Bubbles - FIXED: Generated after mount */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {randomValues.bubbles.map((bubble, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              width: `${bubble.width}px`,
              height: `${bubble.height}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              background: `radial-gradient(circle, ${bubble.color} 0%, transparent 70%)`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      {/* 🌟 Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* Animated Gradient Text - FIXED: Using CSS animation instead of random */}
            <h1 className="text-7xl md:text-9xl font-bold mb-6 animate-gradient-x bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent">
              EcomRace
            </h1>
            
            {/* Colorful Subtitle */}
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-xl opacity-75 animate-pulse" />
              <p className="relative text-2xl md:text-4xl text-white bg-black/50 backdrop-blur-sm px-8 py-4 rounded-full border-2 border-white/20">
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Premium Cotton & Lawn Suits
                </span>
              </p>
            </div>
          </div>

          {/* 🎠 Image Carousel - FIXED: No random values */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden group">
              {/* Multi-colored borders */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-spin-slow" />
              
              {/* Image */}
              <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden">
                <Image
                  src={images[currentImage]}
                  alt="Featured"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                />
                
                {/* Fixed overlays - no random */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 via-purple-500/50 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 via-transparent to-yellow-500/50 mix-blend-overlay" />
              </div>
            </div>

            {/* Image indicators - FIXED: Using fixed colors */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    currentImage === index 
                      ? 'w-12 bg-gradient-to-r ' + colors[index % colors.length]
                      : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 Featured Products - FIXED: Using fixed colors */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Featured Collection
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative perspective-1000"
              >
                {/* Rainbow border - FIXED: Using fixed animation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />
                
                {/* Card */}
                <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl overflow-hidden h-[400px]">
                  <Image
                    src={src}
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Colorful overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors[index % colors.length]} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                    ${(index + 1) * 50 + 49}.99
                  </div>
                  
                  {/* Add to cart button */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-3 rounded-full font-bold transform hover:scale-105 transition-transform">
                      Add to Cart 🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌈 Health Benefits - FIXED: No random */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              🌿 Health Benefits
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cotton Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gradient-to-br from-green-900/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-center text-green-400">
                  🌱 Cotton Benefits
                </h3>
                <ul className="space-y-4">
                  {[
                    'Hypoallergenic - Safe for sensitive skin',
                    'Breathable - Air circulation',
                    'Moisture-wicking - Keeps skin dry',
                    'Temperature regulating',
                    'Chemical-free - No irritation',
                    'Biodegradable - Eco friendly'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-200">
                      <span className="text-2xl">✨</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Lawn Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-gradient-to-br from-blue-900/90 to-purple-900/90 backdrop-blur-sm rounded-3xl p-8">
                <h3 className="text-3xl font-bold mb-6 text-center text-blue-400">
                  🌸 Lawn Advantages
                </h3>
                <ul className="space-y-4">
                  {[
                    'Ultra-lightweight - Maximum comfort',
                    'Smooth texture - No friction',
                    'Quick-drying - No bacteria',
                    'Natural fibers - Pure',
                    'Perfect for humid weather',
                    'Easy maintenance'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-200">
                      <span className="text-2xl">🌟</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎪 Urdu Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-700" />
            <div className="relative bg-gradient-to-br from-yellow-900/90 via-orange-900/90 to-red-900/90 backdrop-blur-sm rounded-3xl p-12">
              
              <h2 className="text-5xl font-bold text-center mb-8 urdu-text text-yellow-400">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="urdu-text text-right text-white space-y-4 text-xl leading-loose bg-black/30 p-6 rounded-2xl">
                  <p>الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ</p>
                  <p>الرَّحْمَنِ الرَّحِيمِ</p>
                  <p>مَالِكِ يَوْمِ الدِّينِ</p>
                  <p className="pt-4 text-yellow-400">حافظ ساجد سید - ایڈمنسٹریٹر</p>
                </div>
                
                <div className="urdu-text text-right text-white space-y-4 text-xl leading-loose bg-black/30 p-6 rounded-2xl">
                  <p>ہماری دکان میں خیر مقدم</p>
                  <p>بہترین کوالٹی کی ضمانت</p>
                  <p>مکمل اطمینان تک رقم واپسی</p>
                  <p className="pt-4 text-pink-400">sajid.syed@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Call to Action */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-2xl opacity-75 animate-pulse" />
            <Link
              href="/products"
              className="relative inline-flex items-center px-16 py-8 text-3xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full transform transition-all duration-500 hover:scale-110 hover:shadow-2xl group"
            >
              <span>Shop Now</span>
              <span className="ml-4 text-4xl transform group-hover:translate-x-2 transition-transform">
                →
              </span>
            </Link>
          </div>
          <p className="mt-8 text-gray-400 urdu-text">
            حافظ ساجد سید - ایڈمنسٹریٹر
          </p>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  )
}