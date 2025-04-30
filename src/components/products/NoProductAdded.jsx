import React from "react";
import "./NoProductAdded.css";
import noproductsimg from "../../assets/images/products/no-products.png";
import AddAProductBtn from "./AddAProductBtn";
import Button from "../common/button/Button";
import { useNavigate } from "react-router";
import { AddIcon } from "../../assets/icons/icon";

const NoProductAdded = () => {
  const navigate = useNavigate();
  return (
    <div className="noproducts-added">
      <div className="no-products">
        <img src={noproductsimg} alt="No Products" />
        <h2>No Product Added</h2>
        <p>
          It looks like you haven't added any products yet. Start adding
          products to see them here.
        </p>
        {/* <AddAProductBtn /> */}
        <Button
          className="max-w-[300px] "
          btnText="Add a Product"
          icon={<AddIcon />}
          onClick={() => {
            navigate("/add-product");
          }}
        />
      </div>
    </div>
  );
};

export default NoProductAdded;
