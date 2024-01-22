import { Schema, models, model } from "mongoose";
const servicesCatSchema = new Schema({
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
  catBoarding: [String],
  catHealthCheckup: [String],
  catToysRental: [String],
});

export const ServicesCatModel =
  models?.ServicesCatModel || model("ServicesCatModel", servicesCatSchema);
