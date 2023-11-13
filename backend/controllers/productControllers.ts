import { NextRequest, NextResponse } from "next/server";
import Product from "../models/product";

export const allProducts = async (req: NextRequest) => {
  const products = await Product.find();

  return NextResponse.json({
    success: true,
    products,
  });
};

export const getProductDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const product = await Product.findById(params.id);

  if (!product) {
    return NextResponse.json(
      {
        message: "Product not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    product,
  });
};
