# Services 🌐

This directory contains service layers for interacting with external APIs and handling application-level logic outside of UI components.

## ⚡ Services

### `geminiService.ts`

Integrates with the **Google Gemini API** to provide AI-assisted jersey design generation.

- **Functionality**:
  - **Prompt Processing**: Takes natural language design themes from the user.
  - **Design Mapping**: Translates themes into structured design tokens (colors, patterns, collar types).
  - **Error Handling**: Graceful fallbacks for API or parsing issues.

## 🔑 Configuration

The AI service requires a valid `API_KEY` to be configured in the environment.

```typescript
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
```
