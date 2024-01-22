import { Schema, models, model } from "mongoose";

const groomingVariousBathSchema = new Schema({
  variousBathOption1: [String],
  variousBathOption2: [String],
  variousBathOption3: [String],
  // Add more options as needed
});

export const GroomingVariousBathModel =
  models?.GroomingVariousBathModel ||
  model("GroomingVariousBathModel", groomingVariousBathSchema);
