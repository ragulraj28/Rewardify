import React from "react";
import DeliveryDetailsBox from "./DeliveryDetailsBox";
import "./DeliveryDetailsProductImage.css";
import ProductImagebox from "./ProductImagebox";
const DeliveryDetailsProductImage = () => {
  return (
    <div className="delivery-details-product-image-container">
      <DeliveryDetailsBox />
      <ProductImagebox />
    </div>
  );
};

export default DeliveryDetailsProductImage;
