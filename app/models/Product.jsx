import { Schema, models, model } from "mongoose";

const groomingSchema = new Schema(
  {
    //main fields
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
    category: { type: String },
    newPrice: { type: String },
    services: [String],
    info: { type: String },
    images: [String],

    //address
    address: [String],
    city: { type: String },
    zipCode: { type: String },
    latitude: { type: String }, // Latitude
    longitude: { type: String }, // Longitude
    phoneNumber: [String],

    //contact
    email: [String],
    website: { type: String },

    //secondary fields
    openingClosingHours: [
      {
        day: { type: String, required: true }, // The day of the week (e.g., "Monday")
        openingTimeEarly: { type: String, required: true }, // Opening time pm
        closingTimeEarly: { type: String, required: true }, // Closing time pm
        openingTimeLate: { type: String, required: true }, // Opening time mm
        closingTimeLate: { type: String, required: true }, // Closing time mm
      },
    ],

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
