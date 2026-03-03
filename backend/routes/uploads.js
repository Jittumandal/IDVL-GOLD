const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const Report = require('../models/Report');

const router = express.Router();

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, uploadDir);
  },
  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const safeName = file.originalname
      .replace(extension, '')
      .replace(/[^a-zA-Z0-9-_]/g, '_');
    callback(null, `${Date.now()}_${safeName}${extension}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, callback) => {
    // allow images and PDFs
    const isImage = file.mimetype.startsWith('image/');
    const isPdf = file.mimetype === 'application/pdf';
    if (!isImage && !isPdf) {
      return callback(new Error('Only image or PDF files are allowed'));
    }
    return callback(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const buildImageUrl = (req, filename) => {
  const baseUrl = process.env.UPLOAD_BASE_URL || `${req.protocol}://${req.get('host')}`;
  return `${baseUrl}/uploads/${filename}`;
};

router.post('/', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Image file is required' });
  }

  const imageUrl = buildImageUrl(req, req.file.filename);
  return res.status(201).json({
    success: true,
    imageUrl,
    imagePath: `/uploads/${req.file.filename}`,
  });
});

router.post('/report/:id', upload.single('image'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Image file is required' });
    }

    const identifier = req.params.id;
    let report = await Report.findByPk(identifier);
    if (!report) {
      report = await Report.findOne({ where: { certificationNumber: identifier } });
    }
    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    const imageUrl = buildImageUrl(req, req.file.filename);

    await report.update({ image: imagePath });

    return res.status(200).json({
      success: true,
      imageUrl,
      imagePath,
      report,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
