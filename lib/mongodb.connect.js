import mongoose from 'mongoose';

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo connection successful');
  } catch {
    console.log('Connection to MongoDb Failed');
  }
};

export default connectToDb;
