# 🚀 LIVE DEPLOYMENT GUIDE

Your AI Interview Preparation Tool is ready to deploy! Follow these steps to go live.

---

## 📋 What You'll Get

- ✅ **Live Frontend**: https://your-app-name.vercel.app (Global CDN)
- ✅ **Live Backend**: https://your-app-name.onrender.com (Auto-scaling)
- ✅ **Free Hosting**: $0/month for both
- ✅ **Auto Deployment**: Code updates deploy automatically

---

## 🔧 DEPLOYMENT STEPS

### Step 1: Create GitHub Repository (5 minutes)

**Option A: Using GitHub Web UI** (Easiest)

1. Go to https://github.com/new
2. Create new repository:
   - Name: `ai-interview-prep`
   - Description: "AI Interview Preparation Tool"
   - Visibility: Public
   - Click **Create repository**

3. Copy the HTTPS URL shown (e.g., `https://github.com/YOUR-USERNAME/ai-interview-prep.git`)

4. Add remote and push:
```bash
cd "c:\Users\karth\New folder\ai-interview-prep"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ai-interview-prep.git
git push -u origin main
```

**Wait for push to complete (1-2 minutes)**

---

### Step 2: Deploy Backend to Render (10 minutes)

1. **Go to https://render.com**
   - Sign up with GitHub (authorize)

2. **Create Web Service**
   - Click **New +** → **Web Service**
   - Connect GitHub repo `ai-interview-prep`
   - Select the repo

3. **Configure Service**
   - Name: `ai-interview-backend`
   - Environment: `Node`
   - Build Command:
     ```
     cd backend && npm install
     ```
   - Start Command:
     ```
     node src/server.js
     ```
   - Plan: **Free** (scroll down to find it)

4. **Add Environment Variables** (Click **Advanced**)
   ```
   OPENROUTER_API_KEY=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
   OPENROUTER_MODEL=mistralai/mistral-7b-instruct
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://ai-interview-prep-XXXXX.vercel.app
   ```
   ⚠️ **Leave FRONTEND_URL blank for now, update later**

5. **Click Create Web Service**

6. **Wait for deployment** (3-5 minutes)
   - Watch the logs
   - Success: "Backend server running on http://localhost:5000"

7. **Copy your backend URL**
   - Format: `https://ai-interview-backend-XXXXX.onrender.com`
   - Save this!

---

### Step 3: Deploy Frontend to Vercel (10 minutes)

1. **Go to https://vercel.com**
   - Sign up with GitHub (authorize)

2. **Import Project**
   - Click **Add New** → **Project**
   - Find `ai-interview-prep` repo
   - Click **Import**

3. **Configure**
   - Framework Preset: **Next.js** (or it will auto-detect)
   - Root Directory: **`frontend`** ⭐ IMPORTANT!
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Installation Command: `npm install`

4. **Add Environment Variable**
   - `VITE_API_URL`: `https://ai-interview-backend-XXXXX.onrender.com/api`
   - (Use your Render backend URL)

5. **Click Deploy**

6. **Wait for deployment** (1-2 minutes)
   - When complete, you'll see ✅ 

7. **Copy your frontend URL**
   - Format: `https://ai-interview-prep-XXXXX.vercel.app`
   - This is your live app! 🎉

---

### Step 4: Update Backend FRONTEND_URL (2 minutes)

Go back to Render dashboard:

1. Click your `ai-interview-backend` service
2. Go to **Settings** → **Environment Variables**
3. Update `FRONTEND_URL` to your Vercel URL:
   ```
   https://ai-interview-prep-XXXXX.vercel.app
   ```
4. Click **Save Changes**
5. Render will auto-redeploy

---

## ✅ VERIFY DEPLOYMENT

### Test Backend
```bash
curl https://ai-interview-backend-XXXXX.onrender.com/health
# Should return: {"status":"ok","message":"Backend is running"}
```

### Test Frontend
1. Open your Vercel URL in browser
2. Select "Frontend Developer"
3. Select "Junior"
4. Click "Generate Interview Questions"
5. Should generate 5-7 questions! 🎉

---

## 🎯 YOUR LIVE LINKS

After deployment, you'll have:

| Service | URL |
|---------|-----|
| **Frontend** | https://ai-interview-prep-XXXXX.vercel.app |
| **Backend API** | https://ai-interview-backend-XXXXX.onrender.com/api |
| **Health Check** | https://ai-interview-backend-XXXXX.onrender.com/health |

---

## 💡 NOTES

### Free Tier Performance
- **Frontend (Vercel)**: Instant response, global CDN ✨
- **Backend (Render)**: ~30-second cold start on first request, then 2-10 seconds for AI generation
  - To remove cold starts: Upgrade to paid ($7/month)

### Auto Deployment
- Both services auto-deploy when you push to GitHub
- Changes live in 1-2 minutes

### Cost
- **Total Monthly Cost**: $0 (free tiers)
- Optional upgrade for backend: $7/month (always-on)

---

## 🚀 WHAT'S NEXT?

1. ✅ Push to GitHub
2. ✅ Deploy backend to Render
3. ✅ Deploy frontend to Vercel
4. ✅ Test the live app
5. ✅ Share your links!

**Example Share**: "Check out my AI Interview Prep Tool: https://ai-interview-prep-demo.vercel.app/"

---

## ❓ TROUBLESHOOTING

### Frontend shows 404
- Make sure `Root Directory` in Vercel is set to `frontend`
- Redeploy by going to Deployments → Click latest → Redeploy

### Backend connection error
- Check `VITE_API_URL` in Vercel environment variables
- Make sure it matches your Render backend URL
- Redeploy frontend after updating env var

### Backend error on Render
- Check logs in Render dashboard
- Verify `OPENROUTER_API_KEY` is correct
- Verify Node.js version (16+)

### Questions not generating
- Check API key is valid at https://openrouter.ai
- Check backend logs for errors
- Verify Mistral model is available

---

## 📞 HELP

Need help? Check these docs in your project:
- **README.md** - Full documentation
- **ARCHITECTURE.md** - Code structure
- **QUICK_REFERENCE.md** - Commands

---

**Ready to deploy? Follow Step 1 above! 🚀**

*Estimated total deployment time: 30-45 minutes*
