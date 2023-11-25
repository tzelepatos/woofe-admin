"use server";
import { UserModel } from "@/app/models/User";
import { GroomingModel } from "@/app/models/product";
import mongoose from "mongoose";

export const fetchUsers = async (query, page, postPerPage) => {
  const regex = new RegExp(query, "i");

  try {
    mongoose.connect(process.env.MONGODB_URI);
    const count = await UserModel.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    }).countDocuments();
    const users = await UserModel.find({
      $or: [{ name: { $regex: regex } }, { email: { $regex: regex } }],
    })
      .limit(postPerPage)
      .skip(postPerPage * (page - 1))
      .lean(); // Convert Mongoose documents to plain JavaScript objects

    return { count, users };
  } catch (err) {
    console.log(err);

    throw new Error("Failed to fetch users!");
  }
};
export const fetchUser = async (id) => {
  // console.log("Fetching user with id:", id);
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const user = await UserModel.findById(id);
    // console.log("Fetched user:", user);

    return JSON.parse(JSON.stringify(user.toObject()));
  } catch (err) {
    console.log("Error fetching user:", err);

    throw new Error("Failed to fetch user!");
  }
};

export async function fetchUserEmailFromProduct(product) {
  if (!product.user) {
    console.log("Product does not have a user.");
    return ""; // Return default value
  }

  const user = await fetchUser(product.user);

  return user.email;
}
