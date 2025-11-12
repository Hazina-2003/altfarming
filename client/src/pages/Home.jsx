// Home.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroWithImage from '../components/HeroWithImage'
import ImageGallery from '../components/ImageGallery'
import LoadingSpinner from '../components/LoadingSpinner'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  const heroImage = '/src/assets/hero/main-hero.jpg'
  const serviceImages = [
    {
      src: '/src/assets/gallery/vegetables.jpg',
      alt: 'Fresh vegetables',
      caption: 'Organic Crops'
    },
    {
      src: '/src/assets/gallery/chickens.jpg',
      alt: 'Healthy chickens',
      caption: 'Quality Poultry'
    },
    {
      src: '/src/assets/gallery/cattle.jpg',
      alt: 'Farm cattle',
      caption: 'Healthy Livestock'
    }
  ]

  const featureImages = [
    {
      src: '/src/assets/gallery/field1.jpg',
      alt: 'Green fields',
      caption: 'Sustainable Farming'
    },
    {
      src: '/src/assets/gallery/field2.jpg', 
      alt: 'Farm landscape',
      caption: 'Modern Techniques'
    },
    {
      src: '/src/assets/about/team.jpg',
      alt: 'Our team',
      caption: 'Expert Farmers'
    }
  ]

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <HeroWithImage 
        image={heroImage}
        title="FROM FIELD TO FORK"
        subtitle="Sustainable agricultural solutions and quality livestock for farmers, communities, and the future of food security."
        ctaText="Explore Our Services"
        ctaLink="/services"
      />

      {/* Features Section */}
      <ImageGallery 
        images={featureImages}
        title="Our Farming Excellence"
        description="Discover our commitment to sustainable agriculture and quality produce"
      />

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-[#F8FAF0] to-[#E8F5E8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-[#195923] mb-6">What We Offer</h2>
            <p className="text-xl text-[#278C2E] max-w-2xl mx-auto font-light">
              Comprehensive agricultural solutions tailored to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: "🌱", 
                title: "Crop Production", 
                desc: "Fresh, high-quality crops",
                bgColor: "bg-gradient-to-br from-[#195923] to-[#278C2E]"
              },
              { 
                icon: "🐔", 
                title: "Poultry", 
                desc: "Live chickens & fresh eggs",
                bgColor: "bg-gradient-to-br from-[#278C2E] to-[#AEBF2C]"
              },
              { 
                icon: "🐄", 
                title: "Livestock", 
                desc: "Diverse livestock options",
                bgColor: "bg-gradient-to-br from-[#AEBF2C] to-[#F2B705]"
              },
              { 
                icon: "🔪", 
                title: "Processing", 
                desc: "Professional services",
                bgColor: "bg-gradient-to-br from-[#F2B705] to-[#195923]"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-100">
                  <div className={`w-24 h-24 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <span className="text-4xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-[#0D0D0D] mb-4">{service.title}</h3>
                  <p className="text-[#278C2E] font-semibold text-lg">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <ImageGallery 
        images={serviceImages}
        title="Our Products in Action"
        description="See the quality and care that goes into everything we produce"
      />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0D0D0D] to-[#195923] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#F2B705]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#AEBF2C]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white to-[#AEBF2C] bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-white/90 font-light">
            Join us in revolutionizing agriculture with sustainable practices and quality products.
          </p>
          <Link 
            to="/contact" 
            className="group inline-block bg-gradient-to-r from-[#F2B705] to-[#AEBF2C] text-[#0D0D0D] px-12 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home