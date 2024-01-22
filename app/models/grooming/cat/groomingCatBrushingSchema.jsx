import { Schema, models, model } from "mongoose";

const groomingCatBrushingSchema = new Schema({
  regularBrushing: [String],
  deMatting: [String],
  undercoatRemoval: [String],
  dentalBrushing: [String],
  sheddingControl: [String],
});

export const GroomingCatBrushingModel =
  models?.GroomingCatBrushingModel ||
  model("GroomingCatBrushingModel", groomingCatBrushingSchema);
