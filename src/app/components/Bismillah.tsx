'use client'

import { useEffect, useState } from 'react'

export default function Bismillah() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
      <div className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-3 text-center shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4 space-x-reverse">
            <span className="text-4xl animate-pulse">✨</span>
            <h1 className="text-3xl md:text-4xl font-arabic urdu-text font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-200 animate-glow">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </h1>
            <span className="text-4xl animate-pulse">✨</span>
          </div>
          <p className="text-sm mt-1 text-yellow-200 animate-pulse-slow">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
        </div>
      </div>
    </div>
  )
}