'use client'

import { useEffect, useState } from 'react'

interface Star {
  id: number
  left: string
  top: string
  size: number
  delay: number
  duration: number
}

export default function StarEffect() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = []
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
        })
      }
      setStars(newStars)
    }

    generateStars()
  }, [])

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            background: `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255,255,255,0.8)`,
          }}
        />
      ))}
    </div>
  )
}