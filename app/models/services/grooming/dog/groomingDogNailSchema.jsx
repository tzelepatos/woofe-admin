import { Schema, models, model } from "mongoose";

const groomingDogNailSchema = new Schema({
  nailTrimming: [String],
  nailGrinding: [String],
  nailPolishing: [String],
  NailClipping: [String],
  NailPainting: [String],
});

export const GroomingDogNailModel =
  models?.GroomingDogNailModel ||
  model("GroomingDogNailModel", groomingDogNailSchema);
