import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormContext } from "react-hook-form";
import { selectProduct } from "../../../utils/slices/productSlice";
import { ChevronIcon, SeaarchIcon } from "../../../assets/icons/icon";

const discountType = ["Special Discount", "10% Discount"];
const unitOfMeasurement = [
  "One Unit",
  "One Pack",
  "Gram",
  "Kilogram",
  "Millilitre",
  "Litre",
];
const ProductDetailsForm = () => {
  const { register, setValue, watch, formState } = useFormContext();
  const { errors } = formState;
  const [selectedProduct, setSelectedProduct] = useState("");
  const { allProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState(allProducts);
  const dispatch = useDispatch();

  const categories = [
    ...new Set(products.map((data) => data?.productCategory?.name)),
  ];
  // const selectedCategory = useWatch({ control, name: "categoryName" });
  // console.log(selectedCategory);

  const categoryname = watch("categoryName");

  const produtsList = products
    .filter((product) => product.productCategory.name.includes(categoryname))
    .map((product) => product);

  // const productid = products.find((product) => product._id === selectedProduct);
  // console.log(productid);
  useEffect(() => {
    dispatch(
      selectProduct(
        products.find((product) => product.name === selectedProduct)
      )
    );
  }, [selectedProduct]);
  useEffect(() => {
    setValue("productName", "");
  }, [setValue, categoryname]);
  // console.log(productid);
  // useEffect(() => {
  //   const subscription = watch((values, { name, type }) => {
  //     console.log("Form values changed:", values);
  //     console.log("Change originated from:", name);
  //     console.log("Event type:", type);
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch]);

  // const categoryName = products
  //   .filter((product) =>
  //     product.productCategory.name.includes(selectedCategory)
  //   )
  //   .map((product) => product.name);
  // console.log(productOptions);
  return (
    <div className="product-details-form">
      <div className="product-details-form-row one">
        <div className="product-details-form-col product-category relative  ">
          <select
            {...register("categoryName")}
            className={`product-details-select ${
              !categoryname ? "text-tertiary" : "text-secondary"
            } `}
            id="categoryName"
          >
            <option
              value=""
              className="placeholder text-[#E0E0E0]"
              disabled
              selected
              hidden
            >
              Select related Category
            </option>
            {categories.map((category, index) => (
              <option className="value" value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
          <div className="product-details-arrow-container">
            <ChevronIcon className={'rotate-90 text-tertiary'}/>
          </div>
        </div>
        <div className="product-details-form-col relative">
          <div className="product-details-search-icon-container">
            <SeaarchIcon />
          </div>
          <select
            {...register("productName")}
            className={`product-name-select pl-4 `}
            onChange={(e) => {
              setSelectedProduct(e.target.value);
            }}
            id="productName"
          >
            <option
              value=""
              className="placeholder text-[#E0E0E0]"
              disabled
              selected
              hidden
            >
              Select Product
            </option>
            {produtsList.map((product, index) => (
              <option className="value" value={product.name} key={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-details-form-row two">
        <div className="product-details-form-col ">
          <input
            type="text"
            {...register("productMRP", {
              required: { value: true, message: "product MRP is required" },
            })}
            className="product-details-product-mrp "
            placeholder="Product MRP"
          />
          <p className="form-error">{errors.productMRP?.message}</p>
        </div>{" "}
        <div className="product-details-form-col relative">
          <div className="inner-section-two-col">
            <div className="product-detials-two-col relative">
              <select
                {...register("discountType")}
                className="product-details-select"
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
                {discountType.map((discount, index) => (
                  <option key={index} value={discount}>
                    {discount}
                  </option>
                ))}
              </select>
              <div className="product-details-arrow-container">
                <ChevronIcon className={'rotate-90 text-tertiary'}/>
              </div>
            </div>
            <div className="product-detials-two-col">
              <input
                type="number"
                {...register("discountValue")}
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
              required: { value: true, message: "Product Price Required" },
            })}
            className="product-details-product-mrp "
            placeholder="Product Price"
          />
        </div>
        <div className="product-details-form-col product-category relative ">
          <select
            {...register("unitOfMeasurement")}
            className="product-details-select"
            id=""
          >
            <option
              value=""
              className="placeholder text-[#E0E0E0]"
              disabled
              selected
              hidden
            >
              UOM(unit of measurement)
            </option>
            {unitOfMeasurement.map((uom) => (
              <option key={uom} value={uom}>
                {uom}
              </option>
            ))}
          </select>
          <div className="product-details-arrow-container">
            <ChevronIcon className={'rotate-90 text-tertiary'}/>
          </div>
        </div>
      </div>
      <div className="product-details-form-row four">
        <div className="product-details-form-col ">
          <input
            type="text"
            {...register("productSize", {
              required: { value: "true", message: "Product Size is Required" },
            })}
            className="product-details-product-mrp "
            placeholder="Product Size(Enter the size of each Product)"
          />
        </div>
        <div className="product-details-form-col ">
          <input
            type="text"
            {...register("abailableQuantity", {
              required: { value: true, message: "Available Quantity Required" },
            })}
            className="product-details-product-mrp "
            placeholder="Available Quantity"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsForm;
