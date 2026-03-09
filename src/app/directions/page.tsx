'use client'

export default function Directions() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          Store Directions
        </h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center mb-6">
              <p className="text-gray-400">Interactive Map Loading...</p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Store Location</h2>
              <p className="text-gray-300">
                123 Fashion Street<br />
                Style City, SC 12345<br />
                United States
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-pink-400 mb-2">Store Hours</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>10:00 AM - 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>12:00 PM - 6:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Directions Info */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">How to Reach Us</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🚗
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">By Car</h3>
                    <p className="text-gray-400">
                      Take Highway 101 to Exit 23. Follow Fashion Avenue for 2 miles. 
                      We're located in the Fashion District, next to the Style Mall.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🚇
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">By Public Transport</h3>
                    <p className="text-gray-400">
                      Take Metro Line 5 to Fashion Station. Exit at Platform 2 and walk 
                      south for 5 minutes. We're directly across from the station.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    🚶
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Walking</h3>
                    <p className="text-gray-400">
                      From City Center, walk east on Main Street for 10 minutes. 
                      Turn right on Fashion Street, we're at number 123.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Parking Information</h3>
              <p className="text-gray-300 mb-4">
                Free parking available for customers in our dedicated parking lot behind the store. 
                Additional street parking available on Fashion Street.
              </p>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="text-yellow-400 text-sm">
                  ⚡ EV Charging stations available in our parking lot
                </p>
              </div>
            </div>

            {/* Urdu Directions */}
            <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 urdu-text text-right">
                ہدایات
              </h3>
              <p className="urdu-text text-right text-gray-300">
                ہمارا اسٹور شہر کے مرکز میں واقع ہے۔ آسانی سے پہنچنے کے لیے آپ کار، میٹرو یا پیدل آ سکتے ہیں۔
                ہمارے پاس مفت پارکنگ کی سہولت موجود ہے۔
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}