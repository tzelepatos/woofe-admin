import { Schema, models, model } from "mongoose";

const servicesInsectSchema = new Schema({
  educationalPrograms: [String],
  habitatSetupAssistance: [String],
  healthConsultation: [String],
  handlingClasses: [String],
  breedingAssistance: [String],
  // Add more specific insect services as needed
});

export const ServicesInsectModel =
  models?.ServicesInsectModel ||
  model("ServicesInsectModel", servicesInsectSchema);
