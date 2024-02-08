"use server";
import { cache } from "react";
import { CategoriesModel } from "@/app/models/categoriesSchema";
import { GroomingModel } from "@/app/models/Product";

export async function getSchemaFields() {
  try {
    const schemaFields = await CategoriesModel.schema.obj;

    return JSON.parse(JSON.stringify(schemaFields));
  } catch (error) {
    console.log(error);
  }
}
export async function removeArrayData(obj) {
  let newObj = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = [];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      newObj[key] = removeArrayData(obj[key]);
    }
  }
  return newObj;
}

export async function getSchemaFieldsNoArrayData() {
  try {
    const schemaObj = CategoriesModel.schema.obj;
    const noArrayDataSchema = removeArrayData(schemaObj);
    return noArrayDataSchema;
  } catch (error) {
    console.log(error);
  }
}
// Helper function to remove null values
export async function removeNulls(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) continue;
    if (typeof obj[key] === "object") {
      newObj[key] = removeNulls(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

export const fetchGroomingModelById = cache(async (id) => {
  // await mongooseConnect();
  const groomingModel = await GroomingModel.findById(id).populate("categories");
  return {
    groomingModel: JSON.parse(JSON.stringify(groomingModel)),
    id: id,
  };
});
