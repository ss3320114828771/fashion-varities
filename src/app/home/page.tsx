'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const images = [
    '/images/n1.jpeg',
    '/images/n2.jpeg',
    '/images/n3.jpeg',
    '/images/n4.jpeg',
    '/images/n5.jpeg',
    '/images/n6.jpeg',
  ]

  // Urdu text directly in component for reliability
  const urduText = `بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم

الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ

ہماری دکان میں آپ کا خیر مقدم ہے۔ حافظ ساجد سید بطور ایڈمنسٹریٹر آپ کا شکریہ ادا کرتے ہیں۔

ہمارے تمام مصنوعات اعلیٰ معیار کے کپڑے سے بنائے جاتے ہیں جو آپ کی صحت کا خاص خیال رکھتے ہیں:
• کاٹن کے کپڑے جلد کے لیے مفید ہیں
• گرمیوں میں ٹھنڈک فراہم کرتے ہیں
• الرجی سے بچاتے ہیں
• پسینہ جذب کرتے ہیں

ایڈمنسٹریٹر: حافظ ساجد سید
ای میل: sajid.syed@gmail.com

ہمارا مقصد آپ کو بہترین شاپنگ تجربہ فراہم کرنا ہے۔`

  // Health benefits text
  const healthBenefits = [
    {
      title: "Cotton Benefits for Health",
      points: [
        "Hypoallergenic - Safe for sensitive skin",
        "Breathable - Allows air circulation",
        "Moisture-wicking - Keeps skin dry",
        "Temperature regulating - Cool in summer, warm in winter",
        "Chemical-free - No skin irritation",
        "Biodegradable - Environment friendly"
      ]
    },
    {
      title: "Lawn Fabric Advantages",
      points: [
        "Ultra-lightweight - Maximum comfort",
        "Smooth texture - No skin friction",
        "Quick-drying - Prevents bacterial growth",
        "Natural fibers - Chemical-free",
        "Perfect for humid weather",
        "Easy to maintain - Lasts longer"
      ]
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* Hero Section with 3D Animation */}
        <section className="mb-20">
          <div className="relative perspective-1000">
            <div className={`transform-style-3d animate-float transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 mix-blend-overlay z-10 animate-pulse" />
                
                {/* Image with 3D effect */}
                <div className="relative h-[500px] md:h-[600px]">
                  <Image
                    src={images[currentImage]}
                    alt="Featured Collection"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>
                
                {/* Content overlay with glass morphism */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center p-8 rounded-3xl backdrop-blur-sm bg-black/30 border border-white/20 transform transition-all duration-500 hover:scale-105">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient">
                      EcomRace
                    </h1>
                    <p className="text-2xl md:text-3xl text-white mb-8 drop-shadow-lg">
                      Premium Cotton & Lawn Suits
                    </p>
                    
                    {/* Glowing button */}
                    <Link
                      href="/products"
                      className="inline-block relative group"
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
                      <div className="relative px-8 py-4 bg-black rounded-full leading-none flex items-center">
                        <span className="text-xl font-bold text-white mr-2">Shop Now</span>
                        <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                      </div>
                    </Link>
                  </div>
                </div>
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentImage === index 
                          ? 'w-8 bg-gradient-to-r from-pink-500 to-yellow-500' 
                          : 'bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bismillah Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 via-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
            <div className="relative">
              {/* Glowing stars effect */}
              <div className="absolute inset-0 flex justify-center space-x-4">
                <span className="text-4xl animate-pulse">✨</span>
                <span className="text-4xl animate-pulse delay-100">✨</span>
                <span className="text-4xl animate-pulse delay-200">✨</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-arabic urdu-text font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-green-200 to-blue-200 mb-4 pt-12">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </h2>
              
              <p className="text-xl text-green-300 mb-4">
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-yellow-400 text-lg">الرَّحْمَنِ</p>
                  <p className="text-gray-400">The Most Gracious</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-green-400 text-lg">الرَّحِيمِ</p>
                  <p className="text-gray-400">The Most Merciful</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-blue-400 text-lg">مَالِكِ يَوْمِ الدِّينِ</p>
                  <p className="text-gray-400">Master of the Day of Judgment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Grid */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500">
            Featured Collection
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="group relative perspective-1000 cursor-pointer"
              >
                {/* 3D Flip Card */}
                <div className="transform-style-3d transition-all duration-700 group-hover:rotate-y-180">
                  {/* Front of card */}
                  <div className="relative backface-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition duration-500" />
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`Product ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm opacity-75">New Arrival</p>
                        <p className="text-xl font-bold">Premium Collection</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-600 to-yellow-600 rounded-2xl p-6 flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Premium Suit</h3>
                    <p className="text-center mb-4">Elegant design with premium quality fabric</p>
                    <p className="text-3xl font-bold mb-6">$99.99</p>
                    <button className="px-6 py-3 bg-white text-pink-600 rounded-full font-bold transform transition-all duration-300 hover:scale-110 hover:shadow-2xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Benefits Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
              🌿 Health Benefits of Our Fabrics
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {healthBenefits.map((benefit, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl font-semibold text-center" style={{color: idx === 0 ? '#4ade80' : '#60a5fa'}}>
                    {benefit.title}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-green-400 text-xl">✓</span>
                        <span className="text-gray-200">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Urdu Information Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="relative">
              {/* Decorative stars */}
              <div className="absolute top-0 left-0 right-0 flex justify-between opacity-50">
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
                <span className="text-3xl">⭐</span>
              </div>
              
              <h2 className="text-4xl font-bold text-center mb-8 urdu-text text-yellow-400 pt-8">
                ہمارے بارے میں
              </h2>
              
              <div className="urdu-text text-right text-white space-y-6 text-lg leading-loose">
                {urduText.split('\n').map((line, index) => (
                  <p key={index} className={line.startsWith('•') ? 'pr-8' : ''}>
                    {line}
                  </p>
                ))}
              </div>
              
              {/* Admin info box */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/30 to-pink-900/30 rounded-2xl border border-yellow-500/30">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 urdu-text text-right">
                  ایڈمنسٹریٹر کی معلومات
                </h3>
                <div className="grid md:grid-cols-2 gap-4 urdu-text text-right">
                  <div className="p-4 bg-black/30 rounded-xl">
                    <p className="text-pink-400">نام:</p>
                    <p className="text-white text-xl">حافظ ساجد سید</p>
                  </div>
                  <div className="p-4 bg-black/30 rounded-xl">
                    <p className="text-pink-400">ای میل:</p>
                    <p className="text-white text-xl">sajid.syed@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="relative inline-block">
            {/* Glowing effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl opacity-50 animate-pulse" />
            
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl group"
            >
              <span>Contact Administrator</span>
              <span className="ml-4 text-3xl group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
          
          <p className="mt-6 text-gray-400 urdu-text">
            سوالات کے لیے براہ کرم رابطہ کریں
          </p>
        </section>
      </div>
    </div>
  )
}