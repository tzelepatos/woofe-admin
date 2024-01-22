import { Schema, models, model } from "mongoose";

const groomingCatBathSchema = new Schema({
  basicBath: [String],
  dryShampoo: [String],
  waterlessBath: [String],
  medicatedBath: [String],
  fleaAndTickBath: [String],
  calmingBath: [String],
  basicBath: [String],
  medicatedBath: [String],
  fleaAndTickBath: [String],
  deodorizingBath: [String],
  oatmealBath: [String],
  DryBath: [String],
  DeSheddingBath: [String],
  EarCleaning: [String],
  TeethBrushing: [String],
  AnalGlandExpression: [String],
  SelfServiceDogWash: [String],
});

export const GroomingCatBathModel =
  models?.GroomingCatBathModel ||
  model("GroomingCatBathModel", groomingCatBathSchema);
