import { Schema, models, model } from "mongoose";
const groomingDogHaircutSchema = new Schema({
  FullHaircut: [String],
  ScissorCut: [String],
  HairClipping: [String],
  Dematting: [String],
  DeShedding: [String],
  HairColoring: [String],
  Tattoo: [String],
});

export const GroomingDogHaircutModel =
  models?.GroomingDogHaircutModel ||
  model("GroomingDogHaircutModel", groomingDogHaircutSchema);
