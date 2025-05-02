import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToPacked, rejectPreparingOrder } from "../../utils/slices/ordersSlice";
import "./Orders.css";
import OrderCard from "./OrderCard";

const PreparingPage = () => {
  const dispatch = useDispatch();
  const preparingOrders = useSelector((state) => state.orders.preparing);

  function getFormattedDateTime() {
      const now = new Date();
    
      const options = {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
    
      const formatted = now.toLocaleString('en-US', options);
      return formatted.replace(',', '').replace(',', ' |');
    }

  const handlePack = (id) => {
    dispatch(moveToPacked(id));
  };

  const handleReject = (id) => {
    dispatch(rejectPreparingOrder(id));
  };

  const buttonConfig = [{
    btnText : "Verify & Pack Items",
    btnStyle : "fill",
    onClick : handlePack
  }]

  return (
    <div className="orders-container">
      {preparingOrders.map((order) => (
        <OrderCard key={order.id} order={order} btnConfig={buttonConfig}/>
      ))}
    </div>
  );
};

export default PreparingPage;
