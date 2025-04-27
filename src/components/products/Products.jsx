// import React, { useEffect } from "react";
import "./Products.css";
import ProductPageTemplate from "./ProductPageTemplate";
import ProductPageHeader from "./ProductPageHeader";
import ProductPageHeaderLeft from "./ProductPageHeaderLeft";
import ProductPageHeading from "./ProductPageHeading";
import AddAProductBtn from "./AddAProductBtn";
import ProductPageSearchbar from "./ProductPageSearchbar";
import Button from "../common/button/Button";
import { AddIcon } from "../../assets/icons/icon";
import api from "../../utils/axios/axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../utils/slices/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stockProducts = useSelector((state) => state.products.stockProducts);
  const [isOpen, setIsOpen] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products:", stockProducts);

  const groupedProducts = stockProducts.reduce((acc, product) => {
    if (!acc[product.categoryName]) {
      acc[product.categoryName] = [];
    }
    acc[product.categoryName].push(product);
    return acc;
  }, {});

  const fetchProducts = async () => {
    // const res = await api.fetch(
    //   `https://rewardify.dotcod.in/api/v1/store-user/master/products/list`
    // );
    // console.log(res);

    try {
      const response = await api.post(`/v1/store-user/master/products/list`);
      // console.log(response?.data?.data);
      // console.log(response?.data?.data);
      dispatch(setProducts(response?.data?.data));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  function handleAddProduct() {
    // console.log("button clicked");
    navigate("/add-product");
  }
  return (
    <div className="products">
      <ProductPageHeader>
        <ProductPageHeaderLeft>
          <ProductPageHeading>My Product Listing</ProductPageHeading>
          {/* <AddAProductBtn /> */}
          <Button
            btnText="Add a Product"
            icon={<AddIcon />}
            onClick={handleAddProduct}
          />
        </ProductPageHeaderLeft>
        <ProductPageSearchbar />
      </ProductPageHeader>
      <div>
        {Object.keys(groupedProducts).map((category) => (
          <div
            key={category}
            className="mb-6 border border-primary p-2 rounded"
          >
            <div
              className="flex justify-between items-middle cursor-pointer"
              onClick={() => setIsOpen(isOpen === category ? "" : category)}
            >
              <div className="p-2">
                <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              </div>
              <div className="p-2">
                <button
                  onClick={() => setIsOpen(isOpen === category ? "" : category)}
                >
                  {isOpen === category ? "^" : "V"}
                </button>
              </div>
            </div>
            <div
              className={`space-y-4 ${
                isOpen === category ? "block" : "hidden"
              }`}
            >
              {groupedProducts[category].map((product) => (
                <div
                  key={product.productName}
                  className="p-4 border rounded-md shadow-sm"
                >
                  <div className="flex">
                    <h3 className="font-medium">{product.productName}</h3>
                  </div>

                  <div>
                    <p>{product.productDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
