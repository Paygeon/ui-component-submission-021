import nextConnect from 'next-connect';
import multer from 'multer';
import connectMongoDB from '../../../libs/mongodb'
import { GridFSBucket } from 'mongodb';

const upload = multer({ storage: multer.memoryStorage() });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  await connectMongoDB();
  const db = req.db;
  const bucket = new GridFSBucket(db);

  const { file } = req;
  const uploadStream = bucket.openUploadStream(file.originalname);
  const id = uploadStream.id;

  uploadStream.end(file.buffer);

  res.json({ id });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;

