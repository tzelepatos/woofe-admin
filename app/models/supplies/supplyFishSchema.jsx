import { Schema, models, model } from "mongoose";
const supplyFishSchema = new Schema({
  food: [String],
  aquariums: [String],
  decorations: [String],
  filters: [String],
  heaters: [String],
  waterConditioners: [String],
  airPumps: [String],
  fishMedication: [String],
  fishFood: [String],
  fishTanks: [String],
  fishToys: [String],
  gravel: [String],
  lighting: [String],
  pumps: [String],
  testingKits: [String],
  fishNets: [String],
  fishBowls: [String],
  fishAccessories: [String],
});

export const SupplyFishModel =
  models?.SupplyFishModel || model("SupplyFishModel", supplyFishSchema);
