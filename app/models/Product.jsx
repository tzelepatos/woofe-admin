import { Schema, models, model } from "mongoose";

const groomingSchema = new Schema(
  {
    //main fields
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
    newPrice: { type: String },

    // services: {
    //   grooming: [String],
    //   services: [String],
    //   supplies: [String],
    // },

    categories: { type: Schema.Types.ObjectId, ref: "CategoriesModel" },
    // categories: {
    //   type: Schema.Types.Mixed,
    //   ref: "CategoriesModel",
    // },

    info: { type: String },
    images: [String],

    //address
    address: { type: String },
    city: { type: String },
    zipCode: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    phoneNumber: { type: String }, //new
    mobileNumber: { type: String }, //new

    //contact
    email: { type: String }, //new
    email2: { type: String }, //new
    website: { type: String },

    //secondary fields
    openingClosingHours: [
      {
        day: { type: String }, // The day of the week (e.g., "Monday")
        openingTimeEarly: { type: String }, // Opening time pm
        closingTimeEarly: { type: String }, // Closing time pm
        openingTimeLate: { type: String }, // Opening time mm
        closingTimeLate: { type: String }, // Closing time mm
        openOrClosed: { type: Boolean }, // Open or Closed
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
    // Reference to UserModel
    user: { type: Schema.Types.ObjectId, ref: "UserModel", required: true },

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
