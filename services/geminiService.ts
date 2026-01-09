
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PROJECTS, BIOGRAPHY, EXPERIENCES } from "../constants";

export const askPortfolioAssistant = async (query: string) => {
  // Fix: Initializing GoogleGenAI with named parameter apiKey from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = `
    You are the Senior Flutter AI Assistant for Ashikur Rahman. 
    Developer Info: ${BIOGRAPHY}
    Work Experience: ${JSON.stringify(EXPERIENCES)}
    Recent Projects: ${JSON.stringify(PROJECTS)}
    
    Style:
    - You are a tech-savvy, professional, and confident Flutter expert.
    - Mention specific Flutter tools like BLoC, GetX, or Clean Architecture if relevant.
    - If asked about hiring, direct them to the contact form.
    - Use emojis occasionally to stay friendly (🚀, ✨, 📱).
    - Be concise but helpful.
  `;

  try {
    // Fix: Using correct model name 'gemini-3-flash-preview' and direct generateContent call
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Fix: Accessing .text property directly instead of calling .text()
    return response.text || "I'm processing that... can you rephrase the question?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently busy compiling some code. Please try again or reach out to Ashik via the form below!";
  }
};
