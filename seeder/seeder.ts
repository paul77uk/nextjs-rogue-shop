import Product from "../backend/models/product";
import mongoose from "mongoose";
import { products } from "./data";

const seedProducts = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/rogue-shop");

    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All Products are added.");

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit();
  }
};

seedProducts();