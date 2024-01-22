import { Schema, models, model } from "mongoose";

const groomingCatNailSchema = new Schema({
  nailTrimming: [String],
  nailCapsApplication: [String],
  nailPolishing: [String],
});

export const GroomingCatNailModel =
  models?.GroomingCatNailModel ||
  model("GroomingCatNailModel", groomingCatNailSchema);
