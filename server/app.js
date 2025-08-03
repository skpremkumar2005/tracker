const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

// Import Routes
const authRoutes = require('./routes/auth');
const habitRoutes = require('./routes/habits');
const workoutRoutes = require('./routes/workouts');
const aiRoutes = require('./routes/ai');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/habits', habitRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/ai', aiRoutes);


// Global Error Handler
app.use(errorHandler);

module.exports = app;