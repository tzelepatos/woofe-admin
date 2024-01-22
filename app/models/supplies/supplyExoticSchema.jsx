import { Schema, models, model } from "mongoose";
const supplyExoticSchema = new Schema({
  habitat: [String],
  food: [String],
  treats: [String],
  toys: [String],
  healthSupplements: [String],
  grooming: [String],
  enclosures: [String],
  heating: [String],
  lighting: [String],
  decorations: [String],
  specialtyItems: [String],
});

export const SupplyExoticModel =
  models?.SupplyExoticModel || model("SupplyExoticModel", supplyExoticSchema);
