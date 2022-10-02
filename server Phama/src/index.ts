import express from 'express';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    const app = express();
    const port = 8080;

    app.use(express.json());
    app.use('/auth', authRoutes);

    console.log('connected to Mongodb');

    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });

  })
  .catch((e) => {
    throw new Error(e);
  });

