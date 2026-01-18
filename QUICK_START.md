# ⚡ Quick Start Guide - AI Interview Preparation Tool

## 📦 Installation & Setup (5 minutes)

### Step 1: Backend Setup

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
```

**Edit `backend/.env` and add your OpenRouter API key:**
```
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_MODEL=mistralai/mistral-7b-instruct
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

**Get free API key:**
1. Go to https://openrouter.ai
2. Sign up (no credit card needed)
3. Copy your API key
4. Paste in `.env`

**Start backend:**
```bash
npm run dev
```
✅ Server runs on http://localhost:5000

### Step 2: Frontend Setup (in new terminal)

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start dev server
npm run dev
```
✅ App opens on http://localhost:5173

## 🎯 Test It (1 minute)

1. **Select Frontend Developer** from dropdown
2. **Select Junior** from dropdown
3. **Click Generate Interview Questions**
4. **Wait 5-10 seconds** for AI to generate
5. **See 5-7 questions with answers & tips!** ✨

## 📋 Available Roles

- QA Intern
- Frontend Developer
- Backend Developer
- Data Analyst
- Full Stack Developer
- DevOps Engineer
- Mobile Developer
- UI/UX Designer

## 🚀 Deployment (Production)

### Deploy Backend to Render

```bash
# Push to GitHub first
git push origin main

# Go to https://render.com
# Create Web Service
# Connect your GitHub repo
# Environment variables:
#   OPENROUTER_API_KEY=your_key
#   OPENROUTER_MODEL=mistralai/mistral-7b-instruct
#   FRONTEND_URL=https://your-frontend-url.vercel.app
# Click Deploy
```

### Deploy Frontend to Vercel

```bash
# Go to https://vercel.com
# Import your GitHub repo
# Environment variables:
#   VITE_API_URL=https://your-backend.onrender.com/api
# Click Deploy
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| "API key required" | Add OPENROUTER_API_KEY to backend/.env |
| Cannot connect backend | Ensure backend runs on port 5000 |
| CORS error | Check FRONTEND_URL in backend/.env |
| No questions generated | Check API key is valid at openrouter.ai |

## 📁 Project Files Overview

```
ai-interview-prep/
├── backend/
│   ├── src/server.js          # Main server file
│   ├── src/config.js          # Configuration
│   ├── src/controllers/        # Business logic
│   ├── src/routes/            # API routes
│   ├── src/utils/openrouter.js # AI integration
│   └── package.json
├── frontend/
│   ├── src/App.jsx            # Main component
│   ├── src/pages/Home.jsx      # Home page
│   ├── src/components/        # React components
│   └── package.json
└── README.md                  # Full documentation
```

## 💻 Commands Quick Reference

```bash
# Backend
cd backend
npm install           # Install dependencies
npm run dev          # Start dev server (with auto-reload)
npm start            # Start production server

# Frontend
cd frontend
npm install           # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🎬 Demo Script (2-3 minutes)

1. **"This is the AI Interview Preparation Tool"** - Show home page
2. **"Select a role..."** - Click Frontend Developer dropdown
3. **"Choose experience level..."** - Click Junior dropdown
4. **"Click generate..."** - Click button, show loading spinner
5. **"AI generates interview prep content"** - Show questions with answers & tips
6. **"Works with 8 different roles and 3 experience levels"** - Scroll through results
7. **"Built with React, Node.js, and free OpenRouter API"** - Show tech stack

## 📞 Need Help?

- **Backend issues?** Check `backend/.env` file
- **Frontend issues?** Check browser console (F12)
- **API issues?** Check OpenRouter API key validity
- **Still stuck?** See README.md for detailed docs

## ✅ Checklist Before Demo

- [ ] Backend running on port 5000
- [ ] Frontend running on port 5173
- [ ] .env files created with API key
- [ ] Can load home page
- [ ] Can generate questions
- [ ] Questions display correctly

---

**Ready to prep for interviews? Let's go! 🚀**
