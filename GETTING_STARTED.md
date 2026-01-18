# 🚀 GETTING STARTED - Complete Setup Guide

## ⏱ Time Required
- Backend setup: **2 minutes**
- Frontend setup: **2 minutes**
- Get API key: **1 minute**
- First test: **2 minutes**
- **Total: 7 minutes** ⏱

---

## 🎯 What You'll Accomplish

By the end of this guide:
- ✅ Backend server running on port 5000
- ✅ Frontend app running on port 5173
- ✅ Both connected and working together
- ✅ Able to generate interview questions
- ✅ Ready to demo or deploy

---

## PART 1: Get Your FREE AI API Key (1 minute)

### Step 1: Visit OpenRouter
1. Go to **https://openrouter.ai**
2. Click **"Sign Up"** (top right)
3. Sign up with email (no credit card needed!)
4. Click link in confirmation email

### Step 2: Get Your API Key
1. Go to **https://openrouter.ai/keys**
2. See your API key displayed
3. Click **"Copy"** button
4. Save it somewhere safe

**Your API key looks like:** `sk-or-xxxxxxxxxxxxxxxxxxxxx`

---

## PART 2: Backend Setup (2 minutes)

### Step 1: Open Terminal

```bash
# Navigate to backend folder
cd backend
```

### Step 2: Install Dependencies

```bash
npm install
```

Wait for installation to complete (you'll see "added X packages")

### Step 3: Create Environment File

```bash
# Copy the example file
cp .env.example .env
```

### Step 4: Add Your API Key

**Open `backend/.env` in a text editor** and replace:

```
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

With your actual key:

```
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxx
```

**Other variables** (leave as-is):
```
OPENROUTER_MODEL=mistralai/mistral-7b-instruct
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Step 5: Start Backend Server

```bash
npm run dev
```

**Expected output:**
```
🚀 Backend server running on http://localhost:5000
📝 API Documentation:
   POST /api/generate-questions - Generate interview questions
   GET /api/valid-roles - Get available roles and experience levels
   GET /health - Health check
```

✅ **Backend is running!** Keep this terminal open.

---

## PART 3: Frontend Setup (2 minutes)

### Step 1: Open NEW Terminal

Keep backend terminal running. Open a **new terminal window/tab**.

```bash
# Navigate to frontend folder
cd frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

Wait for installation to complete.

### Step 3: Create Environment File

```bash
cp .env.example .env
```

### Step 4: Start Frontend

```bash
npm run dev
```

**Expected output:**
```
VITE v5.x.x  build 0.xx MB

➜  Local:   http://localhost:5173/
➜  press h to show help
```

✅ **Frontend is running!** Browser should open automatically.

---

## PART 4: Test It (2 minutes)

### Test 1: Verify Backend is Running

Open a new terminal and run:

```bash
curl http://localhost:5000/health
```

**Expected response:**
```
{"status":"ok","message":"Backend is running"}
```

### Test 2: Generate Interview Questions

You should see the app at **http://localhost:5173**

If not, open it manually in your browser.

#### Steps:
1. **Select Job Role**: Click dropdown, choose **"Frontend Developer"**
2. **Select Experience**: Click dropdown, choose **"Junior"**
3. **Click Button**: Click **"Generate Interview Questions"**
4. **Wait**: Loading spinner shows for 5-10 seconds
5. **See Results**: 5-7 interview questions appear with answers & tips!

✅ **Success!** Everything is working!

---

## 🐛 Troubleshooting

### Backend won't start

**Error:** "OPENROUTER_API_KEY is required"

**Solution:**
1. Check `backend/.env` file exists
2. Check `OPENROUTER_API_KEY=` is filled in
3. Verify no spaces around `=`
4. Restart: Press `Ctrl+C`, then `npm run dev`

**Error:** "Port 5000 is already in use"

**Solution:**
```bash
# Kill process using port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9

# Or change PORT in .env to 5001
# Then update FRONTEND_URL in backend/.env
```

### Frontend won't start

**Error:** "Port 5173 is already in use"

**Solution:**
```bash
# Kill process using port 5173 (Mac/Linux)
lsof -ti:5173 | xargs kill -9

# Or Vite will use next available port (5174, 5175, etc)
```

**Error:** "Cannot find module 'react'"

**Solution:**
```bash
# Make sure npm install completed successfully
rm -rf node_modules package-lock.json
npm install
```

### No questions appear

**Error:** "Failed to generate questions"

**Solution:**
1. Check API key in `backend/.env`
2. Go to https://openrouter.ai and verify key is active
3. Check browser console (F12) for error details
4. Check backend terminal for error logs

### CORS error in browser

**Error:** "Access to XMLHttpRequest blocked by CORS policy"

**Solution:**
1. Verify backend is running on port 5000
2. Verify `FRONTEND_URL` in `backend/.env` is correct
3. Restart backend: `Ctrl+C`, then `npm run dev`

---

## 📝 Next Steps

### After Everything Works

1. **Read Full Documentation**
   - Read [README.md](README.md) for complete feature list
   - Read [ARCHITECTURE.md](ARCHITECTURE.md) to understand code structure

2. **Try Different Roles**
   - Test with different job roles
   - Test with different experience levels
   - See how questions change

3. **Explore Code**
   - Look at `backend/src/utils/openrouter.js` to see AI prompt
   - Look at `frontend/src/pages/Home.jsx` to see state management
   - Look at `frontend/src/components/ResultsCard.jsx` to see UI

4. **Modify & Extend**
   - Change AI prompt in `openrouter.js`
   - Add new job roles in `questionsController.js`
   - Change colors in CSS files
   - Add new features

5. **Deploy to Production**
   - Follow [DEPLOYMENT.md](DEPLOYMENT.md)
   - Deploy backend to Render (free)
   - Deploy frontend to Vercel (free)
   - Share live links with others

---

## 💡 Common Next Questions

### "How do I change the questions generated?"
Edit `backend/src/utils/openrouter.js` - modify the `prompt` variable

### "How do I add a new job role?"
Edit `backend/src/controllers/questionsController.js` - add to `VALID_ROLES` array

### "Can I use a different AI model?"
Yes! Edit `backend/.env` - change `OPENROUTER_MODEL` value

### "Can I deploy for free?"
Yes! Follow [DEPLOYMENT.md](DEPLOYMENT.md)
- Frontend: Free on Vercel
- Backend: Free on Render (with cold starts)
- AI: Free tier available on OpenRouter

### "How do I add user authentication?"
That's beyond this scope, but you can:
1. Add a simple user table
2. Add login/signup pages
3. Save user preferences
See [ARCHITECTURE.md](ARCHITECTURE.md) for ideas

### "Can I add a database?"
Yes! Replace in-memory storage with:
- MongoDB (free tier)
- PostgreSQL (free tier on Render)
- Firebase (free tier)

---

## 📋 Command Reference

### Useful Commands

```bash
# Backend
cd backend
npm install                 # Install dependencies
npm run dev                # Start dev server (auto-reload)
npm start                  # Start production server

# Frontend
cd frontend
npm install                 # Install dependencies
npm run dev                # Start dev server (auto-reload)
npm run build              # Build for production
npm run preview            # Preview production build

# API Testing
curl http://localhost:5000/health
curl -X POST http://localhost:5000/api/generate-questions \
  -H "Content-Type: application/json" \
  -d '{"role":"Frontend Developer","experience":"Junior"}'
```

---

## 🎯 Demo Checklist

**Before demoing, verify:**

- [ ] Backend running (`npm run dev` in backend folder)
- [ ] Frontend running (`npm run dev` in frontend folder)
- [ ] Can open http://localhost:5173
- [ ] Can select role from dropdown
- [ ] Can select experience level from dropdown
- [ ] Can click "Generate Interview Questions" button
- [ ] Questions appear after 5-10 seconds
- [ ] Results display properly formatted
- [ ] Error handling works (try clicking generate without selecting anything)
- [ ] Mobile view looks good (F12 → toggle device toolbar)

---

## 🎬 2-Minute Demo Script

```
1. "This is the AI Interview Preparation Tool"
   → Show home page

2. "Select a job role..."
   → Click Frontend Developer

3. "Choose your experience level..."
   → Click Junior

4. "Click generate..."
   → Click button (show loading spinner)

5. "AI generates tailored questions..."
   → Wait 5-10 seconds

6. "Here are 5-7 interview questions"
   → Scroll through results

7. "Each has a model answer and interviewer tips"
   → Show question card details

8. "Works with 8 roles and 3 experience levels"
   → Explain flexibility

9. "Built with React, Node.js, and free OpenRouter API"
   → Explain tech stack

10. "Completely free to use and deploy"
    → Explain cost ($0/month)
```

---

## ✅ You're Ready!

You now have:
- ✅ Working backend server
- ✅ Working frontend application
- ✅ Connected to free AI API
- ✅ Generating interview questions
- ✅ Ready to demo or deploy

**Time spent: ~7 minutes**

---

## 📞 Need More Help?

| Topic | File |
|-------|------|
| Full documentation | [README.md](README.md) |
| Code architecture | [ARCHITECTURE.md](ARCHITECTURE.md) |
| Production deployment | [DEPLOYMENT.md](DEPLOYMENT.md) |
| Project overview | [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) |
| File structure | [FILE_STRUCTURE.md](FILE_STRUCTURE.md) |

---

## 🎉 Have Fun!

You've built a full-stack web application with AI! 

Next steps:
1. Try it with different roles
2. Modify the prompts
3. Deploy to production
4. Share with friends
5. Extend with new features

**Enjoy! 🚀**
