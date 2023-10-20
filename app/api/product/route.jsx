import mongoose from "mongoose";

import { GroomingModel } from "@/app/models/Product";

// Connect to the MongoDB database when the server starts
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
  // Extracting the body from the request
  const jsonbody = await request.json();

  // Creating a new document using the GroomingModel
  try {
    await GroomingModel.create({ ...jsonbody });
    return new Response(JSON.stringify(jsonbody), { status: 200 });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Error creating product" }), {
      status: 500,
    });
  }
}
//GET
//add pagination
export async function GET() {
  //add pagination to Get() function
  // const { page = 1, limit = 10 } = request.query;
  // const startIndex = (page - 1) * limit;
  // const endIndex = page * limit;
  // const results = {};
  // if (endIndex < (await GroomingModel.countDocuments().exec())) {
  //   results.next = {
  //     page: page + 1,
  //     limit: limit,
  //   };
  // }
  // if (startIndex > 0) {
  //   results.previous = {
  //     page: page - 1,
  //     limit: limit,
  //   };
  // }
  // try {
  //   results.results = await GroomingModel.find().limit(limit).skip(startIndex).exec();
  //   res.paginatedResults = results;
  //   next();
  // } catch (e) {
  //   res.status(500).json({ message: e.message });
  // }
  // return Response.json(await GroomingModel.find().skip(startIndex).limit(limit));

  return Response.json(await GroomingModel.find());
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
