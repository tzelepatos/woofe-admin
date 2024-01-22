import { Schema, models, model } from "mongoose";
const servicesFishSchema = new Schema({
  aquariumSetup: [String],
  fishHealthConsultation: [String],
  waterQualityTesting: [String],
  fishTraining: [String],
  fishSitting: [String],
  fishAdoption: [String],
  fishTankCleaning: [String],
  fishFoodDelivery: [String],
});

export const ServicesFishModel =
  models?.ServicesFishModel || model("ServicesFishModel", servicesFishSchema);
