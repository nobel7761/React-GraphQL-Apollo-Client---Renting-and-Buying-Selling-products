import React from "react";
import Product from "./Product";

const AllProductsDesign = () => {
  return (
    <div className="w-9/12 mx-auto">
      <h1 className="text-center font-extrabold text-4xl uppercase border-b-4 border-black my-4">
        All Products
      </h1>

      <Product />
    </div>
  );
};

export default AllProductsDesign;
