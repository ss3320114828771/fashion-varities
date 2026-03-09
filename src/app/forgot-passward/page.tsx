'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic
    setSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
              Forgot Password
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Send Reset Link
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✉️</div>
                <h2 className="text-2xl font-bold text-white mb-2">Check Your Email</h2>
                <p className="text-gray-400 mb-6">
                  We've sent a password reset link to <span className="text-pink-400">{email}</span>
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link href="/login" className="text-pink-400 hover:text-pink-300">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}