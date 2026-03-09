'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile')

  const userOrders = [
    { id: 1, date: '2024-01-15', total: 189.98, status: 'Delivered', items: 2 },
    { id: 2, date: '2024-01-20', total: 129.99, status: 'Shipped', items: 1 },
    { id: 3, date: '2024-01-25', total: 279.97, status: 'Processing', items: 3 },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          My Dashboard
        </h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h2 className="text-xl font-bold text-white">John Doe</h2>
                <p className="text-gray-400 text-sm">john.doe@email.com</p>
              </div>

              <nav className="space-y-2">
                {[
                  { id: 'profile', label: 'Profile', icon: '👤' },
                  { id: 'orders', label: 'Orders', icon: '📦' },
                  { id: 'wishlist', label: 'Wishlist', icon: '❤️' },
                  { id: 'settings', label: 'Settings', icon: '⚙️' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white'
                        : 'text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Profile Information</h2>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 mb-2">Full Name</label>
                        <input
                          type="text"
                          value="sajid syed"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2">Email</label>
                        <input
                          type="email"
                          value="sajidsyedhafizsajidsyed@gmail.com"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2">Phone</label>
                        <input
                          type="tel"
                          value="+1 234 567 890"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 mb-2">Address</label>
                        <input
                          type="text"
                          value="123 Fashion Street"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                          readOnly
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {userOrders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-white/5 rounded-xl p-4 border border-white/10"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div>
                            <p className="text-white font-semibold">Order #{2024000 + order.id}</p>
                            <p className="text-sm text-gray-400">Date: {order.date}</p>
                          </div>
                          <div>
                            <p className="text-white">Items: {order.items}</p>
                            <p className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                              ${order.total}
                            </p>
                          </div>
                          <div>
                            <span className={`px-3 py-1 rounded-full text-sm ${
                              order.status === 'Delivered' ? 'bg-green-500/20 text-green-400' :
                              order.status === 'Shipped' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                          <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}