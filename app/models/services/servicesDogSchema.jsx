import { Schema, models, model } from "mongoose";
const servicesDogSchema = new Schema({
  petSitting: [String],
  petWalking: [String],
  petTraining: [String],
  petAdoption: [String],
  vets: [String],
  petTaxi: [String],
  petAccommodation: [String],
  petFuneralServices: [String],
  petInsurance: [String],
  petPhotography: [String],
  petFoodDelivery: [String],
});

export const ServicesDogModel =
  models?.ServicesDogModel || model("ServicesDogModel", servicesDogSchema);
