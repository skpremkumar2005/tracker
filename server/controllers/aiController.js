const workoutGenerator = require('../services/workoutGenerator');
const contentGenerator = require('../services/contentGenerator');

exports.generateWorkout = async (req, res, next) => {
    try {
        const userProfile = req.user.profile;
        const preferences = req.body.preferences; // e.g., { type: 'strength', duration: 60 }

        // This is where you call the AI service
        const workoutPlan = await workoutGenerator.generate(userProfile, preferences);

        res.status(200).json({ success: true, data: workoutPlan });
    } catch (err) {
        next(err);
    }
};

exports.generateReadingTopic = async (req, res, next) => {
    try {
        const preferences = req.body.preferences; // e.g., { interest: 'technology', difficulty: 'intermediate' }
        const topic = await contentGenerator.generateTopic(preferences);
        res.status(200).json({ success: true, data: topic });
    } catch (err) {
        next(err);
    }
};