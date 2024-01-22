import { Schema, models, model } from "mongoose";

const groomingVariousNailSchema = new Schema({
  variousNailOption1: [String],
  variousNailOption2: [String],
  variousNailOption3: [String],
  // Add more options as needed
});

export const GroomingVariousNailModel =
  models?.GroomingVariousNailModel ||
  model("GroomingVariousNailModel", groomingVariousNailSchema);
