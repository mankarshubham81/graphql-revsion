// import mongoose from "mongoose";


// // Define the User schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true }
//   // password: { type: String, required: false },
//   // googleId: { type: String, required: false },
//   // role: { type: String, required: true },
//   // avatar: { type: String, required: true },
//   // verified: { type: Boolean, required: true },
//   // createdAt: { type: Date, default: Date.now },
//   // updatedAt: { type: Date, default: Date.now }
// });

// // Create the User model
// export const User = mongoose.model('User', userSchema);

import mongoose, { Document, Model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  verified: boolean
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  verified: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);