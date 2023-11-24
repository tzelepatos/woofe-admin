import { Schema, models, model } from "mongoose";
import bcrypt from "bcrypt";
import { groomingSchema } from "@/app/models/Product.jsx";

const userSchema = new Schema(
  {
    //main fields
    name: { type: String, required: false, default: "" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    //extra fields
    address: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
    },

    role: { type: String, required: false, default: "user" },
    image: { type: String, required: false, default: "" },
    provider: { type: String, required: false, default: "credentials" },
    userInfo: { type: String, required: false, default: "" },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    products: [{ type: Schema.Types.ObjectId, ref: "GroomingModel" }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.password && (user.isModified("password") || user.isNew)) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  }

  next();
});

export const UserModel = models?.UserModel || model("UserModel", userSchema);

//activation token
const activationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  activationToken: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the duration in seconds after which the activation token will expire
  },
});

export const ActivationModel =
  models?.ActivationModel || model("ActivationModel", activationSchema);
