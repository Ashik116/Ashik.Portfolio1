
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, BIOGRAPHY } from "../constants";

export const askPortfolioAssistant = async (query: string) => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "The AI assistant is currently offline because the API Key is missing. Please set the API_KEY in your environment variables.";
  }
  
  const ai = new GoogleGenAI({ apiKey: apiKey });
  
  const systemInstruction = `
    You are the AI assistant for Ashikur Rahman, a Senior Flutter Developer.
    Developer Info: ${BIOGRAPHY}
    Projects: ${JSON.stringify(PROJECTS)}
    
    Guidelines:
    - You represent Ashikur Rahman.
    - Be professional, creative, and friendly.
    - If someone asks about his skills, mention Flutter, Dart, and Firebase.
    - If someone wants to hire him, tell them to use the contact form at the bottom of the page.
    - Keep responses brief and engaging.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having a little trouble thinking. Could you try asking that again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently resting. Please try again in a moment or contact Ashik directly via the form below!";
  }
};
