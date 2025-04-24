import React from "react";
import "./NoProductAdded.css";
import noproductsimg from "../../assets/images/products/no-products.png";
import AddAProductBtn from "./AddAProductBtn";

const NoProductAdded = () => {
  return (
    <div className="noproducts-added">
      <div className="no-products">
        <img src={noproductsimg} alt="No Products" />
        <h2>No Product Added</h2>
        <p>
          It looks like you haven't added any products yet. Start adding
          products to see them here.
        </p>
        <AddAProductBtn />
      </div>
    </div>
  );
};

export default NoProductAdded;
