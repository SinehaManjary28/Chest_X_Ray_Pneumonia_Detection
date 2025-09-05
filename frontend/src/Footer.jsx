// src/Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa"; // ✅ added icons
import mainLogo from "./assets/images/main_logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        
        {/* Left Section - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li onClick={() => navigate("/")} className="hover:text-white cursor-pointer">Detect</li>
            <li onClick={() => navigate("/pneumonia")} className="hover:text-white cursor-pointer">Pneumonia</li>
            <li onClick={() => navigate("/blog")} className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Medics</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li onClick={() => navigate("/contact")} className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Middle Section - Logo + PneuDoc */}
        <div className="flex flex-col items-center justify-center">
          <img 
            src={mainLogo} 
            alt="PneuDoc Logo" 
            className="w-16 h-16 mb-3"
          />
          <h2 className="text-3xl font-bold text-white mb-2">PneuDoc</h2>
          <p className="text-gray-400 text-sm italic text-center">
            Empowering lives with early detection 💙
          </p>
        </div>

        {/* Right Section - Contact Info + Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>📧 Email: support@pneudoc.com</p>
          <p>📍 Address: 123 Health Street, Wellness City</p>
          <p>📞 Phone: +91 98765 43210</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Center Catchy Line */}
      <div className="text-center text-cyan-400 mt-10 border-t border-gray-700 pt-4 font-semibold">
        🌟 "Breathing life into healthcare – Detect early, live healthy." 🌟
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-4 text-sm">
        © {new Date().getFullYear()} PneuDoc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;