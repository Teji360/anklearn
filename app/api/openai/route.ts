//openai endpoint
import OpenAI from 'openai';
import { console } from 'node:inspector/promises';
   

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a sentence in `{language}` using the word",
    temperature: 0.7,
    max_output_tokens: 100,
});

console.log(response.output_text);