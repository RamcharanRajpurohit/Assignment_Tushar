// src/models/Audio.js - Audio model
const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  language: {
    type: String,
    required: [true, 'Language is required'],
    lowercase: true,
    trim: true,
    index: true,
    enum: ['english', 'arabic', 'spanish', 'french', 'german', 'hindi']
  },
  audioUrl: {
    type: String,
    required: [true, 'Audio URL is required'],
    trim: true,
    validate: {
      validator: function(v) {
        // Basic URL validation
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid audio URL'
    }
  },
  duration: {
    type: Number,
    min: [0, 'Duration cannot be negative'],
    default: null
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, {
  timestamps: true,
  collection: 'audio_files'
});

// Compound index for efficient queries
audioSchema.index({ language: 1, isActive: 1 });

// Static method to find active audio by language
audioSchema.statics.findActiveByLanguage = function(language) {
  return this.findOne({ 
    language: language.toLowerCase(), 
    isActive: true 
  }).sort({ createdAt: -1 });
};

// Virtual for formatted duration
audioSchema.virtual('formattedDuration').get(function() {
  if (!this.duration) return null;
  
  const minutes = Math.floor(this.duration / 60);
  const seconds = Math.floor(this.duration % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

// Transform output (remove sensitive fields)
audioSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.__v;
    return ret;
  }
});

const Audio = mongoose.model('Audio', audioSchema);

module.exports = Audio;
