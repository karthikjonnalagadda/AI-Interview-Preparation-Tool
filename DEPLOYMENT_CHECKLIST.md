# ✅ DEPLOYMENT CHECKLIST

## Pre-Deployment (5 min)

- [ ] Project is running locally (both frontend & backend)
- [ ] Frontend at http://localhost:5173
- [ ] Backend at http://localhost:5000
- [ ] Can generate questions locally
- [ ] All files committed to git
- [ ] GitHub account created
- [ ] Vercel account created
- [ ] Render account created

---

## Step 1: GitHub (5 min)

- [ ] Create new repo at https://github.com/new
- [ ] Name it `ai-interview-prep`
- [ ] Copy HTTPS URL
- [ ] Run these commands:
  ```bash
  cd "c:\Users\karth\New folder\ai-interview-prep"
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/ai-interview-prep.git
  git push -u origin main
  ```
- [ ] Verify repo appears on GitHub

---

## Step 2: Deploy Backend (10 min)

### On Render.com
- [ ] Sign in with GitHub
- [ ] Click **New +** → **Web Service**
- [ ] Select `ai-interview-prep` repo
- [ ] Configuration:
  - [ ] Name: `ai-interview-backend`
  - [ ] Environment: `Node`
  - [ ] Build: `cd backend && npm install`
  - [ ] Start: `node src/server.js`
  - [ ] Plan: **Free**
- [ ] Add Environment Variables:
  - [ ] `OPENROUTER_API_KEY=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`
  - [ ] `OPENROUTER_MODEL=mistralai/mistral-7b-instruct`
  - [ ] `NODE_ENV=production`
  - [ ] `FRONTEND_URL=(leave blank for now)`
- [ ] Click **Create Web Service**
- [ ] Wait 3-5 minutes for deployment
- [ ] Copy backend URL: `https://ai-interview-backend-XXXXX.onrender.com`
- [ ] Test health: Open `https://YOUR-BACKEND-URL/health` in browser

---

## Step 3: Deploy Frontend (10 min)

### On Vercel.com
- [ ] Sign in with GitHub
- [ ] Click **Add New** → **Project**
- [ ] Select `ai-interview-prep` repo
- [ ] Root Directory: **`frontend`** ⭐
- [ ] Click **Deploy**
- [ ] Add Environment Variable:
  - [ ] `VITE_API_URL=https://YOUR-BACKEND-URL/api`
- [ ] Click **Deploy**
- [ ] Wait 1-2 minutes
- [ ] Copy frontend URL: `https://ai-interview-prep-XXXXX.vercel.app`

---

## Step 4: Update Backend FRONTEND_URL (2 min)

### Back on Render.com
- [ ] Go to `ai-interview-backend` service
- [ ] Click **Settings**
- [ ] Find **Environment Variables**
- [ ] Update `FRONTEND_URL` to: `https://YOUR-FRONTEND-URL.vercel.app`
- [ ] Click **Save Changes**
- [ ] Wait for auto-redeploy

---

## Post-Deployment Verification (5 min)

- [ ] Test backend health: `curl https://YOUR-BACKEND/health`
- [ ] Open frontend URL in browser
- [ ] Select "Frontend Developer"
- [ ] Select "Junior"
- [ ] Click "Generate Interview Questions"
- [ ] Verify questions appear (5-10 seconds wait)
- [ ] Try different roles
- [ ] Test error handling (click generate without selecting)

---

## Final Verification

- [ ] **Frontend**: https://ai-interview-prep-XXXXX.vercel.app ✅
- [ ] **Backend**: https://ai-interview-backend-XXXXX.onrender.com ✅
- [ ] **API**: https://ai-interview-backend-XXXXX.onrender.com/api ✅
- [ ] **Questions Generate**: ✅
- [ ] **UI Looks Good**: ✅

---

## 🎉 LIVE!

You're done! Share your link:
"Check out my AI Interview Preparation Tool: https://ai-interview-prep-XXXXX.vercel.app/"

---

## 📝 URLS TO SAVE

```
Frontend: https://ai-interview-prep-XXXXX.vercel.app
Backend:  https://ai-interview-backend-XXXXX.onrender.com
API:      https://ai-interview-backend-XXXXX.onrender.com/api
```

---

## 💡 NEXT STEPS

- [ ] Share with friends
- [ ] Add custom domain (optional, $10-15/year)
- [ ] Monitor usage on Render dashboard
- [ ] Upgrade backend if cold starts bother you ($7/mo)
- [ ] Add more features to the code

---

**Estimated Time: 30-45 minutes total**

Start with Step 1! 🚀
