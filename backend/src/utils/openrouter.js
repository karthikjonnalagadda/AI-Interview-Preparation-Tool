import axios from 'axios';
import { config } from '../config.js';

const openrouterClient = axios.create({
  baseURL: config.openrouter.baseUrl,
  headers: {
    'Authorization': `Bearer ${config.openrouter.apiKey}`,
    'HTTP-Referer': 'https://github.com/karthikjonnalagadda/AI-Interview-Preparation-Tool.git',
    'X-Title': 'AI Interview Preparation Tool',
  },
});

export const generateInterviewQuestions = async (role, experience) => {
  const prompt = `You are an expert technical recruiter and interview coach. Generate exactly 5-7 interview questions for the following job profile:
  
  Job Role: ${role}
  Experience Level: ${experience}
  
  For each question, provide:
  1. A realistic interview question
  2. A clear, concise model answer (2-3 sentences)
  3. Interview tips - what the interviewer is looking for
  
  Return your response as VALID JSON ONLY, with NO markdown or extra text. Use this exact structure:
  {
    "role": "${role}",
    "experience_level": "${experience}",
    "questions": [
      {
        "question": "string",
        "model_answer": "string",
        "interview_tips": "string"
      }
    ]
  }`;

  try {
    const response = await openrouterClient.post('/chat/completions', {
      model: config.openrouter.model,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = response.data.choices[0].message.content;
    
    // Parse JSON response safely
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in response');
    }

    const parsedResponse = JSON.parse(jsonMatch[0]);
    return parsedResponse;
  } catch (error) {
    console.error('OpenRouter API Error:', error.response?.data || error.message);
    throw new Error(`Failed to generate questions: ${error.message}`);
  }
};
