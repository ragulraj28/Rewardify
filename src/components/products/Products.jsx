// import React, { useEffect } from "react";
import "./Products.css";
import ProductPageTemplate from "./ProductPageTemplate";
import ProductPageHeader from "./ProductPageHeader";
import ProductPageHeaderLeft from "./ProductPageHeaderLeft";
import ProductPageHeading from "./ProductPageHeading";
import AddAProductBtn from "./AddAProductBtn";
import ProductPageSearchbar from "./ProductPageSearchbar";
import Button from "../common/button/Button";
import { AddIcon, DownArrowIcon, UpArrowIcon } from "../../assets/icons/icon";
import api from "../../utils/axios/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  selectProduct,
  updateavAvailability,
} from "../../utils/slices/productSlice";
import NoProductAdded from "./NoProductAdded";
import AddStock from "./AddAproduct/AddStock";
import DeleteStock from "./AddAproduct/DeleteStock";
import DeleteProductStock from "./AddAproduct/DeleteProductStock";

import { usePopup } from "../../utils/popupContext/PopupContext";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stockProducts = useSelector((state) => state.products.stockProducts);
  const { accessToken } = useSelector( state => state.auth );
  const [isOpen, setIsOpen] = useState("");
  const { showPopup, hidePopup } = usePopup();
  const [selectedAction, setSelectedAction] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [accessToken]);

  const groupedProducts = stockProducts.reduce((acc, product) => {
    if (!acc[product.categoryName]) {
      acc[product.categoryName] = [];
    }
    acc[product.categoryName].push(product);
    return acc;
  }, {});

  const fetchProducts = async () => {

    try {
      const response = await api.post(`/v1/store-user/master/products/list`);
      dispatch(setProducts(response?.data?.data));
    } catch (err) {
      console.error("Error fetching data:", err);
    }

  };
  function handleAddProduct() {
    navigate("/add-product");
  }

  const toggleHandler = (product) => {
    // dispatch(updateAvailability(availability, productName));
    const updatedAvailability = !product.availability;
    dispatch(
      updateavAvailability({
        productName: product.productName,
        availability: updatedAvailability,
      })
    );
    // navigate("/products");
    // console.log(passedproduct.availability);
  };
  function handleHidePopup() {
    setSelectedAction("");
    dispatch(selectProduct(null));
    hidePopup();
  }

  const handleActionChange = (action, passedproduct) => {
    switch (action) {
      case "Edit Price":
        dispatch(selectProduct(passedproduct));
        console.log("passedproduct", passedproduct);
        navigate("/edit-product");
        break;
      case "Add Stock":
        dispatch(selectProduct(passedproduct));
        return showPopup(
          <AddStock product={passedproduct} handleHidePopup={handleHidePopup} />
        );

      case "Minus Stock":
        dispatch(selectProduct(passedproduct));
        return showPopup(
          <DeleteStock
            product={passedproduct}
            handleHidePopup={handleHidePopup}
          />
        );
      case "Delete product":
        dispatch(selectProduct(passedproduct));
        return showPopup(
          <DeleteProductStock
            product={passedproduct}
            handleHidePopup={handleHidePopup}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="products">
      <ProductPageHeader>
        <ProductPageHeaderLeft>
          <ProductPageHeading>My Product Listing</ProductPageHeading>
          {/* <AddAProductBtn /> */}
          <div className="max-w-[300px]">
            {stockProducts.length === 0 ? (
              ""
            ) : (
              <Button
                className="max-w-[300px] "
                btnText="Add a Product"
                icon={<AddIcon />}
                onClick={handleAddProduct}
              />
            )}
          </div>
        </ProductPageHeaderLeft>
        <ProductPageSearchbar />
      </ProductPageHeader>
      {stockProducts.length === 0 ? (
        <NoProductAdded />
      ) : (
        <>
          {Object.keys(groupedProducts).map((category) => (
            <div
              key={category}
              className="mb-6 border border-border-color p-5 rounded"
            >
              <div
                className="flex justify-between items-middle cursor-pointer"
                onClick={() => setIsOpen(isOpen === category ? "" : category)}
              >
                <div className="py-2">
                  <h2 className="text-2xl font-semibold">{category}</h2>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <button
                    onClick={() =>
                      setIsOpen(isOpen === category ? "" : category)
                    }
                  >
                    {isOpen === category ? <UpArrowIcon /> : <DownArrowIcon />}
                  </button>
                </div>
              </div>
              <div
                className={`space-y-4  ${
                  isOpen === category ? "block overflow-x-auto" : "hidden"
                }`}
              >
                <div className="product-listing-tablecontainer min-w-[856px]">
                  <div className="product-listing-table ">
                    <div className="table-productname-headerleft text-tertiary">
                      <h3 className="text-tertiary">Product Name</h3>
                    </div>
                    <div className="table-productname-headerright ">
                      <div className="producttable-rightheading">
                        <h3 className="text-tertiary">Price</h3>
                      </div>
                      <div className="producttable-rightheading">
                        <h3 className="text-tertiary">Avail. Quantity</h3>
                      </div>
                      <div className="producttable-rightheading">
                        <h3 className="text-tertiary">Availablity</h3>
                      </div>
                      <div className="producttable-rightheading">
                        <h3 className="text-tertiary">Action</h3>
                      </div>
                    </div>
                  </div>
                </div>
                {groupedProducts[category].map((product) => (
                  <div key={product.productName} className="py-4 rounded-md min-w-[856px]">
                    <div className="product-listing-table">
                      <div className="table-productname-headerleft ">
                        <h3 className="truncate  w-[100px] lg:w-[210px]">
                          {product.productName}
                        </h3>
                      </div>
                      <div className="table-productname-headerright">
                        <div className="producttable-rightheading">
                          <h3>₹{product.productPrice}</h3>
                        </div>
                        <div className="producttable-rightheading">
                          <h3>{product.abailableQuantity}</h3>

                          <p className="text-[12px] text-tertiary">
                            {product.unitOfMeasurement}
                          </p>
                        </div>
                        <div className="producttable-rightheading">
                          <button
                            onClick={() => toggleHandler(product)}
                            className={`relative inline-block w-12 h-6 rounded-full ${
                              product.availability
                                ? "bg-linear-to-r from-[#668D12] to-[#ACC43F] "
                                : "bg-gray-300"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 transform ${
                                product.availability
                                  ? "translate-x-6"
                                  : "translate-x-0"
                              }`}
                            ></span>
                          </button>
                        </div>
                        <div className="producttable-rightheading">
                          <select
                            value={selectedAction}
                            onChange={(e) => {
                              setSelectedAction(e.targetValue);
                              handleActionChange(e.target.value, product);
                            }}
                            className="border-border-color border-[1px] rounded-[8px] p-[10px]"
                          >
                            <option
                              value=""
                              disabled
                              selected
                              className="text-tertiary "
                            >
                              Action
                            </option>
                            <option
                              className="p-[2px] border bg-[#fff] hover:text-[#fff] hover:bg-[#668D12]"
                              value="Edit Price"
                            >
                              Edit Price
                            </option>
                            <option
                              className="p-[2px] border bg-[#fff] hover:text-[#fff] hover:bg-[#668D12]"
                              value="Add Stock"
                            >
                              Add Stock
                            </option>
                            <option
                              className="p-[2px] border bg-[#fff] hover:text-[#fff] hover:bg-[#668D12]"
                              value="Minus Stock"
                            >
                              Minus Stock
                            </option>
                            <option
                              className="p-[2px] border bg-[#fff] hover:text-[#fff] hover:bg-[#668D12]"
                              value="Delete product"
                            >
                              Delete product
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
