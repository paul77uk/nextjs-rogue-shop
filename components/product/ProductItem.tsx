import { IProduct } from "@/backend/models/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: IProduct;
}

const ProductItem = ({ product }: Props) => {
  return (
    <>
      <Link
        href={`/products/${product?._id}`}
        data-test="product-item"
        className="mb-10 text-xs sm:text-base"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="sm:w-72 lg:w-96"
        />
        <h1 className="mt-3 " data-test="product-name">
          {product.name}
        </h1>
        <p className="font-bold mt-1" data-test="product-price">
          £{product.price}
        </p>
      </Link>
    </>
  );
};

export default ProductItem;
