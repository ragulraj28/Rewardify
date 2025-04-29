import React, { useEffect } from "react";
import "./ProductImagebox.css";
import ProductDetailsHeading from "./ProductDetailsHeading";
import noproductImage from "../../../assets/images/products/default-product.png";
import { useFormContext } from "react-hook-form";
import { useSelector } from "react-redux";

const ProductImagebox = () => {
  const { register, setValue, watch, formState } = useFormContext();
  const { errors } = formState;
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const productimagev = watch("productImage");

  // Set initial value for product description when selectedProduct changes
  useEffect(() => {
    if (selectedProduct?.images[0]) {
      setValue("productImage", selectedProduct?.images[0]);
    }
  }, [selectedProduct, productimagev, setValue]);
  return (
    <div className="product-image-box">
      <ProductDetailsHeading>Product Image</ProductDetailsHeading>
      <p className="product-image-subtext">
        Product images will be fetched from the Rewardify server
      </p>
      <div className="product-image-container">
        <input
          {...register("productImage")}
          id="productImage"
          defaultValue={selectedProduct?.images[0]}
          onChange={(e) => setValue("productImage", e.targetValue)}
          hidden
        />
        <img
          src={!selectedProduct ? noproductImage : selectedProduct?.images[0]}
        />
      </div>
    </div>
  );
};

export default ProductImagebox;
