// src/controllers/audioController.js - Audio business logic
const Audio = require('../models/audio.model');
const { LANGUAGE_MAP } = require('../utils/constants');
const { AppError } = require('../middleware/errorHandler');

const audioController = {
  /**
   * Get audio URL by language code
   * @route GET /api/audio/:language
   */
  async getAudioByLanguage(req, res, next) {
    try {
      const { language } = req.params;
      
      // Validate language parameter
      if (!language) {
        return next(new AppError('Language parameter is required', 400));
      }

      // Map language code to full name
      const languageName = LANGUAGE_MAP[language.toLowerCase()];
      
      if (!languageName) {
        return next(new AppError(
          `Unsupported language: ${language}. Available languages: ${Object.keys(LANGUAGE_MAP).join(', ')}`, 
          400
        ));
      }

      // Find audio file for the specified language
      const audioFile = await Audio.findActiveByLanguage(languageName);
      
      if (!audioFile) {
        return res.status(404).json({
          success: false,
          message: `Audio not found for language: ${language}`,
          availableLanguages: Object.keys(LANGUAGE_MAP),
          requestedLanguage: language,
          mappedLanguage: languageName
        });
      }

      // Return success response
      res.json({
        success: true,
        language: language,
        languageName: languageName,
        audioUrl: audioFile.audioUrl,
        duration: audioFile.duration,
        formattedDuration: audioFile.formattedDuration,
        lastUpdated: audioFile.updatedAt
      });

    } catch (error) {
      next(error);
    }
  },

  /**
   * Health check for audio service
   * @route GET /api/audio/health
   */
  async healthCheck(req, res, next) {
    try {
      const totalAudioFiles = await Audio.countDocuments({ isActive: true });
      const availableLanguages = await Audio.distinct('language', { isActive: true });
      
      res.json({
        success: true,
        service: 'Audio Service',
        status: 'healthy',
        totalAudioFiles,
        availableLanguages,
        supportedLanguageCodes: Object.keys(LANGUAGE_MAP),
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      next(error);
    }
  }
};

module.exports = audioController;
