// src/features/orders/CompletedPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OrderCard from './OrderCard';
import { reject } from '../../utils/slices/ordersSlice';
import './Orders.css';

export function CompletedPage() {
  const dispatch = useDispatch();
  const customer = useSelector(s => s.customer);
  const orders   = useSelector(s => s.orders.completed);

  // Inline Empty helper
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
    return <Empty message="No Orders Received Yet!!" />;
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
              { label: 'Delivery pickup', date: o.date, time: o.time },
              { label: 'Delivered',       date: o.date, time: o.time }
            ]
          }}
          primaryText="Approve Order"
          secondaryText="Reject Order"
          showSecondary
          isCompleted
          onPrimaryClick={id => {/* your approve logic */}}
          onSecondaryClick={id => dispatch(reject(id))}
        />
      ))}
    </div>
  );
}
