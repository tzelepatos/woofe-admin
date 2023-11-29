import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { GroomingModel } from "@/app/models/Product";
import { UserModel } from "@/app/models/User";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

//POST
export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }
  const userId = session.user.id;
  // Extracting the body from the request
  const jsonbody = await request.json();

  // Creating a new document using the GroomingModel
  try {
    const newProduct = await GroomingModel.create({
      ...jsonbody,
      user: userId,
    });

    // Update the user to include the associated product
    const user = await UserModel.findById(userId);
    if (user) {
      user.products.push(newProduct._id);
      await user.save();
    }

    return new Response(JSON.stringify(jsonbody), { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Error creating product" }), {
      status: 500,
    });
  }
}
//GET
// export async function GET() {
//   //add pagination to Get() function with axios

//   // const postPerPage = 5;
//   // const totalPosts = await GroomingModel.countDocuments();
//   // const totalPages = Math.ceil(totalPosts / postPerPage);
//   // const posts = await GroomingModel.find()
//   //   // .sort({ createdAt: -1 })
//   //   .skip((page - 1) * postPerPage)
//   //   .limit(postPerPage);
//   // // console.log("posts:", posts);
//   // // console.log("totalPages:", totalPages);
//   // // console.log("totalPosts:", totalPosts);
//   // return Response.json(posts);

//   return Response.json(await GroomingModel.find());
// }
export async function GET(Request) {
  const url = new URL(Request.url);
  const page = url.searchParams.get("page");
  const perPage = url.searchParams.get("postPerPage");
  const query = url.searchParams.get("query");

  // console.log("Received parameters:", { page, perPage, query });

  if (!page) {
    // console.log("No page number found. Returning all posts");
    return Response.json(await GroomingModel.find());
  }

  const postPerPage = perPage ? parseInt(perPage, 10) : 5; // Use perPage from URL, or default to 5 if not provided
  let findQuery = {}; // The query object to filter based on the search parameter

  if (query) {
    // Escape special characters in the query
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    findQuery = {
      $or: [
        { productName: { $regex: new RegExp(escapedQuery, "i") } },
        { description: { $regex: new RegExp(escapedQuery, "i") } },

        // Add more fields to search if needed
      ],
    };
  }
  const totalPosts = await GroomingModel.countDocuments(findQuery);

  const totalPages = Math.ceil(totalPosts / postPerPage);
  const posts = await GroomingModel.find(findQuery)
    .skip((page - 1) * postPerPage)
    .limit(postPerPage);

  // console.log("Returning paginated posts");
  return Response.json({ posts, totalPages, totalPosts });
}

//PUT
// export async function PUT(request) {
//   const jsonBody = await request.json();
//   const { _id, productName, description, price, images } = jsonBody;

//   try {
//     // Find the product by its _id and update its fields
//     const updatedProduct = await GroomingModel.findOneAndUpdate(
//       { _id },
//       { productName, description, price, images },
//       { new: true } // Return the updated document
//     );

//     if (!updatedProduct) {
//       return Response.status(404).json({ error: "Product not found" });
//     }

//     return Response.json(updatedProduct);
//   } catch (error) {
//     console.error("Error updating product:", error);
//     return Response.status(500).json({ error: "Error updating product" });
//   }
// }
// This code updates a product in the database. It takes as input the JSON body of the request and returns the updated product.

export async function PUT(request) {
  const jsonBody = await request.json();

  try {
    // Find the product by its _id and update its fields
    const updatedProduct = await GroomingModel.findOneAndUpdate(
      { _id: jsonBody._id },
      { ...jsonBody },
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return Response.status(404).json({ error: "Product not found" });
    }

    return Response.json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return Response.status(500).json({ error: "Error updating product" });
  }
}
//DELETE
export async function DELETE(request) {
  const jsonBody = await request.json();
  const { _id } = jsonBody;

  try {
    // Find the product by its _id and delete it
    const deletedProduct = await GroomingModel.findOneAndDelete({ _id });

    if (!deletedProduct) {
      return Response.status(404).json({ error: "Product not found" });
    }

    return Response.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    return Response.status(500).json({ error: "Error deleting product" });
  }
}
