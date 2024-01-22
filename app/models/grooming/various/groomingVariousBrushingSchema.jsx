import { Schema, models, model } from "mongoose";

const groomingVariousBrushingSchema = new Schema({
  variousBrushingOption1: [String],
  variousBrushingOption2: [String],
  variousBrushingOption3: [String],
  // Add more options as needed
});

export const GroomingVariousBrushingModel =
  models?.GroomingVariousBrushingModel ||
  model("GroomingVariousBrushingModel", groomingVariousBrushingSchema);
