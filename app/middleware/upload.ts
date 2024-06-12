const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ['application/typescript'];

    if (match.indexOf(file.mimetype) === -1) {
      return {
        message: 'Invalid file type. Only TypeScript files are allowed.'
      };
    }

    return {
      bucketName: 'typescript',
      filename: `${Date.now()}-typescript-${file.originalname}`
    };
  }
});

const upload = multer({ storage });

module.exports = upload;
