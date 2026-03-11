import mongoose from "mongoose";

let connectDB = () => {
  try {
    mongoose
      .connect(process.env.DB_URL)
      .then(() => console.log("DB ulandi..."))
      .catch(console.error());
  } catch (error) {
    throw error;
  }
};
export default connectDB;
