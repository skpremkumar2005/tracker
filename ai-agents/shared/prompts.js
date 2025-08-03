exports.createWorkoutPrompt = (userProfile, preferences) => {
    return `
      You are an expert fitness coach. Generate a JSON object representing a workout plan.
      
      User Profile:
      - Fitness Level: ${userProfile.fitnessLevel || 'beginner'}
      - Goals: ${userProfile.goals.join(', ') || 'general fitness'}
  
      Workout Preferences:
      - Type: ${preferences.type || 'strength'}
      - Time Available: ${preferences.duration || 60} minutes
      - Available Equipment: ${preferences.equipment || 'none'}
  
      The JSON response should have this exact structure: { "type": "string", "duration": "number", "aiGenerated": true, "exercises": [{ "name": "string", "sets": "number", "reps": "number", "notes": "string" }] }.
      For cardio or duration-based exercises, use a "duration" key in seconds instead of "reps".
      
      Generate a balanced workout based on these details.
    `;
  };
  
  exports.createReadingTopicPrompt = (preferences) => {
      return `
        You are a content curator. Generate a JSON object with a reading topic suggestion.
        
        User Preferences:
        - Interest: ${preferences.interest || 'general knowledge'}
        - Desired Difficulty: ${preferences.difficulty || 'intermediate'}
        
        The JSON response should have this exact structure: { "topic": "string", "category": "string", "difficulty": "string", "summary": "string" }.
        Generate an engaging topic based on the preferences.
      `;
  }