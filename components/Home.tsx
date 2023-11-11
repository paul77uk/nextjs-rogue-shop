import React from "react";
import ProductItem from "./product/ProductItem";
import { IProduct } from "@/backend/models/product";

interface Props {
  data: {
    success: boolean;
    products: IProduct[];
  };
}

const Home = ({ data }: Props) => {
  const { products } = data;
  return (
    <div className="m-6 min-h-[calc(100vh-215px)] overflow-auto">
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
