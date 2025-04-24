import React, { Children } from "react";

import ProductPageHeading from "./ProductPageHeading";
import AddAProductBtn from "./AddAProductBtn";
import "./ProductPageHeaderLeft.css";

const ProductPageHeaderLeft = ({ children }) => {
  return <div className="product-page-header-left">{children}</div>;
};

export default ProductPageHeaderLeft;
