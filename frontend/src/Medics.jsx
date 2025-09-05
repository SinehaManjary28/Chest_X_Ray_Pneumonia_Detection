import React, { useState, useEffect } from 'react';
import mainImage from "./assets/images/main_image.jpg";

const Medics = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHospitals, setShowHospitals] = useState(false);

  // Mock hospital data - Replace with real API call
  const mockHospitals = [
    {
      id: 1,
      name: "Apollo Hospital",
      address: "154/11, Opp. IIM-B, Bannerghatta Road, Bangalore",
      distance: "2.3 km",
      phone: "+91 80 2692 2222",
      rating: 4.5,
      specialties: ["Cardiology", "Pulmonology", "Emergency"],
      availability: "24/7"
    },
    {
      id: 2,
      name: "Fortis Hospital",
      address: "14, Cunningham Road, Bangalore",
      distance: "3.7 km",
      phone: "+91 80 6621 4444",
      rating: 4.3,
      specialties: ["Respiratory Medicine", "Internal Medicine", "ICU"],
      availability: "24/7"
    },
    {
      id: 3,
      name: "Manipal Hospital",
      address: "98, Hal Airport Road, Bangalore",
      distance: "5.1 km",
      phone: "+91 80 2502 4444",
      rating: 4.4,
      specialties: ["Pulmonology", "Critical Care", "Radiology"],
      availability: "24/7"
    },
    {
      id: 4,
      name: "Narayana Health",
      address: "258/A, Bommasandra Industrial Area, Bangalore",
      distance: "6.8 km",
      phone: "+91 80 7122 2222",
      rating: 4.2,
      specialties: ["Emergency Medicine", "Respiratory Care"],
      availability: "24/7"
    },
    {
      id: 5,
      name: "BGS Gleneagles Global Hospital",
      address: "67, Uttarahalli Road, Kengeri, Bangalore",
      distance: "7.2 km",
      phone: "+91 80 4969 9999",
      rating: 4.1,
      specialties: ["Pulmonology", "Emergency Care", "Diagnostics"],
      availability: "24/7"
    }
  ];

  // Get user's current location
  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by this browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
          accuracy: position.coords.accuracy
        });
        
        // Simulate API call to find nearby hospitals
        setTimeout(() => {
          setHospitals(mockHospitals);
          setShowHospitals(true);
          setLoading(false);
        }, 1500);
      },
      (error) => {
        let errorMessage;
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location services.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case error.TIMEOUT:
            errorMessage = "Location request timed out.";
            break;
          default:
            errorMessage = "An unknown error occurred while retrieving location.";
            break;
        }
        setError(errorMessage);
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  };

  // Function to get directions (opens in Google Maps)
  const getDirections = (hospital) => {
    if (location) {
      const url = `https://www.google.com/maps/dir/${location.lat},${location.lng}/${encodeURIComponent(hospital.address)}`;
      window.open(url, '_blank');
    } else {
      const url = `https://www.google.com/maps/search/${encodeURIComponent(hospital.address)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div 
      className="h-screen w-screen bg-cover bg-center bg-fixed overflow-y-auto"
      style={{ backgroundImage: `url(${mainImage})` }}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10">
        {/* Hero Section - Full Screen */}
        <div className="min-h-screen flex items-center justify-center px-4 pt-24">
          <div className="max-w-6xl mx-auto text-center w-full">
            {/* Main Title with Glassmorphism Background */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl mt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg">
                Find Nearby Medical Care
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Locate hospitals and medical facilities near you for immediate care and consultation
              </p>
            </div>
            
            {/* Location Card with Enhanced Glassmorphism */}
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-20 translate-x-20 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-16 -translate-x-16 blur-xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 drop-shadow-md">
                  Your Location Status
                </h2>
                
                {loading && (
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <p className="text-white/90 text-base md:text-lg drop-shadow-md text-center">
                      Getting your location and finding nearby hospitals...
                    </p>
                  </div>
                )}
                
                {error && (
                  <div className="text-center">
                    <p className="text-red-200 mb-6 text-base md:text-lg font-medium drop-shadow-md">
                      {error}
                    </p>
                    <button 
                      className="bg-gradient-to-r from-red-500/80 to-red-600/80 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold hover:from-red-600/90 hover:to-red-700/90 transition-all duration-300 transform hover:scale-105 shadow-xl border border-white/20"
                      onClick={getCurrentLocation}
                    >
                      Try Again
                    </button>
                  </div>
                )}
                
                {location && !loading && (
                  <div className="text-center">
                    <p className="text-green-200 text-base md:text-lg mb-6 font-semibold drop-shadow-md">
                      Location acquired (±{Math.round(location.accuracy)}m accuracy)
                    </p>
                    <button 
                      className="bg-gradient-to-r from-blue-500/80 to-blue-600/80 backdrop-blur-sm text-white px-6 py-2 rounded-full font-bold hover:from-blue-600/90 hover:to-blue-700/90 transition-all duration-300 transform hover:scale-105 shadow-xl border border-white/20"
                      onClick={getCurrentLocation}
                    >
                      Refresh Location
                    </button>
                  </div>
                )}

                {!location && !loading && !error && (
                  <div className="text-center">
                    <p className="text-white/90 mb-8 text-base md:text-lg leading-relaxed drop-shadow-md">
                      Click below to find nearby hospitals and medical facilities
                    </p>
                    <button 
                      className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-sm text-white px-8 md:px-10 py-3 md:py-4 text-base md:text-lg rounded-full font-bold hover:from-blue-700/90 hover:to-blue-800/90 transition-all duration-300 transform hover:scale-105 shadow-2xl border border-white/20"
                      onClick={getCurrentLocation}
                    >
                      Get My Location
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hospitals List Section with Glassmorphism */}
        {showHospitals && hospitals.length > 0 && (
          <div className="py-16 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
              {/* Section Title with Glassmorphism */}
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 mb-12 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg">
                  NEARBY HOSPITALS & MEDICAL CENTERS
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hospitals.map((hospital) => (
                  <div 
                    key={hospital.id} 
                    className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-xl shadow-2xl overflow-hidden hover:bg-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    {/* Hospital Header with Enhanced Glassmorphism */}
                    <div className="bg-gradient-to-r from-blue-600/80 to-blue-700/80 backdrop-blur-sm p-6 text-white border-b border-white/20">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg md:text-xl font-bold leading-tight flex-1 pr-4 drop-shadow-md">
                          {hospital.name}
                        </h3>
                        <div className="flex flex-col items-end gap-2">
                          <span className="bg-yellow-400/90 backdrop-blur-sm text-yellow-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            ⭐ {hospital.rating}
                          </span>
                          <span className="bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {hospital.distance}
                          </span>
                        </div>
                      </div>
                      <p className="text-blue-100 text-sm font-medium drop-shadow-sm">
                        {hospital.availability}
                      </p>
                    </div>
                    
                    {/* Hospital Details */}
                    <div className="p-6">
                      <div className="mb-6">
                        <p className="text-white/90 text-sm leading-relaxed mb-3 flex items-start gap-2 drop-shadow-sm">
                          <span className="text-blue-300 mt-1">📍</span>
                          {hospital.address}
                        </p>
                        <p className="text-blue-300 text-sm font-medium mb-3 flex items-center gap-2 drop-shadow-sm">
                          <span>📞</span>
                          {hospital.phone}
                        </p>
                      </div>
                      
                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm drop-shadow-sm">
                          SPECIALTIES:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hospital.specialties.map((specialty, index) => (
                            <span 
                              key={index} 
                              className="bg-blue-500/30 backdrop-blur-sm text-blue-100 px-3 py-1 rounded-full text-xs border border-blue-400/50 font-medium shadow-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Directions Button */}
                      <button 
                        className="w-full bg-gradient-to-r from-orange-500/80 to-red-500/80 backdrop-blur-sm text-white py-3 rounded-lg font-bold hover:from-orange-600/90 hover:to-red-600/90 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 border border-white/20"
                        onClick={() => getDirections(hospital)}
                      >
                        <span>🗺️</span>
                        Get Directions
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* How it Works Section with Enhanced Glassmorphism */}
        <div className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-lg bg-white/15 border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Enhanced decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full -translate-y-20 translate-x-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full translate-y-16 -translate-x-16 blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                    How It Works
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                    Simple steps to find medical care near you
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: "📍", title: "Share Location", desc: "We access your location with your permission" },
                    { icon: "🔍", title: "Search Nearby", desc: "Find hospitals and medical facilities around you" },
                    { icon: "📋", title: "View Results", desc: "See results sorted by distance with details" },
                    { icon: "🗺️", title: "Get Directions", desc: "Access contact details and navigation" }
                  ].map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 hover:bg-white/25 hover:border-white/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="text-3xl mb-4">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-2 drop-shadow-sm">{step.title}</h3>
                        <p className="text-sm text-white/80 drop-shadow-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-12">
                  <div className="inline-flex items-center justify-center backdrop-blur-md bg-white/20 border border-white/30 rounded-full px-6 md:px-8 py-3 shadow-xl">
                    <span className="text-white font-semibold drop-shadow-sm text-sm md:text-base">
                      🔒 Your location data is not stored and is only used to find nearby medical facilities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medics;