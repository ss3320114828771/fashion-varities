'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Cotton Suit',
      price: 89.99,
      quantity: 2,
      image: '/images/n1.jpeg',
    },
    {
      id: 2,
      name: 'Luxury Lawn Collection',
      price: 129.99,
      quantity: 1,
      image: '/n2.jpeg',
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-2xl text-gray-400 mb-6">Your cart is empty</p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/20 flex flex-col sm:flex-row gap-4"
                >
                  <div className="sm:w-32 h-32 relative rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500 mb-4">
                      ${item.price}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="text-white font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-fit">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-3">
                  <div className="flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4">
                Proceed to Checkout
              </button>

              <Link
                href="/products"
                className="block text-center text-pink-400 hover:text-pink-300 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}