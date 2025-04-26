import React, { useEffect, useState } from "react";
import "./ProductDetailsForm.css";
import { useSelector } from "react-redux";
import { useFormContext, useWatch } from "react-hook-form";

const product_category = [
  "Fruits & Vegetable's",
  "Dairy, Bread and Eggs",
  "Snacks and Biscuits",
  "Atta, Dal and Rice",
  "Dry fruits and Masala",
  "Tea, Coffee and more",
  "Chocolate and Desserts",
];
const ProductDetailsForm = () => {
  const { register, control, getValues, watch } = useFormContext();
  const [selected, setSelected] = useState("");
  const { allProducts } = useSelector((state) => state.products);
  const [products, setProducts] = useState(allProducts);

  const categories = [
    ...new Set(products.map((data) => data?.productCategory?.name)),
  ];
  // const selectedCategory = useWatch({ control, name: "categoryName" });
  // console.log(selectedCategory);

  const categoryname = watch("categoryName");

  useEffect(() => {
    if (categoryname) {
      console.log("Selected Category:", categoryname);
    }
  }, [categoryname]);

  // useEffect(() => {
  //   if (categoryName) {
  //     console.log("Selected Category:", categoryName);
  //   }
  // }, [categoryName]);

  const produtsList = products
    .filter((product) => product.productCategory.name.includes(categoryname))
    .map((product) => product.name);

  // const categoryName = products
  //   .filter((product) =>
  //     product.productCategory.name.includes(selectedCategory)
  //   )
  //   .map((product) => product.name);
  // console.log(productOptions);
  return (
    <div className="product-details-form">
      <div className="product-details-form-row one">
        <div className="product-details-form-col product-category relative w-64 ">
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
          <select
            {...register("productName")}
            className={`product-name-select pl-4 ${
              selected === "" ? "text-[#bebebe]" : "text-[#000]"
            } `}
            onChange={(e) => setSelected(e.target.value)}
            id=""
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
            {produtsList.map((productname, index) => (
              <option className="value" value={productname} key={index}>
                {productname}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="product-details-form-row two">
        <div className="product-details-form-col ">
          <input
            type="text"
            className="product-details-product-mrp "
            placeholder="Product MRP"
          />
        </div>
        <div className="product-details-form-col relative">
          <div className="inner-section-two-col">
            <div className="product-detials-two-col relative">
              <select
                name="product_category"
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
                {product_category.map((category, index) => (
                  <option key={index}>{category}</option>
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
                type="text"
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
            className="product-details-product-mrp "
            placeholder="Product Price"
          />
        </div>
        <div className="product-details-form-col product-category relative w-64 ">
          <select
            name="product_category"
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
            {product_category.map((category, index) => (
              <option key={index}>{category}</option>
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
      </div>
      <div className="product-details-form-row four">
        <div className="product-details-form-col ">
          <input
            type="text"
            className="product-details-product-mrp "
            placeholder="Product Size(Enter the size of each Product)"
          />
        </div>
        <div className="product-details-form-col ">
          <input
            type="text"
            className="product-details-product-mrp "
            placeholder="Available Quantity"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsForm;
