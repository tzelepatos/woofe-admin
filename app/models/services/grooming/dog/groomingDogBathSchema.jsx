import { Schema, models, model } from "mongoose";

const groomingDogBathSchema = new Schema({
  basicBath: [String],
  medicatedBath: [String],
  fleaAndTickBath: [String],
  deodorizingBath: [String],
  oatmealBath: [String],
  puppyBath: [String],
  DryBath: [String],
  DeSheddingBath: [String],
  EarCleaning: [String],
  TeethBrushing: [String],
  AnalGlandExpression: [String],
  SelfServiceDogWash: [String],
});

export const GroomingDogBathModel =
  models?.GroomingDogBathModel ||
  model("GroomingDogBathModel", groomingDogBathSchema);
