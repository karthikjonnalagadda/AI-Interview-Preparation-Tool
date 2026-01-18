import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { errorHandler } from './middleware/errorHandler.js';
import questionsRoutes from './routes/questions.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: config.frontendUrl,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// Routes
app.use('/api', questionsRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📝 API Documentation:`);
  console.log(`   POST /api/generate-questions - Generate interview questions`);
  console.log(`   GET /api/valid-roles - Get available roles and experience levels`);
  console.log(`   GET /health - Health check`);
});
