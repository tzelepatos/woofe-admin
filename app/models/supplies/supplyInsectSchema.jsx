import { Schema, models, model } from "mongoose";

const supplyInsectSchema = new Schema({
  habitatSetup: [String],
  food: [String],
  breedingSupplies: [String],
  educationalMaterials: [String],
  handlingTools: [String],
  healthSupplements: [String],
  specialtyItems: [String],
  // Add more specific insect supplies as needed
});

export const SupplyInsectModel =
  models?.SupplyInsectModel || model("SupplyInsectModel", supplyInsectSchema);
