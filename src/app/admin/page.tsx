'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Check admin credentials
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      setIsLoggedIn(true)
    } else {
      alert('Invalid credentials')
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                Admin Login
              </h1>
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Username</label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Password</label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Total Products', value: '156', color: 'from-pink-500 to-red-500' },
            { label: 'Total Orders', value: '89', color: 'from-purple-500 to-pink-500' },
            { label: 'Total Users', value: '1,234', color: 'from-blue-500 to-cyan-500' },
            { label: 'Revenue', value: '$45,678', color: 'from-green-500 to-emerald-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${stat.color} rounded-2xl p-6 text-white shadow-xl transform transition-all duration-300 hover:scale-105`}
            >
              <p className="text-sm opacity-90 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4">Recent Orders</h2>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-semibold">Order #{2024000 + i}</p>
                    <p className="text-sm text-gray-400">Customer {i}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    Completed
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Admin Info */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h2 className="text-xl font-bold text-white mb-4">Admin Information</h2>
            <div className="space-y-4 urdu-text text-right">
              <p className="text-yellow-400 text-lg">حافظ ساجد سید</p>
              <p className="text-gray-300">ای میل: sajid.syed@gmail.com</p>
              <p className="text-gray-300">کردار: پرنسپل ایڈمنسٹریٹر</p>
              <p className="text-gray-300">اختیارات: مکمل رسائی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}