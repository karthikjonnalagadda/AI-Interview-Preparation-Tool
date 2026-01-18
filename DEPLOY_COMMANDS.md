# 🚀 DEPLOYMENT COMMANDS (Copy & Paste Ready)

## Prerequisites

1. ✅ GitHub account (https://github.com)
2. ✅ Vercel account (https://vercel.com)
3. ✅ Render account (https://render.com)
4. ✅ All accounts connected to GitHub

---

## STEP 1: Push to GitHub

### Commands to Run:
```bash
cd "c:\Users\karth\New folder\ai-interview-prep"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-interview-prep.git
git push -u origin main
```

**Replace `YOUR-USERNAME` with your GitHub username**

**Expected output:**
```
Enumerating objects: XX, done.
Counting objects: 100%
Writing objects: 100%
...
To https://github.com/YOUR-USERNAME/ai-interview-prep.git
 * [new branch] main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## STEP 2: Deploy Backend (Manual steps in browser)

### Go to: https://render.com

**Click: New + → Web Service**

**Select Repository:** ai-interview-prep

**Fill in form:**
```
Name: ai-interview-backend
Environment: Node
Build Command: cd backend && npm install
Start Command: node src/server.js
Plan: Free (scroll down)
```

**Add Environment Variables (Click Advanced):**
```
OPENROUTER_API_KEY = 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
OPENROUTER_MODEL = mistralai/mistral-7b-instruct
NODE_ENV = production
PORT = 5000
FRONTEND_URL = (leave blank, update later)
```

**Click: Create Web Service**

**Wait 3-5 minutes...**

**When done, copy your URL:**
```
https://ai-interview-backend-XXXXX.onrender.com
```

---

## STEP 3: Deploy Frontend (Manual steps in browser)

### Go to: https://vercel.com

**Click: Add New → Project**

**Select Repository:** ai-interview-prep

**Configure:**
- Root Directory: `frontend` (⭐ IMPORTANT!)
- Build Command: `npm run build` (auto)
- Output Directory: `dist` (auto)

**Add Environment Variable:**
```
VITE_API_URL = https://ai-interview-backend-XXXXX.onrender.com/api
```
(Replace XXXXX with your Render backend name)

**Click: Deploy**

**Wait 1-2 minutes...**

**When done, copy your URL:**
```
https://ai-interview-prep-XXXXX.vercel.app
```

---

## STEP 4: Update Backend FRONTEND_URL

### Go back to: https://render.com

**Click on:** ai-interview-backend service

**Click:** Settings

**Find:** Environment Variables

**Update FRONTEND_URL:**
```
FRONTEND_URL = https://ai-interview-prep-XXXXX.vercel.app
```

**Click:** Save Changes

**Wait for auto-redeploy (1-2 minutes)**

---

## VERIFICATION COMMANDS

### Test Backend is Running:
```bash
curl https://ai-interview-backend-XXXXX.onrender.com/health
```

**Expected response:**
```json
{"status":"ok","message":"Backend is running"}
```

### Test API Endpoint:
```bash
curl -X POST https://ai-interview-backend-XXXXX.onrender.com/api/generate-questions ^
  -H "Content-Type: application/json" ^
  -d "{\"role\":\"Frontend Developer\",\"experience\":\"Junior\"}"
```

**Expected response:**
```json
{
  "success": true,
  "data": {
    "role": "Frontend Developer",
    "experience_level": "Junior",
    "questions": [...]
  }
}
```

---

## YOUR LIVE LINKS

After everything is deployed:

```
Frontend App:    https://ai-interview-prep-XXXXX.vercel.app
Backend API:     https://ai-interview-backend-XXXXX.onrender.com/api
Health Check:    https://ai-interview-backend-XXXXX.onrender.com/health
```

---

## 🎉 DEPLOYMENT COMPLETE!

Your app is now LIVE! 

### Share it:
```
"Check out my AI Interview Prep Tool! 
https://ai-interview-prep-XXXXX.vercel.app/"
```

### Test it:
1. Open the frontend URL
2. Select "Frontend Developer"
3. Select "Junior"
4. Click "Generate"
5. Wait 5-10 seconds
6. See interview questions appear! 🎊

---

## 💡 If Something Goes Wrong

### Frontend shows 404
→ Make sure `Root Directory` in Vercel is `frontend`
→ Redeploy from Vercel dashboard

### Backend connection error  
→ Check `VITE_API_URL` matches your Render URL
→ Check environment variables on Render

### Questions don't generate
→ Check OpenRouter API key is valid
→ Check backend logs on Render dashboard
→ Verify Mistral model works with API key

### Still stuck?
→ Check your project logs:
   - Render: Dashboard → Your service → Logs
   - Vercel: Dashboard → Your project → Deployments → Logs

---

## 📊 URLS REFERENCE

| Item | Format | Example |
|------|--------|---------|
| Frontend | vercel.app | https://ai-interview-prep-abc123.vercel.app |
| Backend | onrender.com | https://ai-interview-backend-xyz789.onrender.com |
| API | onrender.com/api | https://ai-interview-backend-xyz789.onrender.com/api |

---

## ⏱️ ESTIMATED TIME

- GitHub setup: 5 minutes
- Backend deploy: 10 minutes
- Frontend deploy: 10 minutes
- Update backend: 2 minutes
- Verification: 5 minutes
- **Total: 30-45 minutes**

---

**Ready? Start with STEP 1 above! 🚀**
