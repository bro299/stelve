import { GenerativeAIClient } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const client = new GenerativeAIClient({ apiKey: process.env.GEMINI_API_KEY });

export const genAI = client;
