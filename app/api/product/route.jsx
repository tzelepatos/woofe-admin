import mongoose from "mongoose";
import { getServerSession } from "next-auth/next";
import { GroomingModel } from "@/app/models/Product";
import { UserModel } from "@/app/models/User";
import { CategoriesModel } from "@/app/models/categoriesSchema";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { ReviewModel } from "@/app/models/Review";

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
  // console.log("jsonbody after submit", jsonbody);
  const { categories, ...productData } = jsonbody;

  // console.log("productData  after submit", productData);
  // console.log("services after submit", categories);

  // Fetch the CategoriesModel instance by its ID
  let category;
  if (categories) {
    console.log("Category does not exist. Creating a new one");
    // If the CategoriesModel does not exist, create a new one
    category = new CategoriesModel(categories);
    try {
      console.log("try to save category:", category);
      await category.save();
      console.log("category:", category);
    } catch (error) {
      console.error("Error saving category:", error);
      return new Response(JSON.stringify({ error: "Error saving category" }), {
        status: 500,
      });
    }
  }

  // Creating a new GroomingModel document
  try {
    // console.log("productData", productData);
    const newProduct = await GroomingModel.create({
      ...productData,
      user: userId,
      categories: category._id, // Pass the category ID
    });
    console.log("newProduct from POST :", newProduct);

    // Update the user to include the associated product
    const user = await UserModel.findById(userId);
    if (!user) {
      console.error("User not found:", userId);
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    user.products.push(newProduct._id);
    await user.save();

    return new Response(
      JSON.stringify({ ...productData, _id: newProduct._id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Error creating product" }), {
      status: 500,
    });
  }
}
//POST
// export async function POST(request) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     return new Response(JSON.stringify({ error: "Unauthorized" }), {
//       status: 401,
//     });
//   }
//   const userId = session.user.id;
//   // Extracting the body from the request
//   const jsonbody = await request.json();

//   // Creating a new document using the GroomingModel
//   try {
//     console.log("jsonbody", jsonbody);
//     const newProduct = await GroomingModel.create({
//       ...jsonbody,
//       user: userId,
//     });
//     console.log("newProduct:", newProduct);

//     // Update the user to include the associated product
//     const user = await UserModel.findById(userId);
//     if (user) {
//       user.products.push(newProduct._id);
//       await user.save();
//     }

//     return new Response(JSON.stringify(jsonbody), { status: 200 });
//   } catch (error) {
//     console.error("Error creating product:", error);
//     return new Response(JSON.stringify({ error: "Error creating product" }), {
//       status: 500,
//     });
//   }
// }
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

//   try {
//     // Find the product by its _id and update its fields
//     const updatedProduct = await GroomingModel.findOneAndUpdate(
//       { _id: jsonBody._id },
//       { ...jsonBody },
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
// PUT

export async function PUT(request) {
  const jsonBody = await request.json();
  console.log("jsonBody PUT:", jsonBody);
  // const { categories, categoriesID, ...productData } = jsonBody;
  // console.log("categories PUT:", categories);
  // console.log("productData PUT :", productData);
  // console.log("categoriesID", categoriesID);

  const { categories, categoriesID, images, ...productData } = jsonBody;
  // console.log("images PUT UPDATE:", images);

  let category;
  if (categories) {
    category = await CategoriesModel.findOneAndUpdate(
      { _id: categoriesID }, // find a document with this _id
      { ...categories }, // replace the found document with this object
      { new: true } // return the updated document
    );

    if (!category) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        status: 404,
      });
    }
  }

  try {
    // Find the product by its _id and update its fields
    const updatedProduct = await GroomingModel.findOneAndUpdate(
      { _id: productData._id },
      { ...productData, images: images.newImageLinks || images },
      { new: true } // Return the updated document
    );
    console.log("updatedProduct PUT:", updatedProduct);

    if (!updatedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }
    // console.log("updatedProduct PUT:", updatedProduct);
    return new Response(JSON.stringify(updatedProduct), { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(
      JSON.stringify(
        { error: "Error updating product" },
        {
          status: 500,
        }
      )
    );
  }
}
// DELETE
export async function DELETE(request) {
  const jsonBody = await request.json();
  const { _id } = jsonBody;

  try {
    // Find the product by its _id
    const product = await GroomingModel.findOne({ _id });

    if (!product) {
      return Response.status(404).json({ error: "Product not found" });
    }

    // Delete the associated ReviewModel
    if (product.reviews) {
      await ReviewModel.findByIdAndDelete(product.reviews);
      console.log("Associated reviews successfully deleted");
    }

    // Delete the associated category
    if (product.categories) {
      await CategoriesModel.findByIdAndDelete(product.categories);
      console.log("Associated categories successfully deleted");
    }

    // Delete the product
    const deletedProduct = await GroomingModel.findOneAndDelete({ _id });

    return Response.json(deletedProduct);
  } catch (error) {
    console.error("Error deleting product:", error);
    return Response.status(500).json({ error: "Error deleting product" });
  }
}
