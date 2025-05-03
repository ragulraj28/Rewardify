import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useSelector } from "react-redux";

const ProductInformationForm = () => {
  const { register, control, setValue, watch, formState } = useFormContext();
  const { errors } = formState;
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const productInformation = selectedProduct?.productInformation;

  const productDescription = watch("productDescription");
  const productOrigin = watch("countryOfOrigin");
  const productmanufacturer = watch("productManufacturerName");

  // Set initial value for product description when selectedProduct changes
  useEffect(() => {
    if (productInformation?.description) {
      setValue("productDescription", productInformation?.description);
    }
    if (productInformation?.countryOfOrgin) {
      setValue("countryOfOrigin", productInformation?.countryOfOrgin);
    }
    if (productInformation?.manufacturerName) {
      setValue("productManufacturerName", productInformation?.manufacturerName);
    }
  }, [
    selectedProduct,
    productDescription,
    productOrigin,
    productmanufacturer,
    setValue,
  ]);
  return (
    <div className="product-details-form">
      <div className="product-details-form-row one">
        <div className="product-information-description col">
          <textarea
            {...register("productDescription")}
            control={control}
            value={productInformation ? productInformation?.description : ""}
            onChange={(e) => setValue("productDescription", e.targetValue)}
            readOnly
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
            {...register("countryOfOrigin")}
            value={productInformation?.countryOfOrgin}
            onChange={(e) => setValue("countryOfOrigin", e.targetValue)}
            readOnly
            className="product-details-product-mrp "
            placeholder="Country of Origin"
          />
        </div>
        <div className="product-details-form-col ">
          <input
            type="text"
            {...register("productManufacturerName")}
            value={productInformation?.manufacturerName}
            onChange={(e) => setValue("productManufacturerName", e.targetValue)}
            readOnly
            className="product-details-product-mrp "
            placeholder="Manufacturer name"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInformationForm;
