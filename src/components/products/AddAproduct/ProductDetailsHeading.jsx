import React from "react";
import "./ProductDetailsHeading.css";

const ProductDetailsHeading = ({ children }) => {
  return (
    <div className="product-details-heading">
      <h2>{children}</h2>
    </div>
  );
};

export default ProductDetailsHeading;
