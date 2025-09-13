// api/index.js - Main entry point
const express = require('express');
const cors = require('cors');
const connectDB = require('../config/database');
const audioRoutes = require('../routes/audio.routes');
const errorHandler = require('../middleware/errorHandler');
const Audio = require('../models/audio.model');

const app = express();
const frontendUrl = process.env.FRONTENDURL;
// Middleware
app.use(
  cors({
    origin: [frontendUrl],
    credentials: true,
  })
);

app.use(express.json());

// Connect to MongoDB
connectDB();

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'API is running!',
    timestamp: new Date().toISOString(),
    service: 'ElevenLabs Clone Backend',
  });
});

// Routes
app.use('/api/audio', audioRoutes);

// Error handling middleware (must be last)
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not found');
});

// ----------------------------
// 👇 Add this block for local dev
// ----------------------------
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {

  });
}

module.exports = app;
