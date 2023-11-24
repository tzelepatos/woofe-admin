import mongoose from "mongoose";
import { UserModel } from "@/app/models/User";
import bcrypt from "bcrypt";
// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("MongoDB connection error:", error);
//   });
//POST
export async function POST(request) {
  // Extracting the body from the request
  const jsonbody = await request.json();
  const { email, password } = jsonbody;
  // console.log("jsonbody:", jsonbody);

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required" }),
      { status: 400 }
    );
  }
  //conect to db
  await mongoose.connect(process.env.MONGODB_URI);
  const exist = await UserModel.findOne({ email: email });

  if (exist) {
    return new Response(JSON.stringify({ error: "Email already exists" }), {
      status: 400,
    });
  }

  try {
    const user = await UserModel.create({
      email: email,
      password: password,
    });
    // Log the created user
    console.log("Created user register:", user);
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.error("error creating user register", error);
    return new Response("Error processing request", { status: 500 });
  }
}
