import React from "react";
import { LocationIcon, PhoneBlackIcon } from "../../assets/icons/icon";
import Button from "../common/button/Button";

const OrderCard = ({ order, btnConfig }) => {
  
  return (
    <div key={order.id} className="order-card">
          <div className="order-header">
            <p className="order-id">Order ID: <strong>{order.id}</strong></p>
            <p className="order-date">Date: {order.date}</p>
          </div>
          <div className="order-details">
            <div className="customer-details">
            <span className="label">Order for:</span>
              <p>{order.customerName}</p>
              <div className="address-wrapper">
                <p className="phone"><span className="icon"><PhoneBlackIcon /></span> {order.phone}</p>
                <p className="address"><span className="icon"><LocationIcon /></span> {order.address}</p>
              </div>
            </div>
            <div className="order-items">
              <span className="label">Order items:</span>
              {order.items.map((item, index) => (
                <p key={index} className="item"><span>{item.quantity} x {item.name}</span> <span className="price">₹{item.price}</span></p>
              ))}
            </div>
            <hr /> 
            <p className="order-total"><span>Total Bill Amount <span className="paid-by">PAID - UPI</span></span> <span className="total-price">₹{order.total}</span></p>
          </div>     
          <div className="order-buttons">
            {btnConfig?.map((btn, index) => <Button key={index} btnText={btn?.btnText} btnStyle={btn?.btnStyle} onClick={() => btn?.onClick(order.id)}/>)}
          </div>
        </div>
  );
};

export default OrderCard;
