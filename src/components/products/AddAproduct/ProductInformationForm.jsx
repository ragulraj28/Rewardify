import React from "react";
import "./ProductInformationForm.css";

const ProductInformationForm = () => {
  return (
    <div className="product-details-form">
      <div className="product-details-form-row one">
        <div className="product-information-description col">
          <textarea
            name="product-information-description"
            id=""
            rows={4}
            placeholder="Description of the Product"
          ></textarea>
        </div>
      </div>

      <div className="product-details-form-row four">
        <div className="product-details-form-col ">
          <input
            type="text"
            className="product-details-product-mrp "
            placeholder="Country of Origin"
          />
        </div>
        <div className="product-details-form-col ">
          <input
            type="text"
            className="product-details-product-mrp "
            placeholder="Manufacturer name"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInformationForm;
