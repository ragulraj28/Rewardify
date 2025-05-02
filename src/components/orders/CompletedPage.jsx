import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";
import { LocationIcon, PhoneBlackIcon } from "../../assets/icons/icon";

const CompletedOrderCard = ({order}) => {
    return (
      <div className="packed-order-card order-card">
        <span className="label">Ready for delivery:</span>
        <div className="order-header"><p className="order-id">Order Id: {order.id}</p></div>
        <div className="order-details">
          <div className="customer-details">
            <p className="customer-name">{order.customerName}</p>
            <div className="address-wrapper">
              <p className="phone"><span className="icon"><PhoneBlackIcon /></span> {order.phone}</p>
              <p className="address"><span className="icon"><LocationIcon /></span> {order.address}</p>
            </div>
          </div>
          <div className="order-track">
            <div className="track delivery-pickup">
              <p><span className="active"></span>Delivery Pickup</p>
              <p className="time">-</p>
            </div>
            <div className="track delivered">
              <p><span className="active"></span>Delivered</p>
              <p className="time">{order.date}</p>
            </div>
          </div>
          <hr /> 
            <p className="order-total"><span>Total Bill Amount <span className="paid-by">PAID - UPI</span></span> <span className="total-price">₹{order.total}</span></p>
        </div>
      </div>
    )
  }

const CompletedPage = () => {
  const completedOrders = useSelector((state) => state.orders.completed);

  return (
    <div className="orders-container">
      {completedOrders.length > 0 ? (
        completedOrders.map((order) => (
          <CompletedOrderCard key={order.id} order={order}/>
        ))
      ) : (
        <p className="no-orders">No orders in Completed stage.</p>
      )}
    </div>
  );
};

export default CompletedPage;
