import React from "react";
import ProductDetailsHeading from "./ProductDetailsHeading";

import { useFormContext, useWatch } from "react-hook-form";

const deliveryType = [
  { id: "reading", label: "Instant delivery", value: "Instant delivery" },
  { id: "sports", label: "Schedule delivery", value: "Schedule delivery" },
  { id: "music", label: "Store Pickup", value: "Store Pickup" },
];

const DeliveryDetailsBox = () => {
  const { register } = useFormContext();
  return (
    <div className="delivery-details-box">
      <ProductDetailsHeading>Delivery Details</ProductDetailsHeading>
      <div className="delivery-type-box">
        <h3 className="delivery-type-heading">Delivery Type</h3>
        <p className="deliverytype-subtext">(You can select multiple option)</p>
        <div className="delivery-type-inputs">
          {deliveryType.map((option) => (
            <div className="delivery-type-input" key={option.id}>
              <input
                type="checkbox"
                id={option.id} // Use unique id for label association
                value={option.value} // This value is added to the array when checked
                {...register("deliveryType", {
                  // Add validation rules here if needed
                  validate: (value) =>
                    (value && value.length > 0) ||
                    "Please select at least one interest", // Example: Require at least one selection
                })}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetailsBox;
