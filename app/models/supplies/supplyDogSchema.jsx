import { Schema, models, model } from "mongoose";
const supplyDogSchema = new Schema({
  food: [String],
  treats: [String],
  toys: [String],
  beds: [String],
  bowls: [String],
  grooming: [String],
  health: [String],
  collars: [String],
  leashes: [String],
  crates: [String],
  trainingAids: [String],
  travel: [String],
  clothing: [String],
  dentalCare: [String],
  feedingAccessories: [String],
  carriers: [String],
  outdoorGear: [String],
  hygieneProducts: [String],
});

export const SupplyDogModel =
  models?.SupplyDogModel || model("SupplyDogModel", supplyDogSchema);
