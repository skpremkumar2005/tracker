const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./config/database');
const reminderJobs = require('./jobs/reminderJobs');

dotenv.config();

// Connect to Database
connectDB();

const server = http.createServer(app);

// For now, Socket.IO is initialized but core logic can be added later
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('A user connected via WebSocket');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.set('io', io); // Make io accessible in other parts of the app

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  // Start scheduled jobs
  reminderJobs.start();
});

process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});