// HeroWithImage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HeroWithImage = ({ image, title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0D0D0D] via-[#195923] to-[#278C2E] min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt="ALT Farming Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/70 to-[#195923]/70"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#F2B705]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#AEBF2C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg font-semibold mb-8 border border-white/20">
              <div className="w-3 h-3 bg-[#F2B705] rounded-full mr-3 animate-pulse"></div>
              Sustainable Farming Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white to-[#AEBF2C] bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed font-light">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to={ctaLink}
                className="group bg-gradient-to-r from-[#F2B705] to-[#AEBF2C] text-[#0D0D0D] px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center relative overflow-hidden"
              >
                <span className="relative z-10">{ctaText}</span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link 
                to="/about"
                className="group border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-[#0D0D0D] transition-all duration-300 backdrop-blur-sm text-center hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { number: "500+", label: "Happy Farmers" },
                  { number: "1000+", label: "Livestock" },
                  { number: "50+", label: "Communities" },
                  { number: "15+", label: "Years Experience" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-4xl font-black text-[#F2B705] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/80 font-semibold text-lg">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#F2B705] rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#AEBF2C] rounded-full animate-bounce delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithImage;