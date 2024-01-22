import { Schema, models, model } from "mongoose";

const servicesFarmAnimalSchema = new Schema({
  feedingServices: [String],
  veterinaryCare: [String],
  breedingAssistance: [String],
  farmSitting: [String],
  shearingServices: [String],
  herdingServices: [String],
  // Add more specific farm animal services as needed
});

export const ServicesFarmAnimalModel =
  models?.ServicesFarmAnimalModel ||
  model("ServicesFarmAnimalModel", servicesFarmAnimalSchema);
