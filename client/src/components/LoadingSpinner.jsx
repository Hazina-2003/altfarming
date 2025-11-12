// LoadingSpinner.jsx
import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-[#195923] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-[#AEBF2C]/30 rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-[#F2B705] rounded-full animate-spin"></div>
          <img 
            src="/src/assets/logo/atlehang-logo.png" 
            alt="ALT Farming" 
            className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-1"
          />
        </div>
        <p className="text-white text-xl font-semibold mt-6 animate-pulse">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner