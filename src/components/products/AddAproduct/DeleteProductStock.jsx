import { useDispatch, useSelector } from "react-redux";
import { deleteStockProduct } from "../../../utils/slices/productSlice";
import Button from "../../common/button/Button";
import { DeleteIcon } from "../../../assets/icons/icon";

const DeleteProductStock = ({ handleHidePopup }) => {
  const currentProduct = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  function handleDeleteStock() {
    dispatch(deleteStockProduct(currentProduct.productName));
    handleHidePopup();
  }
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center ">
      <div className="w-[450px] h-[330px] bg-white py-[28px] px-[31px] rounded-[10px] z-2">
        <div className="flex item-center justify-center -mt-[70px]">
          <div className="w-[100px] h-[100px] bg-[#F2F8DF]  flex items-center justify-center rounded-full">
            <DeleteIcon />
          </div>
        </div>
        <h2 className="text-[24px] font-[600] text-center mb-[23px] ">
          Please Confirm
        </h2>
        <p className=" text-center mb-[32px] ">
          Do you really want to delete the product?
        </p>

        <Button
          btnText={"Delete"}
          btnStyle="fill"
          onClick={handleDeleteStock}
        />

        <p
          className="cursor-pointer text-center mt-[16px]"
          onClick={handleHidePopup}
        >
          Cancel
        </p>
      </div>
    </div>
  );
};

export default DeleteProductStock;
