const { getAICompletion } = require('./aiService');
const { createWorkoutPrompt } = require('../ai-agents/shared/prompts');

// This class structure matches your project plan.
class WorkoutAgent {
  /**
   * Generates a workout plan by calling the AI service.
   * @param {Object} userProfile - User's profile (fitnessLevel, goals).
   * @param {Object} preferences - Workout preferences (type, duration).
   * @returns {Object} A structured workout plan.
   */
  async generate(userProfile, preferences) {
    console.log("Generating AI workout...");
    const prompt = createWorkoutPrompt(userProfile, preferences);

    // This is a mocked call. Replace with a real call to the AI service.
    // const workoutPlan = await getAICompletion(prompt);
    // return workoutPlan;
    
    // ---- MOCKED RESPONSE FOR OFFLINE DEVELOPMENT ----
    console.warn("Using mocked AI response for workout generation.");
    return {
      type: preferences.type || 'strength',
      duration: preferences.duration || 60,
      aiGenerated: true,
      exercises: [
        { name: "Squats", sets: 3, reps: 10, notes: "Focus on form." },
        { name: "Push-ups", sets: 3, reps: 12, notes: "Keep your core tight." },
        { name: "Plank", sets: 3, duration: 60, notes: "Hold for 60 seconds." },
      ],
    };
    // ---- END MOCKED RESPONSE ----
  }
}

module.exports = new WorkoutAgent();