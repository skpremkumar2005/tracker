const OpenAI = require('openai');
const prompts = require('../ai-agents/shared/prompts');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * A generic function to interact with the OpenAI API.
 * This can be used by various agents (workout, content, etc.).
 */
const getAICompletion = async (prompt, options = {}) => {
  try {
    // In a real app, you would choose the model and other params carefully
    const response = await openai.chat.completions.create({
      model: options.model || "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: options.max_tokens || 500,
      temperature: options.temperature || 0.7,
    });

    const content = response.choices[0].message.content;

    // Attempt to parse if the prompt requests JSON
    try {
        return JSON.parse(content);
    } catch (e) {
        return content; // Return as text if not valid JSON
    }

  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    throw new Error("Failed to get response from AI service.");
  }
};

module.exports = {
  getAICompletion
};