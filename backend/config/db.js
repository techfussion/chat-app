import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`DB Connection Established: ${connect.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit();
  }
};

export default connectDB;
