
// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const { uploadVideo, getUserVideos, getVideoById } = require('../controllers/videoController');
const auth = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
    cb(null, `video-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('video/')) {
      cb(null, true);
    } else {
      cb(new Error('Please upload only video files.'));
    }
  }
});

router.post('/upload', auth, upload.single('video'), uploadVideo);
router.get('/', auth, getUserVideos);
router.get('/:id', auth, getVideoById);

module.exports = router;