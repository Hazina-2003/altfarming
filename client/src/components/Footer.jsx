// Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-4 mb-8 group">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-300">
                <img 
                  src="/src/assets/logo/atlehang-logo.png" 
                  alt="ALT Farming & Projects" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">ALT FARMING</h2>
                <p className="text-sm text-[#AEBF2C] font-medium">& PROJECTS</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              From field to fork, quality we stock! Providing sustainable agricultural solutions and quality livestock for a better future.
            </p>
            <div className="flex space-x-6">
              <a href="tel:+27814075689" className="bg-[#195923] px-6 py-3 rounded-lg hover:bg-[#278C2E] transition-all duration-300 group">
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="font-semibold">+27 81 407 5689</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#AEBF2C]">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              {['Home', 'About Us', 'Our Services', 'Contact'].map((item, index) => (
                <Link 
                  key={index}
                  to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 py-2 group flex items-center"
                >
                  <div className="w-2 h-2 bg-[#AEBF2C] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-6 text-[#AEBF2C]">Contact Info</h3>
            <div className="space-y-6">
              <a href="mailto:altfarmingprojects@gmail.com" className="text-gray-300 hover:text-white transition-colors flex items-start group">
                <div className="w-10 h-10 bg-[#195923] rounded-lg flex items-center justify-center mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium">altfarmingprojects@gmail.com</span>
              </a>
              <div className="text-gray-300 flex items-start">
                <div className="w-10 h-10 bg-[#195923] rounded-lg flex items-center justify-center mr-3 mt-1">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">GED 167 VAN 560 KROMDRAAI</p>
                  <p className="text-[#AEBF2C]">THABAZIMBI</p>
                  <p className="text-[#F2B705] font-semibold">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#278C2E]/30">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-[#AEBF2C] text-lg font-medium">
              &copy; 2024 ALT Farming & Projects. All rights reserved.
            </p>
            <div className="flex justify-center space-x-8 mt-4">
              <a href="#" className="text-[#AEBF2C] hover:text-white transition-colors font-medium text-lg">
                Privacy Policy
              </a>
              <a href="#" className="text-[#AEBF2C] hover:text-white transition-colors font-medium text-lg">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer