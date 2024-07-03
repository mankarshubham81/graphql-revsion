import mongoose from "mongoose";


// Define the Course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true }
  // password: { type: String, required: false },
  // googleId: { type: String, required: false },
  // role: { type: String, required: true },
  // avatar: { type: String, required: true },
  // verified: { type: Boolean, required: true },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now }
});

// Create the Course model
export const Course = mongoose.model('Course', courseSchema);