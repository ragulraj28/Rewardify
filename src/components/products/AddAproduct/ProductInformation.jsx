import React from "react";
import "./ProductInformation.css";
import ProductDetailsHeading from "./ProductDetailsHeading";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductInformationForm from "./ProductInformationForm";

const ProductInformation = () => {
  return (
    <div className="product-information">
      <ProductDetailsHeading>Product Information </ProductDetailsHeading>
      <ProductInformationForm />
    </div>
  );
};

export default ProductInformation;
