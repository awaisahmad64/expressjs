import mongoose from 'mongoose';
import 'dotenv/config';
const DB_URL = process.env.DATABASE_URL;
const createDBConection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log('Connecation Created Successfully!');
  } catch (error) {
    console.log('Connection Error', error);
  }
};
export default createDBConection;
