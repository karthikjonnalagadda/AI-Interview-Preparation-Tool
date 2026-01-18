# 🎯 Quick Reference Card

**AI Interview Preparation Tool - Command Reference & Quick Tips**

---

## ⚡ One-Page Setup

```bash
# Terminal 1: Backend
cd backend
npm install
cp .env.example .env
# Edit .env, add OPENROUTER_API_KEY
npm run dev
# → Running on http://localhost:5000

# Terminal 2: Frontend  
cd frontend
npm install
npm run dev
# → Running on http://localhost:5173
```

**Get API Key:** https://openrouter.ai → Sign up (free) → Copy key

---

## 📍 Important Ports

| Service | Port | URL |
|---------|------|-----|
| Backend | 5000 | http://localhost:5000 |
| Frontend | 5173 | http://localhost:5173 |
| API | 5000 | /api/generate-questions |

---

## 🔑 Environment Variables

### Backend (.env)
```
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxx     ← Your API key (required!)
OPENROUTER_MODEL=mistralai/mistral-7b-instruct
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

---

## 📡 API Endpoints

### Generate Questions
```bash
POST /api/generate-questions
Content-Type: application/json

{
  "role": "Frontend Developer",
  "experience": "Junior"
}

# Response
{
  "success": true,
  "data": {
    "role": "Frontend Developer",
    "experience_level": "Junior",
    "questions": [
      {
        "question": "...",
        "model_answer": "...",
        "interview_tips": "..."
      }
    ]
  }
}
```

### Get Valid Roles
```bash
GET /api/valid-roles

# Response
{
  "success": true,
  "roles": ["QA Intern", "Frontend Developer", ...],
  "experienceLevels": ["Fresher", "Junior", "Mid-level"]
}
```

### Health Check
```bash
GET /health

# Response
{"status": "ok", "message": "Backend is running"}
```

---

## 📊 Available Job Roles

```
1. QA Intern
2. Frontend Developer
3. Backend Developer
4. Data Analyst
5. Full Stack Developer
6. DevOps Engineer
7. Mobile Developer
8. UI/UX Designer
```

## 📈 Experience Levels

```
• Fresher     (0-1 years)
• Junior      (1-3 years)
• Mid-level   (3+ years)
```

---

## 🧪 Quick Test Commands

### Test Backend is Running
```bash
curl http://localhost:5000/health
```

### Test API Endpoint
```bash
curl -X POST http://localhost:5000/api/generate-questions \
  -H "Content-Type: application/json" \
  -d '{"role":"Frontend Developer","experience":"Junior"}'
```

### Test Frontend is Running
```
Open http://localhost:5173 in browser
```

---

## 🛠 Common Issues & Fixes

| Problem | Solution |
|---------|----------|
| Port 5000 in use | Change `PORT` in .env or kill process |
| Port 5173 in use | Vite auto-increments to 5174 |
| "API key required" | Add OPENROUTER_API_KEY to .env |
| CORS error | Check FRONTEND_URL in backend .env |
| No questions generated | Verify API key is valid |
| Module not found | Run `npm install` again |

---

## 📝 File Paths

### Key Backend Files
```
backend/src/server.js              → Express server
backend/src/config.js              → Configuration
backend/src/utils/openrouter.js    → AI integration
backend/src/controllers/            → Business logic
backend/.env.example               → Env template
```

### Key Frontend Files
```
frontend/src/pages/Home.jsx         → Main page
frontend/src/components/            → UI components
frontend/src/styles/App.css         → Main styles
frontend/.env.example              → Env template
```

---

## 🚀 Deployment Quick Links

### Deploy Backend (Render)
```
1. Push to GitHub
2. Go https://render.com
3. Create Web Service
4. Set OPENROUTER_API_KEY
5. Deploy
```

### Deploy Frontend (Vercel)
```
1. Push to GitHub
2. Go https://vercel.com
3. Import project
4. Set VITE_API_URL
5. Deploy
```

---

## 💡 Modify This Project

### Add New Job Role
Edit `backend/src/controllers/questionsController.js`

Find: `const VALID_ROLES = [`

Add: `'Your New Role',`

### Change AI Prompt
Edit `backend/src/utils/openrouter.js`

Find: `const prompt = ...`

Modify the prompt text

### Change AI Model
Edit `backend/.env`

Change: `OPENROUTER_MODEL=different-model-name`

### Change Frontend Colors
Edit `frontend/src/styles/App.css`

Find: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

Change hex colors

---

## 📚 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| GETTING_STARTED.md | Setup guide | 5 min |
| README.md | Full docs | 10 min |
| ARCHITECTURE.md | Code structure | 10 min |
| DEPLOYMENT.md | Deploy guide | 10 min |
| QUICK_START.md | Commands | 3 min |
| PROJECT_SUMMARY.md | Overview | 5 min |
| FILE_STRUCTURE.md | File tree | 5 min |

---

## ✅ Pre-Demo Checklist

```bash
# Verify backend is running
curl http://localhost:5000/health

# Verify frontend is running
# Open http://localhost:5173

# Check for errors
# Backend terminal: Should show "Backend server running"
# Frontend terminal: Should show "Local: http://localhost:5173"
```

---

## 🎬 2-Minute Demo

1. Open http://localhost:5173
2. Select "Frontend Developer"
3. Select "Junior"
4. Click "Generate Interview Questions"
5. Wait 5-10 seconds (loading spinner)
6. Show results (5-7 questions with answers & tips)
7. Explain: "Free AI, role-specific, interview-ready"

---

## 🔐 Security Reminders

✅ **DO:**
- Store API key in .env file
- Add .env to .gitignore
- Use environment variables
- Validate all inputs
- Handle errors properly

❌ **DON'T:**
- Commit .env file
- Hardcode API keys
- Expose keys in frontend
- Log sensitive data
- Skip validation

---

## 💰 Cost Breakdown

| Service | Cost | Notes |
|---------|------|-------|
| Backend (Render) | Free | Cold start ≈ 30s |
| Frontend (Vercel) | Free | Unlimited |
| AI API (OpenRouter) | Free | Free tier available |
| Domain | Optional | ~$10/year |
| **Total** | **$0/month** | ✅ Free! |

---

## 📞 Quick Help

**Setup questions?** → Read [GETTING_STARTED.md](GETTING_STARTED.md)

**How does it work?** → Read [ARCHITECTURE.md](ARCHITECTURE.md)

**How to deploy?** → Read [DEPLOYMENT.md](DEPLOYMENT.md)

**General info?** → Read [README.md](README.md)

**Feeling lost?** → Read [INDEX.md](INDEX.md)

---

## 🎯 Next Actions

### To Get Started (Now)
- [ ] Get OpenRouter API key
- [ ] Run backend: `npm run dev`
- [ ] Run frontend: `npm run dev`
- [ ] Open http://localhost:5173
- [ ] Generate some questions!

### To Understand (30 min)
- [ ] Read GETTING_STARTED.md
- [ ] Read ARCHITECTURE.md
- [ ] Explore code in editor
- [ ] Try different roles

### To Deploy (1-2 hours)
- [ ] Read DEPLOYMENT.md
- [ ] Create Render account
- [ ] Create Vercel account
- [ ] Deploy backend
- [ ] Deploy frontend
- [ ] Share live links

### To Extend (Next session)
- [ ] Add new job roles
- [ ] Modify AI prompt
- [ ] Add database
- [ ] Add user auth
- [ ] Add more features

---

## 🎊 You're Ready!

Everything is set up and ready to go.

**Time to first run: 5-10 minutes**

**Time to understand: 30 minutes**

**Time to deploy: 15-30 minutes**

---

**Happy coding! 🚀**

*Keep this card handy for quick reference!*
