import React, { useState } from "react";
import "./ProductPageSearchbar.css";

const ProductPageSearchbar = () => {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="product-page-searchbar">
      <div className="searchbar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="24"
          viewBox="0 0 27 24"
          fill="none"
        >
          <ellipse
            cx="12.3667"
            cy="11"
            rx="7.82866"
            ry="7"
            stroke="#33363F"
            stroke-opacity="0.5"
            stroke-width="2"
          />
          <path
            d="M22.432 20L19.0769 17"
            stroke="#33363F"
            stroke-opacity="0.5"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <input value={searchValue} placeholder="Search for products" />
      </div>
    </div>
  );
};

export default ProductPageSearchbar;
