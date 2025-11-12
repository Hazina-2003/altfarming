// Services.jsx
import React from 'react'

const Services = () => {
  const services = [
    {
      image: '/src/assets/services/crops-produce.jpg',
      icon: "🌱",
      title: "Crops & Produce",
      description: "We grow a variety of crops and fresh produce, carefully cultivated to provide healthy and nutritious food straight from our fields.",
      features: ["Fresh vegetables", "Quality grains", "Sustainable farming", "Healthy & nutritious food"]
    },
    {
      image: '/src/assets/services/poultry.jpg',
      icon: "🐔",
      title: "Poultry",
      description: "We specialize in poultry farming, offering live chickens, processed ready-to-cook poultry, and farm-fresh eggs for sale.",
      features: ["Live chickens", "Fresh eggs", "Quality poultry", "Ready-to-cook options"]
    },
    {
      image: '/src/assets/services/livestock.jpg',
      icon: "🐄",
      title: "Livestock",
      description: "We are committed to offering diverse livestock for sale, giving you reliable options whether for farming, business, or home consumption.",
      features: ["Various livestock", "Healthy animals", "Business options", "Home consumption"]
    },
    {
      image: '/src/assets/services/processing.jpg',
      icon: "🔪",
      title: "Poultry Processing",
      description: "We don't just farm chickens - we also offer poultry processing, providing cleaned and ready-to-cook chickens for your convenience.",
      features: ["Professional processing", "Ready-to-cook", "Quality control", "Convenient service"]
    }
  ]

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with Background Image */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-20 shadow-2xl">
          <img 
            src="/src/assets/hero/services-hero.jpg"
            alt="Our Services - ALT Farming & Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 to-[#195923]/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-6xl md:text-7xl font-black mb-6">Our Services</h1>
              <p className="text-2xl max-w-3xl font-light">
                Quality livestock and agricultural products for all your needs
              </p>
            </div>
          </div>
        </div>

        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0D0D0D] mb-6">
            What Do We Have Currently On Stock?
          </h2>
          <p className="text-xl text-[#278C2E] max-w-3xl mx-auto font-light">
            We keep our stock updated to ensure our customers always have access to healthy, high-quality livestock and agricultural products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-10">
                <h3 className="text-3xl font-black text-[#195923] mb-6">{service.title}</h3>
                <p className="text-lg text-[#0D0D0D] mb-8 leading-relaxed font-light">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#278C2E] text-lg font-semibold">
                      <div className="w-8 h-8 bg-[#AEBF2C] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA Section */}
        <div className="bg-[#195923] rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Place Your Order?</h2>
            <p className="text-2xl mb-10 max-w-3xl mx-auto font-light text-white/90">
              Contact us today to discuss your specific needs and get access to our current stock of quality products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+27814075689"
                className="bg-white text-[#195923] px-12 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Call Now: +27 81 407 5689
              </a>
              <a 
                href="mailto:altfarmingprojects@gmail.com"
                className="border-2 border-white text-white px-12 py-4 rounded-2xl font-black text-xl hover:bg-white hover:text-[#195923] transition-all duration-300"
              >
                Email Us
              </a>
            </div>
            
            {/* Order Form Note */}
            <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-black mb-4 text-[#F2B705]">Need an Order Form?</h3>
              <p className="text-lg mb-4 font-light">
                We provide detailed order forms for bulk purchases and business customers.
              </p>
              <button className="bg-[#F2B705] text-[#0D0D0D] px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform duration-300">
                Download Order Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services