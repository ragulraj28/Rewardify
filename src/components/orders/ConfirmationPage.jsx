import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToPreparing, rejectConfirmationOrder } from "../../utils/slices/ordersSlice";
import { LocationIcon, PhoneBlackIcon } from "../../assets/icons/icon";
import Button from "../common/button/Button";
import OrderCard from "./OrderCard";

const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const confirmationOrders = useSelector((state) => state.orders.confirmation);

  const handleConfirm = (id) => {
    dispatch(moveToPreparing(id));
  };

  const handleReject = (id) => {
    dispatch(rejectConfirmationOrder(id));
  };

  const buttonConfig = [
    {
      btnText : "Reject Order",
      btnStyle: "outline",
      onClick : handleReject
    },
    {
      btnText : "Confirm Order",
      btnStyle: "fill",
      onClick : handleConfirm 
    }
  ]

  return (
    <div className="orders-container">
      {confirmationOrders.map((order) => (
        <OrderCard key={order.id} order={order} btnConfig={buttonConfig}/>
      ))}
    </div>
  );
};

export default ConfirmationPage;
