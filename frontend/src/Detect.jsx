// frontend/src/Detect.jsx
import React, { useState } from "react";

const backendUrl = "http://127.0.0.1:5000"; // <- change to "http://192.168.1.34:5000" for LAN testing or to your production URL

export default function Detect() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const onFileChange = (e) => {
    setError("");
    setResult(null);
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  const onDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setResult(null);
    setError("");
  };

  const onDragOver = (e) => e.preventDefault();

  const handleDetect = async () => {
    setError("");
    setResult(null);

    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${backendUrl}/predict`, {
        method: "POST",
        body: formData
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Server returned ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Prediction failed: " + (err.message || err));
    } finally {
      setLoading(false);
    }
  };

  const resetAll = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    setError("");
  };

  const resultColor = () => {
    if (!result) return "gray";
    if (result.predicted_class === 1) return "bg-red-100 border-red-400";
    return "bg-green-100 border-green-400";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white/90 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Detect Pneumonia</h2>

        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="border-2 border-dashed rounded-md p-6 text-center cursor-pointer mb-4"
          onClick={() => document.getElementById("file-input").click()}
        >
          <input
            id="file-input"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onFileChange}
          />
          {!file ? (
            <p className="text-gray-600">Click or drag an X-ray image here</p>
          ) : (
            <div>
              <p className="font-semibold">{file.name}</p>
              <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(0)} KB</p>
            </div>
          )}
        </div>

        {previewUrl && (
          <div className="mb-4">
            <img src={previewUrl} alt="preview" className="max-w-full rounded" />
          </div>
        )}

        <div className="flex gap-3 mb-4">
          <button
            onClick={handleDetect}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white rounded font-semibold disabled:opacity-60"
          >
            {loading ? "Detecting..." : "Detect Pneumonia"}
          </button>

          <button onClick={resetAll} className="px-4 py-2 bg-gray-200 rounded">
            Reset
          </button>
        </div>

        {error && <div className="text-red-600 mb-3">{error}</div>}

        {result && (
          <div className={`p-4 border rounded ${resultColor()}`}>
            <h3 className="font-bold text-lg mb-2">Result</h3>
            <p><strong>Label:</strong> {result.predicted_label}</p>
            <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
            <p className="text-sm text-gray-600 mt-2">Class: {result.predicted_class}</p>
          </div>
        )}
      </div>
    </div>
  );
}
