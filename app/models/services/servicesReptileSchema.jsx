import { Schema, models, model } from "mongoose";
const servicesReptileSchema = new Schema({
  reptileBoarding: [String],
  reptileGrooming: [String],
  reptileHealthCheckup: [String],
  reptileTraining: [String],
  reptileSitting: [String],
  reptileAdoption: [String],
  reptileTaxi: [String],
  reptileFoodDelivery: [String],
});

export const ServicesReptileModel =
  models?.ServicesReptileModel ||
  model("ServicesReptileModel", servicesReptileSchema);
