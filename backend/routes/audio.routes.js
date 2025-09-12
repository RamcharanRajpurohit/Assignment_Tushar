// src/routes/audioRoutes.js - Route definitions
const express = require('express');
const audioController = require('../controllers/audio.controller');

const router = express.Router();

// Audio service health check
router.get('/health', audioController.healthCheck);

// Main route - Get audio by language
router.get('/:language', audioController.getAudioByLanguage);

module.exports = router;
