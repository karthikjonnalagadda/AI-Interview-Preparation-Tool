import dotenv from 'dotenv';

dotenv.config();

export const config = {
  openrouter: {
    apiKey: process.env.OPENROUTER_API_KEY,
    model: process.env.OPENROUTER_MODEL || 'mistralai/mistral-7b-instruct',
    baseUrl: 'https://openrouter.ai/api/v1',
  },
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:5173',
};

if (!config.openrouter.apiKey) {
  throw new Error('OPENROUTER_API_KEY is required. Please set it in .env file');
}
