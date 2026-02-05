
import { GoogleGenAI, Type } from "@google/genai";
import { JerseyConfig, JerseyPattern, CollarType, ViewMode } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateJerseyDesign = async (prompt: string): Promise<Partial<JerseyConfig>> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Design a soccer jersey based on this theme: "${prompt}". 
      Respond with a JSON object containing primaryColor, secondaryColor, accentColor, textColor, pattern (one of: solid, stripes, hoops, gradient, half, chevron), and collarType (one of: round, v-neck, polo).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            primaryColor: { type: Type.STRING },
            secondaryColor: { type: Type.STRING },
            accentColor: { type: Type.STRING },
            textColor: { type: Type.STRING },
            pattern: { type: Type.STRING, enum: Object.values(JerseyPattern) },
            collarType: { type: Type.STRING, enum: Object.values(CollarType) },
          },
          required: ["primaryColor", "secondaryColor", "accentColor", "textColor", "pattern", "collarType"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return {};
  }
};
