"use server";
import { UserModel } from "@/app/models/User";
import { revalidatePath } from "next/cache";

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
