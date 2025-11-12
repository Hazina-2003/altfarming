// About.jsx
import React from 'react'

const About = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 bg-[#195923] rounded-full text-lg font-semibold text-white mb-8 shadow-lg">
            <div className="w-3 h-3 bg-[#F2B705] rounded-full mr-3 animate-pulse"></div>
            About Our Business
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0D0D0D] mb-8 leading-tight">
            Growing Sustainable <span className="text-[#195923]">Futures</span>
          </h1>
          <p className="text-2xl text-[#278C2E] leading-relaxed font-light">
            At ALT Farming & Projects, we are dedicated to providing quality livestock and sustainable 
            agricultural solutions that support farmers, communities, and the future of food security.
          </p>
          <p className="text-lg text-[#0D0D0D] mt-6 leading-relaxed">
            With a strong foundation in ethical farming practices and modern agricultural innovation, 
            we specialize in quality livestock, poultry, crops, and agricultural products.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#195923] rounded-3xl p-10 text-white hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black">Our Mission</h2>
            </div>
            <p className="text-xl text-white/90 leading-relaxed font-light">
              To deliver excellence from farm to market by prioritizing animal welfare, sustainable land use, 
              and trusted partnerships with local and regional stakeholders.
            </p>
          </div>

          <div className="bg-[#F2B705] rounded-3xl p-10 text-[#0D0D0D] hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-[#0D0D0D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black">Our Vision</h2>
            </div>
            <p className="text-xl text-[#0D0D0D]/90 leading-relaxed font-light">
              To become a leading provider of sustainable and innovative agricultural solutions, ensuring 
              food security, empowering communities, and preserving the environment for future generations.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-[#0D0D0D] rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl font-black mb-6">Our Values</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              The principles that guide everything we do in serving our community and the environment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              {
                icon: "🌱",
                title: "Sustainability",
                description: "Prioritizing environmentally friendly practices and resource conservation."
              },
              {
                icon: "⭐",
                title: "Quality",
                description: "Striving for excellence in all aspects of our operations, from seed selection to harvest."
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Embracing new technologies and techniques to improve efficiency and productivity."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "Supporting local farmers, businesses, and initiatives."
              }
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#278C2E] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#F2B705]">{value.title}</h3>
                <p className="text-white/80 leading-relaxed font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-black text-[#195923] mb-8">Our Farming Team</h2>
          <div className="bg-gray-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <img 
              src="/src/assets/about/team.jpg" 
              alt="ALT Farming Team"
              className="w-full h-96 object-cover rounded-2xl mb-6"
            />
            <p className="text-lg text-[#0D0D0D]">
              Meet our dedicated team of expert farmers committed to sustainable agriculture and quality produce.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About