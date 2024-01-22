import { Schema, models, model } from "mongoose";
const supplyBirdSchema = new Schema({
  cages: [String],
  perches: [String],
  toys: [String],
  foodBowls: [String],
  waterBowls: [String],
  birdFood: [String],
  treats: [String],
  cuttlebones: [String],
  groomingTools: [String],
  nestBoxes: [String],
  birdCarriers: [String],
  heaters: [String],
  lighting: [String],
  cageAccessories: [String],
  cleaningSupplies: [String],
  healthSupplies: [String],
  trainingAids: [String],
  mirrors: [String],
  swings: [String],
});

export const SupplyBirdModel =
  models?.SupplyBirdModel || model("SupplyBirdModel", supplyBirdSchema);
