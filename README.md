# 🎯 AI Interview Preparation Tool

A full-stack web application that generates role-specific interview questions with model answers and expert tips using AI.

## 📋 Features

- **Role-Based Questions**: Select from 8+ job roles (Frontend Developer, Backend Developer, QA Intern, Data Analyst, etc.)
- **Experience Levels**: Fresher, Junior, and Mid-level interview questions
- **AI-Generated Content**: Uses OpenRouter API with free LLM models
- **Model Answers**: Clear, concise answers for each question
- **Interview Tips**: Expert tips explaining what interviewers look for
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Error Handling**: Comprehensive validation and error messages

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS3** - Styling with animations

### Backend
- **Node.js + Express** - REST API
- **Axios** - HTTP client
- **CORS** - Cross-origin support
- **Dotenv** - Environment configuration

### AI
- **OpenRouter API** - LLM API gateway
- **Mistral 7B** - Free LLM model (or Meta Llama 3)

## 📁 Project Structure

```
ai-interview-prep/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InterviewForm.jsx
│   │   │   ├── ResultsCard.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── InterviewForm.css
│   │   │   ├── ResultsCard.css
│   │   │   └── LoadingSpinner.css
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── styles/
│   │   │   └── App.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── questionsController.js
│   │   ├── routes/
│   │   │   └── questions.js
│   │   ├── utils/
│   │   │   └── openrouter.js
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── config.js
│   │   └── server.js
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- OpenRouter API key (free at https://openrouter.ai)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

4. **Add your OpenRouter API key to `.env`**
   ```
   OPENROUTER_API_KEY=your_api_key_here
   OPENROUTER_MODEL=mistralai/mistral-7b-instruct
   PORT=5000
   FRONTEND_URL=http://localhost:5173
   ```

5. **Start backend server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **In a new terminal, navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

4. **Start dev server**
   ```bash
   npm run dev
   ```
   App opens on `http://localhost:5173`

## 📝 API Documentation

### Generate Interview Questions

**Endpoint**: `POST /api/generate-questions`

**Request Body**:
```json
{
  "role": "Frontend Developer",
  "experience": "Junior"
}
```

**Success Response (200)**:
```json
{
  "success": true,
  "data": {
    "role": "Frontend Developer",
    "experience_level": "Junior",
    "questions": [
      {
        "question": "Explain the difference between var, let, and const in JavaScript?",
        "model_answer": "var is function-scoped, let and const are block-scoped. const declares immutable references while let allows reassignment.",
        "interview_tips": "Demonstrates understanding of JavaScript fundamentals. Explain use cases for each."
      }
    ]
  }
}
```

**Error Response (400)**:
```json
{
  "success": false,
  "error": {
    "status": 400,
    "message": "Both role and experience are required"
  }
}
```

### Get Valid Roles

**Endpoint**: `GET /api/valid-roles`

**Response**:
```json
{
  "success": true,
  "roles": ["QA Intern", "Frontend Developer", ...],
  "experienceLevels": ["Fresher", "Junior", "Mid-level"]
}
```

## 🔑 Available Job Roles

- QA Intern
- Frontend Developer
- Backend Developer
- Data Analyst
- Full Stack Developer
- DevOps Engineer
- Mobile Developer
- UI/UX Designer

## 📊 Experience Levels

- **Fresher** - 0-1 years experience
- **Junior** - 1-3 years experience
- **Mid-level** - 3+ years experience

## 🌐 Deployment

### Deploy Backend to Render

1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repo
5. Set environment variables in Render dashboard
6. Deploy

**Backend URL**: `https://your-app-name.onrender.com`

### Deploy Frontend to Vercel

1. Push code to GitHub
2. Go to https://vercel.com
3. Import GitHub repo
4. Set build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Set environment variables:
   - `VITE_API_URL=https://your-backend-url.onrender.com/api`
6. Deploy

**Frontend URL**: `https://your-app-name.vercel.app`

## ⚙️ Environment Variables

### Backend (.env)
```
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_MODEL=mistralai/mistral-7b-instruct
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🆓 Free AI Models on OpenRouter

### Recommended
- **mistralai/mistral-7b-instruct** - Fast, reliable, fully free
- **meta-llama/llama-3-8b-instruct** - Good quality, free tier available

### How to Get Free API Key
1. Visit https://openrouter.ai
2. Sign up with email
3. Get free API key (no credit card required for free tier)
4. Check free model availability in their docs

## 📱 UI Components

### InterviewForm
- Dropdown for job role selection
- Dropdown for experience level
- Generate button with loading state
- Error message display

### ResultsCard
- Question number badge
- Interview question display
- Model answer section
- Interview tips section
- Responsive card layout

### LoadingSpinner
- Animated spinner
- Loading message
- Center-aligned display

## 🎨 Design Features

- **Gradient background** - Modern purple/blue gradient
- **Smooth animations** - Slide-in, fade-in effects
- **Responsive design** - Works on mobile, tablet, desktop
- **Color scheme** - Purple (#667eea), Blue (#764ba2)
- **Typography** - Clean, readable fonts
- **Spacing** - Proper padding and margins
- **Shadows** - Subtle depth and elevation

## 🧪 Testing the API

### Using cURL
```bash
curl -X POST http://localhost:5000/api/generate-questions \
  -H "Content-Type: application/json" \
  -d '{"role":"Frontend Developer","experience":"Junior"}'
```

### Using Postman
1. Method: POST
2. URL: `http://localhost:5000/api/generate-questions`
3. Body (JSON):
```json
{
  "role": "Frontend Developer",
  "experience": "Junior"
}
```

## 🐛 Troubleshooting

### "OPENROUTER_API_KEY is required"
- Make sure `.env` file exists in backend folder
- Check that `OPENROUTER_API_KEY` is set correctly
- Restart the backend server

### "Cannot POST /api/generate-questions"
- Ensure backend server is running on port 5000
- Check CORS configuration in `server.js`
- Verify frontend API URL matches backend URL

### "No valid JSON found in response"
- OpenRouter API returned invalid response
- Check API key validity
- Check model availability
- Try a different free model

### CORS errors
- Frontend and backend URLs must match
- Update `FRONTEND_URL` in backend `.env`
- Update `VITE_API_URL` in frontend `.env`

## 📚 How It Works

1. **User selects** job role and experience level
2. **Frontend sends** POST request to backend
3. **Backend validates** input parameters
4. **Backend creates** AI prompt with role + experience
5. **OpenRouter API** generates questions using Mistral 7B
6. **Backend parses** JSON response from AI
7. **Frontend displays** questions, answers, and tips
8. **User reads** interview preparation content

## 💡 Key Features Explained

### JSON-Only Output
The prompt explicitly tells the AI to output ONLY valid JSON, no markdown or extra text. This ensures reliable parsing.

### Structured Questions
Each question includes:
- **Question** - The actual interview question
- **Model Answer** - A concise, accurate answer
- **Interview Tips** - What the interviewer looks for

### Role-Specific
Questions change based on:
- Job role (Frontend vs Backend vs QA, etc.)
- Experience level (Fresher vs Junior vs Mid-level)

### Free & Reliable
- Uses free tier of OpenRouter API
- No model training required
- No API rate limits for reasonable usage
- Mistral 7B model is production-ready

## 🎯 Demo Flow (2-3 minutes)

1. Open frontend at http://localhost:5173
2. Select **"Frontend Developer"** from role dropdown
3. Select **"Junior"** from experience dropdown
4. Click **"Generate Interview Questions"**
5. Wait for AI to generate (5-10 seconds)
6. Show 5-7 questions with answers and tips
7. Explain: "Each question is role & experience-specific, with model answers and interviewer tips"

## 📝 Example Questions Generated

**Role**: Frontend Developer | **Experience**: Junior

1. **Q**: Explain the difference between == and === in JavaScript?
   - **Answer**: == does type coercion, === checks exact type and value
   - **Tips**: Demonstrates knowledge of JavaScript quirks and best practices

2. **Q**: What is the Virtual DOM in React?
   - **Answer**: React's in-memory representation of actual DOM for performance optimization
   - **Tips**: Explain reconciliation and how it improves performance

3. **Q**: How do you handle forms in React?
   - **Answer**: Using controlled components with state, or uncontrolled with refs
   - **Tips**: Explain trade-offs and when to use each approach

...and more generated by AI!

## 📄 License

MIT License - feel free to use for learning and projects

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repo
2. Create a feature branch
3. Submit a pull request

## 📞 Support

- Check the Troubleshooting section
- Review OpenRouter docs: https://openrouter.ai/docs
- Check backend logs for errors

---

**Built with ❤️ for interview preparation**
