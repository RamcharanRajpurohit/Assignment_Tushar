# 11Labs Assignment 🎙️

This project is my implementation of the 11Labs assignment. It includes a **Next.js + TypeScript** frontend with an audio player and a **Node.js + Express** backend for generating and serving audio. Audio files are uploaded and stored using **Cloudinary**.  

---

## 🚀 Tech Stack

### Frontend
- **Next.js (TypeScript)**
- **TailwindCSS** for styling
- **Lucide React** for icons

### Backend
- **Node.js + Express**
- **CORS** for secure cross-origin requests
- **Cloudinary** for audio file storage
- Currently written in **JavaScript**

---

## ✨ Features
- **Text-to-Speech tab** with:
  - Language selection (via dropdown with flags)
  - Play / Pause audio controls
  - Progress bar with seek
  - Download option for generated audio
- Responsive UI (flags only on small screens for language selector)
- Audio fetched dynamically from backend route (`/api/audio/:language`)

---

## 🛠️ Setup Instructions

1. **Clone the repo:**
   ```bash
   git clone <repo-url>
   cd Assignment_Tushar
