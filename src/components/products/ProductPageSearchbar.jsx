import React, { useState } from "react";
import { SeaarchIcon } from "../../assets/icons/icon";

const ProductPageSearchbar = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="product-page-searchbar">
      <div className="searchbar">
        <SeaarchIcon />
        <input value={searchValue} placeholder="Search for products" />
      </div>
    </div>
  );
};

export default ProductPageSearchbar;
