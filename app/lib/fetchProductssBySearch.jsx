import { GroomingModel } from "@/app/models/Product";

export const fetchProductssBySearch = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    const products = await GroomingModel.find({
      productName: { $regex: regex },
    });
    return products;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
