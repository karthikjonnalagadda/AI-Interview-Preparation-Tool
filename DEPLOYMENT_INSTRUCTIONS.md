# 🚀 Deployment Instructions

## Step 1: Push to GitHub

You need to push this project to GitHub first. Follow these steps:

### Option A: Using GitHub CLI (if installed)
```bash
gh repo create ai-interview-prep --source=. --remote=origin --public
git push -u origin main
```

### Option B: Manual GitHub Setup
1. Go to https://github.com/new
2. Create a new repository named `ai-interview-prep`
3. Copy the commands shown and run them:
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-interview-prep.git
git push -u origin main
```

---

## Step 2: Deploy Backend to Render

1. Go to https://render.com
2. Click **New +** → **Web Service**
3. Connect your GitHub repository
4. Fill in the form:
   - **Name**: `ai-interview-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free
5. Click **Advanced** and add Environment Variables:
   ```
   OPENROUTER_API_KEY=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
   OPENROUTER_MODEL=mistralai/mistral-7b-instruct
   NODE_ENV=production
   FRONTEND_URL=https://YOUR-FRONTEND-URL.vercel.app
   ```
6. Click **Create Web Service**
7. Wait 3-5 minutes for deployment
8. Copy your backend URL: `https://ai-interview-backend-xxx.onrender.com`

---

## Step 3: Deploy Frontend to Vercel

1. Go to https://vercel.com
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Select `frontend` as the root directory
5. Click **Deploy**
6. Add Environment Variables:
   ```
   VITE_API_URL=https://ai-interview-backend-xxx.onrender.com/api
   ```
7. Click **Deploy**
8. Wait 1-2 minutes for deployment
9. Get your frontend URL: `https://ai-interview-prep-xxx.vercel.app`

---

## Step 4: Update Backend Environment

Go back to Render and update `FRONTEND_URL` to your Vercel frontend URL

---

## ✅ You're Live!

- **Frontend**: https://your-frontend-url.vercel.app
- **Backend**: https://your-backend-url.onrender.com

Both services are now deployed on free tiers!
