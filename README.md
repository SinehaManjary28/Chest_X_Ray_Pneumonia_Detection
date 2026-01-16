# Automated Pneumonia Detection (PneuDOC) 🩺

A deep learning–based system for **automated pneumonia detection** from chest X-ray images.  
This project integrates **ConvNeXt** and **Vision Transformer (ViT)** architectures, optimized using the **Whale Optimization Algorithm (WOA)**, and locally hosted as a **web-based tool (PneuDOC)** for real-world healthcare usage.  

---

## Project Summary
- Pneumonia remains a major global health challenge, especially among children and the elderly.  
- Manual interpretation of X-rays is time-consuming and subject to variability.  
- This project leverages **deep learning** to provide faster, more accurate, and consistent detection support for pneumonia diagnosis.  
- DLocally hosted as **PneuDOC**, a user-friendly web app with hospital recommendations, and awareness resources.  

---

## Dataset
- **Source:** Labeled Chest X-ray Dataset (Kaggle)  
- **Total Images:** 5,856 pediatric chest X-rays  
- **Classes:** Normal (1,583) and Pneumonia (4,273)  
- **Preprocessing:** Resizing, normalization, and augmentation (flips, rotations, zoom, brightness adjustments)  

---

## Models & Key Results
- **Vision Transformer (ViT)** — **88.78% accuracy** after WOA optimization  
- **ConvNeXt** — **76.12% accuracy** after WOA optimization  

✅ **Special Feature:**  
The system provides **double confirmation** — two buttons:  
- **Verify (ViT)**  
- **Confirm (ConvNeXt)**  
In the medical field, double confirmation increases trust and reliability for diagnosis.  

---

## Tech Stack
- Python  
- PyTorch | TensorFlow / Keras
- React | Flask | HTML | CSS | JavaScript  
- Git | Data Augmentation  
- Whale Optimization Algorithm (WOA)  

---

## Features
- End-to-end pipeline for preprocessing, training, and evaluation.  
- Double confirmation system with two independent models (ViT + ConvNeXt).  
- Secure login for users and hospitals.  
- Pneumonia prediction with result interpretation.  
- Hospital recommendations based on location.  
- Awareness resources to educate users.  

---

## Future Scope
- Deployment on **cloud platforms** for large-scale access.  
- Integration with **federated learning** for better generalization across hospitals.  
- Expansion to detect **other lung diseases** beyond pneumonia.  
- Adding **explainable AI (XAI)** features for better interpretability (e.g., Grad-CAM).  

---

## To run the server:
Backend:
- venv\Scripts\activate   # Windows
- pip install -r requirements.txt
- python app.py

Frontend:
- npm run dev

---


## Contact
If you have any questions, suggestions, or would like to collaborate, feel free to reach out.  

**Name:** Sineha Manjary R.  
**Email:** sinehamanjary@gmail.com  
**LinkedIn:** [Sineha Manjary](https://www.linkedin.com/in/sineha-manjary/)  

