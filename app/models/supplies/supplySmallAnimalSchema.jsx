import { Schema, models, model } from "mongoose";

const supplySmallAnimalSchema = new Schema({
  feed: [String],
  bedding: [String],
  cages: [String],
  toys: [String],
  groomingTools: [String],
  healthSupplements: [String],
  treats: [String],
  veterinarySupplies: [String],
  // Add more specific small animal supplies as needed
});

export const SupplySmallAnimalModel =
  models?.SupplySmallAnimalModel ||
  model("SupplySmallAnimalModel", supplySmallAnimalSchema);
