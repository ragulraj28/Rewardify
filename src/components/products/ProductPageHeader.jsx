import React from "react";
import ProductPageHeading from "./ProductPageHeading";
import AddAProductBtn from "./AddAProductBtn";
import ProductPageSearchbar from "./ProductPageSearchbar";
import ProductPageHeaderLeft from "./ProductPageHeaderLeft";
const ProductPageHeader = ({ children }) => {
  return <div className="Product-page-header">{children}</div>;
};

export default ProductPageHeader;
