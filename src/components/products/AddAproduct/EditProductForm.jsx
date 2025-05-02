import React from "react";
import ProductPageTemplate from "../ProductPageTemplate";
import ProductPageHeaderLeft from "../ProductPageHeaderLeft";
import ProductPageHeading from "../ProductPageHeading";
import ProductPageHeader from "../ProductPageHeader";
import ProductPageSearchbar from "../ProductPageSearchbar";
import ProductDetailsHeading from "./ProductDetailsHeading";
import { LeftIcon } from "../../../assets/icons/icon";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/button/Button";
import {
  updatePricing,
  selectProduct,
} from "../../../utils/slices/productSlice";

const discounttype = ["Special Discount", "10% Discount"];
// const unitOfMeasurement = [
//   "One Unit",
//   "One Pack",
//   "Gram",
//   "Kilogram",
//   "Millilitre",
//   "Litre",
// ];

const deliverytype = [
  { id: "reading", label: "Instant delivery", value: "Instant delivery" },
  { id: "sports", label: "Schedule delivery", value: "Schedule delivery" },
  { id: "music", label: "Store Pickup", value: "Store Pickup" },
];

const EditProductForm = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );
  const { register, control, formState, handleSubmit } = methods;
  const { errors } = formState;
  const {
    categoryName,
    productName,
    productMRP,
    discountType,
    discountValue,
    productPrice,
    unitOfMeasurement,
    productSize,
    abailableQuantity,
    productDescription,
    productManufacturerName,
    countryOfOrigin,
    productImage,
    deliveryType,
  } = selectedProduct;
  function onSubmit(data) {
    dispatch(updatePricing(data));
    dispatch(selectProduct(null));
    navigate("/products");
  }
  return !selectedProduct ? (
    "No Selected Product"
  ) : (
    <ProductPageTemplate>
      <ProductPageHeader>
        <ProductPageHeaderLeft>
          <p
            className="flex justify-start items-center gap-[5px] cursor-pointer"
            onClick={() => {
              navigate("/products");
              dispatch(selectProduct(null));
            }}
          >
            <LeftIcon />
            Back
          </p>
          <ProductPageHeading>Add a product</ProductPageHeading>
          {/* <AddAProductBtn />  */}
        </ProductPageHeaderLeft>
        <ProductPageSearchbar />
      </ProductPageHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="product-details">
          <ProductDetailsHeading>Product Details </ProductDetailsHeading>
          <div className="product-details-form">
            <div className="product-details-form-row one">
              <div className="product-details-form-col product-category relative  ">
                <input
                  type="text"
                  {...register("categoryName", {
                    required: {
                      value: true,
                      message: "product MRP is required",
                    },
                  })}
                  defaultValue={categoryName}
                  className="product-details-product-mrp bg-[#E0E0E0]"
                  placeholder="category Name"
                />
                {/* <select
                  {...register("categoryName")}
                  className="product-details-select text-tertiary bg-[#E0E0E0] select-none"
                  id="categoryName"
                  Value={categoryName}
                >
                  <option
                    defaultValue={categoryName}
                    className="placeholder text-[#E0E0E0]"
                    disabled
                    hidden
                  >
                    Select related Category
                  </option>
                </select> */}
                <div className="product-details-arrow-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                      fill="#BEBEBE"
                    />
                  </svg>
                </div>
              </div>
              <div className="product-details-form-col relative">
                <div class="product-details-search-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="#BEBEBE"
                      stroke-width="1.66678"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.0004 21.0004L16.6499 16.6499"
                      stroke="#BEBEBE"
                      stroke-width="1.66678"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="pl-[43px] bg-[#E0E0E0] rounded-[6px]">
                  <input
                    type="text"
                    {...register("productName", {
                      required: {
                        value: true,
                        message: "product MRP is required",
                      },
                    })}
                    value={productName}
                    className="product-details-product-mrp pl-[43px] bg-[#E0E0E0]"
                    placeholder="Select Product"
                  />
                </div>
                {/* <select
                  {...register("productName")}
                  className={`product-name-select pl-4 bg-[#E0E0E0]`}
                  value={productName}
                  id="productName"
                >
                  <option
                    defaultValue={productName}
                    className="placeholder text-[#E0E0E0]"
                    disabled
                    selected
                    hidden
                  >
                    Select Product
                  </option>
                </select> */}
              </div>
            </div>
            <div className="product-details-form-row two">
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("productMRP", {
                    required: {
                      value: true,
                      message: "product MRP is required",
                    },
                  })}
                  defaultValue={productMRP}
                  className="product-details-product-mrp "
                  placeholder="Product MRP"
                />
              </div>{" "}
              <div className="product-details-form-col relative">
                <div className="inner-section-two-col">
                  <div className="product-detials-two-col relative">
                    <select
                      {...register("discountType")}
                      defaultValue={discountType}
                      className="product-details-select "
                      id=""
                    >
                      <option
                        value=""
                        className="placeholder text-[#E0E0E0]"
                        disabled
                        selected
                        hidden
                      >
                        Discount type
                      </option>
                      {discounttype.map((discount, index) => (
                        <option key={index} value={discount}>
                          {discount}
                        </option>
                      ))}
                    </select>
                    <div className="product-details-arrow-container">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                          fill="#BEBEBE"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="product-detials-two-col">
                    <input
                      type="number"
                      {...register("discountValue")}
                      defaultValue={discountValue}
                      className="product-details-product-mrp "
                      placeholder="Discount Value"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details-form-row three">
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("productPrice", {
                    required: {
                      value: true,
                      message: "Product Price Required",
                    },
                  })}
                  defaultValue={productPrice}
                  className="product-details-product-mrp "
                  placeholder="Product Price"
                />
              </div>
              <div className="product-details-form-col product-category relative ">
                <select
                  {...register("unitOfMeasurement")}
                  className="product-details-select bg-[#E0E0E0]"
                  id=""
                >
                  <option
                    defaultValue={unitOfMeasurement}
                    className="placeholder text-[#E0E0E0]"
                    disabled
                    selected
                    hidden
                  >
                    UOM(unit of measurement)
                  </option>
                </select>
                <div className="product-details-arrow-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                      fill="#BEBEBE"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="product-details-form-row four">
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("productSize", {
                    required: {
                      value: "true",
                      message: "Product Size is Required",
                    },
                  })}
                  defaultValue={productSize}
                  disabled
                  className="product-details-product-mrp bg-[#E0E0E0]"
                  placeholder="Product Size(Enter the size of each Product)"
                />
              </div>
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("abailableQuantity", {
                    required: {
                      value: true,
                      message: "Available Quantity Required",
                    },
                  })}
                  defaultValue={abailableQuantity}
                  disabled
                  className="product-details-product-mrp bg-[#E0E0E0]"
                  placeholder="Available Quantity"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="product-information">
          <ProductDetailsHeading>Product Information </ProductDetailsHeading>
          <div className="product-details-form">
            <div className="product-details-form-row one">
              <div className="product-information-description col">
                <textarea
                  {...register("productDescription")}
                  defaultValue={productDescription}
                  disabled
                  id=""
                  rows={4}
                  className="bg-[#E0E0E0]"
                  placeholder="Description of the Product"
                ></textarea>
              </div>
            </div>

            <div className="product-details-form-row four">
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("countryOfOrigin")}
                  defaultValue={countryOfOrigin}
                  disabled
                  className="product-details-product-mrp bg-[#E0E0E0]"
                  placeholder="Country of Origin"
                />
              </div>
              <div className="product-details-form-col ">
                <input
                  type="text"
                  {...register("productManufacturerName")}
                  defaultValue={productManufacturerName}
                  disabled
                  className="product-details-product-mrp bg-[#E0E0E0]"
                  placeholder="Manufacturer name"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="delivery-details-product-image-container">
          <div className="delivery-details-box">
            <ProductDetailsHeading>Delivery Details</ProductDetailsHeading>
            <div className="delivery-type-box">
              <h3 className="delivery-type-heading">Delivery Type</h3>
              <p className="deliverytype-subtext">
                (You can select multiple option)
              </p>
              <div className="delivery-type-inputs">
                {deliveryType.map((option, index) => (
                  <div key={index} className="delivery-type-input">
                    {/* <Controller
                      {...register("deliveryType")}
                      control={control}
                      render={({ field }) => (
                        <input
                          type="checkbox"
                          {...register("deliveryType")}
                          id={option.id}
                          value={option.value}
                          defaultValue={deliveryType}
                          disabled
                          checked={field?.value?.includes(option?.value)}
                          onChange={(e) => {
                            const selectedValues = e.target.checked
                              ? [...field.value, option.value]
                              : field.value.filter(
                                  (val) => val !== option.value
                                );

                            field.onChange(selectedValues); // Update form state
                          }}
                        />
                      )}
                    /> */}
                    <input
                      type="checkbox"
                      {...register("deliveryType")}
                      checked
                      id={option}
                      // value={option}
                      defaultValue={option}
                      disabled
                    />
                    <label htmlFor={option}>{option}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="product-image-box">
            <ProductDetailsHeading>Product Image</ProductDetailsHeading>
            <p className="product-image-subtext">
              Product images will be fetched from the Rewardify server
            </p>
            <div className="product-image-container">
              <input
                {...register("productImage")}
                id="productImage"
                defaultValue={productImage}
                hidden
              />
              <img src={productImage} />
            </div>
          </div>
        </div>
        <div className="savebtn-container">
          <Button btnText={"Update Changes"} />
        </div>
      </form>
    </ProductPageTemplate>
  );
};

export default EditProductForm;
