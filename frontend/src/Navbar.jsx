import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/images/main_logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center px-12 py-5 bg-gray-900/95 backdrop-blur-md text-white fixed w-full z-20 shadow-lg">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        <span className="font-bold text-xl tracking-wide">PneuDoc</span>
      </div>

      {/* Menu */}
      <ul className="flex flex-1 justify-evenly text-base font-semibold ml-20">
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/detect")}
        >
          Detect
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/pneumonia")}
        >
          Pneumonia
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/blog")}
        >
          Blog
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/medics")}
        >
          Medics
        </li>
        <li className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/about")}>About</li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;