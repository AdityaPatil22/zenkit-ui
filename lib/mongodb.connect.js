import mongoose from 'mongoose';

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo connection successful');
  } catch (error) {
    console.error('Connection to MongoDb Failed:', error);
  }
};

export default connectToDb;
