import React, { Children } from "react";

import ProductPageHeader from "./ProductPageHeader";
import ProductPageHeaderLeft from "./ProductPageHeaderLeft";
import ProductPageHeading from "./ProductPageHeading";
import ProductPageSearchbar from "./ProductPageSearchbar";
import NoProductAdded from "./NoProductAdded";

const ProductPageTemplate = ({ children }) => {
  return <div className="product-page-template">{children}</div>;
};

export default ProductPageTemplate;
