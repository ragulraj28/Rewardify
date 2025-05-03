import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToCompleted, rejectPackedOrder } from "../../utils/slices/ordersSlice";
import { LocationIcon, PhoneBlackIcon } from "../../assets/icons/icon";

const PackedOrderCard = ({order}) => {
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
          <div className="track store-confirmation">
            <p><span className="active"></span>Store Confirmation</p>
            <p className="time">{order.date}</p>
          </div>
          <div className="track delivery-accepted">
            <p><span className="active"></span>Delivery Accepted</p>
            <p className="time">-</p>
          </div>
          <div className="track delivery-pickup">
            <p><span className="active"></span>Delivery Pickup</p>
            <p className="time">-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const PackedPage = () => {
  const dispatch = useDispatch();
  const packedOrders = useSelector((state) => state.orders.packed);

  const handleComplete = (id) => {
    dispatch(moveToCompleted(id));
  };

  const handleReject = (id) => {
    dispatch(rejectPackedOrder(id));
  };

  return (
    <div className="orders-container">
      {packedOrders.length > 0 ? (
        packedOrders.map((order) => (
          <PackedOrderCard key={order.id} order={order}/>
          // <div key={order.id} className="order-card">
          //   <div className="order-header">
          //     <div>
          //       <p className="order-id">Order ID: {order.id}</p>
          //       <p className="order-date">Date: {order.date}</p>
          //     </div>
          //     <div className="order-actions">
          //       <button className="confrim-button" onClick={() => handleComplete(order.id)}>Mark as Completed</button>
          //       <button className="reject-button" onClick={() => handleReject(order.id)}>Reject Order</button>
          //     </div>
          //   </div>
          //   <div className="order-details">
          //     <p><strong>Customer:</strong> {order.customerName}</p>
          //     <p><strong>Phone:</strong> {order.phone}</p>
          //     <p><strong>Address:</strong> {order.address}</p>
          //     <div className="order-items">
          //       <p><strong>Items:</strong></p>
          //       <ul>
          //         {order.items.map((item, idx) => (
          //           <li key={idx}>{item.quantity} x {item.name} - ₹{item.price}</li>
          //         ))}
          //       </ul>
          //     </div>
          //     <p className="order-total"><strong>Total:</strong> ₹{order.total}</p>
          //   </div>
          // </div>
        ))
      ) : (
        <p className="no-orders">No orders in Packed stage.</p>
      )}
    </div>
  );
};

export default PackedPage;
