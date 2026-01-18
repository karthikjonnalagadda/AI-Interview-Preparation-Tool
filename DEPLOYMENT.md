# 🚀 Deployment Guide - AI Interview Preparation Tool

Complete guide to deploy both frontend and backend to production.

## Prerequisites

- GitHub account with code pushed
- OpenRouter API key
- Credit card (optional - only if using paid models)

## 🔵 Deploy Backend to Render (Free)

### Step 1: Prepare Backend Code

```bash
# Make sure backend/.env.example is complete
# Make sure .gitignore excludes .env files
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Create Render Account

1. Go to https://render.com
2. Sign up with GitHub
3. Authorize GitHub access

### Step 3: Create Web Service

1. Click **New +** → **Web Service**
2. Connect GitHub repo
3. Configuration:
   - **Name**: `ai-interview-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node src/server.js`
   - **Plan**: Free

### Step 4: Set Environment Variables

Click **Environment** tab:

```
OPENROUTER_API_KEY = your_api_key_here
OPENROUTER_MODEL = mistralai/mistral-7b-instruct
PORT = 5000
NODE_ENV = production
FRONTEND_URL = https://your-frontend-url.vercel.app
```

**Get FRONTEND_URL from Vercel AFTER deploying frontend**

### Step 5: Deploy

1. Click **Create Web Service**
2. Wait for build and deployment (2-3 minutes)
3. Get your backend URL: `https://your-service-name.onrender.com`
4. Test health: `https://your-service-name.onrender.com/health`

**Note**: Free tier sleeps after 15 minutes of inactivity. First request takes ~30 seconds.

---

## 🟣 Deploy Frontend to Vercel (Free)

### Step 1: Push Frontend Code

```bash
cd frontend
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Create Vercel Account

1. Go to https://vercel.com
2. Sign up with GitHub
3. Authorize GitHub access

### Step 3: Import Project

1. Click **Add New...** → **Project**
2. Select your GitHub repo
3. Click **Import**

### Step 4: Configure Build Settings

- **Framework Preset**: Vite
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 5: Set Environment Variables

Click **Environment Variables**:

```
VITE_API_URL = https://your-backend.onrender.com/api
```

**Use the Render backend URL from above**

### Step 6: Deploy

1. Click **Deploy**
2. Wait for build (1-2 minutes)
3. Get your frontend URL: `https://your-project-name.vercel.app`

---

## 🔄 Update Backend FRONTEND_URL

Go back to Render:

1. Service Settings
2. Environment Variables
3. Update `FRONTEND_URL`:
   ```
   FRONTEND_URL = https://your-project-name.vercel.app
   ```
4. Click **Save** (auto-redeploys)

---

## ✅ Verify Deployment

### Test Backend API

```bash
curl -X POST https://your-backend.onrender.com/api/generate-questions \
  -H "Content-Type: application/json" \
  -d '{"role":"Frontend Developer","experience":"Junior"}'
```

Expected response:
```json
{
  "success": true,
  "data": { ... }
}
```

### Test Frontend

1. Go to `https://your-project-name.vercel.app`
2. Select role & experience
3. Click "Generate Interview Questions"
4. Verify questions display

---

## 🔑 Cost Analysis

| Service | Cost | Notes |
|---------|------|-------|
| Render (Backend) | Free | $7/month to keep always-on |
| Vercel (Frontend) | Free | Unlimited deployments |
| OpenRouter API | Free | Mistral 7B & other free models |
| **Total** | **Free** | ✨ Completely free! |

---

## 📊 Performance Tips

### Backend (Render)

- **Cold Start**: ~30 seconds (free tier)
- **Warm Response**: ~5-10 seconds (AI generation)
- **Upgrade**: Pay $7/month for always-on (instant responses)

### Frontend (Vercel)

- **Load Time**: ~1-2 seconds
- **CDN**: Automatic global distribution
- **Caching**: Automatic optimization

---

## 🆘 Troubleshooting Deployment

### Backend won't deploy

**Error**: "Build failed"

**Solution**:
1. Check `npm install` works locally: `cd backend && npm install`
2. Verify all imports are correct
3. Check Node version: `node --version` (16+ required)

### API calls return 403/401

**Error**: "Unauthorized"

**Solution**:
1. Verify `OPENROUTER_API_KEY` is correct in Render
2. Check API key is active at https://openrouter.ai
3. Check `OPENROUTER_MODEL` exists

### Frontend won't deploy

**Error**: "Build failed"

**Solution**:
1. Check `npm run build` works locally: `cd frontend && npm run build`
2. Verify all imports use correct paths
3. Check `vite.config.js` is correct

### CORS errors

**Error**: "Access to XMLHttpRequest blocked"

**Solution**:
1. Verify `FRONTEND_URL` in Render matches deployed frontend URL
2. Verify `VITE_API_URL` in Vercel matches deployed backend URL
3. Restart both services

### No questions generated

**Error**: Response is empty or null

**Solution**:
1. Check `OPENROUTER_API_KEY` is valid
2. Check `OPENROUTER_MODEL` supports the request
3. Check logs: Render dashboard → Service → Logs

---

## 📈 Monitoring

### Render Logs

1. Go to Render dashboard
2. Click service name
3. View "Logs" tab for errors

### Vercel Logs

1. Go to Vercel dashboard
2. Click project
3. View "Deployments" tab
4. Click to see build/runtime logs

---

## 🔄 Continuous Deployment

Both services support auto-deploy on GitHub push:

### Enable Auto-Deploy

1. **Render**: Enabled by default
2. **Vercel**: Enabled by default

Just push code:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

Services automatically rebuild and deploy!

---

## 🔐 Security Best Practices

### Protect API Keys

✅ **Do**: Store in `.env` files (not committed)
❌ **Don't**: Hardcode API keys in source code

### Production Checklist

- [ ] All `.env` files are in `.gitignore`
- [ ] No sensitive data in git history
- [ ] Use strong API keys
- [ ] Enable HTTPS (automatic on both services)
- [ ] Monitor API usage
- [ ] Set rate limits if needed

---

## 💰 Cost Optimization

### To Keep Everything Free

1. **Accept cold starts** on Render (30 seconds first request)
2. **Use free OpenRouter models** only
3. **Use Vercel free tier** (auto-scaling)
4. **Monitor API usage** to avoid limits

### To Upgrade for Better Performance

**If you want instant responses:**

- Upgrade Render to paid ($7/month)
- Everything else stays free

---

## 📝 Post-Deployment Checklist

- [ ] Backend deployed and working
- [ ] Frontend deployed and accessible
- [ ] API key set in backend
- [ ] Backend URL set in frontend
- [ ] Frontend URL set in backend
- [ ] Test API endpoint manually
- [ ] Test full flow in browser
- [ ] Share deployment links with others

---

## 🎉 Done!

Your AI Interview Preparation Tool is now live! 🚀

**Share links:**
- Frontend: `https://your-project-name.vercel.app`
- Backend API: `https://your-service-name.onrender.com/api`

---

## 📞 Deployment Support

| Issue | Resource |
|-------|----------|
| Render help | https://render.com/docs |
| Vercel help | https://vercel.com/docs |
| OpenRouter help | https://openrouter.ai/docs |
| Node.js help | https://nodejs.org/docs |

Enjoy your deployment! 🎊
