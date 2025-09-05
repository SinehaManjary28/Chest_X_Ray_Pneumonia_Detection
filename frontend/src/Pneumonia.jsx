import React, { useState } from "react";
import mainImage from "./assets/images/main_image.jpg";

const Pneumonia = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section with Background Image */}
      <section 
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${mainImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Glassmorphism title container */}
        <div className="relative z-10 text-center">
          <div className="backdrop-blur-md bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl max-w-4xl mx-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Pneumonia
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-8">
              Information Hub
            </h2>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Comprehensive pneumonia detection and health resources online
            </p>
        
          </div>
        </div>
      </section>

      {/* Main Content with Beige Background */}
      <main className="bg-gradient-to-br from-amber-50 to-orange-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Overview Section */}
          <section id="overview" className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">What is Pneumonia?</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-4xl mx-auto">
                Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with fluid or pus, 
                causing cough with phlegm or pus, fever, chills, and difficulty breathing. Various organisms, including bacteria, 
                viruses, and fungi, can cause pneumonia.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Causes</h3>
                  <p className="text-gray-700">Bacteria, viruses, fungi, and other microorganisms that infect the respiratory system</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Prevalence</h3>
                  <p className="text-gray-700">Affects millions of people worldwide annually, with varying degrees of severity</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md border border-purple-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Treatment</h3>
                  <p className="text-gray-700">Highly treatable with proper medical care and early intervention</p>
                </div>
              </div>
            </div>
          </section>

          {/* Symptoms Section */}
          <section id="symptoms" className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Symptoms of Pneumonia</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-xl shadow-md border border-red-200">
                  <h3 className="text-2xl font-bold text-red-700 mb-6">Common Symptoms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Persistent cough with phlegm or mucus production</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Fever and chills throughout the day</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Shortness of breath during normal activities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Chest pain when breathing or coughing</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Fatigue and general muscle aches</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-yellow-100 p-8 rounded-xl shadow-md border border-orange-200">
                  <h3 className="text-2xl font-bold text-orange-700 mb-6">Severe Symptoms</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">High fever over 102°F (39°C)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Confusion or delirium, especially in elderly</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Blue lips or fingernails (cyanosis)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Rapid heartbeat and pulse</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg">Severe breathing difficulty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Types Section */}
          <section id="types" className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Types of Pneumonia</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">B</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Bacterial</h3>
                  <p className="text-gray-700">Most common type, often caused by Streptococcus pneumoniae bacteria</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">V</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Viral</h3>
                  <p className="text-gray-700">Often milder, caused by flu viruses, COVID-19, or respiratory syncytial virus</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Fungal</h3>
                  <p className="text-gray-700">Less common, typically affects people with compromised immune systems</p>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">H</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Hospital-acquired</h3>
                  <p className="text-gray-700">Develops during hospital stays, often more serious and resistant</p>
                </div>
              </div>
            </div>
          </section>

          {/* Treatment Section */}
          <section id="treatment" className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Treatment Options</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-10 rounded-xl shadow-md border border-green-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Medical Treatment</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Antibiotics</strong>
                        <p className="text-gray-700">Primary treatment for bacterial pneumonia infections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Antivirals</strong>
                        <p className="text-gray-700">May reduce severity and duration of viral pneumonia</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Oxygen therapy</strong>
                        <p className="text-gray-700">Essential for patients with severe breathing difficulties</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Hospitalization</strong>
                        <p className="text-gray-700">Required for severe cases and high-risk patients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-10 rounded-xl shadow-md border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">Home Care</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Rest</strong>
                        <p className="text-gray-700">Allow your body time to heal and recover properly</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Hydration</strong>
                        <p className="text-gray-700">Stay well hydrated to help thin mucus secretions</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Humidifier</strong>
                        <p className="text-gray-700">Moist air can ease breathing and reduce coughing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <strong className="text-gray-800">Medication compliance</strong>
                        <p className="text-gray-700">Complete entire prescribed antibiotic course</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Prevention Section */}
          <section id="prevention" className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Prevention Strategies</h2>
              <div className="grid md:grid-cols-3 gap-10">
                <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md border border-purple-200">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">V</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Vaccination</h3>
                  <p className="text-gray-700">Get pneumonia vaccines and annual flu shots to build immunity</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md border border-teal-200">
                  <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">H</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Good Hygiene</h3>
                  <p className="text-gray-700">Wash hands frequently and avoid touching your face regularly</p>
                </div>
                <div className="text-center p-8 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-md border border-indigo-200">
                  <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-2xl">L</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Healthy Lifestyle</h3>
                  <p className="text-gray-700">Exercise regularly, eat nutritious foods, and get adequate sleep</p>
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Section */}
          <section id="emergency" className="mb-20">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-300 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">!</span>
                </div>
                <h2 className="text-4xl font-bold text-red-800">When to Seek Emergency Care</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-white/80 p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-red-800 mb-6">Call Emergency Services if you experience:</h3>
                  <ul className="space-y-4 text-red-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Severe difficulty breathing or gasping for air</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Chest pain that worsens rapidly</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>High fever over 102°F (39°C)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Blue lips or fingernails</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 p-8 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-red-800 mb-6">Additional warning signs:</h3>
                  <ul className="space-y-4 text-red-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Confusion or altered mental state</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Rapid heartbeat or irregular pulse</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Severe weakness or dizziness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Persistent vomiting</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-10 p-6 bg-red-100/80 rounded-xl">
                <p className="text-red-800 font-bold text-xl">Don't wait - seek immediate medical attention for these symptoms!</p>
              </div>
            </div>
          </section>

          {/* Risk Factors */}
          <section className="mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Risk Factors</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Age Groups</h3>
                  <p className="text-gray-700">Children under 2 years and adults over 65 years are at higher risk</p>
                </div>
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Smoking</h3>
                  <p className="text-gray-700">Tobacco use damages lung defenses against respiratory infections</p>
                </div>
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Chronic Conditions</h3>
                  <p className="text-gray-700">Asthma, COPD, heart disease, and diabetes increase vulnerability</p>
                </div>
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Immune System</h3>
                  <p className="text-gray-700">Weakened immunity due to medications or underlying illness</p>
                </div>
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Illness</h3>
                  <p className="text-gray-700">Recent cold, flu, or other respiratory infections</p>
                </div>
                <div className="p-8 border-2 border-gray-200 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Environment</h3>
                  <p className="text-gray-700">Exposure to polluted air, chemicals, or crowded spaces</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      s
    </div>
  );
};

export default Pneumonia;