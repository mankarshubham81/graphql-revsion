import { User } from "../models/user.js";

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
};

export const updateUser = async (_ : any, { _id, name, email }: { _id: string; name: string; email: string }) => {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      { name, email },
      { new: true }
    );
    return updatedUser;
  };