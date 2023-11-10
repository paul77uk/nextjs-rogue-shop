import { NextRequest, NextResponse } from "next/server";
import Product from "../models/product";

export const allProducts = async (req: NextRequest) => {
 
  const products = await Product.find()

  return NextResponse.json({
    success: true,
    products
  })
}