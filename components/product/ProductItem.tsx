import { IProduct } from "@/backend/models/product";
import Image from "next/image";
import React from "react";

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  return (
    <>
      <div data-test="product-item">
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="md:w-72 lg:w-96"
        />
        <h1 className="mt-3 text-sm" data-test="product-name">{product.name}</h1>
        <p className="font-bold text-sm mt-1" data-test="product-price">£{product.price}</p>
      </div>
    </>
  );
};

export default ProductItem;
