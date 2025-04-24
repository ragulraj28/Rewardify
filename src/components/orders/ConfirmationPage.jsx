// src/features/orders/ConfirmationPage.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import OrderCard from './OrderCard';
import { confirm, reject } from '../../utils/slices/ordersSlice';
import './Orders.css';

export function ConfirmationPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customer = useSelector(s => s.customer);
  const orders   = useSelector(s => s.orders.confirmation);

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
          order={{ ...o, customer, deliveryAddress: customer.address }}
          primaryText="Confirm Order"
          secondaryText="Reject Order"
          showSecondary
          onPrimaryClick={id => {
            dispatch(confirm(id));
            navigate('preparing');
          }}
          onSecondaryClick={id => dispatch(reject(id))}
        />
      ))}
    </div>
  );
}
