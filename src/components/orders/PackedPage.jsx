// src/features/orders/PackedPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import OrderCard from './OrderCard';
import { deliver } from '../../utils/slices/ordersSlice';
import './Orders.css';

export function PackedPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector(s => s.customer);
  const orders   = useSelector(s => s.orders.packed);

  function Empty({ message }) {
    return (
      <div className="orders-empty">
        <img
          src="/assets/icons/empty-orders.svg"
          alt="No Orders"
          className="empty-illustration"
        />
        <h3>{message}</h3>
        <p>Your store hasn’t received any orders. Your first sale is just around the corner!</p>
      </div>
    );
  }

  if (!orders.length) {
    return <Empty message="No Packed Orders Yet!!" />;
  }

  return (
    <div className="orders-grid">
      {orders.map(o => (
        <OrderCard
          key={o.id}
          order={{
            ...o,
            customer,
            deliveryAddress: customer.address,
            timeline: [
              { label: 'Store Confirmation', date: o.date, time: o.time },
              { label: 'Delivery Accepted',  date: o.date, time: o.time },
              { label: 'Delivery Pickup',    date: o.date, time: o.time }
            ]
          }}
          primaryText="Mark Delivered"
          showSecondary={false}
          onPrimaryClick={id => {
            dispatch(deliver(id));
            navigate('completed');
          }}
        />
      ))}
    </div>
  );
}
