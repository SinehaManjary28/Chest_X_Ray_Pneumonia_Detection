// frontend/src/Detect.jsx
import React, { useState, useRef } from "react";
import mainImage from "./assets/images/detectbg.png";

const backendUrl = "http://127.0.0.1:5000"; // backend URL

const Home = () => {
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  const handleConfirmationClick = () => setShowConfirmationPopup(true);
  const handleVerificationClick = () => setShowVerificationPopup(true);
  const closeConfirmationPopup = () => setShowConfirmationPopup(false);
  const closeVerificationPopup = () => setShowVerificationPopup(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const f = e.dataTransfer?.files?.[0];
    if (f) handleFileChosen(f);
  };

  const handleFileInputChange = (e) => {
    const f = e.target.files?.[0];
    if (f) handleFileChosen(f);
  };

  const handleFileChosen = (f) => {
    setError("");
    setResult(null);
    setFile(f);
    try {
      const url = URL.createObjectURL(f);
      setPreviewUrl(url);
    } catch {
      setPreviewUrl(null);
    }
  };

  const handleDetect = async () => {
    setError("");
    setResult(null);

    if (!file) {
      setError("Please upload an X-ray image first.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${backendUrl}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errText = `Server returned ${response.status}`;
        try {
          const j = await response.json();
          if (j?.error) errText = j.error;
        } catch {
          const t = await response.text();
          if (t) errText = t;
        }
        throw new Error(errText);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Prediction failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  const resultColorClass = () => {
    if (!result) return "bg-white/90 border-white/20 text-gray-900";
    return result.predicted_class === 1
      ? "bg-red-100 border-red-400 text-gray-900"
      : "bg-green-100 border-green-400 text-gray-900";
  };

  return (
    <div className="relative min-h-screen w-screen bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={mainImage} alt="bg" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-screen px-4">
        {/* Main card */}
        <div className="max-w-4xl w-full rounded-3xl backdrop-blur-md bg-white/8 border border-white/10 p-8 shadow-2xl text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">Detect Pneumonia</h1>
          <p className="text-lg text-white/90 mb-6 max-w-3xl">
            Upload a chest X-ray image and our ViT model will predict Pneumonia vs Normal. This demo sends your image to the local backend.
          </p>

          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={handleConfirmationClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold shadow-lg hover:scale-105 transition-transform text-white"
            >
              How it works
            </button>

            <button
              onClick={handleVerificationClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold shadow-lg hover:scale-105 transition-transform text-white"
            >
              Upload X-ray
            </button>
          </div>
        </div>
      </div>

      {/* Verification popup */}
      {showVerificationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeVerificationPopup} />

          <div className="relative w-full max-w-3xl mx-auto rounded-2xl p-6" style={{ backgroundColor: "rgba(30, 58, 138, 0.96)" }}>
            <button
              onClick={closeVerificationPopup}
              aria-label="Close"
              className="absolute top-4 right-4 z-50 rounded-lg bg-white p-2 shadow-md hover:bg-gray-100 focus:outline-none"
              title="Close"
            >
              <span className="text-gray-800 font-bold text-lg leading-none">×</span>
            </button>

            <h2 className="text-2xl font-bold text-white mb-3">Upload X-ray for Verification</h2>
            <p className="text-sm text-white/90 mb-4">Drag & drop or click the area below. We accept PNG/JPG/JPEG/TIFF.</p>

            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/25 p-6 rounded-lg text-center cursor-pointer hover:border-white/40 transition-colors bg-gradient-to-br from-white/5 to-white/3"
            >
              <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileInputChange} />
              <svg className="w-12 h-12 mx-auto text-white/80 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <p className="text-white/90">Click or drag a chest X-ray image here</p>
              {file && <p className="mt-2 text-sm text-white/90">Selected: {file.name} — {(file.size/1024).toFixed(0)} KB</p>}
            </div>

            <div className="mt-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="w-full lg:w-1/2">
                {previewUrl ? (
                  <img src={previewUrl} alt="preview" className="w-full rounded-md border-4 border-white/90" />
                ) : (
                  <div className="w-full h-40 rounded-md border border-white/20 flex items-center justify-center text-sm text-white/80">
                    No preview available
                  </div>
                )}
              </div>

              {/* Buttons & Results */}
              <div className="w-full lg:w-1/2 flex flex-col gap-3">
                {/* Verify button - FORCE BLUE */}
                <button
                  onClick={handleDetect}
                  disabled={loading}
                  className="rounded-full px-6 py-3 font-semibold shadow-xl transition-colors text-white"
                  style={{ backgroundColor: "#2563EB" }} // force Tailwind blue-600
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>

                {/* Confirm button - FORCE GREEN */}
                <button
                  className="rounded-full px-6 py-3 font-semibold shadow-xl transition-colors text-white"
                  style={{ backgroundColor: "#16A34A" }} // force Tailwind green-600
                >
                  Confirm
                </button>

                {/* Reset button - GRAY */}
                <button
                  onClick={() => { setFile(null); setPreviewUrl(null); setResult(null); setError(""); }}
                  className="px-6 py-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold shadow-md transition-colors"
                >
                  Reset
                </button>

                {error && <div className="text-yellow-200 text-sm mt-1">{error}</div>}

                {result && (
                  <div className={`mt-2 p-3 border rounded ${resultColorClass()}`}>
                    <div className="font-semibold mb-1">Prediction</div>
                    <div><strong>Label:</strong> <span className="font-medium">{result.predicted_label}</span></div>
                    <div><strong>Confidence:</strong> <span className="font-medium">{(result.confidence * 100).toFixed(2)}%</span></div>
                    <div className="text-xs text-gray-600 mt-1">Class: {result.predicted_class}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
