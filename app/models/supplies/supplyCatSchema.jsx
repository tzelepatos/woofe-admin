import { Schema, models, model } from "mongoose";
const supplyCatSchema = new Schema({
  litterBoxes: [String],
  catLitter: [String],
  scratchingPosts: [String],
  catFurniture: [String],
  catToys: [String],
  catFood: [String],
  treats: [String],
  foodBowls: [String],
  waterBowls: [String],
  groomingTools: [String],
  carriers: [String],
  collars: [String],
  leashes: [String],
  catBeds: [String],
  catClothes: [String],
  catHealthSupplies: [String],
  catTreatments: [String],
  catHygieneProducts: [String],
  catDentalCare: [String],
});

export const SupplyCatModel =
  models?.SupplyCatModel || model("SupplyCatModel", supplyCatSchema);
