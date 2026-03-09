'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Premium Cotton Suit',
      category: 'cotton',
      price: 89.99,
      image: '/images/n1.jpeg',
      description: 'Elegant cotton suit with modern design',
    },
    {
      id: 2,
      name: 'Luxury Lawn Collection',
      category: 'lawn',
      price: 129.99,
      image: '/images/n2.jpeg',
      description: 'Premium lawn fabric with intricate patterns',
    },
    {
      id: 3,
      name: 'Summer Cotton Special',
      category: 'cotton',
      price: 79.99,
      image: '/images/n3.jpeg',
      description: 'Lightweight cotton for summer comfort',
    },
    {
      id: 4,
      name: 'Designer Lawn Suit',
      category: 'lawn',
      price: 149.99,
      image: '/images/n4.jpeg',
      description: 'Exclusive designer lawn collection',
    },
    {
      id: 5,
      name: 'Classic Cotton Wear',
      category: 'cotton',
      price: 99.99,
      image: '/images/n5.jpeg',
      description: 'Timeless cotton design for every occasion',
    },
    {
      id: 6,
      name: 'Premium Lawn Ensemble',
      category: 'lawn',
      price: 159.99,
      image: '/images/n6.jpeg',
      description: 'Luxurious lawn suit with embroidery',
    },
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Our Products
        </h1>
        
        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'cotton', 'lawn'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-bold capitalize transition-all duration-300 transform hover:scale-110 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg shadow-pink-500/50'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/20">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                    ${product.price}
                  </span>
                  <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full font-bold transform transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}