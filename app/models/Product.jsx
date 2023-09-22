import { Schema, models, model } from "mongoose";

const groomingSchema = new Schema(
  {
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    newPrice: { type: Number },
    address: { type: String },
    zipCode: { type: Number },
    mapCordA: { type: Number }, // Latitude
    mapCordB: { type: Number }, // Longitude
    favourite: { type: Boolean },
    phoneNumber: { type: String },
    website: { type: String },
    openingHours: {
      type: Map,
      of: String,
    },
    services: [String],
    images: [String],
    info: { type: String },
    id: { type: String },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    comments: { type: String },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
//models CapitalLetters
export const GroomingModel =
  models?.GroomingModel || model("GroomingModel", groomingSchema);
