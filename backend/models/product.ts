import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
  createdAt: Date;
}

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  image: {
    type: String,
    required: [true, "Please enter product image"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  brand: {
    type: String,
    required: [true, "Please enter product brand"],
  },
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: ["Strongman", "Crossfit"],
      message: "Please select correct category for product",
    },
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0.0,
  },
  countInStock: {
    type: Number,
    required: [true, "Please enter product stock"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  numReviews: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Product || mongoose.model("Product", productSchema);