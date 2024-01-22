import { Schema, models, model } from "mongoose";
const supplyReptileSchema = new Schema({
  enclosures: [String],
  heating: [String],
  lighting: [String],
  substrates: [String],
  decorations: [String],
  hides: [String],
  feedingDishes: [String],
  waterBowls: [String],
  thermometers: [String],
  hygrometers: [String],
  thermostats: [String],
  supplements: [String],
  cleaningSupplies: [String],
  handlingTools: [String],
  healthSupplies: [String],
  cages: [String],
  feeders: [String],
  humidifiers: [String],
  incubators: [String],
  breedingSupplies: [String],
});

export const SupplyReptileModel =
  models?.SupplyReptileModel ||
  model("SupplyReptileModel", supplyReptileSchema);
