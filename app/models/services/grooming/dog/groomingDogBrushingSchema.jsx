import { Schema, models, model } from "mongoose";

const groomingDogBrushingSchema = new Schema({
  regularBrushing: [String],
  deMatting: [String],
  undercoatRemoval: [String],
  sheddingControl: [String],
  Stripping: [String],
  DeShedding: [String],
});

export const GroomingDogBrushingModel =
  models?.GroomingDogBrushingModel ||
  model("GroomingDogBrushingModel", groomingDogBrushingSchema);
