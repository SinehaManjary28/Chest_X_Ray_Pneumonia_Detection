// frontend/src/Pneumonia.jsx
import React, { useState } from "react";
import mainImage from "./assets/images/main_image.jpg";

/**
 * Optimized Pneumonia page
 * - Uses <img loading="lazy"> for hero background to avoid expensive CSS repaint
 * - Removes large backdrop-blur on big sections
 * - Reduces shadow/gradient complexity for better scrolling performance
 * - Keeps same content and layout, visually similar
 */

const Pneumonia = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background image as an img element — allows lazy-loading & better paint behaviour */}
        <img
          src={mainImage}
          alt="Pneumonia hero"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
          style={{ willChange: "transform" }}
        />

        {/* Simple dark overlay (no heavy backdrop-blur) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content card (small, centered) */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <div className="rounded-3xl p-8 md:p-12 border border-white/20 bg-white/10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3">
              Pneumonia
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-white/90 mb-4">
              Information Hub
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Comprehensive pneumonia detection and health resources online
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview */}
          <section id="overview" className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
                What is Pneumonia?
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                Pneumonia is an infection that inflames the air sacs in one or both lungs.
                The air sacs may fill with fluid or pus, causing cough with phlegm or pus,
                fever, chills, and difficulty breathing. Bacteria, viruses, and fungi can cause pneumonia.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Causes</h3>
                  <p className="text-gray-700 text-sm">
                    Bacteria, viruses, fungi and other microorganisms that infect the respiratory system.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Prevalence</h3>
                  <p className="text-gray-700 text-sm">
                    Affects millions worldwide annually with varying severity.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Treatment</h3>
                  <p className="text-gray-700 text-sm">
                    Treatable with proper medical care and early intervention.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Symptoms */}
          <section id="symptoms" className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Symptoms of Pneumonia
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-red-50 border border-red-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-red-700 mb-4">Common Symptoms</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>Persistent cough with phlegm</li>
                    <li>Fever and chills</li>
                    <li>Shortness of breath</li>
                    <li>Chest pain when breathing or coughing</li>
                    <li>Fatigue and muscle aches</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-orange-50 border border-orange-100 shadow-sm">
                  <h3 className="text-xl font-semibold text-orange-700 mb-4">Severe Symptoms</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>High fever (over 39°C)</li>
                    <li>Confusion (especially elderly)</li>
                    <li>Blue lips or fingernails (cyanosis)</li>
                    <li>Rapid heartbeat</li>
                    <li>Severe breathing difficulty</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Types */}
          <section id="types" className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Types of Pneumonia</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { key: "Bacterial", color: "green", desc: "Often caused by Streptococcus pneumoniae." },
                  { key: "Viral", color: "blue", desc: "Often milder — caused by influenza, RSV, COVID-19." },
                  { key: "Fungal", color: "yellow", desc: "Less common; affects immunocompromised people." },
                  { key: "Hospital-acquired", color: "red", desc: "Develops during hospital stays; more serious." }
                ].map((item) => (
                  <div key={item.key} className="p-6 rounded-lg border border-gray-100 shadow-sm text-center">
                    <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${item.color === "green" ? "bg-green-500" : item.color === "blue" ? "bg-blue-500" : item.color === "yellow" ? "bg-yellow-500" : "bg-red-500"}`}>
                      <span className="text-white font-bold">{item.key.charAt(0)}</span>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{item.key}</h3>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Treatment */}
          <section id="treatment" className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Treatment Options</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg bg-green-50 border border-green-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Medical Treatment</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Antibiotics</strong> — for bacterial infections</li>
                    <li><strong>Antivirals</strong> — when viral causes are suspected</li>
                    <li><strong>Oxygen therapy</strong> — for severe breathing difficulty</li>
                    <li><strong>Hospitalization</strong> — for high-risk or severe cases</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-blue-50 border border-blue-100 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Home Care</h3>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>Rest and hydration</li>
                    <li>Use humidifier for easier breathing</li>
                    <li>Follow medication and doctor’s advice</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention */}
          <section id="prevention" className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Prevention Strategies</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-purple-50 border border-purple-100 text-center shadow-sm">
                  <h3 className="font-semibold mb-2">Vaccination</h3>
                  <p className="text-sm text-gray-700">Pneumococcal and annual flu vaccines help reduce risk.</p>
                </div>
                <div className="p-6 rounded-lg bg-teal-50 border border-teal-100 text-center shadow-sm">
                  <h3 className="font-semibold mb-2">Good Hygiene</h3>
                  <p className="text-sm text-gray-700">Hand washing and respiratory etiquette reduce spread.</p>
                </div>
                <div className="p-6 rounded-lg bg-indigo-50 border border-indigo-100 text-center shadow-sm">
                  <h3 className="font-semibold mb-2">Healthy Lifestyle</h3>
                  <p className="text-sm text-gray-700">Nutrition, sleep and exercise strengthen immunity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency */}
          <section id="emergency" className="mb-12">
            <div className="rounded-2xl p-6 md:p-10 border border-red-200 bg-red-50 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">!</span>
                </div>
                <h2 className="text-2xl font-bold text-red-800">When to Seek Emergency Care</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/90 p-4 rounded-lg border border-red-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Call emergency services if you have:</h3>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>Severe difficulty breathing</li>
                    <li>Rapidly worsening chest pain</li>
                    <li>High fever and confusion</li>
                    <li>Blue lips or fingernails</li>
                  </ul>
                </div>

                <div className="bg-white/90 p-4 rounded-lg border border-red-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">Additional warning signs</h3>
                  <ul className="text-sm text-red-700 space-y-2">
                    <li>Confusion or altered mental state</li>
                    <li>Rapid heartbeat</li>
                    <li>Severe weakness or dizziness</li>
                    <li>Persistent vomiting</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center bg-red-100/80 p-4 rounded-lg">
                <p className="text-red-800 font-semibold">Don't wait — seek immediate medical attention for these symptoms!</p>
              </div>
            </div>
          </section>

          {/* Risk Factors */}
          <section className="mb-12">
            <div className="rounded-2xl bg-white/90 p-6 md:p-10 border border-orange-100 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Risk Factors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Age Groups</h3>
                  <p className="text-sm text-gray-700">Children under 2 and adults over 65 are at higher risk.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Smoking</h3>
                  <p className="text-sm text-gray-700">Tobacco damages lung defences against infections.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Chronic Conditions</h3>
                  <p className="text-sm text-gray-700">Asthma, COPD, diabetes and heart disease increase risk.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Weakened Immunity</h3>
                  <p className="text-sm text-gray-700">Medications or underlying illness can lower defenses.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Recent Illness</h3>
                  <p className="text-sm text-gray-700">Recent cold, flu, or respiratory infections may increase risk.</p>
                </div>
                <div className="p-6 rounded-lg border border-gray-100 bg-gray-50 shadow-sm">
                  <h3 className="font-semibold mb-2">Environment</h3>
                  <p className="text-sm text-gray-700">Pollution, crowded spaces and chemical exposure raise risk.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Pneumonia;
