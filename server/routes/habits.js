const express = require('express');
const { getHabits, addHabit, completeHabit, deleteHabit } = require('../controllers/habitController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.use(protect); // All habit routes are protected

router.route('/')
  .get(getHabits)
  .post(addHabit);

router.route('/:id')
  .delete(deleteHabit);

router.route('/:id/complete')
  .post(completeHabit);


module.exports = router;