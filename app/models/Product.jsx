import { Schema, models, model } from "mongoose";

const groomingSchema = new Schema(
  {
    //main fields
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number },
    category: { type: String },
    newPrice: { type: Number },
    services: [String],
    info: { type: String },
    images: [String],

    //address
    address: [String],
    zipCode: { type: Number },
    mapCordA: { type: Number }, // Latitude
    mapCordB: { type: Number }, // Longitude
    phoneNumber: [String],

    //contact
    email: [String],
    website: { type: String },

    //secondary fields
    openingHours: {
      type: Map,
      of: String,
    },

    //rating
    favourite: { type: Boolean },
    comments: { type: String },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },

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
