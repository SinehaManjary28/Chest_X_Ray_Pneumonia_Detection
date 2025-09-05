// frontend/src/Medics.jsx
import React, { useState } from "react";
import mainImage from "./assets/images/main_image.jpg";

/**
 * Optimized Medics page
 * - Uses <img loading="lazy"> for background to reduce repaint cost
 * - Removes `bg-fixed` and large backdrop-blur on full containers
 * - Keeps original content and behaviour
 */

const Medics = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showHospitals, setShowHospitals] = useState(false);

  const mockHospitals = [
    {
      id: 1,
      name: "Apollo Hospital",
      address: "154/11, Opp. IIM-B, Bannerghatta Road, Bangalore",
      distance: "2.3 km",
      phone: "+91 80 2692 2222",
      rating: 4.5,
      specialties: ["Cardiology", "Pulmonology", "Emergency"],
      availability: "24/7",
    },
    {
      id: 2,
      name: "Fortis Hospital",
      address: "14, Cunningham Road, Bangalore",
      distance: "3.7 km",
      phone: "+91 80 6621 4444",
      rating: 4.3,
      specialties: ["Respiratory Medicine", "Internal Medicine", "ICU"],
      availability: "24/7",
    },
    {
      id: 3,
      name: "Manipal Hospital",
      address: "98, Hal Airport Road, Bangalore",
      distance: "5.1 km",
      phone: "+91 80 2502 4444",
      rating: 4.4,
      specialties: ["Pulmonology", "Critical Care", "Radiology"],
      availability: "24/7",
    },
    {
      id: 4,
      name: "Narayana Health",
      address: "258/A, Bommasandra Industrial Area, Bangalore",
      distance: "6.8 km",
      phone: "+91 80 7122 2222",
      rating: 4.2,
      specialties: ["Emergency Medicine", "Respiratory Care"],
      availability: "24/7",
    },
    {
      id: 5,
      name: "BGS Gleneagles Global Hospital",
      address: "67, Uttarahalli Road, Kengeri, Bangalore",
      distance: "7.2 km",
      phone: "+91 80 4969 9999",
      rating: 4.1,
      specialties: ["Pulmonology", "Emergency Care", "Diagnostics"],
      availability: "24/7",
    },
  ];

  const getCurrentLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          lat: latitude,
          lng: longitude,
          accuracy: position.coords.accuracy,
        });

        // Simulate API call to find nearby hospitals
        setTimeout(() => {
          setHospitals(mockHospitals);
          setShowHospitals(true);
          setLoading(false);
        }, 1200);
      },
      (err) => {
        let errorMessage;
        switch (err.code) {
          case err.PERMISSION_DENIED:
            errorMessage = "Location access denied. Please enable location services.";
            break;
          case err.POSITION_UNAVAILABLE:
            errorMessage = "Location information is unavailable.";
            break;
          case err.TIMEOUT:
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
        maximumAge: 300000,
      }
    );
  };

  const getDirections = (hospital) => {
    if (location) {
      const url = `https://www.google.com/maps/dir/${location.lat},${location.lng}/${encodeURIComponent(
        hospital.address
      )}`;
      window.open(url, "_blank");
    } else {
      const url = `https://www.google.com/maps/search/${encodeURIComponent(hospital.address)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-amber-50 text-white">
      {/* Background as <img> for smoother painting */}
      <img
        src={mainImage}
        alt="medics background"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: "brightness(0.6)" }}
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      <div className="relative z-10">
        {/* Hero */}
        <div className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="rounded-3xl p-8 md:p-12 mb-8 bg-white/10 border border-white/20 shadow-sm">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Find Nearby Medical Care</h1>
              <p className="text-sm md:text-base max-w-3xl mx-auto text-white/90">
                Locate hospitals and medical facilities near you for immediate care and consultation
              </p>
            </div>

            <div className="max-w-2xl mx-auto rounded-3xl p-6 bg-white/8 border border-white/20 shadow-sm">
              <h2 className="text-lg md:text-xl font-semibold mb-4">Your Location Status</h2>

              {loading && (
                <div className="flex flex-col items-center gap-4 py-6">
                  <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  <div className="text-white/90">Getting your location and finding nearby hospitals...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-4">
                  <p className="text-red-200 mb-4">{error}</p>
                  <button
                    onClick={getCurrentLocation}
                    className="inline-block px-6 py-2 rounded-full bg-red-500 text-white font-semibold shadow-sm"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {!loading && !error && !location && (
                <div className="text-center py-6">
                  <p className="mb-4 text-white/90">Click below to find nearby hospitals and medical facilities</p>
                  <button
                    onClick={getCurrentLocation}
                    className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
                  >
                    Get My Location
                  </button>
                </div>
              )}

              {location && !loading && (
                <div className="text-center py-6">
                  <p className="text-green-200 mb-4">Location acquired (±{Math.round(location.accuracy)}m accuracy)</p>
                  <button
                    onClick={getCurrentLocation}
                    className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-sm"
                  >
                    Refresh Location
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hospitals list */}
        {showHospitals && hospitals.length > 0 && (
          <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-2xl p-4 mb-6 bg-white/10 border border-white/20 text-center shadow-sm">
                <h3 className="text-2xl font-bold">NEARBY HOSPITALS & MEDICAL CENTERS</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                  <article
                    key={hospital.id}
                    className="rounded-xl bg-white/10 border border-white/20 p-4 shadow-sm flex flex-col justify-between"
                  >
                    <header className="mb-3">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold">{hospital.name}</h4>
                        <div className="text-right space-y-1">
                          <div className="inline-block px-2 py-0.5 rounded-full bg-yellow-400/90 text-yellow-900 text-sm font-semibold">
                            ⭐ {hospital.rating}
                          </div>
                          <div className="inline-block px-2 py-0.5 rounded-full bg-green-600 text-white text-sm font-semibold mt-1">
                            {hospital.distance}
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-white/90">{hospital.availability}</div>
                    </header>

                    <div className="mb-4 text-sm text-white/90">
                      <p className="flex items-start gap-2 mb-2">
                        <span className="text-blue-300">📍</span>
                        <span>{hospital.address}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📞</span> {hospital.phone}
                      </p>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((s, i) => (
                          <span key={i} className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-100">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => getDirections(hospital)}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                      >
                        🗺️ Get Directions
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* How it works */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto rounded-2xl p-6 bg-white/10 border border-white/20 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">How It Works</h2>
              <p className="text-sm md:text-base text-white/90 max-w-3xl mx-auto mt-2">
                Simple steps to find medical care near you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "📍", title: "Share Location", desc: "We access your location with your permission" },
                { icon: "🔍", title: "Search Nearby", desc: "Find hospitals and medical facilities around you" },
                { icon: "📋", title: "View Results", desc: "See results sorted by distance with details" },
                { icon: "🗺️", title: "Get Directions", desc: "Access contact details and navigation" },
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-white/6 text-center">
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h4 className="font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-white/90">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block px-4 py-2 bg-white/6 rounded-full">
                <span className="text-white text-sm">🔒 Your location data is not stored and is only used to find nearby medical facilities</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Medics;
