import { IProduct } from "@/backend/models/product";
import Image from "next/image";
import React from "react";

interface Props {
  data: {
    product: IProduct;
  };
}

const ProductDetails = ({ data }: Props) => {
  const { product } = data;
  return (
    <>
      <Image
        src={product.detailImage}
        alt={product.name}
        width={1284}
        height={722}
        className="w-full"
      />
      <div className="m-5 lg:hidden">
        {/* CART DETAILS */}
        <div className="">
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-sm" data-test="detail-product-name">
              {product.name}
            </h5>
            <div className="flex items-center gap-4">
              <h5 className="font-bold">£{product.price}</h5>
              <div className="flex items-center gap-2">
                <button className="btn btn-outline border border-neutral-400 w-12 h-12 text-center rounded-none hover:bg-white hover:text-black text-4xl pb-1 hidden sm:block">
                  -
                </button>
                <input className="border border-neutral-400 w-14 h-12 text-center " />
                <button className="btn btn-outline border border-neutral-400 w-12 h-12 rounded-none hover:bg-white hover:text-black text-3xl pb-1 hidden sm:block">
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="btn bg-red-600 text-white normal-case font-normal rounded-none w-full hover:bg-red-500">
            Add to Cart
          </button>
        </div>

        {/* DESCRIPTION */}
        <div className="">
          <div className="my-5 border-t lg:border-none">
            <h5 className="font-bold my-3">Description</h5>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>
        </div>
      </div>

      {/* LARGE SCREEN DISPLAY */}
      <div className="m-10 hidden lg:flex gap-5">
        {/* DESCRIPTION */}
        <div className="w-3/5">
          <div className="mb-5 border-t lg:border-none">
            <h5 className="font-bold my-3">Description</h5>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>
        </div>

        {/* CART DETAILS */}
        <div className="w-2/5">
          <div className="flex justify-between items-center mb-5">
            <h5 className="text-sm" data-test="detail-product-name">
              {product.name}
            </h5>
            <div className="flex items-center gap-4">
              <h5 className="font-bold">£{product.price}</h5>
              <div className="flex items-center gap-2">
                <button className="btn btn-outline border border-neutral-400 w-12 h-12 text-center rounded-none hover:bg-white hover:text-black text-4xl pb-1 hidden sm:block">
                  -
                </button>
                <input className="border border-neutral-400 w-14 h-12 text-center " />
                <button className="btn btn-outline border border-neutral-400 w-12 h-12 rounded-none hover:bg-white hover:text-black text-3xl pb-1 hidden sm:block">
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="btn bg-red-600 text-white normal-case font-normal rounded-none w-full hover:bg-red-500">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
