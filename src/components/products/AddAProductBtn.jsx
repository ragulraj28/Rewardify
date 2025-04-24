import React from "react";
import "./AddAProductBtn.css";

const AddAProductBtn = () => {
  return (
    <div className="addaproduct-btn">
      <button className="add-product-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <path
            d="M8.24805 6.61328V0.613281L6.24805 0.613281V6.61328H0.248047L0.248047 8.61328H6.24805V14.6133H8.24805V8.61328H14.248V6.61328H8.24805Z"
            fill="white"
          />
        </svg>
        Add a Product
      </button>
    </div>
  );
};

export default AddAProductBtn;
