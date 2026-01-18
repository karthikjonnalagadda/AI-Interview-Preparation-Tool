import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { errorHandler } from './middleware/errorHandler.js';
import questionsRoutes from './routes/questions.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

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

// 🚀 START SERVER (RENDER FIX)
const PORT = process.env.PORT || config.port || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📝 API Documentation:`);
  console.log(`   POST /api/generate-questions - Generate interview questions`);
  console.log(`   GET /api/valid-roles - Get available roles and experience levels`);
  console.log(`   GET /health - Health check`);
});
