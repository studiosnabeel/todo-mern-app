import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.USER_ID;
const password = process.env.PASSWORD;

const connection = () => {
  const MONGO = `mongodb+srv://${username}:${password}@todos.4sloovf.mongodb.net/?retryWrites=true&w=majority`;

  mongoose.connect(MONGO, {
    useNewUrlParser: true,
  });

  mongoose.connection.on('connected', () => {
    console.log('Database is connected successfully');
  });

  mongoose.connection.on('disconnected', () => {
    console.log('Database disconnected');
  });

  mongoose.connection.on('error', () => {
    console.log('Error while connecting with database');
  });
};

export default connection;
