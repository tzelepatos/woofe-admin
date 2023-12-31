"use server";
import { UserModel } from "@/app/models/User";
import { revalidatePath } from "next/cache";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export const deleteUser = async (id) => {
  if (!id) {
    return { error: "No user ID provided!" };
  }

  try {
    const result = await UserModel.deleteOne({ _id: id });

    if (result.deletedCount > 0) {
      revalidatePath("/users"); // Add this line
      return { success: "User deleted successfully!" };
    } else {
      return { error: "No user found with this ID!" };
    }
  } catch (err) {
    console.log("Error deleting user:", err);
    return { error: "Failed to delete user!" };
  }
};

export const addUser = async (formData) => {
  const { name, email, password, phone, address, role, userInfo, image } =
    Object.fromEntries(formData);
  console.log(formData);

  try {
    const newUser = new UserModel({
      name,
      email,
      password,
      phone,
      address,
      role,
      userInfo,
      image,
    });

    await newUser.save();
    console.log("User created successfully!");

    // Return a success status when the user is created
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Failed to create user!" };
  } finally {
    revalidatePath("/users");
    // redirect("/users");
  }
};
export const updateUser = async (formData) => {
  const { id, name, email, password, phone, address, role, userInfo, image } =
    Object.fromEntries(formData);

  // console.log("Form Data UPDATE:", formData);

  try {
    const user = await UserModel.findById(id);
    let hashedPassword = user.password;

    if (password && password.trim() !== "") {
      const isMatch = user.password === password;
      if (!isMatch) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
      }
    }

    console.log("Updating user with ID:", id);

    const updateFields = {
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
      userInfo,
      image,
    };

    if (!password) {
      delete updateFields.password;
    }

    Object.keys(updateFields).forEach(
      (key) => updateFields[key] === undefined && delete updateFields[key]
    );

    const result = await UserModel.findByIdAndUpdate(id, updateFields);

    if (result) {
      // Return a success status when the update is successful
      return { success: true };
    } else {
      // Return an error status when the update fails
      return { error: "No user found with the provided id!" };
    }
  } finally {
    revalidatePath("/users");

    // redirect("/users");
  }
};

export async function fetchUserProducts(userId, page, postPerPage, query) {
  try {
    console.log("fetchUserProducts called with:", {
      userId,
      page,
      postPerPage,
      query,
    });

    const skip = (page - 1) * postPerPage;
    const user = await UserModel.findById(userId).populate("products");
    const products = user.products.slice(skip, skip + postPerPage);

    const totalPosts = user.products.length;
    console.log("Total posts:", totalPosts);

    const totalPages = Math.ceil(totalPosts / postPerPage);
    console.log("Total pages:", totalPages);

    return { products, totalPages, totalPosts };
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
