import { Schema, models, model } from "mongoose";

const supplyHorseSchema = new Schema({
  feed: [String],
  groomingTools: [String],
  saddles: [String],
  ridingGear: [String],
  healthSupplements: [String],
  stableEquipment: [String],
  horseToys: [String],
  veterinarySupplies: [String],
  // Add more specific horse supplies as needed
});

export const SupplyHorseModel =
  models?.SupplyHorseModel || model("SupplyHorseModel", supplyHorseSchema);
