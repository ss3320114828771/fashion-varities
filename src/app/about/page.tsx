import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          About Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-pink-400">Our Story</h2>
            <p className="text-gray-200 leading-relaxed">
              Welcome to EcomRace, your premier destination for high-quality cotton and lawn suits. 
              Founded by Hafiz Sajid Syed, we have been serving customers with the finest fabrics 
              and designs that combine tradition with modern fashion.
            </p>
            <p className="text-gray-200 leading-relaxed">
              Our journey began with a simple mission: to provide comfortable, stylish, and 
              affordable clothing that doesn't compromise on quality. Today, we're proud to be 
              one of the leading online stores for premium suits.
            </p>
            
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4 urdu-text text-right">
                ایڈمنسٹریٹر کی معلومات
              </h3>
              <div className="urdu-text text-right text-white space-y-2">
                <p>نام: حافظ ساجد سید</p>
                <p>ای میل: sajid.syed@gmail.com</p>
                <p>کردار: منتظم (ایڈمنسٹریٹر)</p>
              </div>
            </div>
          </div>

          <div className="relative perspective-1000">
            <div className="transform-style-3d animate-float">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/n1.jpeg"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white text-xl">Quality & Comfort Since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Benefits Section */}
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
            Health Benefits of Our Fabrics
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Breathable</h3>
              <p className="text-gray-300">Natural fibers allow air circulation, keeping you cool and comfortable</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">Hypoallergenic</h3>
              <p className="text-gray-300">Gentle on sensitive skin, reducing allergic reactions</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">Moisture Wicking</h3>
              <p className="text-gray-300">Keeps skin dry by absorbing moisture effectively</p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: '⭐', title: 'Quality First', desc: 'Premium materials only' },
            { icon: '❤️', title: 'Customer Care', desc: '24/7 support available' },
            { icon: '🚚', title: 'Fast Delivery', desc: 'Worldwide shipping' },
            { icon: '💯', title: 'Satisfaction', desc: '100% guarantee' },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/20 transform transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}