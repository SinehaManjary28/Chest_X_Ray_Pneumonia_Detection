import React from 'react';
import { Users, Target, Stethoscope, Brain, Award, Heart, Zap, Shield } from 'lucide-react';

export default function AboutPneuDOC() {
  const backgroundImage = "./assets/images/main_image.jpg"; // Replace with your image URL
  
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation Bar */}
      <nav className="bg-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Stethoscope className="w-8 h-8 text-white" />
              <span className="text-white text-2xl font-bold">PneuDoc</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Home</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Detect</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Pneumonia</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Blog</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Medics</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">About</a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Hero Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-2xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
              About PneuDOC
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-5xl mx-auto">
              Pioneering the future of healthcare with passion, innovation, and a commitment to excellence that transforms AI research into reality.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="p-4 bg-blue-100 rounded-2xl">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At PneuDOC, we are committed to revolutionizing healthcare with the power of Artificial Intelligence. Our project focuses on pneumonia detection using pretrained deep learning models integrated with nature-inspired optimization algorithms to deliver accurate, reliable, and scalable diagnostic solutions.
              </p>
              <p>
                We combine innovation, data science, and medical expertise to bridge the gap between AI research and real-world clinical application, helping doctors and healthcare providers detect pneumonia more efficiently and effectively.
              </p>
              <p>
                Through relentless innovation and unwavering dedication to quality, we strive to build products that not only meet today's challenges but anticipate tomorrow's opportunities in healthcare diagnostics.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300">The principles that guide our work</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Compassion</h3>
              <p className="text-gray-600 leading-relaxed">
                Every solution we develop is driven by our commitment to improving patient care and saving lives through early detection.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-6">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of AI technology to create cutting-edge solutions that transform healthcare diagnostics.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Reliability</h3>
              <p className="text-gray-600 leading-relaxed">
                Our models are built with precision and tested rigorously to ensure accurate, dependable results for healthcare professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The brilliant minds behind PneuDOC</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ronal Thomas */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Ronal Thomas</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">Data Scientist</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Ronal is a passionate researcher in the field of Artificial Intelligence with a strong foundation in mathematics and data science. His expertise in deep learning, pretrained models, and optimization algorithms drives the project's technical direction.
              </p>
            </div>

            {/* Sineha Manjary R */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mb-6">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sineha Manjary R</h3>
                <p className="text-purple-600 font-semibold text-lg mb-4">Data Scientist</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sineha specializes in machine learning and deep learning architectures, focusing on the integration of pretrained models with optimization techniques. Her analytical approach ensures high diagnostic accuracy.
              </p>
            </div>

            {/* Dr. Teena Jose */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:transform hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full mb-6">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Teena Jose</h3>
                <p className="text-green-600 font-semibold text-lg mb-4">Academic Mentor</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Dr. Teena Jose brings valuable academic expertise and guidance to the team. With her deep knowledge of AI and research methodologies, she ensures our project maintains the highest scientific standards.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
}