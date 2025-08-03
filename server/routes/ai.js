const express = require('express');
const { generateWorkout, generateReadingTopic } = require('../controllers/aiController');
const { protect } = require('../middleware/auth');

const router = express.Router();
router.use(protect);

router.post('/generate-workout', generateWorkout);
router.post('/generate-reading-topic', generateReadingTopic);

module.exports = router;