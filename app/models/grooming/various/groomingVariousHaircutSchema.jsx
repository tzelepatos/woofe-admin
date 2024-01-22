import { Schema, models, model } from "mongoose";

const groomingVariousHaircutSchema = new Schema({
  variousHaircutOption1: [String],
  variousHaircutOption2: [String],
  variousHaircutOption3: [String],
  // Add more options as needed
});

export const GroomingVariousHaircutModel =
  models?.GroomingVariousHaircutModel ||
  model("GroomingVariousHaircutModel", groomingVariousHaircutSchema);
