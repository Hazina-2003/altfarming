// Header.jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`bg-white sticky top-0 z-50 border-b transition-all duration-300 ${
      isScrolled ? 'border-[#AEBF2C] shadow-md' : 'border-gray-100'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-gray-200">
              <img 
                src="/src/assets/logo/atlehang-logo.png" 
                alt="ALT Farming & Projects" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-[#195923] leading-tight">ALT FARMING</h1>
              <p className="text-xs text-[#278C2E] leading-tight font-medium">& PROJECTS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-all duration-300 py-2 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#195923] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-all duration-300 py-2 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#195923] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-all duration-300 py-2 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#195923] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="bg-[#195923] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#278C2E] transition-all duration-300 shadow-sm">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#0D0D0D] p-2 hover:bg-[#AEBF2C]/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
              <div className={`w-full h-0.5 bg-[#0D0D0D] mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-full h-0.5 bg-[#0D0D0D] mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-[#0D0D0D] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-colors py-3 px-4 rounded-lg hover:bg-[#AEBF2C]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-colors py-3 px-4 rounded-lg hover:bg-[#AEBF2C]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-[#0D0D0D] hover:text-[#195923] font-medium transition-colors py-3 px-4 rounded-lg hover:bg-[#AEBF2C]/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="bg-[#195923] text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-[#278C2E] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header