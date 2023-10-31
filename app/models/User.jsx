import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    //main fields
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    //extra fields

    name: { type: String, required: false },
    role: { type: String, required: false, default: "user" },
    image: { type: String, required: false },
    provider: { type: String, required: false, default: "credentials" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
export const UserModel = models?.UserModel || model("UserModel", userSchema);
