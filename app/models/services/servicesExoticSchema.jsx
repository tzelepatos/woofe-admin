import { Schema, models, model } from "mongoose";
const servicesExoticSchema = new Schema({
  exoticBoarding: [String],
  exoticGrooming: [String],
  exoticHealthCheckup: [String],
  exoticTraining: [String],
  exoticSitting: [String],
  exoticAdoption: [String],
  exoticTaxi: [String],
  exoticFoodDelivery: [String],
});

export const ServicesExoticModel =
  models?.ServicesExoticModel ||
  model("ServicesExoticModel", servicesExoticSchema);
