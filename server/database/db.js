import mongoose from 'mongoose';

const connection = () => {
  
  const MONGO ='mongodb+srv://todolist:todolist@todos.4sloovf.mongodb.net/?retryWrites=true&w=majority'

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
