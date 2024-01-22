import { Schema, models, model } from "mongoose";

const servicesSmallAnimalSchema = new Schema({
  smallAnimalBoarding: [String],
  grooming: [String],
  veterinaryCare: [String],
  smallAnimalTraining: [String],
  feedingServices: [String],
  // Add more specific small animal services as needed
});

export const ServicesSmallAnimalModel =
  models?.ServicesSmallAnimalModel ||
  model("ServicesSmallAnimalModel", servicesSmallAnimalSchema);
