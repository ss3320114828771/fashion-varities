'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'CART', path: '/cart' },
    { name: 'LOGIN', path: '/login' },
    { name: 'SIGN UP', path: '/signup' },
    { name: 'DASHBOARD', path: '/dashboard' },
    { name: 'ADMIN', path: '/admin' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'bg-black/80 backdrop-blur-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient">
              EcomRace
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-110 ${
                  pathname === item.path
                    ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg shadow-pink-500/50'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-yellow-500 p-2 focus:outline-none transform transition-all duration-300 hover:scale-110"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-xl blur opacity-75 animate-pulse" />
            <div className="relative flex flex-col justify-center items-center space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-x-0 top-[72px] transition-all duration-500 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 max-h-[calc(100vh-72px)] overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-center font-bold transition-all duration-300 transform hover:scale-105 ${
                      pathname === item.path
                        ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg shadow-pink-500/50'
                        : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}