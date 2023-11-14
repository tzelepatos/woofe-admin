import { UserModel } from "@/app/models/User";
import mongoose from "mongoose";

export const fetchUsers = async (query, page, postPerPage) => {
  const regex = new RegExp(query, "i");

  try {
    mongoose.connect(process.env.MONGODB_URI);
    const count = await UserModel.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    }).count();
    const users = await UserModel.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    })
      .limit(postPerPage)
      .skip(postPerPage * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const user = await UserModel.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};
