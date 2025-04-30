import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteQuantity } from "../../../utils/slices/productSlice";
import Button from "../../common/button/Button";

const DeleteStock = ({ handleHidePopup }) => {
  const currentProduct = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const [action, setAction] = useState("");

  console.log("DeleteStock", currentProduct);
  function handleDeleteStock() {
    dispatch(
      deleteQuantity({
        productName: currentProduct.productName,
        newStock: action,
      })
    );
    handleHidePopup();
    console.log(currentProduct.productName);
  }
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center ">
      <div className="w-[450px] h-[330px] bg-white py-[28px] px-[31px] rounded-[10px] z-2">
        <h2 className="text-[24px] font-[600] text-center mb-[23px] capital ">
          Minus STOCK
        </h2>
        <p className="flex items-center gap-1">
          Product Name:
          <span className="font-semibold truncate w-[150px] block ">
            {currentProduct.productName}
          </span>
        </p>
        <p>
          Current Stock:{" "}
          <span className="font-semibold">
            {currentProduct.abailableQuantity}
          </span>
        </p>

        <input
          type="number"
          onChange={(e) => {
            setAction(e.target.value);
          }}
          className="border rounded-[6px]  border-border-color outline-none mt-15px w-full text-[14px] p-[15px] mb-[19px] mt-[12px]"
        />

        <Button
          btnText={"Update Stock"}
          btnStyle={`mb-[12px] ${action ? "fill" : "disabled"}`}
          onClick={handleDeleteStock}
        />

        <p className="cursor-pointer text-center" onClick={handleHidePopup}>
          Cancel
        </p>
      </div>
    </div>
  );
};

export default DeleteStock;
