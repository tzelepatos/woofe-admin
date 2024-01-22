import { Schema, models, model } from "mongoose";
const servicesBirdSchema = new Schema({
  birdBoarding: [String],
  birdGrooming: [String],
  birdTraining: [String],
  birdPhotography: [String],
  birdHealthCheckup: [String],
  birdSitting: [String],
  birdAdoption: [String],
  birdTaxi: [String],
  birdFoodDelivery: [String],
});

export const ServicesBirdModel =
  models?.ServicesBirdModel || model("ServicesBirdModel", servicesBirdSchema);
