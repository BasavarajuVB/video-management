
const Video = require('../models/Video');

const uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No video file uploaded' });
    }

    const videoUrl = `/uploads/${req.file.filename}`;
    
    const video = await Video.create({
      title: req.body.title,
      description: req.body.description,
      url: videoUrl,
      fileSize: req.file.size,
      owner: req.userId
    });

    res.status(201).json({
      success: true,
      video
    });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Video upload failed' });
  }
};

const getUserVideos = async (req, res) => {
  try {
    const videos = await Video.find({ owner: req.userId })
      .sort({ createdAt: -1 });
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ error: 'Video not found' });
    }
    res.json(video);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch video' });
  }
};

module.exports = { uploadVideo, getUserVideos, getVideoById };