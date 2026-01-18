import { generateInterviewQuestions } from '../utils/openrouter.js';

const VALID_ROLES = [
  'QA Intern',
  'Frontend Developer',
  'Backend Developer',
  'Data Analyst',
  'Full Stack Developer',
  'DevOps Engineer',
  'Mobile Developer',
  'UI/UX Designer',
];

const VALID_EXPERIENCE = ['Fresher', 'Junior', 'Mid-level'];

export const generateQuestions = async (req, res, next) => {
  try {
    const { role, experience } = req.body;

    // Validation
    if (!role || !experience) {
      const error = new Error('Both role and experience are required');
      error.status = 400;
      throw error;
    }

    if (!VALID_ROLES.includes(role)) {
      const error = new Error(`Invalid role. Valid roles: ${VALID_ROLES.join(', ')}`);
      error.status = 400;
      throw error;
    }

    if (!VALID_EXPERIENCE.includes(experience)) {
      const error = new Error(`Invalid experience level. Valid levels: ${VALID_EXPERIENCE.join(', ')}`);
      error.status = 400;
      throw error;
    }

    // Call OpenRouter API
    const result = await generateInterviewQuestions(role, experience);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getValidRoles = (req, res) => {
  res.status(200).json({
    success: true,
    roles: VALID_ROLES,
    experienceLevels: VALID_EXPERIENCE,
  });
};
