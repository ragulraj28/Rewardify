import React from "react";
import ProductDetailsHeading from "./ProductDetailsHeading";
import ProductDetailsForm from "./ProductDetailsForm";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <ProductDetailsHeading>Product Details </ProductDetailsHeading>
      <ProductDetailsForm />
    </div>
  );
};

export default ProductDetails;
