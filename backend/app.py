# backend/app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from model_loader import load_model_weights
from utils import preprocess_image_pil
import tensorflow as tf
import uuid

# Configuration
MODEL_PATH = os.path.join(os.path.dirname(__file__), "model", "vit.keras")
UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), "uploads")
ALLOWED_EXT = {"png","jpg","jpeg","bmp","tiff"}
MAX_CONTENT_LENGTH = 16 * 1024 * 1024  # 16 MB max upload

# make folders
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH
CORS(app)  # allow all origins for development; lock down for production

# Load model once on startup
print("Loading model from:", MODEL_PATH)
model = load_model_weights(MODEL_PATH)
if model is None:
    raise RuntimeError("Failed to load model. Check the model file.")

# compile (not strictly necessary for inference but reproducible)
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# ensure thread-safety: use a graph/session wrapper if needed; in TF2 eager is default.
# We'll use a simple lock for safety when predicting concurrently.
import threading
predict_lock = threading.Lock()

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXT

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status":"ok"}), 200

@app.route("/predict", methods=["POST"])
def predict():
    """
    POST /predict
    form-data: file=<image file>
    returns: json { predicted_label, predicted_class (0/1), confidence (0..1) }
    """
    if 'file' not in request.files:
        return jsonify({"error":"no file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error":"no selected file"}), 400
    if file and allowed_file(file.filename):
        # save temporarily
        fname = f"{uuid.uuid4().hex}_{file.filename}"
        fpath = os.path.join(app.config['UPLOAD_FOLDER'], fname)
        file.save(fpath)

        try:
            img_arr = preprocess_image_pil(fpath, target_size=(224,224))
            with predict_lock:
                pred_prob = float(model.predict(img_arr, verbose=0)[0][0])
            predicted_class = 1 if pred_prob > 0.5 else 0
            class_names = {0: "NORMAL", 1: "PNEUMONIA"}
            predicted_label = class_names[predicted_class]

            response = {
                "predicted_label": predicted_label,
                "predicted_class": predicted_class,
                "confidence": pred_prob
            }
            return jsonify(response), 200
        except Exception as e:
            return jsonify({"error": f"prediction failed: {str(e)}"}), 500
        finally:
            # optionally remove file
            try:
                os.remove(fpath)
            except Exception:
                pass
    else:
        return jsonify({"error":"file type not allowed"}), 400

if __name__ == "__main__":
    # For local dev only. For production use waitress/gunicorn.
    app.run(host="0.0.0.0", port=5000, debug=True)
