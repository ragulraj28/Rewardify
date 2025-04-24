// src/features/orders/PreparingPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import OrderCard from './OrderCard';
import { pack } from '../../utils/slices/ordersSlice';
import './Orders.css';

export function PreparingPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector(s => s.customer);
  const orders   = useSelector(s => s.orders.preparing);

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
    return <Empty message="No Orders in Preparing Yet!!" />;
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
              { label: 'Order Placed',    date: o.date, time: o.time },
              { label: 'Order Confirmed', date: o.date, time: o.time }
            ]
          }}
          primaryText="Order Ready"
          showSecondary={false}
          onPrimaryClick={id => {
            dispatch(pack(id));
            navigate('packed');
          }}
        />
      ))}
    </div>
  );
}
