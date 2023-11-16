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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
      userInfo,
      image,
    });

    await newUser.save();
    console.log("User created successfully!");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/users");
  redirect("/users");
};
