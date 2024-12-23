
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String 
  },
  url: { 
    type: String, 
    required: true 
  },
  fileSize: { 
    type: Number 
  },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Video', videoSchema);

