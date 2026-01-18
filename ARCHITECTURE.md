# 🏗 Architecture & Code Overview

## System Architecture

```
┌─────────────────────────────────────────────────────┐
│                    USER BROWSER                      │
│           http://localhost:5173                      │
└────────────────────┬────────────────────────────────┘
                     │
                  HTTP GET/POST
                (fetch API calls)
                     │
         ┌───────────▼───────────┐
         │   FRONTEND (React)    │
         │  ┌─────────────────┐  │
         │  │ InterviewForm   │  │
         │  │ ResultsCard     │  │
         │  │ LoadingSpinner  │  │
         │  │ CSS Styling     │  │
         │  └─────────────────┘  │
         └────────────┬──────────┘
                      │
            POST /api/generate-questions
            {"role": "...", "experience": "..."}
                      │
         ┌────────────▼──────────┐
         │ BACKEND (Express.js)  │
         │ http://localhost:5000 │
         │ ┌───────────────────┐ │
         │ │ questionsRouter   │ │
         │ │ Controller Logic  │ │
         │ │ Input Validation  │ │
         │ │ Error Handling    │ │
         │ └────────┬──────────┘ │
         └──────────┼────────────┘
                    │
           HTTP POST /chat/completions
         (with role + experience prompt)
                    │
    ┌───────────────▼───────────────┐
    │   OPENROUTER API (Free Tier)  │
    │   https://openrouter.ai/api   │
    │                               │
    │  Model: mistralai/mistral-7b  │
    │  • Processes prompt           │
    │  • Generates JSON response    │
    │  • Returns interview questions│
    │  • No cost for free tier      │
    └───────────────┬───────────────┘
                    │
              JSON Response
          (5-7 questions with answers)
                    │
         ┌──────────▼──────────┐
         │ Backend Parses JSON │
         │ Validates Response  │
         │ Returns to Frontend │
         └──────────┬──────────┘
                    │
              HTTP 200 Response
            {"success": true, "data": {...}}
                    │
         ┌──────────▼──────────┐
         │  Frontend Renders   │
         │  Question Cards     │
         │  Shows Results      │
         └─────────────────────┘
```

## File-by-File Breakdown

### Backend Structure

#### `backend/src/server.js`
- Express server initialization
- CORS configuration
- Route mounting
- Error handling middleware
- Server listening

```javascript
Key lines:
- app.use(cors()) - Enable cross-origin requests
- app.use('/api', questionsRoutes) - Mount API routes
- app.listen(PORT) - Start server
```

#### `backend/src/config.js`
- Environment variable loading
- Configuration validation
- API configuration

```javascript
Key exports:
- config.openrouter.apiKey - OpenRouter API key
- config.openrouter.model - LLM model name
- config.port - Server port
```

#### `backend/src/utils/openrouter.js`
- OpenRouter API client setup
- AI prompt generation
- JSON response parsing

```javascript
Key function:
- generateInterviewQuestions(role, experience)
  1. Creates custom prompt for role + experience
  2. Calls OpenRouter API
  3. Parses JSON from response
  4. Returns structured data
```

#### `backend/src/controllers/questionsController.js`
- Request validation
- Role/experience validation
- Controller logic for generating questions

```javascript
Key validations:
- Both role and experience required
- Role must be in VALID_ROLES array
- Experience must be Fresher/Junior/Mid-level
```

#### `backend/src/routes/questions.js`
- API route definitions
- HTTP method handlers
- Route path mapping

```javascript
Routes defined:
- POST /generate-questions - Generate interview questions
- GET /valid-roles - Get available roles
```

#### `backend/src/middleware/errorHandler.js`
- Global error handling
- Async error wrapping
- Error response formatting

```javascript
Features:
- Catches all errors uniformly
- Sends JSON error responses
- Preserves error messages
```

---

### Frontend Structure

#### `frontend/src/App.jsx`
- Main React component
- Simple wrapper

```javascript
Renders: <Home /> component
```

#### `frontend/src/pages/Home.jsx`
- Main page component
- State management (questions, loading, error)
- API communication
- Component composition

```javascript
State:
- questions: null or array of generated questions
- loading: boolean for loading state
- error: string for error messages

Key function:
- handleGenerateQuestions(data) - Calls backend API
```

#### `frontend/src/components/InterviewForm.jsx`
- Form component
- Dropdowns for role & experience
- Form validation
- Submit handler

```javascript
Props:
- onSubmit(data) - Called on form submit
- loading: boolean - Disables form during loading

Validates:
- Both fields must be selected
- Shows error message if not
```

#### `frontend/src/components/ResultsCard.jsx`
- Display question cards
- Maps over questions array
- Formats content nicely

```javascript
Props:
- questions: array of question objects

Renders:
- Question number badge
- Question text
- Model answer
- Interview tips
```

#### `frontend/src/components/LoadingSpinner.jsx`
- Loading indicator
- Animated spinner CSS
- Loading message

```javascript
Shows:
- Spinning loader animation
- "Generating..." message
```

#### `frontend/vite.config.js`
- Vite build configuration
- Dev server settings
- React plugin setup

```javascript
Exports:
- Build and development server configuration
- Port 5173
- Auto-open on dev start
```

#### `frontend/src/styles/App.css`
- Main app styles
- Gradient background
- Layout and spacing
- Responsive design

```css
Features:
- Purple gradient background
- Container max-width 900px
- Mobile responsive
- Animation keyframes
```

#### `frontend/src/components/*.css`
- Component-specific styles
- Interactive states (hover, focus, disabled)
- Animations

```css
Files:
- InterviewForm.css - Form styling
- ResultsCard.css - Question card styling
- LoadingSpinner.css - Spinner animation
```

---

## Data Flow Example

### Request Flow

```
User selects:
  role = "Frontend Developer"
  experience = "Junior"

↓

Frontend sends POST:
  URL: http://localhost:5000/api/generate-questions
  Body: {
    "role": "Frontend Developer",
    "experience": "Junior"
  }

↓

Backend receives request in controller:
  questionsController.generateQuestions()

↓

Validates input:
  ✓ role in VALID_ROLES array
  ✓ experience in VALID_EXPERIENCE array

↓

Creates AI prompt:
  "You are an expert recruiter...
   Role: Frontend Developer
   Experience: Junior
   Generate 5-7 questions with answers and tips
   Output MUST be valid JSON..."

↓

Calls OpenRouter API:
  POST https://openrouter.ai/api/v1/chat/completions
  Model: mistralai/mistral-7b-instruct
  Message: [prompt]

↓

AI generates response:
  {
    "role": "Frontend Developer",
    "experience_level": "Junior",
    "questions": [
      {
        "question": "...",
        "model_answer": "...",
        "interview_tips": "..."
      },
      ...
    ]
  }

↓

Backend parses JSON:
  Extracts questions array
  Validates structure

↓

Backend returns to frontend:
  HTTP 200
  {
    "success": true,
    "data": { ...questions... }
  }

↓

Frontend receives response:
  Updates state: setQuestions(data.questions)
  Stops loading spinner

↓

Frontend renders:
  <ResultsCard questions={questions} />

↓

User sees:
  5-7 question cards with:
  - Question
  - Model Answer
  - Interview Tips
```

---

## API Contract

### Request/Response Examples

#### POST /api/generate-questions

**Request:**
```json
{
  "role": "Frontend Developer",
  "experience": "Junior"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "role": "Frontend Developer",
    "experience_level": "Junior",
    "questions": [
      {
        "question": "What is the Virtual DOM?",
        "model_answer": "React's in-memory representation for optimization",
        "interview_tips": "Explain reconciliation and performance benefits"
      }
    ]
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": {
    "status": 400,
    "message": "Both role and experience are required"
  }
}
```

---

## Environment Variables

### Backend (.env)

| Variable | Purpose | Example |
|----------|---------|---------|
| OPENROUTER_API_KEY | API authentication | `sk-xxx...` |
| OPENROUTER_MODEL | Model to use | `mistralai/mistral-7b-instruct` |
| PORT | Server port | `5000` |
| NODE_ENV | Environment | `development` or `production` |
| FRONTEND_URL | Frontend origin for CORS | `http://localhost:5173` |

### Frontend (.env)

| Variable | Purpose | Example |
|----------|---------|---------|
| VITE_API_URL | Backend API URL | `http://localhost:5000/api` |

---

## Error Handling Flow

```
Error occurs anywhere:
  ↓
Caught by try/catch or middleware
  ↓
Error object created:
  {
    status: 400/500,
    message: "descriptive message"
  }
  ↓
Passed to errorHandler middleware
  ↓
Returns JSON response:
  {
    success: false,
    error: { status, message }
  }
  ↓
Frontend receives error
  ↓
Displays in error-alert div
  ↓
User sees user-friendly message
```

---

## Technology Choices Explained

| Technology | Why Chosen | Alternative |
|-----------|-----------|-------------|
| React | Modern UI library, component-based | Vue, Svelte |
| Vite | Fast build tool, modern dev experience | Webpack, Create React App |
| Express | Lightweight web framework, industry standard | Fastify, Koa |
| Axios | Simple HTTP client | Fetch API, Node.js http |
| OpenRouter | Free LLM API aggregator | Direct LLM APIs (not free) |
| Mistral 7B | Free, fast, reliable | GPT-4, Claude (paid) |

---

## Performance Considerations

### Frontend
- ✅ CSS animations instead of JavaScript
- ✅ Minimal dependencies (React + Vite only)
- ✅ Responsive design for all devices
- ✅ Proper error boundaries

### Backend
- ✅ Async/await for non-blocking I/O
- ✅ Input validation before API calls
- ✅ JSON parsing error handling
- ✅ CORS configuration
- ✅ Environment-based configuration

### API Usage
- ✅ Uses free tier models only
- ✅ No unnecessary API calls
- ✅ Structured prompt for reliable responses
- ✅ JSON-only output for parsing reliability

---

## Scalability Notes

### Current Setup (Development)
- Single backend instance
- In-memory state only
- No database
- No caching

### Future Improvements
- Add database for caching questions
- Implement rate limiting
- Add user authentication
- Store user sessions
- Analytics tracking
- Multiple backend instances

---

## Security Architecture

```
┌─────────────────────────────────────────┐
│      Frontend (Browser)                 │
│ • No sensitive data stored              │
│ • API calls via HTTPS in production     │
└──────────────────┬──────────────────────┘
                   │
        HTTPS (encrypted)
                   │
┌──────────────────▼──────────────────────┐
│    Backend (Node.js)                    │
│ • Environment variables only            │
│ • .env file never committed             │
│ • Input validation on all requests      │
│ • Error messages don't leak details     │
│ • CORS enabled only for frontend        │
└──────────────────┬──────────────────────┘
                   │
          HTTPS API call
                   │
┌──────────────────▼──────────────────────┐
│    OpenRouter API                       │
│ • Authorization via API key header      │
│ • API key in backend only (not frontend)│
│ • HTTPS connection required             │
└──────────────────────────────────────────┘
```

---

## Deployment Architecture

### Development
```
Local Machine:
├── Frontend (Vite dev server) → localhost:5173
├── Backend (Node dev server)  → localhost:5000
└── OpenRouter API → cloud
```

### Production
```
GitHub Repository
    ↓
┌─Vercel (Frontend)────┐   ┌─Render (Backend)────┐
│ Automatic deployment │   │ Automatic deployment│
│ Global CDN           │   │ Docker containers   │
│ HTTPS by default     │   │ Auto-scaling        │
└──────────────────────┘   └─────────────────────┘
    ↓                              ↓
My App Domain              API Domain
```

---

This architecture is:
- ✅ Simple and understandable
- ✅ Scalable for growth
- ✅ Secure with best practices
- ✅ Production-ready
- ✅ Easy to modify and extend
