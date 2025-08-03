const Habit = require('../models/Habit');

// @desc    Get all habits for logged in user
// @route   GET /api/habits
exports.getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find({ userId: req.user.id });
    res.status(200).json({ success: true, count: habits.length, data: habits });
  } catch (err) {
    next(err);
  }
};

// @desc    Add a new habit
// @route   POST /api/habits
exports.addHabit = async (req, res, next) => {
  try {
    req.body.userId = req.user.id;
    const habit = await Habit.create(req.body);
    res.status(201).json({ success: true, data: habit });
  } catch (err) {
    next(err);
  }
};

// @desc    Mark a habit as complete for today
// @route   POST /api/habits/:id/complete
exports.completeHabit = async (req, res, next) => {
    // Basic logic - more advanced logic would check dates to avoid double counting
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, {
            $push: { completions: { date: new Date() } },
            $inc: { streak: 1 }
        }, { new: true });

        if (!habit) {
            return res.status(404).json({ success: false, message: 'Habit not found' });
        }
        res.status(200).json({ success: true, data: habit });
    } catch(err) {
        next(err);
    }
}

// @desc    Delete a habit
// @route   DELETE /api/habits/:id
exports.deleteHabit = async (req, res, next) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            return res.status(404).json({ success: false, message: 'Habit not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        next(err);
    }
}