// src/utils/constants.js - Application constants
const LANGUAGE_MAP = {
  'en': 'english',
  'ar': 'arabic', 
  'es': 'spanish',
  'fr': 'french',
  'de': 'german',
  'hi': 'hindi',
  'zh': 'chinese',
  'ja': 'japanese',
  'ko': 'korean',
  'pt': 'portuguese',
  'ru': 'russian',
  'it': 'italian'
};

const SUPPORTED_LANGUAGES = Object.values(LANGUAGE_MAP);

const API_MESSAGES = {
  AUDIO_NOT_FOUND: 'Audio file not found for the specified language',
  LANGUAGE_REQUIRED: 'Language parameter is required',
  UNSUPPORTED_LANGUAGE: 'Unsupported language code',
  SERVER_ERROR: 'Internal server error occurred',
  SUCCESS: 'Request processed successfully'
};

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

module.exports = {
  LANGUAGE_MAP,
  SUPPORTED_LANGUAGES,
  API_MESSAGES,
  HTTP_STATUS
};
