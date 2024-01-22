import { Schema, models, model } from "mongoose";

const groomingSchema = new Schema(
  {
    //main fields
    productName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String },
    newPrice: { type: String },

    services: {
      grooming: [String],
      services: [String],
      supplies: [String],
    },

    categories: {
      grooming: {
        dog: {
          haircut: [
            { type: Schema.Types.ObjectId, ref: "GroomingDogHaircutModel" },
          ],
          bath: [{ type: Schema.Types.ObjectId, ref: "GroomingDogBathModel" }],
          brushing: [
            { type: Schema.Types.ObjectId, ref: "GroomingDogBrushingModel" },
          ],
          nail: [{ type: Schema.Types.ObjectId, ref: "GroomingDogNailModel" }],
        },
        cat: {
          haircut: [
            { type: Schema.Types.ObjectId, ref: "GroomingCatHaircutModel" },
          ],
          bath: [{ type: Schema.Types.ObjectId, ref: "GroomingCatBathModel" }],
          brushing: [
            { type: Schema.Types.ObjectId, ref: "GroomingCatBrushingModel" },
          ],
          nail: [{ type: Schema.Types.ObjectId, ref: "GroomingCatNailModel" }],
        },
        various: {
          haircut: [
            { type: Schema.Types.ObjectId, ref: "GroomingVariousHaircutModel" },
          ],
          bath: [
            { type: Schema.Types.ObjectId, ref: "GroomingVariousBathModel" },
          ],
          brushing: [
            {
              type: Schema.Types.ObjectId,
              ref: "GroomingVariousBrushingModel",
            },
          ],
          nail: [
            { type: Schema.Types.ObjectId, ref: "GroomingVariousNailModel" },
          ],
        },
      },
      services: {
        dog: [{ type: Schema.Types.ObjectId, ref: "ServiceDogModel" }],
        cat: [{ type: Schema.Types.ObjectId, ref: "ServiceCatModel" }],
        fish: [{ type: Schema.Types.ObjectId, ref: "ServiceFishModel" }],
        bird: [{ type: Schema.Types.ObjectId, ref: "ServiceBirdModel" }],
        reptile: [{ type: Schema.Types.ObjectId, ref: "ServiceReptileModel" }],
        smallAnimal: [
          { type: Schema.Types.ObjectId, ref: "ServiceSmallAnimalModel" },
        ],
        exotic: [{ type: Schema.Types.ObjectId, ref: "ServiceExoticModel" }],
        horse: [{ type: Schema.Types.ObjectId, ref: "ServiceHorseModel" }],
        insect: [{ type: Schema.Types.ObjectId, ref: "ServiceInsectModel" }],
        farm: [{ type: Schema.Types.ObjectId, ref: "ServiceFarmAnimalModel" }],
      },
      supplies: {
        dog: [{ type: Schema.Types.ObjectId, ref: "SupplyDogModel" }],
        cat: [{ type: Schema.Types.ObjectId, ref: "SupplyCatModel" }],
        fish: [{ type: Schema.Types.ObjectId, ref: "SupplyFishModel" }],
        bird: [{ type: Schema.Types.ObjectId, ref: "SupplyBirdModel" }],
        reptile: [{ type: Schema.Types.ObjectId, ref: "SupplyReptileModel" }],
        smallAnimal: [
          { type: Schema.Types.ObjectId, ref: "SupplySmallAnimalModel" },
        ],
        exotic: [{ type: Schema.Types.ObjectId, ref: "SupplyExoticModel" }],
        horse: [{ type: Schema.Types.ObjectId, ref: "SupplyHorseModel" }],
        insect: [{ type: Schema.Types.ObjectId, ref: "SupplyInsectModel" }],
        farm: [{ type: Schema.Types.ObjectId, ref: "SupplyFarmAnimalModel" }],
      },
    },

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
