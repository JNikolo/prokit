# Services 🌐

This directory contains service layers for interacting with external APIs and handling application-level logic outside of UI components.

## ⚡ Services

### `geminiService.ts`

Integetes with the **Google Gemini API** to provide AI-assisted jersey design.

- **Functionality**:
  - Takes a theme/prompt from the user.
  - Requests a structured JSON design configuration from the Gemini model.
  - Maps natural language to design tokens (colors, patterns, collar types).

## 🔑 Configuration

The AI service expects an `API_KEY` to be present in the environment variables.

```typescript
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
```
