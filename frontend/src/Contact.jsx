import React from "react";
import mainImage from "./assets/images/main_image.jpg";

const Contact = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-2xl text-white/90 mb-2">Have questions, suggestions, or feedback?</p>
          <p className="text-xl text-white/80">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            {/* Address Box */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-4 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Address</h3>
                  <p className="text-white/90 leading-relaxed">
                    ABC, HMT layout, Nagasandra, Bangalore,<br />
                    560028
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Box */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-4 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Phone</h3>
                  <p className="text-white/90 leading-relaxed">9045377680</p>
                </div>
              </div>
            </div>

            {/* Email Box */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 p-4 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/90 leading-relaxed">
                    info@pneudoc.com<br />
                    support@pneudoc.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              {/* First Row - First Name and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    First Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    Last Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Second Row - Company and Title */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/90 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30"
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-white/90 mb-2 font-medium">
                    Title <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30"
                    placeholder="Enter your title"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white/90 mb-2 font-medium">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/90 mb-2 font-medium">
                  How Can We Help You? <span className="text-red-400">*</span>
                </label>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-white/30 resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Submit Button - Enhanced Blue */}
              <button 
                type="submit"
                className="w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2"
                style={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  border: '2px solid #60A5FA'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#2563EB';
                  e.target.style.borderColor = '#93C5FD';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#3B82F6';
                  e.target.style.borderColor = '#60A5FA';
                }}
              >
                <span>Submit</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Contact;