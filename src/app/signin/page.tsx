'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign in logic
    console.log('Sign in:', formData)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
              Sign In
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox text-pink-500" />
                  <span className="text-gray-300">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-pink-400 hover:text-pink-300 transition-colors">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/signup" className="text-pink-400 hover:text-pink-300 font-semibold">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-center text-gray-500 text-sm">
                Admin: sajid.syed@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}