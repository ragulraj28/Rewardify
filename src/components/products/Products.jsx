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
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../utils/slices/productSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    // const res = await api.fetch(
    //   `https://rewardify.dotcod.in/api/v1/store-user/master/products/list`
    // );
    // console.log(res);

    try {
      const response = await api.post(`/v1/store-user/master/products/list`);
      // console.log(response?.data?.data);
      console.log(response?.data?.data);
      dispatch(setProducts(response?.data?.data));
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  function handleAddProduct() {
    console.log("button clicked");
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
    </div>
  );
};

export default Products;
