import { Schema, models, model } from "mongoose";

const servicesHorseSchema = new Schema({
  horseBoarding: [String],
  horseTraining: [String],
  grooming: [String],
  veterinaryServices: [String],
  ridingLessons: [String],
  transportation: [String],
  equineMassage: [String],
  // Add more specific horse services as needed
});

export const ServicesHorseModel =
  models?.ServicesHorseModel ||
  model("ServicesHorseModel", servicesHorseSchema);
