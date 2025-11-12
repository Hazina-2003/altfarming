// Contact.jsx
import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="py-12 bg-gradient-to-b from-white to-[#E8F5E8]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black text-[#0D0D0D] mb-6">
            Get In <span className="bg-gradient-to-r from-[#195923] to-[#AEBF2C] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-2xl text-[#278C2E] max-w-3xl mx-auto font-light">
            Contact us for quality livestock, agricultural products, or to learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-500">
              <h2 className="text-4xl font-black text-[#195923] mb-10">Our Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#195923] to-[#278C2E] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-[#0D0D0D] mb-2">Phone</h3>
                    <a href="tel:+27814075689" className="text-2xl text-[#278C2E] hover:text-[#195923] font-semibold transition-colors">
                      +27 81 407 5689
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#AEBF2C] to-[#F2B705] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-[#0D0D0D]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-[#0D0D0D] mb-2">Email</h3>
                    <a href="mailto:altfarmingprojects@gmail.com" className="text-xl text-[#278C2E] hover:text-[#195923] font-semibold transition-colors break-all">
                      altfarmingprojects@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#278C2E] to-[#AEBF2C] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-[#0D0D0D] mb-2">Address</h3>
                    <address className="text-lg text-[#278C2E] font-semibold not-italic">
                      GED 167 VAN 560 KROMDRAAI<br />
                      THABAZIMBI<br />
                      South Africa
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-[#195923] to-[#278C2E] rounded-3xl p-10 mt-8 text-white shadow-2xl">
              <h3 className="text-3xl font-black mb-6 text-[#F2B705]">Business Hours</h3>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold">Monday - Friday:</span>
                  <span className="font-black">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold">Saturday:</span>
                  <span className="font-black">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">Sunday:</span>
                  <span className="font-black text-[#F2B705]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-4xl font-black text-[#195923] mb-10">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-black text-[#0D0D0D] mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl focus:ring-4 focus:ring-[#AEBF2C]/20 focus:border-[#278C2E] transition-all duration-300 text-lg"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-lg font-black text-[#0D0D0D] mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl focus:ring-4 focus:ring-[#AEBF2C]/20 focus:border-[#278C2E] transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-lg font-black text-[#0D0D0D] mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl focus:ring-4 focus:ring-[#AEBF2C]/20 focus:border-[#278C2E] transition-all duration-300 text-lg"
                    placeholder="+27 12 345 6789"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-black text-[#0D0D0D] mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl focus:ring-4 focus:ring-[#AEBF2C]/20 focus:border-[#278C2E] transition-all duration-300 text-lg"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-black text-[#0D0D0D] mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 border-2 border-[#AEBF2C]/30 rounded-2xl focus:ring-4 focus:ring-[#AEBF2C]/20 focus:border-[#278C2E] transition-all duration-300 text-lg resize-none"
                  placeholder="Tell us about your agricultural needs, questions, or how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#195923] to-[#278C2E] text-white py-5 px-8 rounded-2xl font-black text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-[#AEBF2C]/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div> {/* end grid */}

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-[#195923] to-[#278C2E] rounded-3xl p-12 text-center text-white mt-16 shadow-2xl">
          <h2 className="text-3xl font-black mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us directly for quick responses to your agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+27814075689"
              className="group bg-white text-[#195923] px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Call Now</span>
              <div className="absolute inset-0 bg-[#195923]/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
            <a 
              href="mailto:altfarmingprojects@gmail.com"
              className="group border-2 border-white text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-[#195923] transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Email Us</span>
              <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact