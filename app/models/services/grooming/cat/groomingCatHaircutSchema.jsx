import { Schema, models, model } from "mongoose";

const groomingCatHaircutSchema = new Schema({
  lionCut: [String],
  teddyBearCut: [String],
  bobcatCut: [String],
  roundFaceCut: [String],
  leopardCut: [String],
  shavedCut: [String],
  FullHaircut: [String],
  ScissorCut: [String],
  HairClipping: [String],
  Dematting: [String],
  DeShedding: [String],
  HairColoring: [String],
  Tattoo: [String],
});

export const GroomingCatHaircutModel =
  models?.GroomingCatHaircutModel ||
  model("GroomingCatHaircutModel", groomingCatHaircutSchema);
