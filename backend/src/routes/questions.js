import express from 'express';
import { generateQuestions, getValidRoles } from '../controllers/questionsController.js';
import { asyncHandler } from '../middleware/errorHandler.js';

const router = express.Router();

router.post('/generate-questions', asyncHandler(generateQuestions));
router.get('/valid-roles', getValidRoles);

export default router;
