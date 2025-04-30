import React from "react";
import "./ProductPageHeading.css";

const ProductPageHeading = ({ children }) => {
  return (
    <div className="product-page-heading">
      <h1>{children}</h1>
    </div>
  );
};

export default ProductPageHeading;
