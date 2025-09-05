// frontend/src/Detect.jsx
import React, { useState, useRef } from "react";
import mainImage from "./assets/images/detectbg.png";

/**
 * Detect.jsx – Pneumonia Detection UI with Backend Integration
 * Fix: root wrapper uses w-screen to guarantee viewport-width coverage.
 */
const backendUrl = "http://127.0.0.1:5000"; // change if needed for LAN/production

const Home = () => {
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showVerificationPopup, setShowVerificationPopup] = useState(false);

  // file state
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // upload/prediction state
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // refs for file input
  const fileInputRef = useRef(null);

  // Popup handlers
  const handleConfirmationClick = () => setShowConfirmationPopup(true);
  const handleVerificationClick = () => setShowVerificationPopup(true);
  const closeConfirmationPopup = () => setShowConfirmationPopup(false);
  const closeVerificationPopup = () => {
    setShowVerificationPopup(false);
  };

  // Drag & drop handlers
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

  // When user selects file via input
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

  // Send file to backend
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
    if (!result) return "bg-white/70 border-white/20";
    return result.predicted_class === 1
      ? "bg-red-100 border-red-400"
      : "bg-green-100 border-green-400";
  };

  return (
    // IMPORTANT: w-screen ensures this component spans the entire viewport width,
    // preventing it from being clipped by a parent container that has a limited width.
    <div className="relative min-h-screen w-screen bg-slate-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={mainImage}
          alt="bg"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-screen">
        {/* Main card */}
        <div className="max-w-4xl w-11/12 rounded-3xl backdrop-blur-md bg-white/8 border border-white/20 p-8 shadow-2xl text-white">
          <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">
            Detect Pneumonia
          </h1>
          <p className="text-lg text-white/90 mb-6 max-w-3xl">
            Upload a chest X-ray image and our ViT model will predict Pneumonia
            vs Normal. This demo sends your image to the local backend.
          </p>

          {/* Action buttons */}
          <div className="flex gap-4 justify-center items-center">
            <button
              onClick={handleConfirmationClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              How it works
            </button>

            <button
              onClick={handleVerificationClick}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Upload X-ray
            </button>
          </div>
        </div>
      </div>

      {/* Verification popup (fixed, centered) */}
      {showVerificationPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* dark background */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeVerificationPopup}
          />
          {/* popup card */}
          <div
            className="relative w-full max-w-3xl mx-auto rounded-2xl p-6"
            style={{ backgroundColor: "rgba(30, 58, 138, 0.92)" }}
          >
            <button
              onClick={closeVerificationPopup}
              className="absolute top-3 right-3 text-white/80 hover:text-white text-2xl font-bold"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-white mb-3">
              Upload X-ray for Verification
            </h2>
            <p className="text-sm text-white/80 mb-4">
              Drag & drop or click the area below. We accept PNG/JPG/JPEG/TIFF.
            </p>

            {/* Upload area */}
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 p-6 rounded-lg text-center cursor-pointer hover:border-white/40 transition-colors bg-gradient-to-br from-white/5 to-white/3"
            >
              <input
                id="verification-file-input"
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileInputChange}
              />
              <svg
                className="w-12 h-12 mx-auto text-white/80 mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <p className="text-white/80">
                Click or drag a chest X-ray image here
              </p>
              {file && (
                <p className="mt-2 text-sm text-white/80">
                  Selected: {file.name} — {(file.size / 1024).toFixed(0)} KB
                </p>
              )}
            </div>

            {/* Preview + detect + result */}
            <div className="mt-4 flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="w-full lg:w-1/2">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="preview"
                    className="w-full rounded-md border border-white/20"
                  />
                ) : (
                  <div className="w-full h-40 rounded-md border border-white/10 flex items-center justify-center text-sm text-white/60">
                    No preview available
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-3">
                <button
                  onClick={handleDetect}
                  disabled={loading}
                  className="relative overflow-hidden rounded-full px-6 py-3 text-white font-semibold shadow-xl"
                  style={{ backgroundColor: "#1e3a8a" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1e40af")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#1e3a8a")
                  }
                >
                  <span className="relative z-10">
                    {loading ? "Detecting..." : "Detect Pneumonia"}
                  </span>
                  <div
                    className="absolute inset-0 -translate-x-full transition-transform duration-700 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    }}
                  />
                </button>

                <button
                  onClick={() => {
                    setFile(null);
                    setPreviewUrl(null);
                    setResult(null);
                    setError("");
                  }}
                  className="px-4 py-2 rounded-md bg-white/10 text-white"
                >
                  Reset
                </button>

                {error && (
                  <div className="text-red-200 text-sm mt-1">{error}</div>
                )}

                {result && (
                  <div
                    className={`mt-2 p-3 border rounded ${resultColorClass()}`}
                  >
                    <div className="font-semibold text-gray-800 mb-1">
                      Prediction
                    </div>
                    <div>
                      <strong>Label:</strong> {result.predicted_label}
                    </div>
                    <div>
                      <strong>Confidence:</strong>{" "}
                      {(result.confidence * 100).toFixed(2)}%
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Class: {result.predicted_class}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation popup */}
      {showConfirmationPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeConfirmationPopup}
          />
          <div className="relative bg-white rounded-xl p-6 max-w-xl w-11/12">
            <button
              onClick={closeConfirmationPopup}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold mb-2">How it works</h3>
            <p className="text-sm text-gray-700">
              We preprocess the uploaded X-ray to 224×224 RGB and normalize
              pixel values, then run inference using the ViT model.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
