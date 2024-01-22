import { Schema, models, model } from "mongoose";

const supplyFarmAnimalSchema = new Schema({
  feed: [String],
  bedding: [String],
  healthSupplements: [String],
  groomingTools: [String],
  farmFencing: [String],
  milkingEquipment: [String],
  poultrySupplies: [String],
  veterinarySupplies: [String],
  // Add more specific farm animal supplies as needed
});

export const SupplyFarmAnimalModel =
  models?.SupplyFarmAnimalModel ||
  model("SupplyFarmAnimalModel", supplyFarmAnimalSchema);
