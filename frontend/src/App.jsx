import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./home";
import Contact from "./Contact";
import Blog from "./Blog";
import Detect from "./Detect";
import Medics from "./Medics";
import About from "./About"; 
import Pneumonia from "./Pneumonia"; 
import Footer from "./Footer";
  // ✅ added back

const App = () => {
  return (
    <>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detect" element={<Detect />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/medics" element={<Medics />} />
        <Route path="/about" element={<About />} />
        <Route path="/pneumonia" element={<Pneumonia />} /> {/* ✅ Pneumonia route */}
      </Routes>
  <Footer /> 
    </>
  );
};

export default App;