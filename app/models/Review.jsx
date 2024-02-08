import { Schema, models, model } from "mongoose";

const reviewSchema = new Schema(
  {
    client: {
      type: Schema.Types.ObjectId,
      ref: "ClientModel",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "GroomingModel",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      min: 1,
      max: 4,
    },
    services: {
      type: Number,
      min: 1,
      max: 4,
    },
    customerService: {
      type: Number,
      min: 1,
      max: 4,
    },
    quality: {
      type: Number,
      min: 1,
      max: 4,
    },
  },
  { timestamps: true }
);

export const ReviewModel =
  models?.ReviewModel || model("ReviewModel", reviewSchema);
