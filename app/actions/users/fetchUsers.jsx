"use server";
import { UserModel } from "@/app/models/User";
import { GroomingModel } from "@/app/models/Product";
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
  if (!product || !product.user) {
    console.log("Product or user is not defined.");
    return ""; // Return default value
  }

  const user = await fetchUser(product.user);

  return user.email;
}

export async function fetchProductsByUserId(userId) {
  console.log("fetchProductsByUserId called with userId:", userId);

  try {
    mongoose.connect(process.env.MONGODB_URI);
    const products = await GroomingModel.find({ user: userId });

    const productData = products.map((product) => ({
      id: product._id.toString(),
      name: product.productName,
      //services
    }));
    // console.log("Product data:", productData);
    return productData;
  } catch (error) {
    console.error("Error fetching data:", error);
    console.error("Stack trace:", error.stack);
    return [];
  }
}
export async function fetchUserProducts(userId, page, postPerPage, query) {
  try {
    console.log("fetchUserProducts called with:", {
      userId,
      // page,
      // postPerPage,
      // query,
    });

    const skip = (page - 1) * postPerPage;
    let findQuery = { user: userId };

    if (query) {
      // Escape special characters in the query
      const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

      findQuery = {
        $and: [
          { user: userId },
          {
            $or: [
              { productName: { $regex: new RegExp(escapedQuery, "i") } },
              { description: { $regex: new RegExp(escapedQuery, "i") } },
              // Add more fields to search if needed
            ],
          },
        ],
      };
    }

    // Apply the query to filter the products
    const products = await GroomingModel.find(findQuery)
      .skip(skip)
      .limit(postPerPage);

    const posts = products.map((post) => post.toObject({ getters: true }));

    const totalPosts = await GroomingModel.countDocuments(findQuery);

    const totalPages = Math.ceil(totalPosts / postPerPage);

    return { posts, totalPages, totalPosts };
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
