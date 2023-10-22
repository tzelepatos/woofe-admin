import { GroomingModel } from "@/app/models/Product";

export const getServerSideProps = async (context) => {
  const offset = Number(context.params?.page ?? 0) * 10; // Adjust the offset based on your pagination logic

  try {
    // Fetch data from MongoDB using Mongoose
    const products = await GroomingModel.find()
      .skip(offset) // Skip the appropriate number of documents based on pagination
      .limit(10); // Limit the number of documents to retrieve

    return {
      params: {
        products: JSON.parse(JSON.stringify(products)), // Ensure the data is serializable
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      params: {
        products: [], // Return an empty array or handle the error as needed
      },
    };
  }
};
